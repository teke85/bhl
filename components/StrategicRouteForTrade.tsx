"use client";
import type React from "react";
import Image from "next/image";
import AnimatedChevron from "./AnimatedChevron";

const StrategicRoute: React.FC = () => {
  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 overflow-visible">
      <div className="container mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-0">
          {/* Left Column - Text Content */}
          <div className="relative z-10 bg-[#3A3A3A] p-4 sm:p-6 md:p-8 lg:p-10 xl:pr-32 w-full">
            {/* Bullet Points */}
            <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-white font-[family-name:var(--font-jost)]">
              <li className="flex items-start">
                <span className="text-white mr-2 sm:mr-3 mt-1 text-lg sm:text-xl flex-shrink-0">
                  •
                </span>
                <span className="text-sm sm:text-base md:text-lg leading-relaxed">
                  The Road will offer the fastest route linking Zambia&apos;s
                  mineral-rich Copperbelt and Northwestern Provinces in Zambia
                  to West Coast Regions of Africa.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 sm:mr-3 mt-1 text-lg sm:text-xl flex-shrink-0">
                  •
                </span>
                <span className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Acts as a gateway for trade with Angola, Botswana, Namibia,
                  and to the world.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column - Overlapping Images */}
          <div className="relative bg-[#3a3a3a] min-h-[420px] sm:min-h-[480px] md:min-h-[220px] z-20 md:-ml-20 lg:-ml-32 xl:-ml-40 mt-0">
            {/* Title */}
            <div className="relative md:absolute left-4 sm:left-6 md:left-7 top-4 md:-top-16 lg:-top-20 z-50 mb-4 md:mb-8">
              <h2 className="text-2xl font-heading md:text-4xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
                STRATEGIC ROUTE
              </h2>
              <div className="flex items-center gap-1 sm:gap-2 mt-1">
                <AnimatedChevron className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                <h2 className="text-2xl font-heading md:text-4xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
                  FOR TRADE
                </h2>
              </div>
            </div>

            {/* Top Image */}
            <div className="absolute right-4 sm:right-6 md:right-8 lg:right-10 top-24 sm:top-28 md:top-16 lg:top-20 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[420px] xl:w-[520px] h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] xl:h-[260px]">
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759927395/6_neav5t.png"
                alt="Bridge construction aerial view"
                fill
                className="object-cover shadow-2xl rounded-sm"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 340px, (max-width: 1280px) 420px, 520px"
              />
            </div>

            {/* Bottom Image */}
            <div className="absolute z-50 left-4 sm:left-6 md:-left-20 lg:-left-32 xl:-left-40 top-[240px] sm:top-[280px] md:top-[220px] lg:top-[240px] xl:top-[230px] w-[300px] sm:w-[340px] md:w-[380px] lg:w-[460px] xl:w-[520px] h-[160px] sm:h-[180px] md:h-[220px] lg:h-[240px] xl:h-[280px]">
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759927683/DJI_0577_ihxa1q.jpg"
                alt="Road construction aerial view"
                fill
                className="object-cover shadow-2xl rounded-sm"
                sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, (max-width: 1024px) 380px, (max-width: 1280px) 460px, 520px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicRoute;
