import Image from "next/image";
import "../style.css"

export default function Slide() {
    return (
        <div className="overflow-hidden relative flex items-end px-[28px] py-[57px] h-full">
            <Image src={'/images/foto2.jpg'} width={320} height={470} alt="" className="absolute z-[-1] top-0 left-0 h-full"/>
            <div className="flex flex-col gap-[35px]">
                <p className="text-[23px] font-medium w-[80%]">Preparation for desert tours with camels</p>
                <p className="text-[15px] font-bold uppercase">EGYPT</p>
            </div>
            <div className="bgSlide"></div>
        </div>
    )
}