"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface ExpertBuildersSectionProps {
  expertTitle?: string;
  expertDescription?: string;
  expertButton1Text?: string;
  expertButton1Link?: string;
  regionalTitle?: string;
  regionalDescription?: string;
  regionalButton2Text?: string;
  regionalButton2Link?: string;
}

const ExpertBuildersSection: React.FC<ExpertBuildersSectionProps> = ({
  expertTitle,
  expertDescription,
  expertButton1Text,
  expertButton1Link,
  regionalTitle,
  regionalDescription,
  regionalButton2Text,
  regionalButton2Link,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray(".animated-title");
      const paragraphs = gsap.utils.toArray(".animated-paragraph");
      const buttons = gsap.utils.toArray(".animated-button");

      gsap.fromTo(
        titles,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        buttons,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.3,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white dark:bg-black py-16 md:py-24 px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Expert Builders Card */}
          <div className="space-y-6">
            <h2 className="animated-title text-4xl uppercase md:text-6xl font-bold text-black dark:text-white">
              {expertTitle}
            </h2>
            <p className="animated-paragraph text-[#868584] font-body dark:text-white text-lg md:text-xl leading-relaxed">
              {expertDescription}
            </p>
            <div className="animated-button">
              <Button
                className="font-body text-lg border-white/20 text-white dark:text-black bg-[#FDDB59] rounded-none hover:bg-[#FDDB59]/90 hover:scale-105 transition-transform duration-300 gap-2"
                asChild
              >
                <Link href={expertButton1Link || "#"}>
                  {expertButton1Text} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Regional Impact Card */}
          <div className="space-y-6">
            <h2 className="animated-title text-4xl uppercase md:text-6xl font-bold text-black dark:text-white">
              {regionalTitle}
            </h2>
            <p className="animated-paragraph text-[#868584] dark:text-white font-body text-lg md:text-xl leading-relaxed">
              {regionalDescription}
            </p>
            <div className="animated-button">
              <Button
                className="bg-[#FDDB59] hover:bg-[#FDDB59]/90 font-body text-lg rounded-none border-white/20 text-white dark:text-black hover:scale-105 hover:border-white/40 transition-transform duration-300 gap-2"
                asChild
              >
                <Link href={regionalButton2Link || "#"}>
                  {regionalButton2Text} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertBuildersSection;
