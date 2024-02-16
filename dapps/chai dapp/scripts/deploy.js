const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with the account:", deployer.address);

  // const chai = await ethers.getContractFactory("chai");
  // const contract = await chai.deploy();

  const contract = await hre.ethers.deployContract("Drive");
    await contract.waitForDeployment();
  console.log(
    `Counter contract deployed to https://explorer.public.zkevm-test.net/address/${contract.target}`
);
  // await contract.deployed();

  // console.log("Chai contract deployed to:", chai.address);
  // console.log("Chai contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
