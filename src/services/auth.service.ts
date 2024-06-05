import { axiosClassic, axiosWithAuth } from "@/api/interceptors"
import { saveTokenStorage } from "./auth-token.service"
import { AxiosResponse } from "axios"

type TLoginForm = {
    Email: string,
    Password: string
}

export type TResLogin = {
    token:string
}

export const authService = {
    async login(data:TLoginForm): Promise<AxiosResponse<TResLogin>>{
        const response = await axiosClassic.post<TResLogin>('/login', data)

        if(response.data.token) saveTokenStorage(response.data.token)

        return response    
    },
    async me(){
        return await axiosWithAuth.get('/me')
    },
    async profile(){
        return await axiosWithAuth.get('/profile')
    },
    async logout(){
        return await axiosWithAuth.post('/logout')
    }
} 