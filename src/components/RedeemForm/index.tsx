import { DataSource, TokenValue } from "@beanstalk/sdk";
import { useCallback, useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronsRight,
  ChevronUp,
  HelpCircle,
} from "react-feather";
import { NumericFormat } from "react-number-format";
import ENVIRONMENT from "../../config";
import useAppStore from "../../store";
import { displayBN } from "../../util/bigNumber";
import RedeemSettingsPopver from "../RedeemSettingsPopover";
import TooltipIcon from "../TooltipIcon";
import * as S from "./styled";
import { AnimatePresence, motion } from "framer-motion";
import { IRedeemFormState } from "../../interfaces/mintForm";
import Loading from "../Loading";
import { TOKENS } from "../../interfaces/token";
import { calculateRoot } from "../../util/root";
import { ISiloDeposit } from "../../interfaces/siloDeposit";
import debounce from "lodash.debounce";
import useRedeem from "../../hooks/useRedeem";
import { SignedPermit } from "@beanstalk/sdk/dist/types/lib/permit";
import { toast } from "react-hot-toast";

export default function RedeemForm() {
  const [openTx, setOpenTx] = useState(false);
  const {
    redeemFormState,
    onChangeRedeemFormStateField,
    onResetRedeemFormState,
    account,
    erc20Contracts,
    beanstalkSdk,
    onGetConnectedUserBalance,
  } = useAppStore(
    ({
      redeemFormState,
      onChangeRedeemFormStateField,
      onResetRedeemFormState,
      account,
      erc20Contracts,
      beanstalkSdk,
      onGetConnectedUserBalance,
    }) => ({
      redeemFormState,
      onChangeRedeemFormStateField,
      onResetRedeemFormState,
      account,
      erc20Contracts,
      beanstalkSdk,
      onGetConnectedUserBalance,
    })
  );
  const [redeemState, setRedeemState] = useState({
    output: "0",
    loading: false,
    rootAmount: TokenValue.fromHuman("0", 18),
    maxRootsIn: TokenValue.fromHuman("0", TOKENS["BEAN DEPOSIT"].decimals),
    priceImpact: TokenValue.fromHuman("0", TOKENS["BEAN DEPOSIT"].decimals),
    deposits: [] as ISiloDeposit[],
  });
  const [permit, setPermit] = useState<SignedPermit | undefined>(undefined);

  const { redeemBeanDepositWithRoot, redeemBeanDepositAndWithdrawWithRoot } =
    useRedeem();

  const calculateEstimate = useCallback(
    debounce(async (redeemFormState: IRedeemFormState) => {
      try {
        if (!account) {
          throw new Error("account not found");
        }

        // Validate
        if (redeemFormState.redeemAmount === "") {
          throw new Error("Invalid input");
        }

        // Get root data
        const [
          rootTotalSupply,
          rootUnderlyingBdvBefore,
          rootStalkBefore,
          rootSeedsBefore,
        ] = await Promise.all([
          erc20Contracts[ENVIRONMENT.rootContractAddress]
            .totalSupply()
            .then((v: any) => TokenValue.fromBlockchain(v, 18)), // automaticaly pulls as TokenValue
          erc20Contracts[ENVIRONMENT.rootContractAddress]
            .underlyingBdv()
            .then((v: any) => TokenValue.fromBlockchain(v, 6)), // automaticaly pulls as TokenValue
          beanstalkSdk.silo.balanceOfStalk(
            ENVIRONMENT.rootContractAddress,
            true
          ),
          beanstalkSdk.silo.balanceOfSeeds(ENVIRONMENT.rootContractAddress),
        ]);

        const deposits: ISiloDeposit[] = [];

        const balances = await beanstalkSdk.silo.getBalances(
          ENVIRONMENT.rootContractAddress,
          {
            source: DataSource.LEDGER,
          }
        );
        balances
          .get(beanstalkSdk.tokens.BEAN)
          ?.deposited.crates.forEach((crate) => {
            console.log(crate.season.toString(), crate.amount.toHuman());
            deposits.push({
              season: crate.season,
              amount: crate.amount,
              bdv: crate.bdv,
              stalk: crate.stalk,
              seeds: crate.seeds,
            });
          });

        console.log("ALL DEPOSITS");

        // Sort to get the best bdv to stalk ratio (lower the better)
        deposits.sort((a, b) => {
          const aRatio = a.stalk.div(a.bdv);
          const bRatio = b.stalk.div(b.bdv);
          if (aRatio.gt(bRatio)) {
            return 1;
          } else if (bRatio.gt(aRatio)) {
            return -1;
          }
          return 0;
        });

        let redeemAmountRemaining = TokenValue.fromHuman(
          redeemFormState.redeemAmount,
          18
        );
        const redeemDeposits: ISiloDeposit[] = [];

        for (let i = 0; i < deposits.length; i++) {
          const deposit = deposits[i];
          const result = calculateRoot(
            deposit.stalk,
            deposit.seeds,
            deposit.bdv,
            rootTotalSupply,
            rootUnderlyingBdvBefore,
            rootStalkBefore,
            rootSeedsBefore,
            false
          );

          if (!result) {
            continue;
          }

          // Partial
          if (result.amount.gt(redeemAmountRemaining)) {
            redeemDeposits.push({
              season: deposit.season,
              amount: deposit.amount.mulDiv(
                redeemAmountRemaining,
                result.amount
              ),
              bdv: deposit.bdv.mulDiv(redeemAmountRemaining, result.amount),
              stalk: deposit.stalk.mulDiv(redeemAmountRemaining, result.amount),
              seeds: deposit.seeds.mulDiv(redeemAmountRemaining, result.amount),
            });
            redeemAmountRemaining = redeemAmountRemaining.sub(
              redeemAmountRemaining
            );
          } else {
            redeemAmountRemaining = redeemAmountRemaining.sub(result.amount);
            redeemDeposits.push(deposit);
          }

          if (redeemAmountRemaining.eq(0)) {
            break;
          }
        }

        let totalStalkFromDeposits = TokenValue.fromHuman("0", 10);
        let totalSeedsFromDeposits = TokenValue.fromHuman("0", 6);
        let totalBdvFromDeposits = TokenValue.fromHuman("0", 6);

        redeemDeposits.forEach((deposit) => {
          totalBdvFromDeposits = totalBdvFromDeposits.add(deposit.bdv);
          totalStalkFromDeposits = totalStalkFromDeposits.add(deposit.stalk);
          totalSeedsFromDeposits = totalSeedsFromDeposits.add(deposit.seeds);
        });

        const result = calculateRoot(
          totalStalkFromDeposits,
          totalSeedsFromDeposits,
          totalBdvFromDeposits,
          rootTotalSupply,
          rootUnderlyingBdvBefore,
          rootStalkBefore,
          rootSeedsBefore,
          false
        );

        if (!result) {
          throw new Error("No bean deposit output");
        }

        const totalSlipage = TokenValue.fromHuman(redeemFormState.slippage, 18);

        setRedeemState((state) => ({
          ...state,
          loading: false,
          output: displayBN(
            result.amount,
            TOKENS["BEAN DEPOSIT"].formatDecimals
          ),
          deposits: redeemDeposits,
          maxRootsIn: result.amount.add(
            result.amount.mul(totalSlipage.mul(10)).div(1000)
          ),
        }));
      } catch (e) {
        setRedeemState((state) => ({
          ...state,
          loading: false,
          output: "0",
          maxRootsIn: TokenValue.fromHuman("0", 18),
          deposits: [],
        }));
      }
    }, 500),
    [beanstalkSdk, account]
  );

  const resetState = () => {
    onResetRedeemFormState();
    onGetConnectedUserBalance();
  };

  const renderRedeemText = () => {
    if (!account) {
      return "Connect Wallet";
    }
    if (redeemState.output !== "0") {
      if (!redeemFormState.redeemToWallet) {
        return "Coming Soon!"
        // if (!permit) {
        //   return "Allow Root to use your Root";
        // }
      }
    }

    return "REDEEM";
  };

  const onRedeem = async () => {
    if (!account) {
      return;
    }
    if (redeemState.loading || redeemState.output === "0") {
      return;
    }

    if (redeemFormState.redeemToWallet) {
      try {
        await redeemBeanDepositWithRoot(
          redeemState.deposits,
          redeemState.maxRootsIn
        );
        resetState();
      } catch (e) {}
      return;
    }

    return;

    // if (!permit) {
    //   try {
    //     const permit = await beanstalkSdk.permit.sign(
    //       account!.address,
    //       beanstalkSdk.tokens.permitERC2612(
    //         account!.address, // owner
    //         beanstalkSdk.contracts.beanstalk.address, // spender
    //         beanstalkSdk.tokens.ROOT, // root
    //         TokenValue.fromHuman(
    //           redeemFormState.redeemAmount,
    //           18
    //         ).toBlockchain() // amount of roots
    //       )
    //     );
    //     setPermit(permit);
    //     return;
    //   } catch (e: any) {
    //     toast.error(e.reason);
    //     return;
    //   }
    // }

    // await redeemBeanDepositAndWithdrawWithRoot(
    //   permit,
    //   TokenValue.fromHuman(redeemFormState.redeemAmount, 18),
    //   redeemState.deposits,
    //   redeemState.maxRootsIn
    // ).then(resetState);
    return;
  };

  useEffect(() => {
    onResetRedeemFormState();
    return () => {
      onResetRedeemFormState();
    };
  }, []);

  useEffect(() => {
    setRedeemState((state) => ({
      ...state,
      loading: true,
    }));
    setPermit(undefined);
    calculateEstimate(redeemFormState);
  }, [redeemFormState]);

  const tokenBalance =
    account?.balances.get(ENVIRONMENT.rootContractAddress) ||
    TokenValue.fromHuman("0", 18);

  const redeemAmount = TokenValue.fromHuman(
    redeemFormState.redeemAmount || "0",
    18
  );

  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <S.Phase>
        <div className="group">
          <div className="header">
            <div>REDEEM AMOUNT</div>
            <RedeemSettingsPopver />
          </div>
          <S.ContentContainer>
            <div className="inputContainer">
              <NumericFormat
                decimalScale={2}
                placeholder="0"
                id="rootAmount"
                thousandSeparator
                valueIsNumericString
                allowNegative={false}
                isAllowed={(v) => {
                  if (v.floatValue) {
                    return !TokenValue.fromHuman(v.floatValue, 18).gt(
                      tokenBalance
                    );
                  }
                  return true;
                }}
                value={redeemFormState.redeemAmount}
                onValueChange={(e) => {
                  onChangeRedeemFormStateField("redeemAmount", e.value);
                }}
              />
              <div className="rootContainer">
                <img width={14} height={14} src="/root.svg" />
                <div>Root</div>
              </div>
            </div>
          </S.ContentContainer>
          <AnimatePresence>
            {account && (
              <motion.div
                key="content"
                initial="collapsed"
                className="infoContainer"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: {
                    opacity: 0,
                    height: 0,
                    overflow: "hidden",
                  },
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
              >
                <div />
                <div className="balance">
                  <span>Balance: {displayBN(tokenBalance, 2)}</span>{" "}
                  <button
                    onClick={() =>
                      onChangeRedeemFormStateField(
                        "redeemAmount",
                        displayBN(tokenBalance, 2).replaceAll(",", "")
                      )
                    }
                  >
                    Max
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </S.Phase>

      {redeemFormState.redeemToWallet ? (
        <>
          <S.Phase>
            <div className="group">
              <div className="header">
                <div>REDEEM AMOUNT</div>
              </div>
              <S.ContentContainer $isLoading={redeemState.loading}>
                <div className="inputContainer">
                  <NumericFormat
                    decimalScale={2}
                    placeholder="0"
                    id="rootAmount"
                    thousandSeparator
                    valueIsNumericString
                    allowNegative={false}
                    readOnly
                    value={redeemState.output}
                  />
                  <div className="rootContainer">
                    <img
                      width={14}
                      height={14}
                      src="/silo.svg"
                      style={{ marginRight: 2, marginTop: 3 }}
                    />
                    <img
                      width={14}
                      height={14}
                      src="/bean.svg"
                      style={{ marginTop: 3 }}
                    />
                    <div>Bean Deposit</div>
                  </div>
                </div>
              </S.ContentContainer>
            </div>
          </S.Phase>
        </>
      ) : (
        <>
          <S.Phase>
            <div className="group">
              <div className="header">
                <div>CLAIMABLE AMOUNT</div>
              </div>
              <S.ContentContainer $isLoading={redeemState.loading}>
                <div className="inputContainer">
                  <NumericFormat
                    decimalScale={2}
                    placeholder="0"
                    id="rootAmount"
                    thousandSeparator
                    valueIsNumericString
                    allowNegative={false}
                    readOnly
                    value={redeemState.output}
                  />
                  <div className="rootContainer">
                    <img
                      width={14}
                      height={14}
                      src="/bean.svg"
                      style={{ marginTop: 3 }}
                    />
                    <div>
                      cBean{" "}
                      <TooltipIcon text="cBean represents the Beans that underly the Deposits that are Redeemed for Roots and then Withdrawn from the Beanstalk Silo. Withdrawals from the Beanstalk Silo are Claimable at the top of the next hour.">
                        <HelpCircle size={14} color="#838383" />
                      </TooltipIcon>
                    </div>
                  </div>
                </div>
              </S.ContentContainer>
            </div>
          </S.Phase>

          <S.Phase>
            <S.Info>
              You can Claim your claimable Bean at the start of the next hour.
            </S.Info>
          </S.Phase>
        </>
      )}

      <AnimatePresence initial={false}>
        {redeemState.output !== "0" && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: {
                opacity: 0,
                height: 0,
                overflow: "hidden",
              },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            <S.Phase>
              <S.TxDetails>
                <S.TxHeader
                  active={openTx}
                  className="header"
                  onClick={() => {
                    setOpenTx((t) => !t);
                  }}
                >
                  <div className="content">
                    <img src="/tx.svg" />
                    <span>Transaction details</span>
                  </div>
                  {openTx ? (
                    <ChevronUp size={14} color="#999999" />
                  ) : (
                    <ChevronDown size={14} color="#999999" />
                  )}
                </S.TxHeader>
                <AnimatePresence initial={false}>
                  {openTx && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      className="collapse"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: {
                          opacity: 0,
                          height: 0,
                          overflow: "hidden",
                        },
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <div>
                        {redeemState.loading && (
                          <div className="loading">
                            <Loading />
                          </div>
                        )}
                        <div className="row">
                          <div>
                            Maximum Root{" "}
                            <TooltipIcon text="The maximum amount you are willing to redeem. If the price slips any further, your transaction will revert.">
                              <HelpCircle size={16} color="#3D3D3D" />
                            </TooltipIcon>
                          </div>
                          <div>
                            {redeemState.maxRootsIn.gte(tokenBalance)
                              ? displayBN(redeemAmount, 2)
                              : displayBN(redeemState.maxRootsIn, 2)}
                          </div>
                        </div>
                        {/* <div className="row">
                          <div>
                            Price Impact{" "}
                            <TooltipIcon text="The impact your trade has on the market price of this pool. There may be a large difference between the amount of your input token and what you will receive in the output token">
                              <HelpCircle size={16} color="#3D3D3D" />
                            </TooltipIcon>
                          </div>
                          <div>{displayBN(redeemState.priceImpact, 2)}%</div>
                        </div> */}
                        <div className="routes">
                          <div className="line" />
                          <div className="list">
                            <div className="token">
                              <img width={25} height={25} src="/root.svg" />
                            </div>
                            <div className="to">
                              <ChevronsRight color="#b0b0b0" size={16} />
                            </div>
                          </div>

                          <div className="token">
                            {redeemFormState.redeemToWallet && (
                              <img width={25} height={25} src="/silo.svg" />
                            )}
                            <img width={25} height={25} src="/bean.svg" />
                          </div>
                        </div>
                        <div className="routesText">
                          {redeemFormState.redeemToWallet ? (
                            <p>
                              Use {displayBN(redeemAmount, 2)} Root to redeem
                              for {redeemState.output} Bean Deposit
                            </p>
                          ) : (
                            <p>
                              Use {displayBN(redeemAmount, 2)} Root to redeem
                              for {redeemState.output} cBean
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </S.TxDetails>
            </S.Phase>
          </motion.div>
        )}
      </AnimatePresence>

      <S.MintButton
        disabled={redeemState.loading || redeemState.output === "0" || !redeemFormState.redeemToWallet}
        onClick={onRedeem}
      >
        {renderRedeemText()}
      </S.MintButton>
    </S.Form>
  );
}
