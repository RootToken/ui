import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CurveMetaFactory, CurveMetaFactoryInterface } from "../../../Curve/Registry/CurveMetaFactory";
export declare class CurveMetaFactory__factory {
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
        outputs: {
            name: string;
            type: string;
        }[];
        anonymous?: undefined;
        gas?: undefined;
    })[];
    static createInterface(): CurveMetaFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveMetaFactory;
}
