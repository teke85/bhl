"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PartnersHero: React.FC = () => {
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
            'url("https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=800&fit=crop")',
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
          Our Partners
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto"
        >
          Building Excellence Together
        </motion.p>

        <motion.div
          ref={descriptionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Our success is built on the expertise and commitment of world-class
            partners. Together, we&apos;re transforming the Western Corridor
            into a world-class infrastructure that connects Zambia&apos;s rich
            resources to global markets.
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

export default PartnersHero;
