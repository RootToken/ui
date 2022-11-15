import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare type AdvancedPipeStruct = {
    target: PromiseOrValue<string>;
    callData: PromiseOrValue<BytesLike>;
    advancedData: PromiseOrValue<BytesLike>;
};
export declare type AdvancedPipeStructOutput = [string, string, string] & {
    target: string;
    callData: string;
    advancedData: string;
};
export declare type PipeStruct = {
    target: PromiseOrValue<string>;
    data: PromiseOrValue<BytesLike>;
};
export declare type PipeStructOutput = [string, string] & {
    target: string;
    data: string;
};
export interface PipelineInterface extends utils.Interface {
    functions: {
        "advancedPipe((address,bytes,bytes)[])": FunctionFragment;
        "multiPipe((address,bytes)[])": FunctionFragment;
        "pipe((address,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "advancedPipe" | "multiPipe" | "pipe"): FunctionFragment;
    encodeFunctionData(functionFragment: "advancedPipe", values: [AdvancedPipeStruct[]]): string;
    encodeFunctionData(functionFragment: "multiPipe", values: [PipeStruct[]]): string;
    encodeFunctionData(functionFragment: "pipe", values: [PipeStruct]): string;
    decodeFunctionResult(functionFragment: "advancedPipe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiPipe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pipe", data: BytesLike): Result;
    events: {};
}
export interface Pipeline extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PipelineInterface;
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
        advancedPipe(pipes: AdvancedPipeStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        multiPipe(pipes: PipeStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pipe(p: PipeStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    advancedPipe(pipes: AdvancedPipeStruct[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    multiPipe(pipes: PipeStruct[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pipe(p: PipeStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        advancedPipe(pipes: AdvancedPipeStruct[], overrides?: CallOverrides): Promise<string[]>;
        multiPipe(pipes: PipeStruct[], overrides?: CallOverrides): Promise<string[]>;
        pipe(p: PipeStruct, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        advancedPipe(pipes: AdvancedPipeStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        multiPipe(pipes: PipeStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pipe(p: PipeStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        advancedPipe(pipes: AdvancedPipeStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        multiPipe(pipes: PipeStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pipe(p: PipeStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
