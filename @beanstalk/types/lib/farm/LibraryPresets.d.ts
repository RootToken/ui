import { ERC20Token } from "../../classes/Token";
import { RunContext, StepGenerator } from "../../classes/Workflow";
import { BeanstalkSDK } from "../BeanstalkSDK";
import { FarmFromMode, FarmToMode } from "./types";
import { EIP2612PermitMessage, SignedPermit } from "../permit";
export declare type ActionBuilder = (fromMode?: FarmFromMode, toMode?: FarmToMode) => StepGenerator<string> | StepGenerator<string>[];
export declare class LibraryPresets {
    static sdk: BeanstalkSDK;
    readonly weth2usdt: ActionBuilder;
    readonly usdt2bean: ActionBuilder;
    readonly usdt2weth: ActionBuilder;
    readonly bean2usdt: ActionBuilder;
    readonly weth2bean: ActionBuilder;
    readonly bean2weth: ActionBuilder;
    /**
     * Load the Pipeline in preparation for a set Pipe actions.
     * @
     */
    /**
     * @param _permit provide a permit directly, or provide a function to extract it from `context`.
     */
    loadPipeline(_token: ERC20Token, _from: FarmFromMode, _permit?: SignedPermit<EIP2612PermitMessage> | ((context: RunContext) => SignedPermit<EIP2612PermitMessage>)): StepGenerator<string>[];
    constructor(sdk: BeanstalkSDK);
}
