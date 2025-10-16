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
      className="relative py-20 bg-black dark:bg-white px-4"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-32 h-[600px] w-[500px] relative rounded-none overflow-hidden">
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
                />
              </div>
            ))}
          </div>

          <div className="space-y-96">
            {items.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="min-h-[400px] flex flex-col justify-center"
              >
                <h2 className="text-4xl md:text-6xl capitalize text-white dark:text-black font-heading font-bold mb-6">
                  {item.title}
                </h2>
                <p className="text-xl font-body text-white dark:text-black leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollTriggeredImage;
