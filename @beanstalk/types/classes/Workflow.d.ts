import { ethers } from "ethers";
import { Token } from "./Token";
import { BeanstalkSDK } from "../lib/BeanstalkSDK";
import { TokenValue } from "../TokenValue";
/**
 * RunMode identifies the different ways that a Workflow can be called.
 */
export declare enum RunMode {
    Estimate = 0,
    EstimateReversed = 1,
    Execute = 2,
    CallStatic = 3,
    EstimateGas = 4
}
/**
 * The RunContext provides context & runtime data to Step Generators.
 * RunData allows a developer to inject data into each Step Generator as it is called.
 *
 * For example, you might wait until a user clicks "Submit" to ask them to sign
 * a permit, and then inject that permit via RunData into a `permitERC20` Step.
 *
 * @fixme `any & { slippage }` doesn't seem to indicate the record could have a slippage key.
 */
export declare type RunContext<RunData extends Record<string, any> = any & {
    slippage?: number;
}> = {
    runMode: RunMode;
    step: {
        index: number;
        findTag: (tag: string) => number;
    };
    data: RunData;
};
/**
 * A StepGenerator is responsible for building a Step.
 *
 * It:
 * 1. accepts an `amountIn` from a previous Step;
 * 2. [optionally] uses this to perform some lookup on-chain, for
 *    example calculating the `amountOut` received from a swap;
 * 3. Returns a Step, which:
 *    a. passes `amountOut` to the next StepGenerator;
 *    b. provides functions to encode & decode the Step when
 *       preparing it within a transaction like `farm()`.
 */
export declare type StepGenerator<EncodedResult extends any = string> = StepClass<EncodedResult> | StepFunction<EncodedResult>;
/**
 * A StepClass is a type of StepGenerator. It wraps a `run()` function
 * which returns a Step. The class can maintain its own internal state
 * or helpers if necessary. For example, you might instantiate an instance
 * of an ethers contract in the constructor and save that for repeated use
 * during `run()`.
 *
 * Unlke StepFunction, the `run()` function must return a Step and not
 * raw encoded data.
 */
export declare abstract class StepClass<EncodedResult extends any = string> {
    static sdk: BeanstalkSDK;
    name: string;
    setSDK(sdk: BeanstalkSDK): void;
    abstract run(_amountInStep: ethers.BigNumber, context: RunContext): Promise<Step<EncodedResult>>;
}
/**
 * A StepFunction is a type of StepGenerator. It can return a Step or an
 * EncodedResult. The Workflow engine will parse this; if you provide just
 * the EncodedResult, the engine will wrap it into a Step for you.
 *
 * StepFunctions can be synchronous or asynchronous. If you already know
 * the calldata you want to pass to the workflow (perhaps you gathered
 * this calldata through some other method), you can just add it directly:
 *
 * ```
 * () => '0xCALLDATA' // in this case, EncodedResult = string.
 * ```
 */
export declare type StepFunction<EncodedResult extends any = string> = (amountIn: ethers.BigNumber, context: RunContext) => (EncodedResult | Step<EncodedResult>) | Promise<EncodedResult | Step<EncodedResult>>;
/**
 * A Step represents one pre-estimated Ethereum function call
 * which can be encoded and executed on-chain.
 */
export declare type Step<EncodedResult extends any> = {
    name: string;
    amountOut: ethers.BigNumber;
    value?: ethers.BigNumber;
    data?: any;
    encode: () => EncodedResult;
    decode: (data: string) => undefined | Record<string, any>;
    decodeResult: (result: any) => undefined | ethers.utils.Result;
    print?: (result: any) => string;
};
/**
 * StepGenerators contains all types that are can be passed
 * to a Workflow via `.add()`.
 */
declare type StepGenerators<EncodedResult extends any = string> = StepGenerator<EncodedResult> | Workflow<any> | StepGenerators<EncodedResult>[];
/**
 * StepGeneratorOptions define how a StepGenerator should be treated during the build process.
 */
declare type StepGeneratorOptions = {
    /**
     * Only run this StepGenerator when executing
     * @fixme this is really more like "onlyStatic"
     */
    onlyExecute?: boolean;
    /**
     * Nametag for a particular step. Used for named lookup.
     */
    tag?: string;
    /**
     *
     */
    skip?: boolean | ((amountInStep: ethers.BigNumber, context: RunContext) => boolean | Promise<boolean>);
};
/**
 * A `Workflow` allows for iterative preparation of an Ethereum transaction
 * that involves multiple steps. This includes Beanstalk's `farm()` function,
 * the `pipeMulti` and `pipeAdvanced` functions provided by Pipeline and Depot,
 * etc.
 *
 * ## BASICS
 *
 * There are three main components of a workflow:
 *
 * 1. **Step Generators** are asynchronous functions which create a Step. A Step
 *    Generator will often perform an on-chain lookup mixed with some post-processing
 *    to figure out what the result of a particular function call will be. For example,
 *    the Step Generator for Curve's `exchange()` function will use a static call to
 *    `get_dy` on the Curve pool of interest to determine how much of the requested
 *    token will be received during an exchange.
 *
 * 2. **Steps** represent single Ethereum function calls that will eventually
 *    be executed on-chain. Each Step includes functions to encode calldata,
 *    decode calldata, and decode the result of a function call.
 *
 * 3. The `encode()` function, which condenses each Step encoded within `.steps` into
 *    a single hex-encoded string for submission to Ethereum.
 *
 * ## NESTING
 *
 * `_generators` is a flat list of:
 *  a. StepFunction [a type of StepGenerator]
 *  b. StepClass    [a type of StepGenerator]
 *  c. Workflow
 *
 * Since a Workflow is a valid generator, you can nest Workflows within each other
 * and continue the chain of passing `amountOut` between StepGenerators.
 *
 * See `.buildStep()` for a description of how Workflows are handled.
 *
 * @fixme nesting a Farm inside a Farm should fail (?)
 */
export declare abstract class Workflow<EncodedResult extends any = string, RunData extends Record<string, any> = {}> {
    protected sdk: BeanstalkSDK;
    name: string;
    protected _generators: (StepGenerator<EncodedResult> | Workflow<EncodedResult>)[];
    protected _options: (StepGeneratorOptions | null)[];
    protected _steps: Step<EncodedResult>[];
    protected _value: ethers.BigNumber;
    protected _tagMap: {
        [key: string]: number;
    };
    static SLIPPAGE_PRECISION: number;
    constructor(sdk: BeanstalkSDK, name?: string);
    static slip(_amount: ethers.BigNumber, _slippage: number): ethers.BigNumber;
    static direction(_x1: Token, _x2: Token, _forward: boolean): Token[];
    clearSteps(): void;
    protected _copy<T extends Workflow<EncodedResult>>(WorkflowConstructor: new (...args: ConstructorParameters<typeof Workflow>) => T): T;
    get generators(): Readonly<(StepGenerator<EncodedResult> | Workflow<EncodedResult>)[]>;
    get length(): number;
    get value(): Readonly<ethers.BigNumber>;
    /**
     * Add new StepGenerator(s) to memory. Each StepGenerator is called during `.estimate()`.
     * @param input A StepGenerator, an nested array of StepGenerators, or another Workflow.
     * @param options Options passed to each individual StepGenerator in `input`.
     */
    add(input: StepGenerators<EncodedResult>, options?: StepGeneratorOptions): this;
    /**
     * Run a StepGenerator to produce a Step.
     */
    protected buildStep(input: StepGenerator<EncodedResult> | Workflow<EncodedResult>, amountInStep: ethers.BigNumber, context: RunContext): Promise<typeof this._steps[number]>;
    /**
     * Determine if this RunMode is "static". Static RunModes require
     * transactions to be fully built, i.e. no steps in the chain can be skipped.
     *
     * For example, you might skip a step that makes an approval during `estimate()`
     * because it requires a permit that the user hasn't yet signed. However, for
     * the transaction to be valid to `execute()` or `callStatic()`, the approval
     * step must be included.
     *
     * @fixme use: `return r > 1; // optimized form`
     */
    protected isStaticRunMode(r: RunMode): boolean;
    get tags(): Readonly<{
        [x: string]: number;
    }>;
    findTag(tag: string): number;
    addTag(tag: string, stepIndex: number): void;
    /**
     * @param amountIn
     * @param context
     */
    protected buildSteps(amountIn: ethers.BigNumber, _context: Omit<RunContext, "step">): Promise<ethers.BigNumber>;
    /**
     * Estimate what the workflow would output given this amountIn is the input.
     * For ex, if we are trading ETH -> BEAN, and you want to spend exactly 5 ETH, estimate()
     * would tell how much BEAN you'd receive for 5 ETH
     * @param amountIn Amount to send to workflow as input for estimation
     * @param context
     * @returns Promise of BigNumber
     */
    estimate(amountIn: ethers.BigNumber | TokenValue, context?: RunContext): Promise<ethers.BigNumber>;
    /**
     * Estimate the min amount to input to the workflow to receive the desiredAmountOut output
     * For ex, if we are trading ETH -> Bean, and I want exactly 500 BEAN, estimateReversed()
     * tell me how much ETH will result in 500 BEAN
     * @param desiredAmountOut The end amount you want the workflow to output
     * @returns Promise of BigNumber
     */
    estimateReversed(desiredAmountOut: ethers.BigNumber | TokenValue): Promise<ethers.BigNumber>;
    /**
     * Run `.estimate()` and encode all resulting Steps in preparation for execute().
     * Embed the requested runMode in context.
     *
     * @fixme collapse `runMode` and `data` into one struct?
     */
    protected estimateAndEncodeSteps(amountIn: ethers.BigNumber | TokenValue, runMode: RunMode, data: RunData): Promise<EncodedResult[]>;
    /**
     * Loop over a sequence of pre-estimated Steps and encode their calldata.
     */
    protected encodeSteps(): EncodedResult[];
    /**
     * Iteratively decode the result of `.callStatic()`.
     */
    decodeResult(callStaticResult: string[]): ethers.utils.Result[];
    /**
     * Encode this Workflow into a single hex string for submission to Ethereum.
     * This must be implemented by extensions of Workflow.
     */
    abstract encode(): string;
    /**
     * @param amountIn Amount to use as first input to Work
     * @param slippage A human readable percent value. Ex: 0.1 would mean 0.1% slippage
     * @returns Promise of a Transaction
     */
    abstract execute(amountIn: ethers.BigNumber | TokenValue, data: RunData): Promise<ethers.ContractTransaction>;
    /**
     * CallStatic version of the execute method. Allows testing the execution of the workflow.
     * @param amountIn Amount to use as first input to workflow
     * @param slippage A human readable percent value. Ex: 0.1 would mean 0.1% slippage
     * @returns Promise of a Transaction
     */
    abstract callStatic(amountIn: ethers.BigNumber | TokenValue, data: RunData): Promise<string[]>;
    /**
     *
     */
    abstract estimateGas(amountIn: ethers.BigNumber | TokenValue, data: RunData): Promise<ethers.BigNumber>;
}
export {};
