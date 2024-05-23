import { houseSerivce } from "@/services/house.service"
import { useQuery } from "@tanstack/react-query"

export function useHouses() {
    const {data, isLoading, error} = useQuery({
        queryKey: ['houses'],
        queryFn: () => houseSerivce.getAll(),
        select: ({data}) => data.data 
    })

    return {data, isLoading, error}
}