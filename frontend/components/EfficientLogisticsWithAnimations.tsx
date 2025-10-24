"use client";

import type React from "react";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedChevron from "./AnimatedChevron";
import { gsap } from "gsap";

const EfficientLogistics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a master timeline for coordinated animations
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Title animation - clip mask effect from bottom
      tl.fromTo(
        titleRef.current,
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          opacity: 0,
          y: 50,
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          y: 0,
          duration: 1.4,
        }
      );

      // Chevron animation - staggered fade in with slight bounce
      tl.fromTo(
        chevronRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      // Description text animation - words fade in sequentially
      tl.fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
        },
        "-=0.3"
      );

      // Button animation - slide up with glow effect
      tl.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // Image animation - elegant fade in with scale and parallax
      tl.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 1.1,
          rotationY: 15,
          filter: "blur(10px) brightness(1.2)",
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          filter: "blur(0px) brightness(1)",
          duration: 1.6,
          ease: "power2.inOut",
        },
        "-=1"
      );

      // Add subtle continuous animations
      if (chevronRef.current) {
        gsap.to(chevronRef.current, {
          y: 5,
          duration: 2,
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
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      if (imageRef.current) {
        imageRef.current.addEventListener("mouseenter", () => {
          gsap.to(imageRef.current, {
            scale: 1.02,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        imageRef.current.addEventListener("mouseleave", () => {
          gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center py-8 md:py-0"
    >
      <div className="container-fluid w-full mx-auto px-4 md:px-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Text Column - Left Side */}
          <div className="relative z-30 max-w-full md:max-w-full w-full md:w-auto">
            {/* Title */}
            <div className="flex flex-col md:flex-col items-start md:items-start gap-2 md:gap-4 mb-6 md:mb-8">
              <h2
                ref={titleRef}
                className="text-2xl md:text-4xl lg:text-4xl font-black text-white tracking-wider font-heading"
              >
                EFFICIENT LOGISTICS
              </h2>
              <div ref={chevronRef}>
                <AnimatedChevron className="h-6 w-6 md:h-10 md:w-10" />
              </div>
            </div>

            {/* Description */}
            <div
              ref={descriptionRef}
              className="flex flex-col gap-4 text-white z-50 h-full backdrop-blur-sm p-6 md:p-12 bg-black/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-full md:max-w-2xl font-[family-name:var(--font-jost)]"
            >
              <p className="">
                The Road also serves as a vital trade corridor, connecting
                Solwezi to Walvis Bay in Namibia. The current condition of the
                Road restricts seamless movement of goods, impacting trade
                within Zambia and potentially hindering economic ties with
                neighbouring countries such as the Congo DRC.
              </p>
              {/* Button */}
              <Button
                ref={buttonRef}
                size="lg"
                className="bg-[#EAB81E] hover:bg-[#be9416] font-[family-name:var(--font-jost)] text-black font-bold text-sm md:text-base px-6 md:px-8 py-3 rounded-none w-full md:w-1/4 transition-transform duration-300"
              >
                Discover More
              </Button>
            </div>
          </div>

          {/* Image - Right Side with Overlap on Desktop */}
          <div className="relative md:-ml-12 md:-mt-18 z-10 w-full md:w-auto flex justify-center">
            <Image
              ref={imageRef}
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758715605/2_iy4t13.png"
              alt="Highway construction and infrastructure"
              width={800}
              height={256}
              className="w-full max-w-sm md:w-4xl h-48 md:h-80 object-cover shadow-3xl transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficientLogistics;
