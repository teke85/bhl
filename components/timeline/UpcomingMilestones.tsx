"use client";

import { Target, Rocket, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Target,
  "rocket": Rocket,
  "target": Target,
};

interface Milestone {
  icon: string;
  title: string;
  date: string;
  description: string;
}

interface UpcomingMilestonesProps {
  title?: string;
  milestones?: Milestone[];
}

export default function UpcomingMilestones({
  title = "Upcoming Milestones",
  milestones = [
    {
      icon: "Rocket",
      title: "Construction Commencement",
      date: "2025",
      description: "Begin main construction works on the 371km corridor",
    },
    {
      icon: "Target",
      title: "Project Completion",
      date: "2028",
      description: "Delivery of fully upgraded bituminous highway",
    },
  ],
}: UpcomingMilestonesProps) {
  return (
    <section className="py-20 px-4 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-12 text-center">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {milestones.map((item, index) => {
            const Icon = iconMap[item.icon] || Rocket;
            return (
              <div
                key={index}
                className="bg-card dark:bg-[#1a1a1a] p-8 rounded-lg border border-border dark:border-white/10 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-[#fdb913] rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-[#fdb913] uppercase tracking-wide mb-3">
                  {item.date}
                </p>
                <p className="text-[#868584] dark:text-white font-paragraph">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
