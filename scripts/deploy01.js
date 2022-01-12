// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers, upgrades } = require("hardhat");

async function deployContract() {
  const rhtContract = await ethers.getContractFactory("contracts/rht.sol:GameItems");

  const contract = await upgrades.deployProxy(rhtContract, { kind: "uups"}); 

  await contract.deployed();

  console.log("contract addr:", contract.address);
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });