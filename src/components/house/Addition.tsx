import React from 'react';
import Checkbox from '@/components/Checkbox/Checkbox'

type Props = {
    name: string;
    price: number;
}

export default function Addition ({name, price}:Props) {

    const handleOnChange = (value:number) => {
        console.log(value);        
    }
    
    return (
        <div className="flex items-center gap-[16px]">
            <Checkbox handleOnChange={handleOnChange} value={price}/>
            <p className="font-mono text-[15px] font-normal">{name}</p>
        </div>
    )
}