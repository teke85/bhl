"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ContactHero() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
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

    return (
        <section className="relative w-full py-20 md:py-32 overflow-hidden bg-background dark:bg-[#0a0a0a]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
                    alt="Contact Us"
                    className="w-full h-full object-cover opacity-20 dark:opacity-10"
                />
                <div className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/70" : "bg-white/60"}`}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-20">
                <motion.div className="max-w-4xl mx-auto text-center" variants={containerVariants} initial="hidden" animate="visible">
                    <motion.h1
                        className="text-5xl md:text-6xl font-heading font-bold text-foreground dark:text-white mb-6"
                        variants={itemVariants}
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground dark:text-gray-300"
                        variants={itemVariants}
                    >
                        Have questions about the Barotse Corridor Connector? We'd love to hear from you. Reach out to our team
                        today.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}