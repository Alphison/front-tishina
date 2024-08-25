"use client"

import React, { ChangeEvent, useState } from "react"

type Props = {
    handleOnChange: (value:number) => void
    value: number
}

export default function Checkbox ({handleOnChange, value}:Props) {
    const [checked, setChecked] = useState<boolean>(false)

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {   
        setChecked(e.target.checked)     
        handleOnChange(Number(e.target.checked ? e.target.value : 0))
    }    

    return (
        <div>
            <label htmlFor="check" className={`w-[25px] h-[25px] transition-all duration-300 block border cursor-pointer rounded-[5px] ${checked && 'bg-[#75B581]'}`}>
            </label>
            <input id="check" type="checkbox" value={value} onChange={onChange} hidden/>
        </div>
        
    )
}