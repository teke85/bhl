"use client";

import { motion } from "framer-motion";

const PPP = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-[#EAB81E]"
        >
          PPP
        </motion.h2>

        <div className="space-y-5 leading-relaxed">
          <p>
            The Mutanda-Kaoma Road Public-Private Partnership{" "}
            <strong>(PPP) Project</strong> represents a critical infrastructure
            initiative aimed at enhancing Zambia’s western corridor. The
            proposed commercial structure designates Barotse Highway Limited
            Special Purpose Vehicle as the Concessionaire responsible for the
            design, financing, construction, and operation of the 371-kilometre
            Mutanda to Kaoma road (the Road) over a 25-year concession period,
            with two years for construction, and 23 years for operations and
            maintenance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PPP;
