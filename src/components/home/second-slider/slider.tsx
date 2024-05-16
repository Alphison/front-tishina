"use client"

import Category from "./category"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import './style.css' 
import Slide from "./slide/slide";
import 'swiper/css/navigation'
import { Autoplay, Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { houseSerivce } from "@/services/house.service";
import { IHouse } from "@/types/house";
import Loader from "@/components/Loader";


export default function SliderSecond () {    

    const {data, isLoading, error} = useQuery({
        queryKey: ['houses'],
        queryFn: () => houseSerivce.getAll(),
        select: ({data}) => data.data 
    })

    if(error){
        return (
            <div className="mt-[50px]">
                Произошла ошибка: {error.message}
            </div>
        )
    }

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
                {
                    isLoading ?
                     <Loader />
                    : data ?
                        data.map((house: IHouse, i: number) => {
                            return (
                                <SwiperSlide className="swiperSlide" key={i}>
                                    <Slide house={house}/>
                                </SwiperSlide> 
                            )                            
                        })
                    : 'Домов пока нет...'
                } 
                <div className="bgSlider"></div>
            </Swiper>
                      
        </div>
    )
}