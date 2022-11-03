import { BigNumber } from "bignumber.js";

export interface ISiloDeposit {
  season: BigNumber;
  amount: BigNumber;
  bdv: BigNumber;
  stalk: BigNumber;
  seeds: BigNumber;
}
