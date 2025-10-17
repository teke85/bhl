"use client";

import { motion } from "framer-motion";

const CommunityEngagement = () => {
  return (
    <section className="py-20 bg-white text-black dark:text-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white"
        >
          Community Engagement
        </motion.h2>

        <p className="leading-relaxed mb-4">
          The Resettlement Policy Framework emphasizes open and inclusive
          engagement with communities affected by the Mutanda–Kaoma Road
          Project. Consultation is central to the planning and implementation of
          all resettlement and compensation activities.
        </p>

        <p className="leading-relaxed mb-4">
          BEL-TC works closely with local authorities and community members in
          the <strong>Kalumbila, Kasempa, Mufumbwe, and Kaoma Districts</strong>{" "}
          to ensure that resettlement planning reflects local needs and
          priorities. Engagement activities include information sharing,
          household surveys, and participation in preparing Resettlement Action
          Plans (RAPs).
        </p>

        <p className="leading-relaxed">
          Through these consultations, affected persons are informed of their
          rights, offered feasible options, and supported to maintain or enhance
          their living standards during and after project implementation.
        </p>
      </div>
    </section>
  );
};

export default CommunityEngagement;
