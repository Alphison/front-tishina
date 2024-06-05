'use client'

import Loader from "@/components/Loader"
import { authService } from "@/services/auth.service"
import { useAuth } from "@/stores/useAuth"
import { useUser } from "@/stores/useUser"
import { useQuery } from "@tanstack/react-query"
import { usePathname, useRouter } from "next/navigation"
import { PropsWithChildren, useEffect} from "react"

export default function ProviderAuth({children}: PropsWithChildren){
    const path = usePathname()
    const isAuth = useAuth(state => state.isAuth)
    const setIsAuth = useAuth(state => state.setIsAuth)
    const setUser = useUser(state => state.setUser)
    const {data} = useQuery<any, any>({queryKey: ['me'], queryFn: () => authService.me(), select: (data) => data.data})    

    useEffect(() => {
        if(data){            
            setUser(data.data)
            setIsAuth(true)
        }
    }, [data, setUser, setIsAuth])

    if(!isAuth && path.includes('/profile')){        
        return <div className="text-[30px] m-[50px]">Доступ запрещен, авторизируйтесь...</div> 
    }
    
    return (
        <div>
            {children}
        </div>
    )
}