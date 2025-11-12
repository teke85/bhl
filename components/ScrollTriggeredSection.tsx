"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ScrollImageItem {
  title: string;
  description: string;
  imageUrl: string;
}

const ScrollTriggeredImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const items: ScrollImageItem[] = [
    {
      title: "INFRASTRUCTURE EXCELLENCE",
      description:
        "The Western Corridor Project represents a transformative infrastructure initiative aimed at upgrading the 371 km Mutanda to Kaoma Road to international bituminous standards. Delivered under a 25-year Public-Private Partnership concession, the project includes the construction of three toll plazas, two weighbridges, upgraded bridges, and 20 km of urban roads, forming a critical trade artery between Zambia’s mineral-rich regions and the West Coast of Africa. With a phased pavement design, climate-resilient drainage systems, and electronic tolling infrastructure, the project is engineered for long-term durability, safety, and efficiency. It is strategically aligned with Zambia’s national infrastructure and economic development goals, and is expected to significantly enhance regional connectivity, reduce transport costs, and support sustainable growth across the SADC region.",
      imageUrl:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1762357419/Toll_plaza_ls71wg.jpg",
    },
    {
      title: "REGIONAL CONNECTIVITY",
      description:
        "The Western Corridor Project is a strategic infrastructure initiative that significantly enhances regional connectivity by linking Zambia’s mineral-rich Copperbelt and North-Western Provinces with the West Coast of Africa via Walvis Bay in Namibia. By upgrading the 371 km Mutanda to Kaoma Road and integrating it with key trade routes such as the Lumwana–Kambimba and Kipushi–Solwezi corridors, the project creates a seamless transport network that bypasses congested urban centres and reduces travel distances by up to 400 km for cross-border freight. This improved corridor facilitates efficient trade flows between Zambia, the Democratic Republic of Congo, Angola, Botswana, and Namibia, positioning Zambia as a pivotal logistics hub in the Southern African Development Community (SADC) region.",
      imageUrl:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_auto,w_1920,c_limit/v1762947095/DJI_0711_wiuokv.jpg",
    },
    {
      title: "COMMUNITY IMPACT",
      description:
        "Empowering local communities through inclusive development and collaboration. The Western Corridor leadership, in partnership with traditional leaders across four districts, is ensuring that the Mutanda–Kaoma Road benefits every household along its route. Through fair resettlement programs, community engagement, and sustainable economic initiatives, the project is improving livelihoods, preserving cultural heritage, and building a foundation for long-term growth.",
      imageUrl:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_auto,w_1920,c_limit/v1761107765/EI3A9507DRM_emgog7.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      contentRefs.current.forEach((ref, index) => {
        if (ref) {
          const itemTop = ref.offsetTop + sectionTop;
          const itemBottom = itemTop + ref.offsetHeight;

          if (scrollPosition >= itemTop && scrollPosition < itemBottom) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white dark:bg-black py-12 md:py-20 px-4"
    >
      <div className="container mx-auto">
        {/* Desktop Layout - Side by side with sticky image */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Sticky Image Container - Desktop */}
          <div className="lg:sticky lg:top-32 h-[500px] xl:h-[600px] w-full max-w-[500px] relative rounded-none overflow-hidden">
            {items.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 rounded-none transition-opacity duration-700 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            ))}
          </div>

          {/* Content - Desktop */}
          <div className="space-y-96">
            {items.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="min-h-[400px] flex flex-col justify-center"
              >
                <h2 className="text-4xl xl:text-6xl capitalize text-black dark:text-white font-heading font-bold mb-6">
                  {item.title}
                </h2>
                <p className="text-lg xl:text-xl font-body text-[#868584] dark:text-white leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout - Stacked cards */}
        <div className="lg:hidden space-y-8 md:space-y-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col space-y-6">
              {/* Image */}
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-none overflow-hidden">
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 500px"
                  quality={90}
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl capitalize text-black dark:text-[#cfcdcb] font-heading font-bold">
                  {item.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-body text-[#cfcdcb] dark:text-[#cfcdcb] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollTriggeredImage;
