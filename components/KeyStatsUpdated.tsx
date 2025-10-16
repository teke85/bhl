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
    },
    {
      value: "8",
      unit: "M+",
      label: "INVESTMENT",
      description: "ALREADY INVESTED",
      icon: <Award className="w-8 h-8" />,
    },
    {
      value: "2025",
      unit: "",
      label: "FINANCIAL CLOSE",
      description: "TARGET YEAR",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      value: "4",
      unit: "",
      label: "DISTRICTS",
      description: "COMMUNITIES BENEFITING",
      icon: <Globe className="w-8 h-8" />,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "relative text-left transition-all duration-700 group",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Vertical line separator */}
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-white/10" />
              )}

              <div className="space-y-4">
                {/* Label */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-body tracking-[0.2em] text-black dark:text-white/50 uppercase">
                    {stat.label}
                  </span>
                </div>

                {/* Number with unit */}
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl md:text-7xl font-bold text-black dark:text-white leading-none">
                    {index === 1 && "$"}
                    {counts[index] !== undefined ? counts[index] : stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-3xl md:text-4xl font-bold text-black dark:text-white/80">
                      {stat.unit}
                    </span>
                  )}
                </div>

                {/* Description */}
                {stat.description && (
                  <div className="text-sm font-body text-white/60 uppercase tracking-wide">
                    {stat.description}
                  </div>
                )}

                {/* Icon */}
                <div className="text-[#FDB913] opacity-60 group-hover:opacity-100 transition-opacity">
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
