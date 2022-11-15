import { ContractTransaction, BigNumber } from "ethers";
import { Workflow } from "../../classes/Workflow";
import { TokenValue } from "../../TokenValue";
import { Token } from "../../classes/Token";
import { BeanstalkSDK } from "../../lib/BeanstalkSDK";
declare type PathSegment = {
    from: string;
    to: string;
};
export declare class SwapOperation {
    private readonly tokenIn;
    private readonly tokenOut;
    private readonly workflow;
    private readonly metadata;
    private static sdk;
    constructor(sdk: BeanstalkSDK, tokenIn: Token, tokenOut: Token, workflow: Workflow, metadata: PathSegment[]);
    isValid(): boolean;
    getPath(): PathSegment[];
    getSimplePath(): string[];
    getDisplay(separator?: string): string;
    /**
     * Estimate what the operation would output given this amountIn is the input.
     * For ex, if we are trading ETH -> BEAN, and you want to spend exactly 5 ETH, estimate()
     * would tell how much BEAN you'd receive for 5 ETH
     * @param amountIn Amount to send to workflow as input for estimation
     * @returns Promise of BigNumber
     */
    estimate(amountIn: BigNumber | TokenValue): Promise<TokenValue>;
    /**
     * Estimate the min amount to input to the workflow to receive the desiredAmountOut output
     * For ex, if we are trading ETH -> Bean, and I want exactly 500 BEAN, estimateReversed()
     * tell me how much ETH will result in 500 BEAN
     * @param desiredAmountOut The end amount you want the workflow to output
     * @returns Promise of BigNumber
     */
    estimateReversed(desiredAmountOut: BigNumber | TokenValue): Promise<TokenValue>;
    /**
     *
     * @param amountIn Amount to use as first input to Work
     * @param slippage A human readable percent value. Ex: 0.1 would mean 0.1% slippage
     * @returns Promise of a Transaction
     */
    execute(amountIn: BigNumber | TokenValue, slippage: number): Promise<ContractTransaction>;
    getFarm(): Workflow<string, {}>;
}
export {};
