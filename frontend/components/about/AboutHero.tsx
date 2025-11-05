"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="h-96" />
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-background dark:bg-[#0a0a0a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1761477016/EI3A9561DRM_bbw3jo.jpg"
          alt="About western corridor limited"
          fill
          priority
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dpeg7wc34/image/upload/v1761477016/EI3A9561DRM_bbw3jo.jpg"
          quality={75}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="container w-full mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-white">
            The wider transport and PPP market in Zambia and SADC is akin to a
            vast, interconnected circulatory system. The Mutanda to Kaoma
            Project, which completes Zambia&apos;s Western Corridor, is a major
            new artery, aiming to streamline the flow of vital resources (like
            minerals) and goods to and from key regional ports. This new artery
            doesn&apos;t just replace old, inefficient routes; it integrates
            with existing and planned systems, to create a more robust and
            efficient network. The Government uses PPPs to attract private
            capital and expertise for these infrastructure projects, much like a
            city invites private developers to build and manage new districts,
            all while adhering to a master plan and strict regulations to ensure
            long-term benefits for its citizens and the broader region.
          </p>
        </div>
      </div>
    </section>
  );
}
