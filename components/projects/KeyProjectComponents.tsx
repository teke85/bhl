import { CheckCircle } from "lucide-react"

const KeyProjectComponents = () => {
    const components = [
        "Construction of three toll plazas and two weighbridges",
        "Upgrading/replacement of key bridges, including Lalafuta and Luena bridges",
        "Construction of social infrastructure along the route",
        "Development of 20 kilometres of urban roads in two districts",
    ]

    return (
        <section className="bg-background dark:bg-[#0a0a0a] py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-12">Key Project Components</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {components.map((component, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 rounded-lg p-6 hover:border-[#fdb913]/50 transition-all duration-300"
                        >
                            <CheckCircle className="w-6 h-6 text-[#fdb913] flex-shrink-0 mt-1" />
                            <p className="text-base md:text-lg text-foreground dark:text-white font-paragraph">{component}</p>                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default KeyProjectComponents