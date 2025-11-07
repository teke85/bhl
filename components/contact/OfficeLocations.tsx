"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function OfficeLocations() {
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
            transition: { duration: 0.6 },
        },
    }

    const offices = [
        {
            city: "Lusaka",
            country: "Zambia",
            address: "123 Infrastructure Way, Lusaka",
            phone: "+260 211 123 456",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        },
        {
            city: "Kaoma",
            country: "Zambia",
            address: "456 Project Avenue, Kaoma",
            phone: "+260 211 123 457",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        },
        {
            city: "Kasempa",
            country: "Zambia",
            address: "789 Corridor Road, Kasempa",
            phone: "+260 211 123 458",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
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
                        className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-6"
                        variants={itemVariants}
                    >
                        Our Office Locations
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {offices.map((office, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg overflow-hidden bg-background dark:bg-[#0a0a0a] border border-border dark:border-white/10 hover:border-[#fdb913] transition-colors"
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                        >
                            <img src={office.image || "/placeholder.svg"} alt={office.city} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-heading font-bold text-foreground dark:text-white mb-2">{office.city}</h3>
                                <p className="text-[#fdb913] font-semibold mb-4">{office.country}</p>
                                <div className="space-y-3 text-muted-foreground dark:text-gray-400">
                                    <p className="text-sm">{office.address}</p>
                                    <p className="text-sm">{office.phone}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}