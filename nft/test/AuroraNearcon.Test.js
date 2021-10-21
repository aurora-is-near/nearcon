
const { expect, assert } = require('chai');
const { ethers } = require('hardhat');

describe('AuroraNearcon', function () {
  let instance,
    deployer,
    participant,
    hash,
    passphrase,
    tokenId;
  beforeEach(async function () {
    [deployer, participant] = await ethers.getSigners();
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

  it('should owner seed passphrases', async () => {
    expect(hash).to.equal(await instance.tokenIdToHash(tokenId));
  })
  it('should mint with correct passphrase', async () => {
    await instance.connect(participant)
    .mint(
        participant.address, 
        Buffer.from('Lisbon Tiles edition # 1'), 
        Buffer.from(passphrase)
    );
  })
  it('should fail to mint with incorrect passphrase', async () => {
    const invalidPassphrase = 'INVALID PASS';
    await expect(
        instance.connect(participant)
        .mint(
            participant.address, 
            Buffer.from('Lisbon Tiles edition # 1'), 
            Buffer.from(invalidPassphrase)
    )).to.be.revertedWith('ERR: invalid passphrase');
  })
});