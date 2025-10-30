"use client";

import { CheckCircle2 } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

const events: TimelineEvent[] = [
  {
    date: "16 February 2024",
    title: "Unsolicited proposal submitted",
    description:
      "The Promoters submitted the unsolicited proposal for the Project on 16 February 2024.",
    status: "completed",
  },
  {
    date: "19 June, 2024",
    title: "Preferred bidder status awarded",
    description:
      "On 19 June 2024, the Promoters were awarded the preferred bidder status by the Zambia Road Development Agency.",
    status: "completed",
  },
  {
    date: "10 July 2024",
    title: "SPV Incorporated",
    description:
      "The Promoters incorporated the Special Purpose Vehicle, Western Corridor. ü	The Promoters engaged in a period of contract negotiations. The Promoters engaged various advisors, legal, financing, engineering, and ESG advisors to assist in the negotiations.",
    status: "completed",
  },

  {
    date: "1 December 2024",
    title: "Concession Agreement Signed",
    description:
      "The Concession Agreement was signed with the Ministry of Finance and National Planning in Kasempa.",
    status: "completed",
  },
  {
    date: "Current Status",
    title: "Design & Preparation",
    description:
      "The Project is advancing through road design and other preparatory works.",
    status: "current",
  },
  {
    date: "End of 2025",
    title: "Financial Close",
    description: "Target milestone for achieving financial close.",
    status: "upcoming",
  },
];

export default function TimelineVertical() {
  return (
    <section className="py-20 px-4 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-[#fdb913] via-[#fdb913]/50 to-[#fdb913]/20 dark:from-[#fdb913] dark:via-[#fdb913]/50 dark:to-[#fdb913]/20 transform md:-translate-x-1/2"></div>

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-2 w-16 h-16 md:w-20 md:h-20 transform md:-translate-x-1/2 -translate-x-1/2">
                  <div className="w-full h-full rounded-full bg-[#fdb913] flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-black" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-24 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-12 md:w-1/2" : "md:ml-auto md:pl-12 md:w-1/2"}`}
                >
                  <div className="bg-card dark:bg-[#1a1a1a] p-6 md:p-8 rounded-lg border border-border dark:border-white/10 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#fdb913] font-heading font-bold text-sm md:text-base">
                        {event.date}
                      </span>
                      {event.status === "current" && (
                        <span className="px-3 py-1 bg-[#fdb913] text-black text-xs font-bold rounded-full">
                          CURRENT
                        </span>
                      )}
                      {event.status === "upcoming" && (
                        <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                          UPCOMING
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-black dark:text-white mb-3">
                      {event.title}
                    </h3>
                    <p className="text-[#868584] dark:text-white font-body leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
