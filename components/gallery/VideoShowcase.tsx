"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Sign in ceremony of the western corridor project",

      thumbnail:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760565943/ScreenShot_Tool_-20251016000257_encjfo.png",
      videoUrl:
        "https://res.cloudinary.com/dpeg7wc34/video/upload/v1760020925/BHL_Concession_Signing_01.12.2024_barvdy.mp4",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Video Showcase
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Watch our latest project updates and community stories
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
            >
              {/* Thumbnail View */}
              {!isPlaying && (
                <>
                  <div className="relative w-full h-[500px]">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div
                    className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="w-16 h-16 bg-[#fdb913] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-black fill-current ml-1"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 from-black/80 to-transparent p-6 text-white">
                    <span className="text-xl font-bold mb-2">
                      {video.title}
                    </span>
                  </div>
                </>
              )}

              {/* Video Player */}
              {isPlaying && (
                <div className="relative">
                  <video
                    className="w-full h-[500px] object-cover"
                    src={video.videoUrl}
                    autoPlay
                    loop
                    playsInline
                    controls
                  />
                  {/* Close button */}
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 p-3 rounded-full text-white transition-colors"
                    aria-label="Close video"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
