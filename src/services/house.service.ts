import { axiosClassic } from "@/api/interceptors"
import { IHouse, IHouses } from "@/types/house";

export const houseSerivce = {
    async getAll() {
        return await axiosClassic.get<IHouses>('/houses');
    },
    async get(id:string) {
        return await axiosClassic.get<IHouse>(`/house/${id}`);
    }
} 