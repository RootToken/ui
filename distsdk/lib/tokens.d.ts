import { Token, BeanstalkToken, ERC20Token, NativeToken } from '../classes/Token';
import { BeanstalkSDK } from './BeanstalkSDK';
import BigNumber from 'bignumber.js';
import { TokenFacet } from '../constants/generated/Beanstalk/Beanstalk';
import { EIP2612PermitMessage, EIP712TypedData } from './permit';
export declare type TokenBalance = {
    internal: BigNumber;
    external: BigNumber;
    total: BigNumber;
};
export declare class Tokens {
    private sdk;
    readonly ETH: NativeToken;
    readonly WETH: ERC20Token;
    readonly BEAN: ERC20Token;
    readonly ROOT: ERC20Token;
    readonly CRV3: ERC20Token;
    readonly DAI: ERC20Token;
    readonly USDC: ERC20Token;
    readonly USDT: ERC20Token;
    readonly LUSD: ERC20Token;
    readonly BEAN_ETH_UNIV2_LP: ERC20Token;
    readonly BEAN_CRV3_LP: ERC20Token;
    readonly UNRIPE_BEAN: ERC20Token;
    readonly UNRIPE_BEAN_CRV3: ERC20Token;
    readonly STALK: BeanstalkToken;
    readonly SEEDS: BeanstalkToken;
    readonly PODS: BeanstalkToken;
    readonly SPROUTS: BeanstalkToken;
    readonly RINSABLE_SPROUTS: BeanstalkToken;
    unripeTokens: Set<Token>;
    unripeUnderlyingTokens: Set<Token>;
    siloWhitelist: Set<Token>;
    erc20Tokens: Set<Token>;
    balanceTokens: Set<Token>;
    crv3Underlying: Set<Token>;
    private map;
    constructor(sdk: BeanstalkSDK);
    /**
     * Find a Token by address
     */
    findByAddress(address: string): Token | undefined;
    _deriveAddress(value: string | Token): string;
    _deriveToken(value: string | Token): [Token, string];
    _balanceStructToTokenBalance(token: Token, result: TokenFacet.BalanceStruct): TokenBalance;
    /**
     * Return a TokenBalance struct for a requested token.
     * Includes the Farmer's INTERNAL and EXTERNAL balance in one item.
     * This is the typical representation of balances within Beanstalk.
     */
    getBalance(_token: (string | Token), _account?: string): Promise<TokenBalance>;
    /**
     * Return a TokenBalance struct for each requested token.
     * Includes the Farmer's INTERNAL and EXTERNAL balance in one item.
     * This is the typical representation of balances within Beanstalk.
     *
     * @todo discuss parameter inversion between getBalance() and getBalances().
     */
    getBalances(_account?: string, _tokens?: (string | Token)[]): Promise<Map<Token, TokenBalance>>;
    /**
     * Create the domain for an particular ERC-2636 signature.
     * Look up the name of an ERC-20 token for signing.
     *
     * @ref https://github.com/dmihal/eth-permit/blob/34f3fb59f0e32d8c19933184f5a7121ee125d0a5/src/eth-permit.ts#L85
     */
    private _getEIP712DomainForToken;
    /**
     * Sign a permit for an arbitrary ERC-20 token. This allows `spender` to use `value`
     * of `owner`'s `token`.
     *
     * @fixme should this be in `tokens.ts`?
     * @fixme does the order of keys in `message` matter? if not we could make an abstraction here
     * @fixme `permitERC2612` -> `getERC20Permit`
     *
     * @ref https://github.com/dmihal/eth-permit/blob/34f3fb59f0e32d8c19933184f5a7121ee125d0a5/src/eth-permit.ts#L126
     * @param token a Token instance representing an ERC20 token to permit
     * @param owner
     * @param spender authorize this account to spend `token` on behalf of `owner`
     * @param value the amount of `token` to authorize
     * @param _nonce
     * @param _deadline
     */
    permitERC2612(token: ERC20Token, owner: string, // 
    spender: string, value: string | number, // FIXME: included default on eth-permit, see @ref
    _nonce?: number, //
    _deadline?: number): Promise<EIP712TypedData<EIP2612PermitMessage>>;
    private _createTypedERC2612Data;
}
