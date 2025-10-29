"use client";

import { motion } from "framer-motion";

const ProjectHistory = () => {
  const signingImages = [
    "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761737557/EI3A9544DRM_axlqdp.jpg",
    "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761737555/EI3A9521DRM_p6ppme.jpg",
    "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761737555/EI3A9549DRM_g4ex3m.jpg",
  ];

  // Simplified variants without complex transitions in the variant definitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section className="py-10 bg-white dark:bg-black text-black dark:text-white">
      <div className="container text-3xl md:text-5xl mx-auto px-2 max-w-8xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white"
        >
          Project History
        </motion.h2>

        <div className="space-y-5 leading-tight">
          <p className="text-lg font-body text-black dark:text-white mb-8 leading-relaxed">
            The Mutanda–Kaoma Road Project traces its origins to{" "}
            <strong className="text-[#fdb913]">21 March 2018</strong>, when{" "}
            <strong className="text-[#fdb913]">
              Buks Haulage Limited (BHL)
            </strong>
            {""}entered a ten-year maintenance contract with the{" "}
            <strong className="text-[#fdb913]">
              Road Development Agency (RDA)
            </strong>{" "}
            for the Kaoma–Kasempa road. Over USD 8 million was invested to keep
            the gravel route usable, highlighting its strategic importance even
            before the formal concession.
          </p>
          <p className="text-lg text-black dark:text-white font-body mb-8 leading-relaxed">
            After assessing the corridor&apos;s traffic potential, the Promoters
            resolved in 2023 to upgrade the entire 371 km stretch to bituminous
            standard. An unsolicited PPP proposal was submitted on{" "}
            <strong className="text-[#fdb913]">16 February 2024</strong> and{" "}
            <strong className="text-[#fdb913]">preferred-bidder status</strong>{" "}
            was granted on{" "}
            <strong className="text-[#fdb913]">19 June 2024</strong>.
          </p>
          <p className="font-body text-lg">
            To deliver the concession, the Special Purpose Vehicle{" "}
            <strong className="text-[#fdb913]">
              Western Corridor Limited (WCL)
            </strong>{" "}
            was incorporated on 10 July 2024, followed by the signing of the
            Concession Agreement with the Ministry of Finance and National
            Planning on{" "}
            <strong className="text-[#fdb913]">1 December 2024</strong> in
            Kasempa. The project is now advancing through road-design and
            preparatory works, with Financial Close targeted{" "}
            <strong className="text-[#fdb913]">for the end of 2025</strong>.
          </p>
        </div>

        {/* Signing Ceremony Images Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <motion.h3
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold mb-8 text-center text-black dark:text-white"
          >
            Signing Ceremony
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {signingImages.map((image, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-200 dark:bg-gray-800">
                  <motion.img
                    src={image}
                    alt={`Signing ceremony moment ${index + 1}`}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="mt-4 text-center"
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHistory;
