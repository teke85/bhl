"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function PortOfWalvisBay() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section className="w-full py-16 md:py-24 bg-card dark:bg-[#1a1a1a] border-y border-border dark:border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1578575437980-63e9f3c3ee8f?w=600&h=500&fit=crop"
                            alt="Port of Walvis Bay"
                            className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/30" : "bg-white/20"}`}></div>
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-6 text-balance">
                            Port of Walvis Bay
                        </h2>
                        <p className="text-lg text-muted-foreground dark:text-gray-400 mb-4 leading-relaxed">
                            Recognized as one of the most efficient, secure, and high-performing ports within the SADC region.
                        </p>
                        <p className="text-muted-foreground dark:text-gray-400 leading-relaxed">
                            The Barotse Highway provides direct access to this world-class facility, significantly reducing transport
                            times and costs for regional exports. This strategic connection positions the corridor as a critical
                            gateway for SADC trade.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
