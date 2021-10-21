import Web3Modal from 'web3modal'
import { ethers } from 'ethers'

export const AURORA_CHAIN = Number(process.env.auroraChainId)
const capitalizeNetworkName = name => name.charAt(0).toUpperCase() + name.slice(1)

const AURORA_CHAIN_PARAMS = {
  chainId: '0x' + AURORA_CHAIN.toString(16),
  chainName: 'Aurora ' + capitalizeNetworkName(process.env.networkType),
  nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
  rpcUrls: [process.env.auroraRpc],
  blockExplorerUrls: [`https://explorer.${process.env.networkType}.aurora.dev`]
}

async function connectAurora () {
  await window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [AURORA_CHAIN_PARAMS]
  })
}

const web3Modal = new Web3Modal({ cacheProvider: true })

export async function connectMetaMask () {
  console.log('Connect MetaMask')
  const provider = await web3Modal.connect()
  window.metamaskAddress = provider.selectedAddress
  provider.on('accountsChanged', (accounts) => {
    window.metamaskAddress = accounts[0]
  })
  provider.on('chainChanged', async (chainId) => {
    // The cached provider in local storage is deleted when changing to a custom network.
    await web3Modal.connect()
    window.connectedEthNetwork = parseInt(chainId)
    window.isValidEthNetwork = parseInt(chainId) === parseInt(process.env.auroraChainId)
  })
  provider.on('disconnect', (code, reason) => {
    console.log(code, reason)
    web3Modal.clearCachedProvider()
  })
  window.provider = new ethers.providers.Web3Provider(provider, 'any')

  console.log('Connect to Aurora network')
  await connectAurora()
}
