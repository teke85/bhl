"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CoreValuesProps {
  title?: string;
}

export default function CoreValues({ title = "Our Core Values" }: CoreValuesProps) {
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
      icon: "🌱",
      title: "Sustainability",
      description:
        "Commitment to environmentally responsible infrastructure development, aligned with IFC Performance Standards and Zambia's Environmental Management Act.",
    },
    {
      icon: "⚖️",
      title: "Inclusivity & Equity",
      description:
        "Ensuring fair resettlement, livelihood restoration, and meaningful stakeholder engagement, with special attention to vulnerable groups including women, youth, and informal land users.",
    },
    {
      icon: "🔍",
      title: "Transparency & Accountability",
      description:
        "Upholding clear governance, financial integrity, and public reporting mechanisms throughout the concession lifecycle.",
    },
    {
      icon: "💡",
      title: "Innovation & Efficiency",
      description:
        "Leveraging modern tolling systems, weigh-in-motion technology, and smart project management tools to deliver high-quality infrastructure and services.",
    },
    {
      icon: "🌟",
      title: "Local Empowerment",
      description:
        "Promoting local content, employment, and capacity building through subcontracting to Zambian citizen contractors and suppliers.",
    },
    {
      icon: "🛡️",
      title: "Resilience & Adaptability",
      description:
        "Designing infrastructure and financial models that respond to climate risks, traffic patterns, and evolving regional trade dynamics.",
    },
    {
      icon: "🛣️",
      title: "Safety & Reliability",
      description:
        "Prioritizing road safety, asset durability, and operational excellence to protect users and maintain service levels.",
    },
    {
      icon: "🌍",
      title: "Regional Integration",
      description:
        "Supporting Zambia's role as a transport and logistics hub by connecting mining regions to key ports and trade corridors across SADC.",
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
            {title}
          </motion.h2>
        </motion.div>
        <p className="font-body text-center text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Guiding principles that drive our commitment to delivering
          transformative infrastructure while creating lasting value for Zambia
          and the region.
        </p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 hover:border-[#fdb913] transition-colors"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-heading font-bold text-foreground dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
