"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import './style.css' 
import Slide from "./slide/slide";
import 'swiper/css/navigation'
import { Autoplay, Navigation } from "swiper/modules";
import { IHouse } from "@/types/house";
import Loader from "@/components/Loader";
import Categories from "./Categories/Categories";
import { useHouses } from "@/hooks/useHouses";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function SliderSecond () {    
    const [houses, setHouses] = useState<IHouse[]>([])

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth
      });
    
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth
        });
      };
    
      useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const setCategoryIdFun = (id: number) => {

        if(data){

            const housesFilter = data.filter(item => item.category.id === id)

            setHouses(housesFilter)

        }

    }

    const router = useRouter()

    const {data, isLoading, error} = useHouses()

    if(error){
        return (
            <div className="mt-[50px]">
                Произошла ошибка: {error.message}
            </div>
        )
    }

    return (
        <div className="mt-[89px]">
            <Categories setCategoryIdFun={setCategoryIdFun}/>
          
            <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={20}
                navigation={windowSize.width > 600}
                modules={[Autoplay, Navigation]}             
                breakpoints={{
                    350: {
                        slidesPerView: 2
                    },
                    700: {
                        slidesPerView: 3
                    },
                    900:{
                        slidesPerView: 4
                    }
                }}   
                className="mySwiper mySwiper-second relative"
            >
                {
                    isLoading ?
                     <Loader w={80}/>
                    : houses.length > 0 ?
                        houses.map((house: IHouse, i: number) => {
                            return (
                                <SwiperSlide className="swiperSlide" key={i} onClick={() => router.push(`/house/${house.id}`)}>
                                    <Slide house={house}/>
                                </SwiperSlide> 
                            )                            
                        })
                    : data ?
                        data.map((house: IHouse, i: number) => {
                            return (
                                <SwiperSlide className="swiperSlide" key={i} onClick={() => router.push(`/house/${house.id}`)}>
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