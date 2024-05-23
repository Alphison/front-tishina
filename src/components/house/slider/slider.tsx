import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../house/style.css"
import { Autoplay } from "swiper/modules";

export default function Slider({images}: {images: string[]}) {


    return (
        <Swiper
        spaceBetween={35}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false  
        }}
        modules={[Autoplay]}
        className="mySwiper sliderHouse">
            {
                images.map((image, i) => [
                    <SwiperSlide className="houseSlide cursor-grab">
                        <Image loader={() => image} key={i} src={image} width={1240} height={600} alt=""/>
                    </SwiperSlide>
                ])
            }
        </Swiper>
    )
}