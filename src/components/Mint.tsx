import { useState } from "react"
import PINK_KAIJU from "../assets/png/Pink Kaiju.png"

const Mint: React.FC = () => {
  const [numToMint, setNumToMint] = useState(1)
  const [minActive, setMinActive] = useState(false)
  const [plusActive, setPlusActive] = useState(false)

  return (
    <div className="bg-light-blue w-full justify-center items-center grid pt-20 md:pt-40 pb-10 gap-10">
      <p className="text-dark-blue text-[40px] md:text-[56px] lg:text-[70px] leading-[40px] md:leading-[50px] lg:leading-[60px] font-extrabold text-center tracking-widest">CRYPTOKAIJU<br />Pretty Fine Plushies</p>
      <div className="grid md:flex items-center justify-center gap-4">
        <img src={PINK_KAIJU} alt="Pink Kaiju" width={300} height={262} />
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
      </div >
    </div >
  )
}

export default Mint