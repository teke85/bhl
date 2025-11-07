"use client";

import { motion } from "framer-motion";

const RegionalConnectivity = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-[#EAB81E]"
        >
          Regional Connectivity & Economic Importance
        </motion.h2>

        <div className="space-y-5 leading-relaxed">
          <p>
            The <strong>Mutanda–Kaoma Road</strong> forms a vital part of
            Zambia’s Western Corridor, linking the mineral-rich Copperbelt and
            Northwestern Provinces with the Democratic Republic of Congo and
            providing direct access to the West Coast of Africa via Walvis Bay
            (Namibia).
          </p>
          <p>
            Compared with the traditional Lusaka–Ndola route through the
            Trans-Caprivi Corridor, this alignment offers a faster,
            less-congested alternative for mineral and agricultural exports,
            supporting industries such as agriculture, fish trade, timber, and
            tourism.
          </p>
          <p>
            The project integrates with planned links like the{" "}
            <strong>Lumwana–Kambimba Road</strong> and the{" "}
            <strong>Kipushi–Solwezi Road</strong>, establishing a continuous
            transport route from Kolwezi in the DRC to Walvis Bay, targeted for
            full operational readiness by 2028.
          </p>
          <p>
            By strengthening Zambia’s role as a regional logistics hub, the
            corridor will stimulate trade, reduce vehicle operating costs, and
            promote economic growth across Western and Northwestern Provinces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegionalConnectivity;
