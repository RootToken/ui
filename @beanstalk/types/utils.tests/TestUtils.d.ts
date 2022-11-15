import { ethers } from "ethers";
import { BeanstalkSDK, ERC20Token, TokenSiloBalance, TokenValue } from "../index";
export default class TestUtils {
    sdk: BeanstalkSDK;
    provider: ethers.providers.JsonRpcProvider;
    constructor(sdk: BeanstalkSDK);
    /**
     * Snapshot the state of the blockchain at the current block
     */
    snapshot(): Promise<any>;
    /**
     * Revert the state of the blockchain to a previous snapshot.
     * Takes a single parameter, which is the snapshot id to revert to
     */
    revert(id: number): Promise<void>;
    /**
     * Send a deposit from the BF Multisig -> `to`
     */
    sendDeposit(to: string, from?: string, token?: ERC20Token): Promise<TokenSiloBalance["deposited"]["crates"][number]>;
    /**
     * Send BEAN from the BF Multisig -> `to`.
     */
    sendBean(to: string, amount: TokenValue, from?: string, token?: ERC20Token): Promise<void>;
    resetFork(): Promise<void>;
    mine(): Promise<void>;
    /**
     * To add more erc20 tokens later, you need the slot number. Get it with this:
     * npx slot20 balanceOf TOKENADDRESS RANDOM_HOLDER_ADDRESS -v
     * npx slot20 balanceOf 0x3d5965EB520E53CC1A6AEe3A44E5c1De406E028F 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 -v
     * set reverse to true if mapping format is (key, slot)
     *
     * From this article: https://kndrck.co/posts/local_erc20_bal_mani_w_hh/
     *
     * @param account
     * @param balance
     */
    setAllBalances(account: string, amount: string): Promise<[PromiseSettledResult<void>, PromiseSettledResult<void>, PromiseSettledResult<void>, PromiseSettledResult<void>, PromiseSettledResult<void>, PromiseSettledResult<void>]>;
    setDAIBalance(account: string, balance: TokenValue): Promise<void>;
    setUSDCBalance(account: string, balance: TokenValue): Promise<void>;
    setUSDTBalance(account: string, balance: TokenValue): Promise<void>;
    setCRV3Balance(account: string, balance: TokenValue): Promise<void>;
    setWETHBalance(account: string, balance: TokenValue): Promise<void>;
    setBEANBalance(account: string, balance: TokenValue): Promise<void>;
    setROOTBalance(account: string, balance: TokenValue): Promise<void>;
    private setBalance;
    private setStorageAt;
    private toBytes32;
    mockDepositCrate(token: ERC20Token, season: number, _amount: string, _currentSeason?: number): import("../lib/silo").DepositCrate<TokenValue>;
}
