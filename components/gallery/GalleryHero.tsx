"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden dark:bg-[#0a0a0a]">
      {/* Background Image with Overlay */}
      <div className="absolute bg-black inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop"
          alt="Gallery"
          className="w-full h-full object-cover"
          layout="fill"
        />
        <div
          className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/70" : "bg-black/60"}`}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-heading mt-12 font-bold text-white dark:text-white mb-6 text-balance"
            variants={itemVariants}
          >
            Project Gallery
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white dark:text-white text-balance"
            variants={itemVariants}
          >
            Explore the progress and milestones of the Barotse Corridor
            Connector through our comprehensive multimedia collection.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
