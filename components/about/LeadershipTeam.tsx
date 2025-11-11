"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LeadershipTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [expandedBio, setExpandedBio] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate cards with stagger
      gsap.from(".leadership-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        clearProps: "all", // Add clearProps to ensure animations don't leave styles on elements after completion
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const leaders = [
    {
      id: "ceo",
      name: "Nicolaas Marthinus Janse van Rensburg",
      title: "CEO",
      image:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_70,w_1920,c_limit/v1759885052/2_n6tp5e.png",
      shortBio:
        "Buks is an experienced entrepreneur with over 30 years of leadership in logistics, transport, and agribusiness.",
      fullBio:
        "Buks is an experienced entrepreneur with over 30 years of leadership in the logistics, transport, and agribusiness sectors. As the founder and CEO of BHL Zambia, he has grown the company from a small five-truck operation into a major transport enterprise with a fleet of 1000 trucks. Buks also co-founded Beefco Holdings Ltd, a 3000-hectare cattle ranch in Zambia, and Reinsberg Holdings AG, an offshore company in Liechtenstein.",
    },
    {
      id: "director",
      name: "Chris Dijkstra",
      title: "Director",
      image:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_70,w_1920,c_limit/v1759885059/3_sdcuxl.png",
      shortBio:
        "Chris Dijkstra is a seasoned civil engineer and project management professional with extensive infrastructure experience.",
      fullBio:
        "Chris Dijkstra is a seasoned civil engineer and project management professional with extensive experience in large-scale infrastructure, mining, and public-private partnership (PPP) projects. Holding a B.Eng. in Civil Engineering from the University of Pretoria and a Construction Management Programme certificate from Stellenbosch University, Chris has been at the forefront of engineering and project leadership for over 15 years.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-black dark:text-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-6">
            Leadership Team
          </h2>
          <p className="text-lg text-[#868584] dark:text-gray-300 font-paragraph max-w-2xl mx-auto">
            Experienced professionals driving the Western Corridor vision
          </p>
        </div>

        {/* Leader Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="leadership-card dark:bg-black border border-gray-200 dark:border-white/10 transition-all overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#EAB81E] py-4 px-6 flex items-center justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-black font-heading tracking-wider">
                  {leader.title}
                </h3>
                <div className="ml-3 w-0 h-0 border-t-12px border-t-transparent border-l-20 border-l-black border-b-12 border-b-transparent" />
              </div>

              {/* Content */}
              <div className="grid md:grid-cols-[1fr,300px] gap-6 p-6">
                {/* Text Column */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-[#EAB81E] mb-4">
                      {leader.name}
                    </h4>
                    <p className="text-[#868584] dark:text-gray-300 font-paragraph text-base leading-relaxed mb-6">
                      {expandedBio === leader.id
                        ? leader.fullBio
                        : leader.shortBio}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setExpandedBio(
                        expandedBio === leader.id ? null : leader.id
                      )
                    }
                    className="bg-[#EAB81E] text-black font-semibold py-2 px-6 hover:bg-[#d4a617] transition-colors flex items-center gap-2 w-fit"
                  >
                    {expandedBio === leader.id ? "Collapse Bio" : "Expand Bio"}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${expandedBio === leader.id ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Image Column */}
                <div className="relative h-[500px] md:h-full min-h-[400px]">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    fill
                    loading="eager"
                    placeholder="blur"
                    quality={75}
                    blurDataURL="https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_10,w_100,c_limit/v1759885059/3_sdcuxl.png"
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
