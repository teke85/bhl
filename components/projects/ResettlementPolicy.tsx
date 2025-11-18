"use client";

import { motion } from "framer-motion";

const ResettlementPolicy = () => {
  return (
    <section className="py-20 bg-white dark:bg-black text-muted-foreground dark:text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-[#EAB81E]"
        >
          Resettlement Policy Framework
        </motion.h2>

        <div className="space-y-5 font-body text-xl leading-relaxed">
          <p>
            The project has developed a{" "}
            <strong>Resettlement Policy Framework (RPF)</strong>
            to guide implementation of the BEL-TC Resettlement Policy. It
            defines principles, procedures, and institutional responsibilities
            for preparing Resettlement Action Plans (RAPs) and Livelihood
            Restoration Plans whenever land acquisition or displacement occurs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResettlementPolicy;
