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
        "Upgrading 371 km of the Mutanda to Kaoma Road to international bituminous standards, creating a world-class transportation corridor.",
      imageUrl:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760624479/assets_task_01k7pnv5kze3dr3f7ry9vs3k51_1760624003_img_0_byobfb.jpg",
    },
    {
      title: "REGIONAL CONNECTIVITY",
      description:
        "Connecting Zambia's Copperbelt and DRC's mining regions to the Port of Walvis Bay, facilitating international trade and economic growth.",
      imageUrl:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760623617/assets_task_01k7pm5wjwfbmsy4xs1f5z5xmy_1760622328_img_1_faz7xf.jpg",
    },
    {
      title: "COMMUNITY IMPACT",
      description:
        "Supporting local communities with comprehensive resettlement policies and creating sustainable economic opportunities across four districts.",
      imageUrl:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760621897/assets_task_01k7pk957bfxhsteth1164rt6y_1760621643_img_0_blqwef.jpg",
    },
    {
      title: "SUSTAINABLE DEVELOPMENT",
      description:
        "Building infrastructure that prioritizes environmental stewardship and long-term sustainability for future generations.",
      imageUrl:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760619949/assets_task_01k7pf3cy9fg09w2a7ej75a0ha_1760616996_img_1_l8sf2d.jpg",
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
                <p className="text-lg xl:text-xl font-body text-black dark:text-white leading-relaxed">
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
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl capitalize text-black dark:text-white font-heading font-bold">
                  {item.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-body text-black dark:text-white leading-relaxed">
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
