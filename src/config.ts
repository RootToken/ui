const ENVIRONMENT = {
  alchemyApiKey: "ZUcOrL8AFTxGkYrDN1JJJqFSN7Kw3KfL",
  rpcUrl: import.meta.env.DEV ? "http://127.0.0.1:8545" : "https://eth-mainnet.g.alchemy.com/v2/ZUcOrL8AFTxGkYrDN1JJJqFSN7Kw3KfL",
  beanstalkSubgraphUrl:
    "https://graph.node.bean.money/subgraphs/name/beanstalk",
  connectorLogos: {
    MetaMask: "/metamask.png",
    WalletConnect: "/walletconnect.svg",
    "Coinbase Wallet": "/coinbase.png",
  } as any,
  rootContractAddress: "0x77700005BEA4DE0A78b956517f099260C2CA9a26",
  beanstalkContractAddress: "0xC1E088fC1323b20BCBee9bd1B9fC9546db5624C5",
  chainExplorer: "https://etherscan.io"
};

export default ENVIRONMENT;
