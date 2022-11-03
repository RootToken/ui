import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigDecimal: any;
    BigInt: any;
    Bytes: any;
};
export declare type AddDeposit = SiloEvent & {
    __typename?: 'AddDeposit';
    /**  Account removing deposit */
    account: Scalars['String'];
    /**  Amount of token removed  */
    amount: Scalars['BigInt'];
    /**  BDV of the deposit  */
    bdv: Scalars['BigInt'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /** addDeposit-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Season of deposit removed  */
    season: Scalars['Int'];
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
    /**  Token removed */
    token: Scalars['String'];
};
export declare type AddDeposit_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    account?: InputMaybe<Scalars['String']>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    bdv?: InputMaybe<Scalars['BigInt']>;
    bdv_gt?: InputMaybe<Scalars['BigInt']>;
    bdv_gte?: InputMaybe<Scalars['BigInt']>;
    bdv_in?: InputMaybe<Array<Scalars['BigInt']>>;
    bdv_lt?: InputMaybe<Scalars['BigInt']>;
    bdv_lte?: InputMaybe<Scalars['BigInt']>;
    bdv_not?: InputMaybe<Scalars['BigInt']>;
    bdv_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    token?: InputMaybe<Scalars['String']>;
    token_contains?: InputMaybe<Scalars['String']>;
    token_contains_nocase?: InputMaybe<Scalars['String']>;
    token_ends_with?: InputMaybe<Scalars['String']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_gt?: InputMaybe<Scalars['String']>;
    token_gte?: InputMaybe<Scalars['String']>;
    token_in?: InputMaybe<Array<Scalars['String']>>;
    token_lt?: InputMaybe<Scalars['String']>;
    token_lte?: InputMaybe<Scalars['String']>;
    token_not?: InputMaybe<Scalars['String']>;
    token_not_contains?: InputMaybe<Scalars['String']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token_not_ends_with?: InputMaybe<Scalars['String']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_in?: InputMaybe<Array<Scalars['String']>>;
    token_not_starts_with?: InputMaybe<Scalars['String']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_starts_with?: InputMaybe<Scalars['String']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};
export declare enum AddDeposit_OrderBy {
    Account = "account",
    Amount = "amount",
    Bdv = "bdv",
    BlockNumber = "blockNumber",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Season = "season",
    Timestamp = "timestamp",
    Token = "token"
}
export declare type Beanstalk = {
    __typename?: 'Beanstalk';
    /**  Array of the addresses for all active farmers in the silo  */
    activeFarmers: Array<Scalars['String']>;
    /**  Array of the addresses for all farmers that had silo transfers and need stalk/seeds/roots updated  */
    farmersToUpdate: Array<Scalars['String']>;
    /**  Field level data  */
    field: Field;
    /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
    id: Scalars['ID'];
    /**  Last season called  */
    lastSeason: Scalars['Int'];
    /**  Timestamp of the latest DiamondCut call  */
    lastUpgrade: Scalars['BigInt'];
    /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
    methodologyVersion: Scalars['String'];
    /**  Name of the protocol, including version. e.g. Uniswap v3  */
    name: Scalars['String'];
    /**  The blockchain network this subgraph is indexing on  */
    network: Network;
    /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
    schemaVersion: Scalars['String'];
    /**  Season specific data  */
    seasons: Array<Season>;
    /**  Silo level data  */
    silo: Silo;
    /**  Slug of protocol, including version. e.g. uniswap-v3  */
    slug: Scalars['String'];
    /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
    subgraphVersion: Scalars['String'];
};
export declare type BeanstalkSeasonsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Season_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<Season_Filter>;
};
export declare type Beanstalk_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    activeFarmers?: InputMaybe<Array<Scalars['String']>>;
    activeFarmers_contains?: InputMaybe<Array<Scalars['String']>>;
    activeFarmers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    activeFarmers_not?: InputMaybe<Array<Scalars['String']>>;
    activeFarmers_not_contains?: InputMaybe<Array<Scalars['String']>>;
    activeFarmers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    farmersToUpdate?: InputMaybe<Array<Scalars['String']>>;
    farmersToUpdate_contains?: InputMaybe<Array<Scalars['String']>>;
    farmersToUpdate_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    farmersToUpdate_not?: InputMaybe<Array<Scalars['String']>>;
    farmersToUpdate_not_contains?: InputMaybe<Array<Scalars['String']>>;
    farmersToUpdate_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    field_?: InputMaybe<Field_Filter>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    lastSeason?: InputMaybe<Scalars['Int']>;
    lastSeason_gt?: InputMaybe<Scalars['Int']>;
    lastSeason_gte?: InputMaybe<Scalars['Int']>;
    lastSeason_in?: InputMaybe<Array<Scalars['Int']>>;
    lastSeason_lt?: InputMaybe<Scalars['Int']>;
    lastSeason_lte?: InputMaybe<Scalars['Int']>;
    lastSeason_not?: InputMaybe<Scalars['Int']>;
    lastSeason_not_in?: InputMaybe<Array<Scalars['Int']>>;
    lastUpgrade?: InputMaybe<Scalars['BigInt']>;
    lastUpgrade_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpgrade_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpgrade_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpgrade_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpgrade_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpgrade_not?: InputMaybe<Scalars['BigInt']>;
    lastUpgrade_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    methodologyVersion?: InputMaybe<Scalars['String']>;
    methodologyVersion_contains?: InputMaybe<Scalars['String']>;
    methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_ends_with?: InputMaybe<Scalars['String']>;
    methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_gt?: InputMaybe<Scalars['String']>;
    methodologyVersion_gte?: InputMaybe<Scalars['String']>;
    methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>;
    methodologyVersion_lt?: InputMaybe<Scalars['String']>;
    methodologyVersion_lte?: InputMaybe<Scalars['String']>;
    methodologyVersion_not?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_contains?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
    methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>;
    methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    methodologyVersion_starts_with?: InputMaybe<Scalars['String']>;
    methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    name_contains?: InputMaybe<Scalars['String']>;
    name_contains_nocase?: InputMaybe<Scalars['String']>;
    name_ends_with?: InputMaybe<Scalars['String']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']>;
    name_gt?: InputMaybe<Scalars['String']>;
    name_gte?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<Scalars['String']>>;
    name_lt?: InputMaybe<Scalars['String']>;
    name_lte?: InputMaybe<Scalars['String']>;
    name_not?: InputMaybe<Scalars['String']>;
    name_not_contains?: InputMaybe<Scalars['String']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']>;
    name_not_ends_with?: InputMaybe<Scalars['String']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_in?: InputMaybe<Array<Scalars['String']>>;
    name_not_starts_with?: InputMaybe<Scalars['String']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_starts_with?: InputMaybe<Scalars['String']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']>;
    network?: InputMaybe<Network>;
    network_in?: InputMaybe<Array<Network>>;
    network_not?: InputMaybe<Network>;
    network_not_in?: InputMaybe<Array<Network>>;
    schemaVersion?: InputMaybe<Scalars['String']>;
    schemaVersion_contains?: InputMaybe<Scalars['String']>;
    schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_ends_with?: InputMaybe<Scalars['String']>;
    schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_gt?: InputMaybe<Scalars['String']>;
    schemaVersion_gte?: InputMaybe<Scalars['String']>;
    schemaVersion_in?: InputMaybe<Array<Scalars['String']>>;
    schemaVersion_lt?: InputMaybe<Scalars['String']>;
    schemaVersion_lte?: InputMaybe<Scalars['String']>;
    schemaVersion_not?: InputMaybe<Scalars['String']>;
    schemaVersion_not_contains?: InputMaybe<Scalars['String']>;
    schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>;
    schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
    schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>;
    schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    schemaVersion_starts_with?: InputMaybe<Scalars['String']>;
    schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
    seasons_?: InputMaybe<Season_Filter>;
    silo_?: InputMaybe<Silo_Filter>;
    slug?: InputMaybe<Scalars['String']>;
    slug_contains?: InputMaybe<Scalars['String']>;
    slug_contains_nocase?: InputMaybe<Scalars['String']>;
    slug_ends_with?: InputMaybe<Scalars['String']>;
    slug_ends_with_nocase?: InputMaybe<Scalars['String']>;
    slug_gt?: InputMaybe<Scalars['String']>;
    slug_gte?: InputMaybe<Scalars['String']>;
    slug_in?: InputMaybe<Array<Scalars['String']>>;
    slug_lt?: InputMaybe<Scalars['String']>;
    slug_lte?: InputMaybe<Scalars['String']>;
    slug_not?: InputMaybe<Scalars['String']>;
    slug_not_contains?: InputMaybe<Scalars['String']>;
    slug_not_contains_nocase?: InputMaybe<Scalars['String']>;
    slug_not_ends_with?: InputMaybe<Scalars['String']>;
    slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    slug_not_in?: InputMaybe<Array<Scalars['String']>>;
    slug_not_starts_with?: InputMaybe<Scalars['String']>;
    slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    slug_starts_with?: InputMaybe<Scalars['String']>;
    slug_starts_with_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion?: InputMaybe<Scalars['String']>;
    subgraphVersion_contains?: InputMaybe<Scalars['String']>;
    subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_ends_with?: InputMaybe<Scalars['String']>;
    subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_gt?: InputMaybe<Scalars['String']>;
    subgraphVersion_gte?: InputMaybe<Scalars['String']>;
    subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>;
    subgraphVersion_lt?: InputMaybe<Scalars['String']>;
    subgraphVersion_lte?: InputMaybe<Scalars['String']>;
    subgraphVersion_not?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_contains?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
    subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>;
    subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    subgraphVersion_starts_with?: InputMaybe<Scalars['String']>;
    subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
};
export declare enum Beanstalk_OrderBy {
    ActiveFarmers = "activeFarmers",
    FarmersToUpdate = "farmersToUpdate",
    Field = "field",
    Id = "id",
    LastSeason = "lastSeason",
    LastUpgrade = "lastUpgrade",
    MethodologyVersion = "methodologyVersion",
    Name = "name",
    Network = "network",
    SchemaVersion = "schemaVersion",
    Seasons = "seasons",
    Silo = "silo",
    Slug = "slug",
    SubgraphVersion = "subgraphVersion"
}
export declare type BlockChangedFilter = {
    number_gte: Scalars['Int'];
};
export declare type Block_Height = {
    hash?: InputMaybe<Scalars['Bytes']>;
    number?: InputMaybe<Scalars['Int']>;
    number_gte?: InputMaybe<Scalars['Int']>;
};
export declare type Chop = SiloEvent & {
    __typename?: 'Chop';
    /**  Amount being chopped */
    amount: Scalars['BigInt'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Address chopping  */
    farmer: Scalars['String'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /** chop-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
    /**  Underlying token  */
    underlying: Token;
    /**  Unripe token being chopped  */
    unripe: Token;
};
export declare type Chop_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    farmer?: InputMaybe<Scalars['String']>;
    farmer_contains?: InputMaybe<Scalars['String']>;
    farmer_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_ends_with?: InputMaybe<Scalars['String']>;
    farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_gt?: InputMaybe<Scalars['String']>;
    farmer_gte?: InputMaybe<Scalars['String']>;
    farmer_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_lt?: InputMaybe<Scalars['String']>;
    farmer_lte?: InputMaybe<Scalars['String']>;
    farmer_not?: InputMaybe<Scalars['String']>;
    farmer_not_contains?: InputMaybe<Scalars['String']>;
    farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_not_starts_with?: InputMaybe<Scalars['String']>;
    farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_starts_with?: InputMaybe<Scalars['String']>;
    farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    underlying?: InputMaybe<Scalars['String']>;
    underlying_?: InputMaybe<Token_Filter>;
    underlying_contains?: InputMaybe<Scalars['String']>;
    underlying_contains_nocase?: InputMaybe<Scalars['String']>;
    underlying_ends_with?: InputMaybe<Scalars['String']>;
    underlying_ends_with_nocase?: InputMaybe<Scalars['String']>;
    underlying_gt?: InputMaybe<Scalars['String']>;
    underlying_gte?: InputMaybe<Scalars['String']>;
    underlying_in?: InputMaybe<Array<Scalars['String']>>;
    underlying_lt?: InputMaybe<Scalars['String']>;
    underlying_lte?: InputMaybe<Scalars['String']>;
    underlying_not?: InputMaybe<Scalars['String']>;
    underlying_not_contains?: InputMaybe<Scalars['String']>;
    underlying_not_contains_nocase?: InputMaybe<Scalars['String']>;
    underlying_not_ends_with?: InputMaybe<Scalars['String']>;
    underlying_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    underlying_not_in?: InputMaybe<Array<Scalars['String']>>;
    underlying_not_starts_with?: InputMaybe<Scalars['String']>;
    underlying_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    underlying_starts_with?: InputMaybe<Scalars['String']>;
    underlying_starts_with_nocase?: InputMaybe<Scalars['String']>;
    unripe?: InputMaybe<Scalars['String']>;
    unripe_?: InputMaybe<Token_Filter>;
    unripe_contains?: InputMaybe<Scalars['String']>;
    unripe_contains_nocase?: InputMaybe<Scalars['String']>;
    unripe_ends_with?: InputMaybe<Scalars['String']>;
    unripe_ends_with_nocase?: InputMaybe<Scalars['String']>;
    unripe_gt?: InputMaybe<Scalars['String']>;
    unripe_gte?: InputMaybe<Scalars['String']>;
    unripe_in?: InputMaybe<Array<Scalars['String']>>;
    unripe_lt?: InputMaybe<Scalars['String']>;
    unripe_lte?: InputMaybe<Scalars['String']>;
    unripe_not?: InputMaybe<Scalars['String']>;
    unripe_not_contains?: InputMaybe<Scalars['String']>;
    unripe_not_contains_nocase?: InputMaybe<Scalars['String']>;
    unripe_not_ends_with?: InputMaybe<Scalars['String']>;
    unripe_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    unripe_not_in?: InputMaybe<Array<Scalars['String']>>;
    unripe_not_starts_with?: InputMaybe<Scalars['String']>;
    unripe_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    unripe_starts_with?: InputMaybe<Scalars['String']>;
    unripe_starts_with_nocase?: InputMaybe<Scalars['String']>;
};
export declare enum Chop_OrderBy {
    Amount = "amount",
    BlockNumber = "blockNumber",
    Farmer = "farmer",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Timestamp = "timestamp",
    Underlying = "underlying",
    Unripe = "unripe"
}
export declare type DewhitelistToken = SiloEvent & {
    __typename?: 'DewhitelistToken';
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /** dewhitelistToken-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
    /** Token address dewhitelisted */
    token: Scalars['String'];
};
export declare type DewhitelistToken_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    token?: InputMaybe<Scalars['String']>;
    token_contains?: InputMaybe<Scalars['String']>;
    token_contains_nocase?: InputMaybe<Scalars['String']>;
    token_ends_with?: InputMaybe<Scalars['String']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_gt?: InputMaybe<Scalars['String']>;
    token_gte?: InputMaybe<Scalars['String']>;
    token_in?: InputMaybe<Array<Scalars['String']>>;
    token_lt?: InputMaybe<Scalars['String']>;
    token_lte?: InputMaybe<Scalars['String']>;
    token_not?: InputMaybe<Scalars['String']>;
    token_not_contains?: InputMaybe<Scalars['String']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token_not_ends_with?: InputMaybe<Scalars['String']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_in?: InputMaybe<Array<Scalars['String']>>;
    token_not_starts_with?: InputMaybe<Scalars['String']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_starts_with?: InputMaybe<Scalars['String']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};
export declare enum DewhitelistToken_OrderBy {
    BlockNumber = "blockNumber",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Timestamp = "timestamp",
    Token = "token"
}
/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export declare type Event = {
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /**  { Event type }-{ Transaction hash }-{ Log index }  */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
};
export declare type Event_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum Event_OrderBy {
    BlockNumber = "blockNumber",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Timestamp = "timestamp"
}
export declare type Farmer = {
    __typename?: 'Farmer';
    deposits: Array<SiloDeposit>;
    fertilizers: Array<FertilizerBalance>;
    field?: Maybe<Field>;
    id: Scalars['ID'];
    listings: Array<PodListing>;
    orders: Array<PodOrder>;
    plots: Array<Plot>;
    silo?: Maybe<Silo>;
    sown: Scalars['Boolean'];
    withdraws: Array<SiloWithdraw>;
};
export declare type FarmerDepositsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloDeposit_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<SiloDeposit_Filter>;
};
export declare type FarmerFertilizersArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FertilizerBalance_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<FertilizerBalance_Filter>;
};
export declare type FarmerListingsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodListing_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<PodListing_Filter>;
};
export declare type FarmerOrdersArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodOrder_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<PodOrder_Filter>;
};
export declare type FarmerPlotsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Plot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<Plot_Filter>;
};
export declare type FarmerWithdrawsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloWithdraw_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<SiloWithdraw_Filter>;
};
export declare type Farmer_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    deposits_?: InputMaybe<SiloDeposit_Filter>;
    fertilizers_?: InputMaybe<FertilizerBalance_Filter>;
    field_?: InputMaybe<Field_Filter>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    listings_?: InputMaybe<PodListing_Filter>;
    orders_?: InputMaybe<PodOrder_Filter>;
    plots_?: InputMaybe<Plot_Filter>;
    silo_?: InputMaybe<Silo_Filter>;
    sown?: InputMaybe<Scalars['Boolean']>;
    sown_in?: InputMaybe<Array<Scalars['Boolean']>>;
    sown_not?: InputMaybe<Scalars['Boolean']>;
    sown_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    withdraws_?: InputMaybe<SiloWithdraw_Filter>;
};
export declare enum Farmer_OrderBy {
    Deposits = "deposits",
    Fertilizers = "fertilizers",
    Field = "field",
    Id = "id",
    Listings = "listings",
    Orders = "orders",
    Plots = "plots",
    Silo = "silo",
    Sown = "sown",
    Withdraws = "withdraws"
}
export declare type Fertilizer = {
    __typename?: 'Fertilizer';
    id: Scalars['ID'];
    tokens: Array<FertilizerToken>;
    totalSupply: Scalars['BigInt'];
};
export declare type FertilizerTokensArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FertilizerToken_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<FertilizerToken_Filter>;
};
export declare type FertilizerBalance = {
    __typename?: 'FertilizerBalance';
    amount: Scalars['BigInt'];
    farmer: Farmer;
    fertilizerToken: FertilizerToken;
    id: Scalars['ID'];
};
export declare type FertilizerBalance_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    farmer?: InputMaybe<Scalars['String']>;
    farmer_?: InputMaybe<Farmer_Filter>;
    farmer_contains?: InputMaybe<Scalars['String']>;
    farmer_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_ends_with?: InputMaybe<Scalars['String']>;
    farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_gt?: InputMaybe<Scalars['String']>;
    farmer_gte?: InputMaybe<Scalars['String']>;
    farmer_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_lt?: InputMaybe<Scalars['String']>;
    farmer_lte?: InputMaybe<Scalars['String']>;
    farmer_not?: InputMaybe<Scalars['String']>;
    farmer_not_contains?: InputMaybe<Scalars['String']>;
    farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_not_starts_with?: InputMaybe<Scalars['String']>;
    farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_starts_with?: InputMaybe<Scalars['String']>;
    farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
    fertilizerToken?: InputMaybe<Scalars['String']>;
    fertilizerToken_?: InputMaybe<FertilizerToken_Filter>;
    fertilizerToken_contains?: InputMaybe<Scalars['String']>;
    fertilizerToken_contains_nocase?: InputMaybe<Scalars['String']>;
    fertilizerToken_ends_with?: InputMaybe<Scalars['String']>;
    fertilizerToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
    fertilizerToken_gt?: InputMaybe<Scalars['String']>;
    fertilizerToken_gte?: InputMaybe<Scalars['String']>;
    fertilizerToken_in?: InputMaybe<Array<Scalars['String']>>;
    fertilizerToken_lt?: InputMaybe<Scalars['String']>;
    fertilizerToken_lte?: InputMaybe<Scalars['String']>;
    fertilizerToken_not?: InputMaybe<Scalars['String']>;
    fertilizerToken_not_contains?: InputMaybe<Scalars['String']>;
    fertilizerToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
    fertilizerToken_not_ends_with?: InputMaybe<Scalars['String']>;
    fertilizerToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    fertilizerToken_not_in?: InputMaybe<Array<Scalars['String']>>;
    fertilizerToken_not_starts_with?: InputMaybe<Scalars['String']>;
    fertilizerToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    fertilizerToken_starts_with?: InputMaybe<Scalars['String']>;
    fertilizerToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};
export declare enum FertilizerBalance_OrderBy {
    Amount = "amount",
    Farmer = "farmer",
    FertilizerToken = "fertilizerToken",
    Id = "id"
}
export declare type FertilizerToken = {
    __typename?: 'FertilizerToken';
    balances: Array<FertilizerBalance>;
    endBpf: Scalars['BigInt'];
    fertilizer: Fertilizer;
    humidity: Scalars['BigDecimal'];
    id: Scalars['ID'];
    season: Scalars['Int'];
    startBpf: Scalars['BigInt'];
    supply: Scalars['BigInt'];
};
export declare type FertilizerTokenBalancesArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FertilizerBalance_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<FertilizerBalance_Filter>;
};
export declare type FertilizerToken_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    balances_?: InputMaybe<FertilizerBalance_Filter>;
    endBpf?: InputMaybe<Scalars['BigInt']>;
    endBpf_gt?: InputMaybe<Scalars['BigInt']>;
    endBpf_gte?: InputMaybe<Scalars['BigInt']>;
    endBpf_in?: InputMaybe<Array<Scalars['BigInt']>>;
    endBpf_lt?: InputMaybe<Scalars['BigInt']>;
    endBpf_lte?: InputMaybe<Scalars['BigInt']>;
    endBpf_not?: InputMaybe<Scalars['BigInt']>;
    endBpf_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    fertilizer?: InputMaybe<Scalars['String']>;
    fertilizer_?: InputMaybe<Fertilizer_Filter>;
    fertilizer_contains?: InputMaybe<Scalars['String']>;
    fertilizer_contains_nocase?: InputMaybe<Scalars['String']>;
    fertilizer_ends_with?: InputMaybe<Scalars['String']>;
    fertilizer_ends_with_nocase?: InputMaybe<Scalars['String']>;
    fertilizer_gt?: InputMaybe<Scalars['String']>;
    fertilizer_gte?: InputMaybe<Scalars['String']>;
    fertilizer_in?: InputMaybe<Array<Scalars['String']>>;
    fertilizer_lt?: InputMaybe<Scalars['String']>;
    fertilizer_lte?: InputMaybe<Scalars['String']>;
    fertilizer_not?: InputMaybe<Scalars['String']>;
    fertilizer_not_contains?: InputMaybe<Scalars['String']>;
    fertilizer_not_contains_nocase?: InputMaybe<Scalars['String']>;
    fertilizer_not_ends_with?: InputMaybe<Scalars['String']>;
    fertilizer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    fertilizer_not_in?: InputMaybe<Array<Scalars['String']>>;
    fertilizer_not_starts_with?: InputMaybe<Scalars['String']>;
    fertilizer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    fertilizer_starts_with?: InputMaybe<Scalars['String']>;
    fertilizer_starts_with_nocase?: InputMaybe<Scalars['String']>;
    humidity?: InputMaybe<Scalars['BigDecimal']>;
    humidity_gt?: InputMaybe<Scalars['BigDecimal']>;
    humidity_gte?: InputMaybe<Scalars['BigDecimal']>;
    humidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    humidity_lt?: InputMaybe<Scalars['BigDecimal']>;
    humidity_lte?: InputMaybe<Scalars['BigDecimal']>;
    humidity_not?: InputMaybe<Scalars['BigDecimal']>;
    humidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    startBpf?: InputMaybe<Scalars['BigInt']>;
    startBpf_gt?: InputMaybe<Scalars['BigInt']>;
    startBpf_gte?: InputMaybe<Scalars['BigInt']>;
    startBpf_in?: InputMaybe<Array<Scalars['BigInt']>>;
    startBpf_lt?: InputMaybe<Scalars['BigInt']>;
    startBpf_lte?: InputMaybe<Scalars['BigInt']>;
    startBpf_not?: InputMaybe<Scalars['BigInt']>;
    startBpf_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    supply?: InputMaybe<Scalars['BigInt']>;
    supply_gt?: InputMaybe<Scalars['BigInt']>;
    supply_gte?: InputMaybe<Scalars['BigInt']>;
    supply_in?: InputMaybe<Array<Scalars['BigInt']>>;
    supply_lt?: InputMaybe<Scalars['BigInt']>;
    supply_lte?: InputMaybe<Scalars['BigInt']>;
    supply_not?: InputMaybe<Scalars['BigInt']>;
    supply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum FertilizerToken_OrderBy {
    Balances = "balances",
    EndBpf = "endBpf",
    Fertilizer = "fertilizer",
    Humidity = "humidity",
    Id = "id",
    Season = "season",
    StartBpf = "startBpf",
    Supply = "supply"
}
export declare type Fertilizer_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    tokens_?: InputMaybe<FertilizerToken_Filter>;
    totalSupply?: InputMaybe<Scalars['BigInt']>;
    totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
    totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
    totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
    totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
    totalSupply_not?: InputMaybe<Scalars['BigInt']>;
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum Fertilizer_OrderBy {
    Id = "id",
    Tokens = "tokens",
    TotalSupply = "totalSupply"
}
export declare type Field = {
    __typename?: 'Field';
    beanstalk: Beanstalk;
    dailySnapshots: Array<FieldDailySnapshot>;
    farmer?: Maybe<Farmer>;
    hourlySnapshots: Array<FieldHourlySnapshot>;
    /**  Contract address for this field or farmer  */
    id: Scalars['ID'];
    plotIndexes: Array<Scalars['BigInt']>;
    podIndex: Scalars['BigInt'];
    podRate: Scalars['BigDecimal'];
    realRateOfReturn: Scalars['BigDecimal'];
    season: Scalars['Int'];
    totalHarvestablePods: Scalars['BigInt'];
    totalHarvestedPods: Scalars['BigInt'];
    totalNumberOfSowers: Scalars['Int'];
    totalNumberOfSows: Scalars['Int'];
    totalPods: Scalars['BigInt'];
    totalSoil: Scalars['BigInt'];
    totalSownBeans: Scalars['BigInt'];
    weather: Scalars['Int'];
};
export declare type FieldDailySnapshotsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FieldDailySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<FieldDailySnapshot_Filter>;
};
export declare type FieldHourlySnapshotsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FieldHourlySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<FieldHourlySnapshot_Filter>;
};
export declare type FieldDailySnapshot = {
    __typename?: 'FieldDailySnapshot';
    blockNumber: Scalars['BigInt'];
    field: Field;
    id: Scalars['ID'];
    lastUpdated: Scalars['BigInt'];
    newHarvestablePods: Scalars['BigInt'];
    newHarvestedPods: Scalars['BigInt'];
    newPods: Scalars['BigInt'];
    newSoil: Scalars['BigInt'];
    numberOfSowers: Scalars['Int'];
    numberOfSows: Scalars['Int'];
    podIndex: Scalars['BigInt'];
    podRate: Scalars['BigDecimal'];
    realRateOfReturn: Scalars['BigDecimal'];
    season: Scalars['Int'];
    sownBeans: Scalars['BigInt'];
    timestamp: Scalars['BigInt'];
    totalHarvestablePods: Scalars['BigInt'];
    totalHarvestedPods: Scalars['BigInt'];
    totalNumberOfSowers: Scalars['Int'];
    totalNumberOfSows: Scalars['Int'];
    totalPods: Scalars['BigInt'];
    totalSoil: Scalars['BigInt'];
    totalSownBeans: Scalars['BigInt'];
    weather: Scalars['Int'];
};
export declare type FieldDailySnapshot_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    field?: InputMaybe<Scalars['String']>;
    field_?: InputMaybe<Field_Filter>;
    field_contains?: InputMaybe<Scalars['String']>;
    field_contains_nocase?: InputMaybe<Scalars['String']>;
    field_ends_with?: InputMaybe<Scalars['String']>;
    field_ends_with_nocase?: InputMaybe<Scalars['String']>;
    field_gt?: InputMaybe<Scalars['String']>;
    field_gte?: InputMaybe<Scalars['String']>;
    field_in?: InputMaybe<Array<Scalars['String']>>;
    field_lt?: InputMaybe<Scalars['String']>;
    field_lte?: InputMaybe<Scalars['String']>;
    field_not?: InputMaybe<Scalars['String']>;
    field_not_contains?: InputMaybe<Scalars['String']>;
    field_not_contains_nocase?: InputMaybe<Scalars['String']>;
    field_not_ends_with?: InputMaybe<Scalars['String']>;
    field_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    field_not_in?: InputMaybe<Array<Scalars['String']>>;
    field_not_starts_with?: InputMaybe<Scalars['String']>;
    field_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    field_starts_with?: InputMaybe<Scalars['String']>;
    field_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    lastUpdated?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdated_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newHarvestablePods?: InputMaybe<Scalars['BigInt']>;
    newHarvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
    newHarvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
    newHarvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newHarvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
    newHarvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
    newHarvestablePods_not?: InputMaybe<Scalars['BigInt']>;
    newHarvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newHarvestedPods?: InputMaybe<Scalars['BigInt']>;
    newHarvestedPods_gt?: InputMaybe<Scalars['BigInt']>;
    newHarvestedPods_gte?: InputMaybe<Scalars['BigInt']>;
    newHarvestedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newHarvestedPods_lt?: InputMaybe<Scalars['BigInt']>;
    newHarvestedPods_lte?: InputMaybe<Scalars['BigInt']>;
    newHarvestedPods_not?: InputMaybe<Scalars['BigInt']>;
    newHarvestedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPods?: InputMaybe<Scalars['BigInt']>;
    newPods_gt?: InputMaybe<Scalars['BigInt']>;
    newPods_gte?: InputMaybe<Scalars['BigInt']>;
    newPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPods_lt?: InputMaybe<Scalars['BigInt']>;
    newPods_lte?: InputMaybe<Scalars['BigInt']>;
    newPods_not?: InputMaybe<Scalars['BigInt']>;
    newPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newSoil?: InputMaybe<Scalars['BigInt']>;
    newSoil_gt?: InputMaybe<Scalars['BigInt']>;
    newSoil_gte?: InputMaybe<Scalars['BigInt']>;
    newSoil_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newSoil_lt?: InputMaybe<Scalars['BigInt']>;
    newSoil_lte?: InputMaybe<Scalars['BigInt']>;
    newSoil_not?: InputMaybe<Scalars['BigInt']>;
    newSoil_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    numberOfSowers?: InputMaybe<Scalars['Int']>;
    numberOfSowers_gt?: InputMaybe<Scalars['Int']>;
    numberOfSowers_gte?: InputMaybe<Scalars['Int']>;
    numberOfSowers_in?: InputMaybe<Array<Scalars['Int']>>;
    numberOfSowers_lt?: InputMaybe<Scalars['Int']>;
    numberOfSowers_lte?: InputMaybe<Scalars['Int']>;
    numberOfSowers_not?: InputMaybe<Scalars['Int']>;
    numberOfSowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    numberOfSows?: InputMaybe<Scalars['Int']>;
    numberOfSows_gt?: InputMaybe<Scalars['Int']>;
    numberOfSows_gte?: InputMaybe<Scalars['Int']>;
    numberOfSows_in?: InputMaybe<Array<Scalars['Int']>>;
    numberOfSows_lt?: InputMaybe<Scalars['Int']>;
    numberOfSows_lte?: InputMaybe<Scalars['Int']>;
    numberOfSows_not?: InputMaybe<Scalars['Int']>;
    numberOfSows_not_in?: InputMaybe<Array<Scalars['Int']>>;
    podIndex?: InputMaybe<Scalars['BigInt']>;
    podIndex_gt?: InputMaybe<Scalars['BigInt']>;
    podIndex_gte?: InputMaybe<Scalars['BigInt']>;
    podIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    podIndex_lt?: InputMaybe<Scalars['BigInt']>;
    podIndex_lte?: InputMaybe<Scalars['BigInt']>;
    podIndex_not?: InputMaybe<Scalars['BigInt']>;
    podIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    podRate?: InputMaybe<Scalars['BigDecimal']>;
    podRate_gt?: InputMaybe<Scalars['BigDecimal']>;
    podRate_gte?: InputMaybe<Scalars['BigDecimal']>;
    podRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    podRate_lt?: InputMaybe<Scalars['BigDecimal']>;
    podRate_lte?: InputMaybe<Scalars['BigDecimal']>;
    podRate_not?: InputMaybe<Scalars['BigDecimal']>;
    podRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    realRateOfReturn?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    realRateOfReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_not?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    sownBeans?: InputMaybe<Scalars['BigInt']>;
    sownBeans_gt?: InputMaybe<Scalars['BigInt']>;
    sownBeans_gte?: InputMaybe<Scalars['BigInt']>;
    sownBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
    sownBeans_lt?: InputMaybe<Scalars['BigInt']>;
    sownBeans_lte?: InputMaybe<Scalars['BigInt']>;
    sownBeans_not?: InputMaybe<Scalars['BigInt']>;
    sownBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalHarvestablePods?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalHarvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_not?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalHarvestedPods?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_gt?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_gte?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalHarvestedPods_lt?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_lte?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_not?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalNumberOfSowers?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_gt?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_gte?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_in?: InputMaybe<Array<Scalars['Int']>>;
    totalNumberOfSowers_lt?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_lte?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_not?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalNumberOfSows?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_gt?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_gte?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_in?: InputMaybe<Array<Scalars['Int']>>;
    totalNumberOfSows_lt?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_lte?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_not?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalPods?: InputMaybe<Scalars['BigInt']>;
    totalPods_gt?: InputMaybe<Scalars['BigInt']>;
    totalPods_gte?: InputMaybe<Scalars['BigInt']>;
    totalPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPods_lt?: InputMaybe<Scalars['BigInt']>;
    totalPods_lte?: InputMaybe<Scalars['BigInt']>;
    totalPods_not?: InputMaybe<Scalars['BigInt']>;
    totalPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSoil?: InputMaybe<Scalars['BigInt']>;
    totalSoil_gt?: InputMaybe<Scalars['BigInt']>;
    totalSoil_gte?: InputMaybe<Scalars['BigInt']>;
    totalSoil_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSoil_lt?: InputMaybe<Scalars['BigInt']>;
    totalSoil_lte?: InputMaybe<Scalars['BigInt']>;
    totalSoil_not?: InputMaybe<Scalars['BigInt']>;
    totalSoil_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSownBeans?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_gt?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_gte?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSownBeans_lt?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_lte?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_not?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    weather?: InputMaybe<Scalars['Int']>;
    weather_gt?: InputMaybe<Scalars['Int']>;
    weather_gte?: InputMaybe<Scalars['Int']>;
    weather_in?: InputMaybe<Array<Scalars['Int']>>;
    weather_lt?: InputMaybe<Scalars['Int']>;
    weather_lte?: InputMaybe<Scalars['Int']>;
    weather_not?: InputMaybe<Scalars['Int']>;
    weather_not_in?: InputMaybe<Array<Scalars['Int']>>;
};
export declare enum FieldDailySnapshot_OrderBy {
    BlockNumber = "blockNumber",
    Field = "field",
    Id = "id",
    LastUpdated = "lastUpdated",
    NewHarvestablePods = "newHarvestablePods",
    NewHarvestedPods = "newHarvestedPods",
    NewPods = "newPods",
    NewSoil = "newSoil",
    NumberOfSowers = "numberOfSowers",
    NumberOfSows = "numberOfSows",
    PodIndex = "podIndex",
    PodRate = "podRate",
    RealRateOfReturn = "realRateOfReturn",
    Season = "season",
    SownBeans = "sownBeans",
    Timestamp = "timestamp",
    TotalHarvestablePods = "totalHarvestablePods",
    TotalHarvestedPods = "totalHarvestedPods",
    TotalNumberOfSowers = "totalNumberOfSowers",
    TotalNumberOfSows = "totalNumberOfSows",
    TotalPods = "totalPods",
    TotalSoil = "totalSoil",
    TotalSownBeans = "totalSownBeans",
    Weather = "weather"
}
export declare type FieldEvent = {
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /**  { Event type }-{ Transaction hash }-{ Log index }  */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
};
export declare type FieldEvent_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum FieldEvent_OrderBy {
    BlockNumber = "blockNumber",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Timestamp = "timestamp"
}
export declare type FieldHourlySnapshot = {
    __typename?: 'FieldHourlySnapshot';
    blockNumber: Scalars['BigInt'];
    blocksToSoldOutSoil: Scalars['BigInt'];
    field: Field;
    id: Scalars['ID'];
    lastUpdated: Scalars['BigInt'];
    newHarvestablePods: Scalars['BigInt'];
    newHarvestedPods: Scalars['BigInt'];
    newPods: Scalars['BigInt'];
    newSoil: Scalars['BigInt'];
    numberOfSowers: Scalars['Int'];
    numberOfSows: Scalars['Int'];
    podIndex: Scalars['BigInt'];
    podRate: Scalars['BigDecimal'];
    realRateOfReturn: Scalars['BigDecimal'];
    season: Scalars['Int'];
    soilSoldOut: Scalars['Boolean'];
    sownBeans: Scalars['BigInt'];
    timestamp: Scalars['BigInt'];
    totalHarvestablePods: Scalars['BigInt'];
    totalHarvestedPods: Scalars['BigInt'];
    totalNumberOfSowers: Scalars['Int'];
    totalNumberOfSows: Scalars['Int'];
    totalPods: Scalars['BigInt'];
    totalSoil: Scalars['BigInt'];
    totalSownBeans: Scalars['BigInt'];
    weather: Scalars['Int'];
};
export declare type FieldHourlySnapshot_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blocksToSoldOutSoil?: InputMaybe<Scalars['BigInt']>;
    blocksToSoldOutSoil_gt?: InputMaybe<Scalars['BigInt']>;
    blocksToSoldOutSoil_gte?: InputMaybe<Scalars['BigInt']>;
    blocksToSoldOutSoil_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blocksToSoldOutSoil_lt?: InputMaybe<Scalars['BigInt']>;
    blocksToSoldOutSoil_lte?: InputMaybe<Scalars['BigInt']>;
    blocksToSoldOutSoil_not?: InputMaybe<Scalars['BigInt']>;
    blocksToSoldOutSoil_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    field?: InputMaybe<Scalars['String']>;
    field_?: InputMaybe<Field_Filter>;
    field_contains?: InputMaybe<Scalars['String']>;
    field_contains_nocase?: InputMaybe<Scalars['String']>;
    field_ends_with?: InputMaybe<Scalars['String']>;
    field_ends_with_nocase?: InputMaybe<Scalars['String']>;
    field_gt?: InputMaybe<Scalars['String']>;
    field_gte?: InputMaybe<Scalars['String']>;
    field_in?: InputMaybe<Array<Scalars['String']>>;
    field_lt?: InputMaybe<Scalars['String']>;
    field_lte?: InputMaybe<Scalars['String']>;
    field_not?: InputMaybe<Scalars['String']>;
    field_not_contains?: InputMaybe<Scalars['String']>;
    field_not_contains_nocase?: InputMaybe<Scalars['String']>;
    field_not_ends_with?: InputMaybe<Scalars['String']>;
    field_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    field_not_in?: InputMaybe<Array<Scalars['String']>>;
    field_not_starts_with?: InputMaybe<Scalars['String']>;
    field_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    field_starts_with?: InputMaybe<Scalars['String']>;
    field_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    lastUpdated?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdated_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newHarvestablePods?: InputMaybe<Scalars['BigInt']>;
    newHarvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
    newHarvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
    newHarvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newHarvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
    newHarvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
    newHarvestablePods_not?: InputMaybe<Scalars['BigInt']>;
    newHarvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newHarvestedPods?: InputMaybe<Scalars['BigInt']>;
    newHarvestedPods_gt?: InputMaybe<Scalars['BigInt']>;
    newHarvestedPods_gte?: InputMaybe<Scalars['BigInt']>;
    newHarvestedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newHarvestedPods_lt?: InputMaybe<Scalars['BigInt']>;
    newHarvestedPods_lte?: InputMaybe<Scalars['BigInt']>;
    newHarvestedPods_not?: InputMaybe<Scalars['BigInt']>;
    newHarvestedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPods?: InputMaybe<Scalars['BigInt']>;
    newPods_gt?: InputMaybe<Scalars['BigInt']>;
    newPods_gte?: InputMaybe<Scalars['BigInt']>;
    newPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPods_lt?: InputMaybe<Scalars['BigInt']>;
    newPods_lte?: InputMaybe<Scalars['BigInt']>;
    newPods_not?: InputMaybe<Scalars['BigInt']>;
    newPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newSoil?: InputMaybe<Scalars['BigInt']>;
    newSoil_gt?: InputMaybe<Scalars['BigInt']>;
    newSoil_gte?: InputMaybe<Scalars['BigInt']>;
    newSoil_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newSoil_lt?: InputMaybe<Scalars['BigInt']>;
    newSoil_lte?: InputMaybe<Scalars['BigInt']>;
    newSoil_not?: InputMaybe<Scalars['BigInt']>;
    newSoil_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    numberOfSowers?: InputMaybe<Scalars['Int']>;
    numberOfSowers_gt?: InputMaybe<Scalars['Int']>;
    numberOfSowers_gte?: InputMaybe<Scalars['Int']>;
    numberOfSowers_in?: InputMaybe<Array<Scalars['Int']>>;
    numberOfSowers_lt?: InputMaybe<Scalars['Int']>;
    numberOfSowers_lte?: InputMaybe<Scalars['Int']>;
    numberOfSowers_not?: InputMaybe<Scalars['Int']>;
    numberOfSowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    numberOfSows?: InputMaybe<Scalars['Int']>;
    numberOfSows_gt?: InputMaybe<Scalars['Int']>;
    numberOfSows_gte?: InputMaybe<Scalars['Int']>;
    numberOfSows_in?: InputMaybe<Array<Scalars['Int']>>;
    numberOfSows_lt?: InputMaybe<Scalars['Int']>;
    numberOfSows_lte?: InputMaybe<Scalars['Int']>;
    numberOfSows_not?: InputMaybe<Scalars['Int']>;
    numberOfSows_not_in?: InputMaybe<Array<Scalars['Int']>>;
    podIndex?: InputMaybe<Scalars['BigInt']>;
    podIndex_gt?: InputMaybe<Scalars['BigInt']>;
    podIndex_gte?: InputMaybe<Scalars['BigInt']>;
    podIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    podIndex_lt?: InputMaybe<Scalars['BigInt']>;
    podIndex_lte?: InputMaybe<Scalars['BigInt']>;
    podIndex_not?: InputMaybe<Scalars['BigInt']>;
    podIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    podRate?: InputMaybe<Scalars['BigDecimal']>;
    podRate_gt?: InputMaybe<Scalars['BigDecimal']>;
    podRate_gte?: InputMaybe<Scalars['BigDecimal']>;
    podRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    podRate_lt?: InputMaybe<Scalars['BigDecimal']>;
    podRate_lte?: InputMaybe<Scalars['BigDecimal']>;
    podRate_not?: InputMaybe<Scalars['BigDecimal']>;
    podRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    realRateOfReturn?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    realRateOfReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_not?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    soilSoldOut?: InputMaybe<Scalars['Boolean']>;
    soilSoldOut_in?: InputMaybe<Array<Scalars['Boolean']>>;
    soilSoldOut_not?: InputMaybe<Scalars['Boolean']>;
    soilSoldOut_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    sownBeans?: InputMaybe<Scalars['BigInt']>;
    sownBeans_gt?: InputMaybe<Scalars['BigInt']>;
    sownBeans_gte?: InputMaybe<Scalars['BigInt']>;
    sownBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
    sownBeans_lt?: InputMaybe<Scalars['BigInt']>;
    sownBeans_lte?: InputMaybe<Scalars['BigInt']>;
    sownBeans_not?: InputMaybe<Scalars['BigInt']>;
    sownBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalHarvestablePods?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalHarvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_not?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalHarvestedPods?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_gt?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_gte?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalHarvestedPods_lt?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_lte?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_not?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalNumberOfSowers?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_gt?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_gte?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_in?: InputMaybe<Array<Scalars['Int']>>;
    totalNumberOfSowers_lt?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_lte?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_not?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalNumberOfSows?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_gt?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_gte?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_in?: InputMaybe<Array<Scalars['Int']>>;
    totalNumberOfSows_lt?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_lte?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_not?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalPods?: InputMaybe<Scalars['BigInt']>;
    totalPods_gt?: InputMaybe<Scalars['BigInt']>;
    totalPods_gte?: InputMaybe<Scalars['BigInt']>;
    totalPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPods_lt?: InputMaybe<Scalars['BigInt']>;
    totalPods_lte?: InputMaybe<Scalars['BigInt']>;
    totalPods_not?: InputMaybe<Scalars['BigInt']>;
    totalPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSoil?: InputMaybe<Scalars['BigInt']>;
    totalSoil_gt?: InputMaybe<Scalars['BigInt']>;
    totalSoil_gte?: InputMaybe<Scalars['BigInt']>;
    totalSoil_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSoil_lt?: InputMaybe<Scalars['BigInt']>;
    totalSoil_lte?: InputMaybe<Scalars['BigInt']>;
    totalSoil_not?: InputMaybe<Scalars['BigInt']>;
    totalSoil_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSownBeans?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_gt?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_gte?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSownBeans_lt?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_lte?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_not?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    weather?: InputMaybe<Scalars['Int']>;
    weather_gt?: InputMaybe<Scalars['Int']>;
    weather_gte?: InputMaybe<Scalars['Int']>;
    weather_in?: InputMaybe<Array<Scalars['Int']>>;
    weather_lt?: InputMaybe<Scalars['Int']>;
    weather_lte?: InputMaybe<Scalars['Int']>;
    weather_not?: InputMaybe<Scalars['Int']>;
    weather_not_in?: InputMaybe<Array<Scalars['Int']>>;
};
export declare enum FieldHourlySnapshot_OrderBy {
    BlockNumber = "blockNumber",
    BlocksToSoldOutSoil = "blocksToSoldOutSoil",
    Field = "field",
    Id = "id",
    LastUpdated = "lastUpdated",
    NewHarvestablePods = "newHarvestablePods",
    NewHarvestedPods = "newHarvestedPods",
    NewPods = "newPods",
    NewSoil = "newSoil",
    NumberOfSowers = "numberOfSowers",
    NumberOfSows = "numberOfSows",
    PodIndex = "podIndex",
    PodRate = "podRate",
    RealRateOfReturn = "realRateOfReturn",
    Season = "season",
    SoilSoldOut = "soilSoldOut",
    SownBeans = "sownBeans",
    Timestamp = "timestamp",
    TotalHarvestablePods = "totalHarvestablePods",
    TotalHarvestedPods = "totalHarvestedPods",
    TotalNumberOfSowers = "totalNumberOfSowers",
    TotalNumberOfSows = "totalNumberOfSows",
    TotalPods = "totalPods",
    TotalSoil = "totalSoil",
    TotalSownBeans = "totalSownBeans",
    Weather = "weather"
}
export declare type Field_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    beanstalk?: InputMaybe<Scalars['String']>;
    beanstalk_?: InputMaybe<Beanstalk_Filter>;
    beanstalk_contains?: InputMaybe<Scalars['String']>;
    beanstalk_contains_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_ends_with?: InputMaybe<Scalars['String']>;
    beanstalk_ends_with_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_gt?: InputMaybe<Scalars['String']>;
    beanstalk_gte?: InputMaybe<Scalars['String']>;
    beanstalk_in?: InputMaybe<Array<Scalars['String']>>;
    beanstalk_lt?: InputMaybe<Scalars['String']>;
    beanstalk_lte?: InputMaybe<Scalars['String']>;
    beanstalk_not?: InputMaybe<Scalars['String']>;
    beanstalk_not_contains?: InputMaybe<Scalars['String']>;
    beanstalk_not_contains_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_not_ends_with?: InputMaybe<Scalars['String']>;
    beanstalk_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_not_in?: InputMaybe<Array<Scalars['String']>>;
    beanstalk_not_starts_with?: InputMaybe<Scalars['String']>;
    beanstalk_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_starts_with?: InputMaybe<Scalars['String']>;
    beanstalk_starts_with_nocase?: InputMaybe<Scalars['String']>;
    dailySnapshots_?: InputMaybe<FieldDailySnapshot_Filter>;
    farmer?: InputMaybe<Scalars['String']>;
    farmer_?: InputMaybe<Farmer_Filter>;
    farmer_contains?: InputMaybe<Scalars['String']>;
    farmer_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_ends_with?: InputMaybe<Scalars['String']>;
    farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_gt?: InputMaybe<Scalars['String']>;
    farmer_gte?: InputMaybe<Scalars['String']>;
    farmer_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_lt?: InputMaybe<Scalars['String']>;
    farmer_lte?: InputMaybe<Scalars['String']>;
    farmer_not?: InputMaybe<Scalars['String']>;
    farmer_not_contains?: InputMaybe<Scalars['String']>;
    farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_not_starts_with?: InputMaybe<Scalars['String']>;
    farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_starts_with?: InputMaybe<Scalars['String']>;
    farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hourlySnapshots_?: InputMaybe<FieldHourlySnapshot_Filter>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    plotIndexes?: InputMaybe<Array<Scalars['BigInt']>>;
    plotIndexes_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    plotIndexes_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    plotIndexes_not?: InputMaybe<Array<Scalars['BigInt']>>;
    plotIndexes_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    plotIndexes_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    podIndex?: InputMaybe<Scalars['BigInt']>;
    podIndex_gt?: InputMaybe<Scalars['BigInt']>;
    podIndex_gte?: InputMaybe<Scalars['BigInt']>;
    podIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    podIndex_lt?: InputMaybe<Scalars['BigInt']>;
    podIndex_lte?: InputMaybe<Scalars['BigInt']>;
    podIndex_not?: InputMaybe<Scalars['BigInt']>;
    podIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    podRate?: InputMaybe<Scalars['BigDecimal']>;
    podRate_gt?: InputMaybe<Scalars['BigDecimal']>;
    podRate_gte?: InputMaybe<Scalars['BigDecimal']>;
    podRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    podRate_lt?: InputMaybe<Scalars['BigDecimal']>;
    podRate_lte?: InputMaybe<Scalars['BigDecimal']>;
    podRate_not?: InputMaybe<Scalars['BigDecimal']>;
    podRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    realRateOfReturn?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    realRateOfReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_not?: InputMaybe<Scalars['BigDecimal']>;
    realRateOfReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalHarvestablePods?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalHarvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_not?: InputMaybe<Scalars['BigInt']>;
    totalHarvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalHarvestedPods?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_gt?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_gte?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalHarvestedPods_lt?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_lte?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_not?: InputMaybe<Scalars['BigInt']>;
    totalHarvestedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalNumberOfSowers?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_gt?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_gte?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_in?: InputMaybe<Array<Scalars['Int']>>;
    totalNumberOfSowers_lt?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_lte?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_not?: InputMaybe<Scalars['Int']>;
    totalNumberOfSowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalNumberOfSows?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_gt?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_gte?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_in?: InputMaybe<Array<Scalars['Int']>>;
    totalNumberOfSows_lt?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_lte?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_not?: InputMaybe<Scalars['Int']>;
    totalNumberOfSows_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalPods?: InputMaybe<Scalars['BigInt']>;
    totalPods_gt?: InputMaybe<Scalars['BigInt']>;
    totalPods_gte?: InputMaybe<Scalars['BigInt']>;
    totalPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPods_lt?: InputMaybe<Scalars['BigInt']>;
    totalPods_lte?: InputMaybe<Scalars['BigInt']>;
    totalPods_not?: InputMaybe<Scalars['BigInt']>;
    totalPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSoil?: InputMaybe<Scalars['BigInt']>;
    totalSoil_gt?: InputMaybe<Scalars['BigInt']>;
    totalSoil_gte?: InputMaybe<Scalars['BigInt']>;
    totalSoil_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSoil_lt?: InputMaybe<Scalars['BigInt']>;
    totalSoil_lte?: InputMaybe<Scalars['BigInt']>;
    totalSoil_not?: InputMaybe<Scalars['BigInt']>;
    totalSoil_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSownBeans?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_gt?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_gte?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSownBeans_lt?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_lte?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_not?: InputMaybe<Scalars['BigInt']>;
    totalSownBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    weather?: InputMaybe<Scalars['Int']>;
    weather_gt?: InputMaybe<Scalars['Int']>;
    weather_gte?: InputMaybe<Scalars['Int']>;
    weather_in?: InputMaybe<Array<Scalars['Int']>>;
    weather_lt?: InputMaybe<Scalars['Int']>;
    weather_lte?: InputMaybe<Scalars['Int']>;
    weather_not?: InputMaybe<Scalars['Int']>;
    weather_not_in?: InputMaybe<Array<Scalars['Int']>>;
};
export declare enum Field_OrderBy {
    Beanstalk = "beanstalk",
    DailySnapshots = "dailySnapshots",
    Farmer = "farmer",
    HourlySnapshots = "hourlySnapshots",
    Id = "id",
    PlotIndexes = "plotIndexes",
    PodIndex = "podIndex",
    PodRate = "podRate",
    RealRateOfReturn = "realRateOfReturn",
    Season = "season",
    TotalHarvestablePods = "totalHarvestablePods",
    TotalHarvestedPods = "totalHarvestedPods",
    TotalNumberOfSowers = "totalNumberOfSowers",
    TotalNumberOfSows = "totalNumberOfSows",
    TotalPods = "totalPods",
    TotalSoil = "totalSoil",
    TotalSownBeans = "totalSownBeans",
    Weather = "weather"
}
export declare type Harvest = FieldEvent & {
    __typename?: 'Harvest';
    /**  Total beans harvested  */
    beans: Scalars['BigInt'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Address harvesting beans  */
    farmer: Scalars['String'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /** harvest-{ Transaction hash }-{ Log index }  */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  Plots being harvested  */
    plots: Array<Scalars['BigInt']>;
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
};
export declare type Harvest_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    beans?: InputMaybe<Scalars['BigInt']>;
    beans_gt?: InputMaybe<Scalars['BigInt']>;
    beans_gte?: InputMaybe<Scalars['BigInt']>;
    beans_in?: InputMaybe<Array<Scalars['BigInt']>>;
    beans_lt?: InputMaybe<Scalars['BigInt']>;
    beans_lte?: InputMaybe<Scalars['BigInt']>;
    beans_not?: InputMaybe<Scalars['BigInt']>;
    beans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    farmer?: InputMaybe<Scalars['String']>;
    farmer_contains?: InputMaybe<Scalars['String']>;
    farmer_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_ends_with?: InputMaybe<Scalars['String']>;
    farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_gt?: InputMaybe<Scalars['String']>;
    farmer_gte?: InputMaybe<Scalars['String']>;
    farmer_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_lt?: InputMaybe<Scalars['String']>;
    farmer_lte?: InputMaybe<Scalars['String']>;
    farmer_not?: InputMaybe<Scalars['String']>;
    farmer_not_contains?: InputMaybe<Scalars['String']>;
    farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_not_starts_with?: InputMaybe<Scalars['String']>;
    farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_starts_with?: InputMaybe<Scalars['String']>;
    farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    plots?: InputMaybe<Array<Scalars['BigInt']>>;
    plots_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    plots_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    plots_not?: InputMaybe<Array<Scalars['BigInt']>>;
    plots_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    plots_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum Harvest_OrderBy {
    Beans = "beans",
    BlockNumber = "blockNumber",
    Farmer = "farmer",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Plots = "plots",
    Protocol = "protocol",
    Timestamp = "timestamp"
}
export declare type Incentive = SiloEvent & {
    __typename?: 'Incentive';
    /**  Amount minted as incentive */
    amount: Scalars['BigInt'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Address incentivized  */
    caller: Scalars['String'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /** incentive-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
};
export declare type Incentive_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    caller?: InputMaybe<Scalars['String']>;
    caller_contains?: InputMaybe<Scalars['String']>;
    caller_contains_nocase?: InputMaybe<Scalars['String']>;
    caller_ends_with?: InputMaybe<Scalars['String']>;
    caller_ends_with_nocase?: InputMaybe<Scalars['String']>;
    caller_gt?: InputMaybe<Scalars['String']>;
    caller_gte?: InputMaybe<Scalars['String']>;
    caller_in?: InputMaybe<Array<Scalars['String']>>;
    caller_lt?: InputMaybe<Scalars['String']>;
    caller_lte?: InputMaybe<Scalars['String']>;
    caller_not?: InputMaybe<Scalars['String']>;
    caller_not_contains?: InputMaybe<Scalars['String']>;
    caller_not_contains_nocase?: InputMaybe<Scalars['String']>;
    caller_not_ends_with?: InputMaybe<Scalars['String']>;
    caller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    caller_not_in?: InputMaybe<Array<Scalars['String']>>;
    caller_not_starts_with?: InputMaybe<Scalars['String']>;
    caller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    caller_starts_with?: InputMaybe<Scalars['String']>;
    caller_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum Incentive_OrderBy {
    Amount = "amount",
    BlockNumber = "blockNumber",
    Caller = "caller",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Timestamp = "timestamp"
}
export declare enum MarketStatus {
    Active = "ACTIVE",
    Cancelled = "CANCELLED",
    CancelledPartial = "CANCELLED_PARTIAL",
    Expired = "EXPIRED",
    Filled = "FILLED",
    FilledPartial = "FILLED_PARTIAL"
}
export declare type MarketplaceEvent = {
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /**  { Event type }-{ Transaction hash }-{ Log index }  */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
};
export declare type MarketplaceEvent_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum MarketplaceEvent_OrderBy {
    BlockNumber = "blockNumber",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Timestamp = "timestamp"
}
export declare type MetapoolOracle = SiloEvent & {
    __typename?: 'MetapoolOracle';
    /**  Cumulative balance A */
    balanceA: Scalars['BigInt'];
    /**  Cumulative balance B */
    balanceB: Scalars['BigInt'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  DeltaB for season */
    deltaB: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /** metapoolOracle-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Season of oracle  */
    season: Scalars['Int'];
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
};
export declare type MetapoolOracle_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    balanceA?: InputMaybe<Scalars['BigInt']>;
    balanceA_gt?: InputMaybe<Scalars['BigInt']>;
    balanceA_gte?: InputMaybe<Scalars['BigInt']>;
    balanceA_in?: InputMaybe<Array<Scalars['BigInt']>>;
    balanceA_lt?: InputMaybe<Scalars['BigInt']>;
    balanceA_lte?: InputMaybe<Scalars['BigInt']>;
    balanceA_not?: InputMaybe<Scalars['BigInt']>;
    balanceA_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    balanceB?: InputMaybe<Scalars['BigInt']>;
    balanceB_gt?: InputMaybe<Scalars['BigInt']>;
    balanceB_gte?: InputMaybe<Scalars['BigInt']>;
    balanceB_in?: InputMaybe<Array<Scalars['BigInt']>>;
    balanceB_lt?: InputMaybe<Scalars['BigInt']>;
    balanceB_lte?: InputMaybe<Scalars['BigInt']>;
    balanceB_not?: InputMaybe<Scalars['BigInt']>;
    balanceB_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    deltaB?: InputMaybe<Scalars['BigInt']>;
    deltaB_gt?: InputMaybe<Scalars['BigInt']>;
    deltaB_gte?: InputMaybe<Scalars['BigInt']>;
    deltaB_in?: InputMaybe<Array<Scalars['BigInt']>>;
    deltaB_lt?: InputMaybe<Scalars['BigInt']>;
    deltaB_lte?: InputMaybe<Scalars['BigInt']>;
    deltaB_not?: InputMaybe<Scalars['BigInt']>;
    deltaB_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum MetapoolOracle_OrderBy {
    BalanceA = "balanceA",
    BalanceB = "balanceB",
    BlockNumber = "blockNumber",
    DeltaB = "deltaB",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Season = "season",
    Timestamp = "timestamp"
}
export declare enum Network {
    ArbitrumOne = "ARBITRUM_ONE",
    ArweaveMainnet = "ARWEAVE_MAINNET",
    Aurora = "AURORA",
    Avalanche = "AVALANCHE",
    Boba = "BOBA",
    Bsc = "BSC",
    Celo = "CELO",
    Cosmos = "COSMOS",
    Cronos = "CRONOS",
    Fantom = "FANTOM",
    Fuse = "FUSE",
    Harmony = "HARMONY",
    Juno = "JUNO",
    Mainnet = "MAINNET",
    Matic = "MATIC",
    Moonbeam = "MOONBEAM",
    Moonriver = "MOONRIVER",
    NearMainnet = "NEAR_MAINNET",
    Optimism = "OPTIMISM",
    Osmosis = "OSMOSIS",
    Xdai = "XDAI"
}
/** Defines the order direction, either ascending or descending */
export declare enum OrderDirection {
    Asc = "asc",
    Desc = "desc"
}
export declare type Plot = {
    __typename?: 'Plot';
    beans: Scalars['BigInt'];
    createdAt: Scalars['BigInt'];
    creationHash: Scalars['String'];
    farmer: Farmer;
    field: Field;
    fullyHarvested: Scalars['Boolean'];
    harvestablePods: Scalars['BigInt'];
    harvestedPods: Scalars['BigInt'];
    id: Scalars['ID'];
    index: Scalars['BigInt'];
    listing?: Maybe<PodListing>;
    pods: Scalars['BigInt'];
    season: Scalars['Int'];
    /**  Event that created the plot  */
    source: Scalars['String'];
    sownPods: Scalars['BigInt'];
    updatedAt: Scalars['BigInt'];
    weather: Scalars['Int'];
};
export declare type Plot_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    beans?: InputMaybe<Scalars['BigInt']>;
    beans_gt?: InputMaybe<Scalars['BigInt']>;
    beans_gte?: InputMaybe<Scalars['BigInt']>;
    beans_in?: InputMaybe<Array<Scalars['BigInt']>>;
    beans_lt?: InputMaybe<Scalars['BigInt']>;
    beans_lte?: InputMaybe<Scalars['BigInt']>;
    beans_not?: InputMaybe<Scalars['BigInt']>;
    beans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gte?: InputMaybe<Scalars['BigInt']>;
    createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt_lt?: InputMaybe<Scalars['BigInt']>;
    createdAt_lte?: InputMaybe<Scalars['BigInt']>;
    createdAt_not?: InputMaybe<Scalars['BigInt']>;
    createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    creationHash?: InputMaybe<Scalars['String']>;
    creationHash_contains?: InputMaybe<Scalars['String']>;
    creationHash_contains_nocase?: InputMaybe<Scalars['String']>;
    creationHash_ends_with?: InputMaybe<Scalars['String']>;
    creationHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    creationHash_gt?: InputMaybe<Scalars['String']>;
    creationHash_gte?: InputMaybe<Scalars['String']>;
    creationHash_in?: InputMaybe<Array<Scalars['String']>>;
    creationHash_lt?: InputMaybe<Scalars['String']>;
    creationHash_lte?: InputMaybe<Scalars['String']>;
    creationHash_not?: InputMaybe<Scalars['String']>;
    creationHash_not_contains?: InputMaybe<Scalars['String']>;
    creationHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    creationHash_not_ends_with?: InputMaybe<Scalars['String']>;
    creationHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    creationHash_not_in?: InputMaybe<Array<Scalars['String']>>;
    creationHash_not_starts_with?: InputMaybe<Scalars['String']>;
    creationHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    creationHash_starts_with?: InputMaybe<Scalars['String']>;
    creationHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    farmer?: InputMaybe<Scalars['String']>;
    farmer_?: InputMaybe<Farmer_Filter>;
    farmer_contains?: InputMaybe<Scalars['String']>;
    farmer_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_ends_with?: InputMaybe<Scalars['String']>;
    farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_gt?: InputMaybe<Scalars['String']>;
    farmer_gte?: InputMaybe<Scalars['String']>;
    farmer_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_lt?: InputMaybe<Scalars['String']>;
    farmer_lte?: InputMaybe<Scalars['String']>;
    farmer_not?: InputMaybe<Scalars['String']>;
    farmer_not_contains?: InputMaybe<Scalars['String']>;
    farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_not_starts_with?: InputMaybe<Scalars['String']>;
    farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_starts_with?: InputMaybe<Scalars['String']>;
    farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
    field?: InputMaybe<Scalars['String']>;
    field_?: InputMaybe<Field_Filter>;
    field_contains?: InputMaybe<Scalars['String']>;
    field_contains_nocase?: InputMaybe<Scalars['String']>;
    field_ends_with?: InputMaybe<Scalars['String']>;
    field_ends_with_nocase?: InputMaybe<Scalars['String']>;
    field_gt?: InputMaybe<Scalars['String']>;
    field_gte?: InputMaybe<Scalars['String']>;
    field_in?: InputMaybe<Array<Scalars['String']>>;
    field_lt?: InputMaybe<Scalars['String']>;
    field_lte?: InputMaybe<Scalars['String']>;
    field_not?: InputMaybe<Scalars['String']>;
    field_not_contains?: InputMaybe<Scalars['String']>;
    field_not_contains_nocase?: InputMaybe<Scalars['String']>;
    field_not_ends_with?: InputMaybe<Scalars['String']>;
    field_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    field_not_in?: InputMaybe<Array<Scalars['String']>>;
    field_not_starts_with?: InputMaybe<Scalars['String']>;
    field_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    field_starts_with?: InputMaybe<Scalars['String']>;
    field_starts_with_nocase?: InputMaybe<Scalars['String']>;
    fullyHarvested?: InputMaybe<Scalars['Boolean']>;
    fullyHarvested_in?: InputMaybe<Array<Scalars['Boolean']>>;
    fullyHarvested_not?: InputMaybe<Scalars['Boolean']>;
    fullyHarvested_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    harvestablePods?: InputMaybe<Scalars['BigInt']>;
    harvestablePods_gt?: InputMaybe<Scalars['BigInt']>;
    harvestablePods_gte?: InputMaybe<Scalars['BigInt']>;
    harvestablePods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    harvestablePods_lt?: InputMaybe<Scalars['BigInt']>;
    harvestablePods_lte?: InputMaybe<Scalars['BigInt']>;
    harvestablePods_not?: InputMaybe<Scalars['BigInt']>;
    harvestablePods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    harvestedPods?: InputMaybe<Scalars['BigInt']>;
    harvestedPods_gt?: InputMaybe<Scalars['BigInt']>;
    harvestedPods_gte?: InputMaybe<Scalars['BigInt']>;
    harvestedPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    harvestedPods_lt?: InputMaybe<Scalars['BigInt']>;
    harvestedPods_lte?: InputMaybe<Scalars['BigInt']>;
    harvestedPods_not?: InputMaybe<Scalars['BigInt']>;
    harvestedPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    index?: InputMaybe<Scalars['BigInt']>;
    index_gt?: InputMaybe<Scalars['BigInt']>;
    index_gte?: InputMaybe<Scalars['BigInt']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']>>;
    index_lt?: InputMaybe<Scalars['BigInt']>;
    index_lte?: InputMaybe<Scalars['BigInt']>;
    index_not?: InputMaybe<Scalars['BigInt']>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    listing?: InputMaybe<Scalars['String']>;
    listing_?: InputMaybe<PodListing_Filter>;
    listing_contains?: InputMaybe<Scalars['String']>;
    listing_contains_nocase?: InputMaybe<Scalars['String']>;
    listing_ends_with?: InputMaybe<Scalars['String']>;
    listing_ends_with_nocase?: InputMaybe<Scalars['String']>;
    listing_gt?: InputMaybe<Scalars['String']>;
    listing_gte?: InputMaybe<Scalars['String']>;
    listing_in?: InputMaybe<Array<Scalars['String']>>;
    listing_lt?: InputMaybe<Scalars['String']>;
    listing_lte?: InputMaybe<Scalars['String']>;
    listing_not?: InputMaybe<Scalars['String']>;
    listing_not_contains?: InputMaybe<Scalars['String']>;
    listing_not_contains_nocase?: InputMaybe<Scalars['String']>;
    listing_not_ends_with?: InputMaybe<Scalars['String']>;
    listing_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    listing_not_in?: InputMaybe<Array<Scalars['String']>>;
    listing_not_starts_with?: InputMaybe<Scalars['String']>;
    listing_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    listing_starts_with?: InputMaybe<Scalars['String']>;
    listing_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pods?: InputMaybe<Scalars['BigInt']>;
    pods_gt?: InputMaybe<Scalars['BigInt']>;
    pods_gte?: InputMaybe<Scalars['BigInt']>;
    pods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    pods_lt?: InputMaybe<Scalars['BigInt']>;
    pods_lte?: InputMaybe<Scalars['BigInt']>;
    pods_not?: InputMaybe<Scalars['BigInt']>;
    pods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    source?: InputMaybe<Scalars['String']>;
    source_contains?: InputMaybe<Scalars['String']>;
    source_contains_nocase?: InputMaybe<Scalars['String']>;
    source_ends_with?: InputMaybe<Scalars['String']>;
    source_ends_with_nocase?: InputMaybe<Scalars['String']>;
    source_gt?: InputMaybe<Scalars['String']>;
    source_gte?: InputMaybe<Scalars['String']>;
    source_in?: InputMaybe<Array<Scalars['String']>>;
    source_lt?: InputMaybe<Scalars['String']>;
    source_lte?: InputMaybe<Scalars['String']>;
    source_not?: InputMaybe<Scalars['String']>;
    source_not_contains?: InputMaybe<Scalars['String']>;
    source_not_contains_nocase?: InputMaybe<Scalars['String']>;
    source_not_ends_with?: InputMaybe<Scalars['String']>;
    source_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    source_not_in?: InputMaybe<Array<Scalars['String']>>;
    source_not_starts_with?: InputMaybe<Scalars['String']>;
    source_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    source_starts_with?: InputMaybe<Scalars['String']>;
    source_starts_with_nocase?: InputMaybe<Scalars['String']>;
    sownPods?: InputMaybe<Scalars['BigInt']>;
    sownPods_gt?: InputMaybe<Scalars['BigInt']>;
    sownPods_gte?: InputMaybe<Scalars['BigInt']>;
    sownPods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    sownPods_lt?: InputMaybe<Scalars['BigInt']>;
    sownPods_lte?: InputMaybe<Scalars['BigInt']>;
    sownPods_not?: InputMaybe<Scalars['BigInt']>;
    sownPods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    updatedAt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    weather?: InputMaybe<Scalars['Int']>;
    weather_gt?: InputMaybe<Scalars['Int']>;
    weather_gte?: InputMaybe<Scalars['Int']>;
    weather_in?: InputMaybe<Array<Scalars['Int']>>;
    weather_lt?: InputMaybe<Scalars['Int']>;
    weather_lte?: InputMaybe<Scalars['Int']>;
    weather_not?: InputMaybe<Scalars['Int']>;
    weather_not_in?: InputMaybe<Array<Scalars['Int']>>;
};
export declare enum Plot_OrderBy {
    Beans = "beans",
    CreatedAt = "createdAt",
    CreationHash = "creationHash",
    Farmer = "farmer",
    Field = "field",
    FullyHarvested = "fullyHarvested",
    HarvestablePods = "harvestablePods",
    HarvestedPods = "harvestedPods",
    Id = "id",
    Index = "index",
    Listing = "listing",
    Pods = "pods",
    Season = "season",
    Source = "source",
    SownPods = "sownPods",
    UpdatedAt = "updatedAt",
    Weather = "weather"
}
export declare type PodFill = {
    __typename?: 'PodFill';
    amount: Scalars['BigInt'];
    createdAt: Scalars['BigInt'];
    from: Scalars['String'];
    id: Scalars['ID'];
    index: Scalars['BigInt'];
    listing?: Maybe<PodListing>;
    order?: Maybe<PodOrder>;
    podMarketplace: PodMarketplace;
    start: Scalars['BigInt'];
    to: Scalars['String'];
};
export declare type PodFill_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gte?: InputMaybe<Scalars['BigInt']>;
    createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt_lt?: InputMaybe<Scalars['BigInt']>;
    createdAt_lte?: InputMaybe<Scalars['BigInt']>;
    createdAt_not?: InputMaybe<Scalars['BigInt']>;
    createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    from?: InputMaybe<Scalars['String']>;
    from_contains?: InputMaybe<Scalars['String']>;
    from_contains_nocase?: InputMaybe<Scalars['String']>;
    from_ends_with?: InputMaybe<Scalars['String']>;
    from_ends_with_nocase?: InputMaybe<Scalars['String']>;
    from_gt?: InputMaybe<Scalars['String']>;
    from_gte?: InputMaybe<Scalars['String']>;
    from_in?: InputMaybe<Array<Scalars['String']>>;
    from_lt?: InputMaybe<Scalars['String']>;
    from_lte?: InputMaybe<Scalars['String']>;
    from_not?: InputMaybe<Scalars['String']>;
    from_not_contains?: InputMaybe<Scalars['String']>;
    from_not_contains_nocase?: InputMaybe<Scalars['String']>;
    from_not_ends_with?: InputMaybe<Scalars['String']>;
    from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    from_not_in?: InputMaybe<Array<Scalars['String']>>;
    from_not_starts_with?: InputMaybe<Scalars['String']>;
    from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    from_starts_with?: InputMaybe<Scalars['String']>;
    from_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    index?: InputMaybe<Scalars['BigInt']>;
    index_gt?: InputMaybe<Scalars['BigInt']>;
    index_gte?: InputMaybe<Scalars['BigInt']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']>>;
    index_lt?: InputMaybe<Scalars['BigInt']>;
    index_lte?: InputMaybe<Scalars['BigInt']>;
    index_not?: InputMaybe<Scalars['BigInt']>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    listing?: InputMaybe<Scalars['String']>;
    listing_?: InputMaybe<PodListing_Filter>;
    listing_contains?: InputMaybe<Scalars['String']>;
    listing_contains_nocase?: InputMaybe<Scalars['String']>;
    listing_ends_with?: InputMaybe<Scalars['String']>;
    listing_ends_with_nocase?: InputMaybe<Scalars['String']>;
    listing_gt?: InputMaybe<Scalars['String']>;
    listing_gte?: InputMaybe<Scalars['String']>;
    listing_in?: InputMaybe<Array<Scalars['String']>>;
    listing_lt?: InputMaybe<Scalars['String']>;
    listing_lte?: InputMaybe<Scalars['String']>;
    listing_not?: InputMaybe<Scalars['String']>;
    listing_not_contains?: InputMaybe<Scalars['String']>;
    listing_not_contains_nocase?: InputMaybe<Scalars['String']>;
    listing_not_ends_with?: InputMaybe<Scalars['String']>;
    listing_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    listing_not_in?: InputMaybe<Array<Scalars['String']>>;
    listing_not_starts_with?: InputMaybe<Scalars['String']>;
    listing_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    listing_starts_with?: InputMaybe<Scalars['String']>;
    listing_starts_with_nocase?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<Scalars['String']>;
    order_?: InputMaybe<PodOrder_Filter>;
    order_contains?: InputMaybe<Scalars['String']>;
    order_contains_nocase?: InputMaybe<Scalars['String']>;
    order_ends_with?: InputMaybe<Scalars['String']>;
    order_ends_with_nocase?: InputMaybe<Scalars['String']>;
    order_gt?: InputMaybe<Scalars['String']>;
    order_gte?: InputMaybe<Scalars['String']>;
    order_in?: InputMaybe<Array<Scalars['String']>>;
    order_lt?: InputMaybe<Scalars['String']>;
    order_lte?: InputMaybe<Scalars['String']>;
    order_not?: InputMaybe<Scalars['String']>;
    order_not_contains?: InputMaybe<Scalars['String']>;
    order_not_contains_nocase?: InputMaybe<Scalars['String']>;
    order_not_ends_with?: InputMaybe<Scalars['String']>;
    order_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    order_not_in?: InputMaybe<Array<Scalars['String']>>;
    order_not_starts_with?: InputMaybe<Scalars['String']>;
    order_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    order_starts_with?: InputMaybe<Scalars['String']>;
    order_starts_with_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace?: InputMaybe<Scalars['String']>;
    podMarketplace_?: InputMaybe<PodMarketplace_Filter>;
    podMarketplace_contains?: InputMaybe<Scalars['String']>;
    podMarketplace_contains_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_ends_with?: InputMaybe<Scalars['String']>;
    podMarketplace_ends_with_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_gt?: InputMaybe<Scalars['String']>;
    podMarketplace_gte?: InputMaybe<Scalars['String']>;
    podMarketplace_in?: InputMaybe<Array<Scalars['String']>>;
    podMarketplace_lt?: InputMaybe<Scalars['String']>;
    podMarketplace_lte?: InputMaybe<Scalars['String']>;
    podMarketplace_not?: InputMaybe<Scalars['String']>;
    podMarketplace_not_contains?: InputMaybe<Scalars['String']>;
    podMarketplace_not_contains_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_not_ends_with?: InputMaybe<Scalars['String']>;
    podMarketplace_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_not_in?: InputMaybe<Array<Scalars['String']>>;
    podMarketplace_not_starts_with?: InputMaybe<Scalars['String']>;
    podMarketplace_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_starts_with?: InputMaybe<Scalars['String']>;
    podMarketplace_starts_with_nocase?: InputMaybe<Scalars['String']>;
    start?: InputMaybe<Scalars['BigInt']>;
    start_gt?: InputMaybe<Scalars['BigInt']>;
    start_gte?: InputMaybe<Scalars['BigInt']>;
    start_in?: InputMaybe<Array<Scalars['BigInt']>>;
    start_lt?: InputMaybe<Scalars['BigInt']>;
    start_lte?: InputMaybe<Scalars['BigInt']>;
    start_not?: InputMaybe<Scalars['BigInt']>;
    start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    to?: InputMaybe<Scalars['String']>;
    to_contains?: InputMaybe<Scalars['String']>;
    to_contains_nocase?: InputMaybe<Scalars['String']>;
    to_ends_with?: InputMaybe<Scalars['String']>;
    to_ends_with_nocase?: InputMaybe<Scalars['String']>;
    to_gt?: InputMaybe<Scalars['String']>;
    to_gte?: InputMaybe<Scalars['String']>;
    to_in?: InputMaybe<Array<Scalars['String']>>;
    to_lt?: InputMaybe<Scalars['String']>;
    to_lte?: InputMaybe<Scalars['String']>;
    to_not?: InputMaybe<Scalars['String']>;
    to_not_contains?: InputMaybe<Scalars['String']>;
    to_not_contains_nocase?: InputMaybe<Scalars['String']>;
    to_not_ends_with?: InputMaybe<Scalars['String']>;
    to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    to_not_in?: InputMaybe<Array<Scalars['String']>>;
    to_not_starts_with?: InputMaybe<Scalars['String']>;
    to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    to_starts_with?: InputMaybe<Scalars['String']>;
    to_starts_with_nocase?: InputMaybe<Scalars['String']>;
};
export declare enum PodFill_OrderBy {
    Amount = "amount",
    CreatedAt = "createdAt",
    From = "from",
    Id = "id",
    Index = "index",
    Listing = "listing",
    Order = "order",
    PodMarketplace = "podMarketplace",
    Start = "start",
    To = "to"
}
export declare type PodListing = {
    __typename?: 'PodListing';
    amount: Scalars['BigInt'];
    cancelledAmount: Scalars['BigInt'];
    createdAt: Scalars['BigInt'];
    farmer: Farmer;
    fill?: Maybe<PodFill>;
    filledAmount: Scalars['BigInt'];
    /**  Historical ID for joins */
    historyID: Scalars['String'];
    id: Scalars['ID'];
    index: Scalars['BigInt'];
    maxHarvestableIndex: Scalars['BigInt'];
    mode: Scalars['Int'];
    originalIndex: Scalars['BigInt'];
    plot: Plot;
    pricePerPod: Scalars['Int'];
    remainingAmount: Scalars['BigInt'];
    start: Scalars['BigInt'];
    status: MarketStatus;
    totalAmount: Scalars['BigInt'];
    totalFilled: Scalars['BigInt'];
    updatedAt: Scalars['BigInt'];
};
export declare type PodListingCancelled = MarketplaceEvent & {
    __typename?: 'PodListingCancelled';
    /**  Account cancelling listing */
    account: Scalars['String'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /**  Historical ID for joins */
    historyID: Scalars['String'];
    /** seedChange-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Index of plot listing being cancelled */
    index: Scalars['BigInt'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
};
export declare type PodListingCancelled_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    account?: InputMaybe<Scalars['String']>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID?: InputMaybe<Scalars['String']>;
    historyID_contains?: InputMaybe<Scalars['String']>;
    historyID_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_ends_with?: InputMaybe<Scalars['String']>;
    historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_gt?: InputMaybe<Scalars['String']>;
    historyID_gte?: InputMaybe<Scalars['String']>;
    historyID_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_lt?: InputMaybe<Scalars['String']>;
    historyID_lte?: InputMaybe<Scalars['String']>;
    historyID_not?: InputMaybe<Scalars['String']>;
    historyID_not_contains?: InputMaybe<Scalars['String']>;
    historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_not_starts_with?: InputMaybe<Scalars['String']>;
    historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_starts_with?: InputMaybe<Scalars['String']>;
    historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    index?: InputMaybe<Scalars['BigInt']>;
    index_gt?: InputMaybe<Scalars['BigInt']>;
    index_gte?: InputMaybe<Scalars['BigInt']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']>>;
    index_lt?: InputMaybe<Scalars['BigInt']>;
    index_lte?: InputMaybe<Scalars['BigInt']>;
    index_not?: InputMaybe<Scalars['BigInt']>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum PodListingCancelled_OrderBy {
    Account = "account",
    BlockNumber = "blockNumber",
    Hash = "hash",
    HistoryId = "historyID",
    Id = "id",
    Index = "index",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Timestamp = "timestamp"
}
export declare type PodListingCreated = MarketplaceEvent & {
    __typename?: 'PodListingCreated';
    /**  Account creating the listing */
    account: Scalars['String'];
    /** Amount of pods listed */
    amount: Scalars['BigInt'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /**  Historical ID for joins */
    historyID: Scalars['String'];
    /** podListingCreated-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Index of the plot listed */
    index: Scalars['BigInt'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /** Max index for listing */
    maxHarvestableIndex: Scalars['BigInt'];
    /** Claim to location */
    mode: Scalars['Int'];
    /** Price per pod */
    pricePerPod: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Start value of the plot listed  */
    start: Scalars['BigInt'];
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
};
export declare type PodListingCreated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    account?: InputMaybe<Scalars['String']>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID?: InputMaybe<Scalars['String']>;
    historyID_contains?: InputMaybe<Scalars['String']>;
    historyID_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_ends_with?: InputMaybe<Scalars['String']>;
    historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_gt?: InputMaybe<Scalars['String']>;
    historyID_gte?: InputMaybe<Scalars['String']>;
    historyID_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_lt?: InputMaybe<Scalars['String']>;
    historyID_lte?: InputMaybe<Scalars['String']>;
    historyID_not?: InputMaybe<Scalars['String']>;
    historyID_not_contains?: InputMaybe<Scalars['String']>;
    historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_not_starts_with?: InputMaybe<Scalars['String']>;
    historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_starts_with?: InputMaybe<Scalars['String']>;
    historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    index?: InputMaybe<Scalars['BigInt']>;
    index_gt?: InputMaybe<Scalars['BigInt']>;
    index_gte?: InputMaybe<Scalars['BigInt']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']>>;
    index_lt?: InputMaybe<Scalars['BigInt']>;
    index_lte?: InputMaybe<Scalars['BigInt']>;
    index_not?: InputMaybe<Scalars['BigInt']>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    maxHarvestableIndex?: InputMaybe<Scalars['BigInt']>;
    maxHarvestableIndex_gt?: InputMaybe<Scalars['BigInt']>;
    maxHarvestableIndex_gte?: InputMaybe<Scalars['BigInt']>;
    maxHarvestableIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    maxHarvestableIndex_lt?: InputMaybe<Scalars['BigInt']>;
    maxHarvestableIndex_lte?: InputMaybe<Scalars['BigInt']>;
    maxHarvestableIndex_not?: InputMaybe<Scalars['BigInt']>;
    maxHarvestableIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    mode?: InputMaybe<Scalars['Int']>;
    mode_gt?: InputMaybe<Scalars['Int']>;
    mode_gte?: InputMaybe<Scalars['Int']>;
    mode_in?: InputMaybe<Array<Scalars['Int']>>;
    mode_lt?: InputMaybe<Scalars['Int']>;
    mode_lte?: InputMaybe<Scalars['Int']>;
    mode_not?: InputMaybe<Scalars['Int']>;
    mode_not_in?: InputMaybe<Array<Scalars['Int']>>;
    pricePerPod?: InputMaybe<Scalars['Int']>;
    pricePerPod_gt?: InputMaybe<Scalars['Int']>;
    pricePerPod_gte?: InputMaybe<Scalars['Int']>;
    pricePerPod_in?: InputMaybe<Array<Scalars['Int']>>;
    pricePerPod_lt?: InputMaybe<Scalars['Int']>;
    pricePerPod_lte?: InputMaybe<Scalars['Int']>;
    pricePerPod_not?: InputMaybe<Scalars['Int']>;
    pricePerPod_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    start?: InputMaybe<Scalars['BigInt']>;
    start_gt?: InputMaybe<Scalars['BigInt']>;
    start_gte?: InputMaybe<Scalars['BigInt']>;
    start_in?: InputMaybe<Array<Scalars['BigInt']>>;
    start_lt?: InputMaybe<Scalars['BigInt']>;
    start_lte?: InputMaybe<Scalars['BigInt']>;
    start_not?: InputMaybe<Scalars['BigInt']>;
    start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum PodListingCreated_OrderBy {
    Account = "account",
    Amount = "amount",
    BlockNumber = "blockNumber",
    Hash = "hash",
    HistoryId = "historyID",
    Id = "id",
    Index = "index",
    LogIndex = "logIndex",
    MaxHarvestableIndex = "maxHarvestableIndex",
    Mode = "mode",
    PricePerPod = "pricePerPod",
    Protocol = "protocol",
    Start = "start",
    Timestamp = "timestamp"
}
export declare type PodListingFilled = MarketplaceEvent & {
    __typename?: 'PodListingFilled';
    /** Number of pods transferred */
    amount: Scalars['BigInt'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /** Account selling pods */
    from: Scalars['String'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /**  Historical ID for joins */
    historyID: Scalars['String'];
    /** podListingFilled-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /** Index of the plot transferred */
    index: Scalars['BigInt'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /** Start of the plot transferred */
    start: Scalars['BigInt'];
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
    /** Account buying pods */
    to: Scalars['String'];
};
export declare type PodListingFilled_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    from?: InputMaybe<Scalars['String']>;
    from_contains?: InputMaybe<Scalars['String']>;
    from_contains_nocase?: InputMaybe<Scalars['String']>;
    from_ends_with?: InputMaybe<Scalars['String']>;
    from_ends_with_nocase?: InputMaybe<Scalars['String']>;
    from_gt?: InputMaybe<Scalars['String']>;
    from_gte?: InputMaybe<Scalars['String']>;
    from_in?: InputMaybe<Array<Scalars['String']>>;
    from_lt?: InputMaybe<Scalars['String']>;
    from_lte?: InputMaybe<Scalars['String']>;
    from_not?: InputMaybe<Scalars['String']>;
    from_not_contains?: InputMaybe<Scalars['String']>;
    from_not_contains_nocase?: InputMaybe<Scalars['String']>;
    from_not_ends_with?: InputMaybe<Scalars['String']>;
    from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    from_not_in?: InputMaybe<Array<Scalars['String']>>;
    from_not_starts_with?: InputMaybe<Scalars['String']>;
    from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    from_starts_with?: InputMaybe<Scalars['String']>;
    from_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID?: InputMaybe<Scalars['String']>;
    historyID_contains?: InputMaybe<Scalars['String']>;
    historyID_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_ends_with?: InputMaybe<Scalars['String']>;
    historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_gt?: InputMaybe<Scalars['String']>;
    historyID_gte?: InputMaybe<Scalars['String']>;
    historyID_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_lt?: InputMaybe<Scalars['String']>;
    historyID_lte?: InputMaybe<Scalars['String']>;
    historyID_not?: InputMaybe<Scalars['String']>;
    historyID_not_contains?: InputMaybe<Scalars['String']>;
    historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_not_starts_with?: InputMaybe<Scalars['String']>;
    historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_starts_with?: InputMaybe<Scalars['String']>;
    historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    index?: InputMaybe<Scalars['BigInt']>;
    index_gt?: InputMaybe<Scalars['BigInt']>;
    index_gte?: InputMaybe<Scalars['BigInt']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']>>;
    index_lt?: InputMaybe<Scalars['BigInt']>;
    index_lte?: InputMaybe<Scalars['BigInt']>;
    index_not?: InputMaybe<Scalars['BigInt']>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    start?: InputMaybe<Scalars['BigInt']>;
    start_gt?: InputMaybe<Scalars['BigInt']>;
    start_gte?: InputMaybe<Scalars['BigInt']>;
    start_in?: InputMaybe<Array<Scalars['BigInt']>>;
    start_lt?: InputMaybe<Scalars['BigInt']>;
    start_lte?: InputMaybe<Scalars['BigInt']>;
    start_not?: InputMaybe<Scalars['BigInt']>;
    start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    to?: InputMaybe<Scalars['String']>;
    to_contains?: InputMaybe<Scalars['String']>;
    to_contains_nocase?: InputMaybe<Scalars['String']>;
    to_ends_with?: InputMaybe<Scalars['String']>;
    to_ends_with_nocase?: InputMaybe<Scalars['String']>;
    to_gt?: InputMaybe<Scalars['String']>;
    to_gte?: InputMaybe<Scalars['String']>;
    to_in?: InputMaybe<Array<Scalars['String']>>;
    to_lt?: InputMaybe<Scalars['String']>;
    to_lte?: InputMaybe<Scalars['String']>;
    to_not?: InputMaybe<Scalars['String']>;
    to_not_contains?: InputMaybe<Scalars['String']>;
    to_not_contains_nocase?: InputMaybe<Scalars['String']>;
    to_not_ends_with?: InputMaybe<Scalars['String']>;
    to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    to_not_in?: InputMaybe<Array<Scalars['String']>>;
    to_not_starts_with?: InputMaybe<Scalars['String']>;
    to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    to_starts_with?: InputMaybe<Scalars['String']>;
    to_starts_with_nocase?: InputMaybe<Scalars['String']>;
};
export declare enum PodListingFilled_OrderBy {
    Amount = "amount",
    BlockNumber = "blockNumber",
    From = "from",
    Hash = "hash",
    HistoryId = "historyID",
    Id = "id",
    Index = "index",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Start = "start",
    Timestamp = "timestamp",
    To = "to"
}
export declare type PodListing_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    cancelledAmount?: InputMaybe<Scalars['BigInt']>;
    cancelledAmount_gt?: InputMaybe<Scalars['BigInt']>;
    cancelledAmount_gte?: InputMaybe<Scalars['BigInt']>;
    cancelledAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    cancelledAmount_lt?: InputMaybe<Scalars['BigInt']>;
    cancelledAmount_lte?: InputMaybe<Scalars['BigInt']>;
    cancelledAmount_not?: InputMaybe<Scalars['BigInt']>;
    cancelledAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gte?: InputMaybe<Scalars['BigInt']>;
    createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt_lt?: InputMaybe<Scalars['BigInt']>;
    createdAt_lte?: InputMaybe<Scalars['BigInt']>;
    createdAt_not?: InputMaybe<Scalars['BigInt']>;
    createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    farmer?: InputMaybe<Scalars['String']>;
    farmer_?: InputMaybe<Farmer_Filter>;
    farmer_contains?: InputMaybe<Scalars['String']>;
    farmer_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_ends_with?: InputMaybe<Scalars['String']>;
    farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_gt?: InputMaybe<Scalars['String']>;
    farmer_gte?: InputMaybe<Scalars['String']>;
    farmer_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_lt?: InputMaybe<Scalars['String']>;
    farmer_lte?: InputMaybe<Scalars['String']>;
    farmer_not?: InputMaybe<Scalars['String']>;
    farmer_not_contains?: InputMaybe<Scalars['String']>;
    farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_not_starts_with?: InputMaybe<Scalars['String']>;
    farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_starts_with?: InputMaybe<Scalars['String']>;
    farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
    fill?: InputMaybe<Scalars['String']>;
    fill_?: InputMaybe<PodFill_Filter>;
    fill_contains?: InputMaybe<Scalars['String']>;
    fill_contains_nocase?: InputMaybe<Scalars['String']>;
    fill_ends_with?: InputMaybe<Scalars['String']>;
    fill_ends_with_nocase?: InputMaybe<Scalars['String']>;
    fill_gt?: InputMaybe<Scalars['String']>;
    fill_gte?: InputMaybe<Scalars['String']>;
    fill_in?: InputMaybe<Array<Scalars['String']>>;
    fill_lt?: InputMaybe<Scalars['String']>;
    fill_lte?: InputMaybe<Scalars['String']>;
    fill_not?: InputMaybe<Scalars['String']>;
    fill_not_contains?: InputMaybe<Scalars['String']>;
    fill_not_contains_nocase?: InputMaybe<Scalars['String']>;
    fill_not_ends_with?: InputMaybe<Scalars['String']>;
    fill_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    fill_not_in?: InputMaybe<Array<Scalars['String']>>;
    fill_not_starts_with?: InputMaybe<Scalars['String']>;
    fill_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    fill_starts_with?: InputMaybe<Scalars['String']>;
    fill_starts_with_nocase?: InputMaybe<Scalars['String']>;
    filledAmount?: InputMaybe<Scalars['BigInt']>;
    filledAmount_gt?: InputMaybe<Scalars['BigInt']>;
    filledAmount_gte?: InputMaybe<Scalars['BigInt']>;
    filledAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    filledAmount_lt?: InputMaybe<Scalars['BigInt']>;
    filledAmount_lte?: InputMaybe<Scalars['BigInt']>;
    filledAmount_not?: InputMaybe<Scalars['BigInt']>;
    filledAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    historyID?: InputMaybe<Scalars['String']>;
    historyID_contains?: InputMaybe<Scalars['String']>;
    historyID_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_ends_with?: InputMaybe<Scalars['String']>;
    historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_gt?: InputMaybe<Scalars['String']>;
    historyID_gte?: InputMaybe<Scalars['String']>;
    historyID_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_lt?: InputMaybe<Scalars['String']>;
    historyID_lte?: InputMaybe<Scalars['String']>;
    historyID_not?: InputMaybe<Scalars['String']>;
    historyID_not_contains?: InputMaybe<Scalars['String']>;
    historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_not_starts_with?: InputMaybe<Scalars['String']>;
    historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_starts_with?: InputMaybe<Scalars['String']>;
    historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    index?: InputMaybe<Scalars['BigInt']>;
    index_gt?: InputMaybe<Scalars['BigInt']>;
    index_gte?: InputMaybe<Scalars['BigInt']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']>>;
    index_lt?: InputMaybe<Scalars['BigInt']>;
    index_lte?: InputMaybe<Scalars['BigInt']>;
    index_not?: InputMaybe<Scalars['BigInt']>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    maxHarvestableIndex?: InputMaybe<Scalars['BigInt']>;
    maxHarvestableIndex_gt?: InputMaybe<Scalars['BigInt']>;
    maxHarvestableIndex_gte?: InputMaybe<Scalars['BigInt']>;
    maxHarvestableIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    maxHarvestableIndex_lt?: InputMaybe<Scalars['BigInt']>;
    maxHarvestableIndex_lte?: InputMaybe<Scalars['BigInt']>;
    maxHarvestableIndex_not?: InputMaybe<Scalars['BigInt']>;
    maxHarvestableIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    mode?: InputMaybe<Scalars['Int']>;
    mode_gt?: InputMaybe<Scalars['Int']>;
    mode_gte?: InputMaybe<Scalars['Int']>;
    mode_in?: InputMaybe<Array<Scalars['Int']>>;
    mode_lt?: InputMaybe<Scalars['Int']>;
    mode_lte?: InputMaybe<Scalars['Int']>;
    mode_not?: InputMaybe<Scalars['Int']>;
    mode_not_in?: InputMaybe<Array<Scalars['Int']>>;
    originalIndex?: InputMaybe<Scalars['BigInt']>;
    originalIndex_gt?: InputMaybe<Scalars['BigInt']>;
    originalIndex_gte?: InputMaybe<Scalars['BigInt']>;
    originalIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    originalIndex_lt?: InputMaybe<Scalars['BigInt']>;
    originalIndex_lte?: InputMaybe<Scalars['BigInt']>;
    originalIndex_not?: InputMaybe<Scalars['BigInt']>;
    originalIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    plot?: InputMaybe<Scalars['String']>;
    plot_?: InputMaybe<Plot_Filter>;
    plot_contains?: InputMaybe<Scalars['String']>;
    plot_contains_nocase?: InputMaybe<Scalars['String']>;
    plot_ends_with?: InputMaybe<Scalars['String']>;
    plot_ends_with_nocase?: InputMaybe<Scalars['String']>;
    plot_gt?: InputMaybe<Scalars['String']>;
    plot_gte?: InputMaybe<Scalars['String']>;
    plot_in?: InputMaybe<Array<Scalars['String']>>;
    plot_lt?: InputMaybe<Scalars['String']>;
    plot_lte?: InputMaybe<Scalars['String']>;
    plot_not?: InputMaybe<Scalars['String']>;
    plot_not_contains?: InputMaybe<Scalars['String']>;
    plot_not_contains_nocase?: InputMaybe<Scalars['String']>;
    plot_not_ends_with?: InputMaybe<Scalars['String']>;
    plot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    plot_not_in?: InputMaybe<Array<Scalars['String']>>;
    plot_not_starts_with?: InputMaybe<Scalars['String']>;
    plot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    plot_starts_with?: InputMaybe<Scalars['String']>;
    plot_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pricePerPod?: InputMaybe<Scalars['Int']>;
    pricePerPod_gt?: InputMaybe<Scalars['Int']>;
    pricePerPod_gte?: InputMaybe<Scalars['Int']>;
    pricePerPod_in?: InputMaybe<Array<Scalars['Int']>>;
    pricePerPod_lt?: InputMaybe<Scalars['Int']>;
    pricePerPod_lte?: InputMaybe<Scalars['Int']>;
    pricePerPod_not?: InputMaybe<Scalars['Int']>;
    pricePerPod_not_in?: InputMaybe<Array<Scalars['Int']>>;
    remainingAmount?: InputMaybe<Scalars['BigInt']>;
    remainingAmount_gt?: InputMaybe<Scalars['BigInt']>;
    remainingAmount_gte?: InputMaybe<Scalars['BigInt']>;
    remainingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    remainingAmount_lt?: InputMaybe<Scalars['BigInt']>;
    remainingAmount_lte?: InputMaybe<Scalars['BigInt']>;
    remainingAmount_not?: InputMaybe<Scalars['BigInt']>;
    remainingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    start?: InputMaybe<Scalars['BigInt']>;
    start_gt?: InputMaybe<Scalars['BigInt']>;
    start_gte?: InputMaybe<Scalars['BigInt']>;
    start_in?: InputMaybe<Array<Scalars['BigInt']>>;
    start_lt?: InputMaybe<Scalars['BigInt']>;
    start_lte?: InputMaybe<Scalars['BigInt']>;
    start_not?: InputMaybe<Scalars['BigInt']>;
    start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    status?: InputMaybe<MarketStatus>;
    status_in?: InputMaybe<Array<MarketStatus>>;
    status_not?: InputMaybe<MarketStatus>;
    status_not_in?: InputMaybe<Array<MarketStatus>>;
    totalAmount?: InputMaybe<Scalars['BigInt']>;
    totalAmount_gt?: InputMaybe<Scalars['BigInt']>;
    totalAmount_gte?: InputMaybe<Scalars['BigInt']>;
    totalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalAmount_lt?: InputMaybe<Scalars['BigInt']>;
    totalAmount_lte?: InputMaybe<Scalars['BigInt']>;
    totalAmount_not?: InputMaybe<Scalars['BigInt']>;
    totalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalFilled?: InputMaybe<Scalars['BigInt']>;
    totalFilled_gt?: InputMaybe<Scalars['BigInt']>;
    totalFilled_gte?: InputMaybe<Scalars['BigInt']>;
    totalFilled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalFilled_lt?: InputMaybe<Scalars['BigInt']>;
    totalFilled_lte?: InputMaybe<Scalars['BigInt']>;
    totalFilled_not?: InputMaybe<Scalars['BigInt']>;
    totalFilled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    updatedAt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum PodListing_OrderBy {
    Amount = "amount",
    CancelledAmount = "cancelledAmount",
    CreatedAt = "createdAt",
    Farmer = "farmer",
    Fill = "fill",
    FilledAmount = "filledAmount",
    HistoryId = "historyID",
    Id = "id",
    Index = "index",
    MaxHarvestableIndex = "maxHarvestableIndex",
    Mode = "mode",
    OriginalIndex = "originalIndex",
    Plot = "plot",
    PricePerPod = "pricePerPod",
    RemainingAmount = "remainingAmount",
    Start = "start",
    Status = "status",
    TotalAmount = "totalAmount",
    TotalFilled = "totalFilled",
    UpdatedAt = "updatedAt"
}
export declare type PodMarketplace = {
    __typename?: 'PodMarketplace';
    dailySnapshots: Array<PodMarketplaceDailySnapshot>;
    fills: Array<PodFill>;
    hourlySnapshots: Array<PodMarketplaceHourlySnapshot>;
    /**  Contract address of beanstalk or farmer  */
    id: Scalars['ID'];
    listingIndexes: Array<Scalars['BigInt']>;
    orders: Array<PodOrder>;
    season: Scalars['Int'];
    totalBeanVolume: Scalars['BigInt'];
    totalOrdersCancelled: Scalars['BigInt'];
    totalOrdersCreated: Scalars['BigInt'];
    totalOrdersFilled: Scalars['BigInt'];
    totalPodVolume: Scalars['BigInt'];
    totalPodsAvailable: Scalars['BigInt'];
    totalPodsCancelled: Scalars['BigInt'];
    totalPodsExpired: Scalars['BigInt'];
    totalPodsFilled: Scalars['BigInt'];
    totalPodsListed: Scalars['BigInt'];
};
export declare type PodMarketplaceDailySnapshotsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodMarketplaceDailySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<PodMarketplaceDailySnapshot_Filter>;
};
export declare type PodMarketplaceFillsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodFill_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<PodFill_Filter>;
};
export declare type PodMarketplaceHourlySnapshotsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodMarketplaceHourlySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<PodMarketplaceHourlySnapshot_Filter>;
};
export declare type PodMarketplaceOrdersArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodOrder_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<PodOrder_Filter>;
};
export declare type PodMarketplaceDailySnapshot = {
    __typename?: 'PodMarketplaceDailySnapshot';
    blockNumber: Scalars['BigInt'];
    id: Scalars['ID'];
    newBeanVolume: Scalars['BigInt'];
    newOrdersCancelled: Scalars['BigInt'];
    newOrdersCreated: Scalars['BigInt'];
    newOrdersFilled: Scalars['BigInt'];
    newPodVolume: Scalars['BigInt'];
    newPodsAvailable: Scalars['BigInt'];
    newPodsCancelled: Scalars['BigInt'];
    newPodsExpired: Scalars['BigInt'];
    newPodsFilled: Scalars['BigInt'];
    newPodsListed: Scalars['BigInt'];
    podMarketplace: PodMarketplace;
    season: Scalars['Int'];
    timestamp: Scalars['BigInt'];
    totalBeanVolume: Scalars['BigInt'];
    totalOrdersCancelled: Scalars['BigInt'];
    totalOrdersCreated: Scalars['BigInt'];
    totalOrdersFilled: Scalars['BigInt'];
    totalPodVolume: Scalars['BigInt'];
    totalPodsAvailable: Scalars['BigInt'];
    totalPodsCancelled: Scalars['BigInt'];
    totalPodsExpired: Scalars['BigInt'];
    totalPodsFilled: Scalars['BigInt'];
    totalPodsListed: Scalars['BigInt'];
};
export declare type PodMarketplaceDailySnapshot_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    newBeanVolume?: InputMaybe<Scalars['BigInt']>;
    newBeanVolume_gt?: InputMaybe<Scalars['BigInt']>;
    newBeanVolume_gte?: InputMaybe<Scalars['BigInt']>;
    newBeanVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newBeanVolume_lt?: InputMaybe<Scalars['BigInt']>;
    newBeanVolume_lte?: InputMaybe<Scalars['BigInt']>;
    newBeanVolume_not?: InputMaybe<Scalars['BigInt']>;
    newBeanVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newOrdersCancelled?: InputMaybe<Scalars['BigInt']>;
    newOrdersCancelled_gt?: InputMaybe<Scalars['BigInt']>;
    newOrdersCancelled_gte?: InputMaybe<Scalars['BigInt']>;
    newOrdersCancelled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newOrdersCancelled_lt?: InputMaybe<Scalars['BigInt']>;
    newOrdersCancelled_lte?: InputMaybe<Scalars['BigInt']>;
    newOrdersCancelled_not?: InputMaybe<Scalars['BigInt']>;
    newOrdersCancelled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newOrdersCreated?: InputMaybe<Scalars['BigInt']>;
    newOrdersCreated_gt?: InputMaybe<Scalars['BigInt']>;
    newOrdersCreated_gte?: InputMaybe<Scalars['BigInt']>;
    newOrdersCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newOrdersCreated_lt?: InputMaybe<Scalars['BigInt']>;
    newOrdersCreated_lte?: InputMaybe<Scalars['BigInt']>;
    newOrdersCreated_not?: InputMaybe<Scalars['BigInt']>;
    newOrdersCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newOrdersFilled?: InputMaybe<Scalars['BigInt']>;
    newOrdersFilled_gt?: InputMaybe<Scalars['BigInt']>;
    newOrdersFilled_gte?: InputMaybe<Scalars['BigInt']>;
    newOrdersFilled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newOrdersFilled_lt?: InputMaybe<Scalars['BigInt']>;
    newOrdersFilled_lte?: InputMaybe<Scalars['BigInt']>;
    newOrdersFilled_not?: InputMaybe<Scalars['BigInt']>;
    newOrdersFilled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodVolume?: InputMaybe<Scalars['BigInt']>;
    newPodVolume_gt?: InputMaybe<Scalars['BigInt']>;
    newPodVolume_gte?: InputMaybe<Scalars['BigInt']>;
    newPodVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodVolume_lt?: InputMaybe<Scalars['BigInt']>;
    newPodVolume_lte?: InputMaybe<Scalars['BigInt']>;
    newPodVolume_not?: InputMaybe<Scalars['BigInt']>;
    newPodVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsAvailable?: InputMaybe<Scalars['BigInt']>;
    newPodsAvailable_gt?: InputMaybe<Scalars['BigInt']>;
    newPodsAvailable_gte?: InputMaybe<Scalars['BigInt']>;
    newPodsAvailable_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsAvailable_lt?: InputMaybe<Scalars['BigInt']>;
    newPodsAvailable_lte?: InputMaybe<Scalars['BigInt']>;
    newPodsAvailable_not?: InputMaybe<Scalars['BigInt']>;
    newPodsAvailable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsCancelled?: InputMaybe<Scalars['BigInt']>;
    newPodsCancelled_gt?: InputMaybe<Scalars['BigInt']>;
    newPodsCancelled_gte?: InputMaybe<Scalars['BigInt']>;
    newPodsCancelled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsCancelled_lt?: InputMaybe<Scalars['BigInt']>;
    newPodsCancelled_lte?: InputMaybe<Scalars['BigInt']>;
    newPodsCancelled_not?: InputMaybe<Scalars['BigInt']>;
    newPodsCancelled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsExpired?: InputMaybe<Scalars['BigInt']>;
    newPodsExpired_gt?: InputMaybe<Scalars['BigInt']>;
    newPodsExpired_gte?: InputMaybe<Scalars['BigInt']>;
    newPodsExpired_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsExpired_lt?: InputMaybe<Scalars['BigInt']>;
    newPodsExpired_lte?: InputMaybe<Scalars['BigInt']>;
    newPodsExpired_not?: InputMaybe<Scalars['BigInt']>;
    newPodsExpired_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsFilled?: InputMaybe<Scalars['BigInt']>;
    newPodsFilled_gt?: InputMaybe<Scalars['BigInt']>;
    newPodsFilled_gte?: InputMaybe<Scalars['BigInt']>;
    newPodsFilled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsFilled_lt?: InputMaybe<Scalars['BigInt']>;
    newPodsFilled_lte?: InputMaybe<Scalars['BigInt']>;
    newPodsFilled_not?: InputMaybe<Scalars['BigInt']>;
    newPodsFilled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsListed?: InputMaybe<Scalars['BigInt']>;
    newPodsListed_gt?: InputMaybe<Scalars['BigInt']>;
    newPodsListed_gte?: InputMaybe<Scalars['BigInt']>;
    newPodsListed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsListed_lt?: InputMaybe<Scalars['BigInt']>;
    newPodsListed_lte?: InputMaybe<Scalars['BigInt']>;
    newPodsListed_not?: InputMaybe<Scalars['BigInt']>;
    newPodsListed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    podMarketplace?: InputMaybe<Scalars['String']>;
    podMarketplace_?: InputMaybe<PodMarketplace_Filter>;
    podMarketplace_contains?: InputMaybe<Scalars['String']>;
    podMarketplace_contains_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_ends_with?: InputMaybe<Scalars['String']>;
    podMarketplace_ends_with_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_gt?: InputMaybe<Scalars['String']>;
    podMarketplace_gte?: InputMaybe<Scalars['String']>;
    podMarketplace_in?: InputMaybe<Array<Scalars['String']>>;
    podMarketplace_lt?: InputMaybe<Scalars['String']>;
    podMarketplace_lte?: InputMaybe<Scalars['String']>;
    podMarketplace_not?: InputMaybe<Scalars['String']>;
    podMarketplace_not_contains?: InputMaybe<Scalars['String']>;
    podMarketplace_not_contains_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_not_ends_with?: InputMaybe<Scalars['String']>;
    podMarketplace_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_not_in?: InputMaybe<Array<Scalars['String']>>;
    podMarketplace_not_starts_with?: InputMaybe<Scalars['String']>;
    podMarketplace_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_starts_with?: InputMaybe<Scalars['String']>;
    podMarketplace_starts_with_nocase?: InputMaybe<Scalars['String']>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBeanVolume?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_gt?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_gte?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBeanVolume_lt?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_lte?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_not?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersCancelled?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_gt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_gte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersCancelled_lt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_lte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_not?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersCreated?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_gt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_gte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersCreated_lt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_lte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_not?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersFilled?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_gt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_gte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersFilled_lt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_lte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_not?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodVolume?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodVolume_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_not?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsAvailable?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsAvailable_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsCancelled?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsCancelled_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsExpired?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsExpired_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsFilled?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsFilled_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsListed?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsListed_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum PodMarketplaceDailySnapshot_OrderBy {
    BlockNumber = "blockNumber",
    Id = "id",
    NewBeanVolume = "newBeanVolume",
    NewOrdersCancelled = "newOrdersCancelled",
    NewOrdersCreated = "newOrdersCreated",
    NewOrdersFilled = "newOrdersFilled",
    NewPodVolume = "newPodVolume",
    NewPodsAvailable = "newPodsAvailable",
    NewPodsCancelled = "newPodsCancelled",
    NewPodsExpired = "newPodsExpired",
    NewPodsFilled = "newPodsFilled",
    NewPodsListed = "newPodsListed",
    PodMarketplace = "podMarketplace",
    Season = "season",
    Timestamp = "timestamp",
    TotalBeanVolume = "totalBeanVolume",
    TotalOrdersCancelled = "totalOrdersCancelled",
    TotalOrdersCreated = "totalOrdersCreated",
    TotalOrdersFilled = "totalOrdersFilled",
    TotalPodVolume = "totalPodVolume",
    TotalPodsAvailable = "totalPodsAvailable",
    TotalPodsCancelled = "totalPodsCancelled",
    TotalPodsExpired = "totalPodsExpired",
    TotalPodsFilled = "totalPodsFilled",
    TotalPodsListed = "totalPodsListed"
}
export declare type PodMarketplaceHourlySnapshot = {
    __typename?: 'PodMarketplaceHourlySnapshot';
    blockNumber: Scalars['BigInt'];
    id: Scalars['ID'];
    newBeanVolume: Scalars['BigInt'];
    newOrdersCancelled: Scalars['BigInt'];
    newOrdersCreated: Scalars['BigInt'];
    newOrdersFilled: Scalars['BigInt'];
    newPodVolume: Scalars['BigInt'];
    newPodsAvailable: Scalars['BigInt'];
    newPodsCancelled: Scalars['BigInt'];
    newPodsExpired: Scalars['BigInt'];
    newPodsFilled: Scalars['BigInt'];
    newPodsListed: Scalars['BigInt'];
    podMarketplace: PodMarketplace;
    season: Scalars['Int'];
    timestamp: Scalars['BigInt'];
    totalBeanVolume: Scalars['BigInt'];
    totalOrdersCancelled: Scalars['BigInt'];
    totalOrdersCreated: Scalars['BigInt'];
    totalOrdersFilled: Scalars['BigInt'];
    totalPodVolume: Scalars['BigInt'];
    totalPodsAvailable: Scalars['BigInt'];
    totalPodsCancelled: Scalars['BigInt'];
    totalPodsExpired: Scalars['BigInt'];
    totalPodsFilled: Scalars['BigInt'];
    totalPodsListed: Scalars['BigInt'];
};
export declare type PodMarketplaceHourlySnapshot_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    newBeanVolume?: InputMaybe<Scalars['BigInt']>;
    newBeanVolume_gt?: InputMaybe<Scalars['BigInt']>;
    newBeanVolume_gte?: InputMaybe<Scalars['BigInt']>;
    newBeanVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newBeanVolume_lt?: InputMaybe<Scalars['BigInt']>;
    newBeanVolume_lte?: InputMaybe<Scalars['BigInt']>;
    newBeanVolume_not?: InputMaybe<Scalars['BigInt']>;
    newBeanVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newOrdersCancelled?: InputMaybe<Scalars['BigInt']>;
    newOrdersCancelled_gt?: InputMaybe<Scalars['BigInt']>;
    newOrdersCancelled_gte?: InputMaybe<Scalars['BigInt']>;
    newOrdersCancelled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newOrdersCancelled_lt?: InputMaybe<Scalars['BigInt']>;
    newOrdersCancelled_lte?: InputMaybe<Scalars['BigInt']>;
    newOrdersCancelled_not?: InputMaybe<Scalars['BigInt']>;
    newOrdersCancelled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newOrdersCreated?: InputMaybe<Scalars['BigInt']>;
    newOrdersCreated_gt?: InputMaybe<Scalars['BigInt']>;
    newOrdersCreated_gte?: InputMaybe<Scalars['BigInt']>;
    newOrdersCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newOrdersCreated_lt?: InputMaybe<Scalars['BigInt']>;
    newOrdersCreated_lte?: InputMaybe<Scalars['BigInt']>;
    newOrdersCreated_not?: InputMaybe<Scalars['BigInt']>;
    newOrdersCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newOrdersFilled?: InputMaybe<Scalars['BigInt']>;
    newOrdersFilled_gt?: InputMaybe<Scalars['BigInt']>;
    newOrdersFilled_gte?: InputMaybe<Scalars['BigInt']>;
    newOrdersFilled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newOrdersFilled_lt?: InputMaybe<Scalars['BigInt']>;
    newOrdersFilled_lte?: InputMaybe<Scalars['BigInt']>;
    newOrdersFilled_not?: InputMaybe<Scalars['BigInt']>;
    newOrdersFilled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodVolume?: InputMaybe<Scalars['BigInt']>;
    newPodVolume_gt?: InputMaybe<Scalars['BigInt']>;
    newPodVolume_gte?: InputMaybe<Scalars['BigInt']>;
    newPodVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodVolume_lt?: InputMaybe<Scalars['BigInt']>;
    newPodVolume_lte?: InputMaybe<Scalars['BigInt']>;
    newPodVolume_not?: InputMaybe<Scalars['BigInt']>;
    newPodVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsAvailable?: InputMaybe<Scalars['BigInt']>;
    newPodsAvailable_gt?: InputMaybe<Scalars['BigInt']>;
    newPodsAvailable_gte?: InputMaybe<Scalars['BigInt']>;
    newPodsAvailable_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsAvailable_lt?: InputMaybe<Scalars['BigInt']>;
    newPodsAvailable_lte?: InputMaybe<Scalars['BigInt']>;
    newPodsAvailable_not?: InputMaybe<Scalars['BigInt']>;
    newPodsAvailable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsCancelled?: InputMaybe<Scalars['BigInt']>;
    newPodsCancelled_gt?: InputMaybe<Scalars['BigInt']>;
    newPodsCancelled_gte?: InputMaybe<Scalars['BigInt']>;
    newPodsCancelled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsCancelled_lt?: InputMaybe<Scalars['BigInt']>;
    newPodsCancelled_lte?: InputMaybe<Scalars['BigInt']>;
    newPodsCancelled_not?: InputMaybe<Scalars['BigInt']>;
    newPodsCancelled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsExpired?: InputMaybe<Scalars['BigInt']>;
    newPodsExpired_gt?: InputMaybe<Scalars['BigInt']>;
    newPodsExpired_gte?: InputMaybe<Scalars['BigInt']>;
    newPodsExpired_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsExpired_lt?: InputMaybe<Scalars['BigInt']>;
    newPodsExpired_lte?: InputMaybe<Scalars['BigInt']>;
    newPodsExpired_not?: InputMaybe<Scalars['BigInt']>;
    newPodsExpired_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsFilled?: InputMaybe<Scalars['BigInt']>;
    newPodsFilled_gt?: InputMaybe<Scalars['BigInt']>;
    newPodsFilled_gte?: InputMaybe<Scalars['BigInt']>;
    newPodsFilled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsFilled_lt?: InputMaybe<Scalars['BigInt']>;
    newPodsFilled_lte?: InputMaybe<Scalars['BigInt']>;
    newPodsFilled_not?: InputMaybe<Scalars['BigInt']>;
    newPodsFilled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsListed?: InputMaybe<Scalars['BigInt']>;
    newPodsListed_gt?: InputMaybe<Scalars['BigInt']>;
    newPodsListed_gte?: InputMaybe<Scalars['BigInt']>;
    newPodsListed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newPodsListed_lt?: InputMaybe<Scalars['BigInt']>;
    newPodsListed_lte?: InputMaybe<Scalars['BigInt']>;
    newPodsListed_not?: InputMaybe<Scalars['BigInt']>;
    newPodsListed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    podMarketplace?: InputMaybe<Scalars['String']>;
    podMarketplace_?: InputMaybe<PodMarketplace_Filter>;
    podMarketplace_contains?: InputMaybe<Scalars['String']>;
    podMarketplace_contains_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_ends_with?: InputMaybe<Scalars['String']>;
    podMarketplace_ends_with_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_gt?: InputMaybe<Scalars['String']>;
    podMarketplace_gte?: InputMaybe<Scalars['String']>;
    podMarketplace_in?: InputMaybe<Array<Scalars['String']>>;
    podMarketplace_lt?: InputMaybe<Scalars['String']>;
    podMarketplace_lte?: InputMaybe<Scalars['String']>;
    podMarketplace_not?: InputMaybe<Scalars['String']>;
    podMarketplace_not_contains?: InputMaybe<Scalars['String']>;
    podMarketplace_not_contains_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_not_ends_with?: InputMaybe<Scalars['String']>;
    podMarketplace_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_not_in?: InputMaybe<Array<Scalars['String']>>;
    podMarketplace_not_starts_with?: InputMaybe<Scalars['String']>;
    podMarketplace_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    podMarketplace_starts_with?: InputMaybe<Scalars['String']>;
    podMarketplace_starts_with_nocase?: InputMaybe<Scalars['String']>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBeanVolume?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_gt?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_gte?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBeanVolume_lt?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_lte?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_not?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersCancelled?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_gt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_gte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersCancelled_lt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_lte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_not?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersCreated?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_gt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_gte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersCreated_lt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_lte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_not?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersFilled?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_gt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_gte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersFilled_lt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_lte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_not?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodVolume?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodVolume_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_not?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsAvailable?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsAvailable_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsCancelled?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsCancelled_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsExpired?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsExpired_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsFilled?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsFilled_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsListed?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsListed_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum PodMarketplaceHourlySnapshot_OrderBy {
    BlockNumber = "blockNumber",
    Id = "id",
    NewBeanVolume = "newBeanVolume",
    NewOrdersCancelled = "newOrdersCancelled",
    NewOrdersCreated = "newOrdersCreated",
    NewOrdersFilled = "newOrdersFilled",
    NewPodVolume = "newPodVolume",
    NewPodsAvailable = "newPodsAvailable",
    NewPodsCancelled = "newPodsCancelled",
    NewPodsExpired = "newPodsExpired",
    NewPodsFilled = "newPodsFilled",
    NewPodsListed = "newPodsListed",
    PodMarketplace = "podMarketplace",
    Season = "season",
    Timestamp = "timestamp",
    TotalBeanVolume = "totalBeanVolume",
    TotalOrdersCancelled = "totalOrdersCancelled",
    TotalOrdersCreated = "totalOrdersCreated",
    TotalOrdersFilled = "totalOrdersFilled",
    TotalPodVolume = "totalPodVolume",
    TotalPodsAvailable = "totalPodsAvailable",
    TotalPodsCancelled = "totalPodsCancelled",
    TotalPodsExpired = "totalPodsExpired",
    TotalPodsFilled = "totalPodsFilled",
    TotalPodsListed = "totalPodsListed"
}
export declare type PodMarketplace_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    dailySnapshots_?: InputMaybe<PodMarketplaceDailySnapshot_Filter>;
    fills_?: InputMaybe<PodFill_Filter>;
    hourlySnapshots_?: InputMaybe<PodMarketplaceHourlySnapshot_Filter>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    listingIndexes?: InputMaybe<Array<Scalars['BigInt']>>;
    listingIndexes_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    listingIndexes_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    listingIndexes_not?: InputMaybe<Array<Scalars['BigInt']>>;
    listingIndexes_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    listingIndexes_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    orders?: InputMaybe<Array<Scalars['String']>>;
    orders_?: InputMaybe<PodOrder_Filter>;
    orders_contains?: InputMaybe<Array<Scalars['String']>>;
    orders_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    orders_not?: InputMaybe<Array<Scalars['String']>>;
    orders_not_contains?: InputMaybe<Array<Scalars['String']>>;
    orders_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalBeanVolume?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_gt?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_gte?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBeanVolume_lt?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_lte?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_not?: InputMaybe<Scalars['BigInt']>;
    totalBeanVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersCancelled?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_gt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_gte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersCancelled_lt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_lte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_not?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCancelled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersCreated?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_gt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_gte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersCreated_lt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_lte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_not?: InputMaybe<Scalars['BigInt']>;
    totalOrdersCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersFilled?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_gt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_gte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalOrdersFilled_lt?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_lte?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_not?: InputMaybe<Scalars['BigInt']>;
    totalOrdersFilled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodVolume?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodVolume_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_not?: InputMaybe<Scalars['BigInt']>;
    totalPodVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsAvailable?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsAvailable_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsAvailable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsCancelled?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsCancelled_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsCancelled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsExpired?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsExpired_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsExpired_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsFilled?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsFilled_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsFilled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsListed?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_gt?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_gte?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPodsListed_lt?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_lte?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_not?: InputMaybe<Scalars['BigInt']>;
    totalPodsListed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum PodMarketplace_OrderBy {
    DailySnapshots = "dailySnapshots",
    Fills = "fills",
    HourlySnapshots = "hourlySnapshots",
    Id = "id",
    ListingIndexes = "listingIndexes",
    Orders = "orders",
    Season = "season",
    TotalBeanVolume = "totalBeanVolume",
    TotalOrdersCancelled = "totalOrdersCancelled",
    TotalOrdersCreated = "totalOrdersCreated",
    TotalOrdersFilled = "totalOrdersFilled",
    TotalPodVolume = "totalPodVolume",
    TotalPodsAvailable = "totalPodsAvailable",
    TotalPodsCancelled = "totalPodsCancelled",
    TotalPodsExpired = "totalPodsExpired",
    TotalPodsFilled = "totalPodsFilled",
    TotalPodsListed = "totalPodsListed"
}
export declare type PodOrder = {
    __typename?: 'PodOrder';
    amount: Scalars['BigInt'];
    createdAt: Scalars['BigInt'];
    farmer: Farmer;
    fill?: Maybe<PodFill>;
    filledAmount: Scalars['BigInt'];
    /**  Historical ID for joins */
    historyID: Scalars['String'];
    id: Scalars['ID'];
    maxPlaceInLine: Scalars['BigInt'];
    pricePerPod: Scalars['Int'];
    status: MarketStatus;
    updatedAt: Scalars['BigInt'];
};
export declare type PodOrderCancelled = MarketplaceEvent & {
    __typename?: 'PodOrderCancelled';
    /**  Account cancelling listing */
    account: Scalars['String'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /**  Historical ID for joins */
    historyID: Scalars['String'];
    /** podOrderCancelled-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  ID of order cancelled */
    orderId: Scalars['String'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
};
export declare type PodOrderCancelled_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    account?: InputMaybe<Scalars['String']>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID?: InputMaybe<Scalars['String']>;
    historyID_contains?: InputMaybe<Scalars['String']>;
    historyID_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_ends_with?: InputMaybe<Scalars['String']>;
    historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_gt?: InputMaybe<Scalars['String']>;
    historyID_gte?: InputMaybe<Scalars['String']>;
    historyID_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_lt?: InputMaybe<Scalars['String']>;
    historyID_lte?: InputMaybe<Scalars['String']>;
    historyID_not?: InputMaybe<Scalars['String']>;
    historyID_not_contains?: InputMaybe<Scalars['String']>;
    historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_not_starts_with?: InputMaybe<Scalars['String']>;
    historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_starts_with?: InputMaybe<Scalars['String']>;
    historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    orderId?: InputMaybe<Scalars['String']>;
    orderId_contains?: InputMaybe<Scalars['String']>;
    orderId_contains_nocase?: InputMaybe<Scalars['String']>;
    orderId_ends_with?: InputMaybe<Scalars['String']>;
    orderId_ends_with_nocase?: InputMaybe<Scalars['String']>;
    orderId_gt?: InputMaybe<Scalars['String']>;
    orderId_gte?: InputMaybe<Scalars['String']>;
    orderId_in?: InputMaybe<Array<Scalars['String']>>;
    orderId_lt?: InputMaybe<Scalars['String']>;
    orderId_lte?: InputMaybe<Scalars['String']>;
    orderId_not?: InputMaybe<Scalars['String']>;
    orderId_not_contains?: InputMaybe<Scalars['String']>;
    orderId_not_contains_nocase?: InputMaybe<Scalars['String']>;
    orderId_not_ends_with?: InputMaybe<Scalars['String']>;
    orderId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    orderId_not_in?: InputMaybe<Array<Scalars['String']>>;
    orderId_not_starts_with?: InputMaybe<Scalars['String']>;
    orderId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    orderId_starts_with?: InputMaybe<Scalars['String']>;
    orderId_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum PodOrderCancelled_OrderBy {
    Account = "account",
    BlockNumber = "blockNumber",
    Hash = "hash",
    HistoryId = "historyID",
    Id = "id",
    LogIndex = "logIndex",
    OrderId = "orderId",
    Protocol = "protocol",
    Timestamp = "timestamp"
}
export declare type PodOrderCreated = MarketplaceEvent & {
    __typename?: 'PodOrderCreated';
    /**  Account creating the listing */
    account: Scalars['String'];
    /** Amount of pods listed */
    amount: Scalars['BigInt'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /**  Historical ID for joins */
    historyID: Scalars['String'];
    /** podOrderCreated-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /** Max place in line */
    maxPlaceInLine: Scalars['BigInt'];
    /**  ID of the pod order */
    orderId: Scalars['String'];
    /** Price per pod */
    pricePerPod: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
};
export declare type PodOrderCreated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    account?: InputMaybe<Scalars['String']>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID?: InputMaybe<Scalars['String']>;
    historyID_contains?: InputMaybe<Scalars['String']>;
    historyID_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_ends_with?: InputMaybe<Scalars['String']>;
    historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_gt?: InputMaybe<Scalars['String']>;
    historyID_gte?: InputMaybe<Scalars['String']>;
    historyID_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_lt?: InputMaybe<Scalars['String']>;
    historyID_lte?: InputMaybe<Scalars['String']>;
    historyID_not?: InputMaybe<Scalars['String']>;
    historyID_not_contains?: InputMaybe<Scalars['String']>;
    historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_not_starts_with?: InputMaybe<Scalars['String']>;
    historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_starts_with?: InputMaybe<Scalars['String']>;
    historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    maxPlaceInLine?: InputMaybe<Scalars['BigInt']>;
    maxPlaceInLine_gt?: InputMaybe<Scalars['BigInt']>;
    maxPlaceInLine_gte?: InputMaybe<Scalars['BigInt']>;
    maxPlaceInLine_in?: InputMaybe<Array<Scalars['BigInt']>>;
    maxPlaceInLine_lt?: InputMaybe<Scalars['BigInt']>;
    maxPlaceInLine_lte?: InputMaybe<Scalars['BigInt']>;
    maxPlaceInLine_not?: InputMaybe<Scalars['BigInt']>;
    maxPlaceInLine_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    orderId?: InputMaybe<Scalars['String']>;
    orderId_contains?: InputMaybe<Scalars['String']>;
    orderId_contains_nocase?: InputMaybe<Scalars['String']>;
    orderId_ends_with?: InputMaybe<Scalars['String']>;
    orderId_ends_with_nocase?: InputMaybe<Scalars['String']>;
    orderId_gt?: InputMaybe<Scalars['String']>;
    orderId_gte?: InputMaybe<Scalars['String']>;
    orderId_in?: InputMaybe<Array<Scalars['String']>>;
    orderId_lt?: InputMaybe<Scalars['String']>;
    orderId_lte?: InputMaybe<Scalars['String']>;
    orderId_not?: InputMaybe<Scalars['String']>;
    orderId_not_contains?: InputMaybe<Scalars['String']>;
    orderId_not_contains_nocase?: InputMaybe<Scalars['String']>;
    orderId_not_ends_with?: InputMaybe<Scalars['String']>;
    orderId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    orderId_not_in?: InputMaybe<Array<Scalars['String']>>;
    orderId_not_starts_with?: InputMaybe<Scalars['String']>;
    orderId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    orderId_starts_with?: InputMaybe<Scalars['String']>;
    orderId_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pricePerPod?: InputMaybe<Scalars['Int']>;
    pricePerPod_gt?: InputMaybe<Scalars['Int']>;
    pricePerPod_gte?: InputMaybe<Scalars['Int']>;
    pricePerPod_in?: InputMaybe<Array<Scalars['Int']>>;
    pricePerPod_lt?: InputMaybe<Scalars['Int']>;
    pricePerPod_lte?: InputMaybe<Scalars['Int']>;
    pricePerPod_not?: InputMaybe<Scalars['Int']>;
    pricePerPod_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum PodOrderCreated_OrderBy {
    Account = "account",
    Amount = "amount",
    BlockNumber = "blockNumber",
    Hash = "hash",
    HistoryId = "historyID",
    Id = "id",
    LogIndex = "logIndex",
    MaxPlaceInLine = "maxPlaceInLine",
    OrderId = "orderId",
    PricePerPod = "pricePerPod",
    Protocol = "protocol",
    Timestamp = "timestamp"
}
export declare type PodOrderFilled = MarketplaceEvent & {
    __typename?: 'PodOrderFilled';
    /** Number of pods transferred */
    amount: Scalars['BigInt'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /** Account selling pods */
    from: Scalars['String'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /**  Historical ID for joins */
    historyID: Scalars['String'];
    /** podOrderFilled-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /** Index of the plot transferred */
    index: Scalars['BigInt'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /** Start of the plot transferred */
    start: Scalars['BigInt'];
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
    /** Account buying pods */
    to: Scalars['String'];
};
export declare type PodOrderFilled_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    from?: InputMaybe<Scalars['String']>;
    from_contains?: InputMaybe<Scalars['String']>;
    from_contains_nocase?: InputMaybe<Scalars['String']>;
    from_ends_with?: InputMaybe<Scalars['String']>;
    from_ends_with_nocase?: InputMaybe<Scalars['String']>;
    from_gt?: InputMaybe<Scalars['String']>;
    from_gte?: InputMaybe<Scalars['String']>;
    from_in?: InputMaybe<Array<Scalars['String']>>;
    from_lt?: InputMaybe<Scalars['String']>;
    from_lte?: InputMaybe<Scalars['String']>;
    from_not?: InputMaybe<Scalars['String']>;
    from_not_contains?: InputMaybe<Scalars['String']>;
    from_not_contains_nocase?: InputMaybe<Scalars['String']>;
    from_not_ends_with?: InputMaybe<Scalars['String']>;
    from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    from_not_in?: InputMaybe<Array<Scalars['String']>>;
    from_not_starts_with?: InputMaybe<Scalars['String']>;
    from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    from_starts_with?: InputMaybe<Scalars['String']>;
    from_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID?: InputMaybe<Scalars['String']>;
    historyID_contains?: InputMaybe<Scalars['String']>;
    historyID_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_ends_with?: InputMaybe<Scalars['String']>;
    historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_gt?: InputMaybe<Scalars['String']>;
    historyID_gte?: InputMaybe<Scalars['String']>;
    historyID_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_lt?: InputMaybe<Scalars['String']>;
    historyID_lte?: InputMaybe<Scalars['String']>;
    historyID_not?: InputMaybe<Scalars['String']>;
    historyID_not_contains?: InputMaybe<Scalars['String']>;
    historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_not_starts_with?: InputMaybe<Scalars['String']>;
    historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_starts_with?: InputMaybe<Scalars['String']>;
    historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    index?: InputMaybe<Scalars['BigInt']>;
    index_gt?: InputMaybe<Scalars['BigInt']>;
    index_gte?: InputMaybe<Scalars['BigInt']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']>>;
    index_lt?: InputMaybe<Scalars['BigInt']>;
    index_lte?: InputMaybe<Scalars['BigInt']>;
    index_not?: InputMaybe<Scalars['BigInt']>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    start?: InputMaybe<Scalars['BigInt']>;
    start_gt?: InputMaybe<Scalars['BigInt']>;
    start_gte?: InputMaybe<Scalars['BigInt']>;
    start_in?: InputMaybe<Array<Scalars['BigInt']>>;
    start_lt?: InputMaybe<Scalars['BigInt']>;
    start_lte?: InputMaybe<Scalars['BigInt']>;
    start_not?: InputMaybe<Scalars['BigInt']>;
    start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    to?: InputMaybe<Scalars['String']>;
    to_contains?: InputMaybe<Scalars['String']>;
    to_contains_nocase?: InputMaybe<Scalars['String']>;
    to_ends_with?: InputMaybe<Scalars['String']>;
    to_ends_with_nocase?: InputMaybe<Scalars['String']>;
    to_gt?: InputMaybe<Scalars['String']>;
    to_gte?: InputMaybe<Scalars['String']>;
    to_in?: InputMaybe<Array<Scalars['String']>>;
    to_lt?: InputMaybe<Scalars['String']>;
    to_lte?: InputMaybe<Scalars['String']>;
    to_not?: InputMaybe<Scalars['String']>;
    to_not_contains?: InputMaybe<Scalars['String']>;
    to_not_contains_nocase?: InputMaybe<Scalars['String']>;
    to_not_ends_with?: InputMaybe<Scalars['String']>;
    to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    to_not_in?: InputMaybe<Array<Scalars['String']>>;
    to_not_starts_with?: InputMaybe<Scalars['String']>;
    to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    to_starts_with?: InputMaybe<Scalars['String']>;
    to_starts_with_nocase?: InputMaybe<Scalars['String']>;
};
export declare enum PodOrderFilled_OrderBy {
    Amount = "amount",
    BlockNumber = "blockNumber",
    From = "from",
    Hash = "hash",
    HistoryId = "historyID",
    Id = "id",
    Index = "index",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Start = "start",
    Timestamp = "timestamp",
    To = "to"
}
export declare type PodOrder_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gte?: InputMaybe<Scalars['BigInt']>;
    createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt_lt?: InputMaybe<Scalars['BigInt']>;
    createdAt_lte?: InputMaybe<Scalars['BigInt']>;
    createdAt_not?: InputMaybe<Scalars['BigInt']>;
    createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    farmer?: InputMaybe<Scalars['String']>;
    farmer_?: InputMaybe<Farmer_Filter>;
    farmer_contains?: InputMaybe<Scalars['String']>;
    farmer_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_ends_with?: InputMaybe<Scalars['String']>;
    farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_gt?: InputMaybe<Scalars['String']>;
    farmer_gte?: InputMaybe<Scalars['String']>;
    farmer_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_lt?: InputMaybe<Scalars['String']>;
    farmer_lte?: InputMaybe<Scalars['String']>;
    farmer_not?: InputMaybe<Scalars['String']>;
    farmer_not_contains?: InputMaybe<Scalars['String']>;
    farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_not_starts_with?: InputMaybe<Scalars['String']>;
    farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_starts_with?: InputMaybe<Scalars['String']>;
    farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
    fill?: InputMaybe<Scalars['String']>;
    fill_?: InputMaybe<PodFill_Filter>;
    fill_contains?: InputMaybe<Scalars['String']>;
    fill_contains_nocase?: InputMaybe<Scalars['String']>;
    fill_ends_with?: InputMaybe<Scalars['String']>;
    fill_ends_with_nocase?: InputMaybe<Scalars['String']>;
    fill_gt?: InputMaybe<Scalars['String']>;
    fill_gte?: InputMaybe<Scalars['String']>;
    fill_in?: InputMaybe<Array<Scalars['String']>>;
    fill_lt?: InputMaybe<Scalars['String']>;
    fill_lte?: InputMaybe<Scalars['String']>;
    fill_not?: InputMaybe<Scalars['String']>;
    fill_not_contains?: InputMaybe<Scalars['String']>;
    fill_not_contains_nocase?: InputMaybe<Scalars['String']>;
    fill_not_ends_with?: InputMaybe<Scalars['String']>;
    fill_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    fill_not_in?: InputMaybe<Array<Scalars['String']>>;
    fill_not_starts_with?: InputMaybe<Scalars['String']>;
    fill_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    fill_starts_with?: InputMaybe<Scalars['String']>;
    fill_starts_with_nocase?: InputMaybe<Scalars['String']>;
    filledAmount?: InputMaybe<Scalars['BigInt']>;
    filledAmount_gt?: InputMaybe<Scalars['BigInt']>;
    filledAmount_gte?: InputMaybe<Scalars['BigInt']>;
    filledAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    filledAmount_lt?: InputMaybe<Scalars['BigInt']>;
    filledAmount_lte?: InputMaybe<Scalars['BigInt']>;
    filledAmount_not?: InputMaybe<Scalars['BigInt']>;
    filledAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    historyID?: InputMaybe<Scalars['String']>;
    historyID_contains?: InputMaybe<Scalars['String']>;
    historyID_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_ends_with?: InputMaybe<Scalars['String']>;
    historyID_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_gt?: InputMaybe<Scalars['String']>;
    historyID_gte?: InputMaybe<Scalars['String']>;
    historyID_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_lt?: InputMaybe<Scalars['String']>;
    historyID_lte?: InputMaybe<Scalars['String']>;
    historyID_not?: InputMaybe<Scalars['String']>;
    historyID_not_contains?: InputMaybe<Scalars['String']>;
    historyID_not_contains_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with?: InputMaybe<Scalars['String']>;
    historyID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_not_in?: InputMaybe<Array<Scalars['String']>>;
    historyID_not_starts_with?: InputMaybe<Scalars['String']>;
    historyID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    historyID_starts_with?: InputMaybe<Scalars['String']>;
    historyID_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    maxPlaceInLine?: InputMaybe<Scalars['BigInt']>;
    maxPlaceInLine_gt?: InputMaybe<Scalars['BigInt']>;
    maxPlaceInLine_gte?: InputMaybe<Scalars['BigInt']>;
    maxPlaceInLine_in?: InputMaybe<Array<Scalars['BigInt']>>;
    maxPlaceInLine_lt?: InputMaybe<Scalars['BigInt']>;
    maxPlaceInLine_lte?: InputMaybe<Scalars['BigInt']>;
    maxPlaceInLine_not?: InputMaybe<Scalars['BigInt']>;
    maxPlaceInLine_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    pricePerPod?: InputMaybe<Scalars['Int']>;
    pricePerPod_gt?: InputMaybe<Scalars['Int']>;
    pricePerPod_gte?: InputMaybe<Scalars['Int']>;
    pricePerPod_in?: InputMaybe<Array<Scalars['Int']>>;
    pricePerPod_lt?: InputMaybe<Scalars['Int']>;
    pricePerPod_lte?: InputMaybe<Scalars['Int']>;
    pricePerPod_not?: InputMaybe<Scalars['Int']>;
    pricePerPod_not_in?: InputMaybe<Array<Scalars['Int']>>;
    status?: InputMaybe<MarketStatus>;
    status_in?: InputMaybe<Array<MarketStatus>>;
    status_not?: InputMaybe<MarketStatus>;
    status_not_in?: InputMaybe<Array<MarketStatus>>;
    updatedAt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum PodOrder_OrderBy {
    Amount = "amount",
    CreatedAt = "createdAt",
    Farmer = "farmer",
    Fill = "fill",
    FilledAmount = "filledAmount",
    HistoryId = "historyID",
    Id = "id",
    MaxPlaceInLine = "maxPlaceInLine",
    PricePerPod = "pricePerPod",
    Status = "status",
    UpdatedAt = "updatedAt"
}
export declare type PodTransfer = FieldEvent & {
    __typename?: 'PodTransfer';
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Address that sent the pods  */
    from: Scalars['String'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /**  podtransfer-{ Transaction hash }-{ Log index }  */
    id: Scalars['ID'];
    /**  Index of the pods sent */
    index: Scalars['BigInt'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  Total pods being sent */
    pods: Scalars['BigInt'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
    /**  Address that received the pods  */
    to: Scalars['String'];
};
export declare type PodTransfer_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    from?: InputMaybe<Scalars['String']>;
    from_contains?: InputMaybe<Scalars['String']>;
    from_contains_nocase?: InputMaybe<Scalars['String']>;
    from_ends_with?: InputMaybe<Scalars['String']>;
    from_ends_with_nocase?: InputMaybe<Scalars['String']>;
    from_gt?: InputMaybe<Scalars['String']>;
    from_gte?: InputMaybe<Scalars['String']>;
    from_in?: InputMaybe<Array<Scalars['String']>>;
    from_lt?: InputMaybe<Scalars['String']>;
    from_lte?: InputMaybe<Scalars['String']>;
    from_not?: InputMaybe<Scalars['String']>;
    from_not_contains?: InputMaybe<Scalars['String']>;
    from_not_contains_nocase?: InputMaybe<Scalars['String']>;
    from_not_ends_with?: InputMaybe<Scalars['String']>;
    from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    from_not_in?: InputMaybe<Array<Scalars['String']>>;
    from_not_starts_with?: InputMaybe<Scalars['String']>;
    from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    from_starts_with?: InputMaybe<Scalars['String']>;
    from_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    index?: InputMaybe<Scalars['BigInt']>;
    index_gt?: InputMaybe<Scalars['BigInt']>;
    index_gte?: InputMaybe<Scalars['BigInt']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']>>;
    index_lt?: InputMaybe<Scalars['BigInt']>;
    index_lte?: InputMaybe<Scalars['BigInt']>;
    index_not?: InputMaybe<Scalars['BigInt']>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    pods?: InputMaybe<Scalars['BigInt']>;
    pods_gt?: InputMaybe<Scalars['BigInt']>;
    pods_gte?: InputMaybe<Scalars['BigInt']>;
    pods_in?: InputMaybe<Array<Scalars['BigInt']>>;
    pods_lt?: InputMaybe<Scalars['BigInt']>;
    pods_lte?: InputMaybe<Scalars['BigInt']>;
    pods_not?: InputMaybe<Scalars['BigInt']>;
    pods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    to?: InputMaybe<Scalars['String']>;
    to_contains?: InputMaybe<Scalars['String']>;
    to_contains_nocase?: InputMaybe<Scalars['String']>;
    to_ends_with?: InputMaybe<Scalars['String']>;
    to_ends_with_nocase?: InputMaybe<Scalars['String']>;
    to_gt?: InputMaybe<Scalars['String']>;
    to_gte?: InputMaybe<Scalars['String']>;
    to_in?: InputMaybe<Array<Scalars['String']>>;
    to_lt?: InputMaybe<Scalars['String']>;
    to_lte?: InputMaybe<Scalars['String']>;
    to_not?: InputMaybe<Scalars['String']>;
    to_not_contains?: InputMaybe<Scalars['String']>;
    to_not_contains_nocase?: InputMaybe<Scalars['String']>;
    to_not_ends_with?: InputMaybe<Scalars['String']>;
    to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    to_not_in?: InputMaybe<Array<Scalars['String']>>;
    to_not_starts_with?: InputMaybe<Scalars['String']>;
    to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    to_starts_with?: InputMaybe<Scalars['String']>;
    to_starts_with_nocase?: InputMaybe<Scalars['String']>;
};
export declare enum PodTransfer_OrderBy {
    BlockNumber = "blockNumber",
    From = "from",
    Hash = "hash",
    Id = "id",
    Index = "index",
    LogIndex = "logIndex",
    Pods = "pods",
    Protocol = "protocol",
    Timestamp = "timestamp",
    To = "to"
}
export declare enum ProtocolType {
    Bridge = "BRIDGE",
    Exchange = "EXCHANGE",
    Generic = "GENERIC",
    Lending = "LENDING",
    Yield = "YIELD"
}
export declare type Query = {
    __typename?: 'Query';
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
    addDeposit?: Maybe<AddDeposit>;
    addDeposits: Array<AddDeposit>;
    beanstalk?: Maybe<Beanstalk>;
    beanstalks: Array<Beanstalk>;
    chop?: Maybe<Chop>;
    chops: Array<Chop>;
    dewhitelistToken?: Maybe<DewhitelistToken>;
    dewhitelistTokens: Array<DewhitelistToken>;
    event?: Maybe<Event>;
    events: Array<Event>;
    farmer?: Maybe<Farmer>;
    farmers: Array<Farmer>;
    fertilizer?: Maybe<Fertilizer>;
    fertilizerBalance?: Maybe<FertilizerBalance>;
    fertilizerBalances: Array<FertilizerBalance>;
    fertilizerToken?: Maybe<FertilizerToken>;
    fertilizerTokens: Array<FertilizerToken>;
    fertilizers: Array<Fertilizer>;
    field?: Maybe<Field>;
    fieldDailySnapshot?: Maybe<FieldDailySnapshot>;
    fieldDailySnapshots: Array<FieldDailySnapshot>;
    fieldEvent?: Maybe<FieldEvent>;
    fieldEvents: Array<FieldEvent>;
    fieldHourlySnapshot?: Maybe<FieldHourlySnapshot>;
    fieldHourlySnapshots: Array<FieldHourlySnapshot>;
    fields: Array<Field>;
    harvest?: Maybe<Harvest>;
    harvests: Array<Harvest>;
    incentive?: Maybe<Incentive>;
    incentives: Array<Incentive>;
    marketplaceEvent?: Maybe<MarketplaceEvent>;
    marketplaceEvents: Array<MarketplaceEvent>;
    metapoolOracle?: Maybe<MetapoolOracle>;
    metapoolOracles: Array<MetapoolOracle>;
    plot?: Maybe<Plot>;
    plots: Array<Plot>;
    podFill?: Maybe<PodFill>;
    podFills: Array<PodFill>;
    podListing?: Maybe<PodListing>;
    podListingCancelled?: Maybe<PodListingCancelled>;
    podListingCancelleds: Array<PodListingCancelled>;
    podListingCreated?: Maybe<PodListingCreated>;
    podListingCreateds: Array<PodListingCreated>;
    podListingFilled?: Maybe<PodListingFilled>;
    podListingFilleds: Array<PodListingFilled>;
    podListings: Array<PodListing>;
    podMarketplace?: Maybe<PodMarketplace>;
    podMarketplaceDailySnapshot?: Maybe<PodMarketplaceDailySnapshot>;
    podMarketplaceDailySnapshots: Array<PodMarketplaceDailySnapshot>;
    podMarketplaceHourlySnapshot?: Maybe<PodMarketplaceHourlySnapshot>;
    podMarketplaceHourlySnapshots: Array<PodMarketplaceHourlySnapshot>;
    podMarketplaces: Array<PodMarketplace>;
    podOrder?: Maybe<PodOrder>;
    podOrderCancelled?: Maybe<PodOrderCancelled>;
    podOrderCancelleds: Array<PodOrderCancelled>;
    podOrderCreated?: Maybe<PodOrderCreated>;
    podOrderCreateds: Array<PodOrderCreated>;
    podOrderFilled?: Maybe<PodOrderFilled>;
    podOrderFilleds: Array<PodOrderFilled>;
    podOrders: Array<PodOrder>;
    podTransfer?: Maybe<PodTransfer>;
    podTransfers: Array<PodTransfer>;
    removeDeposit?: Maybe<RemoveDeposit>;
    removeDeposits: Array<RemoveDeposit>;
    reward?: Maybe<Reward>;
    rewardToken?: Maybe<RewardToken>;
    rewardTokens: Array<RewardToken>;
    rewards: Array<Reward>;
    season?: Maybe<Season>;
    seasons: Array<Season>;
    seedChange?: Maybe<SeedChange>;
    seedChanges: Array<SeedChange>;
    silo?: Maybe<Silo>;
    siloAsset?: Maybe<SiloAsset>;
    siloAssetDailySnapshot?: Maybe<SiloAssetDailySnapshot>;
    siloAssetDailySnapshots: Array<SiloAssetDailySnapshot>;
    siloAssetHourlySnapshot?: Maybe<SiloAssetHourlySnapshot>;
    siloAssetHourlySnapshots: Array<SiloAssetHourlySnapshot>;
    siloAssets: Array<SiloAsset>;
    siloDailySnapshot?: Maybe<SiloDailySnapshot>;
    siloDailySnapshots: Array<SiloDailySnapshot>;
    siloDeposit?: Maybe<SiloDeposit>;
    siloDeposits: Array<SiloDeposit>;
    siloEvent?: Maybe<SiloEvent>;
    siloEvents: Array<SiloEvent>;
    siloHourlySnapshot?: Maybe<SiloHourlySnapshot>;
    siloHourlySnapshots: Array<SiloHourlySnapshot>;
    siloWithdraw?: Maybe<SiloWithdraw>;
    siloWithdraws: Array<SiloWithdraw>;
    siloYield?: Maybe<SiloYield>;
    siloYields: Array<SiloYield>;
    silos: Array<Silo>;
    stalkChange?: Maybe<StalkChange>;
    stalkChanges: Array<StalkChange>;
    token?: Maybe<Token>;
    tokens: Array<Token>;
    transaction?: Maybe<Transaction>;
    transactions: Array<Transaction>;
    whitelistToken?: Maybe<WhitelistToken>;
    whitelistTokens: Array<WhitelistToken>;
};
export declare type Query_MetaArgs = {
    block?: InputMaybe<Block_Height>;
};
export declare type QueryAddDepositArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryAddDepositsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AddDeposit_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<AddDeposit_Filter>;
};
export declare type QueryBeanstalkArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryBeanstalksArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Beanstalk_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Beanstalk_Filter>;
};
export declare type QueryChopArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryChopsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Chop_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Chop_Filter>;
};
export declare type QueryDewhitelistTokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryDewhitelistTokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<DewhitelistToken_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<DewhitelistToken_Filter>;
};
export declare type QueryEventArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryEventsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Event_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Event_Filter>;
};
export declare type QueryFarmerArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryFarmersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Farmer_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Farmer_Filter>;
};
export declare type QueryFertilizerArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryFertilizerBalanceArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryFertilizerBalancesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FertilizerBalance_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<FertilizerBalance_Filter>;
};
export declare type QueryFertilizerTokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryFertilizerTokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FertilizerToken_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<FertilizerToken_Filter>;
};
export declare type QueryFertilizersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Fertilizer_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Fertilizer_Filter>;
};
export declare type QueryFieldArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryFieldDailySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryFieldDailySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FieldDailySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<FieldDailySnapshot_Filter>;
};
export declare type QueryFieldEventArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryFieldEventsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FieldEvent_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<FieldEvent_Filter>;
};
export declare type QueryFieldHourlySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryFieldHourlySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FieldHourlySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<FieldHourlySnapshot_Filter>;
};
export declare type QueryFieldsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Field_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Field_Filter>;
};
export declare type QueryHarvestArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryHarvestsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Harvest_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Harvest_Filter>;
};
export declare type QueryIncentiveArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryIncentivesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Incentive_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Incentive_Filter>;
};
export declare type QueryMarketplaceEventArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryMarketplaceEventsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketplaceEvent_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<MarketplaceEvent_Filter>;
};
export declare type QueryMetapoolOracleArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryMetapoolOraclesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MetapoolOracle_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<MetapoolOracle_Filter>;
};
export declare type QueryPlotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPlotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Plot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Plot_Filter>;
};
export declare type QueryPodFillArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPodFillsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodFill_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodFill_Filter>;
};
export declare type QueryPodListingArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPodListingCancelledArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPodListingCancelledsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodListingCancelled_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodListingCancelled_Filter>;
};
export declare type QueryPodListingCreatedArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPodListingCreatedsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodListingCreated_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodListingCreated_Filter>;
};
export declare type QueryPodListingFilledArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPodListingFilledsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodListingFilled_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodListingFilled_Filter>;
};
export declare type QueryPodListingsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodListing_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodListing_Filter>;
};
export declare type QueryPodMarketplaceArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPodMarketplaceDailySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPodMarketplaceDailySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodMarketplaceDailySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodMarketplaceDailySnapshot_Filter>;
};
export declare type QueryPodMarketplaceHourlySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPodMarketplaceHourlySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodMarketplaceHourlySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodMarketplaceHourlySnapshot_Filter>;
};
export declare type QueryPodMarketplacesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodMarketplace_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodMarketplace_Filter>;
};
export declare type QueryPodOrderArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPodOrderCancelledArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPodOrderCancelledsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodOrderCancelled_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodOrderCancelled_Filter>;
};
export declare type QueryPodOrderCreatedArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPodOrderCreatedsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodOrderCreated_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodOrderCreated_Filter>;
};
export declare type QueryPodOrderFilledArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPodOrderFilledsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodOrderFilled_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodOrderFilled_Filter>;
};
export declare type QueryPodOrdersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodOrder_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodOrder_Filter>;
};
export declare type QueryPodTransferArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryPodTransfersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodTransfer_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodTransfer_Filter>;
};
export declare type QueryRemoveDepositArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryRemoveDepositsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RemoveDeposit_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<RemoveDeposit_Filter>;
};
export declare type QueryRewardArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryRewardTokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryRewardTokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RewardToken_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<RewardToken_Filter>;
};
export declare type QueryRewardsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Reward_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Reward_Filter>;
};
export declare type QuerySeasonArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QuerySeasonsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Season_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Season_Filter>;
};
export declare type QuerySeedChangeArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QuerySeedChangesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SeedChange_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SeedChange_Filter>;
};
export declare type QuerySiloArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QuerySiloAssetArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QuerySiloAssetDailySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QuerySiloAssetDailySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloAssetDailySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloAssetDailySnapshot_Filter>;
};
export declare type QuerySiloAssetHourlySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QuerySiloAssetHourlySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloAssetHourlySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloAssetHourlySnapshot_Filter>;
};
export declare type QuerySiloAssetsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloAsset_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloAsset_Filter>;
};
export declare type QuerySiloDailySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QuerySiloDailySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloDailySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloDailySnapshot_Filter>;
};
export declare type QuerySiloDepositArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QuerySiloDepositsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloDeposit_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloDeposit_Filter>;
};
export declare type QuerySiloEventArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QuerySiloEventsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloEvent_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloEvent_Filter>;
};
export declare type QuerySiloHourlySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QuerySiloHourlySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloHourlySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloHourlySnapshot_Filter>;
};
export declare type QuerySiloWithdrawArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QuerySiloWithdrawsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloWithdraw_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloWithdraw_Filter>;
};
export declare type QuerySiloYieldArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QuerySiloYieldsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloYield_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloYield_Filter>;
};
export declare type QuerySilosArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Silo_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Silo_Filter>;
};
export declare type QueryStalkChangeArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryStalkChangesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<StalkChange_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<StalkChange_Filter>;
};
export declare type QueryTokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryTokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Token_Filter>;
};
export declare type QueryTransactionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryTransactionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Transaction_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Transaction_Filter>;
};
export declare type QueryWhitelistTokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type QueryWhitelistTokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WhitelistToken_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<WhitelistToken_Filter>;
};
export declare type RemoveDeposit = SiloEvent & {
    __typename?: 'RemoveDeposit';
    /**  Account removing deposit */
    account: Scalars['String'];
    /**  Amount of token removed  */
    amount: Scalars['BigInt'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /** removeDeposit-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Season of deposit removed  */
    season: Scalars['Int'];
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
    /**  Token removed */
    token: Scalars['String'];
};
export declare type RemoveDeposit_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    account?: InputMaybe<Scalars['String']>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    token?: InputMaybe<Scalars['String']>;
    token_contains?: InputMaybe<Scalars['String']>;
    token_contains_nocase?: InputMaybe<Scalars['String']>;
    token_ends_with?: InputMaybe<Scalars['String']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_gt?: InputMaybe<Scalars['String']>;
    token_gte?: InputMaybe<Scalars['String']>;
    token_in?: InputMaybe<Array<Scalars['String']>>;
    token_lt?: InputMaybe<Scalars['String']>;
    token_lte?: InputMaybe<Scalars['String']>;
    token_not?: InputMaybe<Scalars['String']>;
    token_not_contains?: InputMaybe<Scalars['String']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token_not_ends_with?: InputMaybe<Scalars['String']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_in?: InputMaybe<Array<Scalars['String']>>;
    token_not_starts_with?: InputMaybe<Scalars['String']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_starts_with?: InputMaybe<Scalars['String']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};
export declare enum RemoveDeposit_OrderBy {
    Account = "account",
    Amount = "amount",
    BlockNumber = "blockNumber",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Season = "season",
    Timestamp = "timestamp",
    Token = "token"
}
export declare type Reward = SiloEvent & {
    __typename?: 'Reward';
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /** reward-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Season of reward  */
    season: Scalars['Int'];
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
    /**  Amount minted to fertilizer */
    toFertilizer: Scalars['BigInt'];
    /**  Amount minted to pod line */
    toField: Scalars['BigInt'];
    /**  Amount minted to silo */
    toSilo: Scalars['BigInt'];
};
export declare type RewardToken = {
    __typename?: 'RewardToken';
    /**  { Reward token type }-{ Smart contract address of the reward token }  */
    id: Scalars['ID'];
    /**  Reference to the actual token  */
    token: Token;
    /**  The type of the reward token  */
    type: RewardTokenType;
};
export declare enum RewardTokenType {
    /**  For reward tokens awarded to borrowers  */
    Borrow = "BORROW",
    /**  For reward tokens awarded to LPs/lenders  */
    Deposit = "DEPOSIT"
}
export declare type RewardToken_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    token?: InputMaybe<Scalars['String']>;
    token_?: InputMaybe<Token_Filter>;
    token_contains?: InputMaybe<Scalars['String']>;
    token_contains_nocase?: InputMaybe<Scalars['String']>;
    token_ends_with?: InputMaybe<Scalars['String']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_gt?: InputMaybe<Scalars['String']>;
    token_gte?: InputMaybe<Scalars['String']>;
    token_in?: InputMaybe<Array<Scalars['String']>>;
    token_lt?: InputMaybe<Scalars['String']>;
    token_lte?: InputMaybe<Scalars['String']>;
    token_not?: InputMaybe<Scalars['String']>;
    token_not_contains?: InputMaybe<Scalars['String']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token_not_ends_with?: InputMaybe<Scalars['String']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_in?: InputMaybe<Array<Scalars['String']>>;
    token_not_starts_with?: InputMaybe<Scalars['String']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_starts_with?: InputMaybe<Scalars['String']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<RewardTokenType>;
    type_in?: InputMaybe<Array<RewardTokenType>>;
    type_not?: InputMaybe<RewardTokenType>;
    type_not_in?: InputMaybe<Array<RewardTokenType>>;
};
export declare enum RewardToken_OrderBy {
    Id = "id",
    Token = "token",
    Type = "type"
}
export declare type Reward_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    toFertilizer?: InputMaybe<Scalars['BigInt']>;
    toFertilizer_gt?: InputMaybe<Scalars['BigInt']>;
    toFertilizer_gte?: InputMaybe<Scalars['BigInt']>;
    toFertilizer_in?: InputMaybe<Array<Scalars['BigInt']>>;
    toFertilizer_lt?: InputMaybe<Scalars['BigInt']>;
    toFertilizer_lte?: InputMaybe<Scalars['BigInt']>;
    toFertilizer_not?: InputMaybe<Scalars['BigInt']>;
    toFertilizer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    toField?: InputMaybe<Scalars['BigInt']>;
    toField_gt?: InputMaybe<Scalars['BigInt']>;
    toField_gte?: InputMaybe<Scalars['BigInt']>;
    toField_in?: InputMaybe<Array<Scalars['BigInt']>>;
    toField_lt?: InputMaybe<Scalars['BigInt']>;
    toField_lte?: InputMaybe<Scalars['BigInt']>;
    toField_not?: InputMaybe<Scalars['BigInt']>;
    toField_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    toSilo?: InputMaybe<Scalars['BigInt']>;
    toSilo_gt?: InputMaybe<Scalars['BigInt']>;
    toSilo_gte?: InputMaybe<Scalars['BigInt']>;
    toSilo_in?: InputMaybe<Array<Scalars['BigInt']>>;
    toSilo_lt?: InputMaybe<Scalars['BigInt']>;
    toSilo_lte?: InputMaybe<Scalars['BigInt']>;
    toSilo_not?: InputMaybe<Scalars['BigInt']>;
    toSilo_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum Reward_OrderBy {
    BlockNumber = "blockNumber",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Season = "season",
    Timestamp = "timestamp",
    ToFertilizer = "toFertilizer",
    ToField = "toField",
    ToSilo = "toSilo"
}
export declare type Season = {
    __typename?: 'Season';
    /**  Total Bean supply  */
    beans: Scalars['BigInt'];
    /**  Beanstalk Contract Address  */
    beanstalk: Beanstalk;
    /**  Time weighted deltaB  */
    deltaB: Scalars['BigInt'];
    /**  Change in Bean supply  */
    deltaBeans: Scalars['BigInt'];
    /**  New harvestable index for the season  */
    harvestableIndex: Scalars['BigInt'];
    /**  Season Number */
    id: Scalars['ID'];
    /**  Amount of Beans paid to sunrise caller  */
    incentiveBeans: Scalars['BigInt'];
    /**  Bean Market Cap  */
    marketCap: Scalars['BigDecimal'];
    /**  Price of BEAN during sunrise  */
    price: Scalars['BigDecimal'];
    /**  Amount of Beans minted during sunrise  */
    rewardBeans: Scalars['BigInt'];
    /**  Season number in Int form for sorting  */
    season: Scalars['Int'];
    /**  Block timestamp when sunrise was called  */
    timestamp: Scalars['BigInt'];
};
export declare type Season_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    beans?: InputMaybe<Scalars['BigInt']>;
    beans_gt?: InputMaybe<Scalars['BigInt']>;
    beans_gte?: InputMaybe<Scalars['BigInt']>;
    beans_in?: InputMaybe<Array<Scalars['BigInt']>>;
    beans_lt?: InputMaybe<Scalars['BigInt']>;
    beans_lte?: InputMaybe<Scalars['BigInt']>;
    beans_not?: InputMaybe<Scalars['BigInt']>;
    beans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    beanstalk?: InputMaybe<Scalars['String']>;
    beanstalk_?: InputMaybe<Beanstalk_Filter>;
    beanstalk_contains?: InputMaybe<Scalars['String']>;
    beanstalk_contains_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_ends_with?: InputMaybe<Scalars['String']>;
    beanstalk_ends_with_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_gt?: InputMaybe<Scalars['String']>;
    beanstalk_gte?: InputMaybe<Scalars['String']>;
    beanstalk_in?: InputMaybe<Array<Scalars['String']>>;
    beanstalk_lt?: InputMaybe<Scalars['String']>;
    beanstalk_lte?: InputMaybe<Scalars['String']>;
    beanstalk_not?: InputMaybe<Scalars['String']>;
    beanstalk_not_contains?: InputMaybe<Scalars['String']>;
    beanstalk_not_contains_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_not_ends_with?: InputMaybe<Scalars['String']>;
    beanstalk_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_not_in?: InputMaybe<Array<Scalars['String']>>;
    beanstalk_not_starts_with?: InputMaybe<Scalars['String']>;
    beanstalk_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_starts_with?: InputMaybe<Scalars['String']>;
    beanstalk_starts_with_nocase?: InputMaybe<Scalars['String']>;
    deltaB?: InputMaybe<Scalars['BigInt']>;
    deltaB_gt?: InputMaybe<Scalars['BigInt']>;
    deltaB_gte?: InputMaybe<Scalars['BigInt']>;
    deltaB_in?: InputMaybe<Array<Scalars['BigInt']>>;
    deltaB_lt?: InputMaybe<Scalars['BigInt']>;
    deltaB_lte?: InputMaybe<Scalars['BigInt']>;
    deltaB_not?: InputMaybe<Scalars['BigInt']>;
    deltaB_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    deltaBeans?: InputMaybe<Scalars['BigInt']>;
    deltaBeans_gt?: InputMaybe<Scalars['BigInt']>;
    deltaBeans_gte?: InputMaybe<Scalars['BigInt']>;
    deltaBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
    deltaBeans_lt?: InputMaybe<Scalars['BigInt']>;
    deltaBeans_lte?: InputMaybe<Scalars['BigInt']>;
    deltaBeans_not?: InputMaybe<Scalars['BigInt']>;
    deltaBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    harvestableIndex?: InputMaybe<Scalars['BigInt']>;
    harvestableIndex_gt?: InputMaybe<Scalars['BigInt']>;
    harvestableIndex_gte?: InputMaybe<Scalars['BigInt']>;
    harvestableIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    harvestableIndex_lt?: InputMaybe<Scalars['BigInt']>;
    harvestableIndex_lte?: InputMaybe<Scalars['BigInt']>;
    harvestableIndex_not?: InputMaybe<Scalars['BigInt']>;
    harvestableIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    incentiveBeans?: InputMaybe<Scalars['BigInt']>;
    incentiveBeans_gt?: InputMaybe<Scalars['BigInt']>;
    incentiveBeans_gte?: InputMaybe<Scalars['BigInt']>;
    incentiveBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
    incentiveBeans_lt?: InputMaybe<Scalars['BigInt']>;
    incentiveBeans_lte?: InputMaybe<Scalars['BigInt']>;
    incentiveBeans_not?: InputMaybe<Scalars['BigInt']>;
    incentiveBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    marketCap?: InputMaybe<Scalars['BigDecimal']>;
    marketCap_gt?: InputMaybe<Scalars['BigDecimal']>;
    marketCap_gte?: InputMaybe<Scalars['BigDecimal']>;
    marketCap_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    marketCap_lt?: InputMaybe<Scalars['BigDecimal']>;
    marketCap_lte?: InputMaybe<Scalars['BigDecimal']>;
    marketCap_not?: InputMaybe<Scalars['BigDecimal']>;
    marketCap_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    price?: InputMaybe<Scalars['BigDecimal']>;
    price_gt?: InputMaybe<Scalars['BigDecimal']>;
    price_gte?: InputMaybe<Scalars['BigDecimal']>;
    price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    price_lt?: InputMaybe<Scalars['BigDecimal']>;
    price_lte?: InputMaybe<Scalars['BigDecimal']>;
    price_not?: InputMaybe<Scalars['BigDecimal']>;
    price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardBeans?: InputMaybe<Scalars['BigInt']>;
    rewardBeans_gt?: InputMaybe<Scalars['BigInt']>;
    rewardBeans_gte?: InputMaybe<Scalars['BigInt']>;
    rewardBeans_in?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardBeans_lt?: InputMaybe<Scalars['BigInt']>;
    rewardBeans_lte?: InputMaybe<Scalars['BigInt']>;
    rewardBeans_not?: InputMaybe<Scalars['BigInt']>;
    rewardBeans_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum Season_OrderBy {
    Beans = "beans",
    Beanstalk = "beanstalk",
    DeltaB = "deltaB",
    DeltaBeans = "deltaBeans",
    HarvestableIndex = "harvestableIndex",
    Id = "id",
    IncentiveBeans = "incentiveBeans",
    MarketCap = "marketCap",
    Price = "price",
    RewardBeans = "rewardBeans",
    Season = "season",
    Timestamp = "timestamp"
}
export declare type SeedChange = SiloEvent & {
    __typename?: 'SeedChange';
    /**  Account removing deposit */
    account: Scalars['String'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Token removed */
    delta: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /** seedChange-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Season when the change happened  */
    season: Scalars['Int'];
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
};
export declare type SeedChange_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    account?: InputMaybe<Scalars['String']>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    delta?: InputMaybe<Scalars['BigInt']>;
    delta_gt?: InputMaybe<Scalars['BigInt']>;
    delta_gte?: InputMaybe<Scalars['BigInt']>;
    delta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    delta_lt?: InputMaybe<Scalars['BigInt']>;
    delta_lte?: InputMaybe<Scalars['BigInt']>;
    delta_not?: InputMaybe<Scalars['BigInt']>;
    delta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum SeedChange_OrderBy {
    Account = "account",
    BlockNumber = "blockNumber",
    Delta = "delta",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Season = "season",
    Timestamp = "timestamp"
}
export declare type Silo = {
    __typename?: 'Silo';
    assets: Array<SiloAsset>;
    beanstalk: Beanstalk;
    dailySnapshots: Array<SiloDailySnapshot>;
    farmer?: Maybe<Farmer>;
    hourlySnapshots: Array<SiloHourlySnapshot>;
    id: Scalars['ID'];
    totalBeanMints: Scalars['BigInt'];
    totalDepositedBDV: Scalars['BigInt'];
    totalFarmers: Scalars['Int'];
    totalPlantableStalk: Scalars['BigInt'];
    totalRoots: Scalars['BigInt'];
    totalSeeds: Scalars['BigInt'];
    totalStalk: Scalars['BigInt'];
    totalValueLockedUSD: Scalars['BigDecimal'];
    whitelistedTokens: Array<Scalars['String']>;
};
export declare type SiloAssetsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloAsset_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<SiloAsset_Filter>;
};
export declare type SiloDailySnapshotsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloDailySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<SiloDailySnapshot_Filter>;
};
export declare type SiloHourlySnapshotsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloHourlySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<SiloHourlySnapshot_Filter>;
};
export declare type SiloAsset = {
    __typename?: 'SiloAsset';
    cumulativeDepositedUSD: Scalars['BigDecimal'];
    dailySnapshots: Array<SiloAssetDailySnapshot>;
    hourlySnapshots: Array<SiloAssetHourlySnapshot>;
    id: Scalars['ID'];
    silo: Silo;
    token: Scalars['String'];
    totalDepositedAmount: Scalars['BigInt'];
    totalDepositedBDV: Scalars['BigInt'];
    totalFarmAmount: Scalars['BigInt'];
    totalSeeds: Scalars['BigInt'];
    totalStalk: Scalars['BigInt'];
    totalValueLockedUSD: Scalars['BigDecimal'];
};
export declare type SiloAssetDailySnapshotsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloAssetDailySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<SiloAssetDailySnapshot_Filter>;
};
export declare type SiloAssetHourlySnapshotsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloAssetHourlySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<SiloAssetHourlySnapshot_Filter>;
};
export declare type SiloAssetDailySnapshot = {
    __typename?: 'SiloAssetDailySnapshot';
    blockNumber: Scalars['BigInt'];
    cumulativeDepositedUSD: Scalars['BigDecimal'];
    dailyDepositedAmount: Scalars['BigInt'];
    dailyDepositedBDV: Scalars['BigInt'];
    dailyDepositedUSD: Scalars['BigDecimal'];
    dailyFarmAmountDelta: Scalars['BigInt'];
    dailySeedsDelta: Scalars['BigInt'];
    dailyStalkDelta: Scalars['BigInt'];
    dailyWithdrawnAmount: Scalars['BigInt'];
    id: Scalars['ID'];
    lastUpdated: Scalars['BigInt'];
    season: Scalars['Int'];
    siloAsset: SiloAsset;
    timestamp: Scalars['BigInt'];
    totalDepositedAmount: Scalars['BigInt'];
    totalDepositedBDV: Scalars['BigInt'];
    totalFarmAmount: Scalars['BigInt'];
    totalSeeds: Scalars['BigInt'];
    totalStalk: Scalars['BigInt'];
    totalValueLockedUSD: Scalars['BigDecimal'];
};
export declare type SiloAssetDailySnapshot_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositedUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeDepositedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyDepositedAmount?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedAmount_gt?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedAmount_gte?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyDepositedAmount_lt?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedAmount_lte?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedAmount_not?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyDepositedBDV?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyDepositedUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyDepositedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyDepositedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyDepositedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyDepositedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyDepositedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyDepositedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyDepositedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyFarmAmountDelta?: InputMaybe<Scalars['BigInt']>;
    dailyFarmAmountDelta_gt?: InputMaybe<Scalars['BigInt']>;
    dailyFarmAmountDelta_gte?: InputMaybe<Scalars['BigInt']>;
    dailyFarmAmountDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyFarmAmountDelta_lt?: InputMaybe<Scalars['BigInt']>;
    dailyFarmAmountDelta_lte?: InputMaybe<Scalars['BigInt']>;
    dailyFarmAmountDelta_not?: InputMaybe<Scalars['BigInt']>;
    dailyFarmAmountDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailySeedsDelta?: InputMaybe<Scalars['BigInt']>;
    dailySeedsDelta_gt?: InputMaybe<Scalars['BigInt']>;
    dailySeedsDelta_gte?: InputMaybe<Scalars['BigInt']>;
    dailySeedsDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailySeedsDelta_lt?: InputMaybe<Scalars['BigInt']>;
    dailySeedsDelta_lte?: InputMaybe<Scalars['BigInt']>;
    dailySeedsDelta_not?: InputMaybe<Scalars['BigInt']>;
    dailySeedsDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyStalkDelta?: InputMaybe<Scalars['BigInt']>;
    dailyStalkDelta_gt?: InputMaybe<Scalars['BigInt']>;
    dailyStalkDelta_gte?: InputMaybe<Scalars['BigInt']>;
    dailyStalkDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyStalkDelta_lt?: InputMaybe<Scalars['BigInt']>;
    dailyStalkDelta_lte?: InputMaybe<Scalars['BigInt']>;
    dailyStalkDelta_not?: InputMaybe<Scalars['BigInt']>;
    dailyStalkDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyWithdrawnAmount?: InputMaybe<Scalars['BigInt']>;
    dailyWithdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
    dailyWithdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
    dailyWithdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyWithdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
    dailyWithdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
    dailyWithdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
    dailyWithdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    lastUpdated?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdated_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    siloAsset?: InputMaybe<Scalars['String']>;
    siloAsset_?: InputMaybe<SiloAsset_Filter>;
    siloAsset_contains?: InputMaybe<Scalars['String']>;
    siloAsset_contains_nocase?: InputMaybe<Scalars['String']>;
    siloAsset_ends_with?: InputMaybe<Scalars['String']>;
    siloAsset_ends_with_nocase?: InputMaybe<Scalars['String']>;
    siloAsset_gt?: InputMaybe<Scalars['String']>;
    siloAsset_gte?: InputMaybe<Scalars['String']>;
    siloAsset_in?: InputMaybe<Array<Scalars['String']>>;
    siloAsset_lt?: InputMaybe<Scalars['String']>;
    siloAsset_lte?: InputMaybe<Scalars['String']>;
    siloAsset_not?: InputMaybe<Scalars['String']>;
    siloAsset_not_contains?: InputMaybe<Scalars['String']>;
    siloAsset_not_contains_nocase?: InputMaybe<Scalars['String']>;
    siloAsset_not_ends_with?: InputMaybe<Scalars['String']>;
    siloAsset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    siloAsset_not_in?: InputMaybe<Array<Scalars['String']>>;
    siloAsset_not_starts_with?: InputMaybe<Scalars['String']>;
    siloAsset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    siloAsset_starts_with?: InputMaybe<Scalars['String']>;
    siloAsset_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedAmount?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_gt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_gte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedAmount_lt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_lte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_not?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedBDV?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalFarmAmount?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_gt?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_gte?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalFarmAmount_lt?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_lte?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_not?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSeeds?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_gt?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_gte?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSeeds_lt?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_lte?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_not?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalStalk?: InputMaybe<Scalars['BigInt']>;
    totalStalk_gt?: InputMaybe<Scalars['BigInt']>;
    totalStalk_gte?: InputMaybe<Scalars['BigInt']>;
    totalStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalStalk_lt?: InputMaybe<Scalars['BigInt']>;
    totalStalk_lte?: InputMaybe<Scalars['BigInt']>;
    totalStalk_not?: InputMaybe<Scalars['BigInt']>;
    totalStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};
export declare enum SiloAssetDailySnapshot_OrderBy {
    BlockNumber = "blockNumber",
    CumulativeDepositedUsd = "cumulativeDepositedUSD",
    DailyDepositedAmount = "dailyDepositedAmount",
    DailyDepositedBdv = "dailyDepositedBDV",
    DailyDepositedUsd = "dailyDepositedUSD",
    DailyFarmAmountDelta = "dailyFarmAmountDelta",
    DailySeedsDelta = "dailySeedsDelta",
    DailyStalkDelta = "dailyStalkDelta",
    DailyWithdrawnAmount = "dailyWithdrawnAmount",
    Id = "id",
    LastUpdated = "lastUpdated",
    Season = "season",
    SiloAsset = "siloAsset",
    Timestamp = "timestamp",
    TotalDepositedAmount = "totalDepositedAmount",
    TotalDepositedBdv = "totalDepositedBDV",
    TotalFarmAmount = "totalFarmAmount",
    TotalSeeds = "totalSeeds",
    TotalStalk = "totalStalk",
    TotalValueLockedUsd = "totalValueLockedUSD"
}
export declare type SiloAssetHourlySnapshot = {
    __typename?: 'SiloAssetHourlySnapshot';
    blockNumber: Scalars['BigInt'];
    cumulativeDepositedUSD: Scalars['BigDecimal'];
    hourlyDepositedAmount: Scalars['BigInt'];
    hourlyDepositedBDV: Scalars['BigInt'];
    hourlyDepositedUSD: Scalars['BigDecimal'];
    hourlyFarmAmountDelta: Scalars['BigInt'];
    hourlySeedsDelta: Scalars['BigInt'];
    hourlyStalkDelta: Scalars['BigInt'];
    hourlyWithdrawnAmount: Scalars['BigInt'];
    id: Scalars['ID'];
    lastUpdated: Scalars['BigInt'];
    season: Scalars['Int'];
    siloAsset: SiloAsset;
    timestamp: Scalars['BigInt'];
    totalDepositedAmount: Scalars['BigInt'];
    totalDepositedBDV: Scalars['BigInt'];
    totalFarmAmount: Scalars['BigInt'];
    totalSeeds: Scalars['BigInt'];
    totalStalk: Scalars['BigInt'];
    totalValueLockedUSD: Scalars['BigDecimal'];
};
export declare type SiloAssetHourlySnapshot_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositedUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeDepositedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyDepositedAmount?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedAmount_gt?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedAmount_gte?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyDepositedAmount_lt?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedAmount_lte?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedAmount_not?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyDepositedBDV?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyDepositedUSD?: InputMaybe<Scalars['BigDecimal']>;
    hourlyDepositedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyDepositedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyDepositedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyDepositedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyDepositedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyDepositedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    hourlyDepositedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyFarmAmountDelta?: InputMaybe<Scalars['BigInt']>;
    hourlyFarmAmountDelta_gt?: InputMaybe<Scalars['BigInt']>;
    hourlyFarmAmountDelta_gte?: InputMaybe<Scalars['BigInt']>;
    hourlyFarmAmountDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyFarmAmountDelta_lt?: InputMaybe<Scalars['BigInt']>;
    hourlyFarmAmountDelta_lte?: InputMaybe<Scalars['BigInt']>;
    hourlyFarmAmountDelta_not?: InputMaybe<Scalars['BigInt']>;
    hourlyFarmAmountDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlySeedsDelta?: InputMaybe<Scalars['BigInt']>;
    hourlySeedsDelta_gt?: InputMaybe<Scalars['BigInt']>;
    hourlySeedsDelta_gte?: InputMaybe<Scalars['BigInt']>;
    hourlySeedsDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlySeedsDelta_lt?: InputMaybe<Scalars['BigInt']>;
    hourlySeedsDelta_lte?: InputMaybe<Scalars['BigInt']>;
    hourlySeedsDelta_not?: InputMaybe<Scalars['BigInt']>;
    hourlySeedsDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyStalkDelta?: InputMaybe<Scalars['BigInt']>;
    hourlyStalkDelta_gt?: InputMaybe<Scalars['BigInt']>;
    hourlyStalkDelta_gte?: InputMaybe<Scalars['BigInt']>;
    hourlyStalkDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyStalkDelta_lt?: InputMaybe<Scalars['BigInt']>;
    hourlyStalkDelta_lte?: InputMaybe<Scalars['BigInt']>;
    hourlyStalkDelta_not?: InputMaybe<Scalars['BigInt']>;
    hourlyStalkDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyWithdrawnAmount?: InputMaybe<Scalars['BigInt']>;
    hourlyWithdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
    hourlyWithdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
    hourlyWithdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyWithdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
    hourlyWithdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
    hourlyWithdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
    hourlyWithdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    lastUpdated?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdated_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    siloAsset?: InputMaybe<Scalars['String']>;
    siloAsset_?: InputMaybe<SiloAsset_Filter>;
    siloAsset_contains?: InputMaybe<Scalars['String']>;
    siloAsset_contains_nocase?: InputMaybe<Scalars['String']>;
    siloAsset_ends_with?: InputMaybe<Scalars['String']>;
    siloAsset_ends_with_nocase?: InputMaybe<Scalars['String']>;
    siloAsset_gt?: InputMaybe<Scalars['String']>;
    siloAsset_gte?: InputMaybe<Scalars['String']>;
    siloAsset_in?: InputMaybe<Array<Scalars['String']>>;
    siloAsset_lt?: InputMaybe<Scalars['String']>;
    siloAsset_lte?: InputMaybe<Scalars['String']>;
    siloAsset_not?: InputMaybe<Scalars['String']>;
    siloAsset_not_contains?: InputMaybe<Scalars['String']>;
    siloAsset_not_contains_nocase?: InputMaybe<Scalars['String']>;
    siloAsset_not_ends_with?: InputMaybe<Scalars['String']>;
    siloAsset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    siloAsset_not_in?: InputMaybe<Array<Scalars['String']>>;
    siloAsset_not_starts_with?: InputMaybe<Scalars['String']>;
    siloAsset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    siloAsset_starts_with?: InputMaybe<Scalars['String']>;
    siloAsset_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedAmount?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_gt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_gte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedAmount_lt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_lte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_not?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedBDV?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalFarmAmount?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_gt?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_gte?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalFarmAmount_lt?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_lte?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_not?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSeeds?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_gt?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_gte?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSeeds_lt?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_lte?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_not?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalStalk?: InputMaybe<Scalars['BigInt']>;
    totalStalk_gt?: InputMaybe<Scalars['BigInt']>;
    totalStalk_gte?: InputMaybe<Scalars['BigInt']>;
    totalStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalStalk_lt?: InputMaybe<Scalars['BigInt']>;
    totalStalk_lte?: InputMaybe<Scalars['BigInt']>;
    totalStalk_not?: InputMaybe<Scalars['BigInt']>;
    totalStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};
export declare enum SiloAssetHourlySnapshot_OrderBy {
    BlockNumber = "blockNumber",
    CumulativeDepositedUsd = "cumulativeDepositedUSD",
    HourlyDepositedAmount = "hourlyDepositedAmount",
    HourlyDepositedBdv = "hourlyDepositedBDV",
    HourlyDepositedUsd = "hourlyDepositedUSD",
    HourlyFarmAmountDelta = "hourlyFarmAmountDelta",
    HourlySeedsDelta = "hourlySeedsDelta",
    HourlyStalkDelta = "hourlyStalkDelta",
    HourlyWithdrawnAmount = "hourlyWithdrawnAmount",
    Id = "id",
    LastUpdated = "lastUpdated",
    Season = "season",
    SiloAsset = "siloAsset",
    Timestamp = "timestamp",
    TotalDepositedAmount = "totalDepositedAmount",
    TotalDepositedBdv = "totalDepositedBDV",
    TotalFarmAmount = "totalFarmAmount",
    TotalSeeds = "totalSeeds",
    TotalStalk = "totalStalk",
    TotalValueLockedUsd = "totalValueLockedUSD"
}
export declare type SiloAsset_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    cumulativeDepositedUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeDepositedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailySnapshots_?: InputMaybe<SiloAssetDailySnapshot_Filter>;
    hourlySnapshots_?: InputMaybe<SiloAssetHourlySnapshot_Filter>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    silo?: InputMaybe<Scalars['String']>;
    silo_?: InputMaybe<Silo_Filter>;
    silo_contains?: InputMaybe<Scalars['String']>;
    silo_contains_nocase?: InputMaybe<Scalars['String']>;
    silo_ends_with?: InputMaybe<Scalars['String']>;
    silo_ends_with_nocase?: InputMaybe<Scalars['String']>;
    silo_gt?: InputMaybe<Scalars['String']>;
    silo_gte?: InputMaybe<Scalars['String']>;
    silo_in?: InputMaybe<Array<Scalars['String']>>;
    silo_lt?: InputMaybe<Scalars['String']>;
    silo_lte?: InputMaybe<Scalars['String']>;
    silo_not?: InputMaybe<Scalars['String']>;
    silo_not_contains?: InputMaybe<Scalars['String']>;
    silo_not_contains_nocase?: InputMaybe<Scalars['String']>;
    silo_not_ends_with?: InputMaybe<Scalars['String']>;
    silo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    silo_not_in?: InputMaybe<Array<Scalars['String']>>;
    silo_not_starts_with?: InputMaybe<Scalars['String']>;
    silo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    silo_starts_with?: InputMaybe<Scalars['String']>;
    silo_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token?: InputMaybe<Scalars['String']>;
    token_contains?: InputMaybe<Scalars['String']>;
    token_contains_nocase?: InputMaybe<Scalars['String']>;
    token_ends_with?: InputMaybe<Scalars['String']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_gt?: InputMaybe<Scalars['String']>;
    token_gte?: InputMaybe<Scalars['String']>;
    token_in?: InputMaybe<Array<Scalars['String']>>;
    token_lt?: InputMaybe<Scalars['String']>;
    token_lte?: InputMaybe<Scalars['String']>;
    token_not?: InputMaybe<Scalars['String']>;
    token_not_contains?: InputMaybe<Scalars['String']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token_not_ends_with?: InputMaybe<Scalars['String']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_in?: InputMaybe<Array<Scalars['String']>>;
    token_not_starts_with?: InputMaybe<Scalars['String']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_starts_with?: InputMaybe<Scalars['String']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']>;
    totalDepositedAmount?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_gt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_gte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedAmount_lt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_lte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_not?: InputMaybe<Scalars['BigInt']>;
    totalDepositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedBDV?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalFarmAmount?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_gt?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_gte?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalFarmAmount_lt?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_lte?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_not?: InputMaybe<Scalars['BigInt']>;
    totalFarmAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSeeds?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_gt?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_gte?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSeeds_lt?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_lte?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_not?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalStalk?: InputMaybe<Scalars['BigInt']>;
    totalStalk_gt?: InputMaybe<Scalars['BigInt']>;
    totalStalk_gte?: InputMaybe<Scalars['BigInt']>;
    totalStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalStalk_lt?: InputMaybe<Scalars['BigInt']>;
    totalStalk_lte?: InputMaybe<Scalars['BigInt']>;
    totalStalk_not?: InputMaybe<Scalars['BigInt']>;
    totalStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};
export declare enum SiloAsset_OrderBy {
    CumulativeDepositedUsd = "cumulativeDepositedUSD",
    DailySnapshots = "dailySnapshots",
    HourlySnapshots = "hourlySnapshots",
    Id = "id",
    Silo = "silo",
    Token = "token",
    TotalDepositedAmount = "totalDepositedAmount",
    TotalDepositedBdv = "totalDepositedBDV",
    TotalFarmAmount = "totalFarmAmount",
    TotalSeeds = "totalSeeds",
    TotalStalk = "totalStalk",
    TotalValueLockedUsd = "totalValueLockedUSD"
}
export declare type SiloDailySnapshot = {
    __typename?: 'SiloDailySnapshot';
    beansPerStalk: Scalars['BigInt'];
    blockNumber: Scalars['BigInt'];
    cumulativeDepositedUSD: Scalars['BigDecimal'];
    dailyBeanMints: Scalars['BigInt'];
    dailyClaimableBDV: Scalars['BigInt'];
    dailyDepositedBDV: Scalars['BigInt'];
    dailyDepositedUSD: Scalars['BigDecimal'];
    dailyFarmers: Scalars['Int'];
    dailyPlantableStalkDelta: Scalars['BigInt'];
    dailyRootsDelta: Scalars['BigInt'];
    dailySeedsDelta: Scalars['BigInt'];
    dailyStalkDelta: Scalars['BigInt'];
    dailyWithdrawnBDV: Scalars['BigInt'];
    id: Scalars['ID'];
    lastUpdated: Scalars['BigInt'];
    season: Scalars['Int'];
    silo: Silo;
    timestamp: Scalars['BigInt'];
    totalBeanMints: Scalars['BigInt'];
    totalDepositedBDV: Scalars['BigInt'];
    totalFarmers: Scalars['Int'];
    totalPlantableStalk: Scalars['BigInt'];
    totalRoots: Scalars['BigInt'];
    totalSeeds: Scalars['BigInt'];
    totalStalk: Scalars['BigInt'];
    totalValueLockedUSD: Scalars['BigDecimal'];
};
export declare type SiloDailySnapshot_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    beansPerStalk?: InputMaybe<Scalars['BigInt']>;
    beansPerStalk_gt?: InputMaybe<Scalars['BigInt']>;
    beansPerStalk_gte?: InputMaybe<Scalars['BigInt']>;
    beansPerStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
    beansPerStalk_lt?: InputMaybe<Scalars['BigInt']>;
    beansPerStalk_lte?: InputMaybe<Scalars['BigInt']>;
    beansPerStalk_not?: InputMaybe<Scalars['BigInt']>;
    beansPerStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositedUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeDepositedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyBeanMints?: InputMaybe<Scalars['BigInt']>;
    dailyBeanMints_gt?: InputMaybe<Scalars['BigInt']>;
    dailyBeanMints_gte?: InputMaybe<Scalars['BigInt']>;
    dailyBeanMints_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyBeanMints_lt?: InputMaybe<Scalars['BigInt']>;
    dailyBeanMints_lte?: InputMaybe<Scalars['BigInt']>;
    dailyBeanMints_not?: InputMaybe<Scalars['BigInt']>;
    dailyBeanMints_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyClaimableBDV?: InputMaybe<Scalars['BigInt']>;
    dailyClaimableBDV_gt?: InputMaybe<Scalars['BigInt']>;
    dailyClaimableBDV_gte?: InputMaybe<Scalars['BigInt']>;
    dailyClaimableBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyClaimableBDV_lt?: InputMaybe<Scalars['BigInt']>;
    dailyClaimableBDV_lte?: InputMaybe<Scalars['BigInt']>;
    dailyClaimableBDV_not?: InputMaybe<Scalars['BigInt']>;
    dailyClaimableBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyDepositedBDV?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
    dailyDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyDepositedUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyDepositedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyDepositedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyDepositedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyDepositedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyDepositedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyDepositedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyDepositedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyFarmers?: InputMaybe<Scalars['Int']>;
    dailyFarmers_gt?: InputMaybe<Scalars['Int']>;
    dailyFarmers_gte?: InputMaybe<Scalars['Int']>;
    dailyFarmers_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyFarmers_lt?: InputMaybe<Scalars['Int']>;
    dailyFarmers_lte?: InputMaybe<Scalars['Int']>;
    dailyFarmers_not?: InputMaybe<Scalars['Int']>;
    dailyFarmers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    dailyPlantableStalkDelta?: InputMaybe<Scalars['BigInt']>;
    dailyPlantableStalkDelta_gt?: InputMaybe<Scalars['BigInt']>;
    dailyPlantableStalkDelta_gte?: InputMaybe<Scalars['BigInt']>;
    dailyPlantableStalkDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyPlantableStalkDelta_lt?: InputMaybe<Scalars['BigInt']>;
    dailyPlantableStalkDelta_lte?: InputMaybe<Scalars['BigInt']>;
    dailyPlantableStalkDelta_not?: InputMaybe<Scalars['BigInt']>;
    dailyPlantableStalkDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyRootsDelta?: InputMaybe<Scalars['BigInt']>;
    dailyRootsDelta_gt?: InputMaybe<Scalars['BigInt']>;
    dailyRootsDelta_gte?: InputMaybe<Scalars['BigInt']>;
    dailyRootsDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyRootsDelta_lt?: InputMaybe<Scalars['BigInt']>;
    dailyRootsDelta_lte?: InputMaybe<Scalars['BigInt']>;
    dailyRootsDelta_not?: InputMaybe<Scalars['BigInt']>;
    dailyRootsDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailySeedsDelta?: InputMaybe<Scalars['BigInt']>;
    dailySeedsDelta_gt?: InputMaybe<Scalars['BigInt']>;
    dailySeedsDelta_gte?: InputMaybe<Scalars['BigInt']>;
    dailySeedsDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailySeedsDelta_lt?: InputMaybe<Scalars['BigInt']>;
    dailySeedsDelta_lte?: InputMaybe<Scalars['BigInt']>;
    dailySeedsDelta_not?: InputMaybe<Scalars['BigInt']>;
    dailySeedsDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyStalkDelta?: InputMaybe<Scalars['BigInt']>;
    dailyStalkDelta_gt?: InputMaybe<Scalars['BigInt']>;
    dailyStalkDelta_gte?: InputMaybe<Scalars['BigInt']>;
    dailyStalkDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyStalkDelta_lt?: InputMaybe<Scalars['BigInt']>;
    dailyStalkDelta_lte?: InputMaybe<Scalars['BigInt']>;
    dailyStalkDelta_not?: InputMaybe<Scalars['BigInt']>;
    dailyStalkDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyWithdrawnBDV?: InputMaybe<Scalars['BigInt']>;
    dailyWithdrawnBDV_gt?: InputMaybe<Scalars['BigInt']>;
    dailyWithdrawnBDV_gte?: InputMaybe<Scalars['BigInt']>;
    dailyWithdrawnBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyWithdrawnBDV_lt?: InputMaybe<Scalars['BigInt']>;
    dailyWithdrawnBDV_lte?: InputMaybe<Scalars['BigInt']>;
    dailyWithdrawnBDV_not?: InputMaybe<Scalars['BigInt']>;
    dailyWithdrawnBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    lastUpdated?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdated_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    silo?: InputMaybe<Scalars['String']>;
    silo_?: InputMaybe<Silo_Filter>;
    silo_contains?: InputMaybe<Scalars['String']>;
    silo_contains_nocase?: InputMaybe<Scalars['String']>;
    silo_ends_with?: InputMaybe<Scalars['String']>;
    silo_ends_with_nocase?: InputMaybe<Scalars['String']>;
    silo_gt?: InputMaybe<Scalars['String']>;
    silo_gte?: InputMaybe<Scalars['String']>;
    silo_in?: InputMaybe<Array<Scalars['String']>>;
    silo_lt?: InputMaybe<Scalars['String']>;
    silo_lte?: InputMaybe<Scalars['String']>;
    silo_not?: InputMaybe<Scalars['String']>;
    silo_not_contains?: InputMaybe<Scalars['String']>;
    silo_not_contains_nocase?: InputMaybe<Scalars['String']>;
    silo_not_ends_with?: InputMaybe<Scalars['String']>;
    silo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    silo_not_in?: InputMaybe<Array<Scalars['String']>>;
    silo_not_starts_with?: InputMaybe<Scalars['String']>;
    silo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    silo_starts_with?: InputMaybe<Scalars['String']>;
    silo_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBeanMints?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_gt?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_gte?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBeanMints_lt?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_lte?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_not?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedBDV?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalFarmers?: InputMaybe<Scalars['Int']>;
    totalFarmers_gt?: InputMaybe<Scalars['Int']>;
    totalFarmers_gte?: InputMaybe<Scalars['Int']>;
    totalFarmers_in?: InputMaybe<Array<Scalars['Int']>>;
    totalFarmers_lt?: InputMaybe<Scalars['Int']>;
    totalFarmers_lte?: InputMaybe<Scalars['Int']>;
    totalFarmers_not?: InputMaybe<Scalars['Int']>;
    totalFarmers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalPlantableStalk?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_gt?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_gte?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPlantableStalk_lt?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_lte?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_not?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalRoots?: InputMaybe<Scalars['BigInt']>;
    totalRoots_gt?: InputMaybe<Scalars['BigInt']>;
    totalRoots_gte?: InputMaybe<Scalars['BigInt']>;
    totalRoots_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalRoots_lt?: InputMaybe<Scalars['BigInt']>;
    totalRoots_lte?: InputMaybe<Scalars['BigInt']>;
    totalRoots_not?: InputMaybe<Scalars['BigInt']>;
    totalRoots_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSeeds?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_gt?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_gte?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSeeds_lt?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_lte?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_not?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalStalk?: InputMaybe<Scalars['BigInt']>;
    totalStalk_gt?: InputMaybe<Scalars['BigInt']>;
    totalStalk_gte?: InputMaybe<Scalars['BigInt']>;
    totalStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalStalk_lt?: InputMaybe<Scalars['BigInt']>;
    totalStalk_lte?: InputMaybe<Scalars['BigInt']>;
    totalStalk_not?: InputMaybe<Scalars['BigInt']>;
    totalStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};
export declare enum SiloDailySnapshot_OrderBy {
    BeansPerStalk = "beansPerStalk",
    BlockNumber = "blockNumber",
    CumulativeDepositedUsd = "cumulativeDepositedUSD",
    DailyBeanMints = "dailyBeanMints",
    DailyClaimableBdv = "dailyClaimableBDV",
    DailyDepositedBdv = "dailyDepositedBDV",
    DailyDepositedUsd = "dailyDepositedUSD",
    DailyFarmers = "dailyFarmers",
    DailyPlantableStalkDelta = "dailyPlantableStalkDelta",
    DailyRootsDelta = "dailyRootsDelta",
    DailySeedsDelta = "dailySeedsDelta",
    DailyStalkDelta = "dailyStalkDelta",
    DailyWithdrawnBdv = "dailyWithdrawnBDV",
    Id = "id",
    LastUpdated = "lastUpdated",
    Season = "season",
    Silo = "silo",
    Timestamp = "timestamp",
    TotalBeanMints = "totalBeanMints",
    TotalDepositedBdv = "totalDepositedBDV",
    TotalFarmers = "totalFarmers",
    TotalPlantableStalk = "totalPlantableStalk",
    TotalRoots = "totalRoots",
    TotalSeeds = "totalSeeds",
    TotalStalk = "totalStalk",
    TotalValueLockedUsd = "totalValueLockedUSD"
}
export declare type SiloDeposit = {
    __typename?: 'SiloDeposit';
    amount: Scalars['BigInt'];
    amountAdded: Scalars['BigInt'];
    amountRemoved: Scalars['BigInt'];
    bdv: Scalars['BigInt'];
    bdvAdded: Scalars['BigInt'];
    bdvRemoved: Scalars['BigInt'];
    createdAt: Scalars['BigInt'];
    farmer: Farmer;
    hashes: Array<Scalars['String']>;
    /** Account - Token Address - Season */
    id: Scalars['ID'];
    season: Scalars['Int'];
    seeds: Scalars['BigInt'];
    stalk: Scalars['BigInt'];
    token: Scalars['String'];
    updatedAt: Scalars['BigInt'];
};
export declare type SiloDeposit_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amountAdded?: InputMaybe<Scalars['BigInt']>;
    amountAdded_gt?: InputMaybe<Scalars['BigInt']>;
    amountAdded_gte?: InputMaybe<Scalars['BigInt']>;
    amountAdded_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountAdded_lt?: InputMaybe<Scalars['BigInt']>;
    amountAdded_lte?: InputMaybe<Scalars['BigInt']>;
    amountAdded_not?: InputMaybe<Scalars['BigInt']>;
    amountAdded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountRemoved?: InputMaybe<Scalars['BigInt']>;
    amountRemoved_gt?: InputMaybe<Scalars['BigInt']>;
    amountRemoved_gte?: InputMaybe<Scalars['BigInt']>;
    amountRemoved_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountRemoved_lt?: InputMaybe<Scalars['BigInt']>;
    amountRemoved_lte?: InputMaybe<Scalars['BigInt']>;
    amountRemoved_not?: InputMaybe<Scalars['BigInt']>;
    amountRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    bdv?: InputMaybe<Scalars['BigInt']>;
    bdvAdded?: InputMaybe<Scalars['BigInt']>;
    bdvAdded_gt?: InputMaybe<Scalars['BigInt']>;
    bdvAdded_gte?: InputMaybe<Scalars['BigInt']>;
    bdvAdded_in?: InputMaybe<Array<Scalars['BigInt']>>;
    bdvAdded_lt?: InputMaybe<Scalars['BigInt']>;
    bdvAdded_lte?: InputMaybe<Scalars['BigInt']>;
    bdvAdded_not?: InputMaybe<Scalars['BigInt']>;
    bdvAdded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    bdvRemoved?: InputMaybe<Scalars['BigInt']>;
    bdvRemoved_gt?: InputMaybe<Scalars['BigInt']>;
    bdvRemoved_gte?: InputMaybe<Scalars['BigInt']>;
    bdvRemoved_in?: InputMaybe<Array<Scalars['BigInt']>>;
    bdvRemoved_lt?: InputMaybe<Scalars['BigInt']>;
    bdvRemoved_lte?: InputMaybe<Scalars['BigInt']>;
    bdvRemoved_not?: InputMaybe<Scalars['BigInt']>;
    bdvRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    bdv_gt?: InputMaybe<Scalars['BigInt']>;
    bdv_gte?: InputMaybe<Scalars['BigInt']>;
    bdv_in?: InputMaybe<Array<Scalars['BigInt']>>;
    bdv_lt?: InputMaybe<Scalars['BigInt']>;
    bdv_lte?: InputMaybe<Scalars['BigInt']>;
    bdv_not?: InputMaybe<Scalars['BigInt']>;
    bdv_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gte?: InputMaybe<Scalars['BigInt']>;
    createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt_lt?: InputMaybe<Scalars['BigInt']>;
    createdAt_lte?: InputMaybe<Scalars['BigInt']>;
    createdAt_not?: InputMaybe<Scalars['BigInt']>;
    createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    farmer?: InputMaybe<Scalars['String']>;
    farmer_?: InputMaybe<Farmer_Filter>;
    farmer_contains?: InputMaybe<Scalars['String']>;
    farmer_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_ends_with?: InputMaybe<Scalars['String']>;
    farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_gt?: InputMaybe<Scalars['String']>;
    farmer_gte?: InputMaybe<Scalars['String']>;
    farmer_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_lt?: InputMaybe<Scalars['String']>;
    farmer_lte?: InputMaybe<Scalars['String']>;
    farmer_not?: InputMaybe<Scalars['String']>;
    farmer_not_contains?: InputMaybe<Scalars['String']>;
    farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_not_starts_with?: InputMaybe<Scalars['String']>;
    farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_starts_with?: InputMaybe<Scalars['String']>;
    farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hashes?: InputMaybe<Array<Scalars['String']>>;
    hashes_contains?: InputMaybe<Array<Scalars['String']>>;
    hashes_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    hashes_not?: InputMaybe<Array<Scalars['String']>>;
    hashes_not_contains?: InputMaybe<Array<Scalars['String']>>;
    hashes_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    seeds?: InputMaybe<Scalars['BigInt']>;
    seeds_gt?: InputMaybe<Scalars['BigInt']>;
    seeds_gte?: InputMaybe<Scalars['BigInt']>;
    seeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
    seeds_lt?: InputMaybe<Scalars['BigInt']>;
    seeds_lte?: InputMaybe<Scalars['BigInt']>;
    seeds_not?: InputMaybe<Scalars['BigInt']>;
    seeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    stalk?: InputMaybe<Scalars['BigInt']>;
    stalk_gt?: InputMaybe<Scalars['BigInt']>;
    stalk_gte?: InputMaybe<Scalars['BigInt']>;
    stalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
    stalk_lt?: InputMaybe<Scalars['BigInt']>;
    stalk_lte?: InputMaybe<Scalars['BigInt']>;
    stalk_not?: InputMaybe<Scalars['BigInt']>;
    stalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    token?: InputMaybe<Scalars['String']>;
    token_contains?: InputMaybe<Scalars['String']>;
    token_contains_nocase?: InputMaybe<Scalars['String']>;
    token_ends_with?: InputMaybe<Scalars['String']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_gt?: InputMaybe<Scalars['String']>;
    token_gte?: InputMaybe<Scalars['String']>;
    token_in?: InputMaybe<Array<Scalars['String']>>;
    token_lt?: InputMaybe<Scalars['String']>;
    token_lte?: InputMaybe<Scalars['String']>;
    token_not?: InputMaybe<Scalars['String']>;
    token_not_contains?: InputMaybe<Scalars['String']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token_not_ends_with?: InputMaybe<Scalars['String']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_in?: InputMaybe<Array<Scalars['String']>>;
    token_not_starts_with?: InputMaybe<Scalars['String']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_starts_with?: InputMaybe<Scalars['String']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']>;
    updatedAt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
    updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not?: InputMaybe<Scalars['BigInt']>;
    updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum SiloDeposit_OrderBy {
    Amount = "amount",
    AmountAdded = "amountAdded",
    AmountRemoved = "amountRemoved",
    Bdv = "bdv",
    BdvAdded = "bdvAdded",
    BdvRemoved = "bdvRemoved",
    CreatedAt = "createdAt",
    Farmer = "farmer",
    Hashes = "hashes",
    Id = "id",
    Season = "season",
    Seeds = "seeds",
    Stalk = "stalk",
    Token = "token",
    UpdatedAt = "updatedAt"
}
export declare type SiloEvent = {
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /**  { Event type }-{ Transaction hash }-{ Log index }  */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
};
export declare type SiloEvent_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum SiloEvent_OrderBy {
    BlockNumber = "blockNumber",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Timestamp = "timestamp"
}
export declare type SiloHourlySnapshot = {
    __typename?: 'SiloHourlySnapshot';
    beansPerStalk: Scalars['BigInt'];
    blockNumber: Scalars['BigInt'];
    cumulativeDepositedUSD: Scalars['BigDecimal'];
    hourlyBeanMints: Scalars['BigInt'];
    hourlyClaimableBDV: Scalars['BigInt'];
    hourlyDepositedBDV: Scalars['BigInt'];
    hourlyDepositedUSD: Scalars['BigDecimal'];
    hourlyFarmers: Scalars['Int'];
    hourlyPlantableStalkDelta: Scalars['BigInt'];
    hourlyRootsDelta: Scalars['BigInt'];
    hourlySeedsDelta: Scalars['BigInt'];
    hourlyStalkDelta: Scalars['BigInt'];
    hourlyWithdrawnBDV: Scalars['BigInt'];
    id: Scalars['ID'];
    lastUpdated: Scalars['BigInt'];
    season: Scalars['Int'];
    silo: Silo;
    timestamp: Scalars['BigInt'];
    totalBeanMints: Scalars['BigInt'];
    totalDepositedBDV: Scalars['BigInt'];
    totalFarmers: Scalars['Int'];
    totalPlantableStalk: Scalars['BigInt'];
    totalRoots: Scalars['BigInt'];
    totalSeeds: Scalars['BigInt'];
    totalStalk: Scalars['BigInt'];
    totalValueLockedUSD: Scalars['BigDecimal'];
};
export declare type SiloHourlySnapshot_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    beansPerStalk?: InputMaybe<Scalars['BigInt']>;
    beansPerStalk_gt?: InputMaybe<Scalars['BigInt']>;
    beansPerStalk_gte?: InputMaybe<Scalars['BigInt']>;
    beansPerStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
    beansPerStalk_lt?: InputMaybe<Scalars['BigInt']>;
    beansPerStalk_lte?: InputMaybe<Scalars['BigInt']>;
    beansPerStalk_not?: InputMaybe<Scalars['BigInt']>;
    beansPerStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeDepositedUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeDepositedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeDepositedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyBeanMints?: InputMaybe<Scalars['BigInt']>;
    hourlyBeanMints_gt?: InputMaybe<Scalars['BigInt']>;
    hourlyBeanMints_gte?: InputMaybe<Scalars['BigInt']>;
    hourlyBeanMints_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyBeanMints_lt?: InputMaybe<Scalars['BigInt']>;
    hourlyBeanMints_lte?: InputMaybe<Scalars['BigInt']>;
    hourlyBeanMints_not?: InputMaybe<Scalars['BigInt']>;
    hourlyBeanMints_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyClaimableBDV?: InputMaybe<Scalars['BigInt']>;
    hourlyClaimableBDV_gt?: InputMaybe<Scalars['BigInt']>;
    hourlyClaimableBDV_gte?: InputMaybe<Scalars['BigInt']>;
    hourlyClaimableBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyClaimableBDV_lt?: InputMaybe<Scalars['BigInt']>;
    hourlyClaimableBDV_lte?: InputMaybe<Scalars['BigInt']>;
    hourlyClaimableBDV_not?: InputMaybe<Scalars['BigInt']>;
    hourlyClaimableBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyDepositedBDV?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
    hourlyDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyDepositedUSD?: InputMaybe<Scalars['BigDecimal']>;
    hourlyDepositedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyDepositedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyDepositedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyDepositedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyDepositedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyDepositedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    hourlyDepositedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyFarmers?: InputMaybe<Scalars['Int']>;
    hourlyFarmers_gt?: InputMaybe<Scalars['Int']>;
    hourlyFarmers_gte?: InputMaybe<Scalars['Int']>;
    hourlyFarmers_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlyFarmers_lt?: InputMaybe<Scalars['Int']>;
    hourlyFarmers_lte?: InputMaybe<Scalars['Int']>;
    hourlyFarmers_not?: InputMaybe<Scalars['Int']>;
    hourlyFarmers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    hourlyPlantableStalkDelta?: InputMaybe<Scalars['BigInt']>;
    hourlyPlantableStalkDelta_gt?: InputMaybe<Scalars['BigInt']>;
    hourlyPlantableStalkDelta_gte?: InputMaybe<Scalars['BigInt']>;
    hourlyPlantableStalkDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyPlantableStalkDelta_lt?: InputMaybe<Scalars['BigInt']>;
    hourlyPlantableStalkDelta_lte?: InputMaybe<Scalars['BigInt']>;
    hourlyPlantableStalkDelta_not?: InputMaybe<Scalars['BigInt']>;
    hourlyPlantableStalkDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyRootsDelta?: InputMaybe<Scalars['BigInt']>;
    hourlyRootsDelta_gt?: InputMaybe<Scalars['BigInt']>;
    hourlyRootsDelta_gte?: InputMaybe<Scalars['BigInt']>;
    hourlyRootsDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyRootsDelta_lt?: InputMaybe<Scalars['BigInt']>;
    hourlyRootsDelta_lte?: InputMaybe<Scalars['BigInt']>;
    hourlyRootsDelta_not?: InputMaybe<Scalars['BigInt']>;
    hourlyRootsDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlySeedsDelta?: InputMaybe<Scalars['BigInt']>;
    hourlySeedsDelta_gt?: InputMaybe<Scalars['BigInt']>;
    hourlySeedsDelta_gte?: InputMaybe<Scalars['BigInt']>;
    hourlySeedsDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlySeedsDelta_lt?: InputMaybe<Scalars['BigInt']>;
    hourlySeedsDelta_lte?: InputMaybe<Scalars['BigInt']>;
    hourlySeedsDelta_not?: InputMaybe<Scalars['BigInt']>;
    hourlySeedsDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyStalkDelta?: InputMaybe<Scalars['BigInt']>;
    hourlyStalkDelta_gt?: InputMaybe<Scalars['BigInt']>;
    hourlyStalkDelta_gte?: InputMaybe<Scalars['BigInt']>;
    hourlyStalkDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyStalkDelta_lt?: InputMaybe<Scalars['BigInt']>;
    hourlyStalkDelta_lte?: InputMaybe<Scalars['BigInt']>;
    hourlyStalkDelta_not?: InputMaybe<Scalars['BigInt']>;
    hourlyStalkDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyWithdrawnBDV?: InputMaybe<Scalars['BigInt']>;
    hourlyWithdrawnBDV_gt?: InputMaybe<Scalars['BigInt']>;
    hourlyWithdrawnBDV_gte?: InputMaybe<Scalars['BigInt']>;
    hourlyWithdrawnBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hourlyWithdrawnBDV_lt?: InputMaybe<Scalars['BigInt']>;
    hourlyWithdrawnBDV_lte?: InputMaybe<Scalars['BigInt']>;
    hourlyWithdrawnBDV_not?: InputMaybe<Scalars['BigInt']>;
    hourlyWithdrawnBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    lastUpdated?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdated_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    silo?: InputMaybe<Scalars['String']>;
    silo_?: InputMaybe<Silo_Filter>;
    silo_contains?: InputMaybe<Scalars['String']>;
    silo_contains_nocase?: InputMaybe<Scalars['String']>;
    silo_ends_with?: InputMaybe<Scalars['String']>;
    silo_ends_with_nocase?: InputMaybe<Scalars['String']>;
    silo_gt?: InputMaybe<Scalars['String']>;
    silo_gte?: InputMaybe<Scalars['String']>;
    silo_in?: InputMaybe<Array<Scalars['String']>>;
    silo_lt?: InputMaybe<Scalars['String']>;
    silo_lte?: InputMaybe<Scalars['String']>;
    silo_not?: InputMaybe<Scalars['String']>;
    silo_not_contains?: InputMaybe<Scalars['String']>;
    silo_not_contains_nocase?: InputMaybe<Scalars['String']>;
    silo_not_ends_with?: InputMaybe<Scalars['String']>;
    silo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    silo_not_in?: InputMaybe<Array<Scalars['String']>>;
    silo_not_starts_with?: InputMaybe<Scalars['String']>;
    silo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    silo_starts_with?: InputMaybe<Scalars['String']>;
    silo_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBeanMints?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_gt?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_gte?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBeanMints_lt?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_lte?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_not?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedBDV?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalFarmers?: InputMaybe<Scalars['Int']>;
    totalFarmers_gt?: InputMaybe<Scalars['Int']>;
    totalFarmers_gte?: InputMaybe<Scalars['Int']>;
    totalFarmers_in?: InputMaybe<Array<Scalars['Int']>>;
    totalFarmers_lt?: InputMaybe<Scalars['Int']>;
    totalFarmers_lte?: InputMaybe<Scalars['Int']>;
    totalFarmers_not?: InputMaybe<Scalars['Int']>;
    totalFarmers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalPlantableStalk?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_gt?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_gte?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPlantableStalk_lt?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_lte?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_not?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalRoots?: InputMaybe<Scalars['BigInt']>;
    totalRoots_gt?: InputMaybe<Scalars['BigInt']>;
    totalRoots_gte?: InputMaybe<Scalars['BigInt']>;
    totalRoots_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalRoots_lt?: InputMaybe<Scalars['BigInt']>;
    totalRoots_lte?: InputMaybe<Scalars['BigInt']>;
    totalRoots_not?: InputMaybe<Scalars['BigInt']>;
    totalRoots_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSeeds?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_gt?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_gte?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSeeds_lt?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_lte?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_not?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalStalk?: InputMaybe<Scalars['BigInt']>;
    totalStalk_gt?: InputMaybe<Scalars['BigInt']>;
    totalStalk_gte?: InputMaybe<Scalars['BigInt']>;
    totalStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalStalk_lt?: InputMaybe<Scalars['BigInt']>;
    totalStalk_lte?: InputMaybe<Scalars['BigInt']>;
    totalStalk_not?: InputMaybe<Scalars['BigInt']>;
    totalStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};
export declare enum SiloHourlySnapshot_OrderBy {
    BeansPerStalk = "beansPerStalk",
    BlockNumber = "blockNumber",
    CumulativeDepositedUsd = "cumulativeDepositedUSD",
    HourlyBeanMints = "hourlyBeanMints",
    HourlyClaimableBdv = "hourlyClaimableBDV",
    HourlyDepositedBdv = "hourlyDepositedBDV",
    HourlyDepositedUsd = "hourlyDepositedUSD",
    HourlyFarmers = "hourlyFarmers",
    HourlyPlantableStalkDelta = "hourlyPlantableStalkDelta",
    HourlyRootsDelta = "hourlyRootsDelta",
    HourlySeedsDelta = "hourlySeedsDelta",
    HourlyStalkDelta = "hourlyStalkDelta",
    HourlyWithdrawnBdv = "hourlyWithdrawnBDV",
    Id = "id",
    LastUpdated = "lastUpdated",
    Season = "season",
    Silo = "silo",
    Timestamp = "timestamp",
    TotalBeanMints = "totalBeanMints",
    TotalDepositedBdv = "totalDepositedBDV",
    TotalFarmers = "totalFarmers",
    TotalPlantableStalk = "totalPlantableStalk",
    TotalRoots = "totalRoots",
    TotalSeeds = "totalSeeds",
    TotalStalk = "totalStalk",
    TotalValueLockedUsd = "totalValueLockedUSD"
}
export declare type SiloWithdraw = {
    __typename?: 'SiloWithdraw';
    amount: Scalars['BigInt'];
    claimableSeason: Scalars['Int'];
    claimed: Scalars['Boolean'];
    createdAt: Scalars['BigInt'];
    farmer: Farmer;
    hash: Scalars['String'];
    /** Account - Deposit Token - Current Season */
    id: Scalars['ID'];
    token: Scalars['String'];
    withdrawSeason: Scalars['Int'];
};
export declare type SiloWithdraw_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    claimableSeason?: InputMaybe<Scalars['Int']>;
    claimableSeason_gt?: InputMaybe<Scalars['Int']>;
    claimableSeason_gte?: InputMaybe<Scalars['Int']>;
    claimableSeason_in?: InputMaybe<Array<Scalars['Int']>>;
    claimableSeason_lt?: InputMaybe<Scalars['Int']>;
    claimableSeason_lte?: InputMaybe<Scalars['Int']>;
    claimableSeason_not?: InputMaybe<Scalars['Int']>;
    claimableSeason_not_in?: InputMaybe<Array<Scalars['Int']>>;
    claimed?: InputMaybe<Scalars['Boolean']>;
    claimed_in?: InputMaybe<Array<Scalars['Boolean']>>;
    claimed_not?: InputMaybe<Scalars['Boolean']>;
    claimed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    createdAt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gt?: InputMaybe<Scalars['BigInt']>;
    createdAt_gte?: InputMaybe<Scalars['BigInt']>;
    createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    createdAt_lt?: InputMaybe<Scalars['BigInt']>;
    createdAt_lte?: InputMaybe<Scalars['BigInt']>;
    createdAt_not?: InputMaybe<Scalars['BigInt']>;
    createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    farmer?: InputMaybe<Scalars['String']>;
    farmer_?: InputMaybe<Farmer_Filter>;
    farmer_contains?: InputMaybe<Scalars['String']>;
    farmer_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_ends_with?: InputMaybe<Scalars['String']>;
    farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_gt?: InputMaybe<Scalars['String']>;
    farmer_gte?: InputMaybe<Scalars['String']>;
    farmer_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_lt?: InputMaybe<Scalars['String']>;
    farmer_lte?: InputMaybe<Scalars['String']>;
    farmer_not?: InputMaybe<Scalars['String']>;
    farmer_not_contains?: InputMaybe<Scalars['String']>;
    farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_not_starts_with?: InputMaybe<Scalars['String']>;
    farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_starts_with?: InputMaybe<Scalars['String']>;
    farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    token?: InputMaybe<Scalars['String']>;
    token_contains?: InputMaybe<Scalars['String']>;
    token_contains_nocase?: InputMaybe<Scalars['String']>;
    token_ends_with?: InputMaybe<Scalars['String']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_gt?: InputMaybe<Scalars['String']>;
    token_gte?: InputMaybe<Scalars['String']>;
    token_in?: InputMaybe<Array<Scalars['String']>>;
    token_lt?: InputMaybe<Scalars['String']>;
    token_lte?: InputMaybe<Scalars['String']>;
    token_not?: InputMaybe<Scalars['String']>;
    token_not_contains?: InputMaybe<Scalars['String']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token_not_ends_with?: InputMaybe<Scalars['String']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_in?: InputMaybe<Array<Scalars['String']>>;
    token_not_starts_with?: InputMaybe<Scalars['String']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_starts_with?: InputMaybe<Scalars['String']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']>;
    withdrawSeason?: InputMaybe<Scalars['Int']>;
    withdrawSeason_gt?: InputMaybe<Scalars['Int']>;
    withdrawSeason_gte?: InputMaybe<Scalars['Int']>;
    withdrawSeason_in?: InputMaybe<Array<Scalars['Int']>>;
    withdrawSeason_lt?: InputMaybe<Scalars['Int']>;
    withdrawSeason_lte?: InputMaybe<Scalars['Int']>;
    withdrawSeason_not?: InputMaybe<Scalars['Int']>;
    withdrawSeason_not_in?: InputMaybe<Array<Scalars['Int']>>;
};
export declare enum SiloWithdraw_OrderBy {
    Amount = "amount",
    ClaimableSeason = "claimableSeason",
    Claimed = "claimed",
    CreatedAt = "createdAt",
    Farmer = "farmer",
    Hash = "hash",
    Id = "id",
    Token = "token",
    WithdrawSeason = "withdrawSeason"
}
export declare type SiloYield = {
    __typename?: 'SiloYield';
    beansPerSeasonEMA: Scalars['BigDecimal'];
    beta: Scalars['BigDecimal'];
    fourSeedBeanAPY: Scalars['BigDecimal'];
    fourSeedStalkAPY: Scalars['BigDecimal'];
    /** Season of data points */
    id: Scalars['ID'];
    season: Scalars['Int'];
    timestamp: Scalars['BigInt'];
    twoSeedBeanAPY: Scalars['BigDecimal'];
    twoSeedStalkAPY: Scalars['BigDecimal'];
    u: Scalars['Int'];
};
export declare type SiloYield_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    beansPerSeasonEMA?: InputMaybe<Scalars['BigDecimal']>;
    beansPerSeasonEMA_gt?: InputMaybe<Scalars['BigDecimal']>;
    beansPerSeasonEMA_gte?: InputMaybe<Scalars['BigDecimal']>;
    beansPerSeasonEMA_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    beansPerSeasonEMA_lt?: InputMaybe<Scalars['BigDecimal']>;
    beansPerSeasonEMA_lte?: InputMaybe<Scalars['BigDecimal']>;
    beansPerSeasonEMA_not?: InputMaybe<Scalars['BigDecimal']>;
    beansPerSeasonEMA_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    beta?: InputMaybe<Scalars['BigDecimal']>;
    beta_gt?: InputMaybe<Scalars['BigDecimal']>;
    beta_gte?: InputMaybe<Scalars['BigDecimal']>;
    beta_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    beta_lt?: InputMaybe<Scalars['BigDecimal']>;
    beta_lte?: InputMaybe<Scalars['BigDecimal']>;
    beta_not?: InputMaybe<Scalars['BigDecimal']>;
    beta_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    fourSeedBeanAPY?: InputMaybe<Scalars['BigDecimal']>;
    fourSeedBeanAPY_gt?: InputMaybe<Scalars['BigDecimal']>;
    fourSeedBeanAPY_gte?: InputMaybe<Scalars['BigDecimal']>;
    fourSeedBeanAPY_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    fourSeedBeanAPY_lt?: InputMaybe<Scalars['BigDecimal']>;
    fourSeedBeanAPY_lte?: InputMaybe<Scalars['BigDecimal']>;
    fourSeedBeanAPY_not?: InputMaybe<Scalars['BigDecimal']>;
    fourSeedBeanAPY_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    fourSeedStalkAPY?: InputMaybe<Scalars['BigDecimal']>;
    fourSeedStalkAPY_gt?: InputMaybe<Scalars['BigDecimal']>;
    fourSeedStalkAPY_gte?: InputMaybe<Scalars['BigDecimal']>;
    fourSeedStalkAPY_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    fourSeedStalkAPY_lt?: InputMaybe<Scalars['BigDecimal']>;
    fourSeedStalkAPY_lte?: InputMaybe<Scalars['BigDecimal']>;
    fourSeedStalkAPY_not?: InputMaybe<Scalars['BigDecimal']>;
    fourSeedStalkAPY_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    twoSeedBeanAPY?: InputMaybe<Scalars['BigDecimal']>;
    twoSeedBeanAPY_gt?: InputMaybe<Scalars['BigDecimal']>;
    twoSeedBeanAPY_gte?: InputMaybe<Scalars['BigDecimal']>;
    twoSeedBeanAPY_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    twoSeedBeanAPY_lt?: InputMaybe<Scalars['BigDecimal']>;
    twoSeedBeanAPY_lte?: InputMaybe<Scalars['BigDecimal']>;
    twoSeedBeanAPY_not?: InputMaybe<Scalars['BigDecimal']>;
    twoSeedBeanAPY_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    twoSeedStalkAPY?: InputMaybe<Scalars['BigDecimal']>;
    twoSeedStalkAPY_gt?: InputMaybe<Scalars['BigDecimal']>;
    twoSeedStalkAPY_gte?: InputMaybe<Scalars['BigDecimal']>;
    twoSeedStalkAPY_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    twoSeedStalkAPY_lt?: InputMaybe<Scalars['BigDecimal']>;
    twoSeedStalkAPY_lte?: InputMaybe<Scalars['BigDecimal']>;
    twoSeedStalkAPY_not?: InputMaybe<Scalars['BigDecimal']>;
    twoSeedStalkAPY_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    u?: InputMaybe<Scalars['Int']>;
    u_gt?: InputMaybe<Scalars['Int']>;
    u_gte?: InputMaybe<Scalars['Int']>;
    u_in?: InputMaybe<Array<Scalars['Int']>>;
    u_lt?: InputMaybe<Scalars['Int']>;
    u_lte?: InputMaybe<Scalars['Int']>;
    u_not?: InputMaybe<Scalars['Int']>;
    u_not_in?: InputMaybe<Array<Scalars['Int']>>;
};
export declare enum SiloYield_OrderBy {
    BeansPerSeasonEma = "beansPerSeasonEMA",
    Beta = "beta",
    FourSeedBeanApy = "fourSeedBeanAPY",
    FourSeedStalkApy = "fourSeedStalkAPY",
    Id = "id",
    Season = "season",
    Timestamp = "timestamp",
    TwoSeedBeanApy = "twoSeedBeanAPY",
    TwoSeedStalkApy = "twoSeedStalkAPY",
    U = "u"
}
export declare type Silo_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    assets_?: InputMaybe<SiloAsset_Filter>;
    beanstalk?: InputMaybe<Scalars['String']>;
    beanstalk_?: InputMaybe<Beanstalk_Filter>;
    beanstalk_contains?: InputMaybe<Scalars['String']>;
    beanstalk_contains_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_ends_with?: InputMaybe<Scalars['String']>;
    beanstalk_ends_with_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_gt?: InputMaybe<Scalars['String']>;
    beanstalk_gte?: InputMaybe<Scalars['String']>;
    beanstalk_in?: InputMaybe<Array<Scalars['String']>>;
    beanstalk_lt?: InputMaybe<Scalars['String']>;
    beanstalk_lte?: InputMaybe<Scalars['String']>;
    beanstalk_not?: InputMaybe<Scalars['String']>;
    beanstalk_not_contains?: InputMaybe<Scalars['String']>;
    beanstalk_not_contains_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_not_ends_with?: InputMaybe<Scalars['String']>;
    beanstalk_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_not_in?: InputMaybe<Array<Scalars['String']>>;
    beanstalk_not_starts_with?: InputMaybe<Scalars['String']>;
    beanstalk_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    beanstalk_starts_with?: InputMaybe<Scalars['String']>;
    beanstalk_starts_with_nocase?: InputMaybe<Scalars['String']>;
    dailySnapshots_?: InputMaybe<SiloDailySnapshot_Filter>;
    farmer?: InputMaybe<Scalars['String']>;
    farmer_?: InputMaybe<Farmer_Filter>;
    farmer_contains?: InputMaybe<Scalars['String']>;
    farmer_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_ends_with?: InputMaybe<Scalars['String']>;
    farmer_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_gt?: InputMaybe<Scalars['String']>;
    farmer_gte?: InputMaybe<Scalars['String']>;
    farmer_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_lt?: InputMaybe<Scalars['String']>;
    farmer_lte?: InputMaybe<Scalars['String']>;
    farmer_not?: InputMaybe<Scalars['String']>;
    farmer_not_contains?: InputMaybe<Scalars['String']>;
    farmer_not_contains_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with?: InputMaybe<Scalars['String']>;
    farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_not_in?: InputMaybe<Array<Scalars['String']>>;
    farmer_not_starts_with?: InputMaybe<Scalars['String']>;
    farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    farmer_starts_with?: InputMaybe<Scalars['String']>;
    farmer_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hourlySnapshots_?: InputMaybe<SiloHourlySnapshot_Filter>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    totalBeanMints?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_gt?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_gte?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBeanMints_lt?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_lte?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_not?: InputMaybe<Scalars['BigInt']>;
    totalBeanMints_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedBDV?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_gt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_gte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalDepositedBDV_lt?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_lte?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_not?: InputMaybe<Scalars['BigInt']>;
    totalDepositedBDV_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalFarmers?: InputMaybe<Scalars['Int']>;
    totalFarmers_gt?: InputMaybe<Scalars['Int']>;
    totalFarmers_gte?: InputMaybe<Scalars['Int']>;
    totalFarmers_in?: InputMaybe<Array<Scalars['Int']>>;
    totalFarmers_lt?: InputMaybe<Scalars['Int']>;
    totalFarmers_lte?: InputMaybe<Scalars['Int']>;
    totalFarmers_not?: InputMaybe<Scalars['Int']>;
    totalFarmers_not_in?: InputMaybe<Array<Scalars['Int']>>;
    totalPlantableStalk?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_gt?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_gte?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalPlantableStalk_lt?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_lte?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_not?: InputMaybe<Scalars['BigInt']>;
    totalPlantableStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalRoots?: InputMaybe<Scalars['BigInt']>;
    totalRoots_gt?: InputMaybe<Scalars['BigInt']>;
    totalRoots_gte?: InputMaybe<Scalars['BigInt']>;
    totalRoots_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalRoots_lt?: InputMaybe<Scalars['BigInt']>;
    totalRoots_lte?: InputMaybe<Scalars['BigInt']>;
    totalRoots_not?: InputMaybe<Scalars['BigInt']>;
    totalRoots_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSeeds?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_gt?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_gte?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSeeds_lt?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_lte?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_not?: InputMaybe<Scalars['BigInt']>;
    totalSeeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalStalk?: InputMaybe<Scalars['BigInt']>;
    totalStalk_gt?: InputMaybe<Scalars['BigInt']>;
    totalStalk_gte?: InputMaybe<Scalars['BigInt']>;
    totalStalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalStalk_lt?: InputMaybe<Scalars['BigInt']>;
    totalStalk_lte?: InputMaybe<Scalars['BigInt']>;
    totalStalk_not?: InputMaybe<Scalars['BigInt']>;
    totalStalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    whitelistedTokens?: InputMaybe<Array<Scalars['String']>>;
    whitelistedTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    whitelistedTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    whitelistedTokens_not?: InputMaybe<Array<Scalars['String']>>;
    whitelistedTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    whitelistedTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
};
export declare enum Silo_OrderBy {
    Assets = "assets",
    Beanstalk = "beanstalk",
    DailySnapshots = "dailySnapshots",
    Farmer = "farmer",
    HourlySnapshots = "hourlySnapshots",
    Id = "id",
    TotalBeanMints = "totalBeanMints",
    TotalDepositedBdv = "totalDepositedBDV",
    TotalFarmers = "totalFarmers",
    TotalPlantableStalk = "totalPlantableStalk",
    TotalRoots = "totalRoots",
    TotalSeeds = "totalSeeds",
    TotalStalk = "totalStalk",
    TotalValueLockedUsd = "totalValueLockedUSD",
    WhitelistedTokens = "whitelistedTokens"
}
export declare type StalkChange = SiloEvent & {
    __typename?: 'StalkChange';
    /**  Account removing deposit */
    account: Scalars['String'];
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Token removed */
    delta: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /** stalkChange-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /**  Season when the change happened  */
    season: Scalars['Int'];
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
};
export declare type StalkChange_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    account?: InputMaybe<Scalars['String']>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    delta?: InputMaybe<Scalars['BigInt']>;
    delta_gt?: InputMaybe<Scalars['BigInt']>;
    delta_gte?: InputMaybe<Scalars['BigInt']>;
    delta_in?: InputMaybe<Array<Scalars['BigInt']>>;
    delta_lt?: InputMaybe<Scalars['BigInt']>;
    delta_lte?: InputMaybe<Scalars['BigInt']>;
    delta_not?: InputMaybe<Scalars['BigInt']>;
    delta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    season?: InputMaybe<Scalars['Int']>;
    season_gt?: InputMaybe<Scalars['Int']>;
    season_gte?: InputMaybe<Scalars['Int']>;
    season_in?: InputMaybe<Array<Scalars['Int']>>;
    season_lt?: InputMaybe<Scalars['Int']>;
    season_lte?: InputMaybe<Scalars['Int']>;
    season_not?: InputMaybe<Scalars['Int']>;
    season_not_in?: InputMaybe<Array<Scalars['Int']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};
export declare enum StalkChange_OrderBy {
    Account = "account",
    BlockNumber = "blockNumber",
    Delta = "delta",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Season = "season",
    Timestamp = "timestamp"
}
export declare type Subscription = {
    __typename?: 'Subscription';
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
    addDeposit?: Maybe<AddDeposit>;
    addDeposits: Array<AddDeposit>;
    beanstalk?: Maybe<Beanstalk>;
    beanstalks: Array<Beanstalk>;
    chop?: Maybe<Chop>;
    chops: Array<Chop>;
    dewhitelistToken?: Maybe<DewhitelistToken>;
    dewhitelistTokens: Array<DewhitelistToken>;
    event?: Maybe<Event>;
    events: Array<Event>;
    farmer?: Maybe<Farmer>;
    farmers: Array<Farmer>;
    fertilizer?: Maybe<Fertilizer>;
    fertilizerBalance?: Maybe<FertilizerBalance>;
    fertilizerBalances: Array<FertilizerBalance>;
    fertilizerToken?: Maybe<FertilizerToken>;
    fertilizerTokens: Array<FertilizerToken>;
    fertilizers: Array<Fertilizer>;
    field?: Maybe<Field>;
    fieldDailySnapshot?: Maybe<FieldDailySnapshot>;
    fieldDailySnapshots: Array<FieldDailySnapshot>;
    fieldEvent?: Maybe<FieldEvent>;
    fieldEvents: Array<FieldEvent>;
    fieldHourlySnapshot?: Maybe<FieldHourlySnapshot>;
    fieldHourlySnapshots: Array<FieldHourlySnapshot>;
    fields: Array<Field>;
    harvest?: Maybe<Harvest>;
    harvests: Array<Harvest>;
    incentive?: Maybe<Incentive>;
    incentives: Array<Incentive>;
    marketplaceEvent?: Maybe<MarketplaceEvent>;
    marketplaceEvents: Array<MarketplaceEvent>;
    metapoolOracle?: Maybe<MetapoolOracle>;
    metapoolOracles: Array<MetapoolOracle>;
    plot?: Maybe<Plot>;
    plots: Array<Plot>;
    podFill?: Maybe<PodFill>;
    podFills: Array<PodFill>;
    podListing?: Maybe<PodListing>;
    podListingCancelled?: Maybe<PodListingCancelled>;
    podListingCancelleds: Array<PodListingCancelled>;
    podListingCreated?: Maybe<PodListingCreated>;
    podListingCreateds: Array<PodListingCreated>;
    podListingFilled?: Maybe<PodListingFilled>;
    podListingFilleds: Array<PodListingFilled>;
    podListings: Array<PodListing>;
    podMarketplace?: Maybe<PodMarketplace>;
    podMarketplaceDailySnapshot?: Maybe<PodMarketplaceDailySnapshot>;
    podMarketplaceDailySnapshots: Array<PodMarketplaceDailySnapshot>;
    podMarketplaceHourlySnapshot?: Maybe<PodMarketplaceHourlySnapshot>;
    podMarketplaceHourlySnapshots: Array<PodMarketplaceHourlySnapshot>;
    podMarketplaces: Array<PodMarketplace>;
    podOrder?: Maybe<PodOrder>;
    podOrderCancelled?: Maybe<PodOrderCancelled>;
    podOrderCancelleds: Array<PodOrderCancelled>;
    podOrderCreated?: Maybe<PodOrderCreated>;
    podOrderCreateds: Array<PodOrderCreated>;
    podOrderFilled?: Maybe<PodOrderFilled>;
    podOrderFilleds: Array<PodOrderFilled>;
    podOrders: Array<PodOrder>;
    podTransfer?: Maybe<PodTransfer>;
    podTransfers: Array<PodTransfer>;
    removeDeposit?: Maybe<RemoveDeposit>;
    removeDeposits: Array<RemoveDeposit>;
    reward?: Maybe<Reward>;
    rewardToken?: Maybe<RewardToken>;
    rewardTokens: Array<RewardToken>;
    rewards: Array<Reward>;
    season?: Maybe<Season>;
    seasons: Array<Season>;
    seedChange?: Maybe<SeedChange>;
    seedChanges: Array<SeedChange>;
    silo?: Maybe<Silo>;
    siloAsset?: Maybe<SiloAsset>;
    siloAssetDailySnapshot?: Maybe<SiloAssetDailySnapshot>;
    siloAssetDailySnapshots: Array<SiloAssetDailySnapshot>;
    siloAssetHourlySnapshot?: Maybe<SiloAssetHourlySnapshot>;
    siloAssetHourlySnapshots: Array<SiloAssetHourlySnapshot>;
    siloAssets: Array<SiloAsset>;
    siloDailySnapshot?: Maybe<SiloDailySnapshot>;
    siloDailySnapshots: Array<SiloDailySnapshot>;
    siloDeposit?: Maybe<SiloDeposit>;
    siloDeposits: Array<SiloDeposit>;
    siloEvent?: Maybe<SiloEvent>;
    siloEvents: Array<SiloEvent>;
    siloHourlySnapshot?: Maybe<SiloHourlySnapshot>;
    siloHourlySnapshots: Array<SiloHourlySnapshot>;
    siloWithdraw?: Maybe<SiloWithdraw>;
    siloWithdraws: Array<SiloWithdraw>;
    siloYield?: Maybe<SiloYield>;
    siloYields: Array<SiloYield>;
    silos: Array<Silo>;
    stalkChange?: Maybe<StalkChange>;
    stalkChanges: Array<StalkChange>;
    token?: Maybe<Token>;
    tokens: Array<Token>;
    transaction?: Maybe<Transaction>;
    transactions: Array<Transaction>;
    whitelistToken?: Maybe<WhitelistToken>;
    whitelistTokens: Array<WhitelistToken>;
};
export declare type Subscription_MetaArgs = {
    block?: InputMaybe<Block_Height>;
};
export declare type SubscriptionAddDepositArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionAddDepositsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AddDeposit_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<AddDeposit_Filter>;
};
export declare type SubscriptionBeanstalkArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionBeanstalksArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Beanstalk_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Beanstalk_Filter>;
};
export declare type SubscriptionChopArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionChopsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Chop_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Chop_Filter>;
};
export declare type SubscriptionDewhitelistTokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionDewhitelistTokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<DewhitelistToken_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<DewhitelistToken_Filter>;
};
export declare type SubscriptionEventArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionEventsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Event_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Event_Filter>;
};
export declare type SubscriptionFarmerArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionFarmersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Farmer_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Farmer_Filter>;
};
export declare type SubscriptionFertilizerArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionFertilizerBalanceArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionFertilizerBalancesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FertilizerBalance_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<FertilizerBalance_Filter>;
};
export declare type SubscriptionFertilizerTokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionFertilizerTokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FertilizerToken_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<FertilizerToken_Filter>;
};
export declare type SubscriptionFertilizersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Fertilizer_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Fertilizer_Filter>;
};
export declare type SubscriptionFieldArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionFieldDailySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionFieldDailySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FieldDailySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<FieldDailySnapshot_Filter>;
};
export declare type SubscriptionFieldEventArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionFieldEventsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FieldEvent_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<FieldEvent_Filter>;
};
export declare type SubscriptionFieldHourlySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionFieldHourlySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<FieldHourlySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<FieldHourlySnapshot_Filter>;
};
export declare type SubscriptionFieldsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Field_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Field_Filter>;
};
export declare type SubscriptionHarvestArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionHarvestsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Harvest_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Harvest_Filter>;
};
export declare type SubscriptionIncentiveArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionIncentivesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Incentive_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Incentive_Filter>;
};
export declare type SubscriptionMarketplaceEventArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionMarketplaceEventsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketplaceEvent_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<MarketplaceEvent_Filter>;
};
export declare type SubscriptionMetapoolOracleArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionMetapoolOraclesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MetapoolOracle_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<MetapoolOracle_Filter>;
};
export declare type SubscriptionPlotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPlotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Plot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Plot_Filter>;
};
export declare type SubscriptionPodFillArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPodFillsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodFill_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodFill_Filter>;
};
export declare type SubscriptionPodListingArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPodListingCancelledArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPodListingCancelledsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodListingCancelled_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodListingCancelled_Filter>;
};
export declare type SubscriptionPodListingCreatedArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPodListingCreatedsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodListingCreated_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodListingCreated_Filter>;
};
export declare type SubscriptionPodListingFilledArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPodListingFilledsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodListingFilled_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodListingFilled_Filter>;
};
export declare type SubscriptionPodListingsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodListing_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodListing_Filter>;
};
export declare type SubscriptionPodMarketplaceArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPodMarketplaceDailySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPodMarketplaceDailySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodMarketplaceDailySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodMarketplaceDailySnapshot_Filter>;
};
export declare type SubscriptionPodMarketplaceHourlySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPodMarketplaceHourlySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodMarketplaceHourlySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodMarketplaceHourlySnapshot_Filter>;
};
export declare type SubscriptionPodMarketplacesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodMarketplace_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodMarketplace_Filter>;
};
export declare type SubscriptionPodOrderArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPodOrderCancelledArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPodOrderCancelledsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodOrderCancelled_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodOrderCancelled_Filter>;
};
export declare type SubscriptionPodOrderCreatedArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPodOrderCreatedsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodOrderCreated_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodOrderCreated_Filter>;
};
export declare type SubscriptionPodOrderFilledArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPodOrderFilledsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodOrderFilled_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodOrderFilled_Filter>;
};
export declare type SubscriptionPodOrdersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodOrder_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodOrder_Filter>;
};
export declare type SubscriptionPodTransferArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionPodTransfersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PodTransfer_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<PodTransfer_Filter>;
};
export declare type SubscriptionRemoveDepositArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionRemoveDepositsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RemoveDeposit_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<RemoveDeposit_Filter>;
};
export declare type SubscriptionRewardArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionRewardTokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionRewardTokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RewardToken_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<RewardToken_Filter>;
};
export declare type SubscriptionRewardsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Reward_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Reward_Filter>;
};
export declare type SubscriptionSeasonArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionSeasonsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Season_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Season_Filter>;
};
export declare type SubscriptionSeedChangeArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionSeedChangesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SeedChange_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SeedChange_Filter>;
};
export declare type SubscriptionSiloArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionSiloAssetArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionSiloAssetDailySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionSiloAssetDailySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloAssetDailySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloAssetDailySnapshot_Filter>;
};
export declare type SubscriptionSiloAssetHourlySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionSiloAssetHourlySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloAssetHourlySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloAssetHourlySnapshot_Filter>;
};
export declare type SubscriptionSiloAssetsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloAsset_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloAsset_Filter>;
};
export declare type SubscriptionSiloDailySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionSiloDailySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloDailySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloDailySnapshot_Filter>;
};
export declare type SubscriptionSiloDepositArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionSiloDepositsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloDeposit_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloDeposit_Filter>;
};
export declare type SubscriptionSiloEventArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionSiloEventsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloEvent_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloEvent_Filter>;
};
export declare type SubscriptionSiloHourlySnapshotArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionSiloHourlySnapshotsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloHourlySnapshot_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloHourlySnapshot_Filter>;
};
export declare type SubscriptionSiloWithdrawArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionSiloWithdrawsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloWithdraw_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloWithdraw_Filter>;
};
export declare type SubscriptionSiloYieldArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionSiloYieldsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SiloYield_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<SiloYield_Filter>;
};
export declare type SubscriptionSilosArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Silo_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Silo_Filter>;
};
export declare type SubscriptionStalkChangeArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionStalkChangesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<StalkChange_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<StalkChange_Filter>;
};
export declare type SubscriptionTokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionTokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Token_Filter>;
};
export declare type SubscriptionTransactionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionTransactionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Transaction_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Transaction_Filter>;
};
export declare type SubscriptionWhitelistTokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export declare type SubscriptionWhitelistTokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WhitelistToken_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<WhitelistToken_Filter>;
};
export declare type Token = {
    __typename?: 'Token';
    /**  The number of decimal places this token uses, default to 18  */
    decimals: Scalars['Int'];
    /**  Smart contract address of the token  */
    id: Scalars['ID'];
    /**  Optional field to track the block number of the last token price  */
    lastPriceBlockNumber?: Maybe<Scalars['BigInt']>;
    /**  Optional field to track the price of a token, mostly for caching purposes  */
    lastPriceUSD?: Maybe<Scalars['BigDecimal']>;
    /**  Name of the token, mirrored from the smart contract  */
    name: Scalars['String'];
    /**  Symbol of the token, mirrored from the smart contract  */
    symbol: Scalars['String'];
};
export declare type Token_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    decimals?: InputMaybe<Scalars['Int']>;
    decimals_gt?: InputMaybe<Scalars['Int']>;
    decimals_gte?: InputMaybe<Scalars['Int']>;
    decimals_in?: InputMaybe<Array<Scalars['Int']>>;
    decimals_lt?: InputMaybe<Scalars['Int']>;
    decimals_lte?: InputMaybe<Scalars['Int']>;
    decimals_not?: InputMaybe<Scalars['Int']>;
    decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    lastPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    name?: InputMaybe<Scalars['String']>;
    name_contains?: InputMaybe<Scalars['String']>;
    name_contains_nocase?: InputMaybe<Scalars['String']>;
    name_ends_with?: InputMaybe<Scalars['String']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']>;
    name_gt?: InputMaybe<Scalars['String']>;
    name_gte?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<Scalars['String']>>;
    name_lt?: InputMaybe<Scalars['String']>;
    name_lte?: InputMaybe<Scalars['String']>;
    name_not?: InputMaybe<Scalars['String']>;
    name_not_contains?: InputMaybe<Scalars['String']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']>;
    name_not_ends_with?: InputMaybe<Scalars['String']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_in?: InputMaybe<Array<Scalars['String']>>;
    name_not_starts_with?: InputMaybe<Scalars['String']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_starts_with?: InputMaybe<Scalars['String']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']>;
    symbol?: InputMaybe<Scalars['String']>;
    symbol_contains?: InputMaybe<Scalars['String']>;
    symbol_contains_nocase?: InputMaybe<Scalars['String']>;
    symbol_ends_with?: InputMaybe<Scalars['String']>;
    symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_gt?: InputMaybe<Scalars['String']>;
    symbol_gte?: InputMaybe<Scalars['String']>;
    symbol_in?: InputMaybe<Array<Scalars['String']>>;
    symbol_lt?: InputMaybe<Scalars['String']>;
    symbol_lte?: InputMaybe<Scalars['String']>;
    symbol_not?: InputMaybe<Scalars['String']>;
    symbol_not_contains?: InputMaybe<Scalars['String']>;
    symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_ends_with?: InputMaybe<Scalars['String']>;
    symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    symbol_not_starts_with?: InputMaybe<Scalars['String']>;
    symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_starts_with?: InputMaybe<Scalars['String']>;
    symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
};
export declare enum Token_OrderBy {
    Decimals = "decimals",
    Id = "id",
    LastPriceBlockNumber = "lastPriceBlockNumber",
    LastPriceUsd = "lastPriceUSD",
    Name = "name",
    Symbol = "symbol"
}
export declare type Transaction = {
    __typename?: 'Transaction';
    blockNumber: Scalars['BigInt'];
    from: Scalars['Bytes'];
    id: Scalars['ID'];
    timestamp: Scalars['BigInt'];
    to?: Maybe<Scalars['Bytes']>;
};
export declare type Transaction_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    from?: InputMaybe<Scalars['Bytes']>;
    from_contains?: InputMaybe<Scalars['Bytes']>;
    from_in?: InputMaybe<Array<Scalars['Bytes']>>;
    from_not?: InputMaybe<Scalars['Bytes']>;
    from_not_contains?: InputMaybe<Scalars['Bytes']>;
    from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    to?: InputMaybe<Scalars['Bytes']>;
    to_contains?: InputMaybe<Scalars['Bytes']>;
    to_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_not?: InputMaybe<Scalars['Bytes']>;
    to_not_contains?: InputMaybe<Scalars['Bytes']>;
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};
export declare enum Transaction_OrderBy {
    BlockNumber = "blockNumber",
    From = "from",
    Id = "id",
    Timestamp = "timestamp",
    To = "to"
}
export declare type WhitelistToken = SiloEvent & {
    __typename?: 'WhitelistToken';
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String'];
    /** whitelistToken-{ Transaction hash }-{ Log index } */
    id: Scalars['ID'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  The protocol this transaction belongs to  */
    protocol: Beanstalk;
    /** Seeds per BDV */
    seeds: Scalars['BigInt'];
    /** Selector for token */
    selector: Scalars['String'];
    /** Stalk per BDV */
    stalk: Scalars['BigInt'];
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt'];
    /** Token address whitelisted */
    token: Scalars['String'];
};
export declare type WhitelistToken_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hash?: InputMaybe<Scalars['String']>;
    hash_contains?: InputMaybe<Scalars['String']>;
    hash_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_ends_with?: InputMaybe<Scalars['String']>;
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_gt?: InputMaybe<Scalars['String']>;
    hash_gte?: InputMaybe<Scalars['String']>;
    hash_in?: InputMaybe<Array<Scalars['String']>>;
    hash_lt?: InputMaybe<Scalars['String']>;
    hash_lte?: InputMaybe<Scalars['String']>;
    hash_not?: InputMaybe<Scalars['String']>;
    hash_not_contains?: InputMaybe<Scalars['String']>;
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
    hash_not_ends_with?: InputMaybe<Scalars['String']>;
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    hash_not_in?: InputMaybe<Array<Scalars['String']>>;
    hash_not_starts_with?: InputMaybe<Scalars['String']>;
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    hash_starts_with?: InputMaybe<Scalars['String']>;
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    logIndex?: InputMaybe<Scalars['Int']>;
    logIndex_gt?: InputMaybe<Scalars['Int']>;
    logIndex_gte?: InputMaybe<Scalars['Int']>;
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
    logIndex_lt?: InputMaybe<Scalars['Int']>;
    logIndex_lte?: InputMaybe<Scalars['Int']>;
    logIndex_not?: InputMaybe<Scalars['Int']>;
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Beanstalk_Filter>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    seeds?: InputMaybe<Scalars['BigInt']>;
    seeds_gt?: InputMaybe<Scalars['BigInt']>;
    seeds_gte?: InputMaybe<Scalars['BigInt']>;
    seeds_in?: InputMaybe<Array<Scalars['BigInt']>>;
    seeds_lt?: InputMaybe<Scalars['BigInt']>;
    seeds_lte?: InputMaybe<Scalars['BigInt']>;
    seeds_not?: InputMaybe<Scalars['BigInt']>;
    seeds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    selector?: InputMaybe<Scalars['String']>;
    selector_contains?: InputMaybe<Scalars['String']>;
    selector_contains_nocase?: InputMaybe<Scalars['String']>;
    selector_ends_with?: InputMaybe<Scalars['String']>;
    selector_ends_with_nocase?: InputMaybe<Scalars['String']>;
    selector_gt?: InputMaybe<Scalars['String']>;
    selector_gte?: InputMaybe<Scalars['String']>;
    selector_in?: InputMaybe<Array<Scalars['String']>>;
    selector_lt?: InputMaybe<Scalars['String']>;
    selector_lte?: InputMaybe<Scalars['String']>;
    selector_not?: InputMaybe<Scalars['String']>;
    selector_not_contains?: InputMaybe<Scalars['String']>;
    selector_not_contains_nocase?: InputMaybe<Scalars['String']>;
    selector_not_ends_with?: InputMaybe<Scalars['String']>;
    selector_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    selector_not_in?: InputMaybe<Array<Scalars['String']>>;
    selector_not_starts_with?: InputMaybe<Scalars['String']>;
    selector_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    selector_starts_with?: InputMaybe<Scalars['String']>;
    selector_starts_with_nocase?: InputMaybe<Scalars['String']>;
    stalk?: InputMaybe<Scalars['BigInt']>;
    stalk_gt?: InputMaybe<Scalars['BigInt']>;
    stalk_gte?: InputMaybe<Scalars['BigInt']>;
    stalk_in?: InputMaybe<Array<Scalars['BigInt']>>;
    stalk_lt?: InputMaybe<Scalars['BigInt']>;
    stalk_lte?: InputMaybe<Scalars['BigInt']>;
    stalk_not?: InputMaybe<Scalars['BigInt']>;
    stalk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    token?: InputMaybe<Scalars['String']>;
    token_contains?: InputMaybe<Scalars['String']>;
    token_contains_nocase?: InputMaybe<Scalars['String']>;
    token_ends_with?: InputMaybe<Scalars['String']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_gt?: InputMaybe<Scalars['String']>;
    token_gte?: InputMaybe<Scalars['String']>;
    token_in?: InputMaybe<Array<Scalars['String']>>;
    token_lt?: InputMaybe<Scalars['String']>;
    token_lte?: InputMaybe<Scalars['String']>;
    token_not?: InputMaybe<Scalars['String']>;
    token_not_contains?: InputMaybe<Scalars['String']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token_not_ends_with?: InputMaybe<Scalars['String']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_in?: InputMaybe<Array<Scalars['String']>>;
    token_not_starts_with?: InputMaybe<Scalars['String']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_starts_with?: InputMaybe<Scalars['String']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};
export declare enum WhitelistToken_OrderBy {
    BlockNumber = "blockNumber",
    Hash = "hash",
    Id = "id",
    LogIndex = "logIndex",
    Protocol = "protocol",
    Seeds = "seeds",
    Selector = "selector",
    Stalk = "stalk",
    Timestamp = "timestamp",
    Token = "token"
}
export declare type _Block_ = {
    __typename?: '_Block_';
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
};
/** The type for the top-level _meta field */
export declare type _Meta_ = {
    __typename?: '_Meta_';
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean'];
};
export declare enum _SubgraphErrorPolicy_ {
    /** Data will be returned even if the subgraph has indexing errors */
    Allow = "allow",
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    Deny = "deny"
}
export declare type PodListingFragment = {
    __typename?: 'PodListing';
    id: string;
    index: any;
    createdAt: any;
    updatedAt: any;
    status: MarketStatus;
    originalIndex: any;
    amount: any;
    totalAmount: any;
    remainingAmount: any;
    start: any;
    pricePerPod: number;
    maxHarvestableIndex: any;
    mode: number;
};
export declare type GetListingByIndexQueryVariables = Exact<{
    index?: InputMaybe<Scalars['BigInt']>;
}>;
export declare type GetListingByIndexQuery = {
    __typename?: 'Query';
    podListings: Array<{
        __typename?: 'PodListing';
        id: string;
        index: any;
        createdAt: any;
        updatedAt: any;
        status: MarketStatus;
        originalIndex: any;
        amount: any;
        totalAmount: any;
        remainingAmount: any;
        start: any;
        pricePerPod: number;
        maxHarvestableIndex: any;
        mode: number;
    }>;
};
export declare type GetSiloBalanceQueryVariables = Exact<{
    token?: InputMaybe<Scalars['String']>;
    account: Scalars['ID'];
    season: Scalars['Int'];
}>;
export declare type GetSiloBalanceQuery = {
    __typename?: 'Query';
    farmer?: {
        __typename?: 'Farmer';
        deposited: Array<{
            __typename?: 'SiloDeposit';
            season: number;
            token: string;
            amount: any;
            bdv: any;
        }>;
        withdrawn: Array<{
            __typename?: 'SiloWithdraw';
            token: string;
            amount: any;
            season: number;
        }>;
        claimable: Array<{
            __typename?: 'SiloWithdraw';
            token: string;
            amount: any;
            season: number;
        }>;
    } | null;
};
export declare type GetSiloBalancesQueryVariables = Exact<{
    account: Scalars['ID'];
    season: Scalars['Int'];
}>;
export declare type GetSiloBalancesQuery = {
    __typename?: 'Query';
    farmer?: {
        __typename?: 'Farmer';
        deposited: Array<{
            __typename?: 'SiloDeposit';
            season: number;
            token: string;
            amount: any;
            bdv: any;
        }>;
        withdrawn: Array<{
            __typename?: 'SiloWithdraw';
            token: string;
            amount: any;
            season: number;
        }>;
        claimable: Array<{
            __typename?: 'SiloWithdraw';
            token: string;
            amount: any;
            season: number;
        }>;
    } | null;
};
export declare type GetSiloWhitelistQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetSiloWhitelistQuery = {
    __typename?: 'Query';
    whitelistTokens: Array<{
        __typename?: 'WhitelistToken';
        token: string;
        stalk: any;
        seeds: any;
    }>;
};
export declare const PodListingFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const GetListingByIndexDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSiloBalanceDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSiloBalancesDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSiloWhitelistDocument: import("graphql/language/ast").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    getListingByIndex(variables?: GetListingByIndexQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetListingByIndexQuery>;
    getSiloBalance(variables: GetSiloBalanceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSiloBalanceQuery>;
    getSiloBalances(variables: GetSiloBalancesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSiloBalancesQuery>;
    getSiloWhitelist(variables?: GetSiloWhitelistQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSiloWhitelistQuery>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
