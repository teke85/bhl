"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function CompanyStory() {
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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
        },
    }

    return (
        <section ref={ref} className="py-20 md:py-32 bg-background dark:bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.div variants={itemVariants}>
                        <img
                            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
                            alt="Company Story"
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white">
                            Building Tomorrow's Corridors
                        </h2>
                        <p className="text-lg text-muted-foreground dark:text-gray-300">
                            The Barotse Corridor Connector represents a transformative vision for regional connectivity. Since our
                            inception, we've been committed to delivering world-class infrastructure that connects communities,
                            enables trade, and drives economic growth across Southern Africa.
                        </p>
                        <p className="text-lg text-muted-foreground dark:text-gray-300">
                            Our journey is defined by our unwavering commitment to excellence, sustainability, and community
                            partnership. Every milestone achieved reflects our dedication to building infrastructure that lasts
                            generations.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-[#fdb913] mb-2">371 km</h3>
                                <p className="text-muted-foreground dark:text-gray-400">Total Corridor Length</p>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-[#fdb913] mb-2">2025</h3>
                                <p className="text-muted-foreground dark:text-gray-400">Target Completion</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}