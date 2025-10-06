"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "@/components/NavigationMenu";
import { Button } from "@/components/ui/button";

const About = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between h-16">
            <div className="relative z-50">
              <div className="w-20 h-22 relative overflow-hidden">
                <Link href="/">
                  <Image
                    src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758461466/WhatsApp_Image_2025-08-29_at_13.11.42_ciqb2u-removebg-preview_dolid4.png"
                    alt="Company Logo"
                    width={500}
                    height={500}
                    className="object-contain w-full h-full"
                    priority={true}
                    quality={100}
                  />
                </Link>
              </div>
            </div>

            <div className="relative z-30 hidden md:block">
              <NavigationMenu />
            </div>

            <div className="relative z-30 hidden sm:block">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 md:w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-[#ad8b19] transition-all duration-300"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              </form>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[400px] md:h-full w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759715557/DJI_0447_dd75q0.jpg"
            alt="About us"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-white relative">
            {/* Large Background Text - Responsive */}
            <div className="absolute inset-0 flex items-center justify-start pointer-events-none overflow-hidden">
              <h2 className="text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] xl:text-[16rem] font-black text-white/10 md:text-white/25 font-[family-name:var(--font-outfit)] select-none leading-none whitespace-nowrap transform -translate-x-8 md:translate-x-0">
                ABOUT
              </h2>
            </div>

            <div className="relative z-10 pt-8 md:pt-28">
              <h1
                ref={titleRef}
                className="text-4xl text-left border-l-4 border-[#EAB81E] pl-4 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 text-white font-[family-name:var(--font-outfit)] leading-tight tracking-tight"
              >
                ABOUT US
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-7xl font-[family-name:var(--font-jost)] leading-relaxed ml-4 mb-8">
                Barotse Highway Limited is a Special Purpose Vehicle (SPV) that
                was incorporated as a separate legal entity by BeefCo Holdings
                Limited (BeefCo) and First Quantum Minerals Operations Limited
                (FQMOL) for the purpose of executing this project. The Road
                Project stretches 371-kilometres from Mutanda to Kaoma and will
                be implemented over a 25-year concession period, with two years
                for construction, and 23 years for operations and maintenance.
              </p>

              {/* CTA Buttons - Positioned after the paragraph */}
              <div className="flex flex-col sm:flex-row gap-4 ml-4 justify-center">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-[#EAB81E] rounded-none hover:bg-[#be9416] font-[family-name:var(--font-jost)] text-black font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg min-w-[180px]"
                  >
                    Discover More
                  </Button>
                </Link>

                <Link href="/projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-none text-black bg-[#EAB81E] hover:bg-[#e0af1d] hover:text-black font-sans px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg min-w-[180px]"
                  >
                    Explore Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EAB81E] to-transparent opacity-60" />
      </div>
    </div>
  );
};

export default About;
