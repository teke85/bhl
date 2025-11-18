"use client";

import { motion } from "framer-motion";

const EnvironmentalImpact = () => {
  return (
    <section className="py-10 bg-white text-black dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-center font-bold mb-6 text-black dark:text-white"
        >
          Environmental & Social Impact
        </motion.h2>

        <div className="space-y-5 text-muted-foreground font-body dark:text-white leading-relaxed">
          <p>
            The <strong>Mutanda–Kaoma Road Project</strong> is being implemented
            under a rigorous{" "}
            <strong>Environmental and Social Impact Assessment (ESIA)</strong>{" "}
            process, in compliance with Zambian and international PPP standards.
            The assessment ensures that project development aligns with
            sustainable environmental management, social equity, and economic
            growth objectives.
          </p>

          <p>
            <strong>DH Engineering Consultants</strong> serve as the Project’s
            ESG advisors, responsible for conducting the ESIA, ensuring{" "}
            <strong>ZEMA compliance</strong>, and overseeing land acquisition,
            geotechnical investigations, and other environmental and social
            safeguards.
          </p>

          <p>
            The ESIA process identifies potential environmental and community
            impacts along the 371-kilometre corridor, focusing on issues such as
            vegetation disturbance, soil erosion, waste management, water-course
            protection, and noise control. Mitigation measures are being
            incorporated into the project design to minimize these impacts and
            promote long-term ecological resilience.
          </p>

          <p>
            On the social side, the Project integrates a{" "}
            <strong>Resettlement Policy Framework (RPF)</strong> that guides
            fair and transparent compensation, livelihood restoration, and
            stakeholder engagement for affected communities in the{" "}
            <strong>Kalumbila, Kasempa, Mufumbwe, and Kaoma Districts</strong>.
            The framework ensures that affected persons are consulted,
            compensated at full replacement cost, and supported in improving
            their living conditions post-relocation.
          </p>

          <p>
            By embedding environmental, social, and governance (ESG) principles
            throughout the project cycle—from design to construction and
            operation— the Barotse Highway Limited SPV is committed to ensuring
            that the Mutanda–Kaoma Road becomes a model for sustainable
            infrastructure development in Zambia and the wider SADC region.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalImpact;
