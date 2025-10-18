"use client";

import { motion } from "framer-motion";

const ProjectHistory = () => {
  return (
    <section className="py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="container text-3xl md:text-5xl mx-auto px-2 max-w-8xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white"
        >
          Project Background & History
        </motion.h2>

        <div className="space-y-5 text-[1.2rem] leading-relaxed">
          <p>
            The Mutanda–Kaoma Road Project traces its origins to{" "}
            <strong>21 March 2018</strong>, when{" "}
            <strong>Buks Haulage Limited (BHL)</strong>
            entered a ten-year maintenance contract with the{" "}
            <strong>Road Development Agency (RDA)</strong> for the Kaoma–Kasempa
            road. Over USD 8 million was invested to keep the gravel route
            usable, highlighting its strategic importance even before the formal
            concession.
          </p>
          <p>
            After assessing the corridor’s traffic potential, the Promoters
            resolved in 2023 to upgrade the entire 371 km stretch to bituminous
            standard. An unsolicited PPP proposal was submitted on{" "}
            <strong>16 February 2024</strong> and
            <strong> preferred-bidder status </strong> was granted on{" "}
            <strong>19 June 2024</strong> .
          </p>
          <p>
            To deliver the concession, the Special Purpose Vehicle{" "}
            <strong>Barotse Express Limited (BEL-TC)</strong> was incorporated
            on 10 July 2024, followed by the signing of the Concession Agreement
            with the Ministry of Finance and National Planning on{" "}
            <strong>1 December 2024</strong> in Kasempa. The project is now
            advancing through road-design and preparatory works, with Financial
            Close targeted <strong>for the end of 2025</strong> .
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectHistory;
