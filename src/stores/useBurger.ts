import { create } from "zustand";

type TBurger = {
    isOpen: boolean
    setIsOpen: () => void
}

export const useBurger = create<TBurger>((set) => ({
    isOpen: false,
    setIsOpen: () => set((state) => ({isOpen: !state.isOpen}))
}))