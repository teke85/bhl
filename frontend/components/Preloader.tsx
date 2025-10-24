"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Wait for fade animation to complete before removing
      setTimeout(() => setIsLoading(false), 500);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          {/* Animated glow effect */}
          <div className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-amber-400/20 blur-3xl"></div>

          {/* Logo with smooth scale and float animation - more compact */}
          <div className="relative h-40 w-40 animate-[fadeInScale_1s_ease-out,float_3s_ease-in-out_infinite]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-400/30 blur-2xl"></div>
            <Image
              src="/images/buffalo-logo.png"
              alt="Loading..."
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="animate-[fadeIn_1s_ease-out_0.5s_both] text-xl font-semibold tracking-wide text-amber-900">
            Barotse Highway Limited
          </p>

          <div className="flex gap-2">
            <div className="h-2.5 w-2.5 animate-[pulse_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg [animation-delay:0s]"></div>
            <div className="h-2.5 w-2.5 animate-[pulse_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg [animation-delay:0.2s]"></div>
            <div className="h-2.5 w-2.5 animate-[pulse_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg [animation-delay:0.4s]"></div>
          </div>
        </div>

        <div className="relative w-80 overflow-hidden rounded-lg">
          {/* Road base */}
          <div className="h-16 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-700 shadow-xl">
            {/* Road surface texture */}
            <div className="h-full w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]"></div>

            {/* Yellow center line - dashed */}
            <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2">
              <div className="h-full w-full animate-[roadExpand_4s_ease-out_forwards] bg-[repeating-linear-gradient(90deg,#fbbf24_0px,#fbbf24_20px,transparent_20px,transparent_35px)] [transform:scaleX(0)] [transform-origin:left]"></div>
            </div>

            {/* White edge lines */}
            <div className="absolute left-0 top-2 h-1">
              <div className="h-full w-full animate-[roadExpand_4s_ease-out_forwards] bg-white [transform:scaleX(0)] [transform-origin:left]"></div>
            </div>
            <div className="absolute bottom-2 left-0 h-1">
              <div className="h-full w-full animate-[roadExpand_4s_ease-out_forwards] bg-white [transform:scaleX(0)] [transform-origin:left]"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes roadExpand {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}

export default Preloader;
