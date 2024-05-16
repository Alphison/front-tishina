import { axiosClassic } from "@/api/interceptors"
import { IHouses } from "@/types/house";

export const houseSerivce = {
    async getAll() {
        return await axiosClassic.get<IHouses>('/houses');
    }
} 