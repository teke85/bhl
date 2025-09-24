"use client";

import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  FileText,
  Camera,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const NewsUpdatesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Title animation
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Cards stagger animation
        gsap.fromTo(
          cardsRef.current?.children || [],
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    };

    loadGSAP();
  }, []);

  const newsItems = [
    {
      category: "Project Update",
      title: "Environmental Impact Assessment Completed",
      description:
        "Comprehensive environmental studies have been finalized, paving the way for construction commencement in Q2 2025.",
      date: "December 15, 2024",
      icon: FileText,
      badge: "Latest",
      badgeVariant: "default" as const,
    },
    {
      category: "Community Engagement",
      title: "Local Employment Training Program Launched",
      description:
        "Skills development initiative begins for 500+ local residents, focusing on construction and maintenance expertise.",
      date: "December 10, 2024",
      icon: Users,
      badge: "CSR",
      badgeVariant: "secondary" as const,
    },
    {
      category: "Procurement",
      title: "Supplier Registration Portal Now Open",
      description:
        "Local and international suppliers can now register for upcoming procurement opportunities across all project phases.",
      date: "December 5, 2024",
      icon: ExternalLink,
      badge: "Opportunity",
      badgeVariant: "outline" as const,
    },
    {
      category: "Media",
      title: "Project Signing Ceremony Highlights",
      description:
        "View exclusive footage from the historic signing ceremony with Minister Musokotwane and project stakeholders.",
      date: "December 1, 2024",
      icon: Camera,
      badge: "Gallery",
      badgeVariant: "secondary" as const,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
          >
            Latest News & Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed about project milestones, community initiatives, and
            opportunities as we build Zambia&apos;s gateway to the west.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {newsItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant={item.badgeVariant}
                      className="text-xs font-medium"
                    >
                      {item.badge}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-secondary mb-2">
                        {item.category}
                      </p>
                      <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                  <div className="mt-4 w-full h-48 bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <div className="text-center text-muted-foreground">
                      <Camera className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm font-medium">Image Placeholder</p>
                      <p className="text-xs">Insert your image here</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {item.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-medium text-primary hover:text-primary/80 group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
          >
            View All Updates
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdatesSection;
