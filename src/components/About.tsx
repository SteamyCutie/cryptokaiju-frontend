import AboutIcon1 from "../assets/png/About Icon 1.png"
import AboutIcon2 from "../assets/png/About Icon 2.png"
import AboutIcon3 from "../assets/png/About Icon 3.png"
import AboutIcon4 from "../assets/png/About Icon 4.png"
import AboutIcon5 from "../assets/png/About Icon 5.png"
import AboutIcon6 from "../assets/png/About Icon 6.png"

const About: React.FC = () => {
  return (
    <div id="about" className="grid justify-items-center items-center gap-10">
      <div className="font-extrabold text-dark-blue uppercase text-[3rem] mt-24">About</div>
      <div className="grid w-3/5 text-center text-[1.5rem] gap-10">
        <p>Founded in 2018, CryptoKaiju are massively collectible vinyl and plush art toys linked to NFTs for improved provenance and to create exciting new experiences that bridge the gap between the Metaverse and physical world!!!</p>
        <p>Pretty Fine Plushies are 777 soft huggable plush Kaiju ready for new homes. Each plush NFT is unique and was randomly created from hundreds of hand-drawn traits.</p>
        <p>Simply mint your NFT and you'll be redirected to a form where you can enter your shipping details.</p>
      </div>
      <div className="flex space-x-20 my-10">
        <img src={AboutIcon1} alt="About Icon 1" width={168} height={168} />
        <img src={AboutIcon4} alt="About Icon 4" width={168} height={168} />
        <img src={AboutIcon2} alt="About Icon 2" width={168} height={168} />
        <img src={AboutIcon5} alt="About Icon 5" width={168} height={168} />
        <img src={AboutIcon3} alt="About Icon 3" width={168} height={168} />
        <img src={AboutIcon6} alt="About Icon 6" width={168} height={168} />
      </div>
    </div>
  )
}

export default About