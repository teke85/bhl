"use client";

import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  FileText,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NewsUpdatesSlider = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const newsItems = [
    {
      category: "Infrastructure",
      title: "Major Infrastructure Milestone Reached",
      description:
        "The Barotse Highway project achieves completion of phase two, bringing modern connectivity to the region.",
      date: "November 2024",
      icon: FileText,
      badge: "Latest",
      badgeVariant: "default" as const,
      image: "/infrastructure-project-milestone.jpg",
    },
    {
      category: "Community Impact",
      title: "Community Impact Report Released",
      description:
        "New report highlights the positive economic and social impacts of improved road infrastructure across local communities.",
      date: "October 2024",
      icon: Users,
      badge: "Report",
      badgeVariant: "secondary" as const,
      image: "/community-infrastructure-impact.jpg",
    },
    {
      category: "Partnership",
      title: "Partnership Expansion Announced",
      description:
        "Strategic partnerships with leading engineering firms strengthen project delivery and regional development initiatives.",
      date: "September 2024",
      icon: ExternalLink,
      badge: "Partnership",
      badgeVariant: "outline" as const,
      image: "/business-partnership-announcement.png",
    },
  ];

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
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
      }, sectionRef);

      return () => ctx.revert();
    };

    loadGSAP();
  }, []);

  useEffect(() => {
    if (!autoScroll) return;

    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [autoScroll, newsItems.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 8000); // Resume after 8 seconds
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
    );
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 8000);
  };

  const currentItem = newsItems[currentIndex];

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

        <div className="relative">
          {/* Navigation Arrows - Top Right */}
          <div className="absolute -top-20 right-0 flex gap-2 z-10">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
              aria-label="Previous news item"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
              aria-label="Next news item"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Slider Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-neutral-800 rounded-lg">
            <CardHeader className="pb-0">
              <div className="relative h-48 md:h-96 overflow-hidden bg-gray-200 dark:bg-neutral-700 rounded-t-lg -m-6 mb-6">
                <Image
                  src={currentItem.image || "/placeholder.svg"}
                  alt={currentItem.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-[#FDDB59]">
                  {currentItem.date}
                </p>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-black dark:text-white group-hover:text-[#FDDB59] transition-colors">
                {currentItem.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <CardDescription className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {currentItem.description}
              </CardDescription>
              <div className="flex justify-center">
                <Link href="/news">
                  <Button className="w-32 bg-[#FDDB59] text-black dark:text-black hover:bg-[#fdb913] dark:hover:bg-[#fdb913] font-semibold rounded-none transition-all duration-300">
                    Read More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-2 mt-6">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoScroll(false);
                  setTimeout(() => setAutoScroll(true), 8000);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
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

export default NewsUpdatesSlider;
