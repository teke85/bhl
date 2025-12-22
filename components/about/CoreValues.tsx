"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Leaf,
  Scale,
  Search,
  Lightbulb,
  Star,
  Shield,
  Route,
  Globe,
  TrendingUp,
  type LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Scale,
  Search,
  SearchCheck: Search,
  Lightbulb,
  Star,
  Shield,
  Route,
  Globe,
  TrendingUp,
  "leaf": Leaf,
  "scale": Scale,
  "search": Search,
  "lightbulb": Lightbulb,
  "star": Star,
  "shield": Shield,
  "route": Route,
  "globe": Globe,
};

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface CoreValuesProps {
  title?: string;
  values?: Value[];
}

const defaultValues: Value[] = [
  {
    icon: "Leaf",
    title: "Sustainability",
    description:
      "Commitment to environmentally responsible infrastructure development, aligned with IFC Performance Standards and Zambia's Environmental Management Act.",
  },
  {
    icon: "Scale",
    title: "Inclusivity & Equity",
    description:
      "Ensuring fair resettlement, livelihood restoration, and meaningful stakeholder engagement, with special attention to vulnerable groups including women, youth, and informal land users.",
  },
  {
    icon: "Search",
    title: "Transparency & Accountability",
    description:
      "Upholding clear governance, financial integrity, and public reporting mechanisms throughout the concession lifecycle.",
  },
  {
    icon: "Lightbulb",
    title: "Innovation & Efficiency",
    description:
      "Leveraging modern tolling systems, weigh-in-motion technology, and smart project management tools to deliver high-quality infrastructure and services.",
  },
  {
    icon: "Star",
    title: "Local Empowerment",
    description:
      "Promoting local content, employment, and capacity building through subcontracting to Zambian citizen contractors and suppliers.",
  },
  {
    icon: "Shield",
    title: "Resilience & Adaptability",
    description:
      "Designing infrastructure and financial models that respond to climate risks, traffic patterns, and evolving regional trade dynamics.",
  },
  {
    icon: "Route",
    title: "Safety & Reliability",
    description:
      "Prioritizing road safety, asset durability, and operational excellence to protect users and maintain service levels.",
  },
  {
    icon: "Globe",
    title: "Regional Integration",
    description:
      "Supporting Zambia's role as a transport and logistics hub by connecting mining regions to key ports and trade corridors across SADC.",
  },
];

export default function CoreValues({
  title = "Our Core Values",
  values = defaultValues,
}: CoreValuesProps) {
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
          {values.map((value, index) => {
            const Icon = iconMap[value.icon];

            return (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 hover:border-[#fdb913] transition-colors"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="flex justify-center mb-4">
                  {Icon ? (
                    <Icon className="w-12 h-12 text-[#fdb913]" />
                  ) : (
                    <div className="text-4xl">{value.icon}</div>
                  )}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
