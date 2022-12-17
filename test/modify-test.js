const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("TestModifyVar", function () {
  it("should change x to 1337", async function () {
    const modify = await ethers.getContractFactory("ModifyVariable");
    const modifyContract = await modify.deploy(10);
    await modifyContract.deployed();

    await modifyContract.modifyToLeet();

    const newX = await modifyContract.x();
    assert.equal(newX.toNumber(), 1337);
  });
});
