import { ethers } from 'ethers';
import { Event } from './processor';
export declare enum EventType {
    SILO = "silo",
    FIELD = "filed",
    FERTILIER = "fertilizer",
    MARKET = "market"
}
export declare const sortEvents: (a: Event, b: Event) => number;
export declare const reduceEvent: (prev: Event[], e: ethers.Event) => Event[];
