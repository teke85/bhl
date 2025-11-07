"use client"

import { TrendingUp, Truck, Zap, Coins } from "lucide-react"

const impactAreas = [
    {
        icon: TrendingUp,
        title: "Critical Link",
        description: "Connects mineral-rich regions to key ports",
    },
    {
        icon: Truck,
        title: "West Coast Access",
        description: "Direct route to Walvis Bay, Namibia",
    },
    {
        icon: Zap,
        title: "Efficiency",
        description: "Faster alternative to congested routes",
    },
    {
        icon: Coins,
        title: "Trade Drivers",
        description: "Copper, cobalt, agriculture, and tourism",
    },
]

export default function ImpactAreas() {
    return (
        <section className="w-full py-16 md:py-24 bg-background dark:bg-[#0a0a0a] border-b border-border dark:border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impactAreas.map((area, index) => {
                        const Icon = area.icon
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-6 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-colors"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#fdb913]/20 dark:bg-[#fdb913]/10 flex items-center justify-center mb-4">
                                    <Icon className="w-8 h-8 text-[#fdb913]" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-black dark:text-white mb-2">{area.title}</h3>
                                <p className="text-[#868584] dark:text-white font-paragraph">{area.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}