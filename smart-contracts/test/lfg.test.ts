import { expect, use } from 'chai';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { LFG } from '../typechain';
import { ethers } from 'hardhat';

describe('Drop V1 Unit Tests', () => {
  let lfg: LFG;
  let owner: SignerWithAddress;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();
    const LFG = await ethers.getContractFactory('LFG');
    lfg = (await LFG.deploy()) as LFG;
    await lfg.deployed();
  });

  it('should increase gm', async () => {});

  it('should emit event', async () => {});
});
