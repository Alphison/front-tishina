"use client"

import Image from "next/image";
import Link from "next/link";
import BtnAuth from "./btnAuth";
import { useEffect, useState } from "react";

export default function Header(){

    const [scroll, setScroll] = useState(0)    

    useEffect(() => {

        const handleSetScroll = (scroll:number) => {
            setScroll(scroll)
        } 

        window.addEventListener('scroll', () => {
            handleSetScroll(pageYOffset)
        })

        return () => {
            window.removeEventListener('scroll', () => {})
        }

    }, []) 

    return (
        <header className={`fixed z-[200] w-full top-[65px] transition-all duration-300 ${scroll > 0 ? 'translate-y-[-300px]' : 'translate-y-0'}`}>
            <div className="flex items-center justify-between mx-auto px-[20px] max-w-[1288px]">
                <div className="flex items-end gap-[52px]">
                    <Link href={'/'}>
                        <Image src={'/images/Logo.svg'} width={155} height={30} alt=""/>
                    </Link>
                    <nav className="gap-[30px] items-center hidden 800:flex">
                        <Link href={'/profile'} className="text-[17px] font-medium">Профиль</Link>
                        <Link href={'/'} className="text-[17px] font-medium">Уникальные мероприятия</Link>
                        <Link href={'/'} className="text-[17px] font-medium">Больше</Link>
                    </nav>
                </div>
                <BtnAuth />
            </div>            
        </header>
    )
} 