"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search, Users, Target, Award, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "@/components/NavigationMenu";
import CEOProfile from "@/components/CeoProfile";

const About = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const stats = [
    {
      icon: Building,
      label: "Projects Completed",
      value: "500+",
      color: "text-blue-600",
    },
    {
      icon: Users,
      label: "Team Members",
      value: "250+",
      color: "text-green-600",
    },
    {
      icon: Target,
      label: "Years Experience",
      value: "25+",
      color: "text-purple-600",
    },
    {
      icon: Award,
      label: "Awards Won",
      value: "15+",
      color: "text-orange-600",
    },
  ];

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
      <div className="relative h-[60vh] min-h-[400px] md:min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="About us - Team and office background"
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
              <h2 className="text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] xl:text-[22rem] font-black text-white/10 md:text-white/25 font-[family-name:var(--font-outfit)] select-none leading-none whitespace-nowrap transform -translate-x-8 md:translate-x-0">
                ABOUT
              </h2>
            </div>

            <div className="relative z-10 pt-8 md:pt-16">
              <h1
                ref={titleRef}
                className="text-4xl text-left border-l-4 border-[#EAB81E] pl-4 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 text-white font-[family-name:var(--font-outfit)] leading-tight tracking-tight"
              >
                ABOUT US
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl font-[family-name:var(--font-jost)] leading-relaxed ml-4">
                Building Africa&apos;s infrastructure future through innovation,
                excellence, and sustainable development.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EAB81E] to-transparent opacity-60" />
      </div>

      {/* Content Section */}
      <div className="relative bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div>
              <CEOProfile />
            </div>

            <div className="relative h-64 md:h-80 lg:h-full min-h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our team working on projects"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 font-[family-name:var(--font-outfit)]">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 ${stat.color.replace("text-", "bg-")}/10 rounded-full mb-4`}
                  >
                    <stat.icon
                      className={`w-6 h-6 md:w-8 md:h-8 ${stat.color}`}
                    />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-outfit)]">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-[family-name:var(--font-jost)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12 font-[family-name:var(--font-outfit)]">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description:
                    "We strive for perfection in every project, ensuring the highest quality standards.",
                  icon: "🎯",
                },
                {
                  title: "Innovation",
                  description:
                    "Embracing cutting-edge technology and creative solutions for complex challenges.",
                  icon: "💡",
                },
                {
                  title: "Sustainability",
                  description:
                    "Building for the future while protecting our environment for generations to come.",
                  icon: "🌱",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-outfit)]">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 font-[family-name:var(--font-jost)]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
