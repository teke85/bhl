const RoadDesign = () => {
    const specifications = [
        { value: "3.5m", label: "Wide travel lanes" },
        { value: "2m", label: "Surfaced shoulders" },
        { value: "0.3m", label: "Gravel shoulders" },
    ]

    return (
        <section className="bg-background dark:bg-[#0a0a0a] py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-12">Road Design</h2>
                <div className="bg-card dark:bg-[#1a1a1a] rounded-lg p-8 md:p-12 space-y-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {specifications.map((spec, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-4xl md:text-5xl font-bold text-[#fdb913]">{spec.value}</div>
                                <div className="text-base md:text-lg text-foreground dark:text-white font-paragraph">{spec.label}</div>
                            </div>
                        ))}
                    </div>
                    <div className="pt-6 border-t border-white/10">
                        <p className="text-lg md:text-xl text-foreground dark:text-white font-paragraph">Bidirectional single carriageway</p>                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoadDesign