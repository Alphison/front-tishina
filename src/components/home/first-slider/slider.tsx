'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./slide/slide";
import { Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'

export default function Slider(){
    return (
        <Swiper pagination={true} modules={[Pagination]} className="rounded-[30px] overflow-hidden mt-[42px] mySwiper">
            <SwiperSlide>
                <Slide name="Название дома" address="address"/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide name="Название дома" address="address"/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide name="Название дома" address="address"/>
            </SwiperSlide>
        </Swiper>
    )
}   