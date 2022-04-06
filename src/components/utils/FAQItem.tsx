import { useState } from "react"
import ARROW from "../../assets/svg/arrow.svg"

interface FAQItemInterface {
  data: any
}

const FAQItem: React.FC<FAQItemInterface> = ({ data }) => {
  const [isOpened, setOpened] = useState(false)
  return (
    <div className="border-4 border-black rounded-[30px] md:rounded-[40px] lg:rounded-[50px] grid transition-all duration-300 ease-out bg-white">
      <div onClick={() => setOpened(!isOpened)} className="justify-between items-center cursor-pointer flex text-[24px] px-5">
        <p className="font-extrabold text-[18px] md:text-[22px] lg:text-[26px] text-dark-blue faq-item py-3 md:py-5 lg:py-7">{data.question}</p>
        <img src={ARROW} width={20} height={20} alt="Arrow" style={{ transform: `rotate(${isOpened ? "180" : "0"}deg)`, transition: "all 300ms" }} />
      </div>
      <div className={`${isOpened ? 'flex' : 'hidden'} indent-2 px-5 py-3 md:py-5 lg:py-7 text-[0.9rem] md:text-[1.1rem] lg:text-[1.25rem] text-darker -mt-5 md:-mt-7 lg:-mt-10 text-left w-full leading-4 md:leading-6 lg:leading-8`}>{data.answer}</div>
      <div className={`${isOpened ? 'flex' : 'hidden'} indent-2 px-5 py-3 md:py-5 lg:py-7 text-[0.75rem] md:text-[1rem] lg:text-[1.1rem] italic text-darker -mt-5 md:-mt-7 lg:-mt-10 text-left w-full leading-4 md:leading-6 lg:leading-8`}>{data.note ? `NOTE: ${data.note}` : ''}</div>
    </div >
  )
}

export default FAQItem