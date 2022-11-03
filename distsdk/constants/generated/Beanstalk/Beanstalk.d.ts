import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
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
export declare type AdvancedDataStruct = {
    callData: PromiseOrValue<BytesLike>;
    advancedData: PromiseOrValue<BytesLike>;
};
export declare type AdvancedDataStructOutput = [string, string] & {
    callData: string;
    advancedData: string;
};
export declare namespace IDiamondCut {
    type FacetCutStruct = {
        facetAddress: PromiseOrValue<string>;
        action: PromiseOrValue<BigNumberish>;
        functionSelectors: PromiseOrValue<BytesLike>[];
    };
    type FacetCutStructOutput = [string, number, string[]] & {
        facetAddress: string;
        action: number;
        functionSelectors: string[];
    };
}
export declare namespace IDiamondLoupe {
    type FacetStruct = {
        facetAddress: PromiseOrValue<string>;
        functionSelectors: PromiseOrValue<BytesLike>[];
    };
    type FacetStructOutput = [string, string[]] & {
        facetAddress: string;
        functionSelectors: string[];
    };
}
export declare namespace IFertilizer {
    type BalanceStruct = {
        amount: PromiseOrValue<BigNumberish>;
        lastBpf: PromiseOrValue<BigNumberish>;
    };
    type BalanceStructOutput = [BigNumber, BigNumber] & {
        amount: BigNumber;
        lastBpf: BigNumber;
    };
}
export declare namespace FertilizerFacet {
    type SupplyStruct = {
        endBpf: PromiseOrValue<BigNumberish>;
        supply: PromiseOrValue<BigNumberish>;
    };
    type SupplyStructOutput = [BigNumber, BigNumber] & {
        endBpf: BigNumber;
        supply: BigNumber;
    };
}
export declare namespace Storage {
    type FundraiserStruct = {
        payee: PromiseOrValue<string>;
        token: PromiseOrValue<string>;
        total: PromiseOrValue<BigNumberish>;
        remaining: PromiseOrValue<BigNumberish>;
        start: PromiseOrValue<BigNumberish>;
    };
    type FundraiserStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        payee: string;
        token: string;
        total: BigNumber;
        remaining: BigNumber;
        start: BigNumber;
    };
    type RainStruct = {
        depreciated: PromiseOrValue<BigNumberish>;
        pods: PromiseOrValue<BigNumberish>;
        roots: PromiseOrValue<BigNumberish>;
    };
    type RainStructOutput = [BigNumber, BigNumber, BigNumber] & {
        depreciated: BigNumber;
        pods: BigNumber;
        roots: BigNumber;
    };
    type SeasonStruct = {
        current: PromiseOrValue<BigNumberish>;
        lastSop: PromiseOrValue<BigNumberish>;
        withdrawSeasons: PromiseOrValue<BigNumberish>;
        lastSopSeason: PromiseOrValue<BigNumberish>;
        rainStart: PromiseOrValue<BigNumberish>;
        raining: PromiseOrValue<boolean>;
        fertilizing: PromiseOrValue<boolean>;
        start: PromiseOrValue<BigNumberish>;
        period: PromiseOrValue<BigNumberish>;
        timestamp: PromiseOrValue<BigNumberish>;
    };
    type SeasonStructOutput = [
        number,
        number,
        number,
        number,
        number,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        current: number;
        lastSop: number;
        withdrawSeasons: number;
        lastSopSeason: number;
        rainStart: number;
        raining: boolean;
        fertilizing: boolean;
        start: BigNumber;
        period: BigNumber;
        timestamp: BigNumber;
    };
    type WeatherStruct = {
        startSoil: PromiseOrValue<BigNumberish>;
        lastDSoil: PromiseOrValue<BigNumberish>;
        lastSoilPercent: PromiseOrValue<BigNumberish>;
        lastSowTime: PromiseOrValue<BigNumberish>;
        nextSowTime: PromiseOrValue<BigNumberish>;
        yield: PromiseOrValue<BigNumberish>;
        didSowBelowMin: PromiseOrValue<boolean>;
        didSowFaster: PromiseOrValue<boolean>;
    };
    type WeatherStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        boolean,
        boolean
    ] & {
        startSoil: BigNumber;
        lastDSoil: BigNumber;
        lastSoilPercent: BigNumber;
        lastSowTime: number;
        nextSowTime: number;
        yield: number;
        didSowBelowMin: boolean;
        didSowFaster: boolean;
    };
    type SiloSettingsStruct = {
        selector: PromiseOrValue<BytesLike>;
        seeds: PromiseOrValue<BigNumberish>;
        stalk: PromiseOrValue<BigNumberish>;
    };
    type SiloSettingsStructOutput = [string, number, number] & {
        selector: string;
        seeds: number;
        stalk: number;
    };
}
export declare namespace Listing {
    type PodListingStruct = {
        account: PromiseOrValue<string>;
        index: PromiseOrValue<BigNumberish>;
        start: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
        pricePerPod: PromiseOrValue<BigNumberish>;
        maxHarvestableIndex: PromiseOrValue<BigNumberish>;
        mode: PromiseOrValue<BigNumberish>;
    };
    type PodListingStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        number
    ] & {
        account: string;
        index: BigNumber;
        start: BigNumber;
        amount: BigNumber;
        pricePerPod: number;
        maxHarvestableIndex: BigNumber;
        mode: number;
    };
}
export declare namespace Order {
    type PodOrderStruct = {
        account: PromiseOrValue<string>;
        pricePerPod: PromiseOrValue<BigNumberish>;
        maxPlaceInLine: PromiseOrValue<BigNumberish>;
    };
    type PodOrderStructOutput = [string, number, BigNumber] & {
        account: string;
        pricePerPod: number;
        maxPlaceInLine: BigNumber;
    };
}
export declare namespace SiloExit {
    type AccountSeasonOfPlentyStruct = {
        lastRain: PromiseOrValue<BigNumberish>;
        lastSop: PromiseOrValue<BigNumberish>;
        roots: PromiseOrValue<BigNumberish>;
        plentyPerRoot: PromiseOrValue<BigNumberish>;
        plenty: PromiseOrValue<BigNumberish>;
    };
    type AccountSeasonOfPlentyStructOutput = [
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        lastRain: number;
        lastSop: number;
        roots: BigNumber;
        plentyPerRoot: BigNumber;
        plenty: BigNumber;
    };
}
export declare namespace TokenFacet {
    type BalanceStruct = {
        internalBalance: PromiseOrValue<BigNumberish>;
        externalBalance: PromiseOrValue<BigNumberish>;
        totalBalance: PromiseOrValue<BigNumberish>;
    };
    type BalanceStructOutput = [BigNumber, BigNumber, BigNumber] & {
        internalBalance: BigNumber;
        externalBalance: BigNumber;
        totalBalance: BigNumber;
    };
}
export interface BeanstalkInterface extends utils.Interface {
    functions: {
        "bdv(address,uint256)": FunctionFragment;
        "beanToBDV(uint256)": FunctionFragment;
        "curveToBDV(uint256)": FunctionFragment;
        "unripeBeanToBDV(uint256)": FunctionFragment;
        "unripeLPToBDV(uint256)": FunctionFragment;
        "convert(bytes,uint32[],uint256[])": FunctionFragment;
        "getAmountOut(address,address,uint256)": FunctionFragment;
        "getMaxAmountIn(address,address)": FunctionFragment;
        "addLiquidity(address,address,uint256[],uint256,uint8,uint8)": FunctionFragment;
        "exchange(address,address,address,address,uint256,uint256,uint8,uint8)": FunctionFragment;
        "exchangeUnderlying(address,address,address,uint256,uint256,uint8,uint8)": FunctionFragment;
        "removeLiquidity(address,address,uint256,uint256[],uint8,uint8)": FunctionFragment;
        "removeLiquidityImbalance(address,address,uint256[],uint256,uint8,uint8)": FunctionFragment;
        "removeLiquidityOneToken(address,address,address,uint256,uint256,uint8,uint8)": FunctionFragment;
        "advancedPipe((address,bytes,bytes)[],uint256)": FunctionFragment;
        "etherPipe((address,bytes),uint256)": FunctionFragment;
        "multiPipe((address,bytes)[])": FunctionFragment;
        "pipe((address,bytes))": FunctionFragment;
        "readPipe((address,bytes))": FunctionFragment;
        "diamondCut((address,uint8,bytes4[])[],address,bytes)": FunctionFragment;
        "facetAddress(bytes4)": FunctionFragment;
        "facetAddresses()": FunctionFragment;
        "facetFunctionSelectors(address)": FunctionFragment;
        "facets()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "advancedFarm((bytes,bytes)[])": FunctionFragment;
        "farm(bytes[])": FunctionFragment;
        "addFertilizerOwner(uint128,uint128,uint256)": FunctionFragment;
        "balanceOfBatchFertilizer(address[],uint256[])": FunctionFragment;
        "balanceOfFertilized(address,uint256[])": FunctionFragment;
        "balanceOfFertilizer(address,uint256)": FunctionFragment;
        "balanceOfUnfertilized(address,uint256[])": FunctionFragment;
        "beansPerFertilizer()": FunctionFragment;
        "claimFertilized(uint256[],uint8)": FunctionFragment;
        "getActiveFertilizer()": FunctionFragment;
        "getCurrentHumidity()": FunctionFragment;
        "getEndBpf()": FunctionFragment;
        "getFertilizer(uint128)": FunctionFragment;
        "getFertilizers()": FunctionFragment;
        "getFirst()": FunctionFragment;
        "getHumidity(uint128)": FunctionFragment;
        "getLast()": FunctionFragment;
        "getNext(uint128)": FunctionFragment;
        "isFertilizing()": FunctionFragment;
        "mintFertilizer(uint128,uint256,uint8)": FunctionFragment;
        "payFertilizer(address,uint256)": FunctionFragment;
        "remainingRecapitalization()": FunctionFragment;
        "totalFertilizedBeans()": FunctionFragment;
        "totalFertilizerBeans()": FunctionFragment;
        "totalUnfertilizedBeans()": FunctionFragment;
        "harvest(uint256[],uint8)": FunctionFragment;
        "harvestableIndex()": FunctionFragment;
        "plot(address,uint256)": FunctionFragment;
        "podIndex()": FunctionFragment;
        "sow(uint256,uint8)": FunctionFragment;
        "sowWithMin(uint256,uint256,uint8)": FunctionFragment;
        "totalHarvestable()": FunctionFragment;
        "totalHarvested()": FunctionFragment;
        "totalPods()": FunctionFragment;
        "totalSoil()": FunctionFragment;
        "totalUnharvestable()": FunctionFragment;
        "createFundraiser(address,address,uint256)": FunctionFragment;
        "fund(uint32,uint256,uint8)": FunctionFragment;
        "fundingToken(uint32)": FunctionFragment;
        "fundraiser(uint32)": FunctionFragment;
        "numberOfFundraisers()": FunctionFragment;
        "remainingFunding(uint32)": FunctionFragment;
        "totalFunding(uint32)": FunctionFragment;
        "allowancePods(address,address)": FunctionFragment;
        "approvePods(address,uint256)": FunctionFragment;
        "cancelPodListing(uint256)": FunctionFragment;
        "cancelPodOrder(uint24,uint256,uint8)": FunctionFragment;
        "cancelPodOrderV2(uint256,bytes,uint8)": FunctionFragment;
        "createPodListing(uint256,uint256,uint256,uint24,uint256,uint8)": FunctionFragment;
        "createPodListingV2(uint256,uint256,uint256,uint256,bytes,uint8)": FunctionFragment;
        "createPodOrder(uint256,uint24,uint256,uint8)": FunctionFragment;
        "createPodOrderV2(uint256,uint256,bytes,uint8)": FunctionFragment;
        "fillPodListing((address,uint256,uint256,uint256,uint24,uint256,uint8),uint256,uint8)": FunctionFragment;
        "fillPodListingV2((address,uint256,uint256,uint256,uint24,uint256,uint8),uint256,bytes,uint8)": FunctionFragment;
        "fillPodOrder((address,uint24,uint256),uint256,uint256,uint256,uint8)": FunctionFragment;
        "fillPodOrderV2((address,uint24,uint256),uint256,uint256,uint256,bytes,uint8)": FunctionFragment;
        "getAmountBeansToFillOrderV2(uint256,uint256,bytes)": FunctionFragment;
        "getAmountPodsFromFillListingV2(uint256,uint256,uint256,bytes)": FunctionFragment;
        "podListing(uint256)": FunctionFragment;
        "podOrder(address,uint24,uint256)": FunctionFragment;
        "podOrderById(bytes32)": FunctionFragment;
        "podOrderV2(address,uint256,bytes)": FunctionFragment;
        "transferPlot(address,address,uint256,uint256,uint256)": FunctionFragment;
        "claimOwnership()": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerCandidate()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "pause()": FunctionFragment;
        "unpause()": FunctionFragment;
        "paused()": FunctionFragment;
        "plentyPerRoot(uint32)": FunctionFragment;
        "poolDeltaB(address)": FunctionFragment;
        "rain()": FunctionFragment;
        "season()": FunctionFragment;
        "seasonTime()": FunctionFragment;
        "sunrise()": FunctionFragment;
        "time()": FunctionFragment;
        "totalDeltaB()": FunctionFragment;
        "weather()": FunctionFragment;
        "yield()": FunctionFragment;
        "approveDeposit(address,address,uint256)": FunctionFragment;
        "balanceOfEarnedBeans(address)": FunctionFragment;
        "balanceOfEarnedSeeds(address)": FunctionFragment;
        "balanceOfEarnedStalk(address)": FunctionFragment;
        "balanceOfGrownStalk(address)": FunctionFragment;
        "balanceOfPlenty(address)": FunctionFragment;
        "balanceOfRainRoots(address)": FunctionFragment;
        "balanceOfRoots(address)": FunctionFragment;
        "balanceOfSeeds(address)": FunctionFragment;
        "balanceOfSop(address)": FunctionFragment;
        "balanceOfStalk(address)": FunctionFragment;
        "claimPlenty()": FunctionFragment;
        "claimWithdrawal(address,uint32,uint8)": FunctionFragment;
        "claimWithdrawals(address,uint32[],uint8)": FunctionFragment;
        "decreaseDepositAllowance(address,address,uint256)": FunctionFragment;
        "deposit(address,uint256,uint8)": FunctionFragment;
        "depositAllowance(address,address,address)": FunctionFragment;
        "depositPermitDomainSeparator()": FunctionFragment;
        "depositPermitNonces(address)": FunctionFragment;
        "enrootDeposit(address,uint32,uint256)": FunctionFragment;
        "enrootDeposits(address,uint32[],uint256[])": FunctionFragment;
        "getDeposit(address,address,uint32)": FunctionFragment;
        "getTotalDeposited(address)": FunctionFragment;
        "getTotalWithdrawn(address)": FunctionFragment;
        "getWithdrawal(address,address,uint32)": FunctionFragment;
        "increaseDepositAllowance(address,address,uint256)": FunctionFragment;
        "lastSeasonOfPlenty()": FunctionFragment;
        "lastUpdate(address)": FunctionFragment;
        "permitDeposit(address,address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "permitDeposits(address,address,address[],uint256[],uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "plant()": FunctionFragment;
        "tokenSettings(address)": FunctionFragment;
        "totalEarnedBeans()": FunctionFragment;
        "totalRoots()": FunctionFragment;
        "totalSeeds()": FunctionFragment;
        "totalStalk()": FunctionFragment;
        "transferDeposit(address,address,address,uint32,uint256)": FunctionFragment;
        "transferDeposits(address,address,address,uint32[],uint256[])": FunctionFragment;
        "update(address)": FunctionFragment;
        "withdrawDeposit(address,uint32,uint256)": FunctionFragment;
        "withdrawDeposits(address,uint32[],uint256[])": FunctionFragment;
        "withdrawFreeze()": FunctionFragment;
        "approveToken(address,address,uint256)": FunctionFragment;
        "decreaseTokenAllowance(address,address,uint256)": FunctionFragment;
        "getAllBalance(address,address)": FunctionFragment;
        "getAllBalances(address,address[])": FunctionFragment;
        "getBalance(address,address)": FunctionFragment;
        "getBalances(address,address[])": FunctionFragment;
        "getExternalBalance(address,address)": FunctionFragment;
        "getExternalBalances(address,address[])": FunctionFragment;
        "getInternalBalance(address,address)": FunctionFragment;
        "getInternalBalances(address,address[])": FunctionFragment;
        "increaseTokenAllowance(address,address,uint256)": FunctionFragment;
        "permitERC20(address,address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "permitToken(address,address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "tokenAllowance(address,address,address)": FunctionFragment;
        "tokenPermitDomainSeparator()": FunctionFragment;
        "tokenPermitNonces(address)": FunctionFragment;
        "transferToken(address,address,uint256,uint8,uint8)": FunctionFragment;
        "transferTokenFrom(address,address,address,uint256,uint8,uint8)": FunctionFragment;
        "unwrapEth(uint256,uint8)": FunctionFragment;
        "wrapEth(uint256,uint8)": FunctionFragment;
        "_getPenalizedUnderlying(address,uint256,uint256)": FunctionFragment;
        "addUnripeToken(address,address,bytes32)": FunctionFragment;
        "balanceOfPenalizedUnderlying(address,address)": FunctionFragment;
        "balanceOfUnderlying(address,address)": FunctionFragment;
        "chop(address,uint256,uint8,uint8)": FunctionFragment;
        "getPenalizedUnderlying(address,uint256)": FunctionFragment;
        "getPenalty(address)": FunctionFragment;
        "getPercentPenalty(address)": FunctionFragment;
        "getRecapFundedPercent(address)": FunctionFragment;
        "getRecapPaidPercent()": FunctionFragment;
        "getTotalUnderlying(address)": FunctionFragment;
        "getUnderlying(address,uint256)": FunctionFragment;
        "getUnderlyingPerUnripeToken(address)": FunctionFragment;
        "getUnderlyingToken(address)": FunctionFragment;
        "isUnripe(address)": FunctionFragment;
        "pick(address,uint256,bytes32[],uint8)": FunctionFragment;
        "picked(address,address)": FunctionFragment;
        "dewhitelistToken(address)": FunctionFragment;
        "whitelistToken(address,bytes4,uint32,uint32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "bdv" | "beanToBDV" | "curveToBDV" | "unripeBeanToBDV" | "unripeLPToBDV" | "convert" | "getAmountOut" | "getMaxAmountIn" | "addLiquidity" | "exchange" | "exchangeUnderlying" | "removeLiquidity" | "removeLiquidityImbalance" | "removeLiquidityOneToken" | "advancedPipe" | "etherPipe" | "multiPipe" | "pipe" | "readPipe" | "diamondCut" | "facetAddress" | "facetAddresses" | "facetFunctionSelectors" | "facets" | "supportsInterface" | "advancedFarm" | "farm" | "addFertilizerOwner" | "balanceOfBatchFertilizer" | "balanceOfFertilized" | "balanceOfFertilizer" | "balanceOfUnfertilized" | "beansPerFertilizer" | "claimFertilized" | "getActiveFertilizer" | "getCurrentHumidity" | "getEndBpf" | "getFertilizer" | "getFertilizers" | "getFirst" | "getHumidity" | "getLast" | "getNext" | "isFertilizing" | "mintFertilizer" | "payFertilizer" | "remainingRecapitalization" | "totalFertilizedBeans" | "totalFertilizerBeans" | "totalUnfertilizedBeans" | "harvest" | "harvestableIndex" | "plot" | "podIndex" | "sow" | "sowWithMin" | "totalHarvestable" | "totalHarvested" | "totalPods" | "totalSoil" | "totalUnharvestable" | "createFundraiser" | "fund" | "fundingToken" | "fundraiser" | "numberOfFundraisers" | "remainingFunding" | "totalFunding" | "allowancePods" | "approvePods" | "cancelPodListing" | "cancelPodOrder" | "cancelPodOrderV2" | "createPodListing" | "createPodListingV2" | "createPodOrder" | "createPodOrderV2" | "fillPodListing" | "fillPodListingV2" | "fillPodOrder" | "fillPodOrderV2" | "getAmountBeansToFillOrderV2" | "getAmountPodsFromFillListingV2" | "podListing" | "podOrder" | "podOrderById" | "podOrderV2" | "transferPlot" | "claimOwnership" | "owner" | "ownerCandidate" | "transferOwnership" | "pause" | "unpause" | "paused" | "plentyPerRoot" | "poolDeltaB" | "rain" | "season" | "seasonTime" | "sunrise" | "time" | "totalDeltaB" | "weather" | "yield" | "approveDeposit" | "balanceOfEarnedBeans" | "balanceOfEarnedSeeds" | "balanceOfEarnedStalk" | "balanceOfGrownStalk" | "balanceOfPlenty" | "balanceOfRainRoots" | "balanceOfRoots" | "balanceOfSeeds" | "balanceOfSop" | "balanceOfStalk" | "claimPlenty" | "claimWithdrawal" | "claimWithdrawals" | "decreaseDepositAllowance" | "deposit" | "depositAllowance" | "depositPermitDomainSeparator" | "depositPermitNonces" | "enrootDeposit" | "enrootDeposits" | "getDeposit" | "getTotalDeposited" | "getTotalWithdrawn" | "getWithdrawal" | "increaseDepositAllowance" | "lastSeasonOfPlenty" | "lastUpdate" | "permitDeposit" | "permitDeposits" | "plant" | "tokenSettings" | "totalEarnedBeans" | "totalRoots" | "totalSeeds" | "totalStalk" | "transferDeposit" | "transferDeposits" | "update" | "withdrawDeposit" | "withdrawDeposits" | "withdrawFreeze" | "approveToken" | "decreaseTokenAllowance" | "getAllBalance" | "getAllBalances" | "getBalance" | "getBalances" | "getExternalBalance" | "getExternalBalances" | "getInternalBalance" | "getInternalBalances" | "increaseTokenAllowance" | "permitERC20" | "permitToken" | "tokenAllowance" | "tokenPermitDomainSeparator" | "tokenPermitNonces" | "transferToken" | "transferTokenFrom" | "unwrapEth" | "wrapEth" | "_getPenalizedUnderlying" | "addUnripeToken" | "balanceOfPenalizedUnderlying" | "balanceOfUnderlying" | "chop" | "getPenalizedUnderlying" | "getPenalty" | "getPercentPenalty" | "getRecapFundedPercent" | "getRecapPaidPercent" | "getTotalUnderlying" | "getUnderlying" | "getUnderlyingPerUnripeToken" | "getUnderlyingToken" | "isUnripe" | "pick" | "picked" | "dewhitelistToken" | "whitelistToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "bdv", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "beanToBDV", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "curveToBDV", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "unripeBeanToBDV", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "unripeLPToBDV", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "convert", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "getAmountOut", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getMaxAmountIn", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "addLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "exchange", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "exchangeUnderlying", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityImbalance", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityOneToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "advancedPipe", values: [AdvancedPipeStruct[], PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "etherPipe", values: [PipeStruct, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "multiPipe", values: [PipeStruct[]]): string;
    encodeFunctionData(functionFragment: "pipe", values: [PipeStruct]): string;
    encodeFunctionData(functionFragment: "readPipe", values: [PipeStruct]): string;
    encodeFunctionData(functionFragment: "diamondCut", values: [
        IDiamondCut.FacetCutStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "facetAddress", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "facetAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "facetFunctionSelectors", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "facets", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "advancedFarm", values: [AdvancedDataStruct[]]): string;
    encodeFunctionData(functionFragment: "farm", values: [PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "addFertilizerOwner", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "balanceOfBatchFertilizer", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "balanceOfFertilized", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "balanceOfFertilizer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOfUnfertilized", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "beansPerFertilizer", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimFertilized", values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getActiveFertilizer", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentHumidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEndBpf", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFertilizer", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getFertilizers", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFirst", values?: undefined): string;
    encodeFunctionData(functionFragment: "getHumidity", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNext", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isFertilizing", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintFertilizer", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "payFertilizer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "remainingRecapitalization", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalFertilizedBeans", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalFertilizerBeans", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalUnfertilizedBeans", values?: undefined): string;
    encodeFunctionData(functionFragment: "harvest", values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "harvestableIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "plot", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "podIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "sow", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "sowWithMin", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "totalHarvestable", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalHarvested", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalPods", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSoil", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalUnharvestable", values?: undefined): string;
    encodeFunctionData(functionFragment: "createFundraiser", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "fund", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "fundingToken", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "fundraiser", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "numberOfFundraisers", values?: undefined): string;
    encodeFunctionData(functionFragment: "remainingFunding", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalFunding", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "allowancePods", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approvePods", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "cancelPodListing", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "cancelPodOrder", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "cancelPodOrderV2", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "createPodListing", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "createPodListingV2", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "createPodOrder", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "createPodOrderV2", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "fillPodListing", values: [
        Listing.PodListingStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "fillPodListingV2", values: [
        Listing.PodListingStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "fillPodOrder", values: [
        Order.PodOrderStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "fillPodOrderV2", values: [
        Order.PodOrderStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAmountBeansToFillOrderV2", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getAmountPodsFromFillListingV2", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "podListing", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "podOrder", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "podOrderById", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "podOrderV2", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "transferPlot", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "claimOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerCandidate", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "plentyPerRoot", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "poolDeltaB", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rain", values?: undefined): string;
    encodeFunctionData(functionFragment: "season", values?: undefined): string;
    encodeFunctionData(functionFragment: "seasonTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "sunrise", values?: undefined): string;
    encodeFunctionData(functionFragment: "time", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalDeltaB", values?: undefined): string;
    encodeFunctionData(functionFragment: "weather", values?: undefined): string;
    encodeFunctionData(functionFragment: "yield", values?: undefined): string;
    encodeFunctionData(functionFragment: "approveDeposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "balanceOfEarnedBeans", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOfEarnedSeeds", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOfEarnedStalk", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOfGrownStalk", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOfPlenty", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOfRainRoots", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOfRoots", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOfSeeds", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOfSop", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOfStalk", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimPlenty", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimWithdrawal", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "claimWithdrawals", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "decreaseDepositAllowance", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "deposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "depositAllowance", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "depositPermitDomainSeparator", values?: undefined): string;
    encodeFunctionData(functionFragment: "depositPermitNonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "enrootDeposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "enrootDeposits", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "getDeposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTotalDeposited", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getTotalWithdrawn", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getWithdrawal", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "increaseDepositAllowance", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "lastSeasonOfPlenty", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastUpdate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "permitDeposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "permitDeposits", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "plant", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenSettings", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalEarnedBeans", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalRoots", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSeeds", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalStalk", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferDeposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferDeposits", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "update", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawDeposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "withdrawDeposits", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "withdrawFreeze", values?: undefined): string;
    encodeFunctionData(functionFragment: "approveToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "decreaseTokenAllowance", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAllBalance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAllBalances", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getBalance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getBalances", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getExternalBalance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getExternalBalances", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getInternalBalance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getInternalBalances", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "increaseTokenAllowance", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "permitERC20", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "permitToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "tokenAllowance", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "tokenPermitDomainSeparator", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenPermitNonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferTokenFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "unwrapEth", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "wrapEth", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "_getPenalizedUnderlying", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "addUnripeToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "balanceOfPenalizedUnderlying", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOfUnderlying", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "chop", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getPenalizedUnderlying", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPenalty", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPercentPenalty", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRecapFundedPercent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRecapPaidPercent", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalUnderlying", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUnderlying", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getUnderlyingPerUnripeToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUnderlyingToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isUnripe", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pick", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "picked", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "dewhitelistToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "whitelistToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "bdv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beanToBDV", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "curveToBDV", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unripeBeanToBDV", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unripeLPToBDV", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxAmountIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityImbalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityOneToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "advancedPipe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "etherPipe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiPipe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pipe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readPipe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "diamondCut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetFunctionSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "advancedFarm", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "farm", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addFertilizerOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatchFertilizer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfFertilized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfFertilizer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfUnfertilized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beansPerFertilizer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFertilized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActiveFertilizer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentHumidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEndBpf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFertilizer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFertilizers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFirst", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHumidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFertilizing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintFertilizer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payFertilizer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remainingRecapitalization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalFertilizedBeans", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalFertilizerBeans", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalUnfertilizedBeans", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvestableIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "plot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "podIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sowWithMin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalHarvestable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalHarvested", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalPods", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSoil", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalUnharvestable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFundraiser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundraiser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numberOfFundraisers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remainingFunding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalFunding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowancePods", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvePods", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelPodListing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelPodOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelPodOrderV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPodListing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPodListingV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPodOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPodOrderV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillPodListing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillPodListingV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillPodOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillPodOrderV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountBeansToFillOrderV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountPodsFromFillListingV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "podListing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "podOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "podOrderById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "podOrderV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferPlot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerCandidate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "plentyPerRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolDeltaB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "season", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seasonTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sunrise", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalDeltaB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weather", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "yield", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfEarnedBeans", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfEarnedSeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfEarnedStalk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfGrownStalk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfPlenty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfRainRoots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfRoots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfSeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfSop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfStalk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimPlenty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimWithdrawals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseDepositAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositPermitDomainSeparator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositPermitNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrootDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrootDeposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalDeposited", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalWithdrawn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseDepositAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastSeasonOfPlenty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitDeposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "plant", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenSettings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalEarnedBeans", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalRoots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalStalk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferDeposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawDeposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFreeze", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseTokenAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExternalBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExternalBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInternalBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInternalBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseTokenAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenPermitDomainSeparator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenPermitNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferTokenFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapEth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrapEth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getPenalizedUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addUnripeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfPenalizedUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPenalizedUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPenalty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPercentPenalty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRecapFundedPercent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRecapPaidPercent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUnderlyingPerUnripeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUnderlyingToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isUnripe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "picked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dewhitelistToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistToken", data: BytesLike): Result;
    events: {
        "Convert(address,address,address,uint256,uint256)": EventFragment;
        "RemoveDeposits(address,address,uint32[],uint256[],uint256)": EventFragment;
        "DiamondCut(tuple[],address,bytes)": EventFragment;
        "SetFertilizer(uint128,uint128)": EventFragment;
        "Harvest(address,uint256[],uint256)": EventFragment;
        "PodListingCancelled(address,uint256)": EventFragment;
        "Sow(address,uint256,uint256,uint256)": EventFragment;
        "CompleteFundraiser(uint32)": EventFragment;
        "CreateFundraiser(uint32,address,address,uint256)": EventFragment;
        "FundFundraiser(address,uint32,uint256)": EventFragment;
        "PlotTransfer(address,address,uint256,uint256)": EventFragment;
        "PodApproval(address,address,uint256)": EventFragment;
        "PodListingCreated(address,uint256,uint256,uint256,uint24,uint256,bytes,uint8,uint8)": EventFragment;
        "PodListingFilled(address,address,uint256,uint256,uint256,uint256)": EventFragment;
        "PodOrderCancelled(address,bytes32)": EventFragment;
        "PodOrderCreated(address,bytes32,uint256,uint24,uint256,bytes,uint8)": EventFragment;
        "PodOrderFilled(address,address,bytes32,uint256,uint256,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Pause(uint256)": EventFragment;
        "Unpause(uint256,uint256)": EventFragment;
        "Incentivization(address,uint256)": EventFragment;
        "MetapoolOracle(uint32,int256,uint256[2])": EventFragment;
        "Reward(uint32,uint256,uint256,uint256)": EventFragment;
        "SeasonOfPlenty(uint256,uint256,uint256)": EventFragment;
        "Soil(uint32,uint256)": EventFragment;
        "Sunrise(uint256)": EventFragment;
        "WeatherChange(uint256,uint256,int8)": EventFragment;
        "AddDeposit(address,address,uint32,uint256,uint256)": EventFragment;
        "AddWithdrawal(address,address,uint32,uint256)": EventFragment;
        "ClaimPlenty(address,uint256)": EventFragment;
        "DepositApproval(address,address,address,uint256)": EventFragment;
        "Plant(address,uint256)": EventFragment;
        "RemoveDeposit(address,address,uint32,uint256)": EventFragment;
        "RemoveWithdrawal(address,address,uint32,uint256)": EventFragment;
        "RemoveWithdrawals(address,address,uint32[],uint256)": EventFragment;
        "SeedsBalanceChanged(address,int256)": EventFragment;
        "StalkBalanceChanged(address,int256,int256)": EventFragment;
        "InternalBalanceChanged(address,address,int256)": EventFragment;
        "TokenApproval(address,address,address,uint256)": EventFragment;
        "AddUnripeToken(address,address,bytes32)": EventFragment;
        "ChangeUnderlying(address,int256)": EventFragment;
        "Chop(address,address,uint256,uint256)": EventFragment;
        "Pick(address,address,uint256)": EventFragment;
        "DewhitelistToken(address)": EventFragment;
        "WhitelistToken(address,bytes4,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Convert"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveDeposits"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DiamondCut"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetFertilizer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PodListingCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CompleteFundraiser"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreateFundraiser"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundFundraiser"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlotTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PodApproval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PodListingCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PodListingFilled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PodOrderCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PodOrderCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PodOrderFilled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Pause"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpause"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Incentivization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MetapoolOracle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Reward"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SeasonOfPlenty"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Soil"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sunrise"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WeatherChange"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddDeposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddWithdrawal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimPlenty"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositApproval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Plant"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveDeposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveWithdrawal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveWithdrawals"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SeedsBalanceChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StalkBalanceChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InternalBalanceChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenApproval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddUnripeToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangeUnderlying"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Chop"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Pick"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DewhitelistToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WhitelistToken"): EventFragment;
}
export interface ConvertEventObject {
    account: string;
    fromToken: string;
    toToken: string;
    fromAmount: BigNumber;
    toAmount: BigNumber;
}
export declare type ConvertEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], ConvertEventObject>;
export declare type ConvertEventFilter = TypedEventFilter<ConvertEvent>;
export interface RemoveDepositsEventObject {
    account: string;
    token: string;
    seasons: number[];
    amounts: BigNumber[];
    amount: BigNumber;
}
export declare type RemoveDepositsEvent = TypedEvent<[
    string,
    string,
    number[],
    BigNumber[],
    BigNumber
], RemoveDepositsEventObject>;
export declare type RemoveDepositsEventFilter = TypedEventFilter<RemoveDepositsEvent>;
export interface DiamondCutEventObject {
    _diamondCut: IDiamondCut.FacetCutStructOutput[];
    _init: string;
    _calldata: string;
}
export declare type DiamondCutEvent = TypedEvent<[
    IDiamondCut.FacetCutStructOutput[],
    string,
    string
], DiamondCutEventObject>;
export declare type DiamondCutEventFilter = TypedEventFilter<DiamondCutEvent>;
export interface SetFertilizerEventObject {
    id: BigNumber;
    bpf: BigNumber;
}
export declare type SetFertilizerEvent = TypedEvent<[
    BigNumber,
    BigNumber
], SetFertilizerEventObject>;
export declare type SetFertilizerEventFilter = TypedEventFilter<SetFertilizerEvent>;
export interface HarvestEventObject {
    account: string;
    plots: BigNumber[];
    beans: BigNumber;
}
export declare type HarvestEvent = TypedEvent<[
    string,
    BigNumber[],
    BigNumber
], HarvestEventObject>;
export declare type HarvestEventFilter = TypedEventFilter<HarvestEvent>;
export interface PodListingCancelledEventObject {
    account: string;
    index: BigNumber;
}
export declare type PodListingCancelledEvent = TypedEvent<[
    string,
    BigNumber
], PodListingCancelledEventObject>;
export declare type PodListingCancelledEventFilter = TypedEventFilter<PodListingCancelledEvent>;
export interface SowEventObject {
    account: string;
    index: BigNumber;
    beans: BigNumber;
    pods: BigNumber;
}
export declare type SowEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], SowEventObject>;
export declare type SowEventFilter = TypedEventFilter<SowEvent>;
export interface CompleteFundraiserEventObject {
    id: number;
}
export declare type CompleteFundraiserEvent = TypedEvent<[
    number
], CompleteFundraiserEventObject>;
export declare type CompleteFundraiserEventFilter = TypedEventFilter<CompleteFundraiserEvent>;
export interface CreateFundraiserEventObject {
    id: number;
    fundraiser: string;
    token: string;
    amount: BigNumber;
}
export declare type CreateFundraiserEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber
], CreateFundraiserEventObject>;
export declare type CreateFundraiserEventFilter = TypedEventFilter<CreateFundraiserEvent>;
export interface FundFundraiserEventObject {
    account: string;
    id: number;
    amount: BigNumber;
}
export declare type FundFundraiserEvent = TypedEvent<[
    string,
    number,
    BigNumber
], FundFundraiserEventObject>;
export declare type FundFundraiserEventFilter = TypedEventFilter<FundFundraiserEvent>;
export interface PlotTransferEventObject {
    from: string;
    to: string;
    id: BigNumber;
    pods: BigNumber;
}
export declare type PlotTransferEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], PlotTransferEventObject>;
export declare type PlotTransferEventFilter = TypedEventFilter<PlotTransferEvent>;
export interface PodApprovalEventObject {
    owner: string;
    spender: string;
    pods: BigNumber;
}
export declare type PodApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], PodApprovalEventObject>;
export declare type PodApprovalEventFilter = TypedEventFilter<PodApprovalEvent>;
export interface PodListingCreatedEventObject {
    account: string;
    index: BigNumber;
    start: BigNumber;
    amount: BigNumber;
    pricePerPod: number;
    maxHarvestableIndex: BigNumber;
    pricingFunction: string;
    mode: number;
    pricingType: number;
}
export declare type PodListingCreatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    BigNumber,
    string,
    number,
    number
], PodListingCreatedEventObject>;
export declare type PodListingCreatedEventFilter = TypedEventFilter<PodListingCreatedEvent>;
export interface PodListingFilledEventObject {
    from: string;
    to: string;
    index: BigNumber;
    start: BigNumber;
    amount: BigNumber;
    costInBeans: BigNumber;
}
export declare type PodListingFilledEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], PodListingFilledEventObject>;
export declare type PodListingFilledEventFilter = TypedEventFilter<PodListingFilledEvent>;
export interface PodOrderCancelledEventObject {
    account: string;
    id: string;
}
export declare type PodOrderCancelledEvent = TypedEvent<[
    string,
    string
], PodOrderCancelledEventObject>;
export declare type PodOrderCancelledEventFilter = TypedEventFilter<PodOrderCancelledEvent>;
export interface PodOrderCreatedEventObject {
    account: string;
    id: string;
    amount: BigNumber;
    pricePerPod: number;
    maxPlaceInLine: BigNumber;
    pricingFunction: string;
    priceType: number;
}
export declare type PodOrderCreatedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    number,
    BigNumber,
    string,
    number
], PodOrderCreatedEventObject>;
export declare type PodOrderCreatedEventFilter = TypedEventFilter<PodOrderCreatedEvent>;
export interface PodOrderFilledEventObject {
    from: string;
    to: string;
    id: string;
    index: BigNumber;
    start: BigNumber;
    amount: BigNumber;
    costInBeans: BigNumber;
}
export declare type PodOrderFilledEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], PodOrderFilledEventObject>;
export declare type PodOrderFilledEventFilter = TypedEventFilter<PodOrderFilledEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PauseEventObject {
    timestamp: BigNumber;
}
export declare type PauseEvent = TypedEvent<[BigNumber], PauseEventObject>;
export declare type PauseEventFilter = TypedEventFilter<PauseEvent>;
export interface UnpauseEventObject {
    timestamp: BigNumber;
    timePassed: BigNumber;
}
export declare type UnpauseEvent = TypedEvent<[
    BigNumber,
    BigNumber
], UnpauseEventObject>;
export declare type UnpauseEventFilter = TypedEventFilter<UnpauseEvent>;
export interface IncentivizationEventObject {
    account: string;
    beans: BigNumber;
}
export declare type IncentivizationEvent = TypedEvent<[
    string,
    BigNumber
], IncentivizationEventObject>;
export declare type IncentivizationEventFilter = TypedEventFilter<IncentivizationEvent>;
export interface MetapoolOracleEventObject {
    season: number;
    deltaB: BigNumber;
    balances: [BigNumber, BigNumber];
}
export declare type MetapoolOracleEvent = TypedEvent<[
    number,
    BigNumber,
    [BigNumber, BigNumber]
], MetapoolOracleEventObject>;
export declare type MetapoolOracleEventFilter = TypedEventFilter<MetapoolOracleEvent>;
export interface RewardEventObject {
    season: number;
    toField: BigNumber;
    toSilo: BigNumber;
    toFertilizer: BigNumber;
}
export declare type RewardEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber,
    BigNumber
], RewardEventObject>;
export declare type RewardEventFilter = TypedEventFilter<RewardEvent>;
export interface SeasonOfPlentyEventObject {
    season: BigNumber;
    amount: BigNumber;
    toField: BigNumber;
}
export declare type SeasonOfPlentyEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], SeasonOfPlentyEventObject>;
export declare type SeasonOfPlentyEventFilter = TypedEventFilter<SeasonOfPlentyEvent>;
export interface SoilEventObject {
    season: number;
    soil: BigNumber;
}
export declare type SoilEvent = TypedEvent<[number, BigNumber], SoilEventObject>;
export declare type SoilEventFilter = TypedEventFilter<SoilEvent>;
export interface SunriseEventObject {
    season: BigNumber;
}
export declare type SunriseEvent = TypedEvent<[BigNumber], SunriseEventObject>;
export declare type SunriseEventFilter = TypedEventFilter<SunriseEvent>;
export interface WeatherChangeEventObject {
    season: BigNumber;
    caseId: BigNumber;
    change: number;
}
export declare type WeatherChangeEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    number
], WeatherChangeEventObject>;
export declare type WeatherChangeEventFilter = TypedEventFilter<WeatherChangeEvent>;
export interface AddDepositEventObject {
    account: string;
    token: string;
    season: number;
    amount: BigNumber;
    bdv: BigNumber;
}
export declare type AddDepositEvent = TypedEvent<[
    string,
    string,
    number,
    BigNumber,
    BigNumber
], AddDepositEventObject>;
export declare type AddDepositEventFilter = TypedEventFilter<AddDepositEvent>;
export interface AddWithdrawalEventObject {
    account: string;
    token: string;
    season: number;
    amount: BigNumber;
}
export declare type AddWithdrawalEvent = TypedEvent<[
    string,
    string,
    number,
    BigNumber
], AddWithdrawalEventObject>;
export declare type AddWithdrawalEventFilter = TypedEventFilter<AddWithdrawalEvent>;
export interface ClaimPlentyEventObject {
    account: string;
    plenty: BigNumber;
}
export declare type ClaimPlentyEvent = TypedEvent<[
    string,
    BigNumber
], ClaimPlentyEventObject>;
export declare type ClaimPlentyEventFilter = TypedEventFilter<ClaimPlentyEvent>;
export interface DepositApprovalEventObject {
    owner: string;
    spender: string;
    token: string;
    amount: BigNumber;
}
export declare type DepositApprovalEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], DepositApprovalEventObject>;
export declare type DepositApprovalEventFilter = TypedEventFilter<DepositApprovalEvent>;
export interface PlantEventObject {
    account: string;
    beans: BigNumber;
}
export declare type PlantEvent = TypedEvent<[string, BigNumber], PlantEventObject>;
export declare type PlantEventFilter = TypedEventFilter<PlantEvent>;
export interface RemoveDepositEventObject {
    account: string;
    token: string;
    season: number;
    amount: BigNumber;
}
export declare type RemoveDepositEvent = TypedEvent<[
    string,
    string,
    number,
    BigNumber
], RemoveDepositEventObject>;
export declare type RemoveDepositEventFilter = TypedEventFilter<RemoveDepositEvent>;
export interface RemoveWithdrawalEventObject {
    account: string;
    token: string;
    season: number;
    amount: BigNumber;
}
export declare type RemoveWithdrawalEvent = TypedEvent<[
    string,
    string,
    number,
    BigNumber
], RemoveWithdrawalEventObject>;
export declare type RemoveWithdrawalEventFilter = TypedEventFilter<RemoveWithdrawalEvent>;
export interface RemoveWithdrawalsEventObject {
    account: string;
    token: string;
    seasons: number[];
    amount: BigNumber;
}
export declare type RemoveWithdrawalsEvent = TypedEvent<[
    string,
    string,
    number[],
    BigNumber
], RemoveWithdrawalsEventObject>;
export declare type RemoveWithdrawalsEventFilter = TypedEventFilter<RemoveWithdrawalsEvent>;
export interface SeedsBalanceChangedEventObject {
    account: string;
    delta: BigNumber;
}
export declare type SeedsBalanceChangedEvent = TypedEvent<[
    string,
    BigNumber
], SeedsBalanceChangedEventObject>;
export declare type SeedsBalanceChangedEventFilter = TypedEventFilter<SeedsBalanceChangedEvent>;
export interface StalkBalanceChangedEventObject {
    account: string;
    delta: BigNumber;
    deltaRoots: BigNumber;
}
export declare type StalkBalanceChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], StalkBalanceChangedEventObject>;
export declare type StalkBalanceChangedEventFilter = TypedEventFilter<StalkBalanceChangedEvent>;
export interface InternalBalanceChangedEventObject {
    user: string;
    token: string;
    delta: BigNumber;
}
export declare type InternalBalanceChangedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], InternalBalanceChangedEventObject>;
export declare type InternalBalanceChangedEventFilter = TypedEventFilter<InternalBalanceChangedEvent>;
export interface TokenApprovalEventObject {
    owner: string;
    spender: string;
    token: string;
    amount: BigNumber;
}
export declare type TokenApprovalEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], TokenApprovalEventObject>;
export declare type TokenApprovalEventFilter = TypedEventFilter<TokenApprovalEvent>;
export interface AddUnripeTokenEventObject {
    unripeToken: string;
    underlyingToken: string;
    merkleRoot: string;
}
export declare type AddUnripeTokenEvent = TypedEvent<[
    string,
    string,
    string
], AddUnripeTokenEventObject>;
export declare type AddUnripeTokenEventFilter = TypedEventFilter<AddUnripeTokenEvent>;
export interface ChangeUnderlyingEventObject {
    token: string;
    underlying: BigNumber;
}
export declare type ChangeUnderlyingEvent = TypedEvent<[
    string,
    BigNumber
], ChangeUnderlyingEventObject>;
export declare type ChangeUnderlyingEventFilter = TypedEventFilter<ChangeUnderlyingEvent>;
export interface ChopEventObject {
    account: string;
    token: string;
    amount: BigNumber;
    underlying: BigNumber;
}
export declare type ChopEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], ChopEventObject>;
export declare type ChopEventFilter = TypedEventFilter<ChopEvent>;
export interface PickEventObject {
    account: string;
    token: string;
    amount: BigNumber;
}
export declare type PickEvent = TypedEvent<[
    string,
    string,
    BigNumber
], PickEventObject>;
export declare type PickEventFilter = TypedEventFilter<PickEvent>;
export interface DewhitelistTokenEventObject {
    token: string;
}
export declare type DewhitelistTokenEvent = TypedEvent<[
    string
], DewhitelistTokenEventObject>;
export declare type DewhitelistTokenEventFilter = TypedEventFilter<DewhitelistTokenEvent>;
export interface WhitelistTokenEventObject {
    token: string;
    selector: string;
    seeds: BigNumber;
    stalk: BigNumber;
}
export declare type WhitelistTokenEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], WhitelistTokenEventObject>;
export declare type WhitelistTokenEventFilter = TypedEventFilter<WhitelistTokenEvent>;
export interface Beanstalk extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BeanstalkInterface;
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
        bdv(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        beanToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        curveToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        unripeBeanToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        unripeLPToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        convert(convertData: PromiseOrValue<BytesLike>, crates: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAmountOut(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountOut: BigNumber;
        }>;
        getMaxAmountIn(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountIn: BigNumber;
        }>;
        addLiquidity(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amounts: PromiseOrValue<BigNumberish>[], minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchange(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, fromToken: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeUnderlying(pool: PromiseOrValue<string>, fromToken: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidity(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountsOut: PromiseOrValue<BigNumberish>[], fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityImbalance(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amountsOut: PromiseOrValue<BigNumberish>[], maxAmountIn: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityOneToken(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        advancedPipe(pipes: AdvancedPipeStruct[], value: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        etherPipe(p: PipeStruct, value: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        multiPipe(pipes: PipeStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pipe(p: PipeStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        readPipe(p: PipeStruct, overrides?: CallOverrides): Promise<[string] & {
            result: string;
        }>;
        diamondCut(_diamondCut: IDiamondCut.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            facetAddress_: string;
        }>;
        facetAddresses(overrides?: CallOverrides): Promise<[string[]] & {
            facetAddresses_: string[];
        }>;
        facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]] & {
            facetFunctionSelectors_: string[];
        }>;
        facets(overrides?: CallOverrides): Promise<[
            IDiamondLoupe.FacetStructOutput[]
        ] & {
            facets_: IDiamondLoupe.FacetStructOutput[];
        }>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        advancedFarm(data: AdvancedDataStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        farm(data: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addFertilizerOwner(id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, minLP: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOfBatchFertilizer(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[IFertilizer.BalanceStructOutput[]]>;
        balanceOfFertilized(account: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber] & {
            beans: BigNumber;
        }>;
        balanceOfFertilizer(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[IFertilizer.BalanceStructOutput]>;
        balanceOfUnfertilized(account: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber] & {
            beans: BigNumber;
        }>;
        beansPerFertilizer(overrides?: CallOverrides): Promise<[BigNumber] & {
            bpf: BigNumber;
        }>;
        claimFertilized(ids: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getActiveFertilizer(overrides?: CallOverrides): Promise<[BigNumber]>;
        getCurrentHumidity(overrides?: CallOverrides): Promise<[BigNumber] & {
            humidity: BigNumber;
        }>;
        getEndBpf(overrides?: CallOverrides): Promise<[BigNumber] & {
            endBpf: BigNumber;
        }>;
        getFertilizer(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getFertilizers(overrides?: CallOverrides): Promise<[
            FertilizerFacet.SupplyStructOutput[]
        ] & {
            fertilizers: FertilizerFacet.SupplyStructOutput[];
        }>;
        getFirst(overrides?: CallOverrides): Promise<[BigNumber]>;
        getHumidity(_s: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            humidity: BigNumber;
        }>;
        getLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        getNext(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        isFertilizing(overrides?: CallOverrides): Promise<[boolean]>;
        mintFertilizer(amount: PromiseOrValue<BigNumberish>, minLP: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        payFertilizer(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        remainingRecapitalization(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalFertilizedBeans(overrides?: CallOverrides): Promise<[BigNumber] & {
            beans: BigNumber;
        }>;
        totalFertilizerBeans(overrides?: CallOverrides): Promise<[BigNumber] & {
            beans: BigNumber;
        }>;
        totalUnfertilizedBeans(overrides?: CallOverrides): Promise<[BigNumber] & {
            beans: BigNumber;
        }>;
        harvest(plots: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        harvestableIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
        plot(account: PromiseOrValue<string>, plotId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        podIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
        sow(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sowWithMin(amount: PromiseOrValue<BigNumberish>, minAmount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalHarvestable(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalHarvested(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalPods(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSoil(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalUnharvestable(overrides?: CallOverrides): Promise<[BigNumber]>;
        createFundraiser(payee: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fund(id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fundingToken(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        fundraiser(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[Storage.FundraiserStructOutput]>;
        numberOfFundraisers(overrides?: CallOverrides): Promise<[number]>;
        remainingFunding(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalFunding(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        allowancePods(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approvePods(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelPodListing(index: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelPodOrder(pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelPodOrderV2(maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createPodListing(index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, pricePerPod: PromiseOrValue<BigNumberish>, maxHarvestableIndex: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createPodListingV2(index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, maxHarvestableIndex: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createPodOrder(beanAmount: PromiseOrValue<BigNumberish>, pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createPodOrderV2(beanAmount: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fillPodListing(l: Listing.PodListingStruct, beanAmount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fillPodListingV2(l: Listing.PodListingStruct, beanAmount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fillPodOrder(o: Order.PodOrderStruct, index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fillPodOrderV2(o: Order.PodOrderStruct, index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAmountBeansToFillOrderV2(placeInLine: PromiseOrValue<BigNumberish>, amountPodsFromOrder: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            beanAmount: BigNumber;
        }>;
        getAmountPodsFromFillListingV2(placeInLine: PromiseOrValue<BigNumberish>, podListingAmount: PromiseOrValue<BigNumberish>, fillBeanAmount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount: BigNumber;
        }>;
        podListing(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        podOrder(account: PromiseOrValue<string>, pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        podOrderById(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        podOrderV2(account: PromiseOrValue<string>, maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferPlot(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string] & {
            owner_: string;
        }>;
        ownerCandidate(overrides?: CallOverrides): Promise<[string] & {
            ownerCandidate_: string;
        }>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        plentyPerRoot(season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        poolDeltaB(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            deltaB: BigNumber;
        }>;
        rain(overrides?: CallOverrides): Promise<[Storage.RainStructOutput]>;
        season(overrides?: CallOverrides): Promise<[number]>;
        seasonTime(overrides?: CallOverrides): Promise<[number]>;
        sunrise(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        time(overrides?: CallOverrides): Promise<[Storage.SeasonStructOutput]>;
        totalDeltaB(overrides?: CallOverrides): Promise<[BigNumber] & {
            deltaB: BigNumber;
        }>;
        weather(overrides?: CallOverrides): Promise<[Storage.WeatherStructOutput]>;
        yield(overrides?: CallOverrides): Promise<[number]>;
        approveDeposit(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOfEarnedBeans(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            beans: BigNumber;
        }>;
        balanceOfEarnedSeeds(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfEarnedStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfGrownStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfPlenty(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            plenty: BigNumber;
        }>;
        balanceOfRainRoots(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfRoots(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfSeeds(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfSop(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            SiloExit.AccountSeasonOfPlentyStructOutput
        ] & {
            sop: SiloExit.AccountSeasonOfPlentyStructOutput;
        }>;
        balanceOfStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimPlenty(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimWithdrawal(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimWithdrawals(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decreaseDepositAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposit(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        depositPermitDomainSeparator(overrides?: CallOverrides): Promise<[string]>;
        depositPermitNonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        enrootDeposit(token: PromiseOrValue<string>, _season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        enrootDeposits(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getDeposit(account: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getTotalDeposited(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTotalWithdrawn(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getWithdrawal(account: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseDepositAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lastSeasonOfPlenty(overrides?: CallOverrides): Promise<[number]>;
        lastUpdate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number]>;
        permitDeposit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        permitDeposits(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        plant(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tokenSettings(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[Storage.SiloSettingsStructOutput]>;
        totalEarnedBeans(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalRoots(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSeeds(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalStalk(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferDeposit(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferDeposits(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        update(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawDeposit(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawDeposits(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawFreeze(overrides?: CallOverrides): Promise<[number]>;
        approveToken(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decreaseTokenAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAllBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            TokenFacet.BalanceStructOutput
        ] & {
            b: TokenFacet.BalanceStructOutput;
        }>;
        getAllBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[
            TokenFacet.BalanceStructOutput[]
        ] & {
            balances: TokenFacet.BalanceStructOutput[];
        }>;
        getBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        getBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            balances: BigNumber[];
        }>;
        getExternalBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        getExternalBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            balances: BigNumber[];
        }>;
        getInternalBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        getInternalBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            balances: BigNumber[];
        }>;
        increaseTokenAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        permitERC20(token: PromiseOrValue<string>, owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        permitToken(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tokenAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenPermitDomainSeparator(overrides?: CallOverrides): Promise<[string]>;
        tokenPermitNonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferToken(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferTokenFrom(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unwrapEth(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        wrapEth(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _getPenalizedUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, supply: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            redeem: BigNumber;
        }>;
        addUnripeToken(unripeToken: PromiseOrValue<string>, underlyingToken: PromiseOrValue<string>, root: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOfPenalizedUnderlying(unripeToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            underlying: BigNumber;
        }>;
        balanceOfUnderlying(unripeToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            underlying: BigNumber;
        }>;
        chop(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getPenalizedUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            redeem: BigNumber;
        }>;
        getPenalty(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            penalty: BigNumber;
        }>;
        getPercentPenalty(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            penalty: BigNumber;
        }>;
        getRecapFundedPercent(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            percent: BigNumber;
        }>;
        getRecapPaidPercent(overrides?: CallOverrides): Promise<[BigNumber] & {
            penalty: BigNumber;
        }>;
        getTotalUnderlying(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            underlying: BigNumber;
        }>;
        getUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            redeem: BigNumber;
        }>;
        getUnderlyingPerUnripeToken(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            underlyingPerToken: BigNumber;
        }>;
        getUnderlyingToken(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            underlyingToken: string;
        }>;
        isUnripe(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            unripe: boolean;
        }>;
        pick(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BytesLike>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        picked(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        dewhitelistToken(token: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistToken(token: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, stalk: PromiseOrValue<BigNumberish>, seeds: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    bdv(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    beanToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    curveToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    unripeBeanToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    unripeLPToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    convert(convertData: PromiseOrValue<BytesLike>, crates: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAmountOut(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getMaxAmountIn(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    addLiquidity(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amounts: PromiseOrValue<BigNumberish>[], minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchange(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, fromToken: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeUnderlying(pool: PromiseOrValue<string>, fromToken: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidity(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountsOut: PromiseOrValue<BigNumberish>[], fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityImbalance(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amountsOut: PromiseOrValue<BigNumberish>[], maxAmountIn: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityOneToken(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    advancedPipe(pipes: AdvancedPipeStruct[], value: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    etherPipe(p: PipeStruct, value: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    multiPipe(pipes: PipeStruct[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pipe(p: PipeStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    readPipe(p: PipeStruct, overrides?: CallOverrides): Promise<string>;
    diamondCut(_diamondCut: IDiamondCut.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    facetAddresses(overrides?: CallOverrides): Promise<string[]>;
    facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    facets(overrides?: CallOverrides): Promise<IDiamondLoupe.FacetStructOutput[]>;
    supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    advancedFarm(data: AdvancedDataStruct[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    farm(data: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addFertilizerOwner(id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, minLP: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOfBatchFertilizer(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<IFertilizer.BalanceStructOutput[]>;
    balanceOfFertilized(account: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfFertilizer(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IFertilizer.BalanceStructOutput>;
    balanceOfUnfertilized(account: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
    beansPerFertilizer(overrides?: CallOverrides): Promise<BigNumber>;
    claimFertilized(ids: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getActiveFertilizer(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentHumidity(overrides?: CallOverrides): Promise<BigNumber>;
    getEndBpf(overrides?: CallOverrides): Promise<BigNumber>;
    getFertilizer(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getFertilizers(overrides?: CallOverrides): Promise<FertilizerFacet.SupplyStructOutput[]>;
    getFirst(overrides?: CallOverrides): Promise<BigNumber>;
    getHumidity(_s: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getLast(overrides?: CallOverrides): Promise<BigNumber>;
    getNext(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    isFertilizing(overrides?: CallOverrides): Promise<boolean>;
    mintFertilizer(amount: PromiseOrValue<BigNumberish>, minLP: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    payFertilizer(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    remainingRecapitalization(overrides?: CallOverrides): Promise<BigNumber>;
    totalFertilizedBeans(overrides?: CallOverrides): Promise<BigNumber>;
    totalFertilizerBeans(overrides?: CallOverrides): Promise<BigNumber>;
    totalUnfertilizedBeans(overrides?: CallOverrides): Promise<BigNumber>;
    harvest(plots: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    harvestableIndex(overrides?: CallOverrides): Promise<BigNumber>;
    plot(account: PromiseOrValue<string>, plotId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    podIndex(overrides?: CallOverrides): Promise<BigNumber>;
    sow(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sowWithMin(amount: PromiseOrValue<BigNumberish>, minAmount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalHarvestable(overrides?: CallOverrides): Promise<BigNumber>;
    totalHarvested(overrides?: CallOverrides): Promise<BigNumber>;
    totalPods(overrides?: CallOverrides): Promise<BigNumber>;
    totalSoil(overrides?: CallOverrides): Promise<BigNumber>;
    totalUnharvestable(overrides?: CallOverrides): Promise<BigNumber>;
    createFundraiser(payee: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fund(id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fundingToken(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    fundraiser(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Storage.FundraiserStructOutput>;
    numberOfFundraisers(overrides?: CallOverrides): Promise<number>;
    remainingFunding(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    totalFunding(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    allowancePods(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approvePods(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelPodListing(index: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelPodOrder(pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelPodOrderV2(maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createPodListing(index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, pricePerPod: PromiseOrValue<BigNumberish>, maxHarvestableIndex: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createPodListingV2(index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, maxHarvestableIndex: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createPodOrder(beanAmount: PromiseOrValue<BigNumberish>, pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createPodOrderV2(beanAmount: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fillPodListing(l: Listing.PodListingStruct, beanAmount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fillPodListingV2(l: Listing.PodListingStruct, beanAmount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fillPodOrder(o: Order.PodOrderStruct, index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fillPodOrderV2(o: Order.PodOrderStruct, index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAmountBeansToFillOrderV2(placeInLine: PromiseOrValue<BigNumberish>, amountPodsFromOrder: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getAmountPodsFromFillListingV2(placeInLine: PromiseOrValue<BigNumberish>, podListingAmount: PromiseOrValue<BigNumberish>, fillBeanAmount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    podListing(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    podOrder(account: PromiseOrValue<string>, pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    podOrderById(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    podOrderV2(account: PromiseOrValue<string>, maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    transferPlot(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerCandidate(overrides?: CallOverrides): Promise<string>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    plentyPerRoot(season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    poolDeltaB(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    rain(overrides?: CallOverrides): Promise<Storage.RainStructOutput>;
    season(overrides?: CallOverrides): Promise<number>;
    seasonTime(overrides?: CallOverrides): Promise<number>;
    sunrise(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    time(overrides?: CallOverrides): Promise<Storage.SeasonStructOutput>;
    totalDeltaB(overrides?: CallOverrides): Promise<BigNumber>;
    weather(overrides?: CallOverrides): Promise<Storage.WeatherStructOutput>;
    yield(overrides?: CallOverrides): Promise<number>;
    approveDeposit(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOfEarnedBeans(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfEarnedSeeds(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfEarnedStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfGrownStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfPlenty(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfRainRoots(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfRoots(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfSeeds(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfSop(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<SiloExit.AccountSeasonOfPlentyStructOutput>;
    balanceOfStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    claimPlenty(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimWithdrawal(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimWithdrawals(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decreaseDepositAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposit(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    depositPermitDomainSeparator(overrides?: CallOverrides): Promise<string>;
    depositPermitNonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    enrootDeposit(token: PromiseOrValue<string>, _season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    enrootDeposits(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getDeposit(account: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getTotalDeposited(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getTotalWithdrawn(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getWithdrawal(account: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    increaseDepositAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lastSeasonOfPlenty(overrides?: CallOverrides): Promise<number>;
    lastUpdate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    permitDeposit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    permitDeposits(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    plant(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tokenSettings(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Storage.SiloSettingsStructOutput>;
    totalEarnedBeans(overrides?: CallOverrides): Promise<BigNumber>;
    totalRoots(overrides?: CallOverrides): Promise<BigNumber>;
    totalSeeds(overrides?: CallOverrides): Promise<BigNumber>;
    totalStalk(overrides?: CallOverrides): Promise<BigNumber>;
    transferDeposit(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferDeposits(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    update(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawDeposit(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawDeposits(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawFreeze(overrides?: CallOverrides): Promise<number>;
    approveToken(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decreaseTokenAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAllBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<TokenFacet.BalanceStructOutput>;
    getAllBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<TokenFacet.BalanceStructOutput[]>;
    getBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getExternalBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getExternalBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getInternalBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getInternalBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    increaseTokenAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    permitERC20(token: PromiseOrValue<string>, owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    permitToken(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tokenAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    tokenPermitDomainSeparator(overrides?: CallOverrides): Promise<string>;
    tokenPermitNonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    transferToken(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferTokenFrom(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unwrapEth(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    wrapEth(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _getPenalizedUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, supply: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    addUnripeToken(unripeToken: PromiseOrValue<string>, underlyingToken: PromiseOrValue<string>, root: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOfPenalizedUnderlying(unripeToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfUnderlying(unripeToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    chop(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getPenalizedUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getPenalty(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getPercentPenalty(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getRecapFundedPercent(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getRecapPaidPercent(overrides?: CallOverrides): Promise<BigNumber>;
    getTotalUnderlying(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getUnderlyingPerUnripeToken(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getUnderlyingToken(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    isUnripe(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    pick(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BytesLike>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    picked(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    dewhitelistToken(token: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistToken(token: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, stalk: PromiseOrValue<BigNumberish>, seeds: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        bdv(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        beanToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        curveToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        unripeBeanToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        unripeLPToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        convert(convertData: PromiseOrValue<BytesLike>, crates: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            toSeason: number;
            fromAmount: BigNumber;
            toAmount: BigNumber;
            fromBdv: BigNumber;
            toBdv: BigNumber;
        }>;
        getAmountOut(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxAmountIn(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        addLiquidity(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amounts: PromiseOrValue<BigNumberish>[], minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        exchange(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, fromToken: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        exchangeUnderlying(pool: PromiseOrValue<string>, fromToken: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        removeLiquidity(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountsOut: PromiseOrValue<BigNumberish>[], fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        removeLiquidityImbalance(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amountsOut: PromiseOrValue<BigNumberish>[], maxAmountIn: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        removeLiquidityOneToken(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        advancedPipe(pipes: AdvancedPipeStruct[], value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        etherPipe(p: PipeStruct, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        multiPipe(pipes: PipeStruct[], overrides?: CallOverrides): Promise<string[]>;
        pipe(p: PipeStruct, overrides?: CallOverrides): Promise<string>;
        readPipe(p: PipeStruct, overrides?: CallOverrides): Promise<string>;
        diamondCut(_diamondCut: IDiamondCut.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        facetAddresses(overrides?: CallOverrides): Promise<string[]>;
        facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        facets(overrides?: CallOverrides): Promise<IDiamondLoupe.FacetStructOutput[]>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        advancedFarm(data: AdvancedDataStruct[], overrides?: CallOverrides): Promise<string[]>;
        farm(data: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string[]>;
        addFertilizerOwner(id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, minLP: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOfBatchFertilizer(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<IFertilizer.BalanceStructOutput[]>;
        balanceOfFertilized(account: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfFertilizer(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IFertilizer.BalanceStructOutput>;
        balanceOfUnfertilized(account: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        beansPerFertilizer(overrides?: CallOverrides): Promise<BigNumber>;
        claimFertilized(ids: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getActiveFertilizer(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentHumidity(overrides?: CallOverrides): Promise<BigNumber>;
        getEndBpf(overrides?: CallOverrides): Promise<BigNumber>;
        getFertilizer(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFertilizers(overrides?: CallOverrides): Promise<FertilizerFacet.SupplyStructOutput[]>;
        getFirst(overrides?: CallOverrides): Promise<BigNumber>;
        getHumidity(_s: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getLast(overrides?: CallOverrides): Promise<BigNumber>;
        getNext(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isFertilizing(overrides?: CallOverrides): Promise<boolean>;
        mintFertilizer(amount: PromiseOrValue<BigNumberish>, minLP: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        payFertilizer(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        remainingRecapitalization(overrides?: CallOverrides): Promise<BigNumber>;
        totalFertilizedBeans(overrides?: CallOverrides): Promise<BigNumber>;
        totalFertilizerBeans(overrides?: CallOverrides): Promise<BigNumber>;
        totalUnfertilizedBeans(overrides?: CallOverrides): Promise<BigNumber>;
        harvest(plots: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        harvestableIndex(overrides?: CallOverrides): Promise<BigNumber>;
        plot(account: PromiseOrValue<string>, plotId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        podIndex(overrides?: CallOverrides): Promise<BigNumber>;
        sow(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        sowWithMin(amount: PromiseOrValue<BigNumberish>, minAmount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalHarvestable(overrides?: CallOverrides): Promise<BigNumber>;
        totalHarvested(overrides?: CallOverrides): Promise<BigNumber>;
        totalPods(overrides?: CallOverrides): Promise<BigNumber>;
        totalSoil(overrides?: CallOverrides): Promise<BigNumber>;
        totalUnharvestable(overrides?: CallOverrides): Promise<BigNumber>;
        createFundraiser(payee: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        fund(id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        fundingToken(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        fundraiser(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Storage.FundraiserStructOutput>;
        numberOfFundraisers(overrides?: CallOverrides): Promise<number>;
        remainingFunding(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalFunding(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        allowancePods(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approvePods(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        cancelPodListing(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        cancelPodOrder(pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        cancelPodOrderV2(maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createPodListing(index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, pricePerPod: PromiseOrValue<BigNumberish>, maxHarvestableIndex: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createPodListingV2(index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, maxHarvestableIndex: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createPodOrder(beanAmount: PromiseOrValue<BigNumberish>, pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        createPodOrderV2(beanAmount: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        fillPodListing(l: Listing.PodListingStruct, beanAmount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        fillPodListingV2(l: Listing.PodListingStruct, beanAmount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        fillPodOrder(o: Order.PodOrderStruct, index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        fillPodOrderV2(o: Order.PodOrderStruct, index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getAmountBeansToFillOrderV2(placeInLine: PromiseOrValue<BigNumberish>, amountPodsFromOrder: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountPodsFromFillListingV2(placeInLine: PromiseOrValue<BigNumberish>, podListingAmount: PromiseOrValue<BigNumberish>, fillBeanAmount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        podListing(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        podOrder(account: PromiseOrValue<string>, pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        podOrderById(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        podOrderV2(account: PromiseOrValue<string>, maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferPlot(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        claimOwnership(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerCandidate(overrides?: CallOverrides): Promise<string>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        plentyPerRoot(season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        poolDeltaB(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rain(overrides?: CallOverrides): Promise<Storage.RainStructOutput>;
        season(overrides?: CallOverrides): Promise<number>;
        seasonTime(overrides?: CallOverrides): Promise<number>;
        sunrise(overrides?: CallOverrides): Promise<void>;
        time(overrides?: CallOverrides): Promise<Storage.SeasonStructOutput>;
        totalDeltaB(overrides?: CallOverrides): Promise<BigNumber>;
        weather(overrides?: CallOverrides): Promise<Storage.WeatherStructOutput>;
        yield(overrides?: CallOverrides): Promise<number>;
        approveDeposit(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOfEarnedBeans(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfEarnedSeeds(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfEarnedStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfGrownStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfPlenty(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfRainRoots(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfRoots(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfSeeds(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfSop(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<SiloExit.AccountSeasonOfPlentyStructOutput>;
        balanceOfStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        claimPlenty(overrides?: CallOverrides): Promise<void>;
        claimWithdrawal(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        claimWithdrawals(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        decreaseDepositAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        deposit(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        depositAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        depositPermitDomainSeparator(overrides?: CallOverrides): Promise<string>;
        depositPermitNonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        enrootDeposit(token: PromiseOrValue<string>, _season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        enrootDeposits(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        getDeposit(account: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getTotalDeposited(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalWithdrawn(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getWithdrawal(account: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseDepositAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        lastSeasonOfPlenty(overrides?: CallOverrides): Promise<number>;
        lastUpdate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        permitDeposit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        permitDeposits(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        plant(overrides?: CallOverrides): Promise<BigNumber>;
        tokenSettings(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Storage.SiloSettingsStructOutput>;
        totalEarnedBeans(overrides?: CallOverrides): Promise<BigNumber>;
        totalRoots(overrides?: CallOverrides): Promise<BigNumber>;
        totalSeeds(overrides?: CallOverrides): Promise<BigNumber>;
        totalStalk(overrides?: CallOverrides): Promise<BigNumber>;
        transferDeposit(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferDeposits(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        update(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawDeposit(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawDeposits(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        withdrawFreeze(overrides?: CallOverrides): Promise<number>;
        approveToken(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        decreaseTokenAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        getAllBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<TokenFacet.BalanceStructOutput>;
        getAllBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<TokenFacet.BalanceStructOutput[]>;
        getBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getExternalBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getExternalBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getInternalBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getInternalBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        increaseTokenAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        permitERC20(token: PromiseOrValue<string>, owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        permitToken(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        tokenAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenPermitDomainSeparator(overrides?: CallOverrides): Promise<string>;
        tokenPermitNonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transferToken(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transferTokenFrom(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unwrapEth(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        wrapEth(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        _getPenalizedUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, supply: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        addUnripeToken(unripeToken: PromiseOrValue<string>, underlyingToken: PromiseOrValue<string>, root: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        balanceOfPenalizedUnderlying(unripeToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(unripeToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        chop(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPenalizedUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPenalty(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPercentPenalty(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRecapFundedPercent(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRecapPaidPercent(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalUnderlying(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUnderlyingPerUnripeToken(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUnderlyingToken(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        isUnripe(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        pick(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BytesLike>[], mode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        picked(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        dewhitelistToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        whitelistToken(token: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, stalk: PromiseOrValue<BigNumberish>, seeds: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Convert(address,address,address,uint256,uint256)"(account?: PromiseOrValue<string> | null, fromToken?: null, toToken?: null, fromAmount?: null, toAmount?: null): ConvertEventFilter;
        Convert(account?: PromiseOrValue<string> | null, fromToken?: null, toToken?: null, fromAmount?: null, toAmount?: null): ConvertEventFilter;
        "RemoveDeposits(address,address,uint32[],uint256[],uint256)"(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, seasons?: null, amounts?: null, amount?: null): RemoveDepositsEventFilter;
        RemoveDeposits(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, seasons?: null, amounts?: null, amount?: null): RemoveDepositsEventFilter;
        "DiamondCut(tuple[],address,bytes)"(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
        DiamondCut(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
        "SetFertilizer(uint128,uint128)"(id?: null, bpf?: null): SetFertilizerEventFilter;
        SetFertilizer(id?: null, bpf?: null): SetFertilizerEventFilter;
        "Harvest(address,uint256[],uint256)"(account?: PromiseOrValue<string> | null, plots?: null, beans?: null): HarvestEventFilter;
        Harvest(account?: PromiseOrValue<string> | null, plots?: null, beans?: null): HarvestEventFilter;
        "PodListingCancelled(address,uint256)"(account?: PromiseOrValue<string> | null, index?: null): PodListingCancelledEventFilter;
        PodListingCancelled(account?: PromiseOrValue<string> | null, index?: null): PodListingCancelledEventFilter;
        "Sow(address,uint256,uint256,uint256)"(account?: PromiseOrValue<string> | null, index?: null, beans?: null, pods?: null): SowEventFilter;
        Sow(account?: PromiseOrValue<string> | null, index?: null, beans?: null, pods?: null): SowEventFilter;
        "CompleteFundraiser(uint32)"(id?: PromiseOrValue<BigNumberish> | null): CompleteFundraiserEventFilter;
        CompleteFundraiser(id?: PromiseOrValue<BigNumberish> | null): CompleteFundraiserEventFilter;
        "CreateFundraiser(uint32,address,address,uint256)"(id?: PromiseOrValue<BigNumberish> | null, fundraiser?: null, token?: null, amount?: null): CreateFundraiserEventFilter;
        CreateFundraiser(id?: PromiseOrValue<BigNumberish> | null, fundraiser?: null, token?: null, amount?: null): CreateFundraiserEventFilter;
        "FundFundraiser(address,uint32,uint256)"(account?: PromiseOrValue<string> | null, id?: PromiseOrValue<BigNumberish> | null, amount?: null): FundFundraiserEventFilter;
        FundFundraiser(account?: PromiseOrValue<string> | null, id?: PromiseOrValue<BigNumberish> | null, amount?: null): FundFundraiserEventFilter;
        "PlotTransfer(address,address,uint256,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, id?: PromiseOrValue<BigNumberish> | null, pods?: null): PlotTransferEventFilter;
        PlotTransfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, id?: PromiseOrValue<BigNumberish> | null, pods?: null): PlotTransferEventFilter;
        "PodApproval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, pods?: null): PodApprovalEventFilter;
        PodApproval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, pods?: null): PodApprovalEventFilter;
        "PodListingCreated(address,uint256,uint256,uint256,uint24,uint256,bytes,uint8,uint8)"(account?: PromiseOrValue<string> | null, index?: null, start?: null, amount?: null, pricePerPod?: null, maxHarvestableIndex?: null, pricingFunction?: null, mode?: null, pricingType?: null): PodListingCreatedEventFilter;
        PodListingCreated(account?: PromiseOrValue<string> | null, index?: null, start?: null, amount?: null, pricePerPod?: null, maxHarvestableIndex?: null, pricingFunction?: null, mode?: null, pricingType?: null): PodListingCreatedEventFilter;
        "PodListingFilled(address,address,uint256,uint256,uint256,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, index?: null, start?: null, amount?: null, costInBeans?: null): PodListingFilledEventFilter;
        PodListingFilled(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, index?: null, start?: null, amount?: null, costInBeans?: null): PodListingFilledEventFilter;
        "PodOrderCancelled(address,bytes32)"(account?: PromiseOrValue<string> | null, id?: null): PodOrderCancelledEventFilter;
        PodOrderCancelled(account?: PromiseOrValue<string> | null, id?: null): PodOrderCancelledEventFilter;
        "PodOrderCreated(address,bytes32,uint256,uint24,uint256,bytes,uint8)"(account?: PromiseOrValue<string> | null, id?: null, amount?: null, pricePerPod?: null, maxPlaceInLine?: null, pricingFunction?: null, priceType?: null): PodOrderCreatedEventFilter;
        PodOrderCreated(account?: PromiseOrValue<string> | null, id?: null, amount?: null, pricePerPod?: null, maxPlaceInLine?: null, pricingFunction?: null, priceType?: null): PodOrderCreatedEventFilter;
        "PodOrderFilled(address,address,bytes32,uint256,uint256,uint256,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, id?: null, index?: null, start?: null, amount?: null, costInBeans?: null): PodOrderFilledEventFilter;
        PodOrderFilled(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, id?: null, index?: null, start?: null, amount?: null, costInBeans?: null): PodOrderFilledEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Pause(uint256)"(timestamp?: null): PauseEventFilter;
        Pause(timestamp?: null): PauseEventFilter;
        "Unpause(uint256,uint256)"(timestamp?: null, timePassed?: null): UnpauseEventFilter;
        Unpause(timestamp?: null, timePassed?: null): UnpauseEventFilter;
        "Incentivization(address,uint256)"(account?: PromiseOrValue<string> | null, beans?: null): IncentivizationEventFilter;
        Incentivization(account?: PromiseOrValue<string> | null, beans?: null): IncentivizationEventFilter;
        "MetapoolOracle(uint32,int256,uint256[2])"(season?: PromiseOrValue<BigNumberish> | null, deltaB?: null, balances?: null): MetapoolOracleEventFilter;
        MetapoolOracle(season?: PromiseOrValue<BigNumberish> | null, deltaB?: null, balances?: null): MetapoolOracleEventFilter;
        "Reward(uint32,uint256,uint256,uint256)"(season?: PromiseOrValue<BigNumberish> | null, toField?: null, toSilo?: null, toFertilizer?: null): RewardEventFilter;
        Reward(season?: PromiseOrValue<BigNumberish> | null, toField?: null, toSilo?: null, toFertilizer?: null): RewardEventFilter;
        "SeasonOfPlenty(uint256,uint256,uint256)"(season?: PromiseOrValue<BigNumberish> | null, amount?: null, toField?: null): SeasonOfPlentyEventFilter;
        SeasonOfPlenty(season?: PromiseOrValue<BigNumberish> | null, amount?: null, toField?: null): SeasonOfPlentyEventFilter;
        "Soil(uint32,uint256)"(season?: PromiseOrValue<BigNumberish> | null, soil?: null): SoilEventFilter;
        Soil(season?: PromiseOrValue<BigNumberish> | null, soil?: null): SoilEventFilter;
        "Sunrise(uint256)"(season?: PromiseOrValue<BigNumberish> | null): SunriseEventFilter;
        Sunrise(season?: PromiseOrValue<BigNumberish> | null): SunriseEventFilter;
        "WeatherChange(uint256,uint256,int8)"(season?: PromiseOrValue<BigNumberish> | null, caseId?: null, change?: null): WeatherChangeEventFilter;
        WeatherChange(season?: PromiseOrValue<BigNumberish> | null, caseId?: null, change?: null): WeatherChangeEventFilter;
        "AddDeposit(address,address,uint32,uint256,uint256)"(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, season?: null, amount?: null, bdv?: null): AddDepositEventFilter;
        AddDeposit(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, season?: null, amount?: null, bdv?: null): AddDepositEventFilter;
        "AddWithdrawal(address,address,uint32,uint256)"(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, season?: null, amount?: null): AddWithdrawalEventFilter;
        AddWithdrawal(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, season?: null, amount?: null): AddWithdrawalEventFilter;
        "ClaimPlenty(address,uint256)"(account?: PromiseOrValue<string> | null, plenty?: null): ClaimPlentyEventFilter;
        ClaimPlenty(account?: PromiseOrValue<string> | null, plenty?: null): ClaimPlentyEventFilter;
        "DepositApproval(address,address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, token?: null, amount?: null): DepositApprovalEventFilter;
        DepositApproval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, token?: null, amount?: null): DepositApprovalEventFilter;
        "Plant(address,uint256)"(account?: PromiseOrValue<string> | null, beans?: null): PlantEventFilter;
        Plant(account?: PromiseOrValue<string> | null, beans?: null): PlantEventFilter;
        "RemoveDeposit(address,address,uint32,uint256)"(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, season?: null, amount?: null): RemoveDepositEventFilter;
        RemoveDeposit(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, season?: null, amount?: null): RemoveDepositEventFilter;
        "RemoveWithdrawal(address,address,uint32,uint256)"(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, season?: null, amount?: null): RemoveWithdrawalEventFilter;
        RemoveWithdrawal(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, season?: null, amount?: null): RemoveWithdrawalEventFilter;
        "RemoveWithdrawals(address,address,uint32[],uint256)"(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, seasons?: null, amount?: null): RemoveWithdrawalsEventFilter;
        RemoveWithdrawals(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, seasons?: null, amount?: null): RemoveWithdrawalsEventFilter;
        "SeedsBalanceChanged(address,int256)"(account?: PromiseOrValue<string> | null, delta?: null): SeedsBalanceChangedEventFilter;
        SeedsBalanceChanged(account?: PromiseOrValue<string> | null, delta?: null): SeedsBalanceChangedEventFilter;
        "StalkBalanceChanged(address,int256,int256)"(account?: PromiseOrValue<string> | null, delta?: null, deltaRoots?: null): StalkBalanceChangedEventFilter;
        StalkBalanceChanged(account?: PromiseOrValue<string> | null, delta?: null, deltaRoots?: null): StalkBalanceChangedEventFilter;
        "InternalBalanceChanged(address,address,int256)"(user?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, delta?: null): InternalBalanceChangedEventFilter;
        InternalBalanceChanged(user?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, delta?: null): InternalBalanceChangedEventFilter;
        "TokenApproval(address,address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, token?: null, amount?: null): TokenApprovalEventFilter;
        TokenApproval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, token?: null, amount?: null): TokenApprovalEventFilter;
        "AddUnripeToken(address,address,bytes32)"(unripeToken?: PromiseOrValue<string> | null, underlyingToken?: PromiseOrValue<string> | null, merkleRoot?: null): AddUnripeTokenEventFilter;
        AddUnripeToken(unripeToken?: PromiseOrValue<string> | null, underlyingToken?: PromiseOrValue<string> | null, merkleRoot?: null): AddUnripeTokenEventFilter;
        "ChangeUnderlying(address,int256)"(token?: PromiseOrValue<string> | null, underlying?: null): ChangeUnderlyingEventFilter;
        ChangeUnderlying(token?: PromiseOrValue<string> | null, underlying?: null): ChangeUnderlyingEventFilter;
        "Chop(address,address,uint256,uint256)"(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null, underlying?: null): ChopEventFilter;
        Chop(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null, underlying?: null): ChopEventFilter;
        "Pick(address,address,uint256)"(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): PickEventFilter;
        Pick(account?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): PickEventFilter;
        "DewhitelistToken(address)"(token?: PromiseOrValue<string> | null): DewhitelistTokenEventFilter;
        DewhitelistToken(token?: PromiseOrValue<string> | null): DewhitelistTokenEventFilter;
        "WhitelistToken(address,bytes4,uint256,uint256)"(token?: PromiseOrValue<string> | null, selector?: null, seeds?: null, stalk?: null): WhitelistTokenEventFilter;
        WhitelistToken(token?: PromiseOrValue<string> | null, selector?: null, seeds?: null, stalk?: null): WhitelistTokenEventFilter;
    };
    estimateGas: {
        bdv(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        beanToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        curveToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        unripeBeanToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        unripeLPToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        convert(convertData: PromiseOrValue<BytesLike>, crates: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAmountOut(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxAmountIn(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        addLiquidity(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amounts: PromiseOrValue<BigNumberish>[], minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchange(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, fromToken: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeUnderlying(pool: PromiseOrValue<string>, fromToken: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidity(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountsOut: PromiseOrValue<BigNumberish>[], fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityImbalance(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amountsOut: PromiseOrValue<BigNumberish>[], maxAmountIn: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityOneToken(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        advancedPipe(pipes: AdvancedPipeStruct[], value: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        etherPipe(p: PipeStruct, value: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        multiPipe(pipes: PipeStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pipe(p: PipeStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        readPipe(p: PipeStruct, overrides?: CallOverrides): Promise<BigNumber>;
        diamondCut(_diamondCut: IDiamondCut.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        facetAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        facets(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        advancedFarm(data: AdvancedDataStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        farm(data: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addFertilizerOwner(id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, minLP: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOfBatchFertilizer(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfFertilized(account: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfFertilizer(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnfertilized(account: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        beansPerFertilizer(overrides?: CallOverrides): Promise<BigNumber>;
        claimFertilized(ids: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getActiveFertilizer(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentHumidity(overrides?: CallOverrides): Promise<BigNumber>;
        getEndBpf(overrides?: CallOverrides): Promise<BigNumber>;
        getFertilizer(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFertilizers(overrides?: CallOverrides): Promise<BigNumber>;
        getFirst(overrides?: CallOverrides): Promise<BigNumber>;
        getHumidity(_s: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getLast(overrides?: CallOverrides): Promise<BigNumber>;
        getNext(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isFertilizing(overrides?: CallOverrides): Promise<BigNumber>;
        mintFertilizer(amount: PromiseOrValue<BigNumberish>, minLP: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        payFertilizer(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remainingRecapitalization(overrides?: CallOverrides): Promise<BigNumber>;
        totalFertilizedBeans(overrides?: CallOverrides): Promise<BigNumber>;
        totalFertilizerBeans(overrides?: CallOverrides): Promise<BigNumber>;
        totalUnfertilizedBeans(overrides?: CallOverrides): Promise<BigNumber>;
        harvest(plots: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        harvestableIndex(overrides?: CallOverrides): Promise<BigNumber>;
        plot(account: PromiseOrValue<string>, plotId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        podIndex(overrides?: CallOverrides): Promise<BigNumber>;
        sow(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sowWithMin(amount: PromiseOrValue<BigNumberish>, minAmount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalHarvestable(overrides?: CallOverrides): Promise<BigNumber>;
        totalHarvested(overrides?: CallOverrides): Promise<BigNumber>;
        totalPods(overrides?: CallOverrides): Promise<BigNumber>;
        totalSoil(overrides?: CallOverrides): Promise<BigNumber>;
        totalUnharvestable(overrides?: CallOverrides): Promise<BigNumber>;
        createFundraiser(payee: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fund(id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fundingToken(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        fundraiser(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        numberOfFundraisers(overrides?: CallOverrides): Promise<BigNumber>;
        remainingFunding(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalFunding(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        allowancePods(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approvePods(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelPodListing(index: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelPodOrder(pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelPodOrderV2(maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createPodListing(index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, pricePerPod: PromiseOrValue<BigNumberish>, maxHarvestableIndex: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createPodListingV2(index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, maxHarvestableIndex: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createPodOrder(beanAmount: PromiseOrValue<BigNumberish>, pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createPodOrderV2(beanAmount: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fillPodListing(l: Listing.PodListingStruct, beanAmount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fillPodListingV2(l: Listing.PodListingStruct, beanAmount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fillPodOrder(o: Order.PodOrderStruct, index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fillPodOrderV2(o: Order.PodOrderStruct, index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAmountBeansToFillOrderV2(placeInLine: PromiseOrValue<BigNumberish>, amountPodsFromOrder: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountPodsFromFillListingV2(placeInLine: PromiseOrValue<BigNumberish>, podListingAmount: PromiseOrValue<BigNumberish>, fillBeanAmount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        podListing(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        podOrder(account: PromiseOrValue<string>, pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        podOrderById(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        podOrderV2(account: PromiseOrValue<string>, maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferPlot(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerCandidate(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pause(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        plentyPerRoot(season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        poolDeltaB(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rain(overrides?: CallOverrides): Promise<BigNumber>;
        season(overrides?: CallOverrides): Promise<BigNumber>;
        seasonTime(overrides?: CallOverrides): Promise<BigNumber>;
        sunrise(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        time(overrides?: CallOverrides): Promise<BigNumber>;
        totalDeltaB(overrides?: CallOverrides): Promise<BigNumber>;
        weather(overrides?: CallOverrides): Promise<BigNumber>;
        yield(overrides?: CallOverrides): Promise<BigNumber>;
        approveDeposit(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOfEarnedBeans(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfEarnedSeeds(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfEarnedStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfGrownStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfPlenty(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfRainRoots(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfRoots(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfSeeds(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfSop(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        claimPlenty(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimWithdrawal(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimWithdrawals(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decreaseDepositAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposit(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        depositPermitDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;
        depositPermitNonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        enrootDeposit(token: PromiseOrValue<string>, _season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        enrootDeposits(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getDeposit(account: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalDeposited(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalWithdrawn(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getWithdrawal(account: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseDepositAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lastSeasonOfPlenty(overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        permitDeposit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        permitDeposits(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        plant(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tokenSettings(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalEarnedBeans(overrides?: CallOverrides): Promise<BigNumber>;
        totalRoots(overrides?: CallOverrides): Promise<BigNumber>;
        totalSeeds(overrides?: CallOverrides): Promise<BigNumber>;
        totalStalk(overrides?: CallOverrides): Promise<BigNumber>;
        transferDeposit(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferDeposits(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        update(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawDeposit(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawDeposits(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawFreeze(overrides?: CallOverrides): Promise<BigNumber>;
        approveToken(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decreaseTokenAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAllBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAllBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        getBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        getExternalBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getExternalBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        getInternalBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getInternalBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        increaseTokenAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        permitERC20(token: PromiseOrValue<string>, owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        permitToken(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tokenAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenPermitDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;
        tokenPermitNonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transferToken(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferTokenFrom(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unwrapEth(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        wrapEth(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _getPenalizedUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, supply: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        addUnripeToken(unripeToken: PromiseOrValue<string>, underlyingToken: PromiseOrValue<string>, root: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOfPenalizedUnderlying(unripeToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(unripeToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        chop(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getPenalizedUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPenalty(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPercentPenalty(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRecapFundedPercent(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRecapPaidPercent(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalUnderlying(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUnderlyingPerUnripeToken(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUnderlyingToken(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isUnripe(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        pick(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BytesLike>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        picked(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        dewhitelistToken(token: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistToken(token: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, stalk: PromiseOrValue<BigNumberish>, seeds: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        bdv(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beanToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        curveToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unripeBeanToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unripeLPToBDV(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convert(convertData: PromiseOrValue<BytesLike>, crates: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAmountOut(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxAmountIn(tokenIn: PromiseOrValue<string>, tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addLiquidity(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amounts: PromiseOrValue<BigNumberish>[], minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchange(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, fromToken: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeUnderlying(pool: PromiseOrValue<string>, fromToken: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidity(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountsOut: PromiseOrValue<BigNumberish>[], fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityImbalance(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, amountsOut: PromiseOrValue<BigNumberish>[], maxAmountIn: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityOneToken(pool: PromiseOrValue<string>, registry: PromiseOrValue<string>, toToken: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, minAmountOut: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        advancedPipe(pipes: AdvancedPipeStruct[], value: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        etherPipe(p: PipeStruct, value: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        multiPipe(pipes: PipeStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pipe(p: PipeStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        readPipe(p: PipeStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        diamondCut(_diamondCut: IDiamondCut.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facetAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        advancedFarm(data: AdvancedDataStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        farm(data: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addFertilizerOwner(id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, minLP: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOfBatchFertilizer(accounts: PromiseOrValue<string>[], ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfFertilized(account: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfFertilizer(account: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfUnfertilized(account: PromiseOrValue<string>, ids: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beansPerFertilizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimFertilized(ids: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getActiveFertilizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentHumidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEndBpf(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFertilizer(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFertilizers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFirst(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHumidity(_s: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNext(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFertilizing(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintFertilizer(amount: PromiseOrValue<BigNumberish>, minLP: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        payFertilizer(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remainingRecapitalization(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalFertilizedBeans(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalFertilizerBeans(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalUnfertilizedBeans(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        harvest(plots: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        harvestableIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        plot(account: PromiseOrValue<string>, plotId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        podIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sow(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sowWithMin(amount: PromiseOrValue<BigNumberish>, minAmount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalHarvestable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalHarvested(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalPods(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSoil(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalUnharvestable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createFundraiser(payee: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fund(id: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fundingToken(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundraiser(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numberOfFundraisers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remainingFunding(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalFunding(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowancePods(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approvePods(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelPodListing(index: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelPodOrder(pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelPodOrderV2(maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createPodListing(index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, pricePerPod: PromiseOrValue<BigNumberish>, maxHarvestableIndex: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createPodListingV2(index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, maxHarvestableIndex: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createPodOrder(beanAmount: PromiseOrValue<BigNumberish>, pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createPodOrderV2(beanAmount: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fillPodListing(l: Listing.PodListingStruct, beanAmount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fillPodListingV2(l: Listing.PodListingStruct, beanAmount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fillPodOrder(o: Order.PodOrderStruct, index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fillPodOrderV2(o: Order.PodOrderStruct, index: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAmountBeansToFillOrderV2(placeInLine: PromiseOrValue<BigNumberish>, amountPodsFromOrder: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountPodsFromFillListingV2(placeInLine: PromiseOrValue<BigNumberish>, podListingAmount: PromiseOrValue<BigNumberish>, fillBeanAmount: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        podListing(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        podOrder(account: PromiseOrValue<string>, pricePerPod: PromiseOrValue<BigNumberish>, maxPlaceInLine: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        podOrderById(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        podOrderV2(account: PromiseOrValue<string>, maxPlaceInLine: PromiseOrValue<BigNumberish>, pricingFunction: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferPlot(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, start: PromiseOrValue<BigNumberish>, end: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerCandidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        plentyPerRoot(season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolDeltaB(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        season(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        seasonTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sunrise(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalDeltaB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weather(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        yield(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approveDeposit(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOfEarnedBeans(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfEarnedSeeds(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfEarnedStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfGrownStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfPlenty(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfRainRoots(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfRoots(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfSeeds(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfSop(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfStalk(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimPlenty(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimWithdrawal(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimWithdrawals(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decreaseDepositAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposit(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositPermitDomainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositPermitNonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enrootDeposit(token: PromiseOrValue<string>, _season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        enrootDeposits(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getDeposit(account: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalDeposited(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalWithdrawn(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWithdrawal(account: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseDepositAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lastSeasonOfPlenty(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastUpdate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permitDeposit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        permitDeposits(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        plant(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tokenSettings(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalEarnedBeans(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalRoots(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSeeds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalStalk(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferDeposit(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferDeposits(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        update(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawDeposit(token: PromiseOrValue<string>, season: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawDeposits(token: PromiseOrValue<string>, seasons: PromiseOrValue<BigNumberish>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawFreeze(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approveToken(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decreaseTokenAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAllBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExternalBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExternalBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInternalBalance(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInternalBalances(account: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseTokenAllowance(spender: PromiseOrValue<string>, token: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        permitERC20(token: PromiseOrValue<string>, owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        permitToken(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tokenAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenPermitDomainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenPermitNonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferToken(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferTokenFrom(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unwrapEth(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        wrapEth(amount: PromiseOrValue<BigNumberish>, mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _getPenalizedUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, supply: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addUnripeToken(unripeToken: PromiseOrValue<string>, underlyingToken: PromiseOrValue<string>, root: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOfPenalizedUnderlying(unripeToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfUnderlying(unripeToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chop(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fromMode: PromiseOrValue<BigNumberish>, toMode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getPenalizedUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPenalty(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPercentPenalty(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRecapFundedPercent(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRecapPaidPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalUnderlying(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUnderlying(unripeToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUnderlyingPerUnripeToken(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUnderlyingToken(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isUnripe(unripeToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pick(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, proof: PromiseOrValue<BytesLike>[], mode: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        picked(account: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dewhitelistToken(token: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistToken(token: PromiseOrValue<string>, selector: PromiseOrValue<BytesLike>, stalk: PromiseOrValue<BigNumberish>, seeds: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
