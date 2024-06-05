import { create } from "zustand";

interface TAuth {
    isAuth: boolean;
    setIsAuth: (value: boolean) => void;
}

export const useAuth = create<TAuth>((set) => ({
    isAuth: false,
    setIsAuth: (value) => set((state) => ({isAuth: value}))
}))