"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Zap, Globe, TrendingUp, Award } from "lucide-react";

interface Stat {
  value: string;
  unit?: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const KeyStatsUpdated = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<Record<number, number>>({});
  const statsRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    {
      value: "371",
      unit: "",
      label: "KILOMETRES",
      description: "TOTAL ROAD LENGTH",
      icon: <TrendingUp className="w-8 h-8" />,
      highlight: false,
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
      unit: "",
      label: "FINANCIAL CLOSE",
      description: "TARGET YEAR",
      icon: <Zap className="w-8 h-8" />,
      highlight: true,
    },
    {
      value: "4",
      unit: "",
      label: "DISTRICTS",
      description: "COMMUNITIES BENEFITING",
      icon: <Globe className="w-8 h-8" />,
      highlight: false,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          stats.forEach((stat, index) => {
            const numValue = Number.parseFloat(stat.value);
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
                    [index]: stat.value.includes(".")
                      ? Number.parseFloat(current.toFixed(1))
                      : Math.floor(current),
                  }));
                }
              }, 30);
            }
          });
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-32 bg-white dark:bg-black overflow-hidden"
      ref={statsRef}
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255, 255, 255, 0.03) 35px,
            rgba(255, 255, 255, 0.03) 70px
          )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-body tracking-[0.3em] text-black dark:text-white mb-4">
            OUR KEYS STATS
          </h2>
          <div className="w-24 h-px bg-[#FDB913] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "relative transition-all duration-700 group p-8 rounded-lg",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
                stat.highlight
                  ? "bg-[#FDB913]/90 dark:bg-[#FDB913]/95"
                  : "bg-transparent"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Vertical line separator - only for non-highlighted items */}
              {index > 0 && !stat.highlight && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10" />
              )}

              <div className="space-y-4 text-left">
                {/* Label */}
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "text-xs font-body tracking-[0.2em] uppercase",
                      stat.highlight
                        ? "text-black"
                        : "text-black dark:text-white/50"
                    )}
                  >
                    {stat.label}
                  </span>
                </div>

                {/* Number with unit */}
                <div className="flex items-baseline gap-2">
                  <span
                    className={cn(
                      "text-6xl md:text-7xl font-bold leading-none",
                      stat.highlight
                        ? "text-black"
                        : "text-black dark:text-white"
                    )}
                  >
                    {index === 1 && "$"}
                    {counts[index] !== undefined ? counts[index] : stat.value}
                  </span>
                  {stat.unit && (
                    <span
                      className={cn(
                        "text-3xl md:text-4xl font-bold",
                        stat.highlight
                          ? "text-black/80"
                          : "text-black dark:text-white/80"
                      )}
                    >
                      {stat.unit}
                    </span>
                  )}
                </div>

                {/* Description */}
                {stat.description && (
                  <div
                    className={cn(
                      "text-sm font-body uppercase tracking-wide",
                      stat.highlight
                        ? "text-black/70"
                        : "text-black/60 dark:text-white/60"
                    )}
                  >
                    {stat.description}
                  </div>
                )}

                {/* Icon */}
                <div
                  className={cn(
                    "opacity-60 group-hover:opacity-100 transition-opacity",
                    stat.highlight ? "text-black" : "text-[#FDB913]"
                  )}
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

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default KeyStatsUpdated;
