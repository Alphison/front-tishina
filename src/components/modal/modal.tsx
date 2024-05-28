"use client"

import {useModal} from '@/stores/useModal'

export default function Modal(){
    const isOpen = useModal((state) => state.isOpen)
    const setIsOpen = useModal((state) => state.setIsOpen) 

    return (
        <div className={`fixed top-0 left-0 bg-[#00000042] w-full h-full flex items-center justify-center transition-all duration-300
         ${isOpen ? 'opacity-[1] z-[999999]' : 'opacity-0 z-[-1]'}`}
         onClick={() => setIsOpen()}
        >
            <div className={`bg-[#303030] rounded-[16px] transition-all duration-300 p-[55px] ${isOpen ? 'translate-y-[100%]' : 'translate-y-[0]'}`}>
                
            </div>
        </div>
    )
}