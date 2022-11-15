import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CurveTriCrypto2Pool, CurveTriCrypto2PoolInterface } from "../../../Curve/Pool/CurveTriCrypto2Pool";
export declare class CurveTriCrypto2Pool__factory {
    static readonly abi: ({
        name: string;
        inputs: {
            name: string;
            type: string;
            indexed: boolean;
        }[];
        anonymous: boolean;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
        gas?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs: {
            name: string;
            type: string;
        }[];
        outputs: never[];
        name?: undefined;
        anonymous?: undefined;
        gas?: undefined;
    } | {
        stateMutability: string;
        type: string;
        name?: undefined;
        inputs?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
        gas?: undefined;
    } | {
        stateMutability: string;
        type: string;
        name: string;
        inputs: {
            name: string;
            type: string;
        }[];
        outputs: {
            name: string;
            type: string;
        }[];
        gas: number;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        name: string;
        inputs: {
            name: string;
            type: string;
        }[];
        outputs: never[];
        anonymous?: undefined;
        gas?: undefined;
    })[];
    static createInterface(): CurveTriCrypto2PoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveTriCrypto2Pool;
}
