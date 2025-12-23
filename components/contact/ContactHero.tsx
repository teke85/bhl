"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactHero({
  title,
  subtitle,
  image,
}: {
  title?: string;
  subtitle?: string;
  image?: string;
}) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get the current theme, accounting for system theme
  const currentTheme = mounted
    ? theme === "system"
      ? systemTheme
      : theme
    : "light";

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
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-90 dark:opacity-10"
          loading="lazy"
          quality={75}
          placeholder="blur"
          blurDataURL={image}
          fill
        />
        <div className="absolute bg-black/80 inset-0" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-heading font-bold text-white dark:text-white mb-6"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground dark:text-gray-300"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
