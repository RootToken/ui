import { Contract, ethers } from "ethers";
import create from "zustand";
import ENVIRONMENT from "./config";
import { IAccount } from "./interfaces/account.js";
import {
  getDefaultClaimFormState,
  getDefaultMintFormState,
  getDefaultRedeemFormState,
  IClaimFormState,
  IMintFormState,
  IRedeemFormState,
} from "./interfaces/mintForm.js";
import { ITokenSymbol, TOKENS } from "./interfaces/token.js";
import {
  createERC20Contract,
  createRootContract,
  createUnwrapAndSendWETHContract,
  createUSDTContract,
} from "./util/contract.js";
import {
  BeanstalkSDK,
  DataSource,
  TokenValue,
  Token,
  TokenSiloBalance,
  TokenBalance,
} from "@beanstalk/sdk";
import beanstalkAbi from "./abi/Beanstalk.json";
import { Signer } from "@wagmi/core";
import { ISiloClaimable, ISiloDeposit } from "./interfaces/siloDeposit";
export const provider = new ethers.providers.JsonRpcProvider(
  ENVIRONMENT.rpcUrl
);

interface AppState {
  onUserConnect: (signer: Signer) => void;
  onUserDisconnect: () => void;
  onGetConnectedUserBalance: () => void;

  connectedAddress?: string;
  beanstalkSdk: BeanstalkSDK;
  setBeanstalkSdk: (instance: BeanstalkSDK) => void;
  contracts: {
    [address: string]: Contract;
  };
  setContract: (address: string, instance: ethers.Contract) => void;
  setContracts: (contract: { [address: string]: Contract }) => void;
  beanstalkContract: Contract;
  setBeanstalkContract: (instance: ethers.Contract) => void;

  account?: IAccount;
  setAccount: (account?: IAccount) => void;

  mintFormState: IMintFormState;
  onChangeMintFormStateField: (field: keyof IMintFormState, value: any) => void;
  onResetMintFormState: () => void;

  redeemFormState: IRedeemFormState;
  onChangeRedeemFormStateField: (
    field: keyof IRedeemFormState,
    value: any
  ) => void;
  onChangeRedeemFormState: (value: Partial<IRedeemFormState>) => void;
  onResetRedeemFormState: () => void;

  claimFormState: IClaimFormState;
  onChangeClaimFormStateField: (
    field: keyof IClaimFormState,
    value: any
  ) => void;
  onResetClaimFormState: () => void;

  prices?: {
    [key in ITokenSymbol]: number;
  };
  setPrices: (prices: {
    [key in ITokenSymbol]: number;
  }) => void;
}

const getUserBalance = async (
  sdk: BeanstalkSDK,
  contracts: { [key: string]: ethers.Contract }
): Promise<IAccount> => {
  const tempDeposits: ISiloDeposit[] = [];
  const claimableDeposits: ISiloClaimable[] = [];
  const accountAddress = await sdk.getAccount();
  let siloBalances: Map<Token, TokenSiloBalance> = new Map();
  let tokenBalances: Map<Token, TokenBalance> = new Map();
  let ethBalance = TokenValue.fromHuman("0", 18);

  try {
    siloBalances = await sdk.silo.getBalances(undefined, {
      source: DataSource.LEDGER,
    });
    siloBalances.get(sdk.tokens.BEAN)?.claimable.crates.forEach((crate) => {
      claimableDeposits.push({
        season: crate.season,
        amount: crate.amount,
      });
    });
    siloBalances.get(sdk.tokens.BEAN)?.deposited.crates.forEach((crate) => {
      tempDeposits.push({
        season: crate.season,
        amount: crate.amount,
        bdv: crate.bdv,
        stalk: crate.stalk,
        seeds: crate.seeds,
      });
    });
  } catch (err) {
    console.log(err);
  }

  try {
    tokenBalances = await sdk.tokens.getBalances(undefined, [
      sdk.tokens.WETH,
      sdk.tokens.BEAN,
      sdk.tokens.USDC,
      sdk.tokens.USDT,
      sdk.tokens.DAI,
      sdk.tokens.ROOT,
    ]);
  } catch (err) {
    console.log(err);
  }

  try {
    const balance = await sdk.signer!.getBalance("latest");
    if (!balance) {
      throw new Error("failed to get balance");
    }
    ethBalance = TokenValue.fromBlockchain(balance, 18);
  } catch (e) {
    throw e;
  }

  const balances: Map<string, TokenValue> = new Map();
  try {
    const data = await Promise.all(
      Object.keys(TOKENS).map(async (key) => {
        try {
          if (key === "ETH") {
            const balance = await sdk.signer!.getBalance("latest");
            if (!balance) {
              throw new Error("failed to get balance");
            }
            return {
              address: "0x",
              balance: TokenValue.fromBlockchain(balance, TOKENS.ETH.decimals),
            };
          }
          const result = await contracts[
            TOKENS[key as ITokenSymbol].address
          ].balanceOf(accountAddress);
          if (!result) {
            throw new Error("failed to get balance");
          }
          return {
            address: TOKENS[key as ITokenSymbol].address,
            balance: TokenValue.fromBlockchain(
              result,
              TOKENS[key as ITokenSymbol].decimals
            ),
          };
        } catch (err) {
          return {
            address: TOKENS[key as ITokenSymbol].address,
            balance: TokenValue.fromHuman(
              "0",
              TOKENS[key as ITokenSymbol].decimals
            ),
          };
        }
      })
    );

    data.forEach((b) => {
      balances.set(b.address, b.balance);
    });
  } catch (err) {
    console.log(err);
  }

  try {
    const result = await contracts[ENVIRONMENT.rootContractAddress].balanceOf(
      accountAddress
    );
    if (result) {
      balances.set(
        ENVIRONMENT.rootContractAddress,
        TokenValue.fromBlockchain(result, 18)
      );
    }
  } catch (e) {
    balances.set(
      ENVIRONMENT.rootContractAddress,
      TokenValue.fromHuman("0", 18)
    );
  }

  return {
    ethBalance,
    address: accountAddress,
    balances,
    siloDeposits: tempDeposits,
    claimableDeposits: claimableDeposits,
    signer: sdk.signer!,
    tokenBalances,
    siloBalances,
  };
};

const setupContracts = (signer?: ethers.Signer) => {
  const sdk: BeanstalkSDK = new BeanstalkSDK({
    signer,
    rpcUrl: ENVIRONMENT.rpcUrl,
    subgraphUrl: ENVIRONMENT.beanstalkSubgraphUrl,
    provider,
    DEBUG: true,
  });
  return {
    beanstalkSdk: sdk,
    beanstalkContract: new ethers.Contract(
      ENVIRONMENT.beanstalkContractAddress,
      beanstalkAbi,
      signer || provider
    ),
    contracts: {
      [ENVIRONMENT.unwrapAndSendETHContractAddress]:
        createUnwrapAndSendWETHContract(signer),
      [ENVIRONMENT.rootContractAddress]: createRootContract(signer),
      [TOKENS.BEAN.address]: createERC20Contract(TOKENS.BEAN.address, signer),
      [TOKENS.USDC.address]: createERC20Contract(TOKENS.USDC.address, signer),
      [TOKENS.USDT.address]: createUSDTContract(TOKENS.USDT.address, signer),
      [TOKENS.DAI.address]: createERC20Contract(TOKENS.DAI.address, signer),
      [TOKENS.WETH.address]: createERC20Contract(TOKENS.WETH.address, signer),
    },
  };
};

const useAppStore = create<AppState>()((set, get) => ({
  onUserDisconnect: () => {
    try {
      const { beanstalkContract, beanstalkSdk, contracts } =
        setupContracts(undefined);

      set({
        beanstalkSdk,
        contracts,
        beanstalkContract,
        account: undefined,
      });
    } catch (e) {
      throw e;
    }
  },
  onUserConnect: async (signer) => {
    try {
      const { beanstalkContract, beanstalkSdk, contracts } =
        setupContracts(signer);

      const result = await getUserBalance(beanstalkSdk, contracts);

      set({
        beanstalkSdk,
        contracts,
        beanstalkContract,
        account: result,
      });
    } catch (e) {
      throw e;
    }
  },

  onGetConnectedUserBalance: async () => {
    try {
      const state = get();
      const result = await getUserBalance(state.beanstalkSdk, state.contracts);

      set({
        ...state,
        account: result,
      });
    } catch (e) {
      throw e;
    }
  },

  setBeanstalkSdk: (instance) =>
    set((state) => ({ ...state, beanstalkSdk: instance })),
  beanstalkSdk: new BeanstalkSDK({
    rpcUrl: ENVIRONMENT.rpcUrl,
    subgraphUrl: ENVIRONMENT.beanstalkSubgraphUrl,
    provider,
    DEBUG: true,
  }),
  contracts: {
    [ENVIRONMENT.unwrapAndSendETHContractAddress]:
      createUnwrapAndSendWETHContract(),
    [ENVIRONMENT.rootContractAddress]: createRootContract(),
    [TOKENS.BEAN.address]: createERC20Contract(TOKENS.BEAN.address),
    [TOKENS.USDC.address]: createERC20Contract(TOKENS.USDC.address),
    [TOKENS.USDT.address]: createUSDTContract(TOKENS.USDT.address),
    [TOKENS.DAI.address]: createERC20Contract(TOKENS.DAI.address),
    [TOKENS.WETH.address]: createERC20Contract(TOKENS.WETH.address),
  },
  setContracts: (contracts) =>
    set((state) => ({
      ...state,
      contracts: { ...state.contracts, ...contracts },
    })),
  setContract: (address, instance) =>
    set((state) => ({
      ...state,
      contracts: { ...state.contracts, [address]: instance },
    })),

  beanstalkContract: new ethers.Contract(
    ENVIRONMENT.beanstalkContractAddress,
    beanstalkAbi
  ),
  setBeanstalkContract: (instance) =>
    set((state) => ({
      ...state,
      beanstalkContract: instance,
    })),

  setAccount: (account) =>
    set((state) => ({
      ...state,
      account,
    })),

  mintFormState: getDefaultMintFormState(),
  onChangeMintFormStateField: (field, value) =>
    set((state) => ({
      ...state,
      mintFormState: { ...state.mintFormState, [field]: value },
    })),
  onResetMintFormState: () =>
    set((state) => ({
      ...state,
      mintFormState: getDefaultMintFormState(),
    })),

  redeemFormState: getDefaultRedeemFormState(),
  onChangeRedeemFormStateField: (field, value) =>
    set((state) => ({
      ...state,
      redeemFormState: { ...state.redeemFormState, [field]: value },
    })),
  onChangeRedeemFormState: (value) =>
    set((state) => ({
      ...state,
      redeemFormState: {
        ...state.redeemFormState,
        ...value,
      },
    })),
  onResetRedeemFormState: () =>
    set((state) => ({
      ...state,
      redeemFormState: getDefaultRedeemFormState(),
    })),

  claimFormState: getDefaultClaimFormState(),
  onChangeClaimFormStateField: (field, value) =>
    set((state) => ({
      ...state,
      claimFormState: { ...state.claimFormState, [field]: value },
    })),
  onResetClaimFormState: () =>
    set((state) => ({
      ...state,
      claimFormState: getDefaultClaimFormState(),
    })),

  setPrices: (prices) =>
    set((state) => ({
      ...state,
      prices,
    })),
}));

export default useAppStore;
