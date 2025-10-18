"use client";

import { motion } from "framer-motion";

const ResettlementPolicy = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-[#EAB81E]"
        >
          Resettlement Policy Framework
        </motion.h2>

        <div className="space-y-5 leading-relaxed">
          <p>
            The project has developed a{" "}
            <strong>Resettlement Policy Framework (RPF)</strong>
            to guide implementation of the BEL-TC Resettlement Policy. It
            defines principles, procedures, and institutional responsibilities
            for preparing Resettlement Action Plans (RAPs) and Livelihood
            Restoration Plans whenever land acquisition or displacement occurs.
          </p>
          <p>
            The framework applies where projects cause permanent or temporary
            social and economic impacts, require land acquisition, or alter land
            use or access rights. It ensures affected persons are informed of
            their rights, consulted, compensated at full replacement cost, and
            assisted in restoring or improving pre-project living standards.
          </p>
          <p>
            Resettlement planning considers demographic and socio-economic
            conditions in the affected districts of{" "}
            <strong>Kalumbila, Kasempa, Mufumbwe, and Kaoma</strong>, ensuring
            that local needs and vulnerabilities are addressed in an equitable
            and sustainable manner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResettlementPolicy;
