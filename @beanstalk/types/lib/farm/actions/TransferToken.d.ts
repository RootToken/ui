import { ethers } from "ethers";
import { RunContext, Step, StepClass } from "../../../classes/Workflow";
import { FarmFromMode, FarmToMode } from "../types";
export declare class TransferToken extends StepClass {
    private _tokenIn;
    private _recipient;
    private _fromMode;
    private _toMode;
    name: string;
    constructor(_tokenIn: string, _recipient: string, _fromMode?: FarmFromMode, _toMode?: FarmToMode);
    run(_amountInStep: ethers.BigNumber, context: RunContext): Promise<Step<string>>;
}
