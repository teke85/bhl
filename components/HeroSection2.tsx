"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import NavigationMenu from "./NavigationMenu";
import Link from "next/link";

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  backgroundImage: string;
  description: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "TRANSFORMATION OF THE WESTERN CORRIDOR",
    subtitle:
      "Connecting Zambia's Rich Natural Resources to the Rest of the World",
    backgroundImage:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1758715606/1_vyo8lx.png",
    description: "A modern highway cutting through pristine African wilderness",
  },
  {
    id: 2,
    title: "SUSTAINABLE INFRASTRUCTURE DEVELOPMENT",
    subtitle:
      "Building Tomorrow's Connections While Preserving Today's Environment",
    backgroundImage:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1758715618/6_rf22ii.png",
    description:
      "Innovative construction methods that protect local ecosystems",
  },
  {
    id: 3,
    title: "COMMUNITY EMPOWERMENT THROUGH CONNECTIVITY",
    subtitle: "Linking Rural Communities to Economic Opportunities",
    backgroundImage:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1758719862/DJI_0594_yhmfxa.jpg",
    description: "Local communities gaining access to new opportunities",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // GSAP-like animations using CSS transitions and transforms
  useEffect(() => {
    const animateElements = () => {
      if (titleRef.current) {
        titleRef.current.style.transform = "translateX(100px)";
        titleRef.current.style.opacity = "0";
        setTimeout(() => {
          if (titleRef.current) {
            titleRef.current.style.transition =
              "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            titleRef.current.style.transform = "translateX(0)";
            titleRef.current.style.opacity = "1";
          }
        }, 100);
      }

      if (subtitleRef.current) {
        subtitleRef.current.style.transform = "translateX(80px)";
        subtitleRef.current.style.opacity = "0";
        setTimeout(() => {
          if (subtitleRef.current) {
            subtitleRef.current.style.transition =
              "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s";
            subtitleRef.current.style.transform = "translateX(0)";
            subtitleRef.current.style.opacity = "1";
          }
        }, 100);
      }

      if (ctaRef.current) {
        ctaRef.current.style.transform = "translateY(30px)";
        ctaRef.current.style.opacity = "0";
        setTimeout(() => {
          if (ctaRef.current) {
            ctaRef.current.style.transition =
              "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s";
            ctaRef.current.style.transform = "translateY(0)";
            ctaRef.current.style.opacity = "1";
          }
        }, 100);
      }
    };

    animateElements();
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-32 h-24 relative overflow-hidden backdrop-blur-sm">
                <Link href="/">
                  <Image
                    src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758461466/WhatsApp_Image_2025-08-29_at_13.11.42_ciqb2u-removebg-preview_dolid4.png"
                    alt="Company Logo"
                    width={500}
                    height={500}
                    className="object-contain w-full h-full p-1"
                    priority={true}
                    quality={100}
                  />
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <NavigationMenu />

            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-[#ad8b19] transition-all duration-300"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            </form>
          </div>
        </div>
      </nav>

      {/* Carousel Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay with Side Arrows */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto text-center text-white relative">
          {/* Content */}
          <h1
            ref={titleRef}
            className="text-4xl font-[family-name:var(--font-outfit)] mt-10 md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
          >
            {slides[currentSlide].title}
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg font-[family-name:var(--font-jost)] md:text-xl lg:text-2xl mb-12 text-pretty max-w-4xl mx-auto opacity-90"
          >
            {slides[currentSlide].subtitle}
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#EAB81E] hover:bg-[#be9416] font-[family-name:var(--font-jost)] text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              Explore Project
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30  text-white hover:bg-white/10 hover:text-white hover:border-white/50 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group bg-transparent"
            >
              <Play className="w-5 font-[family-name:var(--font-jost)] h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Watch Overview
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicators at Bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-primary scale-125"
                : "bg-[#E1AF1C] hover:bg-[#eec02b]"
            )}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-yellow-400 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
