"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, DollarSign, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "@/components/NavigationMenu";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const projects = [
    {
      title: "Walvis Bay Corridor Highway",
      description:
        "A revolutionary 450km highway connecting Zambia's mining regions to Namibia's Walvis Bay port.",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Zambia - Namibia",
      duration: "2022 - 2025",
      value: "$2.1B",
      status: "In Progress",
      category: "Transportation",
    },
    {
      title: "Lusaka Urban Development",
      description:
        "Modern urban infrastructure development including roads, water systems, and commercial spaces.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Lusaka, Zambia",
      duration: "2023 - 2026",
      value: "$850M",
      status: "In Progress",
      category: "Urban Development",
    },
    {
      title: "Kafue River Bridge",
      description:
        "A state-of-the-art suspension bridge spanning the Kafue River, connecting rural communities.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Kafue, Zambia",
      duration: "2021 - 2024",
      value: "$180M",
      status: "Completed",
      category: "Infrastructure",
    },
  ];

  const categories = [
    "All",
    "Transportation",
    "Urban Development",
    "Infrastructure",
    "Energy",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

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
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Construction projects and infrastructure"
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
              <h2 className="text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] xl:text-[14rem] font-black text-white/10 md:text-white/25 font-[family-name:var(--font-outfit)] select-none leading-none whitespace-nowrap transform -translate-x-8 md:translate-x-0">
                PROJECTS
              </h2>
            </div>

            <div className="relative z-10 pt-8 md:pt-16">
              <h1
                ref={titleRef}
                className="text-4xl text-left border-l-4 border-[#EAB81E] pl-4 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 text-white font-[family-name:var(--font-outfit)] leading-tight tracking-tight"
              >
                PROJECTS
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl font-[family-name:var(--font-jost)] leading-relaxed ml-4">
                Transforming landscapes and connecting communities through
                world-class infrastructure projects.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EAB81E] to-transparent opacity-60" />
      </div>

      {/* Content Section */}
      <div className="relative bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Filter Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 font-[family-name:var(--font-outfit)]">
              Our Portfolio
            </h2>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#EAB81E] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 md:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-outfit)]">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-[family-name:var(--font-jost)]">
                    {project.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-[#EAB81E]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-[#EAB81E]" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-2 text-[#EAB81E]" />
                      <span>{project.value}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="mt-16 bg-[#EAB81E]/5 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 font-[family-name:var(--font-outfit)]">
              Project Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { label: "Active Projects", value: "45+", icon: Users },
                { label: "Countries", value: "8", icon: MapPin },
                { label: "Investment Value", value: "$12B+", icon: DollarSign },
                { label: "Jobs Created", value: "50K+", icon: Users },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#EAB81E]/20 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-[#EAB81E]" />
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
