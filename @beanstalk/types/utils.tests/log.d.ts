import { ethers } from "ethers";
import { TokenSiloBalance } from "../index";
export declare const logSiloBalance: (address: string, balance: TokenSiloBalance) => void;
export declare class Logger {
    static printLogs(desc: ethers.utils.LogDescription): void;
    static printReceipt(contracts: ethers.Contract[], receipt: ethers.ContractReceipt): void;
}
