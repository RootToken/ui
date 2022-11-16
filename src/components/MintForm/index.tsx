import { useCallback, useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronsRight,
  ChevronUp,
  HelpCircle,
  X,
} from "react-feather";
import { NumericFormat } from "react-number-format";
import useAppStore from "../../store";
import MintSettingsPopover from "../MintSettingsPopover";
import TokenPickerModal from "../TokenPickerModal";
import TooltipIcon from "../TooltipIcon";
import MintRow from "./MintRow";
import * as S from "./styled";
import debounce from "lodash.debounce";
import {
  IMintFormState,
  IMintFormToken,
  ISwapToken,
} from "../../interfaces/mintForm";
import Loading from "../Loading";
import {
  FarmFromMode,
  FarmToMode,
  TokenValue,
  Workflow,
  ERC20Token,
} from "@beanstalk/sdk";
import { BigNumber } from "@ethersproject/bignumber";
import { ITokenSymbol, TOKENS } from "../../interfaces/token";
import { displayBN } from "../../util/bigNumber";
import { AnimatePresence, motion } from "framer-motion";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import TransactionToast from "../Common/TransactionToast";
import { SignedPermit } from "@beanstalk/sdk/dist/types/lib/permit";
import useMintWorkflow from "../../hooks/useMintWorkflow";
import { DepositCrate } from "@beanstalk/sdk/dist/types/lib/silo";
import useSWR from "swr";
import { getAPY } from "../../api/subgraph";

export default function MintForm() {
  const { data: apys } = useSWR("getApy", getAPY);
  const [openTx, setOpenTx] = useState(false);
  const [openPicker, setOpenPicker] = useState(false);
  const [mintState, setMintState] = useState({
    loading: false,
    output: "0",
    minRootsOut: TokenValue.fromHuman("0", 18),
    priceImpact: TokenValue.fromHuman("0", 18),
    swaps: [] as ISwapToken[],
    workflow: undefined as undefined | Workflow | null,
    seasons: [] as BigNumber[],
    amounts: [] as BigNumber[],
    totalBeanIntoSilo: "",
    totalBdvFromDeposits: "",
    bdvImpacted: false,
  });
  const [permit, setPermit] = useState<SignedPermit | undefined>(undefined);

  const {
    mintRootsWithSwappedBean: getMintStrategy,
    mintRootsWithBeanDeposit,
  } = useMintWorkflow();

  const {
    mintFormState,
    onChangeMintFormStateField,
    onResetMintFormState,
    beanstalkSdk,
    account,
    onGetConnectedUserBalance,
    erc20Contracts,
  } = useAppStore(
    ({
      mintFormState,
      onChangeMintFormStateField,
      onResetMintFormState,
      beanstalkSdk,
      account,
      erc20Contracts,
      onGetConnectedUserBalance,
    }) => ({
      beanstalkSdk,
      mintFormState,
      onChangeMintFormStateField,
      onResetMintFormState,
      account,
      onGetConnectedUserBalance,
      erc20Contracts,
    })
  );

  const getTokensSwapRate = (
    tokens: IMintFormToken[]
  ): Promise<ISwapToken[]> => {
    return Promise.all(
      tokens.map(async (token): Promise<ISwapToken> => {
        try {
          const spender = beanstalkSdk.contracts.depot.address;
          const symbol = token.token.symbol as
            | "BEAN"
            | "USDC"
            | "USDT"
            | "DAI"
            | "ETH"
            | "WETH";
          const tokenIn = beanstalkSdk.tokens[symbol];
          const amount = tokenIn.fromHuman(token.amount);
          const allowance = await tokenIn.getAllowance(
            account!.address,
            spender
          );

          const strategy = getMintStrategy(
            tokenIn,
            FarmFromMode.EXTERNAL,
            FarmToMode.EXTERNAL
          );

          if (!strategy) throw new Error("Failed to build workflow");

          const { swap, workflow } = strategy;
          const amountOut = await workflow.estimate(amount);
          const est = beanstalkSdk.tokens.ROOT.fromBlockchain(amountOut);
          const needAllowance = allowance
            ? allowance.lt(amount.toBigNumber())
            : false;

          return {
            token,
            tokenIn,
            estimated: est,
            estimatedWithSlippage: est.sub(
              est.mul(parseFloat(token.slippage) * 10).div(1000)
            ),
            swap,
            workflow,
            needAllowance,
          };
        } catch (e: any) {
          console.log(e);
          throw e;
        }
      })
    );
  };

  const calculate = useCallback(
    debounce(async (state: IMintFormState) => {
      try {
        if (!account) {
          throw new Error("account not found");
        }

        // Validate
        if (
          state.mintTokens.filter((token) => token.amount === "").length > 0
        ) {
          throw new Error("Invalid input");
        }

        const underlyingBdv = await beanstalkSdk.root.underlyingBdv();
        const totalSupply = await beanstalkSdk.tokens.ROOT.getTotalSupply();

        // If Bean deposit
        if (state.mintTokens[0].token.symbol === "BEAN DEPOSIT") {
          // Find the best crate
          let amountRemaining = TokenValue.fromHuman(
            state.mintTokens[0].amount,
            TOKENS["BEAN DEPOSIT"].decimals
          );
          let totalBeanFromDeposit = TokenValue.fromHuman(
            "0",
            beanstalkSdk.tokens.BEAN.decimals
          );
          let deposits: DepositCrate<TokenValue>[] = [];
          const accountDeposits =
            account.siloBalances.get(beanstalkSdk.tokens.BEAN)?.deposited
              .crates || [];
          for (let i = accountDeposits.length - 1; i >= 0; i--) {
            const deposit = accountDeposits[i];
            if (deposit.amount.gt(amountRemaining)) {
              deposits.push({
                season: deposit.season,
                amount: amountRemaining,
                bdv: amountRemaining,
                stalk: deposit.stalk.mulDiv(amountRemaining, deposit.amount),
                grownStalk: deposit.grownStalk.mulDiv(
                  amountRemaining,
                  deposit.amount
                ),
                baseStalk: deposit.baseStalk.mulDiv(
                  amountRemaining,
                  deposit.amount
                ),
                seeds: deposit.seeds.mulDiv(amountRemaining, deposit.amount),
              });
              totalBeanFromDeposit = totalBeanFromDeposit.add(amountRemaining);
              amountRemaining = amountRemaining.sub(deposit.amount);
            } else {
              deposits.push(deposit);
              totalBeanFromDeposit = totalBeanFromDeposit.add(deposit.amount);
              amountRemaining = amountRemaining.sub(deposit.amount);
            }
            if (amountRemaining.lte(0)) {
              break;
            }
          }

          const result = await beanstalkSdk.root.estimateRoots(
            beanstalkSdk.tokens.BEAN,
            deposits,
            true
          );

          const total = deposits.reduce((v, n) => {
            return n.bdv.add(v);
          }, TokenValue.fromHuman("0", 6));

          console.log(
            underlyingBdv
              .add(total)
              .mulDiv(
                TokenValue.fromHuman("1", 18),
                totalSupply.add(result.amount)
              )
              .mul(result.amount)
              .toHuman()
          );

          let priceImpact = TokenValue.fromHuman("0", 18);
          let bdvImpacted = false;
          if (
            result.min?.gt(result.stalkRatio.sub(TokenValue.fromHuman("1", 18)))
          ) {
            if (result.bdvRatio.lt(result.stalkRatio)) {
              priceImpact = TokenValue.fromHuman("100", 18).sub(
                result.bdvRatio
                  .sub(TokenValue.fromHuman("1", 18))
                  .mul(TokenValue.fromHuman("100", 18))
                  .div(result.stalkRatio.sub(TokenValue.fromHuman("1", 18)))
              );
            } else if (result.stalkRatio.lt(result.bdvRatio)) {
              priceImpact = TokenValue.fromHuman("100", 18).sub(
                result.stalkRatio
                  .sub(TokenValue.fromHuman("1", 18))
                  .mul(TokenValue.fromHuman("100", 18))
                  .div(result.bdvRatio.sub(TokenValue.fromHuman("1", 18)))
              );
              bdvImpacted = true;
            }
          }
          console.log(priceImpact.toHuman(), bdvImpacted);

          // Estimate
          setMintState({
            output: displayBN(result.amount, 2),
            loading: false,
            minRootsOut: result.amount.sub(
              result.amount.mul(parseFloat(state.slippage) * 10).div(1000)
            ),
            swaps: [],
            workflow: undefined,
            seasons: deposits.map((v) => v.season),
            amounts: deposits.map((v) => v.amount.toBigNumber()),
            totalBdvFromDeposits: displayBN(totalBeanFromDeposit, 2),
            totalBeanIntoSilo: displayBN(totalBeanFromDeposit, 2),

            priceImpact,
            bdvImpacted,
          });

          return;
        }

        const swaps = await getTokensSwapRate(state.mintTokens);
        const swap = swaps[0];
        const amount = swap.estimated;
        const beanEstimated = await swap.swap.estimate(
          TokenValue.fromHuman(
            state.mintTokens[0].amount,
            swap.tokenIn.decimals
          )
        );

        let priceImpact = TokenValue.fromHuman("0", 18);
        let bdvImpacted = false;
        // if (
        //   result.min?.gt(result.stalkRatio.sub(TokenValue.fromHuman("1", 18)))
        // ) {
        //   if (result.bdvRatio.lt(result.stalkRatio)) {
        //     priceImpact = TokenValue.fromHuman("100", 18).sub(
        //       result.bdvRatio
        //         .sub(TokenValue.fromHuman("1", 18))
        //         .mul(TokenValue.fromHuman("100", 18))
        //         .div(result.stalkRatio.sub(TokenValue.fromHuman("1", 18)))
        //     );
        //   } else if (result.stalkRatio.lt(result.bdvRatio)) {
        //     priceImpact = TokenValue.fromHuman("100", 18).sub(
        //       result.stalkRatio
        //         .sub(TokenValue.fromHuman("1", 18))
        //         .mul(TokenValue.fromHuman("100", 18))
        //         .div(result.bdvRatio.sub(TokenValue.fromHuman("1", 18)))
        //     );
        //     bdvImpacted = true;
        //   }
        // }

        setMintState({
          output: displayBN(amount, 2),
          loading: false,
          minRootsOut: swap.estimatedWithSlippage,
          priceImpact,
          swaps,
          workflow: swap.workflow,
          amounts: [],
          seasons: [],
          totalBdvFromDeposits: displayBN(beanEstimated, 2),
          totalBeanIntoSilo: displayBN(beanEstimated, 2),
          bdvImpacted,
        });
      } catch (e) {
        console.log(e);
        setOpenTx(false);
        setMintState({
          output: "0",
          loading: false,
          minRootsOut: TokenValue.fromHuman("0", 18),
          priceImpact: TokenValue.fromHuman("0", 18),
          swaps: [],
          workflow: undefined,
          amounts: [],
          seasons: [],
          totalBdvFromDeposits: "",
          totalBeanIntoSilo: "",
          bdvImpacted: false,
        });
      }
    }, 500),
    [beanstalkSdk, account]
  );

  const onMint = async () => {
    if (mintState.output === "0") {
      return;
    }

    let txToast;
    const token = mintFormState.mintTokens[0];
    const tokenAmount = TokenValue.fromHuman(
      token.amount,
      token.token.decimals
    );

    try {
      if (token.token.symbol === "BEAN DEPOSIT") {
        if (!permit) {
          try {
            const permit = await beanstalkSdk.permit.sign(
              account!.address,
              beanstalkSdk.silo.permitDepositToken(
                account!.address,
                beanstalkSdk.tokens.ROOT.address,
                beanstalkSdk.tokens.BEAN.address,
                mintState.amounts
                  .reduce((p, d) => {
                    return p.add(d);
                  }, BigNumber.from(0))
                  .toString()
              )
            );
            setPermit(permit);
            return;
          } catch (e: any) {
            toast.error(e.reason);
            return;
          }
        }

        mintRootsWithBeanDeposit(
          permit,
          mintState.seasons,
          mintState.amounts,
          mintState.minRootsOut
        ).then(resetState);
        return;
      }
    } catch (e) {}

    try {
      const swap = mintState.swaps[0];

      // Get allowance
      if (swap?.needAllowance) {
        if (swap.tokenIn instanceof ERC20Token) {
          txToast = new TransactionToast({
            loading: `Approving ${token.token.symbol}...`,
            success: "Approve successful.",
          });

          const approval = await swap.tokenIn.approve(
            beanstalkSdk.contracts.depot.address, // DEPOT is the spender
            ethers.constants.MaxUint256
          );
          txToast.confirming(approval);
          const receipt = await approval.wait();
          txToast.success(receipt);
          calculate(mintFormState);
          return;
        }
      }

      // Execute
      txToast = new TransactionToast({
        loading: `Minting ${displayBN(swap.estimated, 2)} ROOT...`,
        success: "Minting successful.",
      });
      const txn = await mintState.workflow!.execute(tokenAmount, {
        slippage: parseFloat(token.slippage),
      });
      txToast.confirming(txn);
      const receipt = await txn.wait();
      txToast.success(receipt);
      return;
    } catch (e) {
      txToast?.error(e);
      console.error(e);
    }
  };

  const renderMintText = () => {
    if (!account) {
      return "Connect Wallet";
    }
    if (mintState.output !== "0") {
      const token = mintFormState.mintTokens[0];
      const swap = mintState.swaps[0];

      if (swap?.needAllowance) {
        return `Approve ${swap.token.token.symbol}`;
      }

      // Check for permit
      if (token.token.symbol === "BEAN DEPOSIT" && !permit) {
        return `Allow Root to use your ${token.token.symbol}`;
      }
    }

    return "MINT";
  };

  const reset = () => {
    onResetMintFormState();
  };

  const resetState = () => {
    onResetMintFormState();
    setPermit(undefined);
    onGetConnectedUserBalance();
  };

  useEffect(() => {
    reset();
    return () => {
      reset();
    };
  }, []);

  useEffect(() => {
    setMintState((state) => ({
      ...state,
      loading: true,
    }));
    setPermit(undefined);
    calculate(mintFormState);
  }, [mintFormState]);

  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <S.Phase>
        <div className="group">
          <div className="header">
            <div>TOKENS</div>
            <MintSettingsPopover />
          </div>
          <div className="mintList">
            {mintFormState.mintTokens.map((_, index) => (
              <div key={index}>
                <MintRow index={index} />
                {mintFormState.mintTokens.length > 1 && (
                  <button
                    onClick={() => {
                      onChangeMintFormStateField(
                        "mintTokens",
                        mintFormState.mintTokens.filter(
                          (_, idx) => idx !== index
                        )
                      );
                    }}
                  >
                    <X color="red" size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>
          {/* <div className="infoContainer">
            <div className="add">
              <button
                onClick={() => {
                  setOpenPicker(true);
                }}
              >
                + Add another token
              </button>
              <TooltipIcon text="You can swap multiple tokens at once to mint Root">
                <HelpCircle size={16} color="#3D3D3D" />
              </TooltipIcon>
            </div>
          </div> */}
        </div>
      </S.Phase>
      <S.Phase>
        <div className="group">
          <div className="header">
            <div>MINT AMOUNT</div>
          </div>
          <S.ContentContainer isLoading={mintState.loading}>
            <div className="inputContainer">
              <NumericFormat
                decimalScale={2}
                placeholder="0"
                id="rootAmount"
                thousandSeparator
                valueIsNumericString
                allowNegative={false}
                readOnly
                value={mintState.output}
              />

              <div className="rootContainer">
                {apys?.seeds && (
                  <TooltipIcon
                    element={
                      <p>
                        The Variable Bean APY uses a moving average of Beans
                        earned by Stalkholders during recent Seasons to estimate
                        a future rate of return, accounting for Stalk growth.{" "}
                        <br/>
                        <a
                          href="https://docs.bean.money/guides/silo/understand-vapy"
                          target="_blank"
                        >
                          Learn more
                        </a>
                      </p>
                    }
                  >
                    <div className="apy">{apys?.seeds}% vAPY</div>
                  </TooltipIcon>
                )}
                <img width={14} height={14} src="/root.svg" />
                <div>Root</div>
              </div>
            </div>
          </S.ContentContainer>
        </div>
      </S.Phase>
      <AnimatePresence initial={false}>
        {mintState.output !== "0" && (
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
                        {mintState.loading && (
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
                            {/* <img width={16} height={16} src="/root.svg" /> */}
                            {displayBN(mintState.minRootsOut, 2)}
                          </div>
                        </div>
                        <div className="row">
                          <div>
                            Price Impact{" "}
                            <TooltipIcon text="The impact your trade has on the market price of this pool. There may be a large difference between the amount of your input token and what you will receive in the output token">
                              <HelpCircle size={16} color="#3D3D3D" />
                            </TooltipIcon>
                          </div>
                          <div>{displayBN(mintState.priceImpact, 2)}%</div>
                        </div>
                        <div className="routes">
                          <div className="line" />
                          {mintFormState.mintTokens.filter(
                            (v) => v.token.slippage !== 0
                          ).length > 0 ? (
                            <>
                              <div className="list">
                                {mintFormState.mintTokens.map((v, idx) => {
                                  if (v.token.slippage === 0) {
                                    return null;
                                  }
                                  return (
                                    <div className="token" key={idx}>
                                      <img
                                        width={25}
                                        height={25}
                                        src={v.token.icon}
                                      />
                                    </div>
                                  );
                                })}
                                <div className="to">
                                  <ChevronsRight color="#b0b0b0" size={16} />
                                  <img width={25} height={25} src="/bean.svg" />
                                </div>

                                <div className="to">
                                  <ChevronsRight color="#b0b0b0" size={16} />
                                  <img width={25} height={25} src="/silo.svg" />
                                  <img width={25} height={25} src="/bean.svg" />
                                </div>
                              </div>

                              <div className="token">
                                <img width={25} height={25} src="/root.svg" />
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="list">
                                {mintState.totalBeanIntoSilo !== "0" && (
                                  <div className="token">
                                    <img
                                      width={25}
                                      height={25}
                                      src="/bean.svg"
                                    />
                                  </div>
                                )}
                                <div className="to">
                                  {mintState.totalBeanIntoSilo !== "0" && (
                                    <ChevronsRight color="#b0b0b0" size={16} />
                                  )}
                                  <img width={25} height={25} src="/silo.svg" />
                                  <img width={25} height={25} src="/bean.svg" />
                                </div>
                              </div>

                              <div className="token">
                                <img width={25} height={25} src="/root.svg" />
                              </div>
                            </>
                          )}
                        </div>
                        <div className="routesText">
                          {mintState.swaps.map((swap) => {
                            if (swap.tokenIn.symbol === "BEAN") {
                              return;
                            }
                            return (
                              <p key={swap.token.token.symbol}>
                                Swap{" "}
                                {displayBN(
                                  TokenValue.fromHuman(
                                    swap.token.amount || "0",
                                    swap.token.token.formatDecimals
                                  ),
                                  swap.token.token.formatDecimals
                                )}{" "}
                                {swap.token.token.name} for{" "}
                                {displayBN(
                                  swap.estimated,
                                  TOKENS.BEAN.formatDecimals
                                )}{" "}
                                Bean
                              </p>
                            );
                          })}
                          {mintState.totalBeanIntoSilo !== "0" && (
                            <p>
                              Deposit {mintState.totalBeanIntoSilo} Bean into
                              the Silo for {mintState.totalBeanIntoSilo} Bean
                              Deposit
                            </p>
                          )}

                          <p>
                            Use {mintState.totalBdvFromDeposits} Bean Deposit to
                            mint {mintState.output} Root
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
        disabled={mintState.loading || mintState.output === "0"}
        onClick={onMint}
      >
        {renderMintText()}
      </S.MintButton>
      <TokenPickerModal
        open={openPicker}
        onClose={() => {
          setOpenPicker(false);
        }}
        onSelect={(token) => {
          onChangeMintFormStateField("mintTokens", [
            ...mintFormState.mintTokens,
            {
              amount: "",
              token,
              slippage: token.slippage.toString(),
            },
          ]);
        }}
      />
    </S.Form>
  );
}
