"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function PartnersCarousel() {
  const partners = [
    {
      id: 1,
      name: "BEEFCO",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759433648/BEEFCO_p8vqfh.png",
    },
    {
      id: 2,
      name: "ADVANTAGE",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430632/d77858_2003e0367fed4cd5aa6c6670acb506f7_mv2_imaqxb.avif",
    },
    {
      id: 3,
      name: "PANGAEA SECURITIES",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430587/Pangaea-Securities__qbmjbo.png",
    },
    {
      id: 4,
      name: "KONGIWE",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430583/Kongiwe-Logo-for-Header_ciq6du.png",
    },
    {
      id: 5,
      name: "HERBERT SMITH FREEHILLS",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430583/Herbert_Smith_Freehills_logo.svg_wit9u9.png",
    },
    {
      id: 6,
      name: "FIRST QUANTUM MINERALS",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430581/First_Quantum_Minerals_New_Logo.svg_ivz3bj.png",
    },
    {
      id: 7,
      name: "MAY AND COMPANY",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430582/MAY-and-Co-teal-logo-1_lcmvcw.jpg",
    },
    {
      id: 8,
      name: "dhki",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430581/dhki-e1677569611745_d61ec9.jpg",
    },
    {
      id: 9,
      name: "NYELETI",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430580/nyeleti-logo-dark-bg-star_gmqcy2.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // ✅ Auto-scroll logic
  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAutoScroll = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 2500);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = -3; i <= 3; i++) {
      const index = (currentIndex + i + partners.length) % partners.length;
      items.push({
        ...partners[index],
        position: i,
        originalIndex: index,
      });
    }
    return items;
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const handleImageClick = (position: number) => {
    if (position !== 0) {
      setCurrentIndex(
        (prev) => (prev + position + partners.length) % partners.length
      );
    }
  };

  const getScaleAndOpacity = (position: number) => {
    const absPos = Math.abs(position);
    switch (absPos) {
      case 0:
        return { scale: 1.1, opacity: 1, zIndex: 50, glow: true };
      case 1:
        return { scale: 1.0, opacity: 0.9, zIndex: 40, glow: false };
      case 2:
        return { scale: 0.85, opacity: 0.7, zIndex: 30, glow: false };
      case 3:
        return { scale: 0.7, opacity: 0.5, zIndex: 20, glow: false };
      default:
        return { scale: 0.5, opacity: 0.3, zIndex: 10, glow: false };
    }
  };

  const visibleItems = getVisibleItems();

  return (
    <div
      className="w-full bg-[#EAB81E] relative py-16"
      ref={carouselRef}
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      {/* OUR PARTNERS text */}
      <div className="absolute -top-10 left-8 flex flex-col">
        <span className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-[#EAB81E] drop-shadow-lg">
          OUR
        </span>
        <span className="text-2xl md:text-4xl lg:text-6xl font-heading font-black text-[#EAB81E] drop-shadow-lg">
          PARTNERS
        </span>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 z-50 p-2 cursor-pointer hover:scale-110 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            className="w-10 h-10"
          >
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            <path d="M20.41 7.41 19 6l-6 6 6 6 1.41-1.41L15.83 12z" />
          </svg>
        </button>

        {/* Logos */}
        <div className="relative w-full max-w-6xl h-32 flex items-center justify-center overflow-hidden">
          {visibleItems.map((partner, index) => {
            const { scale, opacity, zIndex, glow } = getScaleAndOpacity(
              partner.position
            );
            const translateX = partner.position * 140;

            return (
              <div
                key={`${partner.id}-${index}`}
                className="absolute transition-all duration-500 ease-out cursor-pointer hover:scale-105"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
                onClick={() => handleImageClick(partner.position)}
              >
                <div
                  className={`relative p-4 bg-white rounded-2xl shadow-lg ${
                    glow ? "ring-4 ring-yellow-400 ring-opacity-60" : ""
                  }`}
                >
                  <div className="w-28 h-20 flex items-center justify-center relative">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 z-50 p-2 cursor-pointer hover:scale-110 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            className="w-10 h-10"
          >
            <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            <path d="M3.59 16.59 5 18l6-6-6-6-1.41 1.41L7.17 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PartnersCarousel;
