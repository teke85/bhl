"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Stat {
  number: string;
  label: string;
}

interface AchievementsProps {
  title?: string;
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { number: "371km", label: "Total Stretch" },
  { number: "3", label: "Toll Gates" },
  { number: "2025", label: "Start of Early Works" },
  { number: "2028", label: "Target Completion" },
  { number: "20km", label: "Urban Roads Planned" },
];

export default function Achievements({
  title = "By The Numbers",
  stats = defaultStats,
}: AchievementsProps) {
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


  return (
    <section
      ref={ref}
      className="py-20 md:py-5 bg-background dark:bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-6"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-[#fdb913] mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {achievement.number}
              </motion.h3>
              <p className="text-base md:text-lg text-[#868584] dark:text-white font-paragraph leading-tight">
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
