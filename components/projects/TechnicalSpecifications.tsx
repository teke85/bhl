import { Shield, Award, Wrench, FileCheck } from "lucide-react"

const TechnicalSpecifications = () => {
    const standards = [
        {
            icon: Shield,
            title: "Safety Standards",
            description:
                "Compliance with international road safety standards including proper signage, lighting, and emergency response systems.",
        },
        {
            icon: Award,
            title: "Quality Assurance",
            description:
                "ISO 9001 certified construction processes with continuous quality monitoring and testing at every phase.",
        },
        {
            icon: Wrench,
            title: "Engineering Excellence",
            description:
                "Advanced engineering solutions for drainage, pavement design, and structural integrity to ensure 25-year lifespan.",
        },
        {
            icon: FileCheck,
            title: "Environmental Compliance",
            description:
                "Full environmental impact assessments and mitigation measures in accordance with Zambian and international standards.",
        },
    ]

    return (
        <section className="bg-background dark:bg-[#0a0a0a] py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-4">
                        Technical Specifications & Standards
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground dark:text-[#9ca3af] font-paragraph max-w-3xl mx-auto">
                        Our commitment to excellence ensures world-class infrastructure that meets the highest international
                        standards
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {standards.map((standard, index) => {
                        const Icon = standard.icon
                        return (
                            <div
                                key={index}
                                className="bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 rounded-lg p-8 space-y-4 hover:border-[#fdb913]/50 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#fdb913]/10 flex items-center justify-center group-hover:bg-[#fdb913]/20 transition-colors duration-300">
                                    <Icon className="w-7 h-7 text-[#fdb913]" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-foreground dark:text-white">{standard.title}</h3>
                                <p className="text-base md:text-lg text-muted-foreground dark:text-[#9ca3af] font-paragraph leading-relaxed">                                    {standard.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default TechnicalSpecifications