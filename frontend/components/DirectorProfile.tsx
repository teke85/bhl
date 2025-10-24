"use client";

import React, { useState } from "react";
import Image from "next/image";

const DirectorProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full bg-black py-12 sm:py-16 md:py-20 lg:py-0 mt-8 md:mt-12 lg:mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Profile Content */}
          <div className="relative flex flex-col md:flex-row-reverse items-start gap-0">
            {/* Image Container */}
            <div className="relative w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0 z-10">
              <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-gray-800 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759885059/3_sdcuxl.png"
                  alt="Director Portrait"
                  fill
                  quality={100}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
              </div>
            </div>

            {/* Text Content Container with overlap */}
            <div className="relative w-full md:w-1/2 lg:w-3/5 md:-mr-8 lg:-mr-12 md:mt-12 lg:mt-2">
              {/* Position Title - DIRECTOR with Triangle */}
              <div className="mb-8 sm:mb-12 md:mb-5 text-center md:text-right md:pr-0 lg:pr-12">
                <h3 className="text-white font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 uppercase">
                  DIRECTOR
                </h3>
                <div className="flex justify-center md:justify-end">
                  <div className="w-0 h-0 border-l-[20px] sm:border-l-[25px] border-l-transparent border-r-[20px] sm:border-r-[25px] border-r-transparent border-t-[20px] sm:border-t-[25px] border-t-[#EAB81E]"></div>
                </div>
              </div>

              {/* Name Title Banner - Overlapping Image */}
              <div className="bg-[#EAB81E] px-6 sm:px-8 md:px-10 py-4 sm:py-5 mb-6 sm:mb-8 relative z-20">
                <h4 className="text-black font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  Chris Dijkstra
                </h4>
              </div>

              {/* Bio Content Box */}
              <div className="bg-[#2a2a2a] px-6 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 relative z-10">
                <p className="text-white font-sans text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6">
                  Chris Dijkstra is a seasoned civil engineer and project
                  management professional with extensive experience in
                  large-scale infrastructure, mining, and public-private
                  partnership (PPP) projects. Holding a B.Eng. in Civil
                  Engineering from the University of Pretoria and a Construction
                  Management Programme certificate from Stellenbosch University,
                  Chris has been at the forefront of engineering and project
                  leadership for over 15 years.
                </p>

                {/* Expandable Content */}
                {isExpanded && (
                  <p className="text-white font-sans text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 animate-in fade-in duration-300">
                    His technical expertise and strategic approach have been
                    crucial in delivering complex infrastructure projects across
                    Southern Africa. Chris&apos;s dedication to quality and
                    innovation ensures that every project meets the highest
                    standards of excellence and sustainability, driving economic
                    development and community impact.
                  </p>
                )}

                {/* Expand Bio Button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="bg-[#EAB81E] text-black font-bold px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base hover:bg-[#d4a615] transition-all duration-300 uppercase tracking-wide"
                >
                  {isExpanded ? "Collapse Bio" : "Expand Bio"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorProfile;
