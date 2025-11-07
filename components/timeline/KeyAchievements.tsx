"use client"

import { CheckCircle2, Users, DollarSign, Zap } from "lucide-react"

const achievements = [
    {
        icon: CheckCircle2,
        stat: "8",
        label: "Major Milestones",
        description: "Achieved from 2018 to present",
    },
    {
        icon: Users,
        stat: "2",
        label: "Key Promoters",
        description: "BeefCo Holdings & First Quantum Minerals",
    },
    {
        icon: DollarSign,
        stat: "$8M+",
        label: "Investment",
        description: "Invested in maintenance and upgrades",
    },
    {
        icon: Zap,
        stat: "371",
        label: "Kilometres",
        description: "Road to be upgraded to bituminous",
    },
]

export default function KeyAchievements() {
    return (
        <section className="py-20 px-4 bg-card dark:bg-[#1a1a1a]">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-12 text-center">
                    Project Achievements
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {achievements.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={index}
                                className="bg-background dark:bg-[#0a0a0a] p-8 rounded-lg border border-border dark:border-white/10 text-center hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-all"
                            >
                                <div className="flex justify-center mb-4">
                                    <Icon className="w-8 h-8 text-[#fdb913]" />
                                </div>
                                <p className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-2">
                                    {item.stat}
                                </p>
                                <p className="text-lg font-heading font-bold text-[#868584] dark:text-white mb-2">{item.label}</p>
                                <p className="text-sm text-[#868584] dark:text-white font-paragraph">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}