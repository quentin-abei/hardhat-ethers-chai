const ethers = require("ethers");
const hre = require("hardhat");
require("dotenv").config();

async function main() {
    const url = process.env.GOERLI_API;
    let artifacts = await hre.artifacts.readArtifact("Faucet");
    const provider = new ethers.providers.JsonRpcBatchProvider(url);

    const privateKey = process.env.PRIVATE_KEY;

    let wallet = new ethers.Wallet(privateKey, provider);

    const faucetFactory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);
    const faucet = await faucetFactory.deploy();
    await faucet.deployed();

    console.log("Faucet address:", faucet.address);
}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
