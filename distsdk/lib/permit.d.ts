import { BeanstalkSDK } from "./BeanstalkSDK";
export declare type EIP712Domain = {
    name: string;
    version: string;
    chainId: number;
    verifyingContract: string;
};
export declare type EIP712PermitMessage<D extends {} = {}> = ({
    owner: string;
    spender: string;
} & D & {
    nonce: number | string;
    deadline: number | string;
});
export declare type EIP2612PermitMessage = EIP712PermitMessage<{
    value: number | string;
}>;
export interface RSV {
    r: string;
    s: string;
    v: number;
}
export declare type EIP712TypedData<Message extends EIP712PermitMessage = any, Domain extends EIP712Domain = EIP712Domain> = {
    types: {
        EIP712Domain: typeof Permit.EIP712_DOMAIN;
        Permit: ({
            name: string;
            type: string;
        })[];
    };
    primaryType: string;
    domain: Domain;
    message: Message;
};
export declare type SignedPermit<Message extends EIP712PermitMessage = any, Domain extends EIP712Domain = EIP712Domain> = {
    /** The account that signed the permit. */
    owner: string;
    /** The typed data included within the permit. */
    typedData: EIP712TypedData<Message, Domain>;
    /** The raw signature output for this permit, signed by `owner`. */
    rawSignature: string;
    /** The "RSV" split of the raw signature. */
    split: RSV;
};
/**
 * @ref https://github.com/dmihal/eth-permit/blob/master/src/eth-permit.ts
 */
export declare class Permit {
    static sdk: BeanstalkSDK;
    static MAX_UINT256: string;
    static NONCES_FN: string;
    static EIP712_DOMAIN: readonly [{
        readonly name: "name";
        readonly type: "string";
    }, {
        readonly name: "version";
        readonly type: "string";
    }, {
        readonly name: "chainId";
        readonly type: "uint256";
    }, {
        readonly name: "verifyingContract";
        readonly type: "address";
    }];
    constructor(sdk: BeanstalkSDK);
    /**
     * https://github.com/dmihal/eth-permit/blob/34f3fb59f0e32d8c19933184f5a7121ee125d0a5/src/rpc.ts#L52
     */
    static signatureToRSV(signature: string): RSV;
    /**
     * Request a signature for arbitrary typed data.
     * @ref https://github.com/dmihal/eth-permit/blob/34f3fb59f0e32d8c19933184f5a7121ee125d0a5/src/rpc.ts#L73
     */
    sign<Message extends EIP712PermitMessage>(owner: string, typedData: EIP712TypedData<Message>): Promise<SignedPermit<Message>>;
}
