import { IHouseSmall } from "@/types/house";
import Image from "next/image";

export default function HouseBlock({house, start_date, end_date}: {house: IHouseSmall, start_date: string, end_date: string}) {
       
    return (
        <div className="flex gap-[39px]">
            <Image src="/images/foto.jpg" alt="" width={357} height={242} className="rounded-[16px] h-[242px]"/>
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="font-mono text-[45px] font-semibold">{house.name}</h2>
                    <p className="font-mono text-[17px] font-semibold mt-[7px]">{house.address}</p>
                </div>
                <div>
                    <p className="font-mono text-[15px] font-light">Дата заезда: {start_date}</p>
                    <p className="font-mono text-[15px] font-light mt-[4px]">Дата выезда: {end_date}</p>
                </div>
            </div>
        </div>
    )
}