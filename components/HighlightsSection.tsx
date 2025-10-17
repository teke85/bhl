"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    title: "CONNECTIVITY THAT DRIVES NATIONS",
    text: "The Mutanda–Kaoma Road is transforming Zambia’s Western Corridor into a modern trade artery, linking the Copperbelt and North-Western Provinces to Walvis Bay. This connection will unlock new economic frontiers, streamline logistics, and enhance regional integration across the SADC.",
    img: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760665364/assets_task_01k7qv5fyvf4w9z59md1d1nw59_1760663181_img_0_jpkeyd.webp",
    link: "/project",
    btnText: "Explore the Project",
  },
  {
    title: "EMPOWERING COMMUNITIES THROUGH INFRASTRUCTURE",
    text: "Beyond connecting regions, the Barotse Highway is building opportunities for people. From social infrastructure to improved access to markets and services, our commitment extends to every community along the route.",
    img: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760665364/assets_task_01k7qtsax5e07rk30yd0jmz51n_1760662789_img_0_kpen6d.webp",
    link: "/impact",
    btnText: "Learn About Our Impact",
  },
  {
    title: "PARTNERSHIPS BUILDING ZAMBIA’S FUTURE",
    text: "Developed under a Public-Private Partnership framework, the Barotse Highway Project brings together government, private investors, and engineering experts to deliver long-term infrastructure that drives sustainable growth.",
    img: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760665364/assets_task_01k7qtsax5e07rk30yd0jmz51n_1760662789_img_1_umbwft.webp",
    link: "/partners",
    btnText: "Meet Our Partners",
  },
];

const HighlightsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".highlight-item");

    sections.forEach((section: any) => {
      const image = section.querySelector(".highlight-image");
      const content = section.querySelector(".highlight-content");

      gsap.fromTo(
        image,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
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
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white dark:bg-black">
      {highlights.map((item, index) => (
        <div
          key={index}
          className={`highlight-item relative flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } h-[80vh]`}
        >
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-full overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="highlight-image absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Text Section */}
          <div className="highlight-content w-full md:w-1/2 flex items-center justify-center bg-black text-white px-10 py-16 md:px-16">
            <div className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {item.title}
              </h2>
              <p className="text-gray-300 mb-8">{item.text}</p>
              <Link href={item.link}>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-none px-6 py-3">
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
