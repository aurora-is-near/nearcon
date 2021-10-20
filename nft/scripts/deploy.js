const { ethers } = require('hardhat');

async function main () {
  // change the DAO address before deployment.
  const provider = ethers.provider;
  const deployerWallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  console.log(
    'Deploying contracts with the account:',
    deployerWallet.address,
  );

  console.log(
    'Account balance:',
    (await deployerWallet.getBalance()).toString(),
  );
  console.log('Deploying AuroraNearcon NFTs...');
  const AuroraNearcon = await ethers.getContractFactory('AuroraNearcon');
  const auroraNearcon = await AuroraNearcon
    .connect(deployerWallet)
    .deploy(
      'AuroraNearcon',
      'ANC',
    );
  await auroraNearcon.deployed();
  console.log('AuroraNearcon deployed to:', auroraNearcon.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });