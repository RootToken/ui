import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface CurveZapInterface extends utils.Interface {
    functions: {
        "add_liquidity(address,uint256[4],uint256)": FunctionFragment;
        "add_liquidity(address,uint256[4],uint256,address)": FunctionFragment;
        "remove_liquidity(address,uint256,uint256[4])": FunctionFragment;
        "remove_liquidity(address,uint256,uint256[4],address)": FunctionFragment;
        "remove_liquidity_one_coin(address,uint256,int128,uint256)": FunctionFragment;
        "remove_liquidity_one_coin(address,uint256,int128,uint256,address)": FunctionFragment;
        "remove_liquidity_imbalance(address,uint256[4],uint256)": FunctionFragment;
        "remove_liquidity_imbalance(address,uint256[4],uint256,address)": FunctionFragment;
        "calc_withdraw_one_coin(address,uint256,int128)": FunctionFragment;
        "calc_token_amount(address,uint256[4],bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "add_liquidity(address,uint256[4],uint256)" | "add_liquidity(address,uint256[4],uint256,address)" | "remove_liquidity(address,uint256,uint256[4])" | "remove_liquidity(address,uint256,uint256[4],address)" | "remove_liquidity_one_coin(address,uint256,int128,uint256)" | "remove_liquidity_one_coin(address,uint256,int128,uint256,address)" | "remove_liquidity_imbalance(address,uint256[4],uint256)" | "remove_liquidity_imbalance(address,uint256[4],uint256,address)" | "calc_withdraw_one_coin" | "calc_token_amount"): FunctionFragment;
    encodeFunctionData(functionFragment: "add_liquidity(address,uint256[4],uint256)", values: [
        PromiseOrValue<string>,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "add_liquidity(address,uint256[4],uint256,address)", values: [
        PromiseOrValue<string>,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity(address,uint256,uint256[4])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ]
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity(address,uint256,uint256[4],address)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_one_coin(address,uint256,int128,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_one_coin(address,uint256,int128,uint256,address)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_imbalance(address,uint256[4],uint256)", values: [
        PromiseOrValue<string>,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_imbalance(address,uint256[4],uint256,address)", values: [
        PromiseOrValue<string>,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "calc_withdraw_one_coin", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "calc_token_amount", values: [
        PromiseOrValue<string>,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<boolean>
    ]): string;
    decodeFunctionResult(functionFragment: "add_liquidity(address,uint256[4],uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_liquidity(address,uint256[4],uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity(address,uint256,uint256[4])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity(address,uint256,uint256[4],address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_one_coin(address,uint256,int128,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_one_coin(address,uint256,int128,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_imbalance(address,uint256[4],uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_imbalance(address,uint256[4],uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_withdraw_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_token_amount", data: BytesLike): Result;
    events: {};
}
export interface CurveZap extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CurveZapInterface;
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
        "add_liquidity(address,uint256[4],uint256)"(_pool: PromiseOrValue<string>, _deposit_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "add_liquidity(address,uint256[4],uint256,address)"(_pool: PromiseOrValue<string>, _deposit_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _min_mint_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "remove_liquidity(address,uint256,uint256[4])"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "remove_liquidity(address,uint256,uint256[4],address)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "remove_liquidity_one_coin(address,uint256,int128,uint256)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "remove_liquidity_one_coin(address,uint256,int128,uint256,address)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "remove_liquidity_imbalance(address,uint256[4],uint256)"(_pool: PromiseOrValue<string>, _amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "remove_liquidity_imbalance(address,uint256[4],uint256,address)"(_pool: PromiseOrValue<string>, _amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _max_burn_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        calc_withdraw_one_coin(_pool: PromiseOrValue<string>, _token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        calc_token_amount(_pool: PromiseOrValue<string>, _amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _is_deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    "add_liquidity(address,uint256[4],uint256)"(_pool: PromiseOrValue<string>, _deposit_amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "add_liquidity(address,uint256[4],uint256,address)"(_pool: PromiseOrValue<string>, _deposit_amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _min_mint_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "remove_liquidity(address,uint256,uint256[4])"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "remove_liquidity(address,uint256,uint256[4],address)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "remove_liquidity_one_coin(address,uint256,int128,uint256)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "remove_liquidity_one_coin(address,uint256,int128,uint256,address)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "remove_liquidity_imbalance(address,uint256[4],uint256)"(_pool: PromiseOrValue<string>, _amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "remove_liquidity_imbalance(address,uint256[4],uint256,address)"(_pool: PromiseOrValue<string>, _amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _max_burn_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    calc_withdraw_one_coin(_pool: PromiseOrValue<string>, _token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    calc_token_amount(_pool: PromiseOrValue<string>, _amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _is_deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        "add_liquidity(address,uint256[4],uint256)"(_pool: PromiseOrValue<string>, _deposit_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "add_liquidity(address,uint256[4],uint256,address)"(_pool: PromiseOrValue<string>, _deposit_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _min_mint_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "remove_liquidity(address,uint256,uint256[4])"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        "remove_liquidity(address,uint256,uint256[4],address)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        "remove_liquidity_one_coin(address,uint256,int128,uint256)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "remove_liquidity_one_coin(address,uint256,int128,uint256,address)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "remove_liquidity_imbalance(address,uint256[4],uint256)"(_pool: PromiseOrValue<string>, _amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "remove_liquidity_imbalance(address,uint256[4],uint256,address)"(_pool: PromiseOrValue<string>, _amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _max_burn_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        calc_withdraw_one_coin(_pool: PromiseOrValue<string>, _token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calc_token_amount(_pool: PromiseOrValue<string>, _amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _is_deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        "add_liquidity(address,uint256[4],uint256)"(_pool: PromiseOrValue<string>, _deposit_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "add_liquidity(address,uint256[4],uint256,address)"(_pool: PromiseOrValue<string>, _deposit_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _min_mint_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "remove_liquidity(address,uint256,uint256[4])"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "remove_liquidity(address,uint256,uint256[4],address)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "remove_liquidity_one_coin(address,uint256,int128,uint256)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "remove_liquidity_one_coin(address,uint256,int128,uint256,address)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "remove_liquidity_imbalance(address,uint256[4],uint256)"(_pool: PromiseOrValue<string>, _amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "remove_liquidity_imbalance(address,uint256[4],uint256,address)"(_pool: PromiseOrValue<string>, _amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _max_burn_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        calc_withdraw_one_coin(_pool: PromiseOrValue<string>, _token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calc_token_amount(_pool: PromiseOrValue<string>, _amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _is_deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        "add_liquidity(address,uint256[4],uint256)"(_pool: PromiseOrValue<string>, _deposit_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "add_liquidity(address,uint256[4],uint256,address)"(_pool: PromiseOrValue<string>, _deposit_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _min_mint_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "remove_liquidity(address,uint256,uint256[4])"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "remove_liquidity(address,uint256,uint256[4],address)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "remove_liquidity_one_coin(address,uint256,int128,uint256)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "remove_liquidity_one_coin(address,uint256,int128,uint256,address)"(_pool: PromiseOrValue<string>, _burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "remove_liquidity_imbalance(address,uint256[4],uint256)"(_pool: PromiseOrValue<string>, _amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "remove_liquidity_imbalance(address,uint256[4],uint256,address)"(_pool: PromiseOrValue<string>, _amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _max_burn_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        calc_withdraw_one_coin(_pool: PromiseOrValue<string>, _token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calc_token_amount(_pool: PromiseOrValue<string>, _amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _is_deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
