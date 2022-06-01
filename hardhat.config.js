require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ALCHEMY_API_KEY = process.env.ALCHEMY_KEY;
const MAINNET_FORK_KEY = process.env.MAINNET_KEY;
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_KEY;
const SNOWTRACE_KEY = process.env.SNOWTRACE_KEY;
const BNB_KEY = process.env.BNB_KEY;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  etherscan: {
    // Your API key for Snowtrace
    // Obtain one at https://snowtrace.io/
    apiKey: BNB_KEY, //SNOWTRACE_KEY,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.1",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      chainId: 43114,
      gasPrice: 225000000000,
      forking: {
        url: "https://api.avax.network/ext/bc/C/rpc",
        enabled: true,
      },
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
    local: {
      url: "http://127.0.0.1:8545/ext/bc/C/rpc",
      chainId: 43114,
      gasPrice: 225000000000,
      accounts: [`${PRIVATE_KEY}`],
    },
    testnet: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      gasPrice: 225000000000,
      accounts: [`${PRIVATE_KEY}`],
    },
    mainnet: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      gasPrice: 225000000000,
      accounts: [`${PRIVATE_KEY}`],
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [`${PRIVATE_KEY}`],
    },
    bscmainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [`${PRIVATE_KEY}`],
    },
    optimism: {
      url: "https://mainnet.optimism.io",
      chainId: 10,
      gasPrice: 2000000000000,
    }
  },
};
