import Image from "next/image";

interface CareersHeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
}

export const CareersHero = ({
  title,
  description,
  backgroundImage,
}: CareersHeroProps) => {
  return (
    <section className="relative min-h-[60vh] py-20 bg-white dark:bg-black text-black dark:text-white flex items-center justify-center overflow-hidden">
      <div className="absolute bg-black/70 inset-0 z-0">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt={title || "Careers Hero"}
            fill
            className="object-cover"
            priority={true}
            quality={75}
          />
        )}
        <div className="absolute bg-black/80 inset-0" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-30">
        <div className="max-w-4xl mx-auto text-center">
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
          )}
          {description && (
            <div
              className="text-lg md:text-xl text-gray-300 font-paragraph leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
      </div>
    </section>
  );
};
