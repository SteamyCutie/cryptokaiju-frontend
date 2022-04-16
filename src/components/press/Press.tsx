import * as React from "react"
import kaijuPress from "../../configs/kaijuPress.json"

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './press.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Press: React.FC = () => {

  return (
    <div className="items-center mt-10">
      <div className="font-extrabold text-dark-blue uppercase mb-20 text-center text-[2rem] md:text-[2.5rem] lg:text-[3rem] mt-24">Press Links</div>
      <div className="flex space-x-20 mb-10 bg-white w-full items-center justify-center press">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {kaijuPress.map((step, idx) =>
            <SwiperSlide 
              key={idx} 
              className="grid items-center justify-center text-center w-full bg-bottom" 
              style={{ 
                background: `url(${require(`../../assets/carousel/${step === null ? 'user.png' : step.image}`)})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover'
              }}
            >
              <a href={step.link} target="_blank" className="grid items-center gap-5 h-[360px] md:h-[450px] lg:h-[540px]" rel="noreferrer">
                {/* <p className="text-[36px] md:text-[40px] lg:text-[48px] text-black font-extrabold">{step.title}</p> */}
                {/* <p className="max-w-2xl text-[16px] md:text-[20px] lg:text-[24px] text-black/90 mb-10">{step.subtitle}</p> */}
                <p className="press-font max-w-4xl text-center text-[30px] md:text-[34px] lg:text-[38px] text-black font-extrabold">{step.subtitle}</p>
              </a>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  )
}

export default Press