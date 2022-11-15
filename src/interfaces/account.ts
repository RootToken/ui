import { TokenValue } from "@beanstalk/sdk";
import { ethers } from "ethers";
import { ISiloDeposit } from "./siloDeposit";

export interface IAccount {
  address: string;
  balances: Map<string, TokenValue>;
  siloDeposits: ISiloDeposit[];
  signer: ethers.Signer;
}
