"use client"

import { Calendar, Target, Rocket } from "lucide-react"

const upcoming = [
  {
    icon: Calendar,
    title: "Financial Close",
    date: "End of 2025",
    description: "Completion of financial arrangements and project funding",
  },
  {
    icon: Rocket,
    title: "Construction Commencement",
    date: "2026",
    description: "Begin main construction works on the 371km corridor",
  },
  {
    icon: Target,
    title: "Project Completion",
    date: "2030",
    description: "Delivery of fully upgraded bituminous highway",
  },
]

export default function UpcomingMilestones() {
  return (
    <section className="py-20 px-4 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-12 text-center">
          Upcoming Milestones
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {upcoming.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-card dark:bg-[#1a1a1a] p-8 rounded-lg border border-border dark:border-white/10 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-[#fdb913] rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm font-bold text-[#fdb913] uppercase tracking-wide mb-3">{item.date}</p>
                <p className="text-muted-foreground dark:text-gray-400 font-paragraph">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}