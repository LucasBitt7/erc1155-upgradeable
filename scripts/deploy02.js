// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers, upgrades } = require("hardhat");

const V1_PROXY_ADDRESS = '0xe5e4bDa89306e52c555Ac171046CB55cE7070BE3';
const V1_ADDRESS = '0xbcb27f1afcda0e33eb9fcd6786f03497226254c3';
const V2_ADDRESS = '0x7f6c6d6d03d26de34c4090edc553d3fddb9d3e21';

async function deployContract() {

  const RhtContractV2 = await ethers.getContractFactory("contracts/rhtV2.sol:GameItems");

  const upgraded = await upgrades.upgradeProxy(V1_PROXY_ADDRESS, RhtContractV2); 
  console.log("contract addr:", upgraded.address);
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
