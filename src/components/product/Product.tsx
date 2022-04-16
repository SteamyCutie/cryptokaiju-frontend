import * as React from "react"
import kaijuCarousel from "../../configs/kaijuCarousel.json"

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './product.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Product: React.FC = () => {
  const images: any[] = []
  kaijuCarousel.forEach(item => {
    const img = require(`../../assets/carousel/${item === null ? 'user.png' : item}`);
    images.push(img)
  })
  return (
    <div className="w-full flex item-center justify-center bg-[url('./assets/jpg/carousel-bg.jpg')] bg-cover mt-20 product">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {images.map((step, idx) =>
          <SwiperSlide key={idx}>
            <img src={step} alt="img" className="grid items-center justify-center text-center object-top object-cover w-full h-auto max-h-[48rem]"/>
            {/* <div className="grid items-center gap-5">
              <p className="text-[36px] md:text-[40px] lg:text-[48px] text-white font-extrabold">{step.title}</p>
              <p className="text-[16px] md:text-[20px] lg:text-[24px] text-white/90">{step.subtitle}</p>
            </div> */}
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default Product