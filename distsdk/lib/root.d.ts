import { Overrides } from "ethers";
import { DepositTransferStruct } from "../constants/generated/Beanstalk/Root";
import { BeanstalkSDK } from "./BeanstalkSDK";
import { FarmToMode } from "./farm/types";
import { SignedPermit } from "./permit";
import { DepositTokenPermitMessage, DepositTokensPermitMessage } from "./silo.utils";
export declare class Root {
    static sdk: BeanstalkSDK;
    /** @DISCUSS this pattern */
    static address: string;
    constructor(sdk: BeanstalkSDK);
    /**
     * Mint ROOT tokens. The `Root.sol` contract supports Beanstalk's
     * Deposit Transfer permits; this function unpacks a provided
     * signed permit into the proper argument slots.
     *
     * @dev Passing _overrides directly as the last parameter
     * of a contract method seems to make ethers treat it like
     * a parameter for the contract call. Instead, we unpack and
     * thus pass an empty object for overrides if _overrides is undef.
     */
    mint(_depositTransfers: DepositTransferStruct[], _destination: FarmToMode, _permit?: SignedPermit<DepositTokenPermitMessage | DepositTokensPermitMessage>, _overrides?: Overrides): Promise<import("ethers").ContractTransaction>;
}
