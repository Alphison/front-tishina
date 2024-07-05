"use client"

import Loader from "@/components/Loader";
import HouseBlock from "@/components/profile/houseBlock";
import InfoBlock from "@/components/profile/infoBlock";
import { authService } from "@/services/auth.service";
import { IHouseSmall } from "@/types/house";
import { IProfileHouse } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Profile() {  
  
    const {data, isLoading, error} = useQuery<any, any>({queryKey: ['profile'], queryFn: () => authService.profile(), select: (data) => data.data.data})    

    if(isLoading){
        return <div className="mx-auto"><Loader w={50}/></div>
    }

    if(error){
        toast.error(error.response.data.error)
    }

    return (
        <div className="max-w-[1240px] w-full px-[50px] mx-auto mt-[50px]">
            <h1 className="text-[24px] 680:text-[48px] font-mono font-bold mb-[29px]">Контактная информация</h1>
            <div className="flex flex-col gap-[20px]">
                <InfoBlock p1="Фамилия и имя:" p2={data?.surname + ' ' + data?.name}/>
                <InfoBlock p1="Электронная почта:" p2={data?.email}/>
                <InfoBlock p1="Номер телефона:" p2={data?.phone}/>
            </div>
            <h1 className="mt-[120px] text-[24px] 680:text-[48px] font-bold font-mono">Ваши забронированные дома:</h1>  
            <div className="my-[46px] flex flex-col gap-[40px]">
                {
                    data.houses.map((item: IProfileHouse, i: number) => {
                        return <HouseBlock house={item.house} start_date={item.check_in_date} end_date={item.check_out_date} key={i}/>
                    })
                }
            </div>          
        </div>
    )
}