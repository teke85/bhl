import React from "react";

const Careers = () => {
  return (
    <div className="relative w-full bg-[#D7A808] py-16 sm:py-20 md:py-24 lg:py-22">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Content with vertical alignment similar to screenshot */}
          <div className="">
            <span className="absolute -top-13 font-heading left-0 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 uppercase tracking-tight text-left">
              CAREERS
            </span>
            <div className="mt-4">
              <p className="text-white font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-2xl">
                Explore career opportunities and be part of Zambia&apos;s
                transformational infrastructure journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
