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
            <div className="flex flex-col absolute bottom-[30px] 950:bottom-[64px] left-[30px] 950:left-[70px]">
                <p className="text-[24px] font-bold">Visit Sidney today.</p>
                <h1 className="text-[50px] 950:text-[70px] leading-[64px] mt-[29px] w-2/3 950:w-[400px] font-extrabold">Your home, your way.</h1>
                <button className="bg-[#4E6F54] mt-[54px] text-[16px] font-bold w-[231px] px-[23px] py-[19px] rounded-[10px]">Explore Australia</button>
            </div>
            <div className="absolute bottom-[30px] right-[30px] 950:bottom-[52px] 950:right-[70px] w-[251px] px-[40px] py-[12px] rounded-[80px] bg-[#D9D9D9] bg-opacity-[0.11] backdrop-blur-[10px]">
                <p className="text-[18px] font-bold">{name}</p>
                <p className="text-[16px] font-regular">{address}</p>
            </div>
        </div>
    )
}