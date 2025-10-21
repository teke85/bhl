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
      <div className="absolute bg-black/20 inset-0 z-0 w-full">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760873944/A_professional__cinematic_image_representing_the_founding_story_of_Barotse_Highway_Limited__a_Zambia_2_s9dqfd.png"
          alt="About Barotse Highway"
          className="w-full h-full object-cover"
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
            className="text-5xl md:text-6xl font-heading font-bold text-white dark:text-white mb-6 text-balance"
            variants={itemVariants}
          >
            Our Story
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl w-full text-white dark:text-white text-balance"
            variants={itemVariants}
          >
            The wider transport and PPP market in Zambia and SADC is akin to a
            vast, interconnected circulatory system. The Mutanda to Kaoma
            Project, which completes Zambi’s Western Corridor, is a major new
            artery, aiming to streamline the flow of vital resources (like
            minerals) and goods to and from key regional ports. This new artery
            doesn't just replace old, inefficient routes; it integrates with
            existing and planned systems, to create a more robust and efficient
            network. The Government, uses PPPs to attract private capital and
            expertise for these infrastructure projects, much like a city
            invites private developers to build and manage new districts, all
            while adhering to a master plan and strict regulations to ensure
            long-term benefits for its citizens and the broader region.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
