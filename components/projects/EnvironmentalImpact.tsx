"use client"

import { Leaf, Droplets, Trees, Recycle } from "lucide-react"

const EnvironmentalImpact = () => {
    const initiatives = [
        {
            icon: Leaf,
            title: "Carbon Footprint Reduction",
            stat: "30%",
            description: "Reduction in emissions through efficient machinery and renewable energy use",
        },
        {
            icon: Trees,
            title: "Reforestation Program",
            stat: "50,000+",
            description: "Trees planted along the highway corridor to restore natural habitats",
        },
        {
            icon: Droplets,
            title: "Water Conservation",
            stat: "40%",
            description: "Water savings through recycling and efficient drainage systems",
        },
        {
            icon: Recycle,
            title: "Material Recycling",
            stat: "85%",
            description: "Construction waste recycled and repurposed for sustainable practices",
        },
    ]

    return (
        <section className="bg-background dark:bg-[#0a0a0a] py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-4">
                        Environmental Commitment
                    </h2>
                    <p className="text-lg text-muted-foreground dark:text-[#9ca3af] font-paragraph max-w-3xl mx-auto leading-relaxed">
                        Building infrastructure responsibly with minimal environmental impact. Our sustainable practices ensure a
                        greener future for Zambia while delivering world-class road infrastructure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {initiatives.map((initiative, index) => (
                        <div
                            key={index}
                            className="bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 rounded-lg p-6 hover:border-[#fdb913]/50 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#fdb913]/10 flex items-center justify-center mb-6 group-hover:bg-[#fdb913]/20 transition-colors">
                                <initiative.icon className="w-8 h-8 text-[#fdb913]" />
                            </div>
                            <div className="text-4xl font-heading font-bold text-[#fdb913] mb-2">{initiative.stat}</div>
                            <h3 className="text-xl font-heading font-bold text-foreground dark:text-white mb-3">
                                {initiative.title}
                            </h3>
                            <p className="text-muted-foreground dark:text-[#9ca3af] font-paragraph leading-relaxed">
                                {initiative.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Environmental Certification Badge */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#fdb913]/10 border border-[#fdb913]/30 rounded-full">
                        <Leaf className="w-5 h-5 text-[#fdb913]" />
                        <span className="text-foreground dark:text-white font-paragraph font-semibold">
                            ISO 14001 Environmental Management Certified
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EnvironmentalImpact