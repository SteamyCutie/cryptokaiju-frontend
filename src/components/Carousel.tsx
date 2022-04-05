import * as React from "react"
import { default as Slider, Settings } from "react-slick"
import kaijuCarousel from "../configs/kaijuCarousel.json"

const Carousel: React.FC = () => {
  var settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: true
  }

  return (
    <Slider {...settings}>
      {kaijuCarousel.map(step => (
        <div key={step.label}>
          <img
            src={step.photo}
            alt={step.label}
            style={{
              borderRadius: "15px",
              height: "300px",
              display: "block",
              overflow: "hidden",
              width: "100%"
            }}
          />
        </div>
      ))}
    </Slider>
  )
}

export default Carousel