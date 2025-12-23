"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  role: string;
  category: string;
  description: string;
  expertise: string[];
  responsibilities: string[];
}

interface PartnersGridProps {
  partners?: Partner[];
}

const PartnersGrid: React.FC<PartnersGridProps> = ({ partners = [] }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = Array.from(new Set(partners.map((p) => p.category)));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Category sections */}
        {categories.map((category) => (
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24 w-full"
          >
            {/* Category header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
                {category}
              </h2>
              <div className="w-16 h-1 bg-yellow-400" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid w-full gap-6 auto-rows-max"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              }}
            >
              {partners
                .filter((p) => p.category === category)
                .map((partner) => (
                  <motion.div
                    key={partner.id}
                    variants={itemVariants}
                    className="w-full"
                  >
                    <Card
                      className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      onClick={() =>
                        setExpandedId(
                          expandedId === partner.id ? null : partner.id
                        )
                      }
                    >
                      <div className="p-6 md:p-8">
                        {/* Partner header */}
                        <div className="mb-4">
                          <div className="inline-block px-3 py-1 bg-yellow-400/10 dark:bg-yellow-400/20 rounded-full mb-3">
                            <span className="text-xs md:text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                              {partner.role}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">
                            {partner.name}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                          {partner.description}
                        </p>

                        {/* Expertise tags */}
                        <div className="mb-6">
                          <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                            Expertise
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {partner.expertise.slice(0, 3).map((exp, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                              >
                                {exp}
                              </span>
                            ))}
                            {partner.expertise.length > 3 && (
                              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">
                                +{partner.expertise.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Expand button */}
                        <button
                          className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-semibold text-sm hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedId(
                              expandedId === partner.id ? null : partner.id
                            );
                          }}
                        >
                          View Details
                          <ChevronDown
                            className="w-4 h-4"
                            style={{ transform: "none" }}
                          />
                        </button>

                        {/* Expanded content */}
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: expandedId === partner.id ? 1 : 0,
                            height: expandedId === partner.id ? "auto" : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                            <div className="mb-4">
                              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                                Key Responsibilities
                              </p>
                              <ul className="space-y-2">
                                {partner.responsibilities.map((resp, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                                  >
                                    <span className="text-yellow-400 mt-1">
                                      •
                                    </span>
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                                All Expertise Areas
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {partner.expertise.map((exp, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs px-2 py-1 bg-yellow-400/10 dark:bg-yellow-400/20 text-yellow-700 dark:text-yellow-300 rounded"
                                  >
                                    {exp}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 text-center w-full"
        >
          <Card className="border border-yellow-400/30 dark:border-yellow-400/40 p-8 md:p-12">
            <h3 className="text-2xl dark:bg-transparent md:text-3xl font-bold text-black dark:text-white mb-4">
              Partnership Excellence
            </h3>
            <p className="text-black dark:text-white max-w-2xl mx-auto mb-6">
              Our diverse team of world-class partners brings together decades
              of experience in infrastructure development, engineering, finance,
              and project management to deliver the Western Corridor project.
            </p>
            <div className="w-16 h-1 bg-yellow-400 mx-auto" />
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersGrid;
