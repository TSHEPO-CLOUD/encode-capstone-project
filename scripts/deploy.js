const hre = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {

  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
 
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