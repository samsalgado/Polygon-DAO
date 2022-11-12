const { ethers } = require("hardhat");

async function main() {
    const DAO = await ethers.getContractFactory("DAO");
    const dao = await DAO.deploy();
    const txHash = dao.deployTransaction.hash;
    const txReceipt = await ethers.provider.waitForTransaction(txHash);
    console.log("Contract deployed to address:", txReceipt.contractAddress);
}
main()
.then(() => process.exit(0))
.catch((error) => {
    process.exit(1);
});
