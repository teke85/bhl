"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ResettlementHero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white flex items-center">
      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1761799609/Kasempa_Western_ByPass-DJI_0533_omz2fa.jpg"
          alt="Kasempa Western Bypass aerial view"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Resettlement Policy Framework
        </motion.h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          The Western Corridor Resettlement Policy Framework guides how the
          Mutanda–Kaoma Road Project addresses land acquisition, displacement,
          and livelihood restoration. It establishes principles and procedures
          to ensure that affected persons are informed, consulted, and supported
          to restore or improve their living standards.
        </p>
      </div>
    </section>
  );
};

export default ResettlementHero;
