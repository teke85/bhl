// components/regional-impact/RegionalImpactHero.tsx
"use client";

import Image from "next/image";

// Define props interface
interface RegionalImpactHeroProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

export default function RegionalImpactHero({
  title = "Regional Impact",
  description = "Transforming trade flows and connectivity across the SADC region.",
  backgroundImage = "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761799600/Kasempa_Western_ByPass-DJI_0539_qdpo3f.jpg",
}: RegionalImpactHeroProps) {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-background dark:bg-[#0a0a0a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          sizes="100vw"
          priority
          quality={90}
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_10,e_blur:1000,w_10/v1759918204/DJI_0565_10000_gb099t.jpg"
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            {title}
          </h1>
          {/* Render HTML description safely */}
          <div
            className="text-lg md:text-xl text-gray-300 prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </section>
  );
}
