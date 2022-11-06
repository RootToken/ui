import { useEffect } from "react";
import { useAccount, useSigner } from "wagmi";
import useAppStore from "../../store";
import { BeanstalkSDK } from "../../../distsdk/sdk.esm.js";
import ENVIRONMENT from "../../config";
import { createERC20Contract, createRootContract } from "../../util/contract";
import { Signer } from "@wagmi/core";
import { ISiloDeposit } from "../../interfaces/siloDeposit";
import { calculateGrownStalk } from "../../util/deposit";
import { BigNumber } from "bignumber.js";
import { ITokenSymbol, TOKENS } from "../../interfaces/token";
import { ethers } from "ethers";
import NetworkModal from "../NetworkModal";

export default function AccountProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const { setBeanstalkSdk, setERC20Contract, setAccount, erc20Contract } =
    useAppStore((v) => ({
      beanstalkSdk: v.beanstalkSdk,
      erc20Contract: v.erc20Contract,
      setBeanstalkSdk: v.setBeanstalkSdk,
      setERC20Contract: v.setERC20Contract,
      account: v.account,
      setAccount: v.setAccount,
    }));
  const { data: signerData } = useSigner();
  const { address, isDisconnected } = useAccount();

  const setupContractWithSigner = (signer?: Signer) => {
    setERC20Contract(
      ENVIRONMENT.rootContractAddress,
      createRootContract(signer)
    );
    setERC20Contract(
      TOKENS.BEAN.address,
      createERC20Contract(TOKENS.BEAN.address, signer)
    );
    setERC20Contract(
      TOKENS.USDC.address,
      createERC20Contract(TOKENS.USDC.address, signer)
    );
    setERC20Contract(
      TOKENS.USDT.address,
      createERC20Contract(TOKENS.USDT.address, signer)
    );
    setERC20Contract(
      TOKENS.DAI.address,
      createERC20Contract(TOKENS.DAI.address, signer)
    );
    setERC20Contract(
      TOKENS.WETH.address,
      createERC20Contract(TOKENS.WETH.address, signer)
    );
  };

  const setupAccount = async (signer: Signer, accountAddress: string) => {
    const tempDeposits: ISiloDeposit[] = [];

    try {
      const sdk = new BeanstalkSDK({
        signer,
        subgraphUrl: ENVIRONMENT.beanstalkSubgraphUrl,
      });
      setBeanstalkSdk(sdk);
      const season = await sdk.sun.getSeason();
      const balances = await sdk.silo.getBalances();
      balances.get(sdk.tokens.BEAN)?.deposited.crates.forEach((crate: any) => {
        tempDeposits.push({
          season: crate.season,
          amount: crate.amount,
          bdv: crate.bdv,
          stalk: calculateGrownStalk(
            new BigNumber(season),
            crate.seeds,
            crate.season
          ),
          seeds: crate.seeds,
        });
      });
    } catch (err) {
      console.log(err);
    }

    const balances: Map<string, BigNumber> = new Map();
    try {
      const data = await Promise.all(
        Object.keys(TOKENS).map(async (key) => {
          try {
            if (key === "ETH") {
              const balance = await signer.getBalance("latest");
              if (!balance) {
                throw new Error("failed to get balance");
              }
              return {
                address: "0x",
                balance: new BigNumber(ethers.utils.formatEther(balance)),
              };
            }
            const result = await erc20Contract[
              TOKENS[key as ITokenSymbol].address
            ].balanceOf(accountAddress);
            if (!result) {
              throw new Error("failed to get balance");
            }
            return {
              address: TOKENS[key as ITokenSymbol].address,
              balance: new BigNumber(
                ethers.utils.formatUnits(result),
                TOKENS[key as ITokenSymbol].decimals
              ),
            };
          } catch (err) {
            return {
              address: TOKENS[key as ITokenSymbol].address,
              balance: new BigNumber(0),
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
      const result = await erc20Contract[
        ENVIRONMENT.rootContractAddress
      ].balanceOf(accountAddress);
      if (result) {
        balances.set(
          ENVIRONMENT.rootContractAddress,
          new BigNumber(ethers.utils.formatUnits(result), 18)
        );
      }
    } catch (e) {
      balances.set(ENVIRONMENT.rootContractAddress, new BigNumber(0));
    }

    setAccount({
      address: accountAddress,
      balances,
      siloDeposits: tempDeposits,
      signer,
    });
  };

  useEffect(() => {
    if (address && signerData) {
      setupContractWithSigner(signerData);
      setupAccount(signerData, address);
    }
  }, [address, signerData]);

  useEffect(() => {
    if (isDisconnected) {
      setupContractWithSigner();
      setAccount(undefined);
    }
  }, [isDisconnected]);

  return (
    <>
      {children}
      <NetworkModal />
    </>
  );
}
