"use client"

import { CheckCircle2, Circle } from "lucide-react"

const ProjectTimeline = () => {
    const phases = [
        {
            phase: "Phase 1",
            title: "Planning & Design",
            period: "2023 - 2024",
            status: "completed",
            description: "Environmental impact assessment, detailed engineering design, and stakeholder consultations",
        },
        {
            phase: "Phase 2",
            title: "Site Preparation",
            period: "2024 - 2025",
            status: "in-progress",
            description: "Land clearing, temporary facilities setup, and mobilization of equipment and personnel",
        },
        {
            phase: "Phase 3",
            title: "Construction - Section 01",
            period: "2025 - 2026",
            status: "upcoming",
            description: "150km Mutanda to Kasempa road construction with full infrastructure development",
        },
        {
            phase: "Phase 4",
            title: "Construction - Section 02",
            period: "2026 - 2027",
            status: "upcoming",
            description: "221km Kasempa to Kaoma road construction including toll plaza installations",
        },
        {
            phase: "Phase 5",
            title: "Testing & Commissioning",
            period: "2027 - 2028",
            status: "upcoming",
            description: "Quality assurance testing, safety audits, and official commissioning ceremonies",
        },
    ]

    return (
        <section className="bg-background dark:bg-[#0a0a0a] py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-4">
                        Project Timeline
                    </h2>
                    <p className="text-lg text-muted-foreground dark:text-[#9ca3af] font-paragraph max-w-2xl mx-auto">
                        A comprehensive roadmap of our construction phases from inception to completion
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border dark:bg-white/10" />

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {phases.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background dark:bg-[#0a0a0a] border-4 border-border dark:border-white/10 flex items-center justify-center z-10">
                                    {item.status === "completed" ? (
                                        <CheckCircle2 className="w-8 h-8 text-[#fdb913]" />
                                    ) : item.status === "in-progress" ? (
                                        <div className="w-8 h-8 rounded-full bg-[#fdb913] animate-pulse" />
                                    ) : (
                                        <Circle className="w-8 h-8 text-muted-foreground dark:text-white/30" />
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 ml-24 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                                    <div
                                        className={`bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 rounded-lg p-6 md:p-8 hover:border-[#fdb913]/50 transition-all duration-300 ${item.status === "in-progress" ? "ring-2 ring-[#fdb913]/30" : ""
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-3 py-1 bg-[#fdb913]/10 text-[#fdb913] text-sm font-semibold rounded-full">
                                                {item.phase}
                                            </span>
                                            <span className="text-sm text-muted-foreground dark:text-[#9ca3af] font-paragraph">
                                                {item.period}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-heading font-bold text-foreground dark:text-white mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground dark:text-[#9ca3af] font-paragraph leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectTimeline