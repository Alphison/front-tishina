"use client"

import { Pagination } from "swiper/modules"
import Category from "./category"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css' 


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
                slidesPerView={3}
                spaceBetween={20}
                className="mySwiper mt-[59px]"
            >
                <SwiperSlide>
                    
                </SwiperSlide>
            </Swiper>
        </div>
    )
}