import { ethers } from 'ethers'
import { onClick, find } from './domHelpers'
import { connectMetaMask, AURORA_CHAIN } from './metamask'

const passphraseInput = find('passphraseInput')
const submitButton = find('submitPassphraseButton')

passphraseInput.onkeyup = () => {
  passphraseInput.value.length > 0 ? submitButton.disabled = false : submitButton.disabled = true
}

onClick('connectMetaMask', connectMetaMask)

find('submitPassphraseForm').onsubmit = async function mintNft (e) {
  e.preventDefault()

  submitButton.disabled = true
  try {
    await connectMetaMask()

    const metamaskChainId = (await window.provider.getNetwork()).chainId
    if (metamaskChainId !== AURORA_CHAIN) {
      console.error(
        `Wrong aurora network, expected: ${AURORA_CHAIN}, got: ${metamaskChainId}`
      )
      return
    }

    console.log(passphraseInput.value)
    const contractAbiFragment = [
      'function mint(address to, uint256 tokenId, bytes memory _data, bytes memory preImage) external'
    ]
    const contract = new ethers.Contract(
      process.env.nearconNftAddr,
      contractAbiFragment,
      window.provider.getSigner()
    )

    await contract.mint(
      window.metamaskAddress,
      1, // TODO token id
      Buffer.from(''), // TODO _data
      Buffer.from(passphraseInput.value)
    )
  } catch (err) {
    if (!err.message.includes('User denied transaction signature.')) alert(err.message)
    console.error(err)
  } finally {
    submitButton.disabled = false
  }
}
