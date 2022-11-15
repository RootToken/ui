import { BeanstalkSDK } from "../../lib/BeanstalkSDK";
import { EventType } from "./utils";
import { Event } from "ethers";
export declare class EventManager {
    private readonly sdk;
    private readonly filters;
    constructor(sdk: BeanstalkSDK);
    getSiloEvents(_account: string, _token?: string, _fromBlock?: number, _toBlock?: number): Promise<import("./processor").Event[]>;
    getFieldEvents(_account: string, _fromBlock?: number, _toBlock?: number): Promise<import("./processor").Event[]>;
    getMarketEvents(_account: string, _fromBlock?: number, _toBlock?: number): Promise<import("./processor").Event[]>;
    getFertilizerEvents(_account: string, _fromBlock?: number, _toBlock?: number): Promise<import("./processor").Event[]>;
    getRawEventsByType(eventType: EventType, _account: string, _fromBlock?: number, _toBlock?: number): Promise<Event[][]>;
    private reduceAndSort;
}
