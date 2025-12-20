"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapPin, Layers, Building2, RouteOff } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

interface ProjectKeyStatsProps {
  stats?: Stat[];
}

const ProjectKeyStats = ({ stats: customStats }: ProjectKeyStatsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<Record<number, number>>({});
  const statsRef = useRef<HTMLDivElement>(null);

  const defaultStats: Stat[] = [
    {
      value: "371",
      label: "KILOMETRES",
      description: "TOTAL ROAD LENGTH",
      icon: <MapPin className="w-8 h-8" />,
      highlight: true,
    },
    {
      value: "2",
      label: "MAIN SECTIONS",
      description: "PROJECT DIVISIONS",
      icon: <Layers className="w-8 h-8" />,
    },
    {
      value: "3",
      label: "TOLL PLAZAS",
      description: "COLLECTION POINTS",
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      value: "20",
      label: "KM URBAN ROADS",
      description: "CITY INFRASTRUCTURE",
      icon: <RouteOff className="w-8 h-8" />,
      highlight: true,
    },
  ];

  const stats = customStats || defaultStats;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && statsRef.current) {
      const cards = gsap.utils.toArray(".stat-card");
      const icons = gsap.utils.toArray(".stat-icon");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        icons,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.15,
          delay: 0.3,
        }
      );

      gsap.to(".highlight-card", {
        scale: 1.05,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const numValue = parseFloat(stat.value);
        if (!isNaN(numValue)) {
          let current = 0;
          const increment = numValue / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numValue) {
              setCounts((prev) => ({ ...prev, [index]: numValue }));
              clearInterval(timer);
            } else {
              setCounts((prev) => ({
                ...prev,
                [index]: Math.floor(current),
              }));
            }
          }, 30);
        }
      });
    }
  }, [isVisible]);

  return (
    <section
      ref={statsRef}
      className="relative py-32 bg-white dark:bg-black overflow-hidden border-t border-border dark:border-white/10"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,0.03) 35px,
              rgba(255,255,255,0.03) 70px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-body tracking-[0.3em] text-black dark:text-white mb-4">
            PROJECT OVERVIEW
          </h2>
          <div className="w-24 h-px bg-[#FDB913] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card relative group p-8 rounded-lg transition-all duration-700 ${stat.highlight
                  ? "highlight-card bg-[#FDB913]/90 dark:bg-[#FDB913]/95"
                  : "bg-transparent"
                }`}
            >
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-body tracking-[0.2em] uppercase ${stat.highlight
                        ? "text-black"
                        : "text-black dark:text-white/50"
                      }`}
                  >
                    {stat.label}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-6xl md:text-7xl font-bold leading-none ${stat.highlight
                        ? "text-black"
                        : "text-black dark:text-white"
                      }`}
                  >
                    {counts[index] !== undefined ? counts[index] : stat.value}
                  </span>
                </div>

                <div
                  className={`text-sm font-body uppercase tracking-wide ${stat.highlight
                      ? "text-black/70"
                      : "text-black/60 dark:text-white/60"
                    }`}
                >
                  {stat.description}
                </div>

                <div
                  className={`stat-icon opacity-60 group-hover:opacity-100 transition-opacity ${stat.highlight ? "text-black" : "text-[#FDB913]"
                    }`}
                >
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectKeyStats;
