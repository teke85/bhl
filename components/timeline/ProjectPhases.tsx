"use client"

const phases = [
  {
    phase: "Phase 1",
    title: "Feasibility & Planning",
    duration: "2018 - 2023",
    description: "Maintenance contract initiation and feasibility studies",
    items: ["Maintenance contract with RDA", "Traffic potential assessment", "Upgrade decision"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    phase: "Phase 2",
    title: "Proposal & Approval",
    duration: "2024 Q1 - Q2",
    description: "PPP proposal submission and bidder status achievement",
    items: ["PPP proposal submitted", "Preferred bidder status granted", "SPV incorporation"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
  },
  {
    phase: "Phase 3",
    title: "Agreement & Design",
    duration: "2024 Q3 - 2025",
    description: "Concession agreement and detailed design phase",
    items: ["Concession agreement signed", "Road design advancement", "Preparatory works"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
  },
  {
    phase: "Phase 4",
    title: "Construction & Delivery",
    duration: "2025 - 2030",
    description: "Full construction and project completion",
    items: ["Financial close", "Construction commencement", "Project delivery"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
  },
]

export default function ProjectPhases() {
  return (
    <section className="py-20 px-4 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-12 text-center">
          Project Phases
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-card dark:bg-[#1a1a1a] rounded-lg border border-border dark:border-white/10 hover:shadow-lg transition-all overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={phase.image || "/placeholder.svg"}
                  alt={phase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-bold text-[#fdb913] uppercase tracking-wide">{phase.phase}</p>
                  <h3 className="text-2xl font-heading font-bold text-white">{phase.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-sm font-bold text-muted-foreground dark:text-gray-400 mb-3 uppercase">
                  {phase.duration}
                </p>
                <p className="text-muted-foreground dark:text-gray-400 font-paragraph mb-6">{phase.description}</p>

                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3 text-foreground dark:text-white font-paragraph"
                    >
                      <div className="w-2 h-2 bg-[#fdb913] rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
