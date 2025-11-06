"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function NewsUpdatesSection() {
  const news = [
    {
      id: 1,
      title: "Major Infrastructure Milestone Reached",
      description:
        "The Barotse Highway project achieves completion of phase two, bringing modern connectivity to the region.",
      image: "/infrastructure-project-milestone.jpg",
      date: "November 2024",
    },
    {
      id: 2,
      title: "Community Impact Report Released",
      description:
        "New report highlights the positive economic and social impacts of improved road infrastructure across local communities.",
      image: "/community-infrastructure-impact.jpg",
      date: "October 2024",
    },
    {
      id: 3,
      title: "Partnership Expansion Announced",
      description:
        "Strategic partnerships with leading engineering firms strengthen project delivery and regional development initiatives.",
      image: "/business-partnership-announcement.png",
      date: "September 2024",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gray-50 dark:bg-neutral-900 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 tracking-wider uppercase mb-3">
            Latest Updates
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            News & Updates
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay informed about the latest developments and milestones in our
            infrastructure projects
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {news.map((article, index) => (
            <div
              key={article.id}
              className="group flex flex-col h-full bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-neutral-700">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col grow p-6">
                <p className="text-sm font-semibold text-[#FDDB59] mb-2">
                  {article.date}
                </p>
                <h4 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-[#FDDB59] transition-colors duration-300">
                  {article.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6 grow">
                  {article.description}
                </p>

                <Link href="/news">
                  <Button className="w-full bg-[#FDDB59] text-black dark:text-black hover:bg-[#fdb913] dark:hover:bg-[#fdb913] font-semibold rounded-none transition-all duration-300">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsUpdatesSection;
