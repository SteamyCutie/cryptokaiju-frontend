/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import Web3 from 'web3'
import PIRATE_KAIJU from "../assets/png/Pirate-Kaiju-Icon2x.png"
import PINK_KAIJU from "../assets/png/Pink Kaiju.png"

const web3 = new Web3(Web3.givenProvider)

const Mint: React.FC = () => {
  const [numToMint, setNumToMint] = useState(1)
  const [minActive, setMinActive] = useState(false)
  const [plusActive, setPlusActive] = useState(false)

  const getLibrary = (provider: any) => {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
  }

  return (
    <div className="bg-light-blue w-full justify-center items-center grid pt-20 md:pt-40 pb-12 md:pb-0 gap-10">
      <Web3ReactProvider getLibrary={getLibrary}>
        <p className="text-dark-blue text-[40px] md:text-[56px] lg:text-[70px] leading-[40px] md:leading-[50px] lg:leading-[60px] font-extrabold text-center tracking-widest">CRYPTOKAIJU<br />Pretty Fine Plushies</p>
        <div className="grid md:flex items-center justify-center gap-4">
          <img className="flex md:hidden" src={PIRATE_KAIJU} alt="Pirate Kaiju" width={300} height={300} />
          <img className="hidden md:flex" src={PINK_KAIJU} alt="Pink Kaiju" width={300} height={262} />
          <div className="grid gap-4 items-center justify-center">
            <button className="w-full border-4 border-blacker text-white bg-dark-blue/90 text-[1.5rem] px-[1.25rem] py-[0.75rem] font-bold rounded-full hover:bg-dark-blue/80 active:bg-dark-blue transition-all duration-150 ease-out">Mint</button>
            <div className="border-[3px] border-blacker w-[270px] rounded-[20px] justify-between items-center flex px-6 py-2">
              <button className="cursor-pointer w-[40px] h-[40px] text-white text-center align-baseline text-[20px] font-extrabold bg-dark-blue/90 rounded-full hover:bg-dark-blue/80 active:bg-dark-blue transition-all duration-150 ease-out" disabled={!minActive} onClick={() => setNumToMint(numToMint - 1)}>
                -
              </button>
              <span className="text-[32px] font-extrabold">{numToMint}</span>
              <button className="cursor-pointer w-[40px] h-[40px] text-white text-center align-baseline text-[20px] font-extrabold bg-dark-blue/90 rounded-full hover:bg-dark-blue/80 active:bg-dark-blue transition-all duration-150 ease-out" disabled={!plusActive} onClick={() => setNumToMint(numToMint + 1)}>
                +
              </button>
            </div>
          </div>
        </div>
      </Web3ReactProvider>
    </div>
  )
}

export default Mint