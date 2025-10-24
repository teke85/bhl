"use client";

import { motion } from "framer-motion";

const ResettlementHero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white flex items-center">
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dpeg7wc34/image/upload/v1760715985/Warm__hopeful_scene_of_diverse_community_members_of_African_Zambian_descent_reviewing_planning_docum_trwu0f.png')] bg-cover bg-center opacity-40" />
      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Resettlement Policy Framework
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          The Barotse Express Limited (BEL-TC) Resettlement Policy Framework
          guides how the Mutanda–Kaoma Road Project addresses land acquisition,
          displacement, and livelihood restoration. It establishes principles
          and procedures to ensure that affected persons are informed,
          consulted, and supported to restore or improve their living standards.
        </p>
      </div>
    </section>
  );
};

export default ResettlementHero;
