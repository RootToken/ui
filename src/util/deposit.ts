import { TokenValue } from "@beanstalk/sdk";
import { BigNumber } from "@ethersproject/bignumber";

export const STALK_PER_SEED_PER_SEASON = 1 / 10_000;

export function calculateGrownStalk(
  currentSeason: BigNumber,
  depositSeeds: TokenValue,
  depositSeason: BigNumber
): BigNumber {
  return currentSeason
    .sub(depositSeason)
    .mul(depositSeeds.toBigNumber())
    .mul(1).div(10_000);
}
