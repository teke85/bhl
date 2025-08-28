"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations will be added here
    const elements = [
      titleRef.current,
      subtitleRef.current,
      buttonsRef.current,
    ];

    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";

        setTimeout(() => {
          el.style.transition = "all 0.8s ease-out";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, index * 200);
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dpeg7wc34/image/upload/v1756193625/aerial-view-of-african-highway-construction-site-w_ulux6u.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-4 text-center text-white">
        <h1
          ref={titleRef}
          className="text-4xl font-[family-name:var(--font-playfair)] sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Building Zambia&apos;s
          <br />
          <span className="text-[#7c7e80] font-[family-name:var(--font-playfair)]">
            Gateway to the West
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl font-[family-name:var(--font-jost)] sm:text-2xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90"
        >
          371km of modern infrastructure connecting the Copperbelt to
          international markets via Namibia&apos;s Walvis Bay port.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-[#151E2F] text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg"
          >
            Explore the Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Overview
          </Button>
        </div>
      </div>

      {/* Highway SVG Animation */}
      <div className="absolute bottom-0 left-0 right-0 z-5">
        <svg
          viewBox="0 0 1200 200"
          className="w-full h-32 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,150 Q300,100 600,120 T1200,100"
            stroke="#10b981"
            strokeWidth="4"
            fill="none"
            className="highway-path"
          />
          <path
            d="M0,160 Q300,110 600,130 T1200,110"
            stroke="#164e63"
            strokeWidth="2"
            fill="none"
            className="highway-path"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
        {/* Scroll Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
