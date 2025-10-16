"use client"

export default function CompensationFramework() {
    const compensationTypes = [
        {
            title: "Land Compensation",
            description: "Full replacement value for acquired land at current market rates",
        },
        {
            title: "Structure Compensation",
            description: "Replacement cost for buildings and permanent structures",
        },
        {
            title: "Crop & Tree Compensation",
            description: "Fair value for standing crops and productive trees",
        },
        {
            title: "Business Loss Compensation",
            description: "Support for income loss during transition period",
        },
        {
            title: "Relocation Assistance",
            description: "Costs for moving and resettlement to new locations",
        },
        {
            title: "Transitional Support",
            description: "Temporary assistance during livelihood restoration period",
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-card dark:bg-[#1a1a1a]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-12 text-balance">
                    Compensation Framework
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {compensationTypes.map((type, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg bg-background dark:bg-[#0a0a0a] border border-border dark:border-white/10 hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-colors"
                        >
                            <h3 className="text-lg font-heading font-bold text-foreground dark:text-white mb-3">{type.title}</h3>
                            <p className="text-sm text-muted-foreground dark:text-gray-400">{type.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}