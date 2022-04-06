import kaijuFAQs from "../configs/kaijuFAQs.json"
import FAQItem from "./utils/FAQItem"

const FAQ: React.FC = () => {
  return (
    <div id="faq" className="grid justify-items-center items-center gap-10 bg-light-sky mt-20 py-10">
      <div className="font-extrabold text-dark-blue text-[3rem] mt-10">FAQs</div>
      <div className="grid w-3/5 text-center text-[1.5rem] gap-4">
        {
          kaijuFAQs.map((item, idx) =>
            <FAQItem key={idx} data={item} />
          )
        }
      </div>
    </div>
  )
}

export default FAQ