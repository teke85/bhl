"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function PhotoCategories() {
    const [activeCategory, setActiveCategory] = useState("all")

    const categories = [
        { id: "all", label: "All Photos" },
        { id: "construction", label: "Construction" },
        { id: "landscape", label: "Landscape" },
        { id: "community", label: "Community" },
        { id: "equipment", label: "Equipment" },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 },
        },
    }

    return (
        <section className="py-12 bg-card dark:bg-[#1a1a1a]">
            <div className="container mx-auto px-4">
                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${activeCategory === category.id
                                ? "bg-[#fdb913] text-black"
                                : "bg-background dark:bg-[#0a0a0a] text-foreground dark:text-white border border-border dark:border-white/10 hover:border-[#fdb913]"
                                }`}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.label}
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}