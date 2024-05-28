"use client"

import { useModal } from "@/stores/useModal"

export default function BtnAuth(){
    const setIsOpen = useModal((state) => state.setIsOpen)
    
    return (
        <div className="border-l-[0.5px] border-[#333333] pl-[118px] py-[17px] transition-all duration-300 hover:border-blue-50">
            <p className="cursor-pointer border-b border-b-[black] hover:border-b hover:border-blue-50 transition-all duration-300" onClick={() => setIsOpen()}>Войти</p>
        </div>
    )
}