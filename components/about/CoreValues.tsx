"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function CoreValues() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 },
        },
    }

    const values = [
        { icon: "🏗️", title: "Excellence", description: "Delivering world-class infrastructure and services" },
        { icon: "🤝", title: "Integrity", description: "Operating with transparency and ethical standards" },
        { icon: "🌍", title: "Sustainability", description: "Protecting environment for future generations" },
        { icon: "👥", title: "Community", description: "Prioritizing local engagement and development" },
        { icon: "💡", title: "Innovation", description: "Embracing modern technology and solutions" },
        { icon: "⚡", title: "Efficiency", description: "Delivering projects on time and within budget" },
    ]

    return (
        <section ref={ref} className="py-20 md:py-32 bg-background dark:bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-6"
                        variants={itemVariants}
                    >
                        Our Core Values
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-8 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 hover:border-[#fdb913] transition-colors"
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                        >
                            <div className="text-5xl mb-4">{value.icon}</div>
                            <h3 className="text-2xl font-heading font-bold text-foreground dark:text-white mb-3">{value.title}</h3>
                            <p className="text-muted-foreground dark:text-gray-300">{value.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}