"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
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
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-background dark:bg-[#0a0a0a]">
      {/* Background Image with Overlay */}
      <div className="absolute bg-black/ inset-0 z-0 w-full">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760058082/DJI_0577_nvakjm.jpg"
          alt="About Barotse Highway"
          className="w-full h-full object-cover dark:opacity-10"
          sizes="100vw"
          priority
          width={400}
          height={400}
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      <div className="container w-full mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-heading font-bold text-foreground dark:text-white mb-6 text-balance"
            variants={itemVariants}
          >
            Our Story
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl w-full text-white dark:text-white text-balance"
            variants={itemVariants}
          >
            Barotse Highway Limited is a Special Purpose Vehicle (SPV)
            incorporated by BeefCo Holdings Limited and First Quantum Minerals
            Operations Limited for executing this transformative infrastructure
            project.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
