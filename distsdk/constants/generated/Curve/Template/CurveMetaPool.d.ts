import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface CurveMetaPoolInterface extends utils.Interface {
    functions: {
        "initialize(string,string,address,uint256,uint256,uint256,address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "get_previous_balances()": FunctionFragment;
        "get_balances()": FunctionFragment;
        "get_twap_balances(uint256[2],uint256[2],uint256)": FunctionFragment;
        "get_price_cumulative_last()": FunctionFragment;
        "admin_fee()": FunctionFragment;
        "A()": FunctionFragment;
        "A_precise()": FunctionFragment;
        "get_virtual_price()": FunctionFragment;
        "calc_token_amount(uint256[2],bool)": FunctionFragment;
        "calc_token_amount(uint256[2],bool,bool)": FunctionFragment;
        "add_liquidity(uint256[2],uint256)": FunctionFragment;
        "add_liquidity(uint256[2],uint256,address)": FunctionFragment;
        "get_dy(int128,int128,uint256)": FunctionFragment;
        "get_dy(int128,int128,uint256,uint256[2])": FunctionFragment;
        "get_dy_underlying(int128,int128,uint256)": FunctionFragment;
        "get_dy_underlying(int128,int128,uint256,uint256[2])": FunctionFragment;
        "exchange(int128,int128,uint256,uint256)": FunctionFragment;
        "exchange(int128,int128,uint256,uint256,address)": FunctionFragment;
        "exchange_underlying(int128,int128,uint256,uint256)": FunctionFragment;
        "exchange_underlying(int128,int128,uint256,uint256,address)": FunctionFragment;
        "remove_liquidity(uint256,uint256[2])": FunctionFragment;
        "remove_liquidity(uint256,uint256[2],address)": FunctionFragment;
        "remove_liquidity_imbalance(uint256[2],uint256)": FunctionFragment;
        "remove_liquidity_imbalance(uint256[2],uint256,address)": FunctionFragment;
        "calc_withdraw_one_coin(uint256,int128)": FunctionFragment;
        "calc_withdraw_one_coin(uint256,int128,bool)": FunctionFragment;
        "remove_liquidity_one_coin(uint256,int128,uint256)": FunctionFragment;
        "remove_liquidity_one_coin(uint256,int128,uint256,address)": FunctionFragment;
        "ramp_A(uint256,uint256)": FunctionFragment;
        "stop_ramp_A()": FunctionFragment;
        "admin_balances(uint256)": FunctionFragment;
        "withdraw_admin_fees()": FunctionFragment;
        "admin()": FunctionFragment;
        "coins(uint256)": FunctionFragment;
        "balances(uint256)": FunctionFragment;
        "fee()": FunctionFragment;
        "block_timestamp_last()": FunctionFragment;
        "initial_A()": FunctionFragment;
        "future_A()": FunctionFragment;
        "initial_A_time()": FunctionFragment;
        "future_A_time()": FunctionFragment;
        "name()": FunctionFragment;
        "symbol()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "totalSupply()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initialize" | "decimals" | "transfer" | "transferFrom" | "approve" | "get_previous_balances" | "get_balances" | "get_twap_balances" | "get_price_cumulative_last" | "admin_fee" | "A" | "A_precise" | "get_virtual_price" | "calc_token_amount(uint256[2],bool)" | "calc_token_amount(uint256[2],bool,bool)" | "add_liquidity(uint256[2],uint256)" | "add_liquidity(uint256[2],uint256,address)" | "get_dy(int128,int128,uint256)" | "get_dy(int128,int128,uint256,uint256[2])" | "get_dy_underlying(int128,int128,uint256)" | "get_dy_underlying(int128,int128,uint256,uint256[2])" | "exchange(int128,int128,uint256,uint256)" | "exchange(int128,int128,uint256,uint256,address)" | "exchange_underlying(int128,int128,uint256,uint256)" | "exchange_underlying(int128,int128,uint256,uint256,address)" | "remove_liquidity(uint256,uint256[2])" | "remove_liquidity(uint256,uint256[2],address)" | "remove_liquidity_imbalance(uint256[2],uint256)" | "remove_liquidity_imbalance(uint256[2],uint256,address)" | "calc_withdraw_one_coin(uint256,int128)" | "calc_withdraw_one_coin(uint256,int128,bool)" | "remove_liquidity_one_coin(uint256,int128,uint256)" | "remove_liquidity_one_coin(uint256,int128,uint256,address)" | "ramp_A" | "stop_ramp_A" | "admin_balances" | "withdraw_admin_fees" | "admin" | "coins" | "balances" | "fee" | "block_timestamp_last" | "initial_A" | "future_A" | "initial_A_time" | "future_A_time" | "name" | "symbol" | "balanceOf" | "allowance" | "totalSupply"): FunctionFragment;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "get_previous_balances", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_balances", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_twap_balances", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "get_price_cumulative_last", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "A", values?: undefined): string;
    encodeFunctionData(functionFragment: "A_precise", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_virtual_price", values?: undefined): string;
    encodeFunctionData(functionFragment: "calc_token_amount(uint256[2],bool)", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "calc_token_amount(uint256[2],bool,bool)", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "add_liquidity(uint256[2],uint256)", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "add_liquidity(uint256[2],uint256,address)", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "get_dy(int128,int128,uint256)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "get_dy(int128,int128,uint256,uint256[2])", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ]
    ]): string;
    encodeFunctionData(functionFragment: "get_dy_underlying(int128,int128,uint256)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "get_dy_underlying(int128,int128,uint256,uint256[2])", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ]
    ]): string;
    encodeFunctionData(functionFragment: "exchange(int128,int128,uint256,uint256)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "exchange(int128,int128,uint256,uint256,address)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "exchange_underlying(int128,int128,uint256,uint256)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "exchange_underlying(int128,int128,uint256,uint256,address)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity(uint256,uint256[2])", values: [
        PromiseOrValue<BigNumberish>,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ]
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity(uint256,uint256[2],address)", values: [
        PromiseOrValue<BigNumberish>,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_imbalance(uint256[2],uint256)", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_imbalance(uint256[2],uint256,address)", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "calc_withdraw_one_coin(uint256,int128)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "calc_withdraw_one_coin(uint256,int128,bool)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_one_coin(uint256,int128,uint256)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_one_coin(uint256,int128,uint256,address)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "ramp_A", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stop_ramp_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_balances", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdraw_admin_fees", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "coins", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balances", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "block_timestamp_last", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_previous_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_twap_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_price_cumulative_last", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "A_precise", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_virtual_price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_token_amount(uint256[2],bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_token_amount(uint256[2],bool,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_liquidity(uint256[2],uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_liquidity(uint256[2],uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy(int128,int128,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy(int128,int128,uint256,uint256[2])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy_underlying(int128,int128,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy_underlying(int128,int128,uint256,uint256[2])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange(int128,int128,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange(int128,int128,uint256,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange_underlying(int128,int128,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange_underlying(int128,int128,uint256,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity(uint256,uint256[2])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity(uint256,uint256[2],address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_imbalance(uint256[2],uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_imbalance(uint256[2],uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_withdraw_one_coin(uint256,int128)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_withdraw_one_coin(uint256,int128,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_one_coin(uint256,int128,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_one_coin(uint256,int128,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ramp_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop_ramp_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw_admin_fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "block_timestamp_last", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    events: {
        "Transfer(address,address,uint256)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "TokenExchange(address,int128,uint256,int128,uint256)": EventFragment;
        "TokenExchangeUnderlying(address,int128,uint256,int128,uint256)": EventFragment;
        "AddLiquidity(address,uint256[2],uint256[2],uint256,uint256)": EventFragment;
        "RemoveLiquidity(address,uint256[2],uint256[2],uint256)": EventFragment;
        "RemoveLiquidityOne(address,uint256,uint256,uint256)": EventFragment;
        "RemoveLiquidityImbalance(address,uint256[2],uint256[2],uint256,uint256)": EventFragment;
        "CommitNewAdmin(uint256,address)": EventFragment;
        "NewAdmin(address)": EventFragment;
        "CommitNewFee(uint256,uint256,uint256)": EventFragment;
        "NewFee(uint256,uint256)": EventFragment;
        "RampA(uint256,uint256,uint256,uint256)": EventFragment;
        "StopRampA(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenExchange"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenExchangeUnderlying"): EventFragment;
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
export interface TransferEventObject {
    sender: string;
    receiver: string;
    value: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
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
export interface TokenExchangeUnderlyingEventObject {
    buyer: string;
    sold_id: BigNumber;
    tokens_sold: BigNumber;
    bought_id: BigNumber;
    tokens_bought: BigNumber;
}
export declare type TokenExchangeUnderlyingEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], TokenExchangeUnderlyingEventObject>;
export declare type TokenExchangeUnderlyingEventFilter = TypedEventFilter<TokenExchangeUnderlyingEvent>;
export interface AddLiquidityEventObject {
    provider: string;
    token_amounts: [BigNumber, BigNumber];
    fees: [BigNumber, BigNumber];
    invariant: BigNumber;
    token_supply: BigNumber;
}
export declare type AddLiquidityEvent = TypedEvent<[
    string,
    [
        BigNumber,
        BigNumber
    ],
    [
        BigNumber,
        BigNumber
    ],
    BigNumber,
    BigNumber
], AddLiquidityEventObject>;
export declare type AddLiquidityEventFilter = TypedEventFilter<AddLiquidityEvent>;
export interface RemoveLiquidityEventObject {
    provider: string;
    token_amounts: [BigNumber, BigNumber];
    fees: [BigNumber, BigNumber];
    token_supply: BigNumber;
}
export declare type RemoveLiquidityEvent = TypedEvent<[
    string,
    [BigNumber, BigNumber],
    [BigNumber, BigNumber],
    BigNumber
], RemoveLiquidityEventObject>;
export declare type RemoveLiquidityEventFilter = TypedEventFilter<RemoveLiquidityEvent>;
export interface RemoveLiquidityOneEventObject {
    provider: string;
    token_amount: BigNumber;
    coin_amount: BigNumber;
    token_supply: BigNumber;
}
export declare type RemoveLiquidityOneEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], RemoveLiquidityOneEventObject>;
export declare type RemoveLiquidityOneEventFilter = TypedEventFilter<RemoveLiquidityOneEvent>;
export interface RemoveLiquidityImbalanceEventObject {
    provider: string;
    token_amounts: [BigNumber, BigNumber];
    fees: [BigNumber, BigNumber];
    invariant: BigNumber;
    token_supply: BigNumber;
}
export declare type RemoveLiquidityImbalanceEvent = TypedEvent<[
    string,
    [
        BigNumber,
        BigNumber
    ],
    [
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
export interface CurveMetaPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CurveMetaPoolInterface;
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
        initialize(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _decimals: PromiseOrValue<BigNumberish>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approve(_spender: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        get_previous_balances(overrides?: CallOverrides): Promise<[[BigNumber, BigNumber]]>;
        get_balances(overrides?: CallOverrides): Promise<[[BigNumber, BigNumber]]>;
        get_twap_balances(_first_balances: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _last_balances: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _time_elapsed: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[[BigNumber, BigNumber]]>;
        get_price_cumulative_last(overrides?: CallOverrides): Promise<[[BigNumber, BigNumber]]>;
        admin_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        A(overrides?: CallOverrides): Promise<[BigNumber]>;
        A_precise(overrides?: CallOverrides): Promise<[BigNumber]>;
        get_virtual_price(overrides?: CallOverrides): Promise<[BigNumber]>;
        "calc_token_amount(uint256[2],bool)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _is_deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "calc_token_amount(uint256[2],bool,bool)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _is_deposit: PromiseOrValue<boolean>, _previous: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "add_liquidity(uint256[2],uint256)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "add_liquidity(uint256[2],uint256,address)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _min_mint_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "get_dy(int128,int128,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "get_dy(int128,int128,uint256,uint256[2])"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, _balances: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<[BigNumber]>;
        "get_dy_underlying(int128,int128,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "get_dy_underlying(int128,int128,uint256,uint256[2])"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, _balances: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<[BigNumber]>;
        "exchange(int128,int128,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "exchange(int128,int128,uint256,uint256,address)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "exchange_underlying(int128,int128,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "exchange_underlying(int128,int128,uint256,uint256,address)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "remove_liquidity(uint256,uint256[2])"(_burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "remove_liquidity(uint256,uint256[2],address)"(_burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "remove_liquidity_imbalance(uint256[2],uint256)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "remove_liquidity_imbalance(uint256[2],uint256,address)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _max_burn_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "calc_withdraw_one_coin(uint256,int128)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "calc_withdraw_one_coin(uint256,int128,bool)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _previous: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "remove_liquidity_one_coin(uint256,int128,uint256)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_received: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "remove_liquidity_one_coin(uint256,int128,uint256,address)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_received: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        ramp_A(_future_A: PromiseOrValue<BigNumberish>, _future_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stop_ramp_A(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        admin_balances(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        withdraw_admin_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        coins(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        block_timestamp_last(overrides?: CallOverrides): Promise<[BigNumber]>;
        initial_A(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_A(overrides?: CallOverrides): Promise<[BigNumber]>;
        initial_A_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_A_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    initialize(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _decimals: PromiseOrValue<BigNumberish>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approve(_spender: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    get_previous_balances(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    get_balances(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    get_twap_balances(_first_balances: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _last_balances: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _time_elapsed: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    get_price_cumulative_last(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
    A(overrides?: CallOverrides): Promise<BigNumber>;
    A_precise(overrides?: CallOverrides): Promise<BigNumber>;
    get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
    "calc_token_amount(uint256[2],bool)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _is_deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    "calc_token_amount(uint256[2],bool,bool)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _is_deposit: PromiseOrValue<boolean>, _previous: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    "add_liquidity(uint256[2],uint256)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "add_liquidity(uint256[2],uint256,address)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _min_mint_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "get_dy(int128,int128,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    "get_dy(int128,int128,uint256,uint256[2])"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, _balances: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<BigNumber>;
    "get_dy_underlying(int128,int128,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    "get_dy_underlying(int128,int128,uint256,uint256[2])"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, _balances: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<BigNumber>;
    "exchange(int128,int128,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "exchange(int128,int128,uint256,uint256,address)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "exchange_underlying(int128,int128,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "exchange_underlying(int128,int128,uint256,uint256,address)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "remove_liquidity(uint256,uint256[2])"(_burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "remove_liquidity(uint256,uint256[2],address)"(_burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "remove_liquidity_imbalance(uint256[2],uint256)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "remove_liquidity_imbalance(uint256[2],uint256,address)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _max_burn_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "calc_withdraw_one_coin(uint256,int128)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    "calc_withdraw_one_coin(uint256,int128,bool)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _previous: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    "remove_liquidity_one_coin(uint256,int128,uint256)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_received: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "remove_liquidity_one_coin(uint256,int128,uint256,address)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_received: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    ramp_A(_future_A: PromiseOrValue<BigNumberish>, _future_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stop_ramp_A(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    admin_balances(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    withdraw_admin_fees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    coins(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    fee(overrides?: CallOverrides): Promise<BigNumber>;
    block_timestamp_last(overrides?: CallOverrides): Promise<BigNumber>;
    initial_A(overrides?: CallOverrides): Promise<BigNumber>;
    future_A(overrides?: CallOverrides): Promise<BigNumber>;
    initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
    future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    symbol(overrides?: CallOverrides): Promise<string>;
    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        initialize(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _decimals: PromiseOrValue<BigNumberish>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        approve(_spender: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        get_previous_balances(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        get_balances(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        get_twap_balances(_first_balances: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _last_balances: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _time_elapsed: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        get_price_cumulative_last(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        A(overrides?: CallOverrides): Promise<BigNumber>;
        A_precise(overrides?: CallOverrides): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        "calc_token_amount(uint256[2],bool)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _is_deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        "calc_token_amount(uint256[2],bool,bool)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _is_deposit: PromiseOrValue<boolean>, _previous: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        "add_liquidity(uint256[2],uint256)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "add_liquidity(uint256[2],uint256,address)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _min_mint_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "get_dy(int128,int128,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "get_dy(int128,int128,uint256,uint256[2])"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, _balances: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<BigNumber>;
        "get_dy_underlying(int128,int128,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "get_dy_underlying(int128,int128,uint256,uint256[2])"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, _balances: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<BigNumber>;
        "exchange(int128,int128,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "exchange(int128,int128,uint256,uint256,address)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "exchange_underlying(int128,int128,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "exchange_underlying(int128,int128,uint256,uint256,address)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "remove_liquidity(uint256,uint256[2])"(_burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        "remove_liquidity(uint256,uint256[2],address)"(_burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        "remove_liquidity_imbalance(uint256[2],uint256)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "remove_liquidity_imbalance(uint256[2],uint256,address)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _max_burn_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "calc_withdraw_one_coin(uint256,int128)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "calc_withdraw_one_coin(uint256,int128,bool)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _previous: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        "remove_liquidity_one_coin(uint256,int128,uint256)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_received: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "remove_liquidity_one_coin(uint256,int128,uint256,address)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_received: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        ramp_A(_future_A: PromiseOrValue<BigNumberish>, _future_time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stop_ramp_A(overrides?: CallOverrides): Promise<void>;
        admin_balances(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw_admin_fees(overrides?: CallOverrides): Promise<void>;
        admin(overrides?: CallOverrides): Promise<string>;
        coins(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        block_timestamp_last(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A(overrides?: CallOverrides): Promise<BigNumber>;
        future_A(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        symbol(overrides?: CallOverrides): Promise<string>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Transfer(address,address,uint256)"(sender?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(sender?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "TokenExchange(address,int128,uint256,int128,uint256)"(buyer?: PromiseOrValue<string> | null, sold_id?: null, tokens_sold?: null, bought_id?: null, tokens_bought?: null): TokenExchangeEventFilter;
        TokenExchange(buyer?: PromiseOrValue<string> | null, sold_id?: null, tokens_sold?: null, bought_id?: null, tokens_bought?: null): TokenExchangeEventFilter;
        "TokenExchangeUnderlying(address,int128,uint256,int128,uint256)"(buyer?: PromiseOrValue<string> | null, sold_id?: null, tokens_sold?: null, bought_id?: null, tokens_bought?: null): TokenExchangeUnderlyingEventFilter;
        TokenExchangeUnderlying(buyer?: PromiseOrValue<string> | null, sold_id?: null, tokens_sold?: null, bought_id?: null, tokens_bought?: null): TokenExchangeUnderlyingEventFilter;
        "AddLiquidity(address,uint256[2],uint256[2],uint256,uint256)"(provider?: PromiseOrValue<string> | null, token_amounts?: null, fees?: null, invariant?: null, token_supply?: null): AddLiquidityEventFilter;
        AddLiquidity(provider?: PromiseOrValue<string> | null, token_amounts?: null, fees?: null, invariant?: null, token_supply?: null): AddLiquidityEventFilter;
        "RemoveLiquidity(address,uint256[2],uint256[2],uint256)"(provider?: PromiseOrValue<string> | null, token_amounts?: null, fees?: null, token_supply?: null): RemoveLiquidityEventFilter;
        RemoveLiquidity(provider?: PromiseOrValue<string> | null, token_amounts?: null, fees?: null, token_supply?: null): RemoveLiquidityEventFilter;
        "RemoveLiquidityOne(address,uint256,uint256,uint256)"(provider?: PromiseOrValue<string> | null, token_amount?: null, coin_amount?: null, token_supply?: null): RemoveLiquidityOneEventFilter;
        RemoveLiquidityOne(provider?: PromiseOrValue<string> | null, token_amount?: null, coin_amount?: null, token_supply?: null): RemoveLiquidityOneEventFilter;
        "RemoveLiquidityImbalance(address,uint256[2],uint256[2],uint256,uint256)"(provider?: PromiseOrValue<string> | null, token_amounts?: null, fees?: null, invariant?: null, token_supply?: null): RemoveLiquidityImbalanceEventFilter;
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
        initialize(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _decimals: PromiseOrValue<BigNumberish>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approve(_spender: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        get_previous_balances(overrides?: CallOverrides): Promise<BigNumber>;
        get_balances(overrides?: CallOverrides): Promise<BigNumber>;
        get_twap_balances(_first_balances: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _last_balances: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _time_elapsed: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        get_price_cumulative_last(overrides?: CallOverrides): Promise<BigNumber>;
        admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        A(overrides?: CallOverrides): Promise<BigNumber>;
        A_precise(overrides?: CallOverrides): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        "calc_token_amount(uint256[2],bool)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _is_deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        "calc_token_amount(uint256[2],bool,bool)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _is_deposit: PromiseOrValue<boolean>, _previous: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        "add_liquidity(uint256[2],uint256)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "add_liquidity(uint256[2],uint256,address)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _min_mint_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "get_dy(int128,int128,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "get_dy(int128,int128,uint256,uint256[2])"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, _balances: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<BigNumber>;
        "get_dy_underlying(int128,int128,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "get_dy_underlying(int128,int128,uint256,uint256[2])"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, _balances: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<BigNumber>;
        "exchange(int128,int128,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "exchange(int128,int128,uint256,uint256,address)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "exchange_underlying(int128,int128,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "exchange_underlying(int128,int128,uint256,uint256,address)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "remove_liquidity(uint256,uint256[2])"(_burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "remove_liquidity(uint256,uint256[2],address)"(_burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "remove_liquidity_imbalance(uint256[2],uint256)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "remove_liquidity_imbalance(uint256[2],uint256,address)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _max_burn_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "calc_withdraw_one_coin(uint256,int128)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "calc_withdraw_one_coin(uint256,int128,bool)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _previous: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        "remove_liquidity_one_coin(uint256,int128,uint256)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_received: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "remove_liquidity_one_coin(uint256,int128,uint256,address)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_received: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        ramp_A(_future_A: PromiseOrValue<BigNumberish>, _future_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stop_ramp_A(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        admin_balances(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw_admin_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        coins(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        block_timestamp_last(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A(overrides?: CallOverrides): Promise<BigNumber>;
        future_A(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        initialize(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _decimals: PromiseOrValue<BigNumberish>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approve(_spender: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        get_previous_balances(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_balances(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_twap_balances(_first_balances: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _last_balances: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _time_elapsed: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_price_cumulative_last(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        A_precise(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_virtual_price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "calc_token_amount(uint256[2],bool)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _is_deposit: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "calc_token_amount(uint256[2],bool,bool)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _is_deposit: PromiseOrValue<boolean>, _previous: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "add_liquidity(uint256[2],uint256)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _min_mint_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "add_liquidity(uint256[2],uint256,address)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _min_mint_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "get_dy(int128,int128,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "get_dy(int128,int128,uint256,uint256[2])"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, _balances: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "get_dy_underlying(int128,int128,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "get_dy_underlying(int128,int128,uint256,uint256[2])"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, _balances: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "exchange(int128,int128,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "exchange(int128,int128,uint256,uint256,address)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "exchange_underlying(int128,int128,uint256,uint256)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "exchange_underlying(int128,int128,uint256,uint256,address)"(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "remove_liquidity(uint256,uint256[2])"(_burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "remove_liquidity(uint256,uint256[2],address)"(_burn_amount: PromiseOrValue<BigNumberish>, _min_amounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "remove_liquidity_imbalance(uint256[2],uint256)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _max_burn_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "remove_liquidity_imbalance(uint256[2],uint256,address)"(_amounts: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _max_burn_amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "calc_withdraw_one_coin(uint256,int128)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "calc_withdraw_one_coin(uint256,int128,bool)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _previous: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "remove_liquidity_one_coin(uint256,int128,uint256)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_received: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "remove_liquidity_one_coin(uint256,int128,uint256,address)"(_burn_amount: PromiseOrValue<BigNumberish>, i: PromiseOrValue<BigNumberish>, _min_received: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        ramp_A(_future_A: PromiseOrValue<BigNumberish>, _future_time: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stop_ramp_A(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        admin_balances(i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw_admin_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        coins(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balances(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        block_timestamp_last(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initial_A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initial_A_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_A_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
