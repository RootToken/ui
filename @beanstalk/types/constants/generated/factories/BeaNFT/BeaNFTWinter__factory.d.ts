import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BeaNFTWinter, BeaNFTWinterInterface } from "../../BeaNFT/BeaNFTWinter";
export declare class BeaNFTWinter__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): BeaNFTWinterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BeaNFTWinter;
}
