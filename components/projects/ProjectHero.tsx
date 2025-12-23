// const ProjectHero = () => {
//     return (
//         <section className="relative bg-[#0a0a0a] pt-32 pb-16 px-4">
//             <div className="container mx-auto max-w-7xl">
//                 <div className="space-y-6">
//                     <h1 className="text-5xl md:text-7xl font-heading font-bold text-white">Project Overview</h1>
//                     <p className="text-xl md:text-2xl font-paragraph text-[#9ca3af] max-w-4xl leading-relaxed">
//                         Rehabilitation and upgrading of 371 km Mutanda to Kaoma Road to international bituminous standards.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ProjectHero

"use client";

import Image from "next/image";

interface ProjectHeroProps {
  title?: string;
  description?: string;
  image?: string;
  subtitle?: string;
}

const ProjectHero = ({
  title,
  description,
  image,
  subtitle,
}: ProjectHeroProps) => {
  return (
    <section className="relative bg-background dark:bg-[#0a0a0a] pt-32 pb-16 px-4 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          loading="eager"
          placeholder="blur"
          blurDataURL={image}
          quality={70}
        />
        <div className="absolute inset-0 bg-black/70 dark:bg-black/80" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-[#fdb913]/10 border border-[#fdb913]/30 rounded-full backdrop-blur-sm">
            <span className="text-[#fdb913] font-paragraph font-semibold text-sm">
              {subtitle}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-paragraph text-white leading-relaxed drop-shadow-md">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
