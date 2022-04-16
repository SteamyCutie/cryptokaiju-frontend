/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import {initNotify} from "../init-notify";
import { useState, useEffect } from "react"
import { useAccount, useConnect, useContract, useSigner } from 'wagmi'
import PIRATE_KAIJU from "../assets/png/Pirate-Kaiju-Icon2x.png"
import PINK_KAIJU from "../assets/png/Pink Kaiju.png"

const Mint: React.FC = () => {
  const [numToMint, setNumToMint] = useState(0)
  const [mintActive, setMintActive] = useState(false)
  const [minActive, setMinActive] = useState(false)
  const [plusActive, setPlusActive] = useState(true)
  const [userClaims, setUserClaims] = useState([])
  const [proofs, setProofs] = useState([])

  const [{ data: connectData, error: connectError }, connect] = useConnect()

  const [{ data, error, loading }, disconnect] = useAccount({
    fetchEns: true,
  })

  useEffect(() => {
    /// @ts-ignore
    if (data && data.address) {
      console.log('data', data)
      setMintActive(true);
    }
  }, [data])

  const [{ data: signer, error: sError, loading: sLoading }, getSigner] = useSigner()
  console.log('signer', signer)

  const contract = useContract({
    addressOrName: '0xBe9e888c89B34DeDF41F5c938B0F58e282ACa643',
    contractInterface: [
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
    ],
    signerOrProvider: signer,
  })

  console.log('contract', contract.address)

  const reserve = async () => {
    console.log('Reserve triggered...')
    setPlusActive(false)

    let response

    console.log('Querying PFP API...')
    try {
      response = await axios.get('https://us-central1-merkle-minter.cloudfunctions.net/claim')
    } catch (e) {
      setPlusActive(true)
      console.log('Failed to reserve')
      return
    }

    if (!response || !response.data) {
      setPlusActive(true)
      console.log('Invalid response')
      return;
    }

    const { data } = response
    let result = data.result
    let canOpenMint = data.canOpenMint
    console.log('data', data)

    if (!result || result.length === 0) {
      setPlusActive(true)
      console.log('No more available for the moment...')
      return;
    }

    if (!canOpenMint) {
      setPlusActive(true)
      console.log('Unable to open mint - try again')
      return;
    } else {
      setNumToMint(numToMint + 1)
    }

    const claim = result[0];
    const { proof, nfcId, tokenUri, birthday } = claim;
    console.log('Got one!', nfcId);

    /// @ts-ignore
    setUserClaims(arr => [...arr, {nfcId, tokenUri, birthday} ])

    /// @ts-ignore
    setProofs(arr => [...arr, proof ])

    setPlusActive(true)
  }

  const mint = async (contract: any) => {
    console.log('Mint triggered')
    if (numToMint == 0) {
      alert("Please click '+' to reserve one if any are available")
      return
    }

    /// @ts-ignore
    console.log('Recipient', data.address)
    console.log('Claims', userClaims.length)
    console.log('Proofs', proofs.length)

    const feePerNFT = await contract.pricePerNFTInETH()
    console.log('Fee', feePerNFT.toString())

    const notify = initNotify()

    /// @ts-ignore
    const tx = await contract.multiOpenMint(
        /// @ts-ignore
        data.address,
        userClaims,
        proofs,
        {
          value: feePerNFT.mul(userClaims.length)
        }
    )

    notify.hash(tx.hash)

    setNumToMint(0)
    setUserClaims([])
    setProofs([])
  }

  return (
    <div className="bg-light-blue w-full justify-center items-center grid pt-20 md:pt-40 pb-12 md:pb-0 gap-10">

        <p className="text-dark-blue text-[40px] md:text-[56px] lg:text-[70px] leading-[40px] md:leading-[50px] lg:leading-[60px] font-extrabold text-center tracking-widest">CRYPTOKAIJU<br />Pretty Fine Plushies</p>
        <div className="grid md:flex items-center justify-center gap-4">
          <img className="flex md:hidden" src={PIRATE_KAIJU} alt="Pirate Kaiju" width={300} height={300} />
          <img className="hidden md:flex" src={PINK_KAIJU} alt="Pink Kaiju" width={300} height={262} />
          <div className="grid gap-4 items-center justify-center">
            {
              mintActive ?
                  <>
                    <button className="w-full border-4 border-blacker text-white bg-dark-blue/90 text-[1.5rem] px-[1.25rem] py-[0.75rem] font-bold rounded-full hover:bg-dark-blue/80 active:bg-dark-blue transition-all duration-150 ease-out" onClick={() => mint(contract)} disabled={!mintActive}>Mint</button>
                    <div className="border-[3px] border-blacker w-[270px] rounded-[20px] justify-between items-center flex px-6 py-2">
                      <button className="cursor-pointer w-[40px] h-[40px] text-white text-center align-baseline text-[20px] font-extrabold bg-dark-blue/90 rounded-full hover:bg-dark-blue/80 active:bg-dark-blue transition-all duration-150 ease-out" disabled={!minActive} onClick={() => setNumToMint(numToMint - 1)}>
                        -
                      </button>
                      <span className="text-[32px] font-extrabold">{numToMint}</span>
                      <button className="cursor-pointer w-[40px] h-[40px] text-white text-center align-baseline text-[20px] font-extrabold bg-dark-blue/90 rounded-full hover:bg-dark-blue/80 active:bg-dark-blue transition-all duration-150 ease-out" disabled={!plusActive} onClick={reserve}>
                        +
                      </button>
                    </div>
                  </>
                  :
                  <button className="w-full border-4 border-blacker text-white bg-dark-blue/90 text-[1.5rem] px-[1.25rem] py-[0.75rem] font-bold rounded-full hover:bg-dark-blue/80 active:bg-dark-blue transition-all duration-150 ease-out" disabled={!connectData.connectors[0].ready} onClick={() => connect(connectData.connectors[0])}>Connect</button>
            }
          </div>
        </div>

    </div>
  )
}

export default Mint