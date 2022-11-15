import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Curve3Pool, Curve3PoolInterface } from "../../../Curve/Pool/Curve3Pool";
export declare class Curve3Pool__factory {
    static readonly abi: ({
        name: string;
        inputs: {
            type: string;
            name: string;
            indexed: boolean;
        }[];
        anonymous: boolean;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
        gas?: undefined;
    } | {
        outputs: never[];
        inputs: {
            type: string;
            name: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        gas?: undefined;
    } | {
        name: string;
        outputs: {
            type: string;
            name: string;
        }[];
        inputs: {
            type: string;
            name: string;
        }[];
        stateMutability: string;
        type: string;
        gas: number;
        anonymous?: undefined;
    })[];
    static createInterface(): Curve3PoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Curve3Pool;
}
