"use client"

import { getAccessToken } from "@/services/auth-token.service"
import { authService } from "@/services/auth.service"
import { useAuth } from "@/stores/useAuth"
import { useUser } from "@/stores/useUser"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { usePathname, useRouter } from "next/navigation"
import { PropsWithChildren, useState } from "react"

export default function Provider({children}: PropsWithChildren) {
    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false
                }
            }
        })
    )    

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>      
    )
}