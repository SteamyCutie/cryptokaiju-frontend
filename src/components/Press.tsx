import Carousel from "nuka-carousel"
import kaijuPress from "../configs/kaijuPress.json"
import ARROW from "../assets/svg/arrow.svg"

const Press: React.FC = () => {
  return (
    <div className="grid justify-items-center items-center gap-10 mt-10">
      <div className="font-extrabold text-dark-blue uppercase text-[2rem] md:text-[2.5rem] lg:text-[3rem] mt-24">Press Links</div>
      <div className="flex space-x-20 mb-10 bg-white w-full items-center justify-center">
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide} className="h-[240px] md:h-[300px] lg:h-[360px] w-12 md:w-16 lg:w-20 justify-center items-center flex hover:bg-gradient-to-r from-blacker/40 to-blacker/0">
              <img src={ARROW} width={24} height={24} alt="Arrow" style={{ transform: "rotate(90deg)" }} />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide} className="h-[240px] md:h-[300px] lg:h-[360px] w-12 md:w-16 lg:w-20 justify-center items-center flex hover:bg-gradient-to-l from-black/40 to-black/0">
              <img src={ARROW} width={24} height={24} alt="Arrow" style={{ transform: "rotate(-90deg)" }} />
            </button>
          )}
          className="text-center w-[100vw] h-[240px] md:h-[300px] lg:h-[360px] p-0"
          autoplay={true}
          easing={"easeQuadInOut"}
          wrapAround={true}
          zoomScale={0.1}
        >
          {kaijuPress.map((step, idx) =>
            <div key={idx} className="grid items-center justify-items-center text-center w-full h-[240px] md:h-[300px] lg:h-[360px]">
              <div className="grid items-center gap-5">
                <p className="text-[36px] md:text-[40px] lg:text-[48px] text-black font-extrabold">{step.title}</p>
                <p className="text-[16px] md:text-[20px] lg:text-[24px] text-black/90">{step.subtitle}</p>
              </div>
            </div>
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default Press