"use client";

import type React from "react";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Zap, Globe, TrendingUp, Award } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: string;
  unit?: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

interface KeyStatsUpdatedProps {
  stats?: Array<{
    value: string;
    unit: string;
    label: string;
    description: string;
    icon: string;
  }>;
  mainTitle?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
};

const DEFAULT_STATS: Stat[] = [
  {
    value: "371",
    label: "KILOMETRES",
    description: "TOTAL ROAD LENGTH",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    value: "8",
    unit: "M+",
    label: "INVESTMENT",
    description: "ALREADY INVESTED",
    icon: <Award className="w-8 h-8" />,
    highlight: true,
  },
  {
    value: "2025",
    label: "START OF CONSTRUCTION",
    description: "TARGET YEAR",
    icon: <Zap className="w-8 h-8" />,
    highlight: true,
  },
  {
    value: "4",
    label: "DISTRICTS",
    description: "COMMUNITIES BENEFITING",
    icon: <Globe className="w-8 h-8" />,
  },
];

const KeyStatsUpdated: React.FC<KeyStatsUpdatedProps> = ({
  stats: propStats,
  mainTitle = "OUR KEY STATS",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<Record<number, number>>({});
  const statsRef = useRef<HTMLDivElement>(null);
  const hasGsapAnimated = useRef(false);
  const hasCounterAnimated = useRef(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const stats: Stat[] = useMemo(() => {
    if (!propStats || propStats.length === 0) return DEFAULT_STATS;

    return propStats.map((stat, index) => ({
      value: stat.value,
      unit: stat.unit || undefined,
      label: stat.label,
      description: stat.description,
      icon: iconMap[stat.icon] || <TrendingUp className="w-8 h-8" />,
      highlight: index === 1 || index === 2,
    }));
  }, [propStats]);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = statsRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.disconnect();
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    if (isVisible && statsRef.current && !hasGsapAnimated.current) {
      hasGsapAnimated.current = true;
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
            toggleActions: "play none none none",
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
    }
  }, [isVisible]);

  const animateCounters = useCallback(() => {
    // Clear any existing timers
    timersRef.current.forEach((timer) => clearInterval(timer));
    timersRef.current = [];

    stats.forEach((stat, index) => {
      const numValue = Number.parseFloat(stat.value);
      if (!isNaN(numValue)) {
        let current = 0;
        const duration = 1500; // 1.5 seconds
        const steps = 50;
        const increment = numValue / steps;
        const intervalTime = duration / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= numValue) {
            setCounts((prev) => ({ ...prev, [index]: numValue }));
            clearInterval(timer);
          } else {
            setCounts((prev) => ({
              ...prev,
              [index]: stat.value.includes(".")
                ? Number.parseFloat(current.toFixed(1))
                : Math.floor(current),
            }));
          }
        }, intervalTime);
        timersRef.current.push(timer);
      } else {
        // For non-numeric values like text, don't animate
        setCounts((prev) => ({ ...prev, [index]: 0 }));
      }
    });
  }, [stats]);

  useEffect(() => {
    if (isVisible && !hasCounterAnimated.current) {
      hasCounterAnimated.current = true;
      console.log(
        "[v0] Starting counter animation, stats:",
        stats.map((s) => s.value)
      );
      animateCounters();
    }

    return () => {
      timersRef.current.forEach((timer) => clearInterval(timer));
    };
  }, [isVisible, animateCounters, stats]);

  return (
    <section
      ref={statsRef}
      className="relative py-32 bg-white dark:bg-black overflow-hidden"
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
            {mainTitle}
          </h2>
          <div className="w-24 h-px bg-[#FDDB59] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const numValue = Number.parseFloat(stat.value);
            const isNumeric = !isNaN(numValue);
            const displayValue =
              isNumeric && counts[index] !== undefined
                ? counts[index]
                : stat.value;

            return (
              <div
                key={index}
                className={`stat-card relative group p-8 rounded-lg ${
                  stat.highlight
                    ? "bg-[#FDDB59] dark:bg-[#FDDB59]/95"
                    : "bg-transparent"
                } text-left flex flex-col justify-between min-h-[280px] md:min-h-[320px]`}
              >
                <div className="space-y-6">
                  <h3
                    className={`text-xs font-body tracking-[0.2em] uppercase ${
                      stat.highlight
                        ? "text-black"
                        : "text-black dark:text-white/70"
                    }`}
                  >
                    {stat.label}
                  </h3>

                  <div className="flex items-baseline gap-1">
                    {index === 1 && (
                      <span
                        className={`text-6xl md:text-7xl font-bold ${
                          stat.highlight
                            ? "text-black"
                            : "text-black dark:text-white"
                        }`}
                      >
                        $
                      </span>
                    )}
                    <span
                      className={`text-7xl md:text-8xl font-bold leading-none ${
                        stat.highlight
                          ? "text-black"
                          : "text-black dark:text-white"
                      }`}
                    >
                      {displayValue}
                    </span>
                    {stat.unit && (
                      <span
                        className={`text-4xl md:text-5xl font-bold ${
                          stat.highlight
                            ? "text-black/80"
                            : "text-black/70 dark:text-white/70"
                        }`}
                      >
                        {stat.unit}
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-sm font-body uppercase tracking-wide ${
                      stat.highlight
                        ? "text-black/70"
                        : "text-black/70 dark:text-white/70"
                    }`}
                  >
                    {stat.description}
                  </p>
                </div>

                <div
                  className={`stat-icon mt-6 ${stat.highlight ? "text-black opacity-60" : "text-[#FDDB59] opacity-60"}`}
                >
                  {stat.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyStatsUpdated;
