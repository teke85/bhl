"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "@/components/NavigationMenu";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import LeadershipExcellence from "@/components/LeadershipExcellence";

import DirectorProfile from "@/components/DirectorProfile";
import StrategicPartnerships from "@/components/StrategicPartnerships";
import CEOProfile from "@/components/CeoProfile";
import GetInTouch from "@/components/GetInTouch";
import { Footer } from "@/components/Footer";

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
      <nav className="absolute top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-4 py-4">
          {/* Search Bar Row - Above Navigation */}
          <div className="flex justify-end mb-1">
            <div className="relative z-30">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 sm:w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-[#ad8b19] transition-all duration-300 backdrop-blur-sm"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              </form>
            </div>
          </div>

          {/* Main Navigation Row - Three Column Layout */}
          <div className="grid grid-cols-3 items-center gap-2 sm:gap-4 h-16">
            {/* Column 1: Logo - Left */}
            <div className="relative z-50 justify-self-start">
              <div className="w-14 h-16 sm:w-20 sm:h-22 relative overflow-hidden">
                <Link href="/">
                  <Image
                    src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759852662/Logo_b0ski3.png"
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

            {/* Column 2: Navigation Menu - Center */}
            <div className="relative z-30 justify-self-center hidden md:block">
              <NavigationMenu />
            </div>

            {/* Column 3: Empty for Future Elements - Right */}
            <div className="relative z-30 justify-self-end">
              {/* Reserved space for future elements */}
            </div>

            {/* Mobile Menu */}
            <div className="col-span-3 md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="relative h-[100vh] min-h-[500px] md:min-h-[600px] w-full overflow-hidden">
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

        <div className="relative z-10 flex items-center justify-center h-full pt-24 md:pt-0">
          <div className="container mx-auto px-4 text-white relative">
            {/* Large Background Text - Positioned above the title */}
            <div className="absolute top-[180px] sm:top-[220px] md:top-[250px] -translate-y-1/2 left-0 pointer-events-none overflow-hidden w-full">
              <h2 className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] xl:text-[18rem] font-black text-white/10 md:text-white/20 font-[family-name:var(--font-outfit)] select-none leading-none whitespace-nowrap transform -translate-y-8 sm:-translate-y-12 md:-translate-y-16 lg:-translate-y-20 pl-4 sm:pl-12 md:pl-25">
                ABOUT
              </h2>
            </div>

            {/* Content Container with Vertical Divider */}
            <div className="relative flex items-start pt-4 sm:pt-8 md:pt-28">
              {/* Vertical Divider */}
              <div className="absolute left-0 top-16 sm:top-24 md:top-30 bottom-0 w-1 sm:w-2 h-[50%] sm:h-[60%] bg-white"></div>

              <div className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 mt-6 sm:mt-10">
                <h1
                  ref={titleRef}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-3 sm:mb-4 text-white tracking-tight relative z-10"
                >
                  ABOUT US
                </h1>

                <div className="relative">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-white max-w-full font-sans mb-6 sm:mb-8 relative z-10">
                    Barotse Highway Limited is a Special Purpose Vehicle (SPV)
                    that was incorporated as a separate legal entity by BeefCo
                    Holdings Limited (BeefCo) and First Quantum Minerals
                    Operations Limited (FQMOL) for the purpose of executing this
                    project. The Road Project stretches 371-kilometres from
                    Mutanda to Kaoma and will be implemented over a 25-year
                    concession period, with two years for construction, and 23
                    years for operations and maintenance.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col mx-auto sm:flex-row gap-3 sm:gap-4 justify-start sm:justify-start items-stretch sm:items-center max-w-full sm:max-w-[24rem] relative z-10">
                    <Link href="/projects" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-[#EAB81E]/20 rounded-none text-white hover:bg-[#EAB81E] font-sans font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg min-w-[160px] sm:min-w-[180px]"
                      >
                        Discover More
                      </Button>
                    </Link>

                    <Link href="/projects" className="w-full sm:w-auto">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto bg-[#EAB81E]/20 rounded-none border-0 hover:bg-[#EAB81E] font-sans text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg min-w-[160px] sm:min-w-[180px]"
                      >
                        Explore Project
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Imported Components */}
      <LeadershipExcellence />
      <CEOProfile />
      <DirectorProfile />
      <StrategicPartnerships />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default About;
