import { abi as IUniswapV3PoolABI } from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
import { abi as QuoterABI } from "@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json";
import { abi as SwapRouterABI } from "@uniswap/v3-periphery/artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json";
import { ethers } from "ethers";
import { provider } from "../store";
import { TokenValue } from "@beanstalk/sdk";
import { Pool, Route, Trade } from "@uniswap/v3-sdk";
import { CurrencyAmount, Token, TradeType } from "@uniswap/sdk-core";

const poolAddress = "0x11dd6f9e1a7bb35a61fada4aec645f603050783e";
const quoterAddress = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";
const swapRouterAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564";

const quoterContract = new ethers.Contract(quoterAddress, QuoterABI, provider);
const poolContract = new ethers.Contract(
  poolAddress,
  IUniswapV3PoolABI,
  provider
);

export const swapRouterContract = new ethers.Contract(
  swapRouterAddress,
  SwapRouterABI,
  provider
);

interface Immutables {
  factory: string;
  token0: string;
  token1: string;
  fee: number;
  tickSpacing: number;
  maxLiquidityPerTick: ethers.BigNumber;
}

interface State {
  liquidity: ethers.BigNumber;
  sqrtPriceX96: ethers.BigNumber;
  tick: number;
  observationIndex: number;
  observationCardinality: number;
  observationCardinalityNext: number;
  feeProtocol: number;
  unlocked: boolean;
}

export const getPoolImmutables = async () => {
  const [factory, token0, token1, fee, tickSpacing, maxLiquidityPerTick] =
    await Promise.all([
      poolContract.factory(),
      poolContract.token0(),
      poolContract.token1(),
      poolContract.fee(),
      poolContract.tickSpacing(),
      poolContract.maxLiquidityPerTick(),
    ]);

  const immutables: Immutables = {
    factory,
    token0,
    token1,
    fee,
    tickSpacing,
    maxLiquidityPerTick,
  };
  return immutables;
};

async function getPoolState() {
  // note that data here can be desynced if the call executes over the span of two or more blocks.
  const [liquidity, slot] = await Promise.all([
    poolContract.liquidity(),
    poolContract.slot0(),
  ]);

  const PoolState: State = {
    liquidity,
    sqrtPriceX96: slot[0],
    tick: slot[1],
    observationIndex: slot[2],
    observationCardinality: slot[3],
    observationCardinalityNext: slot[4],
    feeProtocol: slot[5],
    unlocked: slot[6],
  };

  return PoolState;
}

export const estimateBeanToRoot = async (amountIn: TokenValue) => {
  try {
    const [immutables, state] = await Promise.all([
      getPoolImmutables(),
      getPoolState(),
    ]);

    // create instances of the Token object to represent the two tokens in the given pool
    const root = new Token(1, immutables.token0, 18, "ROOT", "Root");
    const bean = new Token(1, immutables.token1, 6, "BEAN", "Bean");

    const poolExample = new Pool(
      root,
      bean,
      immutables.fee,
      state.sqrtPriceX96.toString(), //note the description discrepancy - sqrtPriceX96 and sqrtRatioX96 are interchangable values
      state.liquidity.toString(),
      state.tick
    );

    // create an instance of the route object in order to construct a trade object
    const swapRoute = new Route([poolExample], bean, root);

    // call the quoter contract to determine the amount out of a swap, given an amount in
    const quotedAmountOut =
      await quoterContract.callStatic.quoteExactInputSingle(
        immutables.token1, // Bean
        immutables.token0, // Root
        immutables.fee,
        amountIn.toBlockchain(),
        0
      );

    // create an unchecked trade instance
    const trade = Trade.createUncheckedTrade({
      route: swapRoute,
      inputAmount: CurrencyAmount.fromRawAmount(bean, amountIn.toBlockchain()),
      outputAmount: CurrencyAmount.fromRawAmount(
        root,
        quotedAmountOut.toString()
      ),
      tradeType: TradeType.EXACT_INPUT,
    });

    return {
      rootOutput: TokenValue.fromBlockchain(quotedAmountOut, 18),
      priceImpact: trade.priceImpact.toFixed(2),
      fee: immutables.fee,
    };
  } catch (e) {
    throw e;
  }
};
