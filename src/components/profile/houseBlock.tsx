import { IHouseSmall } from "@/types/house";
import Image from "next/image";

export default function HouseBlock({house, start_date, end_date}: {house: IHouseSmall, start_date: string, end_date: string}) {
       
    return (
        <div className="flex flex-wrap gap-[39px]">
            <Image loader={() => house.preview} src={house.preview} alt="" width={357} height={242} className="rounded-[16px] object-cover 550:h-[242px] w-full 550:w-auto"/>
            <div className="flex flex-col gap-[20px] justify-between">
                <div>
                    <h2 className="font-mono text-[22px] 550:text-[45px] font-semibold">{house.name}</h2>
                    <p className="font-mono text-[13px] 550:text-[17px] font-semibold mt-[7px]">{house.address}</p>
                </div>
                <div>
                    <p className="font-mono text-[13px] 550:text-[15px] font-light">Дата заезда: {start_date}</p>
                    <p className="font-mono text-[13px] 550:text-[15px] font-light mt-[4px]">Дата выезда: {end_date}</p>
                </div>
            </div>
        </div>
    )
}