import { ICategories } from './../types/category';
import { axiosClassic } from "@/api/interceptors"

export const categorySerivce = {
    async getAll() {
        return await axiosClassic.get<ICategories>('/categories');
    }
} 