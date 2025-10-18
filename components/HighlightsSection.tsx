"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    title: "CONNECTIVITY THAT DRIVES NATIONS",
    text: "The Mutanda–Kaoma Road is transforming Zambia's Western Corridor into a modern trade artery, linking the Copperbelt and North-Western Provinces to Walvis Bay. This connection will unlock new economic frontiers, streamline logistics, and enhance regional integration across the SADC.",
    img: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760807367/assets_task_01k7qv5fyvf4w9z59md1d1nw59_1760663181_img_1_y5zbj4.webp",
    link: "/projects",
    btnText: "Explore the Project",
  },
  {
    title: "EMPOWERING COMMUNITIES THROUGH INFRASTRUCTURE",
    text: "Beyond connecting regions, the Barotse Highway is building opportunities for people. From social infrastructure to improved access to markets and services, our commitment extends to every community along the route.",
    img: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760665364/assets_task_01k7qtsax5e07rk30yd0jmz51n_1760662789_img_0_kpen6d.webp",
    link: "/regional-impact",
    btnText: "Learn About Our Impact",
  },
];

const HighlightsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".highlight-item");

    sections.forEach((section) => {
      const el = section as HTMLElement;
      const image = el.querySelector<HTMLElement>(".highlight-image");
      const content = el.querySelector<HTMLElement>(".highlight-content");

      gsap.fromTo(
        image,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        content,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full">
      {highlights.map((item, index) => (
        <div
          key={index}
          className={`highlight-item relative flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } min-h-[600px] md:h-[80vh]`}
        >
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-full overflow-hidden">
            <Image
              src={item.img || "/placeholder.svg"}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              priority={index === 0}
              className="highlight-image object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Text Section */}
          <div className="highlight-content w-full md:w-1/2 flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6 py-12 sm:px-10 sm:py-16 md:px-16">
            <div className="max-w-md w-full">
              <h2 className="text-2xl sm:text-3xl text-black dark:text-white md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base text-black dark:text-white mb-6 sm:mb-8 leading-relaxed">
                {item.text}
              </p>
              <Link href={item.link}>
                <Button className="bg-yellow-500 rounded-none hover:bg-yellow-600 text-black font-semibold px-6 py-3 text-sm sm:text-base">
                  {item.btnText} →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HighlightsSection;
