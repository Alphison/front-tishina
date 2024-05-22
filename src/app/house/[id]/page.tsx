"use client"

import { axiosClassic } from "@/api/interceptors";
import Loader from "@/components/Loader";
import BroniForm from "@/components/house/BroniForm";
import Block from "@/components/house/block";
import Slider from "@/components/house/slider/slider";
import { houseSerivce } from "@/services/house.service";
import { useQuery } from "@tanstack/react-query";

export default function Page({params}: {params: {id: string}}) {

    const {data, isLoading, error} = useQuery({queryKey: ['house'], queryFn: () => houseSerivce.get(params.id), select: ({data}) => data.data})

    if(isLoading){
        return <div className="w-full flex justify-center py-[50px]"><Loader w={50}/></div>
    }

    if(error){
        return 'Ошибка: ' + error.message
    }

    return (
        <div className="overflow-hidden">            
            <div className="w-[1240px] mx-auto">
                <Slider />
                <div className="mt-[65px]">
                    <h1 className="font-mono text-[45px] font-semibold">{data?.name}</h1>
                    <p className="font-mono text-[17px] font-semibold mt-[10px]">{data?.address}</p>
                    <div className="flex mt-[25px] gap-[72px]">
                        <div className="flex-1">
                            <p className="font-mono text-[17px] font-normal">{data?.description}</p>
                        </div>
                        <div className="flex-1">
                            <h2 className="font-mono text-[22px] font-bold text-[#4E6F54]">Что включено в стоимость</h2>
                            <div className="grid grid-cols-2 gap-y-[30px] gap-x-[47px] mt-[30px]">
                                <Block />
                                <Block />
                                <Block />
                                <Block />
                                <Block />
                                <Block />
                                <Block />
                                <Block />
                                <Block />
                                <Block />
                            </div>
                        </div>
                    </div>
                </div>
                <BroniForm />
            </div>
        </div>
    )
}