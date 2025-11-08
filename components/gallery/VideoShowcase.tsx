"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Play } from "lucide-react";
import { getAllVideos, getImageUrl, type VideoItem } from "@/lib/wordpress-graphql";

export default function VideoShowcase() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        console.log("🔍 Fetching videos from WordPress...");
        const data = await getAllVideos();
        console.log("✅ Videos fetched:", data);
        setVideos(data || []);
      } catch (error) {
        console.error("❌ Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <section className="py-20 md:py-32 bg-white dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#fdb913]"></div>
        </div>
      </section>
    );
  }

  if (videos.length === 0) {
    return (
      <section className="py-20 md:py-32 bg-white dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Video Showcase
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              No videos available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Video Showcase
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Watch our latest project updates and community stories
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => {
            const thumbnailUrl = getImageUrl(video);
            const isPlaying = playingVideo === video.id;

            return (
              <div
                key={video.id}
                className="relative overflow-hidden rounded-xl shadow-2xl group"
              >
                {/* Thumbnail View */}
                {!isPlaying ? (
                  <>
                    <div className="relative w-full h-[400px] lg:h-[500px]">
                      <Image
                        src={thumbnailUrl}
                        alt={video.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div
                      className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300 flex items-center justify-center cursor-pointer"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <div className="w-20 h-20 bg-[#fdb913] rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
                        <Play className="w-10 h-10 text-black fill-current ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">
                        {video.title}
                      </h3>
                    </div>
                  </>
                ) : (
                  /* Video Player */
                  <div className="relative bg-black">
                    <video
                      className="w-full h-[400px] lg:h-[500px] object-contain"
                      src={video.videoFields.videoUrl}
                      autoPlay
                      controls
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                    {/* Close button */}
                    <button
                      onClick={() => setPlayingVideo(null)}
                      className="absolute top-4 right-4 z-20 bg-black/80 hover:bg-[#fdb913] p-3 rounded-full text-white hover:text-black transition-all duration-300 shadow-xl"
                      aria-label="Close video"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}