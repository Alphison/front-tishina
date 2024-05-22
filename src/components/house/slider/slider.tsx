import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../house/style.css"
import { Autoplay } from "swiper/modules";

export default function Slider() {


    return (
        <Swiper
        spaceBetween={35}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false  
        }}
        modules={[Autoplay]}
        className="mySwiper sliderHouse">
            <SwiperSlide className="houseSlide cursor-grab">
                <Image src="/images/foto.jpg" width={1240} height={600} alt=""/>
            </SwiperSlide>
            <SwiperSlide className="houseSlide">
                <Image src="/images/foto.jpg" width={1240} height={600} alt=""/>
            </SwiperSlide>
            <SwiperSlide className="houseSlide">
                <Image src="/images/foto.jpg" width={1240} height={600} alt=""/>
            </SwiperSlide>
        </Swiper>
    )
}