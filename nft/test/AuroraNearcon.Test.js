
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('AuroraNearcon', function () {
  let instance,
    deployer,
    participant1,
    participant2,
    hash,
    passphrase,
    tokenId;
  beforeEach(async function () {
    [deployer, participant1, participant2] = await ethers.getSigners();
    const AuroraNearcon = await ethers.getContractFactory('AuroraNearcon');
    instance = await AuroraNearcon
      .connect(deployer)
      .deploy(
        'AuroraNearcon',
        'ANC'
      );
    await instance.deployed();
    passphrase = 'THIS IS A TEST PASSPHRASE!';
    hash = ethers.utils.keccak256(Buffer.from(passphrase));
    tokenId = 2;
    await instance.connect(deployer).assignHashToTokenId(
        tokenId,
         hash
    );
  });

  it('only owner can seed', async () => {
    expect(hash).to.equal(await instance.tokenIdToHash(tokenId));
  })
  it('participant can mint with correct passphrase', async () => {
    await instance.connect(participant1)
    .mint(
        participant1.address, 
        tokenId, 
        Buffer.from('Lisbon Tiles edition # 1'), 
        Buffer.from(passphrase)
    );
  })
});