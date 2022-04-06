import Carousel from "nuka-carousel"
import kaijuPress from "../configs/kaijuPress.json"
import ARROW from "../assets/svg/arrow.svg"

const Press: React.FC = () => {
  return (
    <div className="grid justify-items-center items-center gap-10 mt-10">
      <div className="font-extrabold text-dark-blue uppercase text-[3rem] mt-24">Press Links</div>
      <div className="flex space-x-20 mb-10 bg-dark-white w-full items-center justify-center">
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide} className="mx-10">
              <img src={ARROW} width={24} height={24} alt="Arrow" style={{ transform: "rotate(90deg)" }} />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide} className="mx-10">
              <img src={ARROW} width={24} height={24} alt="Arrow" style={{ transform: "rotate(-90deg)" }} />
            </button>
          )}
          style={{ height: 360, padding: 0 }}
          className="text-center w-[100vw]"
          autoplay={true}
          cellSpacing={5}
          easing={"easeQuadInOut"}
          wrapAround={true}
          zoomScale={0.1}
        >
          {kaijuPress.map((step, idx) =>
            <div key={idx} className="grid items-center justify-items-center text-center w-full h-[360px] mx-10">
              <div className="grid items-center gap-5">
                <p className="text-[48px] text-black font-extrabold">{step.title}</p>
                <p className="text-[24px] text-black/90">{step.subtitle}</p>
              </div>
            </div>
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default Press