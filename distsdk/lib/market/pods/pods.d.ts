import { DataSource } from "../../../types";
import { BeanstalkSDK } from "../../BeanstalkSDK";
export declare class PodsMarket {
    static sdk: BeanstalkSDK;
    constructor(sdk: BeanstalkSDK);
    /**
     * Get a listing by ID.
     *
     * @param id
     * @param options
     */
    getListing(id: string, options?: {
        source: DataSource.SUBGRAPH;
        validate: boolean;
    }): Promise<{
        __typename?: "PodListing" | undefined;
        id: string;
        index: any;
        createdAt: any;
        updatedAt: any;
        status: import("../../../constants/generated-gql/graphql").MarketStatus;
        originalIndex: any;
        amount: any;
        totalAmount: any;
        remainingAmount: any;
        start: any;
        pricePerPod: number;
        maxHarvestableIndex: any;
        mode: number;
    }>;
}
