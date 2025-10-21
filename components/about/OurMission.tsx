"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function OurMission() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    }

    const missions = [
        {
            title: "Vision",
            description:
                "To be Africa's leading infrastructure developer, creating corridors that connect communities and unlock economic potential.",
        },
        {
            title: "Mission",
            description:
                "Deliver transformative infrastructure projects with excellence, integrity, and unwavering commitment to community and environmental stewardship.",
        },
        {
            title: "Purpose",
            description:
                "Enable regional trade, create employment, and improve quality of life for millions across Southern Africa.",
        },
    ]

    return (
        <section ref={ref} className="py-20 md:py-32 bg-card dark:bg-[#1a1a1a]">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-6"
                        variants={itemVariants}
                    >
                        Our Mission & Vision
                    </motion.h2>
                    <motion.p
                        className="text-lg text-[#868584] dark:text-white font-paragraph max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Guided by clear principles and ambitious goals
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {missions.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-background dark:bg-[#0a0a0a] p-8 rounded-lg border border-border dark:border-white/10 hover:border-[#fdb913] transition-colors"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <h3 className="text-2xl font-heading font-bold text-[#fdb913] mb-4">{item.title}</h3>
                            <p className="text-[#868584] dark:text-white font-paragraph">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}