# Aurora Nearcon NFT
This contract requires seeding it with some `passphrases` after deployment by calling `assignHashToTokenId()`. Only admin can call this function.

These passphrases will be generated separately and distributed during workshop or in the booth directly.

A user can redeem the NFT token with a valid passphrase only once.

### Compile

```bash
npm run compile
```

### Test

```bash
npm run test
# for coverage
npm run coverage
```

### Deploy
```bash
export INFURA_TOKEN='YOUR INFURA TOKEN'
export PRIVATE_KEY='YOUR ETHEREUM PRIVATE KEY'
npm run deploy:aurora
```
