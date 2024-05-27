import { categorySerivce } from "@/services/category.service";
import Category from "./category";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/Loader";
import { useState } from "react";

export default function Categories({setCategoryIdFun}: {setCategoryIdFun: (id: number) => void}) {
    const {data, isLoading, error} = useQuery({
        queryKey: ['categories'],
        queryFn: () => categorySerivce.getAll(),
        select: ({data}) => data.data 
    }) 

    const [category_id, setCategoryId] = useState<number>(0)


    const clickCategoryHandle = (id:number) => {
        
        setCategoryId(id)
        setCategoryIdFun(id)

    }

    if(error){
        return (
            <div className="mt-[50px]">
                Произошла ошибка: {error.message}
            </div>
        )
    }

    return (
        <div className="flex border-b-[0.5px] border-[#272727]">
            <button onClick={() => clickCategoryHandle(0)}>
                <Category text="Все" status={category_id === 0 ? true : false}/>
            </button>
            {
                isLoading ? 
                <Loader w={30}/>
                : data ?
                data.map((category, i) => {
                    return <button onClick={() => clickCategoryHandle(category.id)} key={i}>
                        <Category text={category.name} status={category_id === category.id ? true : false}/>
                    </button>
                } ) 
                : "Категорий больше нет..."
            }
        </div>
    )
}