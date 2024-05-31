import { axiosClassic } from "@/api/interceptors"
import { saveTokenStorage } from "./auth-token.service"

type TLoginForm = {
    email: string,
    password: string
}

export const authService = {
    async login(data:TLoginForm){
        const response = await axiosClassic.post('/login', data)

        if(response.data.token) saveTokenStorage(response.data.token)

        return response    
    } 
} 