import KAIJU_WAVING from "../assets/png/Kaiju Waving.png"

const Founder: React.FC = () => {
  return (
    <div className="grid justify-items-center items-center gap-10 bg-light-oliver mt-20">
      <div className="font-extrabold text-dark-blue uppercase text-[3rem] mt-24">About the founder</div>
      <div className="grid w-3/5 text-center text-[1.5rem] gap-10">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      <div className="flex space-x-20 my-10">
        <img src={KAIJU_WAVING} alt="Kaiju Waving" width={300} height={262} />
      </div>
    </div>
  )
}

export default Founder