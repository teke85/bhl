"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const NewsHero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate hero elements on mount
    const elements = [titleRef, subtitleRef, descriptionRef];
    elements.forEach((ref, index) => {
      if (ref.current) {
        ref.current.style.transition = `all 0.8s ease ${index * 0.2}s`;
        ref.current.style.transform = "translateY(0)";
        ref.current.style.opacity = "1";
      }
    });
  }, []);

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("/modern-news-media-background-with-newspapers-and-d.jpg")',
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 dark:bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 dark:bg-yellow-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Latest News
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto"
        >
          Stay Updated with Our Latest Developments
        </motion.p>

        <motion.div
          ref={descriptionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Discover the latest updates, announcements, and insights from our
            projects and partnerships. Stay informed about our progress and
            milestones.
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-20 h-1 bg-yellow-400 mx-auto mt-12"
        />
      </div>
    </section>
  );
};

export default NewsHero;
