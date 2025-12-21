"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Mission {
  title: string;
  description: string;
}

interface OurMissionProps {
  title?: string;
  description?: string;
  missions?: Mission[];
}

const defaultMissions: Mission[] = [
  {
    title: "Vision Statement",
    description:
      "To transform Zambia’s Western Corridor into a world-class transport artery that catalyzes regional trade, economic growth, and sustainable development—by delivering resilient infrastructure, fostering public-private partnerships, and empowering communities through inclusive, environmentally responsible, and economically viable road connectivity.",
  },
  {
    title: "Mission Statement",
    description:
      "To design, build, finance, operate, and maintain the Mutanda–Kaoma Road under a robust Public–Private Partnership model, delivering high-quality infrastructure that enhances regional trade, supports Zambia’s economic diversification, and improves mobility, safety, and livelihoods for communities along the Western Corridor—while upholding environmental sustainability, social equity, and international best practices.",
  },
  {
    title: "Purpose",
    description:
      "The purose of Western Corridor is to deliver the Mutanda–Kaoma Toll Road under a 25-year Public–Private Partnership (PPP) concession through a dedicated Special Purpose Vehicle (SPV) established to execute the full lifecycle of the Project, design, build, finance, operate, maintain, and transfer. Western Corridor’s purpose is to serve as the legal and operational entity responsible for mobilizing capital, managing construction and operations, ensuring compliance with environmental and social standards, and coordinating stakeholder engagement. Through this structure, the Project aims to unlock regional trade, enhance Zambia’s infrastructure, and promote inclusive, sustainable development across the Western Corridor.",
  },
];

export default function OurMission({
  title = "Our Mission & Vision",
  description = "Guided by clear principles and ambitious goals",
  missions = defaultMissions,
}: OurMissionProps) {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };


  return (
    <section ref={ref} className="py-20 md:py-32 bg-card dark:bg-[#1a1a1a]">
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
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {missions.map((item, index) => (
            <motion.div
              key={index}
              className="bg-background dark:bg-[#0a0a0a] p-8 rounded-lg border border-border dark:border-white/10 hover:border-[#fdb913] transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-heading font-bold text-[#fdb913] mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
