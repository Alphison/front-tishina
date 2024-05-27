"use client"

import Loader from "@/components/Loader";
import BroniForm from "@/components/house/BroniForm";
import CalendarComponent from "@/components/house/Calendar/calendar";
import Block from "@/components/house/block";
import Houses from "@/components/house/houses_similar/houses_similar";
import Slider from "@/components/house/slider/slider";
import { houseSerivce } from "@/services/house.service";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Page({params}: {params: {id: string}}) {

    const {data, isLoading, error} = useQuery({queryKey: ['house'], queryFn: () => houseSerivce.get(params.id), select: ({data}) => data.data})    

    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        if (data && !isLoading && !error) {
            const newImages = [data.preview, ...data.images.map(img => img.src)];
            setImages(newImages);
        }
    }, [data, isLoading, error]);

    if(isLoading){
        return <div className="w-full flex justify-center py-[50px]"><Loader w={50}/></div>
    }

    if(error){
        return 'Ошибка: ' + error.message
    }

    if(!data){
        return 'Данных нет...'
    }

    return (
        <div className="overflow-hidden">      
            <CalendarComponent houseUsers={data.houseUsers}/>
            <div className="w-[1240px] mx-auto">
                <Slider images={images}/>
                <div className="mt-[65px]">
                    <h1 className="font-mono text-[45px] font-semibold">{data.name}</h1>
                    <p className="font-mono text-[17px] font-semibold mt-[10px]">{data.address}</p>
                    <div className="flex mt-[25px] gap-[72px]">
                        <div className="flex-1">
                            <p className="font-mono text-[17px] font-normal">{data.description}</p>
                        </div>
                        <div className="flex-1">
                            <h2 className="font-mono text-[22px] font-bold text-[#4E6F54]">Что включено в стоимость</h2>
                            <div className="grid grid-cols-2 gap-y-[30px] gap-x-[47px] mt-[30px]">
                                {
                                    data.features.map((feature, i) => {
                                        return <Block feature={feature} key={i}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <BroniForm />
                <Houses category_id={data.category.id} house_id={data.id}/>
            </div>
        </div>
    )
}