# Encode Club Devs NFT-Collection
Developers will be able to be whitelisted to mint an NFT before the actual public mint takes place
There should only exist 10 Encode Dev NFT's and each one of them should be unique.
User's should be able to mint only 1 NFT with one transaction.
Whitelisted users, should have a 2 min presale period before the actual sale where they are guaranteed 1 NFT per transaction.

# Theory

What is a Non-Fungible Token? Fungible means to be the same or interchangeable eg. Eth is fungible. With this in mind, NFTs are unique; each one is different. Every single token has unique characteristics and values. They are not interchangeable eg Unique Art.
What is ERC-721? ERC-721 is an open standard that describes how to build Non-Fungible tokens on EVM (Ethereum Virtual Machine) compatible blockchains.


# NFT-COLLECTION WEBPAGE

```bash
    https://encode-capstone-project.vercel.app/
```
# USAGE 

Participants can opt to be whitelisted before the public launch by running the following command to obtain thire Address:
```bash
npx hardhat run scripts/whitelist.js --network sepolia
```
Thereafter you'll be one of the first Devs to mint during public by running the following command after the stipulated time:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```



