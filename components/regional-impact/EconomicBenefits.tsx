"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const benefits = [
    {
        title: "GDP Growth",
        description: "Projected 15-20% increase in regional trade volume",
        metric: "15-20%",
    },
    {
        title: "Employment",
        description: "5,000+ direct and indirect jobs created",
        metric: "5,000+",
    },
    {
        title: "Cost Reduction",
        description: "30% reduction in transport costs for regional trade",
        metric: "30%",
    },
    {
        title: "Time Savings",
        description: "40% faster delivery times to Walvis Bay",
        metric: "40%",
    },
]

export default function EconomicBenefits() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section className="w-full py-16 md:py-24 bg-card dark:bg-[#1a1a1a] border-y border-border dark:border-white/10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-12 text-balance">
                    Economic Benefits
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="relative p-8 rounded-lg bg-background dark:bg-[#0a0a0a] border border-border dark:border-white/10 overflow-hidden group hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-colors"
                        >
                            {/* Background accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#fdb913]/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300"></div>

                            <div className="relative z-10">
                                <div className="text-5xl font-heading font-bold text-[#fdb913] mb-3">{benefit.metric}</div>
                                <h3 className="text-xl font-heading font-bold text-foreground dark:text-white mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground dark:text-gray-400">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}