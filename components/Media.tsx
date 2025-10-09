"use client";
import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const Media = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full py-16 sm:py-20 bg-black md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <span className="absolute -top-9 left-0 md:pl-24 text-white text-2xl md:text-4xl lg:text-7xl tracking-tight font-heading font-bold uppercase mb-12">
            MULTIMEDIA
          </span>

          {/* Video */}
          <div className="relative w-full max-h-[50vh] mx-auto overflow-hidden shadow-lg border border-white/20">
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/dpeg7wc34/video/upload/v1760020925/BHL_Concession_Signing_01.12.2024_barvdy.mp4"
              className="w-full h-auto"
              playsInline
              preload="metadata"
            />
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition duration-300"
            >
              {isPlaying ? (
                <Pause size={64} className="text-white" />
              ) : (
                <Play size={64} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
