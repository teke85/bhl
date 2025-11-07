"use client";

import { Award, Zap, Target, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Submission of unsoliced proposal",
    description:
      "The Promoters submitted the unsolicited proposal for the Project on 16 February 2024.ed bidder status from the Road Development Agency",
    date: "16 February 2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    icon: Zap,
    title: "Awarded",
    description: "Successfully incorporated Barotse Express Limited (BEL-TC)",
    date: "July 2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    icon: Target,
    title: "Concession Agreement",
    description: "Signed concession agreement with Ministry of Finance",
    date: "December 2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Design Phase",
    description: "Advanced road design and preparatory works underway",
    date: "Current",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
  },
];

export default function MilestoneHighlights() {
  return (
    <section className="py-20 px-4 bg-card dark:bg-[#1a1a1a]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-12 text-center">
          Key Milestones
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-background dark:bg-[#0a0a0a] rounded-lg border border-border dark:border-white/10 hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-all group overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all"></div>
                </div>

                <div className="p-6">
                  <div className="w-12 h-12 bg-[#fdb913] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 font-paragraph mb-3">
                    {item.description}
                  </p>
                  <p className="text-xs font-bold text-[#fdb913]">
                    {item.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
