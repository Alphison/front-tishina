import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return (
        <header className="flex items-center justify-between w-full mx-auto mt-[100px] px-[50px]">
            <div className="flex items-end gap-[52px]">
                <Image src={'/images/Logo.svg'} width={155} height={30} alt=""/>
                <nav className="flex gap-[30px] items-center">
                    <Link href={'/'} className="text-[17px] font-medium">Explore anywhere</Link>
                    <Link href={'/'} className="text-[17px] font-medium">Unique Activities</Link>
                    <Link href={'/'} className="text-[17px] font-medium">More</Link>
                </nav>
            </div>
            <div className="border-l-[0.5px] border-[#333333] pl-[118px] py-[17px]">
                Kazan
            </div>
        </header>
    )
} 