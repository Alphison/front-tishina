import Image from "next/image";

interface ISlide {
    name: string;
    address: string;
}

export default function Slide({name, address}: ISlide) {
    return (
        <div className="relative h-full px-[40px] 650:px-[70px] py-[32px] 650:py-[64px]">
            <Image src={'/images/foto.jpg'} className="w-full h-full absolute object-cover top-0 left-0 z-[-1]" width={1238} height={631} alt=""/>
            <div className="flex flex-col mt-[100px] 480:mt-[170px] 650:mt-[270px]">
                <p className="text-[16px] 400:text-[24px] font-bold">Посетите Сидней сегодня.</p>
                <h1 className="650:leading-[64px] text-[25px] 400:text-[35px] 650:text-[70px] mt-[29px] w-full 650:w-[400px] font-extrabold">Твой дом, твой путь.</h1>
                <button className="bg-[#4E6F54] text-[13px] 400:text-[16px] mt-[54px] font-bold 480:max-w-[260px] 400:px-[23px] py-[19px] rounded-[10px]">Исследуйте Австралию</button>
            </div>
        </div>
    )
}