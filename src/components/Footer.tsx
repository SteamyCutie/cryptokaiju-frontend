import OPENSEA_LIGHT from "../assets/svg/opensea-light.svg"
import DISCORD_LIGHT from "../assets/svg/discord-light.svg"
import TWITTER_LIGHT from "../assets/svg/twitter-light.svg"
import MEDIUM_LIGHT from "../assets/svg/medium-light.svg"
import INSTAGRAM_LIGHT from "../assets/svg/instagram-light.svg"
import kaijuLinks from "../configs/kaijuLinks.json"

const Footer: React.FC = () => {
  return (
    <div className="bg-dark-blue pt-16 pb-20 mt-20">
      <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
        <a className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out w-6 md:w-8 lg:w-10" href={kaijuLinks.opensea} target="_blank" rel="noreferrer"><img src={OPENSEA_LIGHT} alt="OpenSea" /></a>
        <a className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out w-6 md:w-8 lg:w-10" href={kaijuLinks.discord} target="_blank" rel="noreferrer"><img src={DISCORD_LIGHT} alt="Discord" /></a>
        <a className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out w-6 md:w-8 lg:w-10" href={kaijuLinks.twitter} target="_blank" rel="noreferrer"><img src={TWITTER_LIGHT} alt="Twitter" /></a>
        <a className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out w-6 md:w-8 lg:w-10" href={kaijuLinks.instagram} target="_blank" rel="noreferrer"><img src={INSTAGRAM_LIGHT} alt="Instagram" /></a>
      </div>
    </div>
  )
}

export default Footer