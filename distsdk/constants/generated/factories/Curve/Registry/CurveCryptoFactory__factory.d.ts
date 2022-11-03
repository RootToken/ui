import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CurveCryptoFactory, CurveCryptoFactoryInterface } from "../../../Curve/Registry/CurveCryptoFactory";
export declare class CurveCryptoFactory__factory {
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
    })[];
    static createInterface(): CurveCryptoFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveCryptoFactory;
}
