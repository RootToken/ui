import { BigNumber as EBN, ethers } from "ethers";
import { Token } from "../../classes/Token";
import { AddDepositEvent, RemoveDepositEvent, RemoveDepositsEvent, AddWithdrawalEvent, RemoveWithdrawalEvent, RemoveWithdrawalsEvent } from "../../constants/generated/Beanstalk/Beanstalk";
import { StringMap } from "../../types";
import { BeanstalkSDK } from "../BeanstalkSDK";
import { PodListing, PodOrder } from "./types";
export declare const setToMap: (tokens: Set<Token>) => Map<Token, any>;
export declare type EventProcessingParameters = {
    season: EBN;
    whitelist: Set<Token>;
};
export declare type DepositCrateRaw = {
    amount: EBN;
    bdv: EBN;
};
export declare type WithdrawalCrateRaw = {
    amount: EBN;
};
export declare type EventProcessorData = {
    plots: StringMap<EBN>;
    deposits: Map<Token, {
        [season: string]: DepositCrateRaw;
    }>;
    withdrawals: Map<Token, {
        [season: string]: WithdrawalCrateRaw;
    }>;
    listings: {
        [plotIndex: string]: PodListing;
    };
    orders: {
        [orderId: string]: PodOrder;
    };
};
export declare type EventKeys = "event" | "args" | "blockNumber" | "transactionIndex" | "transactionHash" | "logIndex";
export declare type Simplify<T extends ethers.Event> = Pick<T, EventKeys> & {
    returnValues?: any;
};
export declare type Event = Simplify<ethers.Event>;
export default class EventProcessor {
    private readonly sdk;
    account: string;
    epp: EventProcessingParameters;
    plots: EventProcessorData["plots"];
    deposits: EventProcessorData["deposits"];
    withdrawals: EventProcessorData["withdrawals"];
    listings: EventProcessorData["listings"];
    orders: EventProcessorData["orders"];
    constructor(sdk: BeanstalkSDK, account: string, epp: EventProcessingParameters, initialState?: Partial<EventProcessorData>);
    ingest<T extends Event>(event: T): any;
    ingestAll<T extends Event>(events: T[]): {
        plots: StringMap<EBN>;
        deposits: Map<Token, {
            [season: string]: DepositCrateRaw;
        }>;
        withdrawals: Map<Token, {
            [season: string]: WithdrawalCrateRaw;
        }>;
        listings: {
            [plotIndex: string]: PodListing;
        };
        orders: {
            [orderId: string]: PodOrder;
        };
    };
    data(): {
        plots: StringMap<EBN>;
        deposits: Map<Token, {
            [season: string]: DepositCrateRaw;
        }>;
        withdrawals: Map<Token, {
            [season: string]: WithdrawalCrateRaw;
        }>;
        listings: {
            [plotIndex: string]: PodListing;
        };
        orders: {
            [orderId: string]: PodOrder;
        };
    };
    getToken(event: Event): Token;
    _upsertDeposit(existing: DepositCrateRaw | undefined, amount: EBN, bdv: EBN): {
        amount: EBN;
        bdv: EBN;
    };
    _removeDeposit(season: string, token: Token, amount: EBN): void;
    AddDeposit(event: Simplify<AddDepositEvent>): void;
    RemoveDeposit(event: Simplify<RemoveDepositEvent>): void;
    RemoveDeposits(event: Simplify<RemoveDepositsEvent>): void;
    _upsertWithdrawal(existing: WithdrawalCrateRaw | undefined, amount: EBN): {
        amount: EBN;
    };
    _removeWithdrawal(season: string, token: Token, _amount: EBN): void;
    AddWithdrawal(event: Simplify<AddWithdrawalEvent>): void;
    RemoveWithdrawal(event: Simplify<RemoveWithdrawalEvent>): void;
    RemoveWithdrawals(event: Simplify<RemoveWithdrawalsEvent>): void;
}
