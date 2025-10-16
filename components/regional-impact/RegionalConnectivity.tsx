"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function RegionalConnectivity() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section className="w-full py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-6 text-balance">
                            Regional Connectivity Hub
                        </h2>
                        <p className="text-lg text-muted-foreground dark:text-gray-400 mb-6 leading-relaxed">
                            The Barotse Corridor Connector serves as a vital link in the SADC regional transport network, connecting
                            key economic zones and facilitating seamless trade flows.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Connects 4 SADC countries",
                                "Links 8 major economic zones",
                                "Reduces regional trade barriers",
                                "Enables cross-border commerce",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#fdb913]"></div>
                                    <span className="text-foreground dark:text-white">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-96 rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                            alt="Regional connectivity map"
                            className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/30" : "bg-white/20"}`}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
