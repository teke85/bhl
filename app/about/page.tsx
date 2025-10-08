"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "@/components/NavigationMenu";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";

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
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start sm:justify-start items-stretch sm:items-center max-w-full sm:max-w-[24rem] relative z-10">
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

      {/* Leadership Excellence Section */}
      <div className="relative w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#EAB81E] text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 uppercase tracking-wide">
              LEADERSHIP
            </h2>
            <h3 className="text-[#EAB81E] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 md:mb-10 uppercase">
              EXCELLENCE
            </h3>
            <p className="text-white font-sans text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-full">
              Experienced leadership driving Zambia&apos;s largest
              infrastructure transformation with proven expertise in logistics,
              engineering, and project management.
            </p>
          </div>
        </div>
      </div>

      {/* CEO Profile Section */}
      <CEOProfile />
    </div>
  );
};

// CEO Profile Component
const CEOProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full bg-black py-12 sm:py-16 md:py-20 lg:py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Profile Content */}
          <div className="relative flex flex-col md:flex-row items-start gap-0">
            {/* Image Container */}
            <div className="relative w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0 z-10">
              <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-gray-800 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759885052/2_n6tp5e.png"
                  alt="CEO Portrait"
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text Content Container with overlap */}
            <div className="relative w-full md:w-1/2 lg:w-3/5 md:-ml-8 lg:-ml-12 md:mt-12 lg:mt-2">
              {/* Position Title - C.E.O with Triangle */}
              <div className="mb-8 sm:mb-12 md:mb-5 text-center md:text-left md:pl-0 lg:pl-12">
                <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 uppercase">
                  C.E.O
                </h3>
                <div className="flex justify-center md:justify-start">
                  <div className="w-0 h-0 border-l-[20px] sm:border-l-[25px] border-l-transparent border-r-[20px] sm:border-r-[25px] border-r-transparent border-t-[20px] sm:border-t-[25px] border-t-[#EAB81E]"></div>
                </div>
              </div>
              {/* Name Title Banner - Overlapping Image */}
              <div className="bg-[#EAB81E] px-6 sm:px-8 md:px-10 py-4 sm:py-5 mb-6 sm:mb-8 relative z-20">
                <h4 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  Nicolaas Marthinus Jansen van Rensburg (Buks)
                </h4>
              </div>

              {/* Bio Content Box */}
              <div className="bg-[#2a2a2a] px-6 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 relative z-10">
                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6">
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
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 animate-in fade-in duration-300">
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

export default About;
