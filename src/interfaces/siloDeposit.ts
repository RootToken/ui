import { TokenValue } from "@beanstalk/sdk";
import { BigNumber } from "@ethersproject/bignumber";

export interface ISiloDeposit {
  season: BigNumber;
  amount: TokenValue;
  bdv: TokenValue;
  stalk: TokenValue;
  seeds: TokenValue;
}
