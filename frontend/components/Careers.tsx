import React from "react";
import Image from "next/image";
import BlueArrow from "./BlueArrow";

const Careers = () => {
  return (
    <div
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-22 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(215,168,8,0.95), rgba(215,168,8,0.75)), url('https://res.cloudinary.com/dpeg7wc34/image/upload/v1759927483/2_anu0b2.png')`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative">
          {/* Heading */}
          <span className="absolute font-extrabold font-heading -top-40 text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-6">
            CAREERS
          </span>

          {/* Paragraph + Arrow */}
          <div className="flex items-center gap-4 mt-4 w-full">
            <p className="text-white font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-2xl">
              Explore career opportunities and be part of Zambia&apos;s
              transformational infrastructure journey.
            </p>

            <BlueArrow width={300} height={80} color="#007BFF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
