import { expect, use } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { solidity } from "ethereum-waffle";

import { LFG } from "../typechain";
import { ethers } from "hardhat";

use(solidity);

describe("Drop V1 Unit Tests", () => {
  let lfg: LFG;
  let owner: SignerWithAddress;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();
    const LFG = await ethers.getContractFactory("LFG");
    lfg = (await LFG.deploy()) as LFG;
    await lfg.deployed();
  });

  it("should increase gm", async () => {
    expect((await lfg.gmCount()).toNumber()).to.eq(0);
    await lfg.gm();
    expect((await lfg.gmCount()).toNumber()).to.eq(1);
  });

  it("should emit event", async () => {
    expect(await lfg.gm()).to.emit(lfg, "Wagmi");
  });
});
