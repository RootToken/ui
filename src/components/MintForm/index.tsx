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
  Token,
  TokenValue,
  Clipboard,
} from "@beanstalk/sdk";
import { BigNumber } from "@ethersproject/bignumber";
import { ISiloDeposit } from "../../interfaces/siloDeposit";
import { ITokenSymbol, TOKENS } from "../../interfaces/token";
import ENVIRONMENT from "../../config";
import { displayBN } from "../../util/bigNumber";
import { AnimatePresence, motion } from "framer-motion";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import TransactionToast from "../Common/TransactionToast";
import { SignedPermit } from "@beanstalk/sdk/dist/types/lib/permit";
import useMint from "../../hooks/useMint";
import { calculateRoot } from "../../util/root";

export default function MintForm() {
  const [openTx, setOpenTx] = useState(false);
  const [openPicker, setOpenPicker] = useState(false);
  const [mintState, setMintState] = useState({
    loading: false,
    output: "0",
    minRootsOut: TokenValue.fromHuman("0", 18),
    priceImpact: TokenValue.fromHuman("0", 18),
    swaps: [] as ISwapToken[],
    totalBdvFromDeposits: "0",
    totalBeanFromDeposit: "0",
    totalBeanIntoSilo: "0",
    deposits: [] as ISiloDeposit[],
  });
  const [permit, setPermit] = useState<SignedPermit | undefined>(undefined);

  const {
    mintRootsWithBean,
    mintRootsWithBeanDeposit,
    mintRootsWithSwappedBean,
  } = useMint();

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
          let tokenIn: Token = beanstalkSdk.tokens.ETH;
          let amount = beanstalkSdk.tokens.ETH.fromHuman("0");
          let allowance = TokenValue.fromBlockchain(
            ethers.constants.MaxInt256.toString(),
            token.token.decimals
          );

          switch (token.token.symbol) {
            case "USDC":
              tokenIn = beanstalkSdk.tokens.USDC;
              amount = beanstalkSdk.tokens.USDC.fromHuman(token.amount);
              const usdcAllowance = await beanstalkSdk.tokens.USDC.getAllowance(
                account!.address,
                beanstalkSdk.contracts.beanstalk.address
              );
              if (usdcAllowance) {
                allowance = usdcAllowance;
              }
              break;
            case "USDT":
              tokenIn = beanstalkSdk.tokens.USDT;
              amount = beanstalkSdk.tokens.USDT.fromHuman(token.amount);
              const usdtAllowance = await beanstalkSdk.tokens.USDT.getAllowance(
                account!.address,
                beanstalkSdk.contracts.beanstalk.address
              );
              if (usdtAllowance) {
                allowance = usdtAllowance;
              }
              break;
            case "DAI":
              tokenIn = beanstalkSdk.tokens.DAI;
              amount = beanstalkSdk.tokens.DAI.fromHuman(token.amount);
              const daiAllowance = await beanstalkSdk.tokens.DAI.getAllowance(
                account!.address,
                beanstalkSdk.contracts.beanstalk.address
              );
              if (daiAllowance) {
                allowance = daiAllowance;
              }
              break;
            case "ETH":
              tokenIn = beanstalkSdk.tokens.ETH;
              amount = beanstalkSdk.tokens.ETH.fromHuman(token.amount);
              allowance = TokenValue.fromBlockchain(
                ethers.constants.MaxInt256.toString(),
                token.token.decimals
              );
              break;
            case "WETH":
              tokenIn = beanstalkSdk.tokens.WETH;
              amount = beanstalkSdk.tokens.WETH.fromHuman(token.amount);
              const wethAllowance = await beanstalkSdk.tokens.WETH.getAllowance(
                account!.address,
                beanstalkSdk.contracts.beanstalk.address
              );
              if (wethAllowance) {
                allowance = wethAllowance;
              }
              break;
            default:
              throw new Error("Unsupported token");
          }

          const tokenOut = beanstalkSdk.tokens.BEAN;

          const swapOp = beanstalkSdk.swap.buildSwap(
            tokenIn,
            tokenOut,
            account!.address,
            FarmFromMode.EXTERNAL,
            FarmToMode.INTERNAL
          );
          if (!swapOp.isValid())
            throw new Error("Cannot swap between selected tokens");
          const est = await swapOp.estimate(amount);
          console.log("estimate: ", est.toHuman());
          return {
            path: swapOp.getSimplePath(),
            estimated: est,
            token,
            tokenIn,
            estimatedWithSlippage: est
              .mul(parseFloat(token.slippage) * 10)
              .div(1000),
            swap: swapOp,
            needAllowance: allowance.lt(amount),
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

        // 1. Swap tokens for bean
        // Only for non bean tokens
        const swaps = await getTokensSwapRate(
          state.mintTokens.filter((token) => token.token.slippage > 0)
        );

        let totalBeans = swaps.reduce((prev, swap) => {
          return prev.add(swap.estimated);
        }, TokenValue.fromHuman("0", TOKENS.BEAN.decimals));

        // Check if mint tokens contains BEAN
        const bean = state.mintTokens.find(
          (token) => token.token.symbol === "BEAN"
        );

        if (bean) {
          totalBeans = totalBeans.add(
            TokenValue.fromHuman(bean.amount, bean.token.decimals)
          );
        }

        const currentSeason = await beanstalkSdk.sun.getSeason();
        const deposits: ISiloDeposit[] = [];

        // Append bean into current season
        if (totalBeans.gt(0)) {
          deposits.push({
            season: BigNumber.from(currentSeason),
            amount: totalBeans,
            bdv: totalBeans,
            stalk: TokenValue.fromBlockchain(
              totalBeans.mul(1e4).toBlockchain(),
              10
            ),
            seeds: totalBeans.mul(2),
          });
        }

        const beanDeposit = state.mintTokens.find(
          (token) => token.token.symbol === "BEAN DEPOSIT"
        );
        let totalBeanFromDeposit = TokenValue.fromHuman(
          "0",
          TOKENS["BEAN DEPOSIT"].decimals
        );
        if (beanDeposit) {
          let amountRemaining = TokenValue.fromHuman(
            beanDeposit.amount,
            TOKENS["BEAN DEPOSIT"].decimals
          );

          const tempDeposits: {
            deposit: ISiloDeposit;
            bdv: TokenValue;
            stalk: TokenValue;
          }[] = [];
          // Find the most optimal bean deposit
          account.siloDeposits.forEach((deposit, idx) => {
            const result = calculateRoot(
              deposit.stalk,
              deposit.seeds,
              deposit.bdv,
              TokenValue.fromHuman("1000", 18),
              TokenValue.fromHuman("1000", 6),
              TokenValue.fromHuman("1100", 10),
              TokenValue.fromHuman("2000", 6),
              // rootTotalSupply,
              // rootUnderlyingBdvBefore,
              // rootStalkBefore,
              // rootSeedsBefore,
              true
            );

            if (!result) {
              return;
            }
            let bdvImpactPercentage = TokenValue.fromHuman("0", 18);
            let stalkImpactPercentage = TokenValue.fromHuman("0", 18);

            if (result.bdvRatio.lt(result.stalkRatio)) {
              stalkImpactPercentage = TokenValue.fromHuman("100", 18).sub(
                result.bdvRatio
                  .sub(TokenValue.fromHuman("1", 18))
                  .mulDiv(
                    TokenValue.fromHuman("100", 18),
                    result.stalkRatio.sub(TokenValue.fromHuman("1", 18))
                  )
              );
            }
            if (result.stalkRatio.lt(result.bdvRatio)) {
              bdvImpactPercentage = TokenValue.fromHuman("100", 18).sub(
                result.stalkRatio
                  .sub(TokenValue.fromHuman("1", 18))
                  .mulDiv(
                    TokenValue.fromHuman("100", 18),
                    result.bdvRatio.sub(TokenValue.fromHuman("1", 18))
                  )
              );
            }

            console.log({
              min: result?.min?.toHuman(),
              bdvImpactPercentage: bdvImpactPercentage.toHuman(),
              stalkImpactPercentage: stalkImpactPercentage.toHuman(),
              idx,
            });
            tempDeposits.push({
              deposit,
              bdv: bdvImpactPercentage,
              stalk: stalkImpactPercentage,
            });
          });

          // Find pivot (find lowest bdv/stalk impact)
          let pivotIndex;
          let low = TokenValue.fromHuman("100000", 18);
          tempDeposits.forEach((element, idx) => {
            if (element.bdv.add(element.stalk).lt(low)) {
              low = element.bdv.add(element.stalk);
              pivotIndex = idx;
            }
            console.log(element.bdv.add(element.stalk).toHuman())

          });

          // const result = calculateRoot(
          //   tempDeposits[11].deposit.stalk.add(tempDeposits[12].deposit.stalk),
          //   tempDeposits[11].deposit.seeds.add(tempDeposits[11].deposit.seeds),
          //   tempDeposits[11].deposit.bdv.add(tempDeposits[12].deposit.bdv),
          //   TokenValue.fromHuman("1000", 18),
          //   TokenValue.fromHuman("1000", 6),
          //   TokenValue.fromHuman("1100", 10),
          //   TokenValue.fromHuman("2000", 6),
          //   // rootTotalSupply,
          //   // rootUnderlyingBdvBefore,
          //   // rootStalkBefore,
          //   // rootSeedsBefore,
          //   true
          // );
          let bdvImpactPercentage = TokenValue.fromHuman("0", 18);
          let stalkImpactPercentage = TokenValue.fromHuman("0", 18);

          // if (result.bdvRatio.lt(result.stalkRatio)) {
          //   stalkImpactPercentage = TokenValue.fromHuman("100", 18).sub(
          //     result.bdvRatio
          //       .sub(TokenValue.fromHuman("1", 18))
          //       .mulDiv(
          //         TokenValue.fromHuman("100", 18),
          //         result.stalkRatio.sub(TokenValue.fromHuman("1", 18))
          //       )
          //   );
          // }
          // if (result.stalkRatio.lt(result.bdvRatio)) {
          //   bdvImpactPercentage = TokenValue.fromHuman("100", 18).sub(
          //     result.stalkRatio
          //       .sub(TokenValue.fromHuman("1", 18))
          //       .mulDiv(
          //         TokenValue.fromHuman("100", 18),
          //         result.bdvRatio.sub(TokenValue.fromHuman("1", 18))
          //       )
          //   );
          // }

          // console.log({
          //   min: result?.min?.toHuman(),
          //   bdvImpactPercentage: bdvImpactPercentage.toHuman(),
          //   stalkImpactPercentage: stalkImpactPercentage.toHuman(),
          // });

          console.log("Pivot:", pivotIndex, low.toHuman())

          // Check first and last deposits to see which results more in root token then go from there
          for (let i = account.siloDeposits.length - 1; i >= 0; i--) {
            const deposit = account.siloDeposits[i];
            if (deposit.amount.gt(amountRemaining)) {
              deposits.push({
                season: deposit.season,
                amount: amountRemaining,
                bdv: amountRemaining,
                stalk: deposit.stalk.mulDiv(amountRemaining, deposit.amount),
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
        }

        let totalStalkFromDeposits = TokenValue.fromHuman("0", 10);
        let totalSeedsFromDeposits = TokenValue.fromHuman("0", 6);
        let totalBdvFromDeposits = TokenValue.fromHuman("0", 6);

        deposits.forEach((deposit) => {
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
          true
        );

        if (!result) {
          throw new Error("No root output");
        }

        // Calculate price impact (BDV/Stalk)
        let priceImpact = TokenValue.fromHuman("0", 18);
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
          }
        }

        let totalSlipage = TokenValue.fromHuman("0", 18);
        if (state.mintTokens.filter((v) => v.token.slippage !== 0).length > 0) {
          totalSlipage = state.mintTokens.reduce((prev, token) => {
            return prev.add(TokenValue.fromHuman(token.slippage, 18));
          }, totalSlipage);
        } else {
          totalSlipage = TokenValue.fromHuman(state.slippage, 18);
        }

        setMintState({
          output: displayBN(result.amount, 2),
          loading: false,
          minRootsOut: result.amount.sub(
            result.amount.mul(totalSlipage.mul(10)).div(1000)
          ),
          priceImpact,
          swaps,
          totalBeanFromDeposit: displayBN(
            totalBeanFromDeposit,
            TOKENS["BEAN DEPOSIT"].formatDecimals
          ),
          totalBdvFromDeposits: displayBN(
            totalBdvFromDeposits,
            TOKENS.BEAN.formatDecimals
          ),
          totalBeanIntoSilo: displayBN(totalBeans, TOKENS.BEAN.formatDecimals),
          deposits,
        });
      } catch (e) {
        console.log(e);
        setOpenTx(false);
        setMintState({
          output: "0",
          loading: false,
          minRootsOut: TokenValue.fromHuman("0", 18),
          priceImpact: TokenValue.fromHuman("0", 18),
          totalBdvFromDeposits: "0",
          totalBeanFromDeposit: "0",
          totalBeanIntoSilo: "0",
          swaps: [],
          deposits: [],
        });
      }
    }, 500),
    [beanstalkSdk, account]
  );

  const onMint = async () => {
    if (mintState.output === "0") {
      return;
    }

    const token = mintFormState.mintTokens[0];
    const tokenAmount = TokenValue.fromHuman(
      token.amount,
      token.token.decimals
    );

    if (token.token.symbol === "BEAN") {
      if (!permit) {
        try {
          const permit = await beanstalkSdk.permit.sign(
            account!.address,
            beanstalkSdk.tokens.permitERC2612(
              account!.address, // owner
              beanstalkSdk.contracts.beanstalk.address, // spender
              beanstalkSdk.tokens.BEAN, // bean
              tokenAmount.toBlockchain() // amount of beans
            )
          );
          setPermit(permit);
          return;
        } catch (e: any) {
          toast.error(e.reason);
          return;
        }
      }

      await mintRootsWithBean(permit, tokenAmount, mintState.minRootsOut).then(
        resetState
      );
      return;
    } else if (token.token.symbol === "BEAN DEPOSIT") {
      if (!permit) {
        try {
          const permit = await beanstalkSdk.permit.sign(
            account!.address,
            beanstalkSdk.silo.permitDepositToken(
              account!.address,
              beanstalkSdk.tokens.ROOT.address,
              beanstalkSdk.tokens.BEAN.address,
              tokenAmount.toBlockchain(),
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
        mintState.deposits,
        mintState.minRootsOut
      ).then(resetState);

      return;
    }

    const swap = mintState.swaps[0];
    if (swap.token.token.symbol === "USDC") {
      if (swap.needAllowance) {
        const txToast = new TransactionToast({
          loading: `Approving ${token.token.symbol}...`,
          success: "Approve successful.",
        });
        try {
          const approval = await beanstalkSdk.tokens.USDC.approve(
            beanstalkSdk.contracts.beanstalk.address,
            ethers.constants.MaxUint256
          );
          txToast.confirming(approval);
          const receipt = await approval.wait();
          txToast.success(receipt);
          calculate(mintFormState);
          return;
        } catch (e) {
          txToast.error(e);
        }
      }
      mintRootsWithSwappedBean(
        beanstalkSdk.tokens.USDC,
        tokenAmount,
        parseFloat(parseFloat(token.slippage).toFixed(2)),
        mintState.minRootsOut
      ).then(resetState);
      return;
    } else if (swap.token.token.symbol === "DAI") {
      if (swap.needAllowance) {
        const txToast = new TransactionToast({
          loading: `Approving ${token.token.symbol}...`,
          success: "Approve successful.",
        });
        try {
          const approval = await beanstalkSdk.tokens.DAI.approve(
            beanstalkSdk.contracts.beanstalk.address,
            ethers.constants.MaxUint256
          );
          txToast.confirming(approval);
          const receipt = await approval.wait();
          txToast.success(receipt);
          calculate(mintFormState);
          return;
        } catch (e) {
          txToast.error(e);
        }
      }
      mintRootsWithSwappedBean(
        beanstalkSdk.tokens.DAI,
        tokenAmount,
        parseFloat(parseFloat(token.slippage).toFixed(2)),
        mintState.minRootsOut
      ).then(resetState);
      return;
    } else if (swap.token.token.symbol === "USDT") {
      if (swap.needAllowance) {
        const txToast = new TransactionToast({
          loading: `Approving ${token.token.symbol}...`,
          success: "Approve successful.",
        });
        try {
          const approval = await beanstalkSdk.tokens.USDT.approve(
            beanstalkSdk.contracts.beanstalk.address,
            ethers.constants.MaxUint256
          );
          txToast.confirming(approval);
          const receipt = await approval.wait();
          txToast.success(receipt);
          calculate(mintFormState);
          return;
        } catch (e) {
          txToast.error(e);
        }
      }
      mintRootsWithSwappedBean(
        beanstalkSdk.tokens.USDT,
        tokenAmount,
        parseFloat(parseFloat(token.slippage).toFixed(2)),
        mintState.minRootsOut
      ).then(resetState);
      return;
    } else if (swap.token.token.symbol === "WETH") {
      if (swap.needAllowance) {
        const txToast = new TransactionToast({
          loading: `Approving ${token.token.symbol}...`,
          success: "Approve successful.",
        });

        try {
          const approval = await beanstalkSdk.tokens.WETH.approve(
            beanstalkSdk.contracts.beanstalk.address,
            ethers.constants.MaxUint256
          );
          txToast.confirming(approval);
          const receipt = await approval.wait();
          txToast.success(receipt);
          calculate(mintFormState);
          return;
        } catch (e) {
          txToast.error(e);
        }
      }
      mintRootsWithSwappedBean(
        beanstalkSdk.tokens.WETH,
        tokenAmount,
        parseFloat(parseFloat(token.slippage).toFixed(2)),
        mintState.minRootsOut
      ).then(resetState);
      return;
    } else if (swap.token.token.symbol === "ETH") {
      mintRootsWithSwappedBean(
        beanstalkSdk.tokens.ETH,
        tokenAmount,
        parseFloat(parseFloat(token.slippage).toFixed(2)),
        mintState.minRootsOut
      ).then(resetState);
      return;
    }
  };

  const renderMintText = () => {
    if (!account) {
      return "Connect Wallet";
    }
    if (mintState.output !== "0") {
      const token = mintFormState.mintTokens[0];

      // Check for permit
      if (
        (token.token.symbol === "BEAN" ||
          token.token.symbol === "BEAN DEPOSIT") &&
        !permit
      ) {
        return `Allow Root to use your ${token.token.symbol}`;
      }

      const swap = mintState.swaps[0];
      if (
        swap?.needAllowance &&
        (swap.token.token.symbol === "WETH" ||
          swap.token.token.symbol === "USDC" ||
          swap.token.token.symbol === "DAI" ||
          swap.token.token.symbol === "USDT")
      ) {
        return `Approve ${swap.token.token.symbol}`;
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
