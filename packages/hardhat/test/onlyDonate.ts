import { expect } from "chai";
import { ethers } from "hardhat";
import { YourContract } from "../typechain-types";

describe("onlyDonate", function () {
    let yourContract: YourContract;

    before(async () => {
      const [owner] = await ethers.getSigners();
      const yourContractFactory = await ethers.getContractFactory("onlyDonate");
      yourContract = (await yourContractFactory.deploy(10,10)) as YourContract;
      await yourContract.deployed();
    });

    describe("Deployment", function () {
        it("Should have the right message on deploy", async function () {
          expect(await yourContract.greeting()).to.equal("Building Unstoppable Apps!!!");
        }); 

        it("monto de solicitud", async function () {
            expect(await yourContract.address).to.equal("dsdsddsds");
        }); 
    });

    describe("Deployment", function () {
        it("Should have the right message on deploy", async function () {
          expect(await yourContract.greeting()).to.equal("Building Unstoppable Apps!!!");
        }); 
    });
});