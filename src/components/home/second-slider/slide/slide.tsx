import Image from "next/image";

export default function Slide() {
    return (
        <div className="w-[320px] rounded-[30px] overflow-hidden relative flex ">
            <Image src={'/images/foto2.jpg'} width={320} height={470} alt="" className="absolute top-0 left-0"/>
            <div className="flex flex-col gap-[40px]">
                <p className="text-[23px] font-medium w-2/3">Preparation fordesert tours with camels</p>
                <p className="text-[15px] font-bold uppercase">EGYPT</p>
            </div>
        </div>
    )
}