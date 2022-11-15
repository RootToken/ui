import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { UniswapV2Pair, UniswapV2PairInterface } from "../../Uniswap/UniswapV2Pair";
export declare class UniswapV2Pair__factory {
    static readonly abi: ({
        inputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        payable?: undefined;
        stateMutability?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        constant: boolean;
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
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): UniswapV2PairInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2Pair;
}
