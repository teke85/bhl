"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CoreValues() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const values = [
    {
      icon: "🏗️",
      title: "Operate transparently",
      description:
        "guided by robust governance, financial accountability, and public-private collaboration.",
    },
    {
      icon: "🤝",
      title: "Build with Integrity",
      description:
        "ensuring the Mutanda–Kaoma Road meets international quality and safety standards.",
    },
    {
      icon: "🌍",
      title: "Empower communities",
      description:
        "by promoting local employment, fair resettlement, and inclusive development",
    },
    {
      icon: "👥",
      title: "Protect the environment",
      description:
        "through responsible construction practices, biodiversity conservation, and climate-resilient design.",
    },
    {
      icon: "💡",
      title: "Support Zambia's growth",
      description:
        "by facilitating trade, unlocking mining and agricultural value chains, and aligning with national development strategies.",
    },
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
            Our Core Values
          </motion.h2>
        </motion.div>
        <p className="font-body text-center text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Our commitment is to not only construct a road, but to create a
          corridor of opportunity, sustainability, and shared prosperity for
          Zambia and the region.
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 hover:border-[#fdb913] transition-colors"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-heading font-bold text-foreground dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
