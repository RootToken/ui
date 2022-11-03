import { ethers } from 'ethers';
export declare const getProvider: () => ethers.providers.StaticJsonRpcProvider;
export declare const setupConnection: () => Promise<{
    provider: ethers.providers.StaticJsonRpcProvider;
    signer: ethers.Wallet;
    account: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
}>;
