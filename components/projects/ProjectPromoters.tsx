import { Building2, Users, TrendingUp, MapPin } from "lucide-react"

const ProjectPromoters = () => {
    const promoters = [
        {
            icon: Building2,
            name: "Buks Haulage Limited (BHL)",
            location: "Solwezi, Northwestern Province, Zambia",
            description: "BHL Zambia Limited is a professional logistics service provider specializing in the transport of various commodities with value-added services and facilities. The company boasts an experienced, well-trained, and professional management team, establishing itself as one of Zambia's most successful logistics businesses over the years.",
            highlights: [
                "Tripled fleet from 100+ vehicles in 2012 to over 1000 vehicles in 2025",
                "Strategic reliance on 200+ additional sub-contractor vehicles monthly",
                "Diversified into thriving farming operation",
                "Operational fleet exceeding 1000+ trucks with various configurations",
                "10 front-end loaders and 2 TLBs in operation"
            ],
            expertise: "Mining to general cargo logistics with specialist expertise in goods movement"
        },
        {
            icon: Users,
            name: "First Quantum Minerals",
            location: "Northwestern Province, Zambia",
            description: "FQML is a prominent entity in Zambia's mining sector, actively engaged in the production of copper, cobalt, and gold through significant projects concentrated in the Northwestern Province, aligning with the Project region.",
            highlights: [
                "Sentinel Mine: 1.03 billion tons of copper ore, 300,000 tons annual production",
                "Kansanshi Mine: Africa's largest copper producer, 727 million tons reserves",
                "Enterprise Mine: Projected to become Africa's largest nickel mine",
                "13,000+ employees, primarily Zambians",
                "USD 1.25 billion Kansanshi Mine expansion approved in 2022"
            ],
            expertise: "Mining operations with significant equity injection and traffic guarantee"
        }
    ]

    return (
        <section className="bg-background dark:bg-[#0a0a0a] py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-4">
                        Project Promoters
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground dark:text-[#9ca3af] font-paragraph max-w-3xl mx-auto">
                        Leading organizations driving the success of this transformative infrastructure project
                    </p>
                </div>

                <div className="space-y-12">
                    {promoters.map((promoter, index) => {
                        const Icon = promoter.icon
                        return (
                            <div
                                key={index}
                                className="bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 rounded-lg p-8 hover:border-[#fdb913]/50 transition-all duration-300 group"
                            >
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Left Column - Icon and Basic Info */}
                                    <div className="lg:w-1/3">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-full bg-[#fdb913]/10 flex items-center justify-center group-hover:bg-[#fdb913]/20 transition-colors duration-300 flex-shrink-0">
                                                <Icon className="w-8 h-8 text-[#fdb913]" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-heading font-bold text-foreground dark:text-white mb-2">
                                                    {promoter.name}
                                                </h3>
                                                <div className="flex items-center gap-2 text-muted-foreground dark:text-[#9ca3af] text-sm">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{promoter.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column - Description and Details */}
                                    <div className="lg:w-2/3 space-y-6">
                                        <p className="text-base md:text-lg text-muted-foreground dark:text-[#9ca3af] font-paragraph leading-relaxed">
                                            {promoter.description}
                                        </p>

                                        {/* Key Highlights */}
                                        <div>
                                            <h4 className="text-lg font-heading font-semibold text-foreground dark:text-white mb-4 flex items-center gap-2">
                                                <TrendingUp className="w-5 h-5 text-[#fdb913]" />
                                                Key Highlights
                                            </h4>
                                            <ul className="space-y-2">
                                                {promoter.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground dark:text-[#9ca3af] font-paragraph">
                                                        <div className="w-2 h-2 rounded-full bg-[#fdb913] mt-2 flex-shrink-0"></div>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Expertise */}
                                        <div className="bg-[#fdb913]/5 border border-[#fdb913]/20 rounded-lg p-4">
                                            <p className="text-sm md:text-base text-foreground dark:text-white font-paragraph">
                                                <span className="font-semibold text-[#fdb913]">Expertise:</span> {promoter.expertise}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProjectPromoters