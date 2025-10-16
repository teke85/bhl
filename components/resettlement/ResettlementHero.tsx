"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ResettlementHero() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section className="relative w-full py-20 md:py-32 overflow-hidden bg-background dark:bg-[#0a0a0a]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
                    alt="Community engagement"
                    className="w-full h-full object-cover opacity-20 dark:opacity-10"
                />
                <div className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/70" : "bg-white/60"}`}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground dark:text-white mb-6 text-balance">
                        Resettlement Policy
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 text-balance">
                        A comprehensive framework ensuring fair and transparent resettlement processes for affected communities.
                    </p>
                </div>
            </div>
        </section>
    )
}