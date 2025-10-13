"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    { value: "2024", label: "Project Start Year", suffix: "" },
    { value: "25", label: "Concession Period", suffix: " Years" },
    { value: "371", label: "Total Road Length", suffix: " km" },
    { value: "3", label: "Toll Plazas", suffix: "" },
    { value: "2", label: "Weighbridges", suffix: "" },
    { value: "2025", label: "Target Financial Close", suffix: "" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-muted/30" ref={statsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            KEY STATISTICS
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                {stat.value}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-base md:text-lg font-medium text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
