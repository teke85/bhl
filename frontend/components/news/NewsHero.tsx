"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NewsHero() {
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
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-background dark:bg-[#0a0a0a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 w-full">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1761744663/5_yoawid.png"
          alt="News & Updates - Western Corridor Limited"
          className="w-full h-full object-cover"
          sizes="100vw"
          priority
          fill
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container w-full mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-heading font-bold text-white dark:text-white mb-6 text-balance"
            variants={itemVariants}
          >
            News & Updates
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl w-full text-white dark:text-white text-balance leading-relaxed"
            variants={itemVariants}
          >
            Stay informed about the latest developments, milestones, and
            announcements for the Western Corridor project. From construction
            progress to community initiatives, get all the updates straight from
            the source.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
