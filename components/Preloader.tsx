"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const bullRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const companyNameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Slide out the preloader after animation completes
          gsap.to(preloaderRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
            onComplete: () => setIsLoading(false),
          });
        },
      });

      tl.from(bullRef.current, {
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      })
        .to(bullRef.current, {
          scale: 1.1,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        })
        .from(
          companyNameRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          {},
          {
            duration: 0.5,
          }
        ); // Pause before exit
    });

    return () => ctx.revert();
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"
    >
      <div ref={bullRef} className="mb-6">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759502092/Lucid_Origin_I_need_you_to_find_me_a_creative_image_of_a_bull__1_2_dumwpa.jpg"
          alt="Barotse Highway Limited Bull Logo"
          width={250}
          height={250}
          priority
          className="rounded-2xl shadow-2xl"
        />
      </div>

      <h1
        ref={companyNameRef}
        className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 text-center px-4"
      >
        Barotse Highway Limited
      </h1>

      {/* Loading Text */}
      <div ref={textRef} className="text-center">
        <h2 className="text-xl font-semibold text-orange-600 mb-3">
          Loading...
        </h2>
        <div className="flex gap-2 justify-center">
          <div
            className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}
