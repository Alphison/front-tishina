import Image from "next/image";
import "../style.css"
import { IHouse } from "@/types/house";

export default function Slide({house}: {house: IHouse}) {
    return (
        <div className="overflow-hidden relative flex items-end px-[28px] py-[57px] h-full">
            <Image loader={() => house.preview} src={house.preview} width={320} height={470} alt="" className="absolute z-[-1] top-0 left-0 h-full object-cover"/>
            <div className="flex flex-col gap-[35px]">
                <p className="text-[23px] font-medium w-[80%]">{house.small_description}</p>
                <p className="text-[15px] font-bold uppercase">{house.name}</p>
            </div>
            <div className="bgSlide"></div>
        </div>
    )
}