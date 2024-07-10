import Image from "next/image";
import Link from "next/link";
import BtnAuth from "./btnAuth";

export default function Header(){
    return (
        <header className="flex items-center justify-between mx-auto pt-[50px] 1024:pt-[100px] px-[20px] w-full max-w-[1288px]">
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
        </header>
    )
} 