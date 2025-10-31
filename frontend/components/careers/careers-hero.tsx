import Image from "next/image";

export const CareersHero = () => {
  return (
    <section className="relative min-h-[60vh] py-20 bg-white dark:bg-black text-black dark:text-white flex items-center justify-center overflow-hidden">
      <div className="absolute bg-black/70 inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1761799061/KasempaToll_WB_Area-DJI_0577_cs1c5k.jpg"
          alt="Careers at Western Corridor Limited"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bg-black/80 inset-0" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Be Part of the Team Building Zambia&apos;s Future
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-paragraph leading-relaxed mb-8">
            Join us in transforming infrastructure and connecting communities
            across the Western Corridor.
          </p>
        </div>
      </div>
    </section>
  );
};