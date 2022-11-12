require('dotenv').config({path:__dirname+'/.env'})
/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
const {ALCHEMY_API_KEY, PRIVATE_KEY} = process.env;
module.exports = {

  solidity: "0.8.17",
  defaultNetwork: "mumbai",
    networks: {
      hardhat: {},
      mumbai: {
        url:ALCHEMY_API_KEY,
        accounts: [PRIVATE_KEY],
      },
    },
};
