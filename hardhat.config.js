require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 1337, // Replace with the desired chain ID (E.g., Rinkeby: 4, Mainnet: 1)
    },
  },
};
