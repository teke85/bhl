"use client";

import React, { useState } from "react";
import Image from "next/image";

const CeoProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full py-12 sm:py-16 md:py-20 lg:py-4 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Profile Content */}
          <div className="relative flex flex-col md:flex-row items-start gap-0">
            {/* Image Container */}
            <div className="relative w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0 z-10">
              <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-gray-800 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dpeg7wc34/image/upload/q_auto:best,f_auto/v1759885052/2_n6tp5e.png"
                  alt="CEO Portrait"
                  fill
                  quality={100}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  priority
                />
              </div>
            </div>

            {/* Text Content Container with overlap */}
            <div className="relative w-full md:w-1/2 lg:w-3/5 md:-ml-8 lg:-ml-12 md:mt-12 lg:mt-2">
              {/* Position Title - C.E.O with Triangle */}
              <div className="mb-8 sm:mb-12 md:mb-5 text-center md:text-left md:pl-0 lg:pl-12">
                <h3 className="text-white font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 uppercase">
                  C.E.O
                </h3>
                <div className="flex justify-center md:justify-start">
                  <div className="w-0 h-0 border-l-[20px] sm:border-l-[25px] border-l-transparent border-r-[20px] sm:border-r-[25px] border-r-transparent border-t-[20px] sm:border-t-[25px] border-t-[#EAB81E]"></div>
                </div>
              </div>
              {/* Name Title Banner - Overlapping Image */}
              <div className="bg-[#EAB81E] px-6 sm:px-8 md:px-10 py-4 sm:py-5 mb-6 sm:mb-8 relative z-20">
                <h4 className="text-black font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  Nicolaas Marthinus Jansen van Rensburg (Buks)
                </h4>
              </div>

              {/* Bio Content Box */}
              <div className="bg-[#2a2a2a] px-6 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 relative z-10">
                <p className="text-white font-sans text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6">
                  Buks is an experienced entrepreneur with over 30 years of
                  leadership in the logistics, transport, and agribusiness
                  sectors. As the founder and CEO of BHL Zambia, he has grown
                  the company from a small five-truck operation into a major
                  transport enterprise with a fleet of 1000 trucks. Buks also
                  co-founded Beefco Holdings Ltd, a 3000-hectare cattle ranch in
                  Zambia, and Reinsberg Holdings AG, an offshore company in
                  Liechtenstein.
                </p>

                {/* Expandable Content */}
                {isExpanded && (
                  <p className="text-white font-sans text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 animate-in fade-in duration-300">
                    His strategic vision and operational expertise have been
                    instrumental in transforming regional logistics and
                    agriculture. Under his leadership, BHL Zambia has become a
                    cornerstone of infrastructure development, supporting
                    economic growth across multiple sectors. His commitment to
                    excellence and innovation continues to drive the
                    company&apos;s expansion and success in the region.
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

export default CeoProfile;
