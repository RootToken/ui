import { ContractTransaction, ethers } from 'ethers';
import { BeanstalkSDK } from '../BeanstalkSDK';
import { Action, ActionFunction } from './types';
export declare class Work {
    static SLIPPAGE_PRECISION: number;
    static sdk: BeanstalkSDK;
    private steps;
    private stepResults;
    private value;
    constructor(sdk: BeanstalkSDK);
    /**
     * Apply slippage to an amount.
     * @param _amount ethers.BigNumber
     * @param _slippage slippage as a decimal; i.e. _slippage = 0.001 means 0.1%
     */
    private static slip;
    addStep(action: Action | ActionFunction): void;
    addSteps(actions: (Action | Action[] | ActionFunction)[]): void;
    copy(): Work;
    /**
     *
     */
    private runAction;
    /**
     * Estimate what the workflow would output given this amountIn is the input.
     * For ex, if we are trading ETH -> BEAN, and you want to spend exactly 5 ETH, estimate()
     * would tell how much BEAN you'd receive for 5 ETH
     * @param amountIn Amount to send to workflow as input for estimation
     * @returns Promise of BigNumber
     */
    estimate(amountIn: ethers.BigNumber): Promise<ethers.BigNumber>;
    /**
     * Estimate the min amount to input to the workflow to receive the desiredAmountOut output
     * For ex, if we are trading ETH -> Bean, and I want exactly 500 BEAN, estimateReversed()
     * tell me how much ETH will result in 500 BEAN
     * @param desiredAmountOut The end amount you want the workflow to output
     * @returns Promise of BigNumber
     */
    estimateReversed(desiredAmountOut: ethers.BigNumber): Promise<ethers.BigNumber>;
    /**
     * Loop over a sequence of pre-estimated steps and encode their
     * calldata with a slippage value applied to amountOut.
     *
     * @fixme throw if this.stepResults is currently empty
     * @fixme statelessness of individual workflows
     */
    private encodeStepsWithSlippage;
    /**
     *
     * @param amountIn Amount to use as first input to Work
     * @param slippage A human readable percent value. Ex: 0.1 would mean 0.1% slippage
     * @returns Promise of a Transaction
     */
    execute(amountIn: ethers.BigNumber, slippage: number): Promise<ContractTransaction>;
    /**
     * CallStatic version of the execute method. Allows testing the execution of the workflow.
     * @param amountIn Amount to use as first input to workflow
     * @param slippage A human readable percent value. Ex: 0.1 would mean 0.1% slippage
     * @returns Promise of a Transaction
     */
    callStatic(amountIn: ethers.BigNumber, slippage: number): Promise<string[]>;
}
