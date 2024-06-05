"use client"

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import './calendar.css'
import 'react-calendar/dist/Calendar.css';
import { IHouseUsers } from "@/types/houseUsers";
import Loader from "@/components/Loader";
import { useCalendar } from "@/stores/useCalendar";

export default function CalendarComponent({houseUsers}: {houseUsers: IHouseUsers[]}) {
    const [bookedDates, setBookedDates] =useState<Date[] | null>(null)
    const status = useCalendar((state) => state.status)
    const input_date = useCalendar((state) => state.input_date)
    const setStatus = useCalendar((state) => state.setStatus)
    const setDates = useCalendar((state) => state.setDates)

    const setDateHandle = (e:any) => {
        setStatus(input_date)
        setDates(e)
    }
    
    useEffect(() => {

        let allDates:Date[] = []

        houseUsers.forEach(item => {

            let startDate = new Date(item.check_in_date)
            let endDate = new Date(item.check_out_date)

            while(startDate <= endDate) {

                allDates.push(new Date(startDate.setHours(0, 0, 0, 0)))
                startDate.setDate(startDate.getDate() + 1)

            }

        })

        setBookedDates(allDates)
        

    }, [])    

    if(!bookedDates){

        return <div className="mx-auto"><Loader w={50}/></div>

    }

    const tileClassName = ({ date, view }: {date: Date, view: string}) => {
        if (view === 'month') {      

            if (bookedDates.find(d => d.getTime() === date.getTime())) {
                
                return 'booked';
            }
        }
        
    };    

    return (
        <div onClick={() => setStatus()} className={`fixed w-full h-full flex justify-center items-center bg-black z-[1000] top-0 px-[100px] transition-all duration-300 ${!status ? 'translate-y-[-100%]' : 'translate-y-0'}`}>
            <div onClick={(e) => e.stopPropagation()}>
                <Calendar
                    onChange={(e) => setDateHandle(e)}
                    tileClassName={tileClassName}
                    minDate={new Date()}
                />
            </div>
        </div>
    );
}