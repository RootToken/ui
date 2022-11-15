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
import { createERC20Contract, createRootContract } from "./util/contract.js";
import { BeanstalkSDK, TokenValue } from "@beanstalk/sdk";
import beanstalkAbi from "./abi/Beanstalk.json";
import { Signer } from "@wagmi/core";
import { ISiloDeposit } from "./interfaces/siloDeposit";

interface AppState {
  onUserConnect: (signer: Signer) => void;
  onUserDisconnect: () => void;
  onGetConnectedUserBalance: () => void;

  connectedAddress?: string;
  beanstalkSdk: BeanstalkSDK;
  setBeanstalkSdk: (instance: BeanstalkSDK) => void;
  erc20Contracts: {
    [address: string]: Contract;
  };
  setERC20Contract: (address: string, instance: ethers.Contract) => void;
  setERC20Contracts: (contract: { [address: string]: Contract }) => void;
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
  erc20Contracts: { [key: string]: ethers.Contract }
): Promise<IAccount> => {
  const tempDeposits: ISiloDeposit[] = [];
  const accountAddress = await sdk.getAccount();
  try {
    const balances = await sdk.silo.getBalances();
    balances.get(sdk.tokens.BEAN)?.deposited.crates.forEach((crate) => {
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
          const result = await erc20Contracts[
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
    const result = await erc20Contracts[
      ENVIRONMENT.rootContractAddress
    ].balanceOf(accountAddress);
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

  balances.forEach((v, k) => {
    console.log(k, v.toHuman(), v.decimals)
  })

  return {
    address: accountAddress,
    balances,
    siloDeposits: tempDeposits,
    signer: sdk.signer!,
  };
};

const setupContracts = (signer?: ethers.Signer) => {
  const sdk: BeanstalkSDK = new BeanstalkSDK({
    DEBUG: true,
    signer,
    subgraphUrl: ENVIRONMENT.beanstalkSubgraphUrl,
  });
  return {
    beanstalkSdk: sdk,
    beanstalkContract: new ethers.Contract(
      ENVIRONMENT.beanstalkContractAddress,
      beanstalkAbi,
      signer
    ),
    erc20Contracts: {
      [ENVIRONMENT.rootContractAddress]: createRootContract(signer),
      [TOKENS.BEAN.address]: createERC20Contract(
        TOKENS.BEAN.address,
        signer
      ),
      [TOKENS.USDC.address]: createERC20Contract(
        TOKENS.USDC.address,
        signer
      ),
      [TOKENS.USDT.address]: createERC20Contract(
        TOKENS.USDT.address,
        signer
      ),
      [TOKENS.DAI.address]: createERC20Contract(TOKENS.DAI.address, signer),
      [TOKENS.WETH.address]: createERC20Contract(
        TOKENS.WETH.address,
        signer
      ),
    },
  };
}

const useAppStore = create<AppState>()((set, get) => ({
  onUserDisconnect: () => {
    try {
      const { beanstalkContract, beanstalkSdk, erc20Contracts } = setupContracts(undefined);

      set({
        beanstalkSdk,
        erc20Contracts,
        beanstalkContract,
        account: undefined,
      });
    } catch(e) {
      throw e;
    }
  },
  onUserConnect: async (signer) => {
    try {
      const { beanstalkContract, beanstalkSdk, erc20Contracts } = setupContracts(signer);

      const result = await getUserBalance(beanstalkSdk, erc20Contracts);

      set({
        beanstalkSdk,
        erc20Contracts,
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
      const result = await getUserBalance(
        state.beanstalkSdk,
        state.erc20Contracts
      );

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
    DEBUG: true,
    subgraphUrl: ENVIRONMENT.beanstalkSubgraphUrl,
  }),
  erc20Contracts: {
    [ENVIRONMENT.rootContractAddress]: createRootContract(),
    [TOKENS.BEAN.address]: createERC20Contract(TOKENS.BEAN.address),
    [TOKENS.USDC.address]: createERC20Contract(TOKENS.USDC.address),
    [TOKENS.USDT.address]: createERC20Contract(TOKENS.USDT.address),
    [TOKENS.DAI.address]: createERC20Contract(TOKENS.DAI.address),
    [TOKENS.WETH.address]: createERC20Contract(TOKENS.WETH.address),
  },
  setERC20Contracts: (contracts) =>
    set((state) => ({
      ...state,
      erc20Contracts: { ...state.erc20Contracts, ...contracts },
    })),
  setERC20Contract: (address, instance) =>
    set((state) => ({
      ...state,
      erc20Contracts: { ...state.erc20Contracts, [address]: instance },
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
