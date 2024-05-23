import { axiosClassic } from "@/api/interceptors"
import { IHouseWithOptionalData, IHouses } from "@/types/house";

export const houseSerivce = {
    async getAll() {
        return await axiosClassic.get<IHouses>('/houses');
    },
    async get(id:string) {
        return await axiosClassic.get<IHouseWithOptionalData>(`/house/${id}`);
    }
} 