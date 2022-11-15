import { TokenValue } from "@beanstalk/sdk";
import { ethers } from "ethers";
import { ISiloClaimable, ISiloDeposit } from "./siloDeposit";

export interface IAccount {
  address: string;
  balances: Map<string, TokenValue>;
  siloDeposits: ISiloDeposit[];
  claimableDeposits: ISiloClaimable[];
  signer: ethers.Signer;
}
