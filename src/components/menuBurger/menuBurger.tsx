"use client"

import { useAuth } from "@/stores/useAuth";
import { useBurger } from "@/stores/useBurger";
import { useModal } from "@/stores/useModal";
import Link from "next/link";

export default function MenuBurger() {

    const setIsOpenBurger = useBurger(state => state.setIsOpen)
    const isOpen = useBurger(state => state.isOpen)

    const isAuth = useAuth((state) => state.isAuth)
    const setIsAuth = useAuth((state) => state.setIsAuth)
    const setIsOpen = useModal((state) => state.setIsOpen)


    return (
        <div className={`fixed w-full ${isOpen ? 'bg-opacity-[0.5] z-[9999]' : 'bg-opacity-[0] z-[-1]'} h-full bg-black transition-all duration-300`} onClick={() => setIsOpenBurger()}>
            <div className={`bg-black h-full w-[300px] ${isOpen ? 'translate-x-[0]' : 'translate-x-[-100%]'} transition-all duration-300`} onClick={(e) => e.stopPropagation()}>
                <nav className="gap-[30px] p-[30px] flex flex-col">
                    <Link href={'/profile'} className="text-[17px] font-medium">Профиль</Link>
                    <Link href={'/'} className="text-[17px] font-medium">Unique Activities</Link>
                    <Link href={'/'} className="text-[17px] font-medium">More</Link>
                    {
                        isAuth ? <p className="text-[17px] font-medium cursor-pointer">Выйти</p> : <p className="text-[17px] font-medium cursor-pointer" onClick={() => setIsOpen()}>Войти</p>
                    }                    
                </nav>
            </div>
        </div>
    )
}