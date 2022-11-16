import { FarmFromMode, FarmToMode, Token, TokenValue } from "@beanstalk/sdk";
import { SignedPermit } from "@beanstalk/sdk/dist/types/lib/permit";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronsRight,
  ChevronUp,
  HelpCircle,
} from "react-feather";
import { NumericFormat } from "react-number-format";
import { IClaimFormState } from "../../interfaces/mintForm";
import { TOKENS } from "../../interfaces/token";
import useAppStore from "../../store";
import { displayBN } from "../../util/bigNumber";
import Loading from "../Loading";
import TooltipIcon from "../TooltipIcon";
import ClaimRow from "./ClaimRow";
import ClaimSettingsPopver from "./ClaimSettingsPopover";
import * as S from "./styled";
import { toast } from "react-hot-toast";
import useClaim from "../../hooks/useClaim";
import { ISiloClaimable } from "../../interfaces/siloDeposit";
import debounce from "lodash.debounce";
import TokenPickerModal from "../TokenPickerModal";
import { BigNumber } from "@ethersproject/bignumber";

export default function ClaimForm() {
  const [openTokenPicker, setOpenTokenPicker] = useState(false);
  const [openTx, setOpenTx] = useState(false);
  const {
    claimFormState,
    onChangeClaimFormStateField,
    onResetClaimFormState,
    account,
    beanstalkSdk,
    onGetConnectedUserBalance,
  } = useAppStore(
    ({
      claimFormState,
      onChangeClaimFormStateField,
      onResetClaimFormState,
      account,
      beanstalkSdk,
      onGetConnectedUserBalance,
    }) => ({
      claimFormState,
      onChangeClaimFormStateField,
      onResetClaimFormState,
      account,
      beanstalkSdk,
      onGetConnectedUserBalance,
    })
  );
  const [permit, setPermit] = useState<SignedPermit | undefined>(undefined);

  const [claimState, setClaimState] = useState({
    output: "0",
    loading: false,
    minOut: TokenValue.fromHuman("0", 18),
    seasons: [] as BigNumber[],
  });

  const { claimBeanDepositAndSwap, claimWithdrawals } = useClaim();

  const calculateEstimate = useCallback(
    debounce(async (claimFormState: IClaimFormState) => {
      try {
        if (!account) {
          throw new Error("account not found");
        }

        const amountIn =
          account?.claimableDeposits.reduce((prev, claimable) => {
            return prev.add(claimable.amount);
          }, TokenValue.fromHuman("0", TOKENS["BEAN DEPOSIT"].decimals)) ||
          TokenValue.fromHuman("0", TOKENS["BEAN DEPOSIT"].decimals);

        // Validate
        if (claimableTokenAmount.eq(0)) {
          throw new Error("Invalid input");
        }

        const seasons: BigNumber[] = [];

        account.claimableDeposits.forEach((claim) => {
          seasons.push(claim.season);
        });

        if (claimFormState.claimToken.token.symbol === "BEAN") {
          setClaimState((state) => ({
            ...state,
            loading: false,
            output: displayBN(
              amountIn,
              claimFormState.claimToken.token.formatDecimals
            ),
            minOut: amountIn,
            seasons,
          }));
          return;
        }

        let tokenIn = beanstalkSdk.tokens.BEAN;
        let tokenOut: Token = beanstalkSdk.tokens.ETH;

        switch (claimFormState.claimToken.token.symbol) {
          case TOKENS.USDC.symbol:
            tokenOut = beanstalkSdk.tokens.USDC;
            break;
          case TOKENS.USDT.symbol:
            tokenOut = beanstalkSdk.tokens.USDT;
            break;
          case TOKENS.DAI.symbol:
            tokenOut = beanstalkSdk.tokens.DAI;
            break;
          case TOKENS.ETH.symbol:
            tokenOut = beanstalkSdk.tokens.ETH;
            break;
          case TOKENS.WETH.symbol:
            tokenOut = beanstalkSdk.tokens.WETH;
            break;
          default:
            throw new Error("Token not supported!");
        }

        const swapOp = beanstalkSdk.swap.buildSwap(
          tokenIn,
          tokenOut,
          account!.address,
          FarmFromMode.EXTERNAL,
          FarmToMode.EXTERNAL
        );
        if (!swapOp.isValid())
          throw new Error("Cannot swap between selected tokens");
        const est = await swapOp.estimate(amountIn);
        console.log("est: ", est.toHuman());

        const totalSlipage = TokenValue.fromHuman(
          claimFormState.slippage,
          TOKENS["BEAN DEPOSIT"].decimals
        );

        setClaimState((state) => ({
          ...state,
          loading: false,
          output: displayBN(est, tokenOut.displayDecimals),
          minOut: est.sub(est.mul(totalSlipage.mul(10)).div(1000)),
          seasons,
        }));
      } catch (e) {
        setClaimState((state) => ({
          ...state,
          loading: false,
          output: "0",
          minOut: TokenValue.fromHuman("0", 18),
          seasons: [],
        }));
      }
    }, 500),
    [account, beanstalkSdk]
  );

  const renderClaimText = () => {
    if (!account) {
      return "Connect Wallet";
    }
    if (claimState.output !== "0") {
      if (claimFormState.claimToken.token.symbol === "BEAN") {
        return "CLAIM";
      }
      if (!permit) {
        return "Allow Root to use your Bean";
      }
    }

    return "CLAIM";
  };

  const onClaim = async () => {
    if (claimState.loading || claimState.output === "0") {
      return;
    }

    if (claimFormState.claimToken.token.symbol === "BEAN") {
      await claimWithdrawals(beanstalkSdk.tokens.BEAN, claimState.seasons).then(
        resetState
      );
      return;
    }

    if (!permit) {
      try {
        const permit = await beanstalkSdk.permit.sign(
          account!.address,
          beanstalkSdk.tokens.permitERC2612(
            account!.address, // owner
            beanstalkSdk.contracts.beanstalk.address, // spender
            beanstalkSdk.tokens.BEAN, // root
            TokenValue.fromHuman(
              claimFormState.claimAmount,
              TOKENS.BEAN.decimals
            ).toBlockchain() // amount of roots
          )
        );
        setPermit(permit);
        return;
      } catch (e: any) {
        toast.error(e.reason);
        return;
      }
    }

    let tokenOut: Token = beanstalkSdk.tokens.ETH;
    switch (claimFormState.claimToken.token.symbol) {
      case TOKENS.USDC.symbol:
        tokenOut = beanstalkSdk.tokens.USDC;
        break;
      case TOKENS.USDT.symbol:
        tokenOut = beanstalkSdk.tokens.USDT;
        break;
      case TOKENS.DAI.symbol:
        tokenOut = beanstalkSdk.tokens.DAI;
        break;
      case TOKENS.ETH.symbol:
        tokenOut = beanstalkSdk.tokens.ETH;
        break;
      case TOKENS.WETH.symbol:
        tokenOut = beanstalkSdk.tokens.WETH;
        break;
      default:
        throw new Error("Token not supported!");
    }

    await claimBeanDepositAndSwap(
      permit,
      beanstalkSdk.tokens.BEAN,
      TokenValue.fromHuman(claimFormState.claimAmount, TOKENS.BEAN.decimals),
      claimState.seasons,
      tokenOut,
      parseFloat(parseFloat(claimFormState.slippage).toFixed(2))
    ).then(resetState);
    return;
  };

  const resetState = () => {
    onResetClaimFormState();
    onGetConnectedUserBalance();
  };

  useEffect(() => {
    onResetClaimFormState();

    return () => {
      onResetClaimFormState();
    };
  }, []);

  useEffect(() => {
    setClaimState((state) => ({
      ...state,
      loading: true,
    }));
    setPermit(undefined);

    calculateEstimate(claimFormState);
  }, [claimFormState, account]);

  const claimableTokenAmount =
    account?.claimableDeposits.reduce((prev, claimable) => {
      return prev.add(claimable.amount);
    }, TokenValue.fromHuman("0", TOKENS["BEAN DEPOSIT"].decimals)) ||
    TokenValue.fromHuman("0", TOKENS["BEAN DEPOSIT"].decimals);

  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <S.Phase>
        <div className="group">
          <div className="header">
            <div>CLAIMABLE AMOUNT</div>
            <ClaimSettingsPopver />
          </div>
          <div className="contentContainer">
            <div className="inputContainer">
              <NumericFormat
                decimalScale={2}
                placeholder="0"
                id="rootAmount"
                thousandSeparator
                valueIsNumericString
                allowNegative={false}
                value={displayBN(
                  claimableTokenAmount,
                  TOKENS["BEAN DEPOSIT"].formatDecimals
                )}
                readOnly={true}
                // onValueChange={(e) => {
                //   onChangeClaimFormStateField("claimAmount", e.value);
                // }}
                // isAllowed={(v) => {
                //   if (v.floatValue) {
                //     return !TokenValue.fromHuman(
                //       v.floatValue,
                //       TOKENS["BEAN DEPOSIT"].decimals
                //     ).gt(claimableTokenAmount);
                //   }
                //   return true;
                // }}
              />
              <div className="rootContainer">
                <img width={14} height={14} src="/bean.svg" />
                <div>cBean</div>
              </div>
            </div>
          </div>
          {/* <AnimatePresence>
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
                  <span>
                    Claimable Balance:{" "}
                    {displayBN(
                      claimableTokenAmount,
                      TOKENS["BEAN DEPOSIT"].formatDecimals
                    )}
                  </span>{" "}
                  <button
                    onClick={() =>
                      onChangeClaimFormStateField(
                        "claimAmount",
                        displayBN(
                          claimableTokenAmount,
                          TOKENS["BEAN DEPOSIT"].formatDecimals
                        ).replaceAll(",", "")
                      )
                    }
                  >
                    Max
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence> */}
        </div>
      </S.Phase>

      <S.Phase>
        <div className="group">
          <div className="header">
            <div>CLAIM TO</div>
          </div>
          <S.Row $loading={claimState.loading}>
            <div className="inputContainer">
              <S.Input
                placeholder="0"
                id="rootAmount"
                thousandSeparator
                decimalScale={claimFormState.claimToken.token.formatDecimals}
                valueIsNumericString
                allowNegative={false}
                readOnly
                value={claimState.output}
              />
              <div className="pickerContainer">
                <button onClick={() => setOpenTokenPicker(true)}>
                  <div>
                    <img
                      width={14}
                      height={14}
                      src={claimFormState.claimToken.token.icon}
                    />
                    <div>{claimFormState.claimToken.token.symbol}</div>
                  </div>
                  <ChevronDown size={14} color="#999999" />
                </button>
              </div>
            </div>
          </S.Row>
        </div>
      </S.Phase>

      <AnimatePresence initial={false}>
        {claimState.output !== "0" && (
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
                        {claimState.loading && (
                          <div className="loading">
                            <Loading />
                          </div>
                        )}
                        <div className="row">
                          <div>
                            Minimum Output{" "}
                            <TooltipIcon text="The minimum amount you are guaranteed to receive. If the price slips any further, your transaction will revert.">
                              <HelpCircle size={16} color="#3D3D3D" />
                            </TooltipIcon>
                          </div>
                          <div>
                            {displayBN(
                              claimState.minOut,
                              claimFormState.claimToken.token.formatDecimals
                            )}
                          </div>
                        </div>
                        <div className="routes">
                          <div className="line" />
                          <div className="list">
                            <div className="token">
                              <img width={25} height={25} src="/bean.svg" />
                            </div>
                            <div className="to">
                              <ChevronsRight color="#b0b0b0" size={16} />
                            </div>
                          </div>
                          <div className="token">
                            <img
                              width={25}
                              height={25}
                              src={claimFormState.claimToken.token.icon}
                            />
                          </div>
                        </div>
                        <div className="routesText">
                          <p>
                            Claim{" "}
                            {displayBN(
                              TokenValue.fromHuman(
                                claimFormState.claimAmount || "0",
                                TOKENS["BEAN DEPOSIT"].decimals
                              ),
                              TOKENS["BEAN DEPOSIT"].formatDecimals
                            )}{" "}
                            cBean
                          </p>
                          <p>
                            Swap{" "}
                            {displayBN(
                              TokenValue.fromHuman(
                                claimFormState.claimAmount || "0",
                                TOKENS["BEAN DEPOSIT"].decimals
                              ),
                              TOKENS["BEAN DEPOSIT"].formatDecimals
                            )}{" "}
                            cBean for {claimState.output}{" "}
                            {claimFormState.claimToken.token.name}
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
        disabled={claimState.loading || claimState.output === "0"}
        onClick={onClaim}
      >
        {renderClaimText()}
      </S.MintButton>

      <TokenPickerModal
        claim
        excludes={["BEAN DEPOSIT"]}
        open={openTokenPicker}
        onClose={() => setOpenTokenPicker(false)}
        onSelect={(newToken) => {
          onChangeClaimFormStateField("claimToken", {
            ...claimFormState.claimToken,
            token: newToken,
          });
        }}
      />
    </S.Form>
  );
}
