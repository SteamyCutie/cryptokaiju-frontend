import { useState } from "react"
import { Link } from "react-router-dom"

import DINO_LOGO from '../assets/png/Dino Logo.png'
import kaijuLink from '../configs/kaijuLinks.json'
import OPENSEA_ICON from '../assets/svg/opensea.svg'
import LOOKSRARE_ICON from '../assets/svg/looksrare.svg'
import TWITTER_ICON from '../assets/svg/twitter.svg'

const Header: React.FC = () => {

  const [isMenu, setMenu] = useState(false)
  const [hTop, setHTop] = useState(144)

  const showMenu = (e: any) => {
    setMenu(true)
    let header: any = document.getElementById("header")
    setHTop(header.offsetHeight)
    e.stopPropagation()
  }

  const handleScrollTo = (index: string) => {
    if (index !== '/') {
      if (index === '') return
      let element: any = document.getElementById(index)
      window.scrollTo({
        top: element.offsetTop,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div id="header" onClick={(e) => { setMenu(false); e.stopPropagation() }} className="bg-light-blue justify-between w-full items-center flex px-10 py-8">
      <Link to="" className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out"><img src={DINO_LOGO} alt="Dino Logo" width={80} height={80} /></Link>
      <div className="hidden md:flex text-black text-[1.5rem] font-bold uppercase gap-10 tracking-widest">
        <div className="cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out" onClick={() => handleScrollTo('about')}>About</div>
        <a href={kaijuLink.shop} className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out" target="_blank" rel="noreferrer">Shop</a>
        <div className="cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out" onClick={() => handleScrollTo('faq')}>FAQ</div>
      </div>
      <div onClick={(e) => showMenu(e)} className="grid md:hidden gap-[5px] hover:gap-[6px] active:gap-[4px] transition-all duration-150 ease-out">
        <hr className="border-[3px] border-black/90 w-8" />
        <hr className="border-[3px] border-black/90 w-8" />
        <hr className="border-[3px] border-black/90 w-8" />
      </div>
      <div onClick={() => setMenu(false)} className={`bg-white grid w-full text-[1.5rem] text-center font-bold uppercase tracking-widest gap-8 p-10 transition-all duration-150`} style={{ position: "absolute", top: hTop, left: 0, transform: isMenu ? "scaleY(1)" : "scaleY(0)", transformOrigin: "top" }}>
        <div className="cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out" onClick={() => handleScrollTo('about')}>About</div>
        <a href={kaijuLink.shop} className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out" target="_blank" rel="noreferrer">Shop</a>
        <div className="cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out" onClick={() => handleScrollTo('faq')}>FAQ</div>
        <div className="flex text-black justify-center items-center gap-4">
          <a href={kaijuLink.opensea} target="_blank" rel="noreferrer" className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out"><img src={OPENSEA_ICON} alt="Dino Logo" width={40} height={40} /></a>
          <a href={kaijuLink.looksrare} target="_blank" rel="noreferrer" className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out"><img src={LOOKSRARE_ICON} alt="Dino Logo" width={40} height={40} /></a>
          <a href={kaijuLink.twitter} target="_blank" rel="noreferrer" className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out"><img src={TWITTER_ICON} alt="Dino Logo" width={40} height={40} /></a>
        </div>
      </div>
      <div className="hidden md:flex text-black items-center gap-4">
        <a href={kaijuLink.opensea} target="_blank" rel="noreferrer" className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out"><img src={OPENSEA_ICON} alt="Dino Logo" width={40} height={40} /></a>
        <a href={kaijuLink.looksrare} target="_blank" rel="noreferrer" className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out"><img src={LOOKSRARE_ICON} alt="Dino Logo" width={40} height={40} /></a>
        <a href={kaijuLink.twitter} target="_blank" rel="noreferrer" className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out"><img src={TWITTER_ICON} alt="Dino Logo" width={40} height={40} /></a>
      </div>
    </div>
  )
}

export default Header