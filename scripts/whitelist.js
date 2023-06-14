const hre = require("hardhat");

async function main() {
  
const whitelistContract = await hre.ethers.deployContract("Whitelist", [2]);

await whitelistContract.waitForDeployment();

console.log("Whitelist Contract Address:", whitelistContract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });