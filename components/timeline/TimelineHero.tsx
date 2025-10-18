"use client";

export default function TimelineHero() {
  return (
    <section className="relative pt-32 pb-16 px-4 bg-background dark:bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=400&fit=crop"
          alt="Highway construction"
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-6">
          <h1 className="text-5xl mt-5 md:mt-10 md:text-6xl font-heading font-bold text-white dark:text-white leading-tight">
            Project Key Timelines and Milestones
          </h1>
          <p className="text-lg md:text-xl text-white dark:text-gray-400 font-paragraph max-w-2xl">
            A comprehensive timeline of the Barotse Highway development from
            inception to present day.
          </p>
        </div>
      </div>
    </section>
  );
}
