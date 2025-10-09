"use client";
import type React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const StrategicRoute: React.FC = () => {
  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center py-16 overflow-hidden">
      <div className="container mx-auto md:max-w-8xl grid grid-cols-1 md:grid-cols-2 px-4 md:px-8">
        {/* Left Column - Text Content */}
        <div className="relative z-10 bg-[#3a3a3a] p-8 md:p-12 lg:p-16 max-w-2xl md:max-w-4xl shadow-lg">
          {/* Bullet Points */}
          <ul className="space-y-5 text-white font-[family-name:var(--font-jost)]">
            <li className="flex items-start">
              <span className="text-white mr-3 mt-1 text-xl">•</span>
              <span className="text-base md:text-lg leading-relaxed">
                The Road will offer the fastest route linking Zambia&apos;s
                mineral-rich Copperbelt and Northwestern Provinces in Zambia to
                West Coast Regions of Africa.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3 mt-1 text-xl">•</span>
              <span className="text-base md:text-lg leading-relaxed">
                Acts as a gateway for trade with Angola, Botswana, Namibia, and
                to the world.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column - Overlapping Images */}
        <div className="relative bg-[#3a3a3a] flex flex-col z-20 md:-ml-40 lg:-ml-18 mt-8 md:mt-0">
          {/* Title */}
          <div className="absolute left-7 -top-20 z-50 mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight font-[family-name:var(--font-outfit)]">
              STRATEGIC ROUTE
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <ChevronDown
                className="w-8 h-8 md:w-10 md:h-10 text-white"
                strokeWidth={3}
              />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight font-[family-name:var(--font-outfit)]">
                FOR TRADE
              </h2>
            </div>
          </div>

          {/* Top Image - Smaller */}
          <div className="absolute right-10 top-20 w-[340px] md:w-[400px] lg:w-[560px] h-[180px] md:h-[220px] lg:h-[350px] mb-6">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759927395/6_neav5t.png"
              alt="Bridge construction aerial view"
              fill
              className="object-cover shadow-2xl rounded-sm"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Bottom Image - Larger */}
          <div className="absolute -left-50 top-60 z-40 w-[380px] md:w-[480px] lg:w-[540px] h-[220px] md:h-[260px] lg:h-[300px]">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759927683/DJI_0577_ihxa1q.jpg"
              alt="Road construction aerial view"
              fill
              className="object-cover shadow-2xl rounded-sm"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicRoute;
