const ENVIRONMENT = {
  alchemyApiKey: "eOv2YQBWTJ2esGswMaq7mByVehslSP1Z",
  rpcUrl: import.meta.env.DEV ? "http://127.0.0.1:8545" : "https://eth-mainnet.g.alchemy.com/v2/YU-pfqOYMOElVTpph9Tj9kffMesCJSNn",
  beanstalkSubgraphUrl:
    "https://graph.node.bean.money/subgraphs/name/beanstalk",
  connectorLogos: {
    MetaMask: "/metamask.png",
    WalletConnect: "/walletconnect.svg",
    "Coinbase Wallet": "/coinbase.png",
  } as any,
  rootContractAddress: "0x3d5965EB520E53CC1A6AEe3A44E5c1De406E028F",
  beanstalkContractAddress: "0xC1E088fC1323b20BCBee9bd1B9fC9546db5624C5",
  chainExplorer: "https://etherscan.io"
};

export default ENVIRONMENT;
