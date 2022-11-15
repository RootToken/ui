import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CurveZap, CurveZapInterface } from "../../Curve/CurveZap";
export declare class CurveZap__factory {
    static readonly abi: ({
        outputs: never[];
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
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
    })[];
    static createInterface(): CurveZapInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveZap;
}
