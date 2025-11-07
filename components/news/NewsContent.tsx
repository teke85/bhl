"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

interface NewsArticle {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

const NewsContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const newsArticles: NewsArticle[] = [
    {
      id: "1",
      title: "Major Infrastructure Milestone Achieved",
      category: "Project Updates",
      excerpt:
        "We are proud to announce the completion of a significant phase in our infrastructure development project, marking a major milestone in our journey.",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "/construction-site-milestone-celebration.jpg",
      author: "John Smith",
    },
    {
      id: "2",
      title: "New Partnership Announcement",
      category: "Partnerships",
      excerpt:
        "Exciting news as we welcome a new strategic partner to our growing network of world-class collaborators in the infrastructure sector.",
      date: "2025-01-10",
      readTime: "3 min read",
      image: "/business-partnership-handshake.png",
      author: "Sarah Johnson",
    },
    {
      id: "3",
      title: "Sustainability Initiative Launch",
      category: "Sustainability",
      excerpt:
        "Introducing our comprehensive sustainability program aimed at reducing environmental impact while maintaining project excellence.",
      date: "2025-01-05",
      readTime: "4 min read",
      image: "/green-sustainable-infrastructure.jpg",
      author: "Michael Chen",
    },
    {
      id: "4",
      title: "Community Engagement Program Success",
      category: "Community",
      excerpt:
        "Our community engagement initiatives have reached new heights, creating lasting positive impacts in local communities.",
      date: "2024-12-28",
      readTime: "6 min read",
      image: "/community-gathering-event.jpg",
      author: "Emily Davis",
    },
    {
      id: "5",
      title: "Technology Innovation in Construction",
      category: "Technology",
      excerpt:
        "Exploring cutting-edge technologies that are revolutionizing how we approach modern infrastructure development.",
      date: "2024-12-20",
      readTime: "7 min read",
      image: "/construction-technology-innovation.jpg",
      author: "David Wilson",
    },
    {
      id: "6",
      title: "Annual Progress Report Released",
      category: "Project Updates",
      excerpt:
        "Our comprehensive annual report showcases remarkable progress across all project phases and highlights key achievements.",
      date: "2024-12-15",
      readTime: "8 min read",
      image: "/business-report-presentation.jpg",
      author: "Lisa Anderson",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(newsArticles.map((article) => article.category))),
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid w-full gap-8 auto-rows-max"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
              className="w-full"
            >
              <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                {/* Article Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 md:p-8">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Author & Read More */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      By {article.author}
                    </span>
                    <button className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-semibold text-sm hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 text-center w-full"
        >
          <Card className="border border-yellow-400/30 dark:border-yellow-400/40 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
              Stay Informed
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Subscribe to our newsletter to receive the latest news, updates,
              and insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-6" />
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsContent;
