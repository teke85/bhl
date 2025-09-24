"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: "371", label: "Total Road Length", suffix: "KM" },
  { value: "25", label: "Concession Period", suffix: "YEARS" },
  { value: "500", label: "Total Investment", suffix: "M USD" },
  { value: "3", label: "Toll Plazas", suffix: "" },
  { value: "2", label: "Weighbridges", suffix: "" },
  { value: "2025", label: "Construction Start", suffix: "" },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const target = Number.parseInt(value);
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
        {count.toLocaleString()}
        {suffix && (
          <span className="text-2xl lg:text-3xl text-secondary ml-1">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4">
            Project by the Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A transformative infrastructure investment that will reshape
            Zambia&apos;s economic landscape
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-sm lg:text-base font-medium text-muted-foreground mt-2 leading-tight">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
