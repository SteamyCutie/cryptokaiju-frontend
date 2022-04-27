import Notify from 'bnc-notify'
import { init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import trezorModule from '@web3-onboard/trezor'
import ledgerModule from '@web3-onboard/ledger'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'

import blocknativeLogo from './assets/png/Dino Logo.png'

export const plushClaimRedirect = "https://cryptokaiju.io/plushclaim/"

// Replace with your DApp's Infura ID
const INFURA_ID = '074e3b1da7d74e9d8c364759382ed2b7'

const networkId = 1
const dappId = '7a0a4da1-7c92-46af-a12e-e810c1b39d3e'

const injected = injectedModule()
const coinbase = coinbaseModule()
const ledger = ledgerModule()
const walletConnect = walletConnectModule()

const trezorOptions = {
  email: 'test@test.com',
  appUrl: 'https://www.blocknative.com'
}

const trezor = trezorModule(trezorOptions)

export const initWeb3Onboard = init({
  wallets: [
    injected,
    ledger,
    coinbase,
    trezor,
    walletConnect
  ],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum',
      rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`
    },
    {
      id: '0x3',
      token: 'tROP',
      label: 'Ropsten',
      rpcUrl: `https://ropsten.infura.io/v3/${INFURA_ID}`
    },
    {
      id: '0x4',
      token: 'rETH',
      label: 'Rinkeby',
      rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`
    },
    {
      id: '0x38',
      token: 'BNB',
      label: 'Binance',
      rpcUrl: 'https://bsc-dataseed.binance.org/'
    },
    {
      id: '0x89',
      token: 'MATIC',
      label: 'Polygon',
      rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
    },
    {
      id: '0xfa',
      token: 'FTM',
      label: 'Fantom',
      rpcUrl: 'https://rpc.ftm.tools/'
    }
  ],
  appMetadata: {
    name: 'CryptoKaiju Plush NFT Minting',
    icon: blocknativeLogo,
    logo: blocknativeLogo,
    description: 'CryptoKaiju app for Web3-Onboard',
    recommendedInjectedWallets: [
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
      { name: 'MetaMask', url: 'https://metamask.io' }
    ],
    agreement: {
      version: '1.0.0',
      termsUrl: 'https://www.blocknative.com/terms-conditions',
      privacyUrl: 'https://www.blocknative.com/privacy-policy'
    },
    gettingStartedGuide: 'https://blocknative.com',
    explore: 'https://blocknative.com'
  }
})


export function initNotify() {
  const notify = Notify
  return notify({
    dappId,
    networkId,
    darkMode: true,
    onerror: error => console.log(`Notify error: ${error.message}`)
  })
}


export const internalTransferABI = [
  {
    "inputs": [
      {
        "internalType": "contract IKaijuNFT",
        "name": "_nft",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_pricePerNFTInETH",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_gatedMintPricePerNFTInETH",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "enum MerkleMinter.TreeType",
        "name": "treeType",
        "type": "uint8"
      }
    ],
    "name": "MerkleTreeUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "nfcId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "enum MerkleMinter.TreeType",
        "name": "treeType",
        "type": "uint8"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "Purchased",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_recipient",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "nfcId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "birthday",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "tokenUri",
            "type": "string"
          }
        ],
        "internalType": "struct MerkleMinter.KaijuDNA",
        "name": "_dna",
        "type": "tuple"
      },
      {
        "internalType": "bytes32[]",
        "name": "_merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "canGatedMint",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "nfcId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "birthday",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "tokenUri",
            "type": "string"
          }
        ],
        "internalType": "struct MerkleMinter.KaijuDNA",
        "name": "_dna",
        "type": "tuple"
      },
      {
        "internalType": "bytes32[]",
        "name": "_merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "canOpenMint",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "gatedMerkleTreeMetadata",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "root",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "dataIPFSHash",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_recipient",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "nfcId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "birthday",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "tokenUri",
            "type": "string"
          }
        ],
        "internalType": "struct MerkleMinter.KaijuDNA",
        "name": "_dna",
        "type": "tuple"
      },
      {
        "internalType": "bytes32[]",
        "name": "_merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "gatedMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "gatedMintPricePerNFTInETH",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_recipient",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "nfcId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "birthday",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "tokenUri",
            "type": "string"
          }
        ],
        "internalType": "struct MerkleMinter.KaijuDNA[]",
        "name": "_dnas",
        "type": "tuple[]"
      },
      {
        "internalType": "bytes32[][]",
        "name": "_merkleProofs",
        "type": "bytes32[][]"
      }
    ],
    "name": "multiGatedMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_recipient",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "nfcId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "birthday",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "tokenUri",
            "type": "string"
          }
        ],
        "internalType": "struct MerkleMinter.KaijuDNA[]",
        "name": "_dnas",
        "type": "tuple[]"
      },
      {
        "internalType": "bytes32[][]",
        "name": "_merkleProofs",
        "type": "bytes32[][]"
      }
    ],
    "name": "multiOpenMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nft",
    "outputs": [
      {
        "internalType": "contract IKaijuNFT",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "openMerkleTreeMetadata",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "root",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "dataIPFSHash",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_recipient",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "nfcId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "birthday",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "tokenUri",
            "type": "string"
          }
        ],
        "internalType": "struct MerkleMinter.KaijuDNA",
        "name": "_dna",
        "type": "tuple"
      },
      {
        "internalType": "bytes32[]",
        "name": "_merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "openMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pricePerNFTInETH",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "proofUsed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_newPrice",
        "type": "uint256"
      }
    ],
    "name": "updateGatedPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "root",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "dataIPFSHash",
            "type": "string"
          }
        ],
        "internalType": "struct MerkleMinter.MerkleTreeMetadata",
        "name": "_metadata",
        "type": "tuple"
      },
      {
        "internalType": "enum MerkleMinter.TreeType",
        "name": "_treeType",
        "type": "uint8"
      }
    ],
    "name": "updateMerkleTree",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IKaijuNFT",
        "name": "_nft",
        "type": "address"
      }
    ],
    "name": "updateNFT",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_newPrice",
        "type": "uint256"
      }
    ],
    "name": "updatePrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawSaleProceeds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]