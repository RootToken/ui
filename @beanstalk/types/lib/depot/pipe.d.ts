import { ethers } from "ethers";
import { Step, Workflow } from "../../classes/Workflow";
import { BeanstalkSDK } from "../../lib/BeanstalkSDK";
import { AdvancedPipeStruct } from "../../lib/depot/depot";
import { TokenValue } from "../../TokenValue";
/**
 * The "AdvancedPipe" is a Workflow that encodes a call to `beanstalk.advancedPipe()`.
 */
export declare class AdvancedPipeWorkflow extends Workflow<AdvancedPipeStruct> {
    protected sdk: BeanstalkSDK;
    name: string;
    private contract;
    constructor(sdk: BeanstalkSDK, name?: string);
    copy(): AdvancedPipeWorkflow;
    encode(): string;
    /**
     * Wrap a call to a contract into a Step<AdvancedPipeStruct>.
     * @param contract The contract to call.
     * @param method The contract method to call.
     * @param args The arguments to pass to `method`,
     * @param amountOut The expected amountOut from this Step.
     * @param advancedData Clipboard data used by Pipeline to copy any requisite calldata from prev steps.
     * @returns
     */
    wrap<C extends ethers.Contract, M extends keyof C["functions"], A extends Parameters<C["functions"][M]>>(contract: C, method: M, args: A, amountOut: ethers.BigNumber, advancedData?: string): Step<AdvancedPipeStruct>;
    execute(): Promise<ethers.ContractTransaction>;
    callStatic(_amountIn: ethers.BigNumber | TokenValue, _slippage: number): Promise<string[]>;
    estimateGas(_amountIn: ethers.BigNumber | TokenValue, _slippage: number): Promise<ethers.BigNumber>;
}
