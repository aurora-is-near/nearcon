require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const utils = require('web3-utils')

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const argv = require('yargs/yargs')()
  .env('')
  .options({
    coverage: {
      type: 'boolean',
      default: false,
    },
  })
  .argv;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.7',
  networks: {
    aurora: {
      url: 'https://testnet.aurora.dev',
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 1313161555,
      gasPrice: 120 * 1000000000,
    },
    local: {
      url: 'http://localhost:8545',
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 1313161555,
      gasPrice: 120 * 1000000000,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_TOKEN}`,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 3,
      live: true,
      gasPrice: 50000000000,
      gasMultiplier: 2,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_TOKEN}`,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 1,
      live: true,
      gasMultiplier: 2,
      gas: 2 * 1000000,
      asPrice: utils.toWei('105', 'gwei')
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_TOKEN}`,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 5,
      live: true,
      gasMultiplier: 2,
      gas: 2 * 1000000,
      asPrice: utils.toWei('105', 'gwei')
    },
  }
};

if (argv.coverage) {
  require('solidity-coverage');
}