"use client";

import type React from "react";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedChevron from "./AnimatedChevron";
import { gsap } from "gsap";

const EconomicGrowthCatalyst: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const paragraphsRef = useRef<HTMLParagraphElement[]>([]);

  const addToParagraphsRef = (el: HTMLParagraphElement | null) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a master timeline for coordinated animations
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Image animation - elegant slide in from left with parallax
      tl.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: -100,
          scale: 1.1,
          rotationY: -10,
          filter: "blur(15px) brightness(1.3)",
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotationY: 0,
          filter: "blur(0px) brightness(1)",
          duration: 1.6,
          ease: "power2.inOut",
        },
        0
      );

      // Title animation - slide in from right with clip path
      tl.fromTo(
        titleRef.current,
        {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          opacity: 0,
          x: 80,
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        0.3
      );

      // Chevron animation - bounce in with delay
      tl.fromTo(
        chevronRef.current,
        {
          opacity: 0,
          scale: 0.6,
          x: 40,
          rotation: -90,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          rotation: 0,
          duration: 0.9,
          ease: "back.out(1.8)",
        },
        0.5
      );

      // Description container fade in
      tl.fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        0.6
      );

      // Paragraphs staggered animation
      paragraphsRef.current.forEach((paragraph, index) => {
        tl.fromTo(
          paragraph,
          {
            opacity: 0,
            y: 25,
            filter: "blur(5px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
          },
          0.8 + index * 0.15
        );
      });

      // Button animation - elegant slide up with glow
      tl.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
          backgroundColor: "#000000",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          backgroundColor: "#EAB81E",
          duration: 1,
          ease: "power2.out",
        },
        1.2
      );

      // Add continuous subtle animations
      if (chevronRef.current) {
        gsap.to(chevronRef.current, {
          y: 8,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });
      }

      // Add hover effects for interactive elements
      if (buttonRef.current) {
        buttonRef.current.addEventListener("mouseenter", () => {
          gsap.to(buttonRef.current, {
            scale: 1.08,
            y: -2,
            boxShadow: "0 10px 25px rgba(234, 184, 30, 0.3)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            y: 0,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      if (imageRef.current) {
        imageRef.current.addEventListener("mouseenter", () => {
          gsap.to(imageRef.current, {
            scale: 1.03,
            y: -5,
            rotationY: 5,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        imageRef.current.addEventListener("mouseleave", () => {
          gsap.to(imageRef.current, {
            scale: 1,
            y: 0,
            rotationY: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      }

      // Add subtle background animation
      gsap.to(sectionRef.current, {
        backgroundPosition: "0% 0%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center py-8 md:py-0"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Image - Left Side with Overlap on Desktop */}
          <div className="relative md:-mr-12 md:-mt-48 z-20 w-full md:w-auto flex justify-center order-2 md:order-1">
            <Image
              ref={imageRef}
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758715610/7_rk8wwz.png"
              alt="Modern bridge infrastructure"
              width={384}
              height={256}
              className="w-full max-w-sm md:w-96 h-48 md:h-64 object-cover shadow-2xl transition-transform duration-500 cursor-pointer"
            />
          </div>

          {/* Text Column - Right Side */}
          <div className="relative z-30 max-w-full md:max-w-2xl w-full md:w-auto order-1 md:order-2">
            {/* Title */}
            <div className="flex flex-col md:flex-col items-start md:items-end md:justify-end gap-2 md:gap-4 mb-6 md:mb-8">
              <h2
                ref={titleRef}
                className="text-2xl md:text-4xl lg:text-4xl font-black text-white tracking-wider text-left md:text-right font-heading"
              >
                ECONOMIC GROWTH CATALYST
              </h2>
              <div ref={chevronRef}>
                <AnimatedChevron className="h-6 w-6 md:h-10 md:w-10" />
              </div>
            </div>

            {/* Description */}
            <div
              ref={descriptionRef}
              className="flex flex-col gap-4 text-left bg-black/80 backdrop-blur-sm p-6 md:p-12 md:text-right mb-6 font-[family-name:var(--font-jost)] md:mb-8"
            >
              <p
                ref={(el) => addToParagraphsRef(el)}
                className="text-white text-left text-base md:text-lg leading-relaxed mb-4 md:mb-6 font-sans"
              >
                The project is expected to significantly contribute to economic
                growth in both Western and Northwestern provinces, and
                ultimately translate to improved welfare for the country.
              </p>

              <p
                ref={(el) => addToParagraphsRef(el)}
                className="text-left text-white"
              >
                The primary beneficiaries of the Mutanda to Kaoma road
                rehabilitation and construction project include the mining
                industry, businesses, regional trade, local communities, the
                Government, and the transportation sector. The Project&apos;s
                services aim to create a positive impact on various
                stakeholders, fostering economic development and regional
                connectivity.
              </p>
              <Button
                ref={buttonRef}
                size="lg"
                className="bg-[#EAB81E] hover:bg-[#be9416] text-black font-bold text-sm md:text-base px-6 md:px-8 py-3 rounded-none w-full md:w-1/4 font-[family-name:var(--font-jost)] transition-all duration-300"
              >
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicGrowthCatalyst;
