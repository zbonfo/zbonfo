import "@/styles/globals.css"
import { ClientProviders } from "@/app/ClientProviders"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
})

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html
                lang="en"
                className={cn(
                    "min-h-screen font-sans antialiased scroll-smooth",
                    inter.variable
                )}
                suppressHydrationWarning
            >
            <head/>
            <body className="overflow-x-hidden">

            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,black,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                        width={200}
                        height={200}
                        x="90%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M100 200V.5M.5 .5H200" fill="none"/>
                    </pattern>
                </defs>
                <svg x="90%" y={-1} className="overflow-visible fill-gray-900">
                    <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>
            </svg>

            <ClientProviders>
                <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme={"dark"}>
                    <div className="container max-w-screen-xl py-4 md:py-10">
                        <div className="flex-1 min-h-screen">
                            {children}

                            <div className={"mt-14 text-center text-[--muted]"}>Made by Zaki Bonfoh.</div>
                        </div>
                    </div>
                    <TailwindIndicator/>
                </ThemeProvider>
            </ClientProviders>
            </body>
            </html>
        </>
    )
}
