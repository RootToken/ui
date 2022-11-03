import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface CurveTriCrypto2PoolInterface extends utils.Interface {
    functions: {
        "price_oracle(uint256)": FunctionFragment;
        "price_scale(uint256)": FunctionFragment;
        "last_prices(uint256)": FunctionFragment;
        "token()": FunctionFragment;
        "coins(uint256)": FunctionFragment;
        "A()": FunctionFragment;
        "gamma()": FunctionFragment;
        "fee()": FunctionFragment;
        "fee_calc(uint256[3])": FunctionFragment;
        "get_virtual_price()": FunctionFragment;
        "exchange(uint256,uint256,uint256,uint256)": FunctionFragment;
        "exchange(uint256,uint256,uint256,uint256,bool)": FunctionFragment;
        "get_dy(uint256,uint256,uint256)": FunctionFragment;
        "calc_token_fee(uint256[3],uint256[3])": FunctionFragment;
        "add_liquidity(uint256[3],uint256)": FunctionFragment;
        "remove_liquidity(uint256,uint256[3])": FunctionFragment;
        "calc_token_amount(uint256[3],bool)": FunctionFragment;
        "calc_withdraw_one_coin(uint256,uint256)": FunctionFragment;
        "remove_liquidity_one_coin(uint256,uint256,uint256)": FunctionFragment;
        "claim_admin_fees()": FunctionFragment;
        "ramp_A_gamma(uint256,uint256,uint256)": FunctionFragment;
        "stop_ramp_A_gamma()": FunctionFragment;
        "commit_new_parameters(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
        "apply_new_parameters()": FunctionFragment;
        "revert_new_parameters()": FunctionFragment;
        "commit_transfer_ownership(address)": FunctionFragment;
        "apply_transfer_ownership()": FunctionFragment;
        "revert_transfer_ownership()": FunctionFragment;
        "kill_me()": FunctionFragment;
        "unkill_me()": FunctionFragment;
        "set_admin_fee_receiver(address)": FunctionFragment;
        "last_prices_timestamp()": FunctionFragment;
        "initial_A_gamma()": FunctionFragment;
        "future_A_gamma()": FunctionFragment;
        "initial_A_gamma_time()": FunctionFragment;
        "future_A_gamma_time()": FunctionFragment;
        "allowed_extra_profit()": FunctionFragment;
        "future_allowed_extra_profit()": FunctionFragment;
        "fee_gamma()": FunctionFragment;
        "future_fee_gamma()": FunctionFragment;
        "adjustment_step()": FunctionFragment;
        "future_adjustment_step()": FunctionFragment;
        "ma_half_time()": FunctionFragment;
        "future_ma_half_time()": FunctionFragment;
        "mid_fee()": FunctionFragment;
        "out_fee()": FunctionFragment;
        "admin_fee()": FunctionFragment;
        "future_mid_fee()": FunctionFragment;
        "future_out_fee()": FunctionFragment;
        "future_admin_fee()": FunctionFragment;
        "balances(uint256)": FunctionFragment;
        "D()": FunctionFragment;
        "owner()": FunctionFragment;
        "future_owner()": FunctionFragment;
        "xcp_profit()": FunctionFragment;
        "xcp_profit_a()": FunctionFragment;
        "virtual_price()": FunctionFragment;
        "is_killed()": FunctionFragment;
        "kill_deadline()": FunctionFragment;
        "transfer_ownership_deadline()": FunctionFragment;
        "admin_actions_deadline()": FunctionFragment;
        "admin_fee_receiver()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "price_oracle" | "price_scale" | "last_prices" | "token" | "coins" | "A" | "gamma" | "fee" | "fee_calc" | "get_virtual_price" | "exchange(uint256,uint256,uint256,uint256)" | "exchange(uint256,uint256,uint256,uint256,bool)" | "get_dy" | "calc_token_fee" | "add_liquidity" | "remove_liquidity" | "calc_token_amount" | "calc_withdraw_one_coin" | "remove_liquidity_one_coin" | "claim_admin_fees" | "ramp_A_gamma" | "stop_ramp_A_gamma" | "commit_new_parameters" | "apply_new_parameters" | "revert_new_parameters" | "commit_transfer_ownership" | "apply_transfer_ownership" | "revert_transfer_ownership" | "kill_me" | "unkill_me" | "set_admin_fee_receiver" | "last_prices_timestamp" | "initial_A_gamma" | "future_A_gamma" | "initial_A_gamma_time" | "future_A_gamma_time" | "allowed_extra_profit" | "future_allowed_extra_profit" | "fee_gamma" | "future_fee_gamma" | "adjustment_step" | "future_adjustment_step" | "ma_half_time" | "future_ma_half_time" | "mid_fee" | "out_fee" | "admin_fee" | "future_mid_fee" | "future_out_fee" | "future_admin_fee" | "balances" | "D" | "owner" | "future_owner" | "xcp_profit" | "xcp_profit_a" | "virtual_price" | "is_killed" | "kill_deadline" | "transfer_ownership_deadline" | "admin_actions_deadline" | "admin_fee_receiver"): FunctionFragment;
    encodeFunctionData(functionFragment: "price_oracle", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "price_scale", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "last_prices", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "coins", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "A", values?: undefined): string;
    encodeFunctionData(functionFragment: "gamma", values?: undefined): string;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "fee_calc", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ]
    ]): string;
    encodeFunctionData(functionFragment: "get_virtual_price", values?: undefined): string;
    encodeFunctionData(functionFragment: "exchange(uint256,uint256,uint256,uint256)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "exchange(uint256,uint256,uint256,uint256,bool)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "get_dy", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "calc_token_fee", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ]
    ]): string;
    encodeFunctionData(functionFragment: "add_liquidity", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
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
    encodeFunctionData(functionFragment: "calc_token_amount", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "calc_withdraw_one_coin", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_one_coin", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "claim_admin_fees", values?: undefined): string;
    encodeFunctionData(functionFragment: "ramp_A_gamma", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "stop_ramp_A_gamma", values?: undefined): string;
    encodeFunctionData(functionFragment: "commit_new_parameters", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "apply_new_parameters", values?: undefined): string;
    encodeFunctionData(functionFragment: "revert_new_parameters", values?: undefined): string;
    encodeFunctionData(functionFragment: "commit_transfer_ownership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "apply_transfer_ownership", values?: undefined): string;
    encodeFunctionData(functionFragment: "revert_transfer_ownership", values?: undefined): string;
    encodeFunctionData(functionFragment: "kill_me", values?: undefined): string;
    encodeFunctionData(functionFragment: "unkill_me", values?: undefined): string;
    encodeFunctionData(functionFragment: "set_admin_fee_receiver", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "last_prices_timestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A_gamma", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A_gamma", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A_gamma_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A_gamma_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowed_extra_profit", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_allowed_extra_profit", values?: undefined): string;
    encodeFunctionData(functionFragment: "fee_gamma", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_fee_gamma", values?: undefined): string;
    encodeFunctionData(functionFragment: "adjustment_step", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_adjustment_step", values?: undefined): string;
    encodeFunctionData(functionFragment: "ma_half_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_ma_half_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "mid_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "out_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_mid_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_out_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_admin_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "balances", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "D", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "xcp_profit", values?: undefined): string;
    encodeFunctionData(functionFragment: "xcp_profit_a", values?: undefined): string;
    encodeFunctionData(functionFragment: "virtual_price", values?: undefined): string;
    encodeFunctionData(functionFragment: "is_killed", values?: undefined): string;
    encodeFunctionData(functionFragment: "kill_deadline", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer_ownership_deadline", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_actions_deadline", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_fee_receiver", values?: undefined): string;
    decodeFunctionResult(functionFragment: "price_oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price_scale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "last_prices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gamma", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee_calc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_virtual_price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange(uint256,uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange(uint256,uint256,uint256,uint256,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_token_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_token_amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_withdraw_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim_admin_fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ramp_A_gamma", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop_ramp_A_gamma", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commit_new_parameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "apply_new_parameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revert_new_parameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commit_transfer_ownership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "apply_transfer_ownership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revert_transfer_ownership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kill_me", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unkill_me", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set_admin_fee_receiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "last_prices_timestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A_gamma", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A_gamma", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A_gamma_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A_gamma_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowed_extra_profit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_allowed_extra_profit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee_gamma", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_fee_gamma", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adjustment_step", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_adjustment_step", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ma_half_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_ma_half_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mid_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "out_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_mid_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_out_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_admin_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "D", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xcp_profit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xcp_profit_a", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "virtual_price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "is_killed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kill_deadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer_ownership_deadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_actions_deadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_fee_receiver", data: BytesLike): Result;
    events: {
        "TokenExchange(address,uint256,uint256,uint256,uint256)": EventFragment;
        "AddLiquidity(address,uint256[3],uint256,uint256)": EventFragment;
        "RemoveLiquidity(address,uint256[3],uint256)": EventFragment;
        "RemoveLiquidityOne(address,uint256,uint256,uint256)": EventFragment;
        "CommitNewAdmin(uint256,address)": EventFragment;
        "NewAdmin(address)": EventFragment;
        "CommitNewParameters(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "NewParameters(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "RampAgamma(uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "StopRampA(uint256,uint256,uint256)": EventFragment;
        "ClaimAdminFee(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokenExchange"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveLiquidityOne"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CommitNewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CommitNewParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RampAgamma"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StopRampA"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimAdminFee"): EventFragment;
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
    fee: BigNumber;
    token_supply: BigNumber;
}
export declare type AddLiquidityEvent = TypedEvent<[
    string,
    [BigNumber, BigNumber, BigNumber],
    BigNumber,
    BigNumber
], AddLiquidityEventObject>;
export declare type AddLiquidityEventFilter = TypedEventFilter<AddLiquidityEvent>;
export interface RemoveLiquidityEventObject {
    provider: string;
    token_amounts: [BigNumber, BigNumber, BigNumber];
    token_supply: BigNumber;
}
export declare type RemoveLiquidityEvent = TypedEvent<[
    string,
    [BigNumber, BigNumber, BigNumber],
    BigNumber
], RemoveLiquidityEventObject>;
export declare type RemoveLiquidityEventFilter = TypedEventFilter<RemoveLiquidityEvent>;
export interface RemoveLiquidityOneEventObject {
    provider: string;
    token_amount: BigNumber;
    coin_index: BigNumber;
    coin_amount: BigNumber;
}
export declare type RemoveLiquidityOneEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], RemoveLiquidityOneEventObject>;
export declare type RemoveLiquidityOneEventFilter = TypedEventFilter<RemoveLiquidityOneEvent>;
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
export interface CommitNewParametersEventObject {
    deadline: BigNumber;
    admin_fee: BigNumber;
    mid_fee: BigNumber;
    out_fee: BigNumber;
    fee_gamma: BigNumber;
    allowed_extra_profit: BigNumber;
    adjustment_step: BigNumber;
    ma_half_time: BigNumber;
}
export declare type CommitNewParametersEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], CommitNewParametersEventObject>;
export declare type CommitNewParametersEventFilter = TypedEventFilter<CommitNewParametersEvent>;
export interface NewParametersEventObject {
    admin_fee: BigNumber;
    mid_fee: BigNumber;
    out_fee: BigNumber;
    fee_gamma: BigNumber;
    allowed_extra_profit: BigNumber;
    adjustment_step: BigNumber;
    ma_half_time: BigNumber;
}
export declare type NewParametersEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], NewParametersEventObject>;
export declare type NewParametersEventFilter = TypedEventFilter<NewParametersEvent>;
export interface RampAgammaEventObject {
    initial_A: BigNumber;
    future_A: BigNumber;
    initial_gamma: BigNumber;
    future_gamma: BigNumber;
    initial_time: BigNumber;
    future_time: BigNumber;
}
export declare type RampAgammaEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], RampAgammaEventObject>;
export declare type RampAgammaEventFilter = TypedEventFilter<RampAgammaEvent>;
export interface StopRampAEventObject {
    current_A: BigNumber;
    current_gamma: BigNumber;
    time: BigNumber;
}
export declare type StopRampAEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], StopRampAEventObject>;
export declare type StopRampAEventFilter = TypedEventFilter<StopRampAEvent>;
export interface ClaimAdminFeeEventObject {
    admin: string;
    tokens: BigNumber;
}
export declare type ClaimAdminFeeEvent = TypedEvent<[
    string,
    BigNumber
], ClaimAdminFeeEventObject>;
export declare type ClaimAdminFeeEventFilter = TypedEventFilter<ClaimAdminFeeEvent>;
export interface CurveTriCrypto2Pool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CurveTriCrypto2PoolInterface;
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
        price_oracle(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        price_scale(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        last_prices(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        coins(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        A(overrides?: CallOverrides): Promise<[BigNumber]>;
        gamma(overrides?: CallOverrides): Promise<[BigNumber]>;
        fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        fee_calc(xp: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<[BigNumber]>;
        get_virtual_price(overrides?: CallOverrides): Promise<[BigNumber]>;
        "exchange(uint256,uint256,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "exchange(uint256,uint256,uint256,uint256,bool)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, use_eth: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        get_dy(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        calc_token_fee(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], xp: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<[BigNumber]>;
        add_liquidity(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        remove_liquidity(_amount: PromiseOrValue<BigNumberish>, min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        calc_token_amount(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
        calc_withdraw_one_coin(token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        remove_liquidity_one_coin(token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, min_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claim_admin_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        ramp_A_gamma(future_A: PromiseOrValue<BigNumberish>, future_gamma: PromiseOrValue<BigNumberish>, future_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stop_ramp_A_gamma(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        commit_new_parameters(_new_mid_fee: PromiseOrValue<BigNumberish>, _new_out_fee: PromiseOrValue<BigNumberish>, _new_admin_fee: PromiseOrValue<BigNumberish>, _new_fee_gamma: PromiseOrValue<BigNumberish>, _new_allowed_extra_profit: PromiseOrValue<BigNumberish>, _new_adjustment_step: PromiseOrValue<BigNumberish>, _new_ma_half_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        apply_new_parameters(overrides?: Overrides & {
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
        kill_me(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unkill_me(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        set_admin_fee_receiver(_admin_fee_receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        last_prices_timestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        initial_A_gamma(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_A_gamma(overrides?: CallOverrides): Promise<[BigNumber]>;
        initial_A_gamma_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_A_gamma_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        allowed_extra_profit(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_allowed_extra_profit(overrides?: CallOverrides): Promise<[BigNumber]>;
        fee_gamma(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_fee_gamma(overrides?: CallOverrides): Promise<[BigNumber]>;
        adjustment_step(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_adjustment_step(overrides?: CallOverrides): Promise<[BigNumber]>;
        ma_half_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_ma_half_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        mid_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        out_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        admin_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_mid_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_out_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_admin_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        D(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        future_owner(overrides?: CallOverrides): Promise<[string]>;
        xcp_profit(overrides?: CallOverrides): Promise<[BigNumber]>;
        xcp_profit_a(overrides?: CallOverrides): Promise<[BigNumber]>;
        virtual_price(overrides?: CallOverrides): Promise<[BigNumber]>;
        is_killed(overrides?: CallOverrides): Promise<[boolean]>;
        kill_deadline(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer_ownership_deadline(overrides?: CallOverrides): Promise<[BigNumber]>;
        admin_actions_deadline(overrides?: CallOverrides): Promise<[BigNumber]>;
        admin_fee_receiver(overrides?: CallOverrides): Promise<[string]>;
    };
    price_oracle(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    price_scale(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    last_prices(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    token(overrides?: CallOverrides): Promise<string>;
    coins(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    A(overrides?: CallOverrides): Promise<BigNumber>;
    gamma(overrides?: CallOverrides): Promise<BigNumber>;
    fee(overrides?: CallOverrides): Promise<BigNumber>;
    fee_calc(xp: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], overrides?: CallOverrides): Promise<BigNumber>;
    get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
    "exchange(uint256,uint256,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "exchange(uint256,uint256,uint256,uint256,bool)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, use_eth: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    get_dy(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    calc_token_fee(amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], xp: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], overrides?: CallOverrides): Promise<BigNumber>;
    add_liquidity(amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    remove_liquidity(_amount: PromiseOrValue<BigNumberish>, min_amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    calc_token_amount(amounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    calc_withdraw_one_coin(token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    remove_liquidity_one_coin(token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, min_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claim_admin_fees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    ramp_A_gamma(future_A: PromiseOrValue<BigNumberish>, future_gamma: PromiseOrValue<BigNumberish>, future_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stop_ramp_A_gamma(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    commit_new_parameters(_new_mid_fee: PromiseOrValue<BigNumberish>, _new_out_fee: PromiseOrValue<BigNumberish>, _new_admin_fee: PromiseOrValue<BigNumberish>, _new_fee_gamma: PromiseOrValue<BigNumberish>, _new_allowed_extra_profit: PromiseOrValue<BigNumberish>, _new_adjustment_step: PromiseOrValue<BigNumberish>, _new_ma_half_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    apply_new_parameters(overrides?: Overrides & {
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
    kill_me(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unkill_me(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    set_admin_fee_receiver(_admin_fee_receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    last_prices_timestamp(overrides?: CallOverrides): Promise<BigNumber>;
    initial_A_gamma(overrides?: CallOverrides): Promise<BigNumber>;
    future_A_gamma(overrides?: CallOverrides): Promise<BigNumber>;
    initial_A_gamma_time(overrides?: CallOverrides): Promise<BigNumber>;
    future_A_gamma_time(overrides?: CallOverrides): Promise<BigNumber>;
    allowed_extra_profit(overrides?: CallOverrides): Promise<BigNumber>;
    future_allowed_extra_profit(overrides?: CallOverrides): Promise<BigNumber>;
    fee_gamma(overrides?: CallOverrides): Promise<BigNumber>;
    future_fee_gamma(overrides?: CallOverrides): Promise<BigNumber>;
    adjustment_step(overrides?: CallOverrides): Promise<BigNumber>;
    future_adjustment_step(overrides?: CallOverrides): Promise<BigNumber>;
    ma_half_time(overrides?: CallOverrides): Promise<BigNumber>;
    future_ma_half_time(overrides?: CallOverrides): Promise<BigNumber>;
    mid_fee(overrides?: CallOverrides): Promise<BigNumber>;
    out_fee(overrides?: CallOverrides): Promise<BigNumber>;
    admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
    future_mid_fee(overrides?: CallOverrides): Promise<BigNumber>;
    future_out_fee(overrides?: CallOverrides): Promise<BigNumber>;
    future_admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
    balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    D(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    future_owner(overrides?: CallOverrides): Promise<string>;
    xcp_profit(overrides?: CallOverrides): Promise<BigNumber>;
    xcp_profit_a(overrides?: CallOverrides): Promise<BigNumber>;
    virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
    is_killed(overrides?: CallOverrides): Promise<boolean>;
    kill_deadline(overrides?: CallOverrides): Promise<BigNumber>;
    transfer_ownership_deadline(overrides?: CallOverrides): Promise<BigNumber>;
    admin_actions_deadline(overrides?: CallOverrides): Promise<BigNumber>;
    admin_fee_receiver(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        price_oracle(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        price_scale(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        last_prices(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<string>;
        coins(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        A(overrides?: CallOverrides): Promise<BigNumber>;
        gamma(overrides?: CallOverrides): Promise<BigNumber>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        fee_calc(xp: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        "exchange(uint256,uint256,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "exchange(uint256,uint256,uint256,uint256,bool)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, use_eth: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        get_dy(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calc_token_fee(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], xp: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<BigNumber>;
        add_liquidity(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        remove_liquidity(_amount: PromiseOrValue<BigNumberish>, min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<void>;
        calc_token_amount(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        calc_withdraw_one_coin(token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        remove_liquidity_one_coin(token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, min_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        claim_admin_fees(overrides?: CallOverrides): Promise<void>;
        ramp_A_gamma(future_A: PromiseOrValue<BigNumberish>, future_gamma: PromiseOrValue<BigNumberish>, future_time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stop_ramp_A_gamma(overrides?: CallOverrides): Promise<void>;
        commit_new_parameters(_new_mid_fee: PromiseOrValue<BigNumberish>, _new_out_fee: PromiseOrValue<BigNumberish>, _new_admin_fee: PromiseOrValue<BigNumberish>, _new_fee_gamma: PromiseOrValue<BigNumberish>, _new_allowed_extra_profit: PromiseOrValue<BigNumberish>, _new_adjustment_step: PromiseOrValue<BigNumberish>, _new_ma_half_time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        apply_new_parameters(overrides?: CallOverrides): Promise<void>;
        revert_new_parameters(overrides?: CallOverrides): Promise<void>;
        commit_transfer_ownership(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        apply_transfer_ownership(overrides?: CallOverrides): Promise<void>;
        revert_transfer_ownership(overrides?: CallOverrides): Promise<void>;
        kill_me(overrides?: CallOverrides): Promise<void>;
        unkill_me(overrides?: CallOverrides): Promise<void>;
        set_admin_fee_receiver(_admin_fee_receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        last_prices_timestamp(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_gamma(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_gamma(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_gamma_time(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_gamma_time(overrides?: CallOverrides): Promise<BigNumber>;
        allowed_extra_profit(overrides?: CallOverrides): Promise<BigNumber>;
        future_allowed_extra_profit(overrides?: CallOverrides): Promise<BigNumber>;
        fee_gamma(overrides?: CallOverrides): Promise<BigNumber>;
        future_fee_gamma(overrides?: CallOverrides): Promise<BigNumber>;
        adjustment_step(overrides?: CallOverrides): Promise<BigNumber>;
        future_adjustment_step(overrides?: CallOverrides): Promise<BigNumber>;
        ma_half_time(overrides?: CallOverrides): Promise<BigNumber>;
        future_ma_half_time(overrides?: CallOverrides): Promise<BigNumber>;
        mid_fee(overrides?: CallOverrides): Promise<BigNumber>;
        out_fee(overrides?: CallOverrides): Promise<BigNumber>;
        admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_mid_fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_out_fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        D(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        future_owner(overrides?: CallOverrides): Promise<string>;
        xcp_profit(overrides?: CallOverrides): Promise<BigNumber>;
        xcp_profit_a(overrides?: CallOverrides): Promise<BigNumber>;
        virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        is_killed(overrides?: CallOverrides): Promise<boolean>;
        kill_deadline(overrides?: CallOverrides): Promise<BigNumber>;
        transfer_ownership_deadline(overrides?: CallOverrides): Promise<BigNumber>;
        admin_actions_deadline(overrides?: CallOverrides): Promise<BigNumber>;
        admin_fee_receiver(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "TokenExchange(address,uint256,uint256,uint256,uint256)"(buyer?: PromiseOrValue<string> | null, sold_id?: null, tokens_sold?: null, bought_id?: null, tokens_bought?: null): TokenExchangeEventFilter;
        TokenExchange(buyer?: PromiseOrValue<string> | null, sold_id?: null, tokens_sold?: null, bought_id?: null, tokens_bought?: null): TokenExchangeEventFilter;
        "AddLiquidity(address,uint256[3],uint256,uint256)"(provider?: PromiseOrValue<string> | null, token_amounts?: null, fee?: null, token_supply?: null): AddLiquidityEventFilter;
        AddLiquidity(provider?: PromiseOrValue<string> | null, token_amounts?: null, fee?: null, token_supply?: null): AddLiquidityEventFilter;
        "RemoveLiquidity(address,uint256[3],uint256)"(provider?: PromiseOrValue<string> | null, token_amounts?: null, token_supply?: null): RemoveLiquidityEventFilter;
        RemoveLiquidity(provider?: PromiseOrValue<string> | null, token_amounts?: null, token_supply?: null): RemoveLiquidityEventFilter;
        "RemoveLiquidityOne(address,uint256,uint256,uint256)"(provider?: PromiseOrValue<string> | null, token_amount?: null, coin_index?: null, coin_amount?: null): RemoveLiquidityOneEventFilter;
        RemoveLiquidityOne(provider?: PromiseOrValue<string> | null, token_amount?: null, coin_index?: null, coin_amount?: null): RemoveLiquidityOneEventFilter;
        "CommitNewAdmin(uint256,address)"(deadline?: PromiseOrValue<BigNumberish> | null, admin?: PromiseOrValue<string> | null): CommitNewAdminEventFilter;
        CommitNewAdmin(deadline?: PromiseOrValue<BigNumberish> | null, admin?: PromiseOrValue<string> | null): CommitNewAdminEventFilter;
        "NewAdmin(address)"(admin?: PromiseOrValue<string> | null): NewAdminEventFilter;
        NewAdmin(admin?: PromiseOrValue<string> | null): NewAdminEventFilter;
        "CommitNewParameters(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)"(deadline?: PromiseOrValue<BigNumberish> | null, admin_fee?: null, mid_fee?: null, out_fee?: null, fee_gamma?: null, allowed_extra_profit?: null, adjustment_step?: null, ma_half_time?: null): CommitNewParametersEventFilter;
        CommitNewParameters(deadline?: PromiseOrValue<BigNumberish> | null, admin_fee?: null, mid_fee?: null, out_fee?: null, fee_gamma?: null, allowed_extra_profit?: null, adjustment_step?: null, ma_half_time?: null): CommitNewParametersEventFilter;
        "NewParameters(uint256,uint256,uint256,uint256,uint256,uint256,uint256)"(admin_fee?: null, mid_fee?: null, out_fee?: null, fee_gamma?: null, allowed_extra_profit?: null, adjustment_step?: null, ma_half_time?: null): NewParametersEventFilter;
        NewParameters(admin_fee?: null, mid_fee?: null, out_fee?: null, fee_gamma?: null, allowed_extra_profit?: null, adjustment_step?: null, ma_half_time?: null): NewParametersEventFilter;
        "RampAgamma(uint256,uint256,uint256,uint256,uint256,uint256)"(initial_A?: null, future_A?: null, initial_gamma?: null, future_gamma?: null, initial_time?: null, future_time?: null): RampAgammaEventFilter;
        RampAgamma(initial_A?: null, future_A?: null, initial_gamma?: null, future_gamma?: null, initial_time?: null, future_time?: null): RampAgammaEventFilter;
        "StopRampA(uint256,uint256,uint256)"(current_A?: null, current_gamma?: null, time?: null): StopRampAEventFilter;
        StopRampA(current_A?: null, current_gamma?: null, time?: null): StopRampAEventFilter;
        "ClaimAdminFee(address,uint256)"(admin?: PromiseOrValue<string> | null, tokens?: null): ClaimAdminFeeEventFilter;
        ClaimAdminFee(admin?: PromiseOrValue<string> | null, tokens?: null): ClaimAdminFeeEventFilter;
    };
    estimateGas: {
        price_oracle(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        price_scale(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        last_prices(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        coins(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        A(overrides?: CallOverrides): Promise<BigNumber>;
        gamma(overrides?: CallOverrides): Promise<BigNumber>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        fee_calc(xp: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        "exchange(uint256,uint256,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "exchange(uint256,uint256,uint256,uint256,bool)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, use_eth: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        get_dy(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calc_token_fee(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], xp: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<BigNumber>;
        add_liquidity(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remove_liquidity(_amount: PromiseOrValue<BigNumberish>, min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        calc_token_amount(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        calc_withdraw_one_coin(token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        remove_liquidity_one_coin(token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, min_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claim_admin_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        ramp_A_gamma(future_A: PromiseOrValue<BigNumberish>, future_gamma: PromiseOrValue<BigNumberish>, future_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stop_ramp_A_gamma(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        commit_new_parameters(_new_mid_fee: PromiseOrValue<BigNumberish>, _new_out_fee: PromiseOrValue<BigNumberish>, _new_admin_fee: PromiseOrValue<BigNumberish>, _new_fee_gamma: PromiseOrValue<BigNumberish>, _new_allowed_extra_profit: PromiseOrValue<BigNumberish>, _new_adjustment_step: PromiseOrValue<BigNumberish>, _new_ma_half_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        apply_new_parameters(overrides?: Overrides & {
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
        kill_me(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unkill_me(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        set_admin_fee_receiver(_admin_fee_receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        last_prices_timestamp(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_gamma(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_gamma(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_gamma_time(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_gamma_time(overrides?: CallOverrides): Promise<BigNumber>;
        allowed_extra_profit(overrides?: CallOverrides): Promise<BigNumber>;
        future_allowed_extra_profit(overrides?: CallOverrides): Promise<BigNumber>;
        fee_gamma(overrides?: CallOverrides): Promise<BigNumber>;
        future_fee_gamma(overrides?: CallOverrides): Promise<BigNumber>;
        adjustment_step(overrides?: CallOverrides): Promise<BigNumber>;
        future_adjustment_step(overrides?: CallOverrides): Promise<BigNumber>;
        ma_half_time(overrides?: CallOverrides): Promise<BigNumber>;
        future_ma_half_time(overrides?: CallOverrides): Promise<BigNumber>;
        mid_fee(overrides?: CallOverrides): Promise<BigNumber>;
        out_fee(overrides?: CallOverrides): Promise<BigNumber>;
        admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_mid_fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_out_fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        D(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        future_owner(overrides?: CallOverrides): Promise<BigNumber>;
        xcp_profit(overrides?: CallOverrides): Promise<BigNumber>;
        xcp_profit_a(overrides?: CallOverrides): Promise<BigNumber>;
        virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        is_killed(overrides?: CallOverrides): Promise<BigNumber>;
        kill_deadline(overrides?: CallOverrides): Promise<BigNumber>;
        transfer_ownership_deadline(overrides?: CallOverrides): Promise<BigNumber>;
        admin_actions_deadline(overrides?: CallOverrides): Promise<BigNumber>;
        admin_fee_receiver(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        price_oracle(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price_scale(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        last_prices(k: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        coins(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gamma(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fee_calc(xp: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_virtual_price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "exchange(uint256,uint256,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "exchange(uint256,uint256,uint256,uint256,bool)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, use_eth: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        get_dy(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calc_token_fee(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], xp: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        add_liquidity(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remove_liquidity(_amount: PromiseOrValue<BigNumberish>, min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        calc_token_amount(amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calc_withdraw_one_coin(token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove_liquidity_one_coin(token_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, min_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claim_admin_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        ramp_A_gamma(future_A: PromiseOrValue<BigNumberish>, future_gamma: PromiseOrValue<BigNumberish>, future_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stop_ramp_A_gamma(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        commit_new_parameters(_new_mid_fee: PromiseOrValue<BigNumberish>, _new_out_fee: PromiseOrValue<BigNumberish>, _new_admin_fee: PromiseOrValue<BigNumberish>, _new_fee_gamma: PromiseOrValue<BigNumberish>, _new_allowed_extra_profit: PromiseOrValue<BigNumberish>, _new_adjustment_step: PromiseOrValue<BigNumberish>, _new_ma_half_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        apply_new_parameters(overrides?: Overrides & {
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
        kill_me(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unkill_me(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        set_admin_fee_receiver(_admin_fee_receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        last_prices_timestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initial_A_gamma(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_A_gamma(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initial_A_gamma_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_A_gamma_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowed_extra_profit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_allowed_extra_profit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fee_gamma(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_fee_gamma(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        adjustment_step(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_adjustment_step(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ma_half_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_ma_half_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mid_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        out_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_mid_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_out_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_admin_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        D(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        xcp_profit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        xcp_profit_a(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        virtual_price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        is_killed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kill_deadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer_ownership_deadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin_actions_deadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin_fee_receiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
