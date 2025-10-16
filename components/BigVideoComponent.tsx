"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

const VideoHeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scale, setScale] = useState(0.8);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the section is visible
      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const totalHeight = rect.height;
      const visibilityRatio = Math.max(
        0,
        Math.min(1, visibleHeight / totalHeight)
      );

      // Scale from 0.8 to 1 as the section comes into view
      const newScale = 0.8 + visibilityRatio * 0.2;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        {/* Background Image (blurred) */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760565943/ScreenShot_Tool_-20251016000257_encjfo.png"
            alt="Barotse Highway background"
            fill
            priority
            sizes="100vw"
            className={`object-cover transition-opacity duration-700 ${isPlaying ? "opacity-0" : "opacity-100"}`}
          />
        </div>

        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Video Player */}
        {isPlaying && (
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dpeg7wc34/video/upload/v1760020925/BHL_Concession_Signing_01.12.2024_barvdy.mp4"
              autoPlay
              loop
              playsInline
            />
            {/* Close button */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-6 right-6 z-20 bg-black/60 hover:bg-black/80 p-3 rounded-full text-white transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Play Button - kept outside scaling wrapper to maintain center position */}
      {!isPlaying && (
        <button
          onClick={() => setIsPlaying(true)}
          className="relative z-10 flex flex-col items-center gap-3 text-white group transition-all"
        >
          <span className="text-sm uppercase tracking-wide font-medium font-body">
            Play Video
          </span>
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-[#FDB913]/80 transition-all">
            <Play className="h-6 w-6 text-[#FDB913] group-hover:text-black transition-colors" />
          </div>
        </button>
      )}
    </section>
  );
};

export default VideoHeroSection;
