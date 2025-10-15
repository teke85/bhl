"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
  description: string;
}

const KeyStatsUpdated = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<Record<number, number>>({});
  const statsRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    {
      value: "371",
      label: "Kilometres",
      description: "Total road length from Mutanda to Kaoma",
    },
    {
      value: "8",
      label: "Investment",
      description: "Already invested in maintenance and development",
    },
    {
      value: "2025",
      label: "Financial Close",
      description: "Target year for project financing completion",
    },
    {
      value: "4",
      label: "Districts",
      description: "Communities benefiting from infrastructure",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          stats.forEach((stat, index) => {
            const numValue = Number.parseInt(stat.value);
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
      className="py-20 border-b-1 dark:border-b-1 border-t-1 border-white/20 dark:border-gray-500 bg-[#0A0A0A] dark:bg-white"
      ref={statsRef}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "text-center transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-6xl md:text-7xl font-bold text-[#FDB913] mb-3">
                {index === 1 && "$"}
                {counts[index] !== undefined ? counts[index] : stat.value}
                {index === 1 && "M+"}
              </div>
              <div className="text-lg md:text-2xl font-body font-bold text-white dark:text-black mb-2 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-sm md:text-xl font-body text-white dark:text-black leading-relaxed max-w-xs mx-auto">
                {stat.description}
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
