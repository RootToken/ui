import { BigNumber } from "bignumber.js";

export const STALK_PER_SEED_PER_SEASON = 1 / 10_000;

export function calculateGrownStalk(
  currentSeason: BigNumber,
  depositSeeds: BigNumber,
  depositSeason: BigNumber
) {
  return currentSeason
    .minus(depositSeason)
    .times(depositSeeds)
    .times(STALK_PER_SEED_PER_SEASON);
}
