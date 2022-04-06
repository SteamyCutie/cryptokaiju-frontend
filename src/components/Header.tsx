import { Link } from "react-router-dom"

import DINO_LOGO from '../assets/png/Dino Logo.png'
import kaijuLink from '../configs/kaijuLinks.json'
import OPENSEA_ICON from '../assets/svg/opensea.svg'
import LOOKSRARE_ICON from '../assets/svg/looksrare.svg'
import TWITTER_ICON from '../assets/svg/twitter.svg'

const Header: React.FC = () => {

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
    <div id="header" className="bg-light-blue justify-between w-full items-center flex px-10 py-8">
      <Link to=""><img src={DINO_LOGO} alt="Dino Logo" width={80} height={80} /></Link>
      <div className="text-black text-[1.5rem] font-bold uppercase flex gap-10 tracking-widest">
        <div className="cursor-pointer" onClick={() => handleScrollTo('about')}>About</div>
        <a href={kaijuLink.shop} target="_blank" rel="noreferrer">Shop</a>
        <div className="cursor-pointer" onClick={() => handleScrollTo('faq')}>FAQ</div>
      </div>
      <div className="text-black flex items-center gap-4">
        <a href={kaijuLink.opensea} target="_blank" rel="noreferrer"><img src={OPENSEA_ICON} alt="Dino Logo" width={40} height={40} /></a>
        <a href={kaijuLink.looksrare} target="_blank" rel="noreferrer"><img src={LOOKSRARE_ICON} alt="Dino Logo" width={40} height={40} /></a>
        <a href={kaijuLink.twitter} target="_blank" rel="noreferrer"><img src={TWITTER_ICON} alt="Dino Logo" width={40} height={40} /></a>
      </div>
    </div>
  )
}

export default Header