import {
  DataSource,
  FarmFromMode,
  FarmToMode,
  TokenValue,
  Workflow,
} from "@beanstalk/sdk";
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
import TransactionToast from "../Common/TransactionToast";
import { ethers } from "ethers";
import RedeemRow from "./RedeemRow";
import { estimateRootToBean } from "../../util/uniswap";

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
    needAllowance: false,
    needInternalAllowance: false,
    internalAmount: TokenValue.fromHuman("0", 18),
    amountOutMinimum: TokenValue.fromHuman("0", 18),
  });
  const [permit, setPermit] = useState<SignedPermit | undefined>(undefined);

  const {
    redeemBeanDepositWithRoot,
    redeemBeanDepositWithInternalRoot,
    redeemBeanWithRoot,
    redeemERC20WithRoot,
  } = useRedeem();

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

        const totalSlipage = TokenValue.fromHuman(redeemFormState.slippage, 18);

        // Check if user is using internal balance
        const rootAmount = TokenValue.fromHuman(
          redeemFormState.redeemAmount,
          18
        );
        const rootBalance = account!.tokenBalances.get(
          beanstalkSdk.tokens.ROOT
        );

        let needAllowance = false;
        let needInternalAllowance = false;
        let internalAmount = TokenValue.fromHuman(
          "0",
          beanstalkSdk.tokens.ROOT.decimals
        );

        const allowance = await beanstalkSdk.tokens.ROOT.getAllowance(
          account!.address,
          beanstalkSdk.contracts.depot.address
        );

        needAllowance = allowance.lt(rootAmount);

        // Using both external and internal to redeem
        // Need to check allowance for both external/internal for depot
        if (rootBalance && rootAmount.gt(rootBalance.external)) {
          let internalAllowance = TokenValue.fromHuman(
            "0",
            beanstalkSdk.tokens.ROOT.decimals
          );

          if (rootAmount.gt(rootBalance.external)) {
            internalAllowance = TokenValue.fromBlockchain(
              await beanstalkSdk.contracts.beanstalk.tokenAllowance(
                account!.address,
                beanstalkSdk.contracts.depot.address,
                beanstalkSdk.tokens.ROOT.address
              ),
              beanstalkSdk.tokens.ROOT.decimals
            );
            internalAmount = rootAmount.sub(rootBalance.external);
          }

          needInternalAllowance = internalAllowance.lt(internalAmount);
        }

        // If Redeem for BEAN
        if (redeemFormState.redeemToken.symbol === "BEAN") {
          console.log("redeeming for bean");
          const { beanOutput, priceImpact } = await estimateRootToBean(
            rootAmount
          );
          setRedeemState(() => ({
            amountOutMinimum: TokenValue.fromBlockchain(
              Workflow.slip(
                beanOutput.toBigNumber(),
                parseFloat(redeemFormState.slippage)
              ),
              redeemFormState.redeemToken.decimals
            ),
            priceImpact: TokenValue.fromHuman(priceImpact, 6),
            rootAmount,
            loading: false,
            output: displayBN(
              beanOutput,
              redeemFormState.redeemToken.formatDecimals
            ),
            deposits: [],
            maxRootsIn: TokenValue.fromBlockchain(
              Workflow.slip(
                rootAmount.toBigNumber(),
                parseFloat(redeemFormState.slippage)
              ),
              redeemFormState.redeemToken.decimals
            ),
            needInternalAllowance,
            internalAmount,
            needAllowance,
          }));
          return;
        }

        // If Redeem for non silo deposit
        if (redeemFormState.redeemToken.symbol !== "BEAN DEPOSIT") {
          console.log("redeem for non silo deposit");

          // Estimate root to bean
          const { beanOutput, priceImpact } = await estimateRootToBean(
            rootAmount
          );
          console.log("Bean Estimated:", beanOutput.toHuman(), priceImpact);

          // Bean to output token
          const swap = beanstalkSdk.swap.buildSwap(
            beanstalkSdk.tokens.BEAN,
            beanstalkSdk.tokens[redeemFormState.redeemToken.symbol],
            account.address,
            FarmFromMode.EXTERNAL,
            FarmToMode.EXTERNAL
          );

          const erc20Estimate = await swap.estimate(beanOutput);
          console.log("erc20:", erc20Estimate.toHuman());
          setRedeemState(() => ({
            amountOutMinimum: TokenValue.fromBlockchain(
              Workflow.slip(
                erc20Estimate.toBigNumber(),
                parseFloat(redeemFormState.slippage)
              ),
              redeemFormState.redeemToken.decimals
            ),
            priceImpact: TokenValue.fromHuman(priceImpact, 6),
            rootAmount,
            loading: false,
            output: displayBN(
              erc20Estimate,
              redeemFormState.redeemToken.formatDecimals
            ),
            deposits: [],
            maxRootsIn: TokenValue.fromBlockchain(
              Workflow.slip(
                rootAmount.toBigNumber(),
                parseFloat(redeemFormState.slippage)
              ),
              redeemFormState.redeemToken.decimals
            ),
            needInternalAllowance,
            internalAmount,
            needAllowance,
          }));
          return;
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
            // console.log(crate.season.toString(), crate.amount.toHuman());
            deposits.push({
              season: crate.season,
              amount: crate.amount,
              bdv: crate.bdv,
              stalk: crate.stalk,
              seeds: crate.seeds,
            });
          });

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
        let totalAmount = TokenValue.fromHuman("0", 6);

        redeemDeposits.forEach((deposit) => {
          totalAmount = totalAmount.add(deposit.amount);
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

        setRedeemState(() => ({
          amountOutMinimum: TokenValue.fromHuman("0", 18),
          priceImpact: TokenValue.fromHuman("0", 18),
          rootAmount: TokenValue.fromHuman(redeemFormState.redeemAmount, 18),
          loading: false,
          output: displayBN(totalAmount, TOKENS["BEAN DEPOSIT"].formatDecimals),
          deposits: redeemDeposits,
          maxRootsIn: result.amount.add(
            result.amount.mul(totalSlipage.mul(10)).div(1000)
          ),
          needInternalAllowance,
          internalAmount,
          needAllowance: internalAmount.gt(0) ? needAllowance : false,
        }));
      } catch (e) {
        setRedeemState(() => ({
          needAllowance: false,
          amountOutMinimum: TokenValue.fromHuman("0", 18),
          priceImpact: TokenValue.fromHuman("0", 18),
          rootAmount: TokenValue.fromHuman("0", 18),
          internalAmount: TokenValue.fromHuman("0", 18),
          needInternalAllowance: false,
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
    if (redeemState.loading) {
      return <Loading size={20} />;
    }
    if (redeemState.output !== "0") {
    }

    if (redeemState.needInternalAllowance) {
      return "Approve Root Farm Balance";
    }
    if (redeemState.needAllowance) {
      return "Approve Root";
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

    if (redeemState.needInternalAllowance) {
      const txToast = new TransactionToast({
        loading: `Approving Root Farm Balance...`,
        success: "Approve successful.",
      });

      try {
        const approval = await beanstalkSdk.contracts.beanstalk.approveToken(
          beanstalkSdk.contracts.depot.address, // DEPOT is the spender
          beanstalkSdk.tokens.ROOT.address,
          ethers.constants.MaxUint256
        );
        txToast.confirming(approval);
        const receipt = await approval.wait();
        txToast.success(receipt);
        calculateEstimate(redeemFormState);
      } catch (e) {
        txToast.error(e);
      }

      return;
    }

    if (redeemState.needAllowance) {
      const txToast = new TransactionToast({
        loading: `Approving Root...`,
        success: "Approve successful.",
      });

      try {
        const approval = await beanstalkSdk.contracts.root.approve(
          beanstalkSdk.contracts.depot.address, // DEPOT is the spender
          ethers.constants.MaxUint256
        );
        txToast.confirming(approval);
        const receipt = await approval.wait();
        txToast.success(receipt);
        calculateEstimate(redeemFormState);
      } catch (e) {
        txToast.error(e);
      }

      return;
    }

    if (redeemFormState.redeemToken.symbol === "BEAN") {
      try {
        await redeemBeanWithRoot(
          redeemState.rootAmount,
          redeemState.internalAmount,
          redeemState.amountOutMinimum,
          redeemFormState.redeemToWallet
            ? FarmToMode.EXTERNAL
            : FarmToMode.INTERNAL
        );
        resetState();
        return;
      } catch (e) {}
    } else if (redeemFormState.redeemToken.symbol === "BEAN DEPOSIT") {
      try {
        if (redeemState.internalAmount.gt(0)) {
          await redeemBeanDepositWithInternalRoot(
            redeemState.rootAmount,
            redeemState.deposits,
            redeemState.maxRootsIn,
            redeemState.internalAmount
          );
          resetState();
          return;
        }
        await redeemBeanDepositWithRoot(
          redeemState.deposits,
          redeemState.maxRootsIn
        );
        resetState();
        return;
      } catch (e) {}
    } else if (redeemFormState.redeemToken.symbol === "ETH") {
      toast.error("ETH not supported");
      return;
    }

    const symbol = redeemFormState.redeemToken.symbol as
      | "BEAN"
      | "USDC"
      | "USDT"
      | "DAI"
      | "WETH";

    // Redeem to ERC20 with root
    try {
      await redeemERC20WithRoot(
        redeemState.rootAmount,
        redeemState.internalAmount,
        beanstalkSdk.tokens[symbol],
        redeemState.amountOutMinimum,
        redeemFormState.redeemToWallet
          ? FarmToMode.EXTERNAL
          : FarmToMode.INTERNAL
      );
      resetState();
    } catch (e) {}
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

  const internalBalance =
    account?.tokenBalances.get(beanstalkSdk.tokens.ROOT)?.internal ||
    TokenValue.fromHuman("0", beanstalkSdk.tokens.ROOT.decimals);
  const externalBalance =
    account?.tokenBalances.get(beanstalkSdk.tokens.ROOT)?.external ||
    TokenValue.fromHuman("0", beanstalkSdk.tokens.ROOT.decimals);
  const tokenBalance =
    account?.tokenBalances.get(beanstalkSdk.tokens.ROOT)?.total ||
    TokenValue.fromHuman("0", beanstalkSdk.tokens.ROOT.decimals);

  const redeemAmount = TokenValue.fromHuman(
    redeemFormState.redeemAmount || "0",
    beanstalkSdk.tokens.ROOT.decimals
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
                  <TooltipIcon
                    width={300}
                    placement="bottom-center"
                    element={
                      <S.BalanceHover>
                        <div>
                          <b>Circulating Balance</b>:{" "}
                          {displayBN(externalBalance, 2)} Root
                        </div>

                        <div>
                          <b>Farm Balance</b>: {displayBN(internalBalance, 2)}{" "}
                          Root{" "}
                        </div>
                        <hr />
                        <p>
                          The Root UI first spends the balance that is most
                          gas-efficient based on the specified amount.
                        </p>
                        <p>
                          For more information{" "}
                          <a
                            href="https://docs.bean.money/guides/balances/understand-my-balances#farm-balance-circulating-balance"
                            target="_blank"
                          >
                            click here
                          </a>
                          .
                        </p>
                      </S.BalanceHover>
                    }
                  >
                    <span>Balance: {displayBN(tokenBalance, 2)}</span>
                  </TooltipIcon>
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

      <S.Phase>
        <div className="group">
          <div className="header">
            <div>REDEEM TO</div>
          </div>
          <RedeemRow
            loading={redeemState.loading}
            output={redeemState.output}
          />
          {/* <S.ContentContainer $isLoading={redeemState.loading}>
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
                </div>
              </S.ContentContainer>
            </div>
          </S.Phase>
          <S.Phase style={{ marginTop: -10 }}>
            <S.StalkSeeds>
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
                    value={redeemState.deposits
                      .reduce((curr, prev) => {
                        return curr.add(prev.stalk);
                      }, TokenValue.fromHuman("0", 10))
                      .toHuman()}
                  />
                  <div className="rootContainer">
                    <TooltipIcon text="Stalk is the governance token of the Beanstalk DAO. Stalk entitles holders to passive interest in the form of a share of future Bean mints, and the right to propose and vote on BIPs. Your Stalk is forfeited when you Withdraw your Deposited assets from the Silo.">
                      <>
                        <img
                          width={14}
                          height={14}
                          src="/stalk.svg"
                          style={{ marginTop: 1 }}
                        />
                        <img />
                        <div>Stalk</div>
                      </>
                    </TooltipIcon>
                  </div>
                </div>
              </S.ContentContainer>
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
                    value={redeemState.deposits
                      .reduce((curr, prev) => {
                        return curr.add(prev.seeds);
                      }, TokenValue.fromHuman("0", 6))
                      .toHuman()}
                  />
                  <div className="rootContainer">
                    <TooltipIcon text="Seeds are illiquid tokens that yield 1/10,000 Stalk each Season. Your Seeds is forfeited when you Withdraw your Deposited assets from the Silo.">
                      <>
                        <img
                          width={14}
                          height={14}
                          src="/seeds.svg"
                          style={{ marginTop: 3 }}
                        />
                        <div>Seed</div>
                      </>
                    </TooltipIcon>
                  </div>
                </div>
              </S.ContentContainer>
            </S.StalkSeeds>
          </S.Phase>
          
          <S.Phase>
            <S.Info>
              You can claim your Bean Deposits using the{" "}
              <a
                href="https://app.bean.money/#/silo/0xbea0000029ad1c77d3d5d23ba2d8893db9d1efab?action=withdraw"
                target="_blank"
              >
                Beanstalk UI
              </a>
              .
            </S.Info>
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
                      <img width={14} height={14} src={"/bean.svg"} />
                      <div>BEAN</div>
                    </div>
                    <ChevronDown size={14} color="#999999" />
                  </button>
                </div>
              </S.ContentContainer> */}
        </div>
      </S.Phase>

      {redeemFormState.redeemToken.symbol === "BEAN DEPOSIT" && (
        <>
          <S.Phase style={{ marginTop: -10 }}>
            <S.StalkSeeds>
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
                    value={redeemState.deposits
                      .reduce((curr, prev) => {
                        return curr.add(prev.stalk);
                      }, TokenValue.fromHuman("0", 10))
                      .toHuman()}
                  />
                  <div className="seedContainer">
                    <TooltipIcon text="Stalk is the governance token of the Beanstalk DAO. Stalk entitles holders to passive interest in the form of a share of future Bean mints, and the right to propose and vote on BIPs. Your Stalk is forfeited when you Withdraw your Deposited assets from the Silo.">
                      <>
                        <img
                          width={14}
                          height={14}
                          src="/stalk.svg"
                          style={{ marginTop: 1 }}
                        />
                        <img />
                        <div>Stalk</div>
                      </>
                    </TooltipIcon>
                  </div>
                </div>
              </S.ContentContainer>
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
                    value={redeemState.deposits
                      .reduce((curr, prev) => {
                        return curr.add(prev.seeds);
                      }, TokenValue.fromHuman("0", 6))
                      .toHuman()}
                  />
                  <div className="seedContainer">
                    <TooltipIcon text="Seeds are illiquid tokens that yield 1/10,000 Stalk each Season. Your Seeds is forfeited when you Withdraw your Deposited assets from the Silo.">
                      <>
                        <img
                          width={14}
                          height={14}
                          src="/seeds.svg"
                          style={{ marginTop: 3 }}
                        />
                        <div>Seed</div>
                      </>
                    </TooltipIcon>
                  </div>
                </div>
              </S.ContentContainer>
            </S.StalkSeeds>
          </S.Phase>
          <S.Phase>
            <S.Info>
              You can claim your Bean Deposits using the{" "}
              <a
                href="https://app.bean.money/#/silo/0xbea0000029ad1c77d3d5d23ba2d8893db9d1efab?action=withdraw"
                target="_blank"
              >
                Beanstalk UI
              </a>
              .
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
                        {redeemFormState.redeemToken.symbol ===
                        "BEAN DEPOSIT" ? (
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
                        ) : (
                          <div className="row">
                            <div>
                              Minimum Output{" "}
                              <TooltipIcon text="The minimum amount you are guaranteed to receive. If the price slips any further, your transaction will revert.">
                                <HelpCircle size={16} color="#3D3D3D" />
                              </TooltipIcon>
                            </div>
                            <div>
                              {/* <img width={16} height={16} src="/root.svg" /> */}
                              {displayBN(
                                redeemState.amountOutMinimum,
                                redeemFormState.redeemToken.formatDecimals
                              )}
                            </div>
                          </div>
                        )}

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
                            {redeemFormState.redeemToken.symbol ===
                              "BEAN DEPOSIT" && (
                              <img width={25} height={25} src="/silo.svg" />
                            )}
                            <img
                              width={25}
                              height={25}
                              src={redeemFormState.redeemToken.icon}
                            />
                          </div>
                        </div>
                        <div className="routesText">
                          {redeemFormState.redeemToken.symbol ===
                          "BEAN DEPOSIT" ? (
                            <p>
                              Use {displayBN(redeemAmount, 2)} Root to redeem
                              for {redeemState.output} Bean Deposit
                            </p>
                          ) : (
                            <p>
                              Swap {displayBN(redeemAmount, 2)} Root
                              for {redeemState.output}{" "}
                              {redeemFormState.redeemToken.symbol}
                            </p>
                          )}
                          <p>
                            Transfer {redeemState.output}{" "}
                            {redeemFormState.redeemToken.name} to{" "}
                            {redeemFormState.redeemToWallet ||
                            redeemFormState.redeemToken.symbol ===
                              "BEAN DEPOSIT"
                              ? "your wallet"
                              : "Beanstalk Farm Balance"}
                          </p>
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
        disabled={redeemState.loading || redeemState.output === "0"}
        onClick={onRedeem}
      >
        {renderRedeemText()}
      </S.MintButton>
    </S.Form>
  );
}
