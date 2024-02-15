const { expect } = require("chai")

describe("Token contract", function(){

    it("deployment should assign the total supply of tokens to the owner".async function(){
        const[owner] = await ethers.getSigners();
        console.log("Signers 0bjects:", owner);
        const Token = await ethers.getContractFactory("Token");

        const hardhatToken = await Token.deploy();

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        console.log("owner address:", owner.address);

        expect(await hardhatToken.totalsupply()).to.equal(ownerBalance);
    })


});