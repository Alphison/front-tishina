"use client"

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import './calendar.css'
import 'react-calendar/dist/Calendar.css';

const bookedDates = [
    new Date(2024, 4, 1),
    new Date(2024, 4, 29),
    new Date(2024, 4, 10),
    new Date(2024, 4, 24),
];

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarComponent() {
    const [date, setDate] = useState<Value>(new Date());

    useEffect(() => {
        console.log(date);
        
    }, [date])
    

    const tileClassName = ({ date, view }: {date: Date, view: string}) => {
        if (view === 'month') {
            if (bookedDates.find(d => d.getTime() === date.getTime())) {
                
                return 'booked';
            }
        }
        
    };

    return (
        <>
            <Calendar
                onChange={setDate}
                value={date}
                tileClassName={tileClassName}
            />
        </>
    );
}