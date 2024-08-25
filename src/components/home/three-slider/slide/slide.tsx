import Image from "next/image";
import React from 'react';

interface ISlide {
    name: string;
    address: string;
}

export default function Slide({name, address}: ISlide) {
    return (
        <div className="col-span-2 rounded-[9px] 600:rounded-[30px] overflow-hidden relative p-[20px] 550:p-[35px] min-h-[209px] max-h-[400px]">
            <Image className="absolute object-cover top-0 left-0 w-full h-full z-[-1]" src="/images/homeImage.jpg" width={1240} height={601} alt=""/>
            <div className="bg-black bg-opacity-[0.2] z-[-1] absolute top-0 left-0 w-full h-full"></div>
            <div className="">
                <p className="text-[10px] font-bold tracking-[5px]">МЕСТНЫЕ СПОСОБЫ</p>
                <h1 className="400:leading-[32px] max-w-[500px] text-[15px] 400:text-[25px] 650:text-[35px] font-extrabold mt-[19px]">10 скандинавских домов с безупречным дизайном.</h1>
            </div>
            <p className="mt-[20px] font-semibold leading-[13px] 550:leading-[20px] text-[7px] 550:text-[13px]">Независимо от того, продаете ли вы свой текущий дом, получаете финансирование или покупаете новый, мы делаем это просто и эффективно. Что самое приятное? с нашими услугами вы сэкономите кучу денег и времени.</p>
        </div>
    )
}