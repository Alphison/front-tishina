import { categorySerivce } from "@/services/category.service";
import Category from "./category";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/Loader";

export default function Categories() {
    const {data, isLoading, error} = useQuery({
        queryKey: ['categories'],
        queryFn: () => categorySerivce.getAll(),
        select: ({data}) => data.data 
    }) 

    if(error){
        return (
            <div className="mt-[50px]">
                Произошла ошибка: {error.message}
            </div>
        )
    }

    return (
        <div className="flex border-b-[0.5px] border-[#272727]">
            <Category text="Все" status={true} />
            {
                isLoading ? 
                <Loader w={30}/>
                : data ?
                data.map((category, i) => {
                    return <Category text={category.name} status={false} key={i}/>
                } ) 
                : "Категорий больше нет..."
            }
        </div>
    )
}