import { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
  allChains,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import ENVIRONMENT from "../../config";
import AccountProvider from "../AccountProvider/index.js";
import useSWR from "swr";
import { getPrices } from "../../api/coingecko";
import { useEffect } from "react";
import useAppStore from "../../store";

const GlobalStyle = createGlobalStyle`

/*
------------------------- static ------------------------- */
@font-face {
  font-family: 'PP Fraktion Sans';
  font-style:  normal;
  font-weight: 300;
  font-display: fallback;
  src: url("/fonts/PPFraktionSans-Light.woff2") format("woff2");
}

@font-face {
  font-family: 'PP Fraktion Sans';
  font-style:  normal;
  font-weight: 700;
  font-display: fallback;
  src: url("/fonts/PPFraktionSans-Bold.woff2") format("woff2");
}

    :root { 
      font-family: 'PP Fraktion Sans', sans-serif;
    }
    body {
        font-family: 'PP Fraktion Sans', sans-serif;
        font-weight: 300;
        margin: 0;
        color: #999999;
        font-size: 16px;
        background-color: #0a0b0a;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
      box-sizing: border-box;
      font-family: 'PP Fraktion Sans', sans-serif;
    }

    h1, p {
      margin: 0;
    }
    button {
      padding: 0;
      cursor: pointer;
      border: none;
      margin: 0;
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
    :focus-visible {
      outline: none;
    }

    .modalOverlay {
      position: fixed;
      inset: 0px;
      background-color: rgba(0, 0, 0, 0.85);
      z-index: 1000;
    }
    #layers {
      z-index: 10;
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

export function AppProvider({ children }: AppProvider): any {
  const setPrices = useAppStore((v) => v.setPrices);
  const { data } = useSWR("prices", getPrices);

  useEffect(() => {
    if (data) {
      setPrices(data);
    }

  }, [data]);

  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <WagmiConfig client={client}>
        <AccountProvider>{children}</AccountProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}
