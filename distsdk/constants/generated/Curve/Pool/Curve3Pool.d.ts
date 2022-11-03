import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface Curve3PoolInterface extends utils.Interface {
    functions: {
        "A()": FunctionFragment;
        "get_virtual_price()": FunctionFragment;
        "calc_token_amount(uint256[3],bool)": FunctionFragment;
        "add_liquidity(uint256[3],uint256)": FunctionFragment;
        "get_dy(int128,int128,uint256)": FunctionFragment;
        "get_dy_underlying(int128,int128,uint256)": FunctionFragment;
        "exchange(int128,int128,uint256,uint256)": FunctionFragment;
        "remove_liquidity(uint256,uint256[3])": FunctionFragment;
        "remove_liquidity_imbalance(uint256[3],uint256)": FunctionFragment;
        "calc_withdraw_one_coin(uint256,int128)": FunctionFragment;
        "remove_liquidity_one_coin(uint256,int128,uint256)": FunctionFragment;
        "ramp_A(uint256,uint256)": FunctionFragment;
        "stop_ramp_A()": FunctionFragment;
        "commit_new_fee(uint256,uint256)": FunctionFragment;
        "apply_new_fee()": FunctionFragment;
        "revert_new_parameters()": FunctionFragment;
        "commit_transfer_ownership(address)": FunctionFragment;
        "apply_transfer_ownership()": FunctionFragment;
        "revert_transfer_ownership()": FunctionFragment;
        "admin_balances(uint256)": FunctionFragment;
        "withdraw_admin_fees()": FunctionFragment;
        "donate_admin_fees()": FunctionFragment;
        "kill_me()": FunctionFragment;
        "unkill_me()": FunctionFragment;
        "coins(uint256)": FunctionFragment;
        "balances(uint256)": FunctionFragment;
        "fee()": FunctionFragment;
        "admin_fee()": FunctionFragment;
        "owner()": FunctionFragment;
        "initial_A()": FunctionFragment;
        "future_A()": FunctionFragment;
        "initial_A_time()": FunctionFragment;
        "future_A_time()": FunctionFragment;
        "admin_actions_deadline()": FunctionFragment;
        "transfer_ownership_deadline()": FunctionFragment;
        "future_fee()": FunctionFragment;
        "future_admin_fee()": FunctionFragment;
        "future_owner()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "A" | "get_virtual_price" | "calc_token_amount" | "add_liquidity" | "get_dy" | "get_dy_underlying" | "exchange" | "remove_liquidity" | "remove_liquidity_imbalance" | "calc_withdraw_one_coin" | "remove_liquidity_one_coin" | "ramp_A" | "stop_ramp_A" | "commit_new_fee" | "apply_new_fee" | "revert_new_parameters" | "commit_transfer_ownership" | "apply_transfer_ownership" | "revert_transfer_ownership" | "admin_balances" | "withdraw_admin_fees" | "donate_admin_fees" | "kill_me" | "unkill_me" | "coins" | "balances" | "fee" | "admin_fee" | "owner" | "initial_A" | "future_A" | "initial_A_time" | "future_A_time" | "admin_actions_deadline" | "transfer_ownership_deadline" | "future_fee" | "future_admin_fee" | "future_owner"): FunctionFragment;
    encodeFunctionData(functionFragment: "A", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_virtual_price", values?: undefined): string;
    encodeFunctionData(functionFragment: "calc_token_amount", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "add_liquidity", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "get_dy", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "get_dy_underlying", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "exchange", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity", values: [
        PromiseOrValue<BigNumberish>,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ]
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_imbalance", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "calc_withdraw_one_coin", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_one_coin", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "ramp_A", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stop_ramp_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "commit_new_fee", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "apply_new_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "revert_new_parameters", values?: undefined): string;
    encodeFunctionData(functionFragment: "commit_transfer_ownership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "apply_transfer_ownership", values?: undefined): string;
    encodeFunctionData(functionFragment: "revert_transfer_ownership", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_balances", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdraw_admin_fees", values?: undefined): string;
    encodeFunctionData(functionFragment: "donate_admin_fees", values?: undefined): string;
    encodeFunctionData(functionFragment: "kill_me", values?: undefined): string;
    encodeFunctionData(functionFragment: "unkill_me", values?: undefined): string;
    encodeFunctionData(functionFragment: "coins", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balances", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_actions_deadline", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer_ownership_deadline", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_admin_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_owner", values?: undefined): string;
    decodeFunctionResult(functionFragment: "A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_virtual_price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_token_amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy_underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_imbalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_withdraw_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ramp_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop_ramp_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commit_new_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "apply_new_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revert_new_parameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commit_transfer_ownership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "apply_transfer_ownership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revert_transfer_ownership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw_admin_fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "donate_admin_fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kill_me", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unkill_me", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_actions_deadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer_ownership_deadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_admin_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_owner", data: BytesLike): Result;
    events: {
        "TokenExchange(address,int128,uint256,int128,uint256)": EventFragment;
        "AddLiquidity(address,uint256[3],uint256[3],uint256,uint256)": EventFragment;
        "RemoveLiquidity(address,uint256[3],uint256[3],uint256)": EventFragment;
        "RemoveLiquidityOne(address,uint256,uint256)": EventFragment;
        "RemoveLiquidityImbalance(address,uint256[3],uint256[3],uint256,uint256)": EventFragment;
        "CommitNewAdmin(uint256,address)": EventFragment;
        "NewAdmin(address)": EventFragment;
        "CommitNewFee(uint256,uint256,uint256)": EventFragment;
        "NewFee(uint256,uint256)": EventFragment;
        "RampA(uint256,uint256,uint256,uint256)": EventFragment;
        "StopRampA(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokenExchange"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveLiquidityOne"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveLiquidityImbalance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CommitNewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CommitNewFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RampA"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StopRampA"): EventFragment;
}
export interface TokenExchangeEventObject {
    buyer: string;
    sold_id: BigNumber;
    tokens_sold: BigNumber;
    bought_id: BigNumber;
    tokens_bought: BigNumber;
}
export declare type TokenExchangeEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], TokenExchangeEventObject>;
export declare type TokenExchangeEventFilter = TypedEventFilter<TokenExchangeEvent>;
export interface AddLiquidityEventObject {
    provider: string;
    token_amounts: [BigNumber, BigNumber, BigNumber];
    fees: [BigNumber, BigNumber, BigNumber];
    invariant: BigNumber;
    token_supply: BigNumber;
}
export declare type AddLiquidityEvent = TypedEvent<[
    string,
    [
        BigNumber,
        BigNumber,
        BigNumber
    ],
    [
        BigNumber,
        BigNumber,
        BigNumber
    ],
    BigNumber,
    BigNumber
], AddLiquidityEventObject>;
export declare type AddLiquidityEventFilter = TypedEventFilter<AddLiquidityEvent>;
export interface RemoveLiquidityEventObject {
    provider: string;
    token_amounts: [BigNumber, BigNumber, BigNumber];
    fees: [BigNumber, BigNumber, BigNumber];
    token_supply: BigNumber;
}
export declare type RemoveLiquidityEvent = TypedEvent<[
    string,
    [
        BigNumber,
        BigNumber,
        BigNumber
    ],
    [
        BigNumber,
        BigNumber,
        BigNumber
    ],
    BigNumber
], RemoveLiquidityEventObject>;
export declare type RemoveLiquidityEventFilter = TypedEventFilter<RemoveLiquidityEvent>;
export interface RemoveLiquidityOneEventObject {
    provider: string;
    token_amount: BigNumber;
    coin_amount: BigNumber;
}
export declare type RemoveLiquidityOneEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], RemoveLiquidityOneEventObject>;
export declare type RemoveLiquidityOneEventFilter = TypedEventFilter<RemoveLiquidityOneEvent>;
export interface RemoveLiquidityImbalanceEventObject {
    provider: string;
    token_amounts: [BigNumber, BigNumber, BigNumber];
    fees: [BigNumber, BigNumber, BigNumber];
    invariant: BigNumber;
    token_supply: BigNumber;
}
export declare type RemoveLiquidityImbalanceEvent = TypedEvent<[
    string,
    [
        BigNumber,
        BigNumber,
        BigNumber
    ],
    [
        BigNumber,
        BigNumber,
        BigNumber
    ],
    BigNumber,
    BigNumber
], RemoveLiquidityImbalanceEventObject>;
export declare type RemoveLiquidityImbalanceEventFilter = TypedEventFilter<RemoveLiquidityImbalanceEvent>;
export interface CommitNewAdminEventObject {
    deadline: BigNumber;
    admin: string;
}
export declare type CommitNewAdminEvent = TypedEvent<[
    BigNumber,
    string
], CommitNewAdminEventObject>;
export declare type CommitNewAdminEventFilter = TypedEventFilter<CommitNewAdminEvent>;
export interface NewAdminEventObject {
    admin: string;
}
export declare type NewAdminEvent = TypedEvent<[string], NewAdminEventObject>;
export declare type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;
export interface CommitNewFeeEventObject {
    deadline: BigNumber;
    fee: BigNumber;
    admin_fee: BigNumber;
}
export declare type CommitNewFeeEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], CommitNewFeeEventObject>;
export declare type CommitNewFeeEventFilter = TypedEventFilter<CommitNewFeeEvent>;
export interface NewFeeEventObject {
    fee: BigNumber;
    admin_fee: BigNumber;
}
export declare type NewFeeEvent = TypedEvent<[BigNumber, BigNumber], NewFeeEventObject>;
export declare type NewFeeEventFilter = TypedEventFilter<NewFeeEvent>;
export interface RampAEventObject {
    old_A: BigNumber;
    new_A: BigNumber;
    initial_time: BigNumber;
    future_time: BigNumber;
}
export declare type RampAEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], RampAEventObject>;
export declare type RampAEventFilter = TypedEventFilter<RampAEvent>;
export interface StopRampAEventObject {
    A: BigNumber;
    t: BigNumber;
}
export declare type StopRampAEvent = TypedEvent<[
    BigNumber,
    BigNumber
], StopRampAEventObject>;
export declare type StopRampAEventFilter = TypedEventFilter<StopRampAEvent>;
export interface Curve3Pool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Curve3PoolInterface;
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
        A(overrides?: CallOverrides): Promise<[BigNumber]>;
        get_virtual_price(overrides?: CallOverrides): Promise<[BigNumber]>;
        calc_token_amount(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
        add_liquidity(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        get_dy(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        get_dy_underlying(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        exchange(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        remove_liquidity(_amount: PromiseOrValue<BigNumberish>, min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        remove_liquidity_imbalance(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        calc_withdraw_one_coin(_token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        remove_liquidity_one_coin(_token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, min_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        ramp_A(_future_A: PromiseOrValue<BigNumberish>, _future_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stop_ramp_A(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        commit_new_fee(new_fee: PromiseOrValue<BigNumberish>, new_admin_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        apply_new_fee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revert_new_parameters(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        commit_transfer_ownership(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        apply_transfer_ownership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revert_transfer_ownership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        admin_balances(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        withdraw_admin_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        donate_admin_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        kill_me(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unkill_me(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        coins(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        admin_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        initial_A(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_A(overrides?: CallOverrides): Promise<[BigNumber]>;
        initial_A_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_A_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        admin_actions_deadline(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer_ownership_deadline(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_admin_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_owner(overrides?: CallOverrides): Promise<[string]>;
    };
    A(overrides?: CallOverrides): Promise<BigNumber>;
    get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
    calc_token_amount(amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    add_liquidity(amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    get_dy(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    get_dy_underlying(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    exchange(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    remove_liquidity(_amount: PromiseOrValue<BigNumberish>, min_amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    remove_liquidity_imbalance(amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    calc_withdraw_one_coin(_token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    remove_liquidity_one_coin(_token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, min_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    ramp_A(_future_A: PromiseOrValue<BigNumberish>, _future_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stop_ramp_A(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    commit_new_fee(new_fee: PromiseOrValue<BigNumberish>, new_admin_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    apply_new_fee(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revert_new_parameters(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    commit_transfer_ownership(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    apply_transfer_ownership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revert_transfer_ownership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    admin_balances(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    withdraw_admin_fees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    donate_admin_fees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    kill_me(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unkill_me(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    coins(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    fee(overrides?: CallOverrides): Promise<BigNumber>;
    admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    initial_A(overrides?: CallOverrides): Promise<BigNumber>;
    future_A(overrides?: CallOverrides): Promise<BigNumber>;
    initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
    future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
    admin_actions_deadline(overrides?: CallOverrides): Promise<BigNumber>;
    transfer_ownership_deadline(overrides?: CallOverrides): Promise<BigNumber>;
    future_fee(overrides?: CallOverrides): Promise<BigNumber>;
    future_admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
    future_owner(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        A(overrides?: CallOverrides): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        calc_token_amount(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        add_liquidity(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        get_dy(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        get_dy_underlying(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchange(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        remove_liquidity(_amount: PromiseOrValue<BigNumberish>, min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<void>;
        remove_liquidity_imbalance(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        calc_withdraw_one_coin(_token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        remove_liquidity_one_coin(_token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, min_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        ramp_A(_future_A: PromiseOrValue<BigNumberish>, _future_time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stop_ramp_A(overrides?: CallOverrides): Promise<void>;
        commit_new_fee(new_fee: PromiseOrValue<BigNumberish>, new_admin_fee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        apply_new_fee(overrides?: CallOverrides): Promise<void>;
        revert_new_parameters(overrides?: CallOverrides): Promise<void>;
        commit_transfer_ownership(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        apply_transfer_ownership(overrides?: CallOverrides): Promise<void>;
        revert_transfer_ownership(overrides?: CallOverrides): Promise<void>;
        admin_balances(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw_admin_fees(overrides?: CallOverrides): Promise<void>;
        donate_admin_fees(overrides?: CallOverrides): Promise<void>;
        kill_me(overrides?: CallOverrides): Promise<void>;
        unkill_me(overrides?: CallOverrides): Promise<void>;
        coins(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        initial_A(overrides?: CallOverrides): Promise<BigNumber>;
        future_A(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        admin_actions_deadline(overrides?: CallOverrides): Promise<BigNumber>;
        transfer_ownership_deadline(overrides?: CallOverrides): Promise<BigNumber>;
        future_fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_owner(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "TokenExchange(address,int128,uint256,int128,uint256)"(buyer?: PromiseOrValue<string> | null, sold_id?: null, tokens_sold?: null, bought_id?: null, tokens_bought?: null): TokenExchangeEventFilter;
        TokenExchange(buyer?: PromiseOrValue<string> | null, sold_id?: null, tokens_sold?: null, bought_id?: null, tokens_bought?: null): TokenExchangeEventFilter;
        "AddLiquidity(address,uint256[3],uint256[3],uint256,uint256)"(provider?: PromiseOrValue<string> | null, token_amounts?: null, fees?: null, invariant?: null, token_supply?: null): AddLiquidityEventFilter;
        AddLiquidity(provider?: PromiseOrValue<string> | null, token_amounts?: null, fees?: null, invariant?: null, token_supply?: null): AddLiquidityEventFilter;
        "RemoveLiquidity(address,uint256[3],uint256[3],uint256)"(provider?: PromiseOrValue<string> | null, token_amounts?: null, fees?: null, token_supply?: null): RemoveLiquidityEventFilter;
        RemoveLiquidity(provider?: PromiseOrValue<string> | null, token_amounts?: null, fees?: null, token_supply?: null): RemoveLiquidityEventFilter;
        "RemoveLiquidityOne(address,uint256,uint256)"(provider?: PromiseOrValue<string> | null, token_amount?: null, coin_amount?: null): RemoveLiquidityOneEventFilter;
        RemoveLiquidityOne(provider?: PromiseOrValue<string> | null, token_amount?: null, coin_amount?: null): RemoveLiquidityOneEventFilter;
        "RemoveLiquidityImbalance(address,uint256[3],uint256[3],uint256,uint256)"(provider?: PromiseOrValue<string> | null, token_amounts?: null, fees?: null, invariant?: null, token_supply?: null): RemoveLiquidityImbalanceEventFilter;
        RemoveLiquidityImbalance(provider?: PromiseOrValue<string> | null, token_amounts?: null, fees?: null, invariant?: null, token_supply?: null): RemoveLiquidityImbalanceEventFilter;
        "CommitNewAdmin(uint256,address)"(deadline?: PromiseOrValue<BigNumberish> | null, admin?: PromiseOrValue<string> | null): CommitNewAdminEventFilter;
        CommitNewAdmin(deadline?: PromiseOrValue<BigNumberish> | null, admin?: PromiseOrValue<string> | null): CommitNewAdminEventFilter;
        "NewAdmin(address)"(admin?: PromiseOrValue<string> | null): NewAdminEventFilter;
        NewAdmin(admin?: PromiseOrValue<string> | null): NewAdminEventFilter;
        "CommitNewFee(uint256,uint256,uint256)"(deadline?: PromiseOrValue<BigNumberish> | null, fee?: null, admin_fee?: null): CommitNewFeeEventFilter;
        CommitNewFee(deadline?: PromiseOrValue<BigNumberish> | null, fee?: null, admin_fee?: null): CommitNewFeeEventFilter;
        "NewFee(uint256,uint256)"(fee?: null, admin_fee?: null): NewFeeEventFilter;
        NewFee(fee?: null, admin_fee?: null): NewFeeEventFilter;
        "RampA(uint256,uint256,uint256,uint256)"(old_A?: null, new_A?: null, initial_time?: null, future_time?: null): RampAEventFilter;
        RampA(old_A?: null, new_A?: null, initial_time?: null, future_time?: null): RampAEventFilter;
        "StopRampA(uint256,uint256)"(A?: null, t?: null): StopRampAEventFilter;
        StopRampA(A?: null, t?: null): StopRampAEventFilter;
    };
    estimateGas: {
        A(overrides?: CallOverrides): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        calc_token_amount(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        add_liquidity(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        get_dy(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        get_dy_underlying(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchange(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remove_liquidity(_amount: PromiseOrValue<BigNumberish>, min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remove_liquidity_imbalance(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        calc_withdraw_one_coin(_token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        remove_liquidity_one_coin(_token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, min_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        ramp_A(_future_A: PromiseOrValue<BigNumberish>, _future_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stop_ramp_A(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        commit_new_fee(new_fee: PromiseOrValue<BigNumberish>, new_admin_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        apply_new_fee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revert_new_parameters(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        commit_transfer_ownership(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        apply_transfer_ownership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revert_transfer_ownership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        admin_balances(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw_admin_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        donate_admin_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        kill_me(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unkill_me(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        coins(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A(overrides?: CallOverrides): Promise<BigNumber>;
        future_A(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        admin_actions_deadline(overrides?: CallOverrides): Promise<BigNumber>;
        transfer_ownership_deadline(overrides?: CallOverrides): Promise<BigNumber>;
        future_fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_owner(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_virtual_price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calc_token_amount(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        add_liquidity(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        get_dy(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_dy_underlying(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchange(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remove_liquidity(_amount: PromiseOrValue<BigNumberish>, min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remove_liquidity_imbalance(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        calc_withdraw_one_coin(_token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove_liquidity_one_coin(_token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, min_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        ramp_A(_future_A: PromiseOrValue<BigNumberish>, _future_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stop_ramp_A(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        commit_new_fee(new_fee: PromiseOrValue<BigNumberish>, new_admin_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        apply_new_fee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revert_new_parameters(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        commit_transfer_ownership(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        apply_transfer_ownership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revert_transfer_ownership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        admin_balances(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw_admin_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        donate_admin_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        kill_me(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unkill_me(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        coins(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initial_A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initial_A_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_A_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin_actions_deadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer_ownership_deadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_admin_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
