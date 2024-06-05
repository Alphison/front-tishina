import { IUser } from "@/types/user";
import { create } from "zustand";

interface TUser {
    user: IUser | null;
    setUser: (user: IUser) => void;
}

export const useUser = create<TUser>((set) => ({
    user: null,
    setUser: (newuser) => set((state) => ({user: newuser}))
}))