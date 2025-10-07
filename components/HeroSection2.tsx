"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play, X, Maximize, Minimize } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "./NavigationMenu";
import MobileMenu from "./MobileMenu";

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

// Video URL - Actual video
const SAMPLE_VIDEO_URL =
  "https://pangaeasecurities-my.sharepoint.com/personal/kchipati_pangaea_co_zm/_layouts/15/stream.aspx?id=%2Fpersonal%2Fkchipati%5Fpangaea%5Fco%5Fzm%2FDocuments%2FDesktop%20Work%2FFQM%20Road%2FPICS%2FBHL%20Concession%20Signing%2001%2E12%2E2024%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ecaa60ad9%2D8d78%2D4c71%2Da992%2D374637aad7e2";

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const transformationTextRef = useRef<HTMLHeadingElement>(null);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Handle slide transition with scaling effect
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Handle escape key for modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullScreen) {
          exitFullscreen();
        } else if (isVideoModalOpen) {
          handleCloseModal();
        }
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isVideoModalOpen, isFullScreen]);

  // Infinite scroll animation for TRANSFORMATION text
  useEffect(() => {
    if (!transformationTextRef.current) return;

    const element = transformationTextRef.current;
    const textWidth = element.offsetWidth;

    // Set initial position off-screen to the left
    element.style.transform = `translateY(-50%) translateX(-${textWidth}px)`;

    // Create infinite loop animation
    const animate = () => {
      const startX = -textWidth;
      const endX = window.innerWidth;
      const distance = endX - startX;
      const speed = 50; // pixels per second - adjust this to control speed
      const duration = (distance / speed) * 1000; // convert to milliseconds

      let startTime: number | null = null;

      const animateFrame = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = (elapsed / duration) % 1; // loop between 0 and 1

        const currentX = startX + distance * progress;

        if (element) {
          element.style.transform = `translateY(-50%) translateX(${currentX}px)`;
        }

        requestAnimationFrame(animateFrame);
      };

      requestAnimationFrame(animateFrame);
    };

    animate();
  }, []);

  // Content animations using CSS transitions and transforms
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
        }, 300);
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
        }, 300);
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
        }, 300);
      }
    };

    const timer = setTimeout(animateElements, 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setCurrentSlide(index);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleOpenVideoModal = () => {
    setIsVideoModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
    setIsFullScreen(false);
    document.body.style.overflow = "unset";

    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleFullscreen = () => {
    if (!modalRef.current) return;

    if (!isFullScreen) {
      if (modalRef.current.requestFullscreen) {
        modalRef.current.requestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      exitFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setIsFullScreen(false);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-4 py-4">
          {/* Search Bar Row - Above Navigation */}
          <div className="flex justify-end mb-1">
            <div className="relative z-30">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-[#ad8b19] transition-all duration-300 backdrop-blur-sm"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              </form>
            </div>
          </div>

          {/* Main Navigation Row - Three Column Layout */}
          <div className="grid grid-cols-3 items-center gap-4 h-16">
            {/* Column 1: Logo - Left */}
            <div className="relative z-50 justify-self-start">
              <div className="w-20 h-22 relative overflow-hidden">
                <Link href="/">
                  <Image
                    src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758461466/WhatsApp_Image_2025-08-29_at_13.11.42_ciqb2u-removebg-preview_dolid4.png"
                    alt="Company Logo"
                    width={500}
                    height={500}
                    className="object-contain w-full h-full"
                    priority={true}
                    quality={100}
                  />
                </Link>
              </div>
            </div>

            {/* Column 2: Navigation Menu - Center */}
            <div className="relative z-30 justify-self-center">
              <NavigationMenu />
            </div>

            {/* Column 3: Empty for Future Elements - Right */}
            <div className="relative z-30 justify-self-end">
              {/* Reserved space for future elements */}
            </div>

            {/* Mobile Menu */}
            <div className="col-span-3 md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Carousel Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
            )}
          >
            <div
              className={cn(
                "h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-out",
                index === currentSlide ? "scale-110" : "scale-100"
              )}
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                transformOrigin: "center center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        ))}
      </div>

      {/* Infinite Scrolling "TRANSFORMATION" Text */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none overflow-hidden">
        <h1
          ref={transformationTextRef}
          className="absolute text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase text-white/20 tracking-widest leading-none select-none whitespace-nowrap"
          style={{
            top: "50%",
            willChange: "transform",
          }}
        >
          TRANSFORMATION
        </h1>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="container mx-auto text-center text-white relative">
          <div className="relative z-10">
            <h1
              ref={titleRef}
              className="text-4xl font-heading mt-6 md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight drop-shadow-lg"
            >
              {slides[currentSlide].title}
            </h1>
            <p
              ref={subtitleRef}
              className="text-lg font-sans md:text-xl lg:text-2xl mb-12 text-pretty max-w-4xl mx-auto opacity-90 drop-shadow-md"
            >
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-sm",
              index === currentSlide
                ? "bg-[#EAB81E] scale-125 shadow-lg"
                : "bg-white/60 hover:bg-white/80 hover:scale-110"
            )}
          />
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-[#EAB81E] rounded-none hover:bg-[#be9416] font-[family-name:var(--font-jost)] text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group shadow-lg"
            >
              Explore Projects
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            onClick={handleOpenVideoModal}
            className="border-white/30 rounded-none text-white hover:bg-white/10 hover:text-white hover:border-white/50 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group bg-transparent backdrop-blur-sm shadow-lg"
          >
            <Play className="w-5 font-[family-name:var(--font-jost)] h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Watch Overview
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
        <div
          className="h-full bg-gradient-to-r from-[#EAB81E] to-[#be9416] transition-all duration-300 shadow-sm"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
          <div
            ref={modalRef}
            className={cn(
              "relative bg-black rounded-lg overflow-hidden shadow-2xl transition-all duration-300",
              isFullScreen ? "w-full h-full" : "w-full max-w-4xl aspect-video"
            )}
          >
            {/* Modal Controls */}
            <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
              <button
                onClick={handleFullscreen}
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200 backdrop-blur-sm"
                aria-label={
                  isFullScreen ? "Exit fullscreen" : "Enter fullscreen"
                }
              >
                {isFullScreen ? (
                  <Minimize className="w-5 h-5" />
                ) : (
                  <Maximize className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={handleCloseModal}
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200 backdrop-blur-sm"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              <source src={SAMPLE_VIDEO_URL} type="video/mp4" />
              <p className="text-white p-4">
                Your browser does not support the video element.
                <a
                  href={SAMPLE_VIDEO_URL}
                  className="text-[#EAB81E] hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download the video
                </a>
              </p>
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroCarousel;
