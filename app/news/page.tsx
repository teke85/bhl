"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "@/components/NavigationMenu";

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const newsArticles = [
    {
      title: "Walvis Bay Corridor Project Reaches Major Milestone",
      excerpt:
        "The ambitious 450km highway project connecting Zambia to Namibia's Walvis Bay port has successfully completed its first phase, marking a significant step toward regional economic integration.",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2025",
      author: "Sarah Johnson",
      category: "Projects",
      readTime: "5 min read",
    },
    {
      title: "Sustainable Construction: Our Green Initiative Success",
      excerpt:
        "Our commitment to environmental responsibility has led to a 40% reduction in carbon emissions across all current projects, setting new industry standards for sustainable construction.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 12, 2025",
      author: "Michael Chen",
      category: "Sustainability",
      readTime: "4 min read",
    },
    {
      title: "Partnership with African Development Bank Announced",
      excerpt:
        "A groundbreaking $2.5 billion partnership will fund infrastructure development across five African nations, focusing on transportation and energy projects over the next decade.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2025",
      author: "David Mwanza",
      category: "Partnerships",
      readTime: "6 min read",
    },
    {
      title: "Innovation Lab Unveils Smart Bridge Technology",
      excerpt:
        "Our latest technological breakthrough incorporates IoT sensors and AI monitoring systems into bridge construction, revolutionizing infrastructure maintenance and safety protocols.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 8, 2025",
      author: "Dr. Amanda Torres",
      category: "Innovation",
      readTime: "7 min read",
    },
    {
      title: "Community Impact: 10,000 Jobs Created This Quarter",
      excerpt:
        "Our ongoing projects have generated over 10,000 direct and indirect employment opportunities, significantly contributing to local economic development and skill building programs.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2025",
      author: "Grace Kabwe",
      category: "Community",
      readTime: "3 min read",
    },
    {
      title: "Award Recognition: African Infrastructure Excellence",
      excerpt:
        "We are honored to receive the African Infrastructure Excellence Award for our outstanding contribution to regional development and innovative construction methodologies.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 1, 2025",
      author: "Robert Phiri",
      category: "Awards",
      readTime: "4 min read",
    },
  ];

  const categories = [
    "All",
    "Projects",
    "Sustainability",
    "Partnerships",
    "Innovation",
    "Community",
    "Awards",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === activeCategory);

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
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="News and media background"
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
              <h2 className="text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] xl:text-[18rem] font-black text-white/10 md:text-white/25 font-[family-name:var(--font-outfit)] select-none leading-none whitespace-nowrap transform -translate-x-8 md:translate-x-0">
                NEWS
              </h2>
            </div>

            <div className="relative z-10 pt-8 md:pt-16">
              <h1
                ref={titleRef}
                className="text-4xl text-left border-l-4 border-[#EAB81E] pl-4 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 text-white font-[family-name:var(--font-outfit)] leading-tight tracking-tight"
              >
                NEWS
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl font-[family-name:var(--font-jost)] leading-relaxed ml-4">
                Stay updated with our latest developments, achievements, and
                industry insights.
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
              Latest Updates
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

          {/* Featured Article */}
          {filteredArticles.length > 0 && (
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-gray-50 rounded-2xl overflow-hidden">
                <div className="relative h-64 md:h-80 lg:h-full min-h-[300px]">
                  <Image
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="px-3 py-1 bg-[#EAB81E]/20 text-[#EAB81E] rounded-full font-medium">
                      {filteredArticles[0].category}
                    </span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {filteredArticles[0].readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-outfit)]">
                    {filteredArticles[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-[family-name:var(--font-jost)] leading-relaxed">
                    {filteredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="flex items-center mr-4">
                        <Calendar className="w-4 h-4 mr-1" />
                        {filteredArticles[0].date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {filteredArticles[0].author}
                      </div>
                    </div>
                    <button className="inline-flex items-center text-[#EAB81E] hover:text-[#be9416] font-medium group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#EAB81E]/90 text-white rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-outfit)] line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-[family-name:var(--font-jost)] line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <button className="inline-flex items-center text-[#EAB81E] hover:text-[#be9416] font-medium group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 bg-[#EAB81E]/5 rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-outfit)]">
              Stay Informed
            </h3>
            <p className="text-gray-600 mb-6 font-[family-name:var(--font-jost)]">
              Subscribe to our newsletter and never miss an important update
              about our projects and achievements.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white border-gray-300 focus:border-[#EAB81E] focus:ring-[#EAB81E]"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#EAB81E] hover:bg-[#be9416] text-white font-medium rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
