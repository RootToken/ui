import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface CurveMetaFactoryInterface extends utils.Interface {
    functions: {
        "metapool_implementations(address)": FunctionFragment;
        "find_pool_for_coins(address,address)": FunctionFragment;
        "find_pool_for_coins(address,address,uint256)": FunctionFragment;
        "get_base_pool(address)": FunctionFragment;
        "get_n_coins(address)": FunctionFragment;
        "get_meta_n_coins(address)": FunctionFragment;
        "get_coins(address)": FunctionFragment;
        "get_underlying_coins(address)": FunctionFragment;
        "get_decimals(address)": FunctionFragment;
        "get_underlying_decimals(address)": FunctionFragment;
        "get_metapool_rates(address)": FunctionFragment;
        "get_balances(address)": FunctionFragment;
        "get_underlying_balances(address)": FunctionFragment;
        "get_A(address)": FunctionFragment;
        "get_fees(address)": FunctionFragment;
        "get_admin_balances(address)": FunctionFragment;
        "get_coin_indices(address,address,address)": FunctionFragment;
        "get_gauge(address)": FunctionFragment;
        "get_implementation_address(address)": FunctionFragment;
        "is_meta(address)": FunctionFragment;
        "get_pool_asset_type(address)": FunctionFragment;
        "get_fee_receiver(address)": FunctionFragment;
        "deploy_plain_pool(string,string,address[4],uint256,uint256)": FunctionFragment;
        "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256)": FunctionFragment;
        "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256,uint256)": FunctionFragment;
        "deploy_metapool(address,string,string,address,uint256,uint256)": FunctionFragment;
        "deploy_metapool(address,string,string,address,uint256,uint256,uint256)": FunctionFragment;
        "deploy_gauge(address)": FunctionFragment;
        "add_base_pool(address,address,uint256,address[10])": FunctionFragment;
        "set_metapool_implementations(address,address[10])": FunctionFragment;
        "set_plain_implementations(uint256,address[10])": FunctionFragment;
        "set_gauge_implementation(address)": FunctionFragment;
        "batch_set_pool_asset_type(address[32],uint256[32])": FunctionFragment;
        "commit_transfer_ownership(address)": FunctionFragment;
        "accept_transfer_ownership()": FunctionFragment;
        "set_manager(address)": FunctionFragment;
        "set_fee_receiver(address,address)": FunctionFragment;
        "convert_metapool_fees()": FunctionFragment;
        "add_existing_metapools(address[10])": FunctionFragment;
        "admin()": FunctionFragment;
        "future_admin()": FunctionFragment;
        "manager()": FunctionFragment;
        "pool_list(uint256)": FunctionFragment;
        "pool_count()": FunctionFragment;
        "base_pool_list(uint256)": FunctionFragment;
        "base_pool_count()": FunctionFragment;
        "base_pool_assets(address)": FunctionFragment;
        "plain_implementations(uint256,uint256)": FunctionFragment;
        "gauge_implementation()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "metapool_implementations" | "find_pool_for_coins(address,address)" | "find_pool_for_coins(address,address,uint256)" | "get_base_pool" | "get_n_coins" | "get_meta_n_coins" | "get_coins" | "get_underlying_coins" | "get_decimals" | "get_underlying_decimals" | "get_metapool_rates" | "get_balances" | "get_underlying_balances" | "get_A" | "get_fees" | "get_admin_balances" | "get_coin_indices" | "get_gauge" | "get_implementation_address" | "is_meta" | "get_pool_asset_type" | "get_fee_receiver" | "deploy_plain_pool(string,string,address[4],uint256,uint256)" | "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256)" | "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256,uint256)" | "deploy_metapool(address,string,string,address,uint256,uint256)" | "deploy_metapool(address,string,string,address,uint256,uint256,uint256)" | "deploy_gauge" | "add_base_pool" | "set_metapool_implementations" | "set_plain_implementations" | "set_gauge_implementation" | "batch_set_pool_asset_type" | "commit_transfer_ownership" | "accept_transfer_ownership" | "set_manager" | "set_fee_receiver" | "convert_metapool_fees" | "add_existing_metapools" | "admin" | "future_admin" | "manager" | "pool_list" | "pool_count" | "base_pool_list" | "base_pool_count" | "base_pool_assets" | "plain_implementations" | "gauge_implementation"): FunctionFragment;
    encodeFunctionData(functionFragment: "metapool_implementations", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "find_pool_for_coins(address,address)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "find_pool_for_coins(address,address,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "get_base_pool", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_n_coins", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_meta_n_coins", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_coins", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_underlying_coins", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_decimals", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_underlying_decimals", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_metapool_rates", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_balances", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_underlying_balances", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_A", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_fees", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_admin_balances", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_coin_indices", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "get_gauge", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_implementation_address", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "is_meta", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_pool_asset_type", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get_fee_receiver", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "deploy_plain_pool(string,string,address[4],uint256,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "deploy_metapool(address,string,string,address,uint256,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "deploy_metapool(address,string,string,address,uint256,uint256,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "deploy_gauge", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "add_base_pool", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[]
    ]): string;
    encodeFunctionData(functionFragment: "set_metapool_implementations", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "set_plain_implementations", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "set_gauge_implementation", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "batch_set_pool_asset_type", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "commit_transfer_ownership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "accept_transfer_ownership", values?: undefined): string;
    encodeFunctionData(functionFragment: "set_manager", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "set_fee_receiver", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "convert_metapool_fees", values?: undefined): string;
    encodeFunctionData(functionFragment: "add_existing_metapools", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "manager", values?: undefined): string;
    encodeFunctionData(functionFragment: "pool_list", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pool_count", values?: undefined): string;
    encodeFunctionData(functionFragment: "base_pool_list", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "base_pool_count", values?: undefined): string;
    encodeFunctionData(functionFragment: "base_pool_assets", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "plain_implementations", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "gauge_implementation", values?: undefined): string;
    decodeFunctionResult(functionFragment: "metapool_implementations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "find_pool_for_coins(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "find_pool_for_coins(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_base_pool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_n_coins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_meta_n_coins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_coins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_underlying_coins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_underlying_decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_metapool_rates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_underlying_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_admin_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_coin_indices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_gauge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_implementation_address", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "is_meta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_pool_asset_type", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_fee_receiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deploy_plain_pool(string,string,address[4],uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deploy_metapool(address,string,string,address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deploy_metapool(address,string,string,address,uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deploy_gauge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_base_pool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set_metapool_implementations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set_plain_implementations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set_gauge_implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batch_set_pool_asset_type", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commit_transfer_ownership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accept_transfer_ownership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set_manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set_fee_receiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convert_metapool_fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_existing_metapools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pool_list", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pool_count", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "base_pool_list", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "base_pool_count", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "base_pool_assets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "plain_implementations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gauge_implementation", data: BytesLike): Result;
    events: {
        "BasePoolAdded(address)": EventFragment;
        "PlainPoolDeployed(address[4],uint256,uint256,address)": EventFragment;
        "MetaPoolDeployed(address,address,uint256,uint256,address)": EventFragment;
        "LiquidityGaugeDeployed(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BasePoolAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlainPoolDeployed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MetaPoolDeployed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityGaugeDeployed"): EventFragment;
}
export interface BasePoolAddedEventObject {
    base_pool: string;
}
export declare type BasePoolAddedEvent = TypedEvent<[string], BasePoolAddedEventObject>;
export declare type BasePoolAddedEventFilter = TypedEventFilter<BasePoolAddedEvent>;
export interface PlainPoolDeployedEventObject {
    coins: [string, string, string, string];
    A: BigNumber;
    fee: BigNumber;
    deployer: string;
}
export declare type PlainPoolDeployedEvent = TypedEvent<[
    [string, string, string, string],
    BigNumber,
    BigNumber,
    string
], PlainPoolDeployedEventObject>;
export declare type PlainPoolDeployedEventFilter = TypedEventFilter<PlainPoolDeployedEvent>;
export interface MetaPoolDeployedEventObject {
    coin: string;
    base_pool: string;
    A: BigNumber;
    fee: BigNumber;
    deployer: string;
}
export declare type MetaPoolDeployedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    string
], MetaPoolDeployedEventObject>;
export declare type MetaPoolDeployedEventFilter = TypedEventFilter<MetaPoolDeployedEvent>;
export interface LiquidityGaugeDeployedEventObject {
    pool: string;
    gauge: string;
}
export declare type LiquidityGaugeDeployedEvent = TypedEvent<[
    string,
    string
], LiquidityGaugeDeployedEventObject>;
export declare type LiquidityGaugeDeployedEventFilter = TypedEventFilter<LiquidityGaugeDeployedEvent>;
export interface CurveMetaFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CurveMetaFactoryInterface;
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
        metapool_implementations(_base_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;
        "find_pool_for_coins(address,address)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        "find_pool_for_coins(address,address,uint256)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        get_base_pool(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        get_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        get_meta_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        get_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[[string, string, string, string]]>;
        get_underlying_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;
        get_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[[BigNumber, BigNumber, BigNumber, BigNumber]]>;
        get_underlying_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        get_metapool_rates(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[[BigNumber, BigNumber]]>;
        get_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[[BigNumber, BigNumber, BigNumber, BigNumber]]>;
        get_underlying_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        get_A(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        get_fees(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        get_admin_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[[BigNumber, BigNumber, BigNumber, BigNumber]]>;
        get_coin_indices(_pool: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, boolean]>;
        get_gauge(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        get_implementation_address(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        is_meta(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        get_pool_asset_type(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        get_fee_receiver(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        "deploy_plain_pool(string,string,address[4],uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _asset_type: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _asset_type: PromiseOrValue<BigNumberish>, _implementation_idx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "deploy_metapool(address,string,string,address,uint256,uint256)"(_base_pool: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "deploy_metapool(address,string,string,address,uint256,uint256,uint256)"(_base_pool: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _implementation_idx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deploy_gauge(_pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        add_base_pool(_base_pool: PromiseOrValue<string>, _fee_receiver: PromiseOrValue<string>, _asset_type: PromiseOrValue<BigNumberish>, _implementations: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        set_metapool_implementations(_base_pool: PromiseOrValue<string>, _implementations: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        set_plain_implementations(_n_coins: PromiseOrValue<BigNumberish>, _implementations: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        set_gauge_implementation(_gauge_implementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batch_set_pool_asset_type(_pools: PromiseOrValue<string>[], _asset_types: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        commit_transfer_ownership(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        accept_transfer_ownership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        set_manager(_manager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        set_fee_receiver(_base_pool: PromiseOrValue<string>, _fee_receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        convert_metapool_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        add_existing_metapools(_pools: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        future_admin(overrides?: CallOverrides): Promise<[string]>;
        manager(overrides?: CallOverrides): Promise<[string]>;
        pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        pool_count(overrides?: CallOverrides): Promise<[BigNumber]>;
        base_pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        base_pool_count(overrides?: CallOverrides): Promise<[BigNumber]>;
        base_pool_assets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        plain_implementations(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        gauge_implementation(overrides?: CallOverrides): Promise<[string]>;
    };
    metapool_implementations(_base_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    "find_pool_for_coins(address,address)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    "find_pool_for_coins(address,address,uint256)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    get_base_pool(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    get_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    get_meta_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    get_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string, string, string]>;
    get_underlying_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    get_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    get_underlying_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
    get_metapool_rates(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    get_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    get_underlying_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
    get_A(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    get_fees(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    get_admin_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    get_coin_indices(_pool: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, boolean]>;
    get_gauge(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    get_implementation_address(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    is_meta(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    get_pool_asset_type(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    get_fee_receiver(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    "deploy_plain_pool(string,string,address[4],uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _asset_type: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _asset_type: PromiseOrValue<BigNumberish>, _implementation_idx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "deploy_metapool(address,string,string,address,uint256,uint256)"(_base_pool: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "deploy_metapool(address,string,string,address,uint256,uint256,uint256)"(_base_pool: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _implementation_idx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deploy_gauge(_pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    add_base_pool(_base_pool: PromiseOrValue<string>, _fee_receiver: PromiseOrValue<string>, _asset_type: PromiseOrValue<BigNumberish>, _implementations: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    set_metapool_implementations(_base_pool: PromiseOrValue<string>, _implementations: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    set_plain_implementations(_n_coins: PromiseOrValue<BigNumberish>, _implementations: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    set_gauge_implementation(_gauge_implementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batch_set_pool_asset_type(_pools: PromiseOrValue<string>[], _asset_types: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    commit_transfer_ownership(_addr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    accept_transfer_ownership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    set_manager(_manager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    set_fee_receiver(_base_pool: PromiseOrValue<string>, _fee_receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    convert_metapool_fees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    add_existing_metapools(_pools: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    future_admin(overrides?: CallOverrides): Promise<string>;
    manager(overrides?: CallOverrides): Promise<string>;
    pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    pool_count(overrides?: CallOverrides): Promise<BigNumber>;
    base_pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    base_pool_count(overrides?: CallOverrides): Promise<BigNumber>;
    base_pool_assets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    plain_implementations(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    gauge_implementation(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        metapool_implementations(_base_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        "find_pool_for_coins(address,address)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "find_pool_for_coins(address,address,uint256)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        get_base_pool(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        get_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_meta_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        get_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string, string, string]>;
        get_underlying_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        get_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        get_underlying_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        get_metapool_rates(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        get_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        get_underlying_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        get_A(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_fees(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        get_admin_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        get_coin_indices(_pool: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, boolean]>;
        get_gauge(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        get_implementation_address(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        is_meta(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        get_pool_asset_type(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_fee_receiver(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "deploy_plain_pool(string,string,address[4],uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _asset_type: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _asset_type: PromiseOrValue<BigNumberish>, _implementation_idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        "deploy_metapool(address,string,string,address,uint256,uint256)"(_base_pool: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        "deploy_metapool(address,string,string,address,uint256,uint256,uint256)"(_base_pool: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _implementation_idx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        deploy_gauge(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        add_base_pool(_base_pool: PromiseOrValue<string>, _fee_receiver: PromiseOrValue<string>, _asset_type: PromiseOrValue<BigNumberish>, _implementations: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        set_metapool_implementations(_base_pool: PromiseOrValue<string>, _implementations: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        set_plain_implementations(_n_coins: PromiseOrValue<BigNumberish>, _implementations: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        set_gauge_implementation(_gauge_implementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        batch_set_pool_asset_type(_pools: PromiseOrValue<string>[], _asset_types: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        commit_transfer_ownership(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        accept_transfer_ownership(overrides?: CallOverrides): Promise<void>;
        set_manager(_manager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        set_fee_receiver(_base_pool: PromiseOrValue<string>, _fee_receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        convert_metapool_fees(overrides?: CallOverrides): Promise<boolean>;
        add_existing_metapools(_pools: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<boolean>;
        admin(overrides?: CallOverrides): Promise<string>;
        future_admin(overrides?: CallOverrides): Promise<string>;
        manager(overrides?: CallOverrides): Promise<string>;
        pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        pool_count(overrides?: CallOverrides): Promise<BigNumber>;
        base_pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        base_pool_count(overrides?: CallOverrides): Promise<BigNumber>;
        base_pool_assets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        plain_implementations(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        gauge_implementation(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "BasePoolAdded(address)"(base_pool?: null): BasePoolAddedEventFilter;
        BasePoolAdded(base_pool?: null): BasePoolAddedEventFilter;
        "PlainPoolDeployed(address[4],uint256,uint256,address)"(coins?: null, A?: null, fee?: null, deployer?: null): PlainPoolDeployedEventFilter;
        PlainPoolDeployed(coins?: null, A?: null, fee?: null, deployer?: null): PlainPoolDeployedEventFilter;
        "MetaPoolDeployed(address,address,uint256,uint256,address)"(coin?: null, base_pool?: null, A?: null, fee?: null, deployer?: null): MetaPoolDeployedEventFilter;
        MetaPoolDeployed(coin?: null, base_pool?: null, A?: null, fee?: null, deployer?: null): MetaPoolDeployedEventFilter;
        "LiquidityGaugeDeployed(address,address)"(pool?: null, gauge?: null): LiquidityGaugeDeployedEventFilter;
        LiquidityGaugeDeployed(pool?: null, gauge?: null): LiquidityGaugeDeployedEventFilter;
    };
    estimateGas: {
        metapool_implementations(_base_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "find_pool_for_coins(address,address)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "find_pool_for_coins(address,address,uint256)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        get_base_pool(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_meta_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_underlying_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_underlying_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_metapool_rates(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_underlying_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_A(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_fees(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_admin_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_coin_indices(_pool: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_gauge(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_implementation_address(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        is_meta(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_pool_asset_type(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        get_fee_receiver(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "deploy_plain_pool(string,string,address[4],uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _asset_type: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _asset_type: PromiseOrValue<BigNumberish>, _implementation_idx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "deploy_metapool(address,string,string,address,uint256,uint256)"(_base_pool: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "deploy_metapool(address,string,string,address,uint256,uint256,uint256)"(_base_pool: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _implementation_idx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deploy_gauge(_pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        add_base_pool(_base_pool: PromiseOrValue<string>, _fee_receiver: PromiseOrValue<string>, _asset_type: PromiseOrValue<BigNumberish>, _implementations: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        set_metapool_implementations(_base_pool: PromiseOrValue<string>, _implementations: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        set_plain_implementations(_n_coins: PromiseOrValue<BigNumberish>, _implementations: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        set_gauge_implementation(_gauge_implementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batch_set_pool_asset_type(_pools: PromiseOrValue<string>[], _asset_types: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        commit_transfer_ownership(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        accept_transfer_ownership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        set_manager(_manager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        set_fee_receiver(_base_pool: PromiseOrValue<string>, _fee_receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        convert_metapool_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        add_existing_metapools(_pools: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        future_admin(overrides?: CallOverrides): Promise<BigNumber>;
        manager(overrides?: CallOverrides): Promise<BigNumber>;
        pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pool_count(overrides?: CallOverrides): Promise<BigNumber>;
        base_pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        base_pool_count(overrides?: CallOverrides): Promise<BigNumber>;
        base_pool_assets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        plain_implementations(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        gauge_implementation(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        metapool_implementations(_base_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "find_pool_for_coins(address,address)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "find_pool_for_coins(address,address,uint256)"(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_base_pool(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_meta_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_underlying_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_underlying_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_metapool_rates(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_underlying_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_A(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_fees(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_admin_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_coin_indices(_pool: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_gauge(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_implementation_address(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        is_meta(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_pool_asset_type(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_fee_receiver(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "deploy_plain_pool(string,string,address[4],uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _asset_type: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "deploy_plain_pool(string,string,address[4],uint256,uint256,uint256,uint256)"(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coins: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ], _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _asset_type: PromiseOrValue<BigNumberish>, _implementation_idx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "deploy_metapool(address,string,string,address,uint256,uint256)"(_base_pool: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "deploy_metapool(address,string,string,address,uint256,uint256,uint256)"(_base_pool: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _coin: PromiseOrValue<string>, _A: PromiseOrValue<BigNumberish>, _fee: PromiseOrValue<BigNumberish>, _implementation_idx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deploy_gauge(_pool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        add_base_pool(_base_pool: PromiseOrValue<string>, _fee_receiver: PromiseOrValue<string>, _asset_type: PromiseOrValue<BigNumberish>, _implementations: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        set_metapool_implementations(_base_pool: PromiseOrValue<string>, _implementations: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        set_plain_implementations(_n_coins: PromiseOrValue<BigNumberish>, _implementations: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        set_gauge_implementation(_gauge_implementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batch_set_pool_asset_type(_pools: PromiseOrValue<string>[], _asset_types: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        commit_transfer_ownership(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        accept_transfer_ownership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        set_manager(_manager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        set_fee_receiver(_base_pool: PromiseOrValue<string>, _fee_receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        convert_metapool_fees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        add_existing_metapools(_pools: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pool_count(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        base_pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        base_pool_count(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        base_pool_assets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        plain_implementations(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gauge_implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
