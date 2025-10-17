"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Achievements() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const achievements = [
    { number: "371", label: "Kilometers of Highway" },
    { number: "2", label: "Main Sections" },
    { number: "3", label: "Toll Plazas" },
    { number: "2025", label: "Target Completion" },
  ];

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-background dark:bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-6"
            variants={itemVariants}
          >
            By The Numbers
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3
                className="text-5xl font-bold text-[#fdb913] mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {achievement.number}
              </motion.h3>
              <p className="text-lg text-muted-foreground dark:text-gray-300">
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
