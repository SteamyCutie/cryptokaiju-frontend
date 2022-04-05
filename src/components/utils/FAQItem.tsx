import { useState } from "react"
import ARROW from "../../assets/svg/arrow.svg"

interface FAQItemInterface {
  data: any
}

const FAQItem: React.FC<FAQItemInterface> = ({ data }) => {
  const [isOpened, setOpened] = useState(false)
  return (
    <div className="border-4 border-black rounded-[50px] grid transition-all duration-300 ease-out bg-white">
      <div onClick={() => setOpened(!isOpened)} className="justify-between items-center cursor-pointer flex text-[24px] px-5">
        <p className="font-extrabold text-[26px] text-dark-blue faq-item py-7">{data.question}</p>
        <img src={ARROW} width={20} height={20} alt="Arrow" style={{ transform: `rotate(${isOpened ? "180" : "0"}deg)`, transition: "all 300ms" }} />
      </div>
      <div className={`${isOpened ? 'flex' : 'hidden'} indent-2 px-5 py-7 text-[1.25rem] text-darker -mt-10 text-justify w-full leading-8`}>{data.answer}</div>
    </div >
  )
}

export default FAQItem