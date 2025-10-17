"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RegionalImpactHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-background dark:bg-[#0a0a0a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760688925/assets_task_01k7rhvvv0edyswpv0an4gz514_1760687005_img_1_wxsqvq.webp"
          alt="Regional Impact"
          fill
          sizes="100vw"
          priority // loads early for above-the-fold content
          quality={90}
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_10,e_blur:1000,w_10/v1759918204/DJI_0565_10000_gb099t.jpg"
          className="object-cover scale-110"
        />
        {/* Dark black overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 text-balance">
            Regional Impact
          </h1>
          <p className="text-lg md:text-xl text-gray-300 text-balance">
            Transforming trade flows and connectivity across the SADC region.
          </p>
        </div>
      </div>
    </section>
  );
}
