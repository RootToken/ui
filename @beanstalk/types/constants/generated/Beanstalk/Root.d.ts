import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare type DepositTransferStruct = {
    token: PromiseOrValue<string>;
    seasons: PromiseOrValue<BigNumberish>[];
    amounts: PromiseOrValue<BigNumberish>[];
};
export declare type DepositTransferStructOutput = [string, number[], BigNumber[]] & {
    token: string;
    seasons: number[];
    amounts: BigNumber[];
};
export interface RootInterface extends utils.Interface {
    functions: {
        "BEANSTALK_ADDRESS()": FunctionFragment;
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "addWhitelistToken(address)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "bdvPerRoot()": FunctionFragment;
        "claimOwnership()": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "earn()": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "initialize(string,string)": FunctionFragment;
        "mint((address,uint32[],uint256[])[],uint8,uint256)": FunctionFragment;
        "mintWithTokenPermit((address,uint32[],uint256[])[],uint8,uint256,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "mintWithTokensPermit((address,uint32[],uint256[])[],uint8,uint256,address[],uint256[],uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerCandidate()": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "redeem((address,uint32[],uint256[])[],uint8,uint256)": FunctionFragment;
        "redeemWithFarmBalancePermit((address,uint32[],uint256[])[],uint8,uint256,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "removeWhitelistToken(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setDelegate(address,address,bytes32)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "underlyingBdv()": FunctionFragment;
        "updateBdv(address,uint32)": FunctionFragment;
        "updateBdvs(address[],uint32[])": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "whitelisted(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BEANSTALK_ADDRESS" | "DOMAIN_SEPARATOR" | "addWhitelistToken" | "allowance" | "approve" | "balanceOf" | "bdvPerRoot" | "claimOwnership" | "decimals" | "decreaseAllowance" | "earn" | "increaseAllowance" | "initialize" | "mint" | "mintWithTokenPermit" | "mintWithTokensPermit" | "name" | "nonces" | "owner" | "ownerCandidate" | "permit" | "proxiableUUID" | "redeem" | "redeemWithFarmBalancePermit" | "removeWhitelistToken" | "renounceOwnership" | "setDelegate" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership" | "underlyingBdv" | "updateBdv" | "updateBdvs" | "upgradeTo" | "upgradeToAndCall" | "whitelisted"): FunctionFragment;
    encodeFunctionData(functionFragment: "BEANSTALK_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "addWhitelistToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "bdvPerRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "earn", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [
        DepositTransferStruct[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "mintWithTokenPermit", values: [
        DepositTransferStruct[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "mintWithTokensPermit", values: [
        DepositTransferStruct[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerCandidate", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values: [
        DepositTransferStruct[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "redeemWithFarmBalancePermit", values: [
        DepositTransferStruct[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "removeWhitelistToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setDelegate", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "underlyingBdv", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateBdv", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateBdvs", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "whitelisted", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "BEANSTALK_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addWhitelistToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bdvPerRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintWithTokenPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintWithTokensPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerCandidate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemWithFarmBalancePermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeWhitelistToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlyingBdv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBdv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBdvs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelisted", data: BytesLike): Result;
    events: {
        "AddWhitelistToken(address)": EventFragment;
        "AdminChanged(address,address)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Mint(address,tuple[],uint256,uint256,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Redeem(address,tuple[],uint256,uint256,uint256,uint256)": EventFragment;
        "RemoveWhitelistToken(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddWhitelistToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveWhitelistToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface AddWhitelistTokenEventObject {
    token: string;
}
export declare type AddWhitelistTokenEvent = TypedEvent<[
    string
], AddWhitelistTokenEventObject>;
export declare type AddWhitelistTokenEventFilter = TypedEventFilter<AddWhitelistTokenEvent>;
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export declare type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export declare type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
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
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export declare type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export declare type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface InitializedEventObject {
    version: number;
}
export declare type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface MintEventObject {
    account: string;
    deposits: DepositTransferStructOutput[];
    bdv: BigNumber;
    stalk: BigNumber;
    seeds: BigNumber;
    shares: BigNumber;
}
export declare type MintEvent = TypedEvent<[
    string,
    DepositTransferStructOutput[],
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], MintEventObject>;
export declare type MintEventFilter = TypedEventFilter<MintEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface RedeemEventObject {
    account: string;
    deposits: DepositTransferStructOutput[];
    bdv: BigNumber;
    stalk: BigNumber;
    seeds: BigNumber;
    shares: BigNumber;
}
export declare type RedeemEvent = TypedEvent<[
    string,
    DepositTransferStructOutput[],
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], RedeemEventObject>;
export declare type RedeemEventFilter = TypedEventFilter<RedeemEvent>;
export interface RemoveWhitelistTokenEventObject {
    token: string;
}
export declare type RemoveWhitelistTokenEvent = TypedEvent<[
    string
], RemoveWhitelistTokenEventObject>;
export declare type RemoveWhitelistTokenEventFilter = TypedEventFilter<RemoveWhitelistTokenEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export declare type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export declare type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface Root extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RootInterface;
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
        BEANSTALK_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        addWhitelistToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        bdvPerRoot(overrides?: CallOverrides): Promise<[BigNumber]>;
        claimOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        earn(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mint(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintWithTokenPermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintWithTokensPermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerCandidate(overrides?: CallOverrides): Promise<[string]>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        redeem(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, maxRootsIn: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemWithFarmBalancePermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, maxRootsIn: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeWhitelistToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDelegate(_delegateContract: PromiseOrValue<string>, _delegate: PromiseOrValue<string>, _snapshotId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        underlyingBdv(overrides?: CallOverrides): Promise<[BigNumber]>;
        updateBdv(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateBdvs(tokens: PromiseOrValue<string>[], seasons: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    BEANSTALK_ADDRESS(overrides?: CallOverrides): Promise<string>;
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    addWhitelistToken(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    bdvPerRoot(overrides?: CallOverrides): Promise<BigNumber>;
    claimOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    earn(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mint(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintWithTokenPermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintWithTokensPermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerCandidate(overrides?: CallOverrides): Promise<string>;
    permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    redeem(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, maxRootsIn: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemWithFarmBalancePermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, maxRootsIn: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeWhitelistToken(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDelegate(_delegateContract: PromiseOrValue<string>, _delegate: PromiseOrValue<string>, _snapshotId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    underlyingBdv(overrides?: CallOverrides): Promise<BigNumber>;
    updateBdv(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateBdvs(tokens: PromiseOrValue<string>[], seasons: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        BEANSTALK_ADDRESS(overrides?: CallOverrides): Promise<string>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        addWhitelistToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bdvPerRoot(overrides?: CallOverrides): Promise<BigNumber>;
        claimOwnership(overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        earn(overrides?: CallOverrides): Promise<void>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        mint(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        mintWithTokenPermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        mintWithTokensPermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerCandidate(overrides?: CallOverrides): Promise<string>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        redeem(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, maxRootsIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        redeemWithFarmBalancePermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, maxRootsIn: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        removeWhitelistToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setDelegate(_delegateContract: PromiseOrValue<string>, _delegate: PromiseOrValue<string>, _snapshotId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        underlyingBdv(overrides?: CallOverrides): Promise<BigNumber>;
        updateBdv(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateBdvs(tokens: PromiseOrValue<string>[], seasons: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        whitelisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AddWhitelistToken(address)"(token?: PromiseOrValue<string> | null): AddWhitelistTokenEventFilter;
        AddWhitelistToken(token?: PromiseOrValue<string> | null): AddWhitelistTokenEventFilter;
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Mint(address,tuple[],uint256,uint256,uint256,uint256)"(account?: PromiseOrValue<string> | null, deposits?: null, bdv?: null, stalk?: null, seeds?: null, shares?: null): MintEventFilter;
        Mint(account?: PromiseOrValue<string> | null, deposits?: null, bdv?: null, stalk?: null, seeds?: null, shares?: null): MintEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Redeem(address,tuple[],uint256,uint256,uint256,uint256)"(account?: PromiseOrValue<string> | null, deposits?: null, bdv?: null, stalk?: null, seeds?: null, shares?: null): RedeemEventFilter;
        Redeem(account?: PromiseOrValue<string> | null, deposits?: null, bdv?: null, stalk?: null, seeds?: null, shares?: null): RedeemEventFilter;
        "RemoveWhitelistToken(address)"(token?: PromiseOrValue<string> | null): RemoveWhitelistTokenEventFilter;
        RemoveWhitelistToken(token?: PromiseOrValue<string> | null): RemoveWhitelistTokenEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    };
    estimateGas: {
        BEANSTALK_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        addWhitelistToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        bdvPerRoot(overrides?: CallOverrides): Promise<BigNumber>;
        claimOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        earn(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mint(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintWithTokenPermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintWithTokensPermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerCandidate(overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, maxRootsIn: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemWithFarmBalancePermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, maxRootsIn: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeWhitelistToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDelegate(_delegateContract: PromiseOrValue<string>, _delegate: PromiseOrValue<string>, _snapshotId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        underlyingBdv(overrides?: CallOverrides): Promise<BigNumber>;
        updateBdv(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateBdvs(tokens: PromiseOrValue<string>[], seasons: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BEANSTALK_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addWhitelistToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bdvPerRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        earn(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mint(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintWithTokenPermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintWithTokensPermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, minRootsOut: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerCandidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, maxRootsIn: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemWithFarmBalancePermit(depositTransfers: DepositTransferStruct[], mode: PromiseOrValue<BigNumberish>, maxRootsIn: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeWhitelistToken(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDelegate(_delegateContract: PromiseOrValue<string>, _delegate: PromiseOrValue<string>, _snapshotId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        underlyingBdv(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateBdv(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateBdvs(tokens: PromiseOrValue<string>[], seasons: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
