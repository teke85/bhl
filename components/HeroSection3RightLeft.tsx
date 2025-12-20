"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, X, Maximize, Minimize } from "lucide-react";
import { cn } from "@/lib/utils";
import StickyNavigationMenu from "./StickyNavUpdated";

interface HeroCarouselProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  videoUrl?: string;
  scrollingText: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  title,
  subtitle,
  backgroundImage,
  videoUrl,
  scrollingText,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const transformationTextRef = useRef<HTMLHeadingElement>(null);

  const defaultCloudinaryVideo =
    "https://res.cloudinary.com/dpeg7wc34/video/upload/v1760020925/BHL_Concession_Signing_01.12.2024_barvdy.mp4";
  const finalVideoUrl = videoUrl || defaultCloudinaryVideo;

  // Animate scrolling TRANSFORMATION text
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

  // Animate hero text and buttons
  useEffect(() => {
    setTimeout(() => {
      [titleRef, subtitleRef, ctaRef].forEach((ref, index) => {
        if (ref.current) {
          ref.current.style.transition = `all 0.8s ease ${index * 0.2}s`;
          ref.current.style.transform = "translateY(0)";
          ref.current.style.opacity = "1";
        }
      });
    }, 300);
  }, []);

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
      <StickyNavigationMenu />
      {/* Optimized Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backgroundImage || "/placeholder.svg?height=1080&width=1920"}
          alt="Background"
          fill
          sizes="100vw"
          priority={true}
          quality={75}
          loading="eager"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMzMzIi8+PC9zdmc+"
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 from-black/40 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Scrolling TRANSFORMATION Text - Responsive sizing */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none overflow-hidden">
        <span
          ref={transformationTextRef}
          className="absolute text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-extrabold uppercase text-white/20 tracking-widest leading-none select-none whitespace-nowrap"
          style={{ top: "50%" }}
        >
          {scrollingText}
        </span>
      </div>

      {/* Hero Title & Subtitle - Mobile responsive */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-4 sm:px-6 md:px-8">
        <h1
          ref={titleRef}
          className="max-w-4xl text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight opacity-0 translate-y-[40px] drop-shadow-lg"
        >
          {title}
        </h1>
        <p
          ref={subtitleRef}
          className="max-w-2xl text-[#cfcdcb] font-body text-sm sm:text-base md:text-lg lg:text-2xl mb-6 sm:mb-8 opacity-0 translate-y-[30px] drop-shadow-md px-4"
        >
          {subtitle}
        </p>
      </div>

      {/* CTA Buttons - Mobile responsive */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-30 w-full px-4">
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center opacity-0 translate-y-[30px] max-w-md sm:max-w-none mx-auto"
        >
          {button1Text && (
            <Link href={button1Link || "#"} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#FDDB59] font-body rounded-none hover:bg-[#be9416] text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group shadow-lg"
              >
                {button1Text}
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Button>
            </Link>
          )}

          {button2Text && (
            <Button
              variant="outline"
              size="lg"
              onClick={handleOpenVideoModal}
              className="w-full sm:w-auto border-white/30 rounded-none text-white hover:bg-white/10 hover:text-white hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group bg-transparent backdrop-blur-sm shadow-lg"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 font-body mr-2 group-hover:scale-110 transition-transform duration-300" />
              {button2Text}
            </Button>
          )}
        </div>
      </div>

      {/* Video Modal - Mobile responsive */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-2 sm:p-4 backdrop-blur-sm">
          <div
            ref={modalRef}
            className={cn(
              "relative bg-black rounded-lg overflow-hidden shadow-2xl transition-all duration-300",
              isFullScreen ? "w-full h-full" : "w-full max-w-4xl aspect-video"
            )}
          >
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center space-x-2 z-10">
              <button
                onClick={handleFullscreen}
                className="p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200 backdrop-blur-sm"
                aria-label={
                  isFullScreen ? "Exit fullscreen" : "Enter fullscreen"
                }
              >
                {isFullScreen ? (
                  <Minimize className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
              <button
                onClick={handleCloseModal}
                className="p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200 backdrop-blur-sm"
                aria-label="Close video"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
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
              <source src={finalVideoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
