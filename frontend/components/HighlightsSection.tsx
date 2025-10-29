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
    title: "CONNECTING COMMUNITIES THROUGH LEADERSHIP AND COMMITMENT",
    text: "The Western Corridor leadership has reaffirmed its commitment to the successful delivery of the Mutanda–Kaoma Road, a vital link in Zambia’s Barotse Highway network. Through strong collaboration with government and development partners, this project aims to uplift communities, enhance regional trade, and improve access to essential services. The renewed dedication of local leadership reflects a shared vision — to create lasting infrastructure that strengthens economic growth, empowers rural areas, and unites Zambia through reliable connectivity.",
    img: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761481328/EI3A9529DRM_exisuy.jpg",
    link: "/about",
    btnText: "Explore the Project",
  },
  {
    title: "CONNECTING ZAMBIA THROUGH GOVERNMENT-LED INFRASTRUCTURE",
    text: "The Government of the Republic of Zambia continues to play a vital role in national development through transformative road projects like the Mutanda Road. This strategic initiative strengthens regional connectivity, supports local trade, and improves access to essential services. By partnering with key stakeholders, the government is ensuring that every community along the route benefits from enhanced mobility and economic opportunity.",
    img: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761481327/EI3A9515DRM_yzoiit.jpg",
    link: "/projects",
    btnText: "Learn About the PPP",
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
          <div className="highlight-content w-full min-h-[750px] md:min-h-[90vh] lg:min-h-[95vh] md:w-1/2 flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6 py-12 sm:px-10 sm:py-16 md:px-0">
            <div className="max-w-md w-full">
              <h2 className="text-black dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base font-paragraph text-[#868584] dark:text-white mb-6 sm:mb-8 leading-relaxed">
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
