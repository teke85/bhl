"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function CommunityEngagement() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const stages = [
        {
            title: "Stakeholder Identification",
            description: "Comprehensive mapping of all affected communities and stakeholders",
        },
        {
            title: "Information Disclosure",
            description: "Transparent sharing of project details and resettlement plans",
        },
        {
            title: "Consultation & Participation",
            description: "Active engagement in decision-making processes",
        },
        {
            title: "Grievance Redressal",
            description: "Fair mechanisms to address concerns and complaints",
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-12 text-balance">
                    Community Engagement Strategy
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {stages.map((stage, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10"
                        >
                            <h3 className="text-xl font-heading font-bold text-foreground dark:text-white mb-3">{stage.title}</h3>
                            <p className="text-muted-foreground dark:text-gray-300">{stage.description}</p>
                        </div>
                    ))}
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop"
                        alt="Community engagement"
                        className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/30" : "bg-white/20"}`}></div>
                </div>
            </div>
        </section>
    )
}