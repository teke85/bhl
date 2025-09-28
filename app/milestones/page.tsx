"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "@/components/NavigationMenu";

const Milestones = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Navigation Header - Reduced height */}
      <nav className="absolute top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between h-16">
            {/* Logo with higher z-index and reduced size */}
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

            {/* Navigation Links - Lower z-index */}
            <div className="relative z-30">
              <NavigationMenu />
            </div>

            {/* Search - Same z-index as nav */}
            <div className="relative z-30">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-[#ad8b19] transition-all duration-300"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              </form>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Construction and infrastructure background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center text-white relative">
            {/* Large Background Text */}
            <div className="absolute inset-0 flex items-left pointer-events-none overflow-hidden">
              <h2 className="text-[12rem] sm:text-[16rem] md:text-[20rem] lg:text-[15rem] xl:text-[10rem] font-black text-white/25 font-[family-name:var(--font-outfit)] select-none leading-none whitespace-nowrap">
                MILESTONES
              </h2>
            </div>

            {/* Main Content */}
            <div className="relative z-10 pt-16">
              {/* Page Title */}
              <h1
                ref={titleRef}
                className="text-5xl text-left border-l-4 pl-4 sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white font-[family-name:var(--font-outfit)] leading-tight tracking-tight"
              >
                MILESTONES
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EAB81E] to-transparent opacity-60" />
      </div>

      {/* Content Section - This is where your main milestone content would go */}
      <div className="relative bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-outfit)]">
              Our Journey of Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-[family-name:var(--font-jost)]">
              From our humble beginnings to becoming a leading infrastructure
              development company, each milestone represents our commitment to
              excellence, innovation, and sustainable growth across the African
              continent.
            </p>
          </div>

          {/* Placeholder for milestone content */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample milestone cards - replace with your actual content */}
            {[
              {
                year: "2025",
                title: "Expansion into New Markets",
                count: "15+",
              },
              { year: "2024", title: "Major Projects Completed", count: "50+" },
              { year: "2023", title: "Awards and Recognition", count: "8" },
            ].map((milestone, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-[#EAB81E] mb-2 font-[family-name:var(--font-outfit)]">
                  {milestone.count}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2 font-[family-name:var(--font-outfit)]">
                  {milestone.year}
                </div>
                <div className="text-gray-600 font-[family-name:var(--font-jost)]">
                  {milestone.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
