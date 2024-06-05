import Image from "next/image";
import { SwiperSlide } from "swiper/react";

interface ISlide {
    name: string;
    address: string;
}

export default function Slide({name, address}: ISlide) {
    return (
        <div className="relative">
            <Image src={'/images/foto.jpg'} width={1238} height={631} alt=""/>
            <div className="flex flex-col absolute bottom-[10px] 600:bottom-[30px] 950:bottom-[64px] left-[10px] 600:left-[30px] 950:left-[70px]">
                <p className="slide-font-size-p font-bold">Visit Sidney today.</p>
                <h1 className="slide-font-size-h1 leading-[30px] 600:leading-[50px] 800:leading-[64px] mt-[6px] 600:mt-[12px] 800:mt-[29px] w-2/3 950:w-[400px] font-extrabold">Your home, your way.</h1>
                <button className="bg-[#4E6F54] mt-[15px] 600:mt-[30px] 800:mt-[54px] slide-font-size-button font-bold w-[110px] 600:w-[231px] py-[8px] px-[10px] 800:px-[23px] 800:py-[19px] rounded-[4px] 600:rounded-[10px]">Explore Australia</button>
            </div>
            <div className="absolute bottom-[30px] right-[30px] 950:bottom-[52px] 950:right-[70px] w-[251px] px-[40px] py-[12px] rounded-[80px] bg-[#D9D9D9] bg-opacity-[0.11] backdrop-blur-[10px]">
                <p className="text-[18px] font-bold">{name}</p>
                <p className="text-[16px] font-regular">{address}</p>
            </div>
        </div>
    )
}