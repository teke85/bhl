"use client"

import { Shield, Users, FileText, MapPin } from "lucide-react"

export default function ResettlementPillars() {
    const pillars = [
        {
            icon: Shield,
            title: "Protection",
            description: "Rights-based approach",
            details: "Ensuring vulnerable populations are protected throughout the resettlement process",
        },
        {
            icon: Users,
            title: "Consultation",
            description: "Community engagement",
            details: "Meaningful dialogue with affected communities at every stage",
        },
        {
            icon: FileText,
            title: "Documentation",
            description: "Transparent process",
            details: "Clear documentation of all resettlement decisions and agreements",
        },
        {
            icon: MapPin,
            title: "Local Focus",
            description: "District-specific plans",
            details: "Tailored resettlement strategies for each affected region",
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-6 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-colors"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#fdb913]/20 dark:bg-[#fdb913]/10 flex items-center justify-center mb-4">
                                    <Icon className="w-8 h-8 text-[#fdb913]" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-foreground dark:text-white mb-2">{pillar.title}</h3>
                                <p className="text-sm text-muted-foreground dark:text-gray-400 mb-3">{pillar.description}</p>
                                <p className="text-sm text-muted-foreground dark:text-gray-400">{pillar.details}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}