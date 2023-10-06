"use client"
import React from "react"
import { UIProvider } from "@/components/ui/core"

interface ClientProvidersProps {
    children?: React.ReactNode
}

export const ClientProviders: React.FC<ClientProvidersProps> = (props) => {

    const { children, ...rest } = props

    return (
        <>
            <UIProvider>
                {children}
            </UIProvider>
        </>
    )

}
