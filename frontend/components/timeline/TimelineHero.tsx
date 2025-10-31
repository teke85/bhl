"use client";

import Image from "next/image";

export default function TimelineHero() {
  return (
    <section className="relative pt-32 pb-16 px-4 dark:bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1761799625/Kasempa_Western_ByPass-DJI_0536_qdc2db.jpg"
          alt="Western Corridor"
          className="w-full h-full object-cover opacity-70 dark:opacity-10"
          priority
          quality={75}
          fill
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl mt-5 md:mt-10 md:text-6xl font-heading font-bold text-white leading-tight">
            Project Key Timelines and Milestones
          </h1>
          <p className="text-lg md:text-xl text-white font-paragraph">
            A comprehensive timeline of the Western Corridor development from
            inception to present day.
          </p>
        </div>
      </div>
    </section>
  );
}