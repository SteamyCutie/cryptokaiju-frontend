/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers } from 'ethers'
import { useState, useEffect } from "react"
import PIRATE_KAIJU from "../assets/png/Pirate-Kaiju-Icon2x.png"
import PINK_KAIJU from "../assets/png/Pink Kaiju.png"

import { initWeb3Onboard, initNotify, internalTransferABI, plushClaimRedirect } from '../services'
import { useConnectWallet, useWallets } from '@web3-onboard/react'

let provider
let internalTransferContract: ethers.Contract
interface OnboardAPI {}

const Mint: React.FC = () => {

  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const connectedWallets = useWallets()

  const [web3Onboard, setWeb3Onboard] = useState<OnboardAPI | null>(null)
  const [numToMint, setNumToMint] = useState(0)
  const [mintActive, setMintActive] = useState(false)
  const [minActive, setMinActive] = useState(false)
  const [plusActive, setPlusActive] = useState(true)
  const [userClaims, setUserClaims] = useState([])
  const [proofs, setProofs] = useState([])

  useEffect(() => {
    setWeb3Onboard(initWeb3Onboard)
  }, [])

  useEffect(() => {
    if (!connectedWallets.length) return

    const connectedWalletsLabelArray = connectedWallets.map(
      ({ label }) => label
    )
    window.localStorage.setItem(
      'connectedWallets',
      JSON.stringify(connectedWalletsLabelArray)
    )

  }, [connectedWallets, wallet])

  useEffect(() => {
    if (!wallet?.provider) {
      provider = null
      setMintActive(false)
    } else {
      provider = new ethers.providers.Web3Provider(wallet.provider, 'any')

      internalTransferContract = new ethers.Contract(
        '0x86153A0d9c060BE48A0cfc2daEed3Eee957C9DD7',
        internalTransferABI,
        provider.getUncheckedSigner()
      )
      setMintActive(true)
    }
  }, [wallet])

  useEffect(() => {
    const connectedWallets = window.localStorage.getItem('connectedWallets')
    const previouslyConnectedWallets = connectedWallets !== null ? JSON.parse(connectedWallets) : []

    if (previouslyConnectedWallets?.length) {
      const setWalletFromLocalStorage = async (previouslyConnectedWallets: any) => {
        await connect({ autoSelect: previouslyConnectedWallets[0] })
      }
      setWalletFromLocalStorage(previouslyConnectedWallets)
    }
  }, [web3Onboard, connect])

  const readyToTransact = async () => {
    if (!wallet && connecting) return false
    return true
  }

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
    setUserClaims(arr => [...arr, { nfcId, tokenUri, birthday }])

    /// @ts-ignore
    setProofs(arr => [...arr, proof])

    setPlusActive(true)
  }

  const mint = async (contract: any) => {
    console.log('Mint triggered', contract)
    if (numToMint === 0) {
      alert("Please click '+' to reserve one if any are available")
      return
    }

    const recipient = wallet?.accounts[0].address

    /// @ts-ignore
    console.log('Recipient', recipient)
    console.log('Claims', userClaims.length)
    console.log('Proofs', proofs.length)

    const feePerNFT = await contract.pricePerNFTInETH()
    console.log('Fee', feePerNFT.toString())

    const notify = initNotify()

    try {
      /// @ts-ignore
      const tx = await contract.multiOpenMint(
        /// @ts-ignore
        recipient,
        userClaims,
        proofs,
        {
          value: feePerNFT.mul(userClaims.length)
        }
      )

      const ready = await readyToTransact()
      if (!ready) return

      notify.config({ desktopPosition: 'topLeft', mobilePosition: 'bottom' })
      const { emitter } = notify.hash(tx.hash)
      
      setNumToMint(0)
      setUserClaims([])
      setProofs([])

      emitter.on('txSent', console.log)
      emitter.on('txPool', console.log)
      emitter.on('txConfirmed', transaction => {
        // Redirect
        window.location.href = plushClaimRedirect
      })
      emitter.on('txSpeedUp', console.log)
      emitter.on('txCancel', console.log)
      emitter.on('txFailed', console.log)

    } catch (error) {
      console.log(error)
    }
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
                <button className="w-full border-4 border-blacker text-white bg-dark-blue/90 text-[1.5rem] px-[1.25rem] py-[0.75rem] font-bold rounded-full hover:bg-dark-blue/80 active:bg-dark-blue transition-all duration-150 ease-out" onClick={() => mint(internalTransferContract)} disabled={!mintActive}>Mint</button>
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
              <button className="w-full border-4 border-blacker text-white bg-dark-blue/90 text-[1.5rem] px-[1.25rem] py-[0.75rem] font-bold rounded-full hover:bg-dark-blue/80 active:bg-dark-blue transition-all duration-150 ease-out" onClick={() => { connect({}) }}>Connect</button>
          }
        </div>
      </div>

    </div>
  )
}

export default Mint