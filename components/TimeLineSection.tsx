"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Clock } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
      return <CheckCircle className="h-6 w-6 text-blue-900 fill-current" />;
    case "current":
      return <Clock className="h-6 w-6 text-blue-900 animate-pulse" />;
    default:
      return <Circle className="h-6 w-6 text-blue-900/50" />;
  }
};

const TimelineSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      ).fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      if (timelineLineRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          {
            scaleY: 0,
            transformOrigin: "top center",
          },
          {
            scaleY: 1,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: timelineLineRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            },
          }
        );
      }

      const timelineItems =
        sectionRef.current?.querySelectorAll(".timeline-item");
      if (timelineItems) {
        timelineItems.forEach((item, index) => {
          const card = item.querySelector(".timeline-card");
          const dot = item.querySelector(".timeline-dot");
          const badge = item.querySelector(".timeline-badge");

          const itemTl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 15%",
              toggleActions: "play none none reverse",
            },
          });

          itemTl.fromTo(
            dot,
            {
              scale: 0,
              rotation: -180,
              opacity: 0,
            },
            {
              scale: 1,
              rotation: 0,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
            }
          );

          itemTl.fromTo(
            card,
            {
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
              y: 50,
              scale: 0.9,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.3"
          );

          itemTl.fromTo(
            badge,
            {
              scale: 0,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: "back.out(2)",
            },
            "-=0.5"
          );

          const cardElement = card as HTMLElement;
          if (cardElement) {
            cardElement.addEventListener("mouseenter", () => {
              gsap.to(cardElement, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
              });
            });

            cardElement.addEventListener("mouseleave", () => {
              gsap.to(cardElement, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl font-[family-name:var(--font-playfair)] lg:text-4xl font-bold text-foreground mb-4"
          >
            Project Journey
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg text-muted-foreground font-[family-name:var(--font-jost)] max-w-3xl mx-auto"
          >
            From conception to completion, track the major milestones of
            Zambia&apos;s most ambitious infrastructure project
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            ref={timelineLineRef}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden lg:block"
          />
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div
                      className={`timeline-dot w-16 h-16 rounded-full bg-background flex items-center justify-center shadow-lg ${
                        item.status === "completed"
                          ? "border-4 border-blue-900"
                          : item.status === "current"
                            ? "border-4 border-blue-900 ring-4 ring-blue-100"
                            : "border-4 border-gray-300"
                      }`}
                    >
                      <TimelineIcon status={item.status} />
                    </div>
                  </div>

                  <Card className="timeline-card flex-1 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex font-[family-name:var(--font-jost)] flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                        <div className="flex items-center gap-3 mb-2 lg:mb-0">
                          <Badge
                            className={`timeline-badge font-medium px-3 py-1 ${
                              item.status === "completed"
                                ? "bg-blue-900 text-white hover:bg-blue-800"
                                : item.status === "current"
                                  ? "bg-blue-100 text-blue-900 border-2 border-blue-900"
                                  : "bg-gray-100 text-gray-700 border border-gray-300"
                            }`}
                            variant="outline"
                          >
                            {item.phase}
                          </Badge>
                          <span className="text-sm font-medium text-muted-foreground">
                            {item.date}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
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
    </section>
  );
};

export default TimelineSection;
