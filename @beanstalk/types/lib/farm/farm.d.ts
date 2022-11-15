import { BeanstalkSDK } from "../BeanstalkSDK";
import * as ActionLibrary from "./actions";
import { LibraryPresets } from "./LibraryPresets";
import { Step, Workflow } from "../../classes/Workflow";
import { TokenValue } from "../../TokenValue";
import { ethers } from "ethers";
import { AdvancedPipeWorkflow } from "../../lib/depot/pipe";
import { AdvancedDataStruct } from "../../constants/generated/Beanstalk/Beanstalk";
export declare type FarmStep = Step<string>;
/**
 * The "Farm" is a Workflow that encodes a call to `beanstalk.farm()`.
 */
export declare class FarmWorkflow<ExecuteData extends {
    slippage: number;
} = {
    slippage: number;
}> extends Workflow<string, ExecuteData> {
    protected sdk: BeanstalkSDK;
    name: string;
    private contract;
    constructor(sdk: BeanstalkSDK, name?: string);
    copy(): FarmWorkflow<ExecuteData>;
    encode(): string;
    execute(amountIn: ethers.BigNumber | TokenValue, data: ExecuteData): Promise<ethers.ContractTransaction>;
    callStatic(amountIn: ethers.BigNumber | TokenValue, data: ExecuteData): Promise<string[]>;
    estimateGas(amountIn: ethers.BigNumber | TokenValue, data: ExecuteData): Promise<ethers.BigNumber>;
}
export declare class AdvancedFarmWorkflow<ExecuteData extends {
    slippage: number;
} = {
    slippage: number;
}> extends Workflow<AdvancedDataStruct, ExecuteData> {
    protected sdk: BeanstalkSDK;
    name: string;
    private contract;
    constructor(sdk: BeanstalkSDK, name?: string);
    copy(): AdvancedFarmWorkflow<ExecuteData>;
    encode(): string;
    execute(amountIn: ethers.BigNumber | TokenValue, data: ExecuteData): Promise<ethers.ContractTransaction>;
    callStatic(amountIn: ethers.BigNumber | TokenValue, data: ExecuteData): Promise<string[]>;
    estimateGas(amountIn: ethers.BigNumber | TokenValue, data: ExecuteData): Promise<ethers.BigNumber>;
}
/**
 *
 */
export declare class Farm {
    static sdk: BeanstalkSDK;
    readonly actions: typeof ActionLibrary;
    presets: LibraryPresets;
    constructor(sdk: BeanstalkSDK);
    create(name?: string): FarmWorkflow<{
        slippage: number;
    }>;
    /**
     * @todo discuss name
     */
    createAdvancedPipe(name?: string): AdvancedPipeWorkflow;
}
