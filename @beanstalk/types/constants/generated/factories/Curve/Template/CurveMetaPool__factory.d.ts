import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CurveMetaPool, CurveMetaPoolInterface } from "../../../Curve/Template/CurveMetaPool";
export declare class CurveMetaPool__factory {
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
        inputs: never[];
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
        anonymous?: undefined;
        gas?: undefined;
    })[];
    static createInterface(): CurveMetaPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveMetaPool;
}
