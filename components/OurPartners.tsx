"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function PartnersCarousel() {
  const partners = [
    {
      id: 1,
      name: "FIRST QUANTUM MINERALS",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430581/First_Quantum_Minerals_New_Logo.svg_ivz3bj.png",
    },
    {
      id: 2,
      name: "BEEFCO",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1762357921/Beefco_iarvhw.jpg",
    },

    {
      id: 3,
      name: "HOTSHEET PROJECT MANAGERS",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1762393622/Hotsheet_logo_hz645n.jpg",
    },
    {
      id: 4,
      name: "PANGAEA SECURITIES",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430587/Pangaea-Securities__qbmjbo.png",
    },
    {
      id: 5,
      name: "HERBERT SMITH FREEHILLS KRAMER",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430583/Herbert_Smith_Freehills_logo.svg_wit9u9.png",
    },
    {
      id: 6,
      name: "MAY AND CO",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430582/MAY-and-Co-teal-logo-1_lcmvcw.jpg",
    },
    {
      id: 7,
      name: "NYELETI",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1762950469/Nyeleti_Logo_wpojak.jpg",
    },
    {
      id: 8,
      name: "KONGIWE",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430583/Kongiwe-Logo-for-Header_ciq6du.png",
    },
    {
      id: 9,
      name: "DH Engineering Consultants",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430581/dhki-e1677569611745_d61ec9.jpg",
    },
    {
      id: 10,
      name: "Brian Colquhoun, Hugh O'Donnell & Partners (BCHOD)",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1762425986/BCHOD_col4d9.jpg",
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
      className="w-full bg-white dark:bg-black py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#868584] dark:text-white tracking-wider uppercase mb-3">
            Trusted By
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Our Partners
          </h3>
          <p className="text-lg text-[#868584] dark:text-white max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional
            infrastructure solutions
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="group relative"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <div className="relative h-32 flex items-center justify-center p-6 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1">
                <div className="relative w-full h-full md:grayscale md:group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-xs font-medium text-gray-600 whitespace-nowrap bg-white px-3 py-1 rounded-full shadow-sm">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/partners"
            className="inline-flex items-center gap-2 px-12 py-3 rounded-none bg-[#FDDB59] text-black dark:text-black font-semibold hover:bg-[#fdb913] dark:hover:bg-[#fdb913] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Read More
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PartnersCarousel;
