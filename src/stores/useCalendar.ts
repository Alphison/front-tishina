import { create } from "zustand";

type State = {
    status: boolean,
    in_date: Date | null,
    out_date: Date | null,
    input_date: number
}
  
type Action = {
    setStatus: (number?: number) => void,
    setDates: (date: Date | null) => void
}

export const useCalendar = create<State & Action>((set) => ({
    status: false,
    in_date: null,
    out_date: null,
    input_date: 0,
    setStatus: (number) => {
        set((state) => ({
            status: !state.status,
            input_date: number,
        }))
    },
    setDates: (date) => {        
        set((state) => ({        
            out_date: state.out_date !== null ? date : state.input_date === 2 ? date : null,
            in_date: state.in_date !== null ? date : state.input_date === 1 ? date : null,
        }))
    }
}))