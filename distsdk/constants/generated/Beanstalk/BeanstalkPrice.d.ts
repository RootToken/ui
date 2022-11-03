import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace P {
    type PoolStruct = {
        pool: PromiseOrValue<string>;
        tokens: [PromiseOrValue<string>, PromiseOrValue<string>];
        balances: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
        price: PromiseOrValue<BigNumberish>;
        liquidity: PromiseOrValue<BigNumberish>;
        deltaB: PromiseOrValue<BigNumberish>;
        lpSupply: PromiseOrValue<BigNumberish>;
        lpUsd: PromiseOrValue<BigNumberish>;
        lpBdv: PromiseOrValue<BigNumberish>;
    };
    type PoolStructOutput = [
        string,
        [
            string,
            string
        ],
        [
            BigNumber,
            BigNumber
        ],
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        pool: string;
        tokens: [string, string];
        balances: [BigNumber, BigNumber];
        price: BigNumber;
        liquidity: BigNumber;
        deltaB: BigNumber;
        lpSupply: BigNumber;
        lpUsd: BigNumber;
        lpBdv: BigNumber;
    };
}
export declare namespace BeanstalkPrice {
    type PricesStruct = {
        price: PromiseOrValue<BigNumberish>;
        liquidity: PromiseOrValue<BigNumberish>;
        deltaB: PromiseOrValue<BigNumberish>;
        ps: P.PoolStruct[];
    };
    type PricesStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        P.PoolStructOutput[]
    ] & {
        price: BigNumber;
        liquidity: BigNumber;
        deltaB: BigNumber;
        ps: P.PoolStructOutput[];
    };
}
export interface BeanstalkPriceInterface extends utils.Interface {
    functions: {
        "getCurve()": FunctionFragment;
        "price()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getCurve" | "price"): FunctionFragment;
    encodeFunctionData(functionFragment: "getCurve", values?: undefined): string;
    encodeFunctionData(functionFragment: "price", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getCurve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    events: {};
}
export interface BeanstalkPrice extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BeanstalkPriceInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getCurve(overrides?: CallOverrides): Promise<[P.PoolStructOutput] & {
            pool: P.PoolStructOutput;
        }>;
        price(overrides?: CallOverrides): Promise<[
            BeanstalkPrice.PricesStructOutput
        ] & {
            p: BeanstalkPrice.PricesStructOutput;
        }>;
    };
    getCurve(overrides?: CallOverrides): Promise<P.PoolStructOutput>;
    price(overrides?: CallOverrides): Promise<BeanstalkPrice.PricesStructOutput>;
    callStatic: {
        getCurve(overrides?: CallOverrides): Promise<P.PoolStructOutput>;
        price(overrides?: CallOverrides): Promise<BeanstalkPrice.PricesStructOutput>;
    };
    filters: {};
    estimateGas: {
        getCurve(overrides?: CallOverrides): Promise<BigNumber>;
        price(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getCurve(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
