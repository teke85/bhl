const ProjectKeyStats = () => {
    const stats = [
        { value: "371", label: "Kilometres" },
        { value: "2", label: "Main Sections" },
        { value: "3", label: "Toll Plazas" },
        { value: "20", label: "KM Urban Roads" },
    ]

    return (
        <section className="bg-background dark:bg-[#0a0a0a] py-16 px-4 border-t border-border dark:border-white/10">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center space-y-2">
                            <div className="text-5xl md:text-6xl font-bold text-[#fdb913]">{stat.value}</div>
                            <div className="text-base md:text-lg text-foreground dark:text-white font-paragraph">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectKeyStats
