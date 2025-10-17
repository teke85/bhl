"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ExpertBuildersSection = () => {
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
              Expert Builders
            </h2>
            <p className="animated-paragraph text-black font-body dark:text-white text-lg md:text-xl leading-relaxed">
              Upgrading 371 km of the Mutanda to Kaoma Road to international
              bituminous standards, completing Zambia&apos;s Western Corridor.
            </p>
            <div className="animated-button">
              <Button
                className="font-body text-lg border-white/20 text-white dark:text-black bg-[#fdb913] rounded-none hover:bg-[#fdb913]/90 hover:scale-105 transition-transform duration-300 gap-2"
                asChild
              >
                <Link href="/project">
                  View Project Details <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Regional Impact Card */}
          <div className="space-y-6">
            <h2 className="animated-title text-4xl uppercase md:text-6xl font-bold text-black dark:text-white">
              Regional Impact
            </h2>
            <p className="animated-paragraph text-black dark:text-white font-body text-lg md:text-xl leading-relaxed">
              Creating a vital link between Zambia&apos;s Copperbelt, DRC&apos;s
              mining regions, and the Port of Walvis Bay on Africa&apos;s West
              Coast.
            </p>
            <div className="animated-button">
              <Button
                className="bg-[#fdb913] font-body text-lg rounded-none border-white/20 text-white dark:text-black hover:bg-[#fdb913]/90 hover:scale-105 hover:border-white/40 transition-transform duration-300 gap-2"
                asChild
              >
                <Link href="/regional-impact">
                  Explore Regional Benefits <ArrowRight className="h-4 w-4" />
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
