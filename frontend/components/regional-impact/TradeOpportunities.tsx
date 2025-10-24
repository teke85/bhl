"use client"

const tradeItems = [
    {
        category: "Minerals",
        items: ["Copper", "Cobalt", "Precious metals"],
        icon: "⛏️",
    },
    {
        category: "Agriculture",
        items: ["Grains", "Livestock", "Processed foods"],
        icon: "🌾",
    },
    {
        category: "Manufacturing",
        items: ["Industrial goods", "Textiles", "Electronics"],
        icon: "🏭",
    },
    {
        category: "Tourism",
        items: ["Regional travel", "Business tourism", "Adventure tourism"],
        icon: "✈️",
    },
]

export default function TradeOpportunities() {
    return (
        <section className="w-full py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-12 text-balance">
                    Diverse Trade Opportunities
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tradeItems.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-colors"
                        >
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-heading font-bold text-foreground dark:text-white mb-3">{item.category}</h3>
                            <ul className="space-y-2">
                                {item.items.map((subitem, subindex) => (
                                    <li key={subindex} className="text-muted-foreground dark:text-gray-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#fdb913]"></span>
                                        {subitem}
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