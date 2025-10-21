import Image from "next/image";

export const CareersHero = () => {
  return (
    <section className="relative min-h-[60vh] py-20 bg-white dark:bg-black text-black dark:text-white flex items-center justify-center overflow-hidden">
      <div className="absolute bg-black/70 inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760930139/A_modern_Zambian_office_space_with_black_people_collaborating_in_it__ujqjdy.png"
          alt="Careers at Barotse Highway"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bg-black/80 inset-0" />
      </div>

      <div className="container-full mx-auto px-4 lg:px-8 relative z-10 py-16">
        <div className="max-w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-6 text-balance">
            Be Part of the Team Building Zambia&apos;s Future
          </h1>
          <p className="text-lg md:text-xl text-[#868584] dark:text-white font-paragraph leading-relaxed mb-8">
            Join us in transforming infrastructure and connecting communities
            across the Western Corridor.
          </p>
          <div className="flex flex-wrap gap-8 text-center md:text-left">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                200+
              </div>
              <div className="text-sm text-white">People Working</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                35%
              </div>
              <div className="text-sm text-white">Women in Engineering</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                5
              </div>
              <div className="text-sm text-white">Languages Spoken</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
