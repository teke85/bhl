"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function PartnersCarousel() {
  const partners = [
    {
      id: 1,
      name: "TechCorp",
      logo: "https://via.placeholder.com/120x80/4CAF50/white?text=TechCorp",
      color: "#4CAF50",
    },
    {
      id: 2,
      name: "BEEFCO",
      logo: "https://via.placeholder.com/120x80/8B4513/white?text=BEEFCO",
      color: "#8B4513",
    },
    {
      id: 3,
      name: "InnovateLab",
      logo: "https://via.placeholder.com/120x80/FF9800/white?text=InnovateLab",
      color: "#FF9800",
    },
    {
      id: 4,
      name: "BHL",
      logo: "https://via.placeholder.com/120x80/2E7D32/white?text=BHL",
      color: "#2E7D32",
    },
    {
      id: 5,
      name: "HealthPlus",
      logo: "https://via.placeholder.com/120x80/1976D2/white?text=HealthPlus",
      color: "#1976D2",
    },
    {
      id: 6,
      name: "EcoSystems",
      logo: "https://via.placeholder.com/120x80/00BCD4/white?text=EcoSystems",
      color: "#00BCD4",
    },
    {
      id: 7,
      name: "FutureTech",
      logo: "https://via.placeholder.com/120x80/9C27B0/white?text=FutureTech",
      color: "#9C27B0",
    },
    {
      id: 8,
      name: "GlobalCorp",
      logo: "https://via.placeholder.com/120x80/F44336/white?text=GlobalCorp",
      color: "#F44336",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleItems = () => {
    const visibleCount = 7;
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
        return { scale: 1.0, opacity: 1, zIndex: 50, glow: true };
      case 1:
        return { scale: 1.0, opacity: 0.9, zIndex: 40, glow: false };
      case 2:
        return { scale: 0.8, opacity: 0.7, zIndex: 30, glow: false };
      case 3:
        return { scale: 0.6, opacity: 0.5, zIndex: 20, glow: false };
      default:
        return { scale: 0.4, opacity: 0.3, zIndex: 10, glow: false };
    }
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="flex items-center justify-center w-full h-[300px] py-16 px-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <div className="flex flex-col px-8 py-4 font-outfit">
            <span className="text-2xl font-[family-name:var(--font-outift)] md:text-4xl lg:text-6xl font-black text-[#EAB81E] tracking-wider">
              OUR
            </span>
            <span className="text-2xl font-[family-name:var(--font-outift)] md:text-4xl lg:text-6xl font-black text-[#EAB81E] tracking-wider">
              PARTNERS
            </span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 z-60 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center">
              <ChevronLeft className="w-6 h-6 text-black" />
              <ChevronLeft className="w-6 h-6 text-black -ml-3" />
            </div>
          </button>

          {/* Images Container */}
          <div className="relative w-full max-w-6xl h-32 flex items-center justify-center overflow-hidden">
            {visibleItems.map((partner, index) => {
              const { scale, opacity, zIndex, glow } = getScaleAndOpacity(
                partner.position
              );
              const translateX = partner.position * 120; // 120px spacing

              return (
                <div
                  key={`${partner.id}-${index}`}
                  className={`absolute transition-all duration-500 ease-out cursor-pointer transform hover:scale-110 ${
                    partner.position === 0 ? "cursor-default" : "cursor-pointer"
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                  onClick={() => handleImageClick(partner.position)}
                >
                  <div
                    className={`relative bg-white p-4 shadow-xl transition-all duration-500 ${
                      glow ? "ring-4 ring-yellow-300 ring-opacity-50" : ""
                    }`}
                    style={{
                      boxShadow: glow
                        ? `0 0 30px ${partner.color}40, 0 10px 25px rgba(0,0,0,0.3)`
                        : "0 5px 15px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div className="w-24 h-16 flex items-center justify-center">
                      <div
                        className="w-full h-full rounded-lg flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: partner.color }}
                      >
                        {partner.name}
                      </div>
                    </div>

                    {/* Partner Name - Only show for center item */}
                    {partner.position === 0 && (
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <div className="bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-medium"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 z-60 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center">
              <ChevronRight className="w-6 h-6 text-black" />
              <ChevronRight className="w-6 h-6 text-black -ml-3" />
              <ChevronRight className="w-6 h-6 text-black -ml-6" />
            </div>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnersCarousel;
