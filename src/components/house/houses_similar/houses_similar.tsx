import { useHouses } from "@/hooks/useHouses";
import House from "./house";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import { IHouse } from "@/types/house";

export default function Houses({category_id, house_id}: {category_id: number, house_id:number}) {

    const {data, isLoading, error} = useHouses()

    const [newData, setNewData] = useState<IHouse[]>([])

    useEffect(() => {
        if(data){
            const items = data.filter(item => item.category.id === category_id && item.id != house_id)
            setNewData(items)
        }
    }, [data, category_id, house_id])

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
        <div className="flex flex-col gap-[35px] my-[86px]">
            {
                newData.map((item, i) => {
                    return <House key={i} item={item}/>
                })
            }
        </div>
    )
}