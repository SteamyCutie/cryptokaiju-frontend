import KAIJU_WAVING from "../assets/png/Kaiju Waving.png"

const Founder: React.FC = () => {
  return (
    <div className="grid justify-items-center items-center gap-4 md:gap-6 lg:gap-10 bg-light-oliver mt-[342px]">
      <div className="flex space-x-12 md:space-x-16 lg:space-x-20 -mt-[262px] mb-0">
        <img className="translate-x-6" src={KAIJU_WAVING} alt="Kaiju Waving" width={300} height={262} />
      </div>
      <div className="font-extrabold text-dark-blue uppercase text-[2rem] md:text-[2.5rem] lg:text-[3rem] mt-6">About the founder</div>
      <div className="grid w-4/5 lg:w-3/5 text-center text:[1.25rem] md:text-[1.35rem] lg:text-[1.5rem] mb-20 gap-10">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    </div>
  )
}

export default Founder