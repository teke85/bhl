import Image from "next/image";

export const CareersHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-office-space-with-people-collaborating-in-z.jpg"
          alt="Careers at Barotse Highway"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Be Part of the Team Building Zambia&apos;s Future
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Join us in transforming infrastructure and connecting communities
            across the Western Corridor.
          </p>
          <div className="flex flex-wrap gap-8 text-center md:text-left">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                200+
              </div>
              <div className="text-sm text-muted-foreground">
                People Working
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                35%
              </div>
              <div className="text-sm text-muted-foreground">
                Women in Engineering
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                5
              </div>
              <div className="text-sm text-muted-foreground">
                Languages Spoken
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
