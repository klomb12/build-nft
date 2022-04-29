require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");

module.exports = {
  networks:{
    hardhat:{
      chainId:1337
    }
  },
  solidity: "0.8.4",
  settings: {
    optimizer:{
      enable:true,
      runs:200
    }
  },
  paths:{
    artifacts:"./artifacts"
  },
  gasReporter: {
    currency: 'EUR',
    gasPrice: 21
  }
};
