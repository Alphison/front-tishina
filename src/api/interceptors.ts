import { getAccessToken, removeFromStorage } from "@/services/auth-token.service";
import axios ,  { CreateAxiosDefaults } from "axios";
import { errorCatch } from "./error";

const options: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
        'Content-Type': 'application/json' 
    },
    withCredentials: false
}

export const axiosClassic = axios.create(options)

// export const axiosWithAuth = axios.create(options)

// axiosWithAuth.interceptors.request.use(config => {
//     const accessToken = getAccessToken()

//     if(config?.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`

//     return config
// })

// axiosWithAuth.interceptors.response.use(
//     config => config,
//     async error => {
//         const originalRequest = error.config

//         if((error?.response?.status === 200 ||
//             errorCatch(error) === 'jwt expired' ||
//             errorCatch(error) === 'jwt must be provided') && 
//             error.config && 
//             !error.config._isRetry
//          ){
//             originalRequest._isRetry = true
//             try {
//                 await authService.getNewTokens()

//                 return axiosWithAuth.request(originalRequest)
//             } catch (error) {
//                 if(errorCatch(error) === 'jwt expired') removeFromStorage()
//             }
//          }
        
//         throw error
//     }
// )