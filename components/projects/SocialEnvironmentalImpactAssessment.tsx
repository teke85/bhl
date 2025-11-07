import React from "react";
import { motion } from "framer-motion";

function SocialEnvironmentalImpactAssessment() {
  <section className="py-20 bg-white w-full text-gray-800">
    <div className="container text-center mx-auto px-4 max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-6 text-[#EAB81E]"
      >
        Social and Environmental Impact Assessment
      </motion.h2>

      <div className="space-y-5 leading-relaxed">
        <p>
          The Project is a brownfield road construction initiative, which will
          be carried out along the existing infrastructure. Additionally, the
          Promoters have enlisted the support of ESG advisors to conduct a
          comprehensive Social and Environmental Impact Assessment for the
          project. Ø Connects the mineral rich Solwezi, Kalumbila, Lumwana, and
          the entire North-Western region to Walvis Bay in Namibia. Ø Current
          state of the Road hampers seamless traffic movement, impacting trade
          within Zambia and potential economic ties with neighboring countries
          like Congo DRC. Ø Currently, traffic only has Lusaka Ndola route via
          the Trans-Caprivi to flow to Walvis bay.
        </p>
      </div>
    </div>
  </section>;
}

export default SocialEnvironmentalImpactAssessment;
