import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const accounts = vars.has("PRIVATE_KEY") ? [vars.get("PRIVATE_KEY")] : [];

const config: HardhatUserConfig = {
  solidity: "0.8.21",
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    botanixTestnet: {
      url: "https://node.botanixlabs.dev",
      chainId: 3636,
      accounts
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts
    }
  }
};

export default config;
