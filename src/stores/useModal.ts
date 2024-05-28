import { create } from "zustand";

type TModal = {
    isOpen: boolean
    setIsOpen: () => void
}

export const useModal = create<TModal>((set) => ({
    isOpen: false,
    setIsOpen: () => set((state) => ({isOpen: !state.isOpen}))
}))