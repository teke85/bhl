"use client"

import Image from "next/image"

const RoadSections = () => {
    // const sections = [
    //     {
    //         title: "Section 01",
    //         distance: "150",
    //         route: "Mutanda to Kasempa",
    //         image: "/highway-road-section-through-zambian-landscape.jpg",
    //         features: ["2 Major Bridges", "15 Culverts", "1 Toll Plaza"],
    //     },
    //     {
    //         title: "Section 02",
    //         distance: "221",
    //         route: "Kasempa to Kaoma",
    //         image: "/modern-highway-with-lane-markings-in-africa.jpg",
    //         features: ["3 Major Bridges", "25 Culverts", "2 Toll Plazas"],
    //     },
    // ]
    const sections = [
        {
            title: "Section 01",
            distance: "150",
            route: "Mutanda to Kasempa",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            features: ["2 Major Bridges", "15 Culverts", "1 Toll Plaza"],
        },
        {
            title: "Section 02",
            distance: "221",
            route: "Kasempa to Kaoma",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            features: ["3 Major Bridges", "25 Culverts", "2 Toll Plazas"],
        },
    ]

    return (
        <section className="bg-background dark:bg-[#0a0a0a] py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-4">
                        Road Sections
                    </h2>
                    <p className="text-lg text-muted-foreground dark:text-[#9ca3af] font-paragraph">
                        Two major sections connecting vital economic corridors
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 rounded-lg overflow-hidden hover:border-[#fdb913]/50 transition-all duration-300 group"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={section.image || "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"}
                                    alt={section.route}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-12 space-y-4">
                                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground dark:text-white">
                                    {section.title}
                                </h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl md:text-6xl font-bold text-[#fdb913]">{section.distance}</span>
                                    <span className="text-xl text-foreground dark:text-white font-paragraph">kilometres</span>
                                </div>
                                <p className="text-lg md:text-xl text-foreground dark:text-white font-paragraph">{section.route}</p>

                                {/* Features */}
                                <div className="pt-4 space-y-2">
                                    {section.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#fdb913]" />
                                            <span className="text-muted-foreground dark:text-[#9ca3af] font-paragraph">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RoadSections