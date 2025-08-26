"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Clock } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
  phase: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "Q4 2024",
    title: "Environmental Impact Assessment",
    description:
      "Comprehensive environmental and social impact assessment completed with community consultations.",
    status: "completed",
    phase: "Planning",
  },
  {
    date: "Q1 2025",
    title: "Final Design Approval",
    description:
      "Technical specifications finalized and construction permits obtained from relevant authorities.",
    status: "current",
    phase: "Design",
  },
  {
    date: "Q2 2025",
    title: "Construction Commencement",
    description:
      "Official groundbreaking ceremony and mobilization of construction teams and equipment.",
    status: "upcoming",
    phase: "Construction",
  },
  {
    date: "Q4 2026",
    title: "First Section Completion",
    description:
      "Mutanda-Kasempa section (180km) completed and opened for limited traffic.",
    status: "upcoming",
    phase: "Construction",
  },
  {
    date: "Q2 2027",
    title: "Full Road Completion",
    description:
      "Entire 371km highway completed with toll operations and maintenance systems active.",
    status: "upcoming",
    phase: "Operations",
  },
  {
    date: "2027-2050",
    title: "Operations & Maintenance",
    description:
      "25-year concession period ensuring world-class highway standards and continuous improvements.",
    status: "upcoming",
    phase: "Operations",
  },
];

const TimelineIcon = ({ status }: { status: TimelineItem["status"] }) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-6 w-6 text-secondary" />;
    case "current":
      return <Clock className="h-6 w-6 text-primary animate-pulse" />;
    default:
      return <Circle className="h-6 w-6 text-muted-foreground" />;
  }
};

const TimelineSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineItems =
              entry.target.querySelectorAll(".timeline-item");
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-in");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-[family-name:var(--font-playfair)] font-bold text-foreground mb-4">
            Project Journey
          </h2>
          <p className="text-lg text-muted-foreground font-[family-name:var(--font-jost)] max-w-3xl mx-auto">
            From conception to completion, track the major milestones of
            Zambia&apos;s most ambitious infrastructure project
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute bg-[#164e63] left-8 top-0 bottom-0 w-0.5 timeline-line hidden lg:block" />

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="timeline-item opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex text-[#164e63] items-start gap-6">
                  {/* Timeline Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="timeline-dot w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                      <TimelineIcon status={item.status} />
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                        <div className="flex font-[family-name:var(--font-jost)] items-center gap-3 mb-2 lg:mb-0">
                          <Badge
                            variant={
                              item.status === "completed"
                                ? "default"
                                : item.status === "current"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {item.phase}
                          </Badge>
                          <span className="text-sm font-medium text-muted-foreground">
                            {item.date}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-[family-name:var(--font-jost)] font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground font-[family-name:var(--font-jost)] leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-item.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;
