import Image from "next/image";
import Feature from "./feature";
import { IHouse } from "@/types/house";

export default function House({item}: {item: IHouse}){
    return (
        <div className="flex gap-[24px]">
            <Image className="rounded-[16px] h-[271px] object-cover" loader={() => item.preview} src={item.preview} alt="" width={450} height={271}/>
            <div className="flex flex-col justify-between items-end w-full">
                <div className="w-full">
                    <div className="flex justify-between w-full">
                        <h1 className="text-[21px] text-normal text-mono">{item.name}</h1>
                        <h2 className="text-[21px] text-normal text-mono">{item.price}</h2>
                    </div>
                    <div className="flex gap-[15px] mt-[12px] flex-wrap">
                        {
                            item.features.map((feature, i) => {
                                return <Feature feature={feature} key={i}/> 
                            })
                        }
                    </div>
                </div>                
                <button className="bg-[#4E6F54] border border-[$9C9C9C] w-[172px] py-[16px] px-[32px] text-[14px] font-mono font-normal rounded-[100px] hover:scale-[1.1] hover:bg-[#75B581] transition-all duration-300">
                    <span className="relative z-10">Забронировать</span>
                </button>
            </div>
        </div>
    )
}