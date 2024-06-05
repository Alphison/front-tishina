"use client"

import { removeFromStorage } from "@/services/auth-token.service"
import { authService } from "@/services/auth.service"
import { useAuth } from "@/stores/useAuth"
import { useBurger } from "@/stores/useBurger"
import { useModal } from "@/stores/useModal"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function BtnAuth(){
    const setIsOpen = useModal((state) => state.setIsOpen)
    const isAuth = useAuth((state) => state.isAuth)
    const setIsAuth = useAuth((state) => state.setIsAuth)
    const setIsOpenBurger = useBurger(state => state.setIsOpen)
    const router = useRouter()

    const {error, mutate} = useMutation<any, any>({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess: () => {
            setIsAuth(false)
            removeFromStorage()
            router.push('/')
        }}
    )

    const logout = () => {
        mutate()

        if(error){
            toast.error(error.response.data.error, {style: {
                background: '#CD5C5C',
                border: '1px solid #CD5C5C',
                color: 'white'
              }},)
            return false
        }
    }
    
    return (
        <div>
            <div className="flex flex-col gap-[7px] 800:hidden w-[30px] items-center cursor-pointer" onClick={() => setIsOpenBurger()}>
                <div className="w-full h-[1px] rounded-[100px] bg-white"></div>
                <div className="w-full h-[1px] rounded-[100px] bg-white"></div>
                <div className="w-full h-[1px] rounded-[100px] bg-white"></div>
            </div>
            <div className="hidden 800:block border-l-[0.5px] border-[#333333] pl-[118px] py-[17px] transition-all duration-300 hover:border-blue-50">
                {
                    isAuth ?
                        <p className="cursor-pointer border-b border-b-[black] hover:border-b hover:border-blue-50 transition-all duration-300" onClick={() => logout()}>Выйти</p>
                    :
                    <p className="cursor-pointer border-b border-b-[black] hover:border-b hover:border-blue-50 transition-all duration-300" onClick={() => setIsOpen()}>Войти</p>
                }
            </div>
        </div>
    )
}