import React, { useState } from "react";
import Image from "next/image";

const CEOProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-amber-500/20 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Excellence header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-7xl font-bold text-amber-500 mb-4">
            EXCELLENCE
          </h1>
          <p className="text-gray-300 text-lg lg:text-xl max-w-4xl mx-auto">
            Experienced leadership driving Zambia&apos;s largest infrastructure
            transformation with proven expertise in logistics, engineering, and
            project management.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - Overlapping Image */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 lg:-mr-16">
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face"
                  alt="Nicolaas Marthinus Jansen van Rensburg - CEO"
                  width={500}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 rounded-lg lg:block hidden"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-500 rounded-full hidden lg:block"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-amber-500 rounded-full hidden lg:block"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-6 lg:space-y-8 order-1 lg:order-2 relative z-10">
            {/* Title with arrow */}
            <div className="relative">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                C.E.O
              </h2>
              {/* Yellow arrow pointing to name */}
              <div className="absolute -bottom-2 left-0 lg:left-8">
                <div className="w-0 h-0 border-t-[20px] border-t-amber-500 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent"></div>
              </div>
            </div>

            {/* Name badge */}
            <div className="bg-amber-500 text-black px-6 py-3 rounded-lg inline-block">
              <h3 className="text-lg lg:text-xl font-bold">
                Nicolaas Marthinus Jansen van Rensburg (Buks)
              </h3>
            </div>

            {/* Bio text */}
            <div className="space-y-4 bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg">
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                Buks is an experienced entrepreneur with over 30 years of
                leadership in the logistics, transport, and agribusiness
                sectors. As the founder and CEO of BHL Zambia, he has grown the
                company from a small five-truck operation into a major transport
                enterprise with a fleet of 1000 trucks. Buks also co-founded
                Beefco Holdings Ltd, a 3000-hectare cattle ranch in Zambia, and
                Reinsberg Holdings AG, an offshore company in Liechtenstein.
              </p>

              {isExpanded && (
                <div className="space-y-4 animate-in fade-in duration-500">
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    Under his visionary leadership, BHL Zambia has become a
                    cornerstone of Zambia&apos;s logistics infrastructure,
                    facilitating trade across the Southern African region. His
                    strategic approach to business development has created
                    thousands of jobs and contributed significantly to the
                    country&apos;s economic growth.
                  </p>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    Buks&apos;s commitment to excellence extends beyond business
                    success to encompass sustainable development practices,
                    community empowerment, and the advancement of indigenous
                    transportation capabilities throughout the region.
                  </p>
                </div>
              )}
            </div>

            {/* Expand button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-amber-500 text-black px-6 py-2 font-semibold rounded hover:bg-amber-600 transition-colors duration-300"
            >
              {isExpanded ? "Collapse Bio" : "Expand Bio"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOProfile;
