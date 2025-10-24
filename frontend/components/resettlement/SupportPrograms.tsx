"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function SupportPrograms() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const programs = [
        {
            title: "Livelihood Restoration",
            description: "Programs to help affected persons restore or improve their livelihoods",
        },
        {
            title: "Skills Training",
            description: "Vocational training and capacity building for new opportunities",
        },
        {
            title: "Microfinance Support",
            description: "Access to credit and financial services for business development",
        },
        {
            title: "Healthcare & Education",
            description: "Continued access to essential services in new locations",
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                            alt="Support programs"
                            className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/20" : "bg-white/10"}`}></div>
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-8 text-balance">
                            Support & Livelihood Programs
                        </h2>
                        <div className="space-y-6">
                            {programs.map((program, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#fdb913] flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-black font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-heading font-bold text-foreground dark:text-white mb-2">
                                            {program.title}
                                        </h3>
                                        <p className="text-muted-foreground dark:text-gray-300">{program.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
