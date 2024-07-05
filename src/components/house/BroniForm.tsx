import { useCalendar } from "@/stores/useCalendar";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export default function BroniForm () {
    const setStatus = useCalendar((state) => state.setStatus)
    const in_date = useCalendar((state) => state.in_date)
    const out_date = useCalendar((state) => state.out_date)

    const setStatusHandle = (number: number) => {
        setStatus(number)
    } 

    return (
        <div className="mt-[47px] flex flex-col gap-[20px]">
            <h1>Выберите даты бронирования:</h1>
            <div className="flex flex-wrap gap-[11px]">
                <div className="bg-white py-[17px] px-[25px] flex gap-[19px] items-center rounded-[100px]">
                    <Image src={'/images/calendar-days.svg'} alt="" width={21} height={24}/>
                    <p onClick={() => setStatusHandle(1)} className="text-black text-[12px] font-normal font-mono cursor-pointer transition-all duration-300 hover:border-b hover:border-black active:scale-[0.8]">{in_date ? moment(in_date).format('DD.MM.YY') : 'Заезд'}</p>
                    <Image src={'/images/arrow.svg'} alt="" width={24} height={24}/>
                    <p onClick={() => setStatusHandle(2)} className="text-black text-[12px] font-normal font-mono cursor-pointer transition-all duration-300 hover:border-b hover:border-black active:scale-[0.8]">{out_date ? moment(out_date).format('DD.MM.YY') : 'Выезд'}</p>
                </div>
                <div className="bg-white py-[17px] px-[25px] flex gap-[19px] items-center rounded-[100px]">
                    <Image src={'/images/user.svg'} alt="" width={24} height={24}/>
                    <input type="text" className="text-black text-[12px] font-normal font-mono outline-none" placeholder="Ваше имя"/>
                </div>
                <Link href={'/404'}>
                    <button className="bg-[#4E6F54] py-[17px] px-[54px] text-[15px] font-mono font-bold rounded-[100px] relative flex items-center justify-center overflow-hidden text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#75B581] before:duration-500 before:ease-out hover:shadow-[#75B581] hover:before:h-56 hover:before:w-full">
                        <span className="relative z-10">Забронировать</span>
                    </button>
                </Link>

            </div>
            <p className="text-[11px] font-normal font-mono">Дом считается забронированным только после успешной оплаты *</p>
        </div>
    )
}