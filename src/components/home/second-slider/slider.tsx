"use client"

import Category from "./category"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import './style.css' 
import Slide from "./slide/slide";
import 'swiper/css/navigation'
import { Autoplay, Navigation } from "swiper/modules";


export default function SliderSecond () {
    return (
        <div className="mt-[89px]">
            <div className="flex border-b-[0.5px] border-[#272727]">
                <Category text="Best matches" status={true} />
                <Category text="Aparts" status={false} />
                <Category text="Villas" status={false} />
                <Category text="A-Forms" status={false} />
            </div>
          
            <Swiper
                loop={true}
                slidesPerView={4}
                spaceBetween={20}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper mySwiper-second relative"
            >
                <SwiperSlide className="swiperSlide">
                    <Slide />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <Slide />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <Slide />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <Slide />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <Slide />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <Slide />
                </SwiperSlide>       
                <div className="bgSlider"></div>
            </Swiper>
                      
        </div>
    )
}