const hre = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;
  
 const encodeDevsContract = await hre.ethers.deployContract("EncodeDevs", [
   metadataURL,
   whitelistContract
 ]);

 await encodeDevsContract.waitForDeployment();

 console.log("Encode Devs Contract Address:", encodeDevsContract.target);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });