import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { UniswapV2Router, UniswapV2RouterInterface } from "../../Uniswap/UniswapV2Router";
export declare class UniswapV2Router__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): UniswapV2RouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2Router;
}
