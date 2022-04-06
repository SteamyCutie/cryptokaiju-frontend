import * as React from "react"
import Carousel from "nuka-carousel"
import kaijuCarousel from "../configs/kaijuCarousel.json"

const Product: React.FC = () => {
  return (
    <div className="w-full flex item-center justify-center bg-[url('./assets/jpg/carousel-bg.jpg')] bg-cover mt-20">
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide} className="h-[240px] md:h-[300px] lg:h-[360px] w-12 md:w-16 lg:w-20 justify-center items-center flex hover:bg-gradient-to-r from-blacker/40 to-blacker/0">
            <svg version="1.1" className="fill-white" style={{ transform: `rotate(90deg)` }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 30.021 30.021" xmlSpace="preserve">
              <g><path d="M28.611,13.385l-11.011,9.352c-0.745,0.633-1.667,0.949-2.589,0.949c-0.921,0-1.842-0.316-2.589-0.949L1.411,13.385 c-1.684-1.43-1.89-3.954-0.46-5.638c1.431-1.684,3.955-1.89,5.639-0.459l8.421,7.151l8.42-7.151 c1.686-1.43,4.209-1.224,5.639,0.459C30.5,9.431,30.294,11.955,28.611,13.385z" /></g>
            </svg>
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} className="h-[240px] md:h-[300px] lg:h-[360px] w-12 md:w-16 lg:w-20 justify-center items-center flex hover:bg-gradient-to-l from-black/40 to-black/0">
            <svg version="1.1" className="fill-white" style={{ transform: `rotate(-90deg)` }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 30.021 30.021" xmlSpace="preserve">
              <g><path d="M28.611,13.385l-11.011,9.352c-0.745,0.633-1.667,0.949-2.589,0.949c-0.921,0-1.842-0.316-2.589-0.949L1.411,13.385 c-1.684-1.43-1.89-3.954-0.46-5.638c1.431-1.684,3.955-1.89,5.639-0.459l8.421,7.151l8.42-7.151 c1.686-1.43,4.209-1.224,5.639,0.459C30.5,9.431,30.294,11.955,28.611,13.385z" /></g>
            </svg>
          </button>
        )}
        className="text-center w-[100vw] h-[240px] md:h-[300px] lg:h-[360px] p-0"
        autoplay={true}
        easing={"easeQuadInOut"}
        wrapAround={true}
        zoomScale={0.1}
      >
        {kaijuCarousel.map((step, idx) =>
          <div key={idx} className="grid items-center justify-center text-center w-full h-[240px] md:h-[300px] lg:h-[360px]">
            <div className="grid items-center gap-5">
              <p className="text-[36px] md:text-[40px] lg:text-[48px] text-white font-extrabold">{step.title}</p>
              <p className="text-[16px] md:text-[20px] lg:text-[24px] text-white/90">{step.subtitle}</p>
            </div>
          </div>
        )}
      </Carousel>
    </div>
  )
}

export default Product