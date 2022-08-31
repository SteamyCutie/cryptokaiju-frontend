import KAIJU_WAVING from "../assets/png/Kaiju Waving.png"

const Founder: React.FC = () => {
  return (
    <div className="grid justify-items-center items-center gap-4 md:gap-6 lg:gap-10 bg-light-oliver mt-[342px]">
      <div className="flex space-x-12 md:space-x-16 lg:space-x-20 -mt-[262px] mb-0">
        <img className="translate-x-6" src={KAIJU_WAVING} alt="Kaiju Waving" width={300} height={262} />
      </div>
      <div className="font-extrabold text-dark-blue uppercase text-[2rem] md:text-[2.5rem] lg:text-[3rem] mt-6">About CryptoKaiju</div>
      <div className="grid w-4/5 lg:w-3/5 text-center text:[1.25rem] md:text-[1.35rem] lg:text-[1.5rem] mb-20 gap-10">
        <p>CryptoKaiju was founded in 2018 and is a completely unique NFT experience - The project was created as a way to demonstrate how blockchain technology could be used to improve provenance in the collectibles industry and has since evolved into a way to merge digital and physical experiences.</p>
        <p>Attached to each Kaiju is a tamper resistant NFC chip which contains a unique serial number, this string is then output into a corresponding NFT for each which links the physical to the digital</p>
      <p>Since our launch in 2018 we have partnered with a number of brands including Dapper Labs, The Sacramento Kings and The Sandbox and with each new product, we deliver new and exciting experiences for our fans.</p>
      </div>
    </div>
  )
}

export default Founder