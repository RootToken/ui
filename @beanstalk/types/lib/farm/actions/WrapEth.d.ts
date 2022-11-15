import { ethers } from "ethers";
import { RunContext, Step, StepClass } from "../../../classes/Workflow";
import { FarmToMode } from "../types";
export declare class WrapEth extends StepClass {
    private toMode;
    name: string;
    constructor(toMode?: FarmToMode);
    run(_amountInStep: ethers.BigNumber, context: RunContext): Promise<Step<string>>;
}
