import { ethers } from "ethers";
import { StepClass } from "../types";
export declare class ActionTemplate extends StepClass {
    name: string;
    constructor();
    run(_amountInStep: ethers.BigNumber, _forward?: boolean): Promise<{
        name: any;
        amountOut: any;
        encode: (minAmountOut: ethers.BigNumber) => void;
        decode: (data: string) => void;
        data: any;
    }>;
}
