"use client"

import { useBurger } from "@/stores/useBurger";
import Link from "next/link";

export default function MenuBurger() {

    const setIsOpenBurger = useBurger(state => state.setIsOpen)
    const isOpen = useBurger(state => state.isOpen)

    return (
        <div className={`fixed w-full ${isOpen ? 'block' : 'hidden'} h-screen bg-black bg-opacity-[0.5] z-[9999]`} onClick={() => setIsOpenBurger()}>
            <div className="bg-black h-full w-[300px]" onClick={(e) => e.stopPropagation()}>
                <nav className="gap-[30px] p-[30px] flex flex-col">
                    <Link href={'/profile'} className="text-[17px] font-medium">Профиль</Link>
                    <Link href={'/'} className="text-[17px] font-medium">Unique Activities</Link>
                    <Link href={'/'} className="text-[17px] font-medium">More</Link>
                </nav>
            </div>
        </div>
    )
}