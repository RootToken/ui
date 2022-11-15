import { ethers, Overrides } from "ethers";
import { ERC20Token } from "../classes/Token";
import { TokenSiloBalance } from "../lib/silo";
import { TokenValue } from "../TokenValue";
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
    mint(_depositTransfers: DepositTransferStruct[], _destination: FarmToMode, _minAmountOut: ethers.BigNumber, // FIXME
    _permit?: SignedPermit<DepositTokenPermitMessage | DepositTokensPermitMessage>, _overrides?: Overrides): Promise<ethers.ContractTransaction>;
    underlyingBdv(): Promise<TokenValue>;
    /**
     * Off-chain estimation for the number of ROOT minted from a set of
     * `deposits` of `token`.
     * @param token
     * @param deposits
     * @param isDeposit
     */
    estimateRoots(token: ERC20Token, deposits: TokenSiloBalance["deposited"]["crates"], isDeposit: boolean): Promise<{
        amount: TokenValue;
        bdvRatio: TokenValue;
        stalkRatio: TokenValue;
        seedsRatio: TokenValue;
        min: TokenValue;
        max?: undefined;
    } | {
        amount: TokenValue;
        bdvRatio: TokenValue;
        stalkRatio: TokenValue;
        seedsRatio: TokenValue;
        max: TokenValue;
        min?: undefined;
    }>;
}
