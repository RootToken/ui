import { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
  useAccount,
  useSigner,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { BeanstalkSDK } from "../../../sdk/src/index";
import ENVIRONMENT from "../../config";
import { useEffect } from "react";
import useAppStore from "../../store";
import { calculateGrownStalk } from "../../util/deposit";
import { BigNumber } from "bignumber.js";
import { createRootContract } from "../../util/root";

const GlobalStyle = createGlobalStyle`

/*
------------------------- static ------------------------- */
@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 400;
  font-display: fallback;
  src: url("/fonts/Inter-Regular.woff2?v=3.19") format("woff2");
}
@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 500;
  font-display: fallback;
  src: url("/fonts/Inter-Medium.woff2?v=3.19") format("woff2");
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 700;
  font-display: fallback;
  src: url("/fonts/Inter-Bold.woff2?v=3.19") format("woff2");
}

    :root { font-family: 'Inter', sans-serif; }
    @supports (font-variation-settings: normal) {
        :root { font-family: 'Inter var', sans-serif; }
    }
    body {
        margin: 0;
        color: #313438;
        font-size: 16px;
        background-color: #0a0b0a;
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
      font-size: 16px;
      color: #313438;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;

    }

    h1, p {
      margin: 0;
    }
    button {
      padding: 0;
      cursor: pointer;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
    a {
      text-decoration: none;
    }

    .modalOverlay {
      position: fixed;
      inset: 0px;
      background-color: rgba(0, 0, 0, 0.85);
      z-index: 1000;
    }
    
`;

interface AppProvider {
  children: JSX.Element;
}

const { chains, provider } = configureChains(defaultChains, [
  jsonRpcProvider({ rpc: (chain) => ({ http: ENVIRONMENT.rpcUrl }) }),
  // alchemyProvider({ apiKey: ENVIRONMENT.alchemyApiKey }),
  // publicProvider(),
]);

const client = createClient({
  autoConnect: true,
  provider,
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
    new InjectedConnector({
      chains,
      options: {
        // name: 'Injected',
        shimDisconnect: true,
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "Root",
      },
    }),
  ],
});

const Wrapper = ({ children }: { children: JSX.Element }) => {
  const { setBeanstalkSdk, setRootContract } = useAppStore(
    (v) => ({
      setBeanstalkSdk: v.setBeanstalkSdk,
      setRootContract: v.setRootContract,
    })
  );
  const { data } = useSigner();
  const { address } = useAccount();

  useEffect(() => {
    if (address && data) {

      const sdk = new BeanstalkSDK({
        signer: data,
        subgraphUrl: ENVIRONMENT.beanstalkSubgraphUrl,
      });
      const rootContract = createRootContract(data);
      setRootContract(rootContract);
      rootContract.bdvPerRoot().then((v: any) => console.log(v.toString()));
      sdk.sun.getSeason().then((season) => {
        sdk.silo.getBalances().then((v) => {
          console.log(
            v.get(sdk.tokens.BEAN_CRV3_LP)?.deposited.amount.toString()
          );
          console.log(v.get(sdk.tokens.BEAN_CRV3_LP)?.deposited.bdv.toString());
          v.get(sdk.tokens.BEAN_CRV3_LP)?.deposited.crates.forEach((v) => {
            console.log({
              season: v.season.toString(),
              bdv: v.bdv.toString(),
              stalk: v.stalk.toString(),
              grownStalk: calculateGrownStalk(
                new BigNumber(season),
                v.seeds,
                v.season
              )
                .plus(v.stalk)
                .toString(),
              seeds: v.seeds.toString(),
            });
          });
        });
      });

      setBeanstalkSdk(sdk);
    }
  }, [address, data]);

  return <>{children}</>;
};

export function AppProvider({ children }: AppProvider): any {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <WagmiConfig client={client}>
        <Wrapper>{children}</Wrapper>
      </WagmiConfig>
    </ThemeProvider>
  );
}
