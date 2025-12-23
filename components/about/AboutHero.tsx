"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface AboutHeroProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function AboutHero({
  title,
  description,
  image,
}: AboutHeroProps) {
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
        {image && (
          <Image
            src={image}
            alt={title || "About Hero"}
            fill
            priority
            placeholder="blur"
            blurDataURL={image}
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="container w-full mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            {title}
          </h1>
          <div
            className="text-lg md:text-xl text-white prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          />
        </div>
      </div>
    </section>
  );
}
