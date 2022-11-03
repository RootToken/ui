import { Signer } from "@wagmi/core";
import { BigNumber } from "bignumber.js";
import { ISiloDeposit } from "./siloDeposit";

export interface IAccount {
  address: string;
  balances: Map<string, BigNumber>;
  siloDeposits: ISiloDeposit[];
  signer: Signer;
}
