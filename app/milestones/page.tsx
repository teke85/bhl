"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play } from "lucide-react";

import Image from "next/image";

import Link from "next/link";
import NavigationMenu from "@/components/NavigationMenu";

function Milestones() {
  const [searchQuery, setSearchQuery] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-32 h-24 relative overflow-hidden backdrop-blur-sm">
                <Link href="/">
                  <Image
                    src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758461466/WhatsApp_Image_2025-08-29_at_13.11.42_ciqb2u-removebg-preview_dolid4.png"
                    alt="Company Logo"
                    width={500}
                    height={500}
                    className="object-contain w-full h-full p-1"
                    priority={true}
                    quality={100}
                  />
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <NavigationMenu />

            {/* Search */}
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
      </nav>

      {/* Content Overlay with Side Arrows */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto text-center text-white relative">
          {/* Content */}
          <h1
            ref={titleRef}
            className="text-4xl font-[family-name:var(--font-outfit)] mt-10 md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
          ></h1>
          <p
            ref={subtitleRef}
            className="text-lg font-[family-name:var(--font-jost)] md:text-xl lg:text-2xl mb-12 text-pretty max-w-4xl mx-auto opacity-90"
          ></p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#EAB81E] hover:bg-[#be9416] font-[family-name:var(--font-jost)] text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              Explore Project
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30  text-white hover:bg-white/10 hover:text-white hover:border-white/50 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group bg-transparent"
            >
              <Play className="w-5 font-[family-name:var(--font-jost)] h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Watch Overview
            </Button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20"></div>
    </div>
  );
}

export default Milestones;
