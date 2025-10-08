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

const STATIC_SLIDE = {
  title: "TRANSFORMATION OF THE WESTERN CORRIDOR",
  subtitle:
    "Connecting Zambia's Rich Natural Resources to the Rest of the World",
  backgroundImage:
    "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759918204/DJI_0565_10000_gb099t.jpg",
};

const SAMPLE_VIDEO_URL =
  "https://pangaeasecurities-my.sharepoint.com/personal/kchipati_pangaea_co_zm/_layouts/15/stream.aspx?id=%2Fpersonal%2Fkchipati%5Fpangaea%5Fco%5Fzm%2FDocuments%2FDesktop%20Work%2FFQM%20Road%2FPICS%2FBHL%20Concession%20Signing%2001%2E12%2E2024%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ecaa60ad9%2D8d78%2D4c71%2Da992%2D374637aad7e2";

function HeroCarousel() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const transformationTextRef = useRef<HTMLHeadingElement>(null);

  // Infinite scroll animation for TRANSFORMATION text - RIGHT TO LEFT
  useEffect(() => {
    if (!transformationTextRef.current) return;

    const element = transformationTextRef.current;
    const textWidth = element.offsetWidth;
    element.style.transform = `translateY(-50%) translateX(${window.innerWidth}px)`;

    const animate = () => {
      const startX = window.innerWidth;
      const endX = -textWidth;
      const distance = Math.abs(endX - startX);
      const speed = 50;
      const duration = (distance / speed) * 1000;

      let startTime: number | null = null;

      const animateFrame = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = (elapsed / duration) % 1;
        const currentX = startX - distance * progress;
        element.style.transform = `translateY(-50%) translateX(${currentX}px)`;
        requestAnimationFrame(animateFrame);
      };

      requestAnimationFrame(animateFrame);
    };

    animate();
  }, []);

  // Animate text & buttons on mount
  useEffect(() => {
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.transition = "all 0.8s ease";
        titleRef.current.style.transform = "translateX(0)";
        titleRef.current.style.opacity = "1";
      }
      if (subtitleRef.current) {
        subtitleRef.current.style.transition = "all 0.8s ease 0.2s";
        subtitleRef.current.style.transform = "translateX(0)";
        subtitleRef.current.style.opacity = "1";
      }
      if (ctaRef.current) {
        ctaRef.current.style.transition = "all 0.6s ease 0.4s";
        ctaRef.current.style.transform = "translateY(0)";
        ctaRef.current.style.opacity = "1";
      }
    }, 300);
  }, []);

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
    videoRef.current?.pause();
  };

  const handleFullscreen = () => {
    if (!modalRef.current) return;
    if (!isFullScreen) {
      modalRef.current.requestFullscreen?.();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-4 py-4">
          {/* Search Bar */}
          <div className="flex justify-end mb-1">
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

          {/* Logo + Navigation */}
          <div className="grid grid-cols-3 items-center gap-4 h-16">
            <div className="relative z-50 justify-self-start">
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759852662/Logo_b0ski3.png"
                  alt="Company Logo"
                  width={500}
                  height={500}
                  className="object-contain w-20 h-22"
                  priority
                />
              </Link>
            </div>

            <div className="relative z-30 justify-self-center">
              <NavigationMenu />
            </div>

            <div className="relative z-30 justify-self-end" />
            <div className="col-span-3 md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Static Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${STATIC_SLIDE.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Scrolling TRANSFORMATION text */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none overflow-hidden">
        <h1
          ref={transformationTextRef}
          className="absolute text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase text-white/20 tracking-widest leading-none select-none whitespace-nowrap"
          style={{ top: "50%" }}
        >
          TRANSFORMATION
        </h1>
      </div>

      {/* Title & Subtitle */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="container mx-auto text-center text-white relative">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 translate-x-[100px] drop-shadow-lg"
          >
            {STATIC_SLIDE.title}
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto opacity-0 translate-x-[80px] drop-shadow-md"
          >
            {STATIC_SLIDE.subtitle}
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-30">
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 translate-y-[30px]"
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
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Watch Overview
          </Button>
        </div>
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
            <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
              <button
                onClick={handleFullscreen}
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200 backdrop-blur-sm"
              >
                {isFullScreen ? <Minimize /> : <Maximize />}
              </button>
              <button
                onClick={handleCloseModal}
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200 backdrop-blur-sm"
              >
                <X />
              </button>
            </div>

            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              <source src={SAMPLE_VIDEO_URL} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroCarousel;
