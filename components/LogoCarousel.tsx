"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Sample logo data - replace with your actual logos
const logos = [
  { id: 1, name: "TechCorp", src: "/modern-tech-logo.png" },
  { id: 2, name: "InnovateLab", src: "/innovation-lab-logo.png" },
  { id: 3, name: "DataFlow", src: "/data-analytics-logo.png" },
  { id: 4, name: "CloudSync", src: "/cloud-services-logo.jpg" },
  { id: 5, name: "DevStudio", src: "/development-studio-logo.jpg" },
  { id: 6, name: "AICore", src: "/ai-company-logo.png" },
  { id: 7, name: "SecureNet", src: "/cybersecurity-logo.png" },
  { id: 8, name: "GrowthHub", src: "/business-growth-company-logo.jpg" },
];

const LogoCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [gsap, setGsap] = useState<typeof import("gsap").gsap | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  // Import the GSAPAnimation type from gsap for better type safety
  const animationRef = useRef<gsap.core.Tween | null>(null);

  // Load GSAP dynamically
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap: gsapLib } = await import("gsap");
      setGsap(gsapLib);
    };
    loadGSAP();
  }, []);

  // Duplicate logos for infinite scroll effect
  const extendedLogos = [...logos, ...logos, ...logos];

  const slideToIndex = useCallback(
    (index: number, immediate = false) => {
      if (!gsap || !trackRef.current) return;

      const slideWidth = 200;
      const containerWidth = containerRef.current?.offsetWidth || 800;
      const centerOffset = containerWidth / 2 - slideWidth / 2;
      const offset = centerOffset - index * slideWidth;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      // Reset all logos to normal state
      gsap.set(".logo-item", { scale: 1, zIndex: 1 });

      animationRef.current = gsap.to(trackRef.current, {
        x: offset,
        duration: immediate ? 0 : 0.8,
        ease: "power2.out",
        onComplete: () => {
          const centeredLogoIndex = index % extendedLogos.length;
          gsap.set(`.logo-item-${centeredLogoIndex}`, {
            scale: 4,
            zIndex: 10,
          });

          // Reset position for infinite scroll
          if (index >= logos.length * 2) {
            gsap.set(trackRef.current, {
              x: centerOffset - logos.length * slideWidth,
            });
            setCurrentIndex(logos.length);
          } else if (index < logos.length) {
            gsap.set(trackRef.current, {
              x: centerOffset - (logos.length * 2 + index) * slideWidth,
            });
            setCurrentIndex(logos.length * 2 + index);
          }
        },
      });
    },
    [gsap, trackRef, containerRef, animationRef, extendedLogos.length]
  );

  const nextSlide = useCallback(() => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    slideToIndex(newIndex);
  }, [currentIndex, slideToIndex]);

  const prevSlide = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    slideToIndex(newIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && gsap) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, gsap, nextSlide]);

  useEffect(() => {
    if (gsap && trackRef.current && containerRef.current) {
      const initialIndex = logos.length;
      setCurrentIndex(initialIndex);
      const containerWidth = containerRef.current.offsetWidth;
      const slideWidth = 200;
      const centerOffset = containerWidth / 2 - slideWidth / 2;
      gsap.set(trackRef.current, {
        x: centerOffset - initialIndex * slideWidth,
      });

      // Scale 4x immediately
      gsap.set(`.logo-item-${initialIndex}`, {
        scale: 4,
        zIndex: 10,
      });
    }
  }, [gsap]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  if (!gsap) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-full h-12 w-12 transition-all duration-300 hover:scale-110"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 text-black" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-full h-12 w-12 transition-all duration-300 hover:scale-110"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 text-black" />
      </Button>

      {/* Carousel Container */}
      <div ref={containerRef} className="relative h-32 overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center h-full"
          style={{ width: `${extendedLogos.length * 200}px` }}
        >
          {extendedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${Math.floor(index / logos.length)}`}
              className={`logo-item logo-item-${index} flex-shrink-0 w-[200px] h-full flex items-center justify-center transition-all duration-300 hover:scale-105 relative`}
            >
              <div className="relative group">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  width={500}
                  height={500}
                  alt={logo.name}
                  className="max-w-full max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
export { LogoCarousel };
