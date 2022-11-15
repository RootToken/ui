import { ethers } from "ethers";
import { BeanstalkSDK } from "../lib/BeanstalkSDK";
import TestUtils from "./TestUtils";
export declare const ACCOUNTS: readonly [readonly ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"]];
export declare const getProvider: () => ethers.providers.StaticJsonRpcProvider;
export declare const setupConnection: (provider?: ethers.providers.JsonRpcProvider) => {
    provider: ethers.providers.JsonRpcProvider;
    signer: ethers.Wallet;
    account: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
};
export declare const getTestUtils: () => {
    sdk: BeanstalkSDK;
    utils: TestUtils;
    account: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
};
