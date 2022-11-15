import { ethers } from "ethers";
import { RunContext, Step, StepClass } from "../../../classes/Workflow";
import { FarmFromMode } from "../types";
export declare class UnwrapEth extends StepClass {
    private fromMode;
    name: string;
    constructor(fromMode?: FarmFromMode);
    run(_amountInStep: ethers.BigNumber, context: RunContext): Promise<Step<string>>;
}
