"use client"

export default function FrameworkApplies() {
    const scenarios = [
        {
            title: "Impact Scenarios",
            items: [
                "Projects causing permanent or temporary social and economic impacts",
                "Projects implemented through the acquisition of land or other fixed assets",
            ],
        },
        {
            title: "Resource Changes",
            items: [
                "When land usage is changed or restricted due to project operations",
                "When community members' property or resource rights are adversely impacted",
            ],
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-12 text-balance">
                    When the Framework Applies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {scenarios.map((scenario, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10"
                        >
                            <h3 className="text-2xl font-heading font-bold text-foreground dark:text-white mb-6">{scenario.title}</h3>
                            <ul className="space-y-4">
                                {scenario.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex gap-4">
                                        <span className="text-[#fdb913] font-bold text-lg flex-shrink-0">•</span>
                                        <span className="text-muted-foreground dark:text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}