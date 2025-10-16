"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function RPFPurpose() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section className="py-16 md:py-24 bg-card dark:bg-[#1a1a1a]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-6 text-balance">
                            Purpose of the RPF
                        </h2>
                        <p className="text-lg text-muted-foreground dark:text-gray-300 mb-6">
                            The Resettlement Policy Framework (RPF) outlines the process for implementing the BEL-TC Resettlement
                            Policy and guides the preparation of Resettlement Action Plans (RAPs) where land acquisition or
                            displacement occurs.
                        </p>
                        <p className="text-base text-muted-foreground dark:text-gray-400">
                            This framework ensures that all affected persons are treated fairly, with their rights protected and their
                            livelihoods restored or improved compared to pre-project conditions.
                        </p>
                    </div>
                    <div className="relative h-96 rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                            alt="Community consultation"
                            className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/20" : "bg-white/10"}`}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
