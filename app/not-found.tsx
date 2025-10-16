"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function NotFound() {
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

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
            },
        },
    }

    const rotateVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 20,
                repeat: Infinity,
            },
        },
    }

    const navigationLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/milestones", label: "Milestones" },
        { href: "/gallery", label: "Gallery" },
        { href: "/news", label: "News" },
        { href: "/media", label: "Media" },
        { href: "/leadership", label: "Leadership" },
        { href: "/investors", label: "Investors" },
        { href: "/documents", label: "Documents" },
        { href: "/contact", label: "Contact" },
        { href: "/timeline", label: "Timeline" },
        { href: "/regional-impact", label: "Regional Impact" },
        { href: "/resettlement", label: "Resettlement" },
    ]

    return (
        <main className="min-h-screen bg-background dark:bg-[#0a0a0a] flex items-center justify-center overflow-hidden relative">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-20 left-10 w-32 h-32 bg-[#fdb913]/10 rounded-full blur-3xl"
                variants={floatingVariants}
                animate="animate"
            />
            <motion.div
                className="absolute bottom-20 right-10 w-40 h-40 bg-[#fdb913]/5 rounded-full blur-3xl"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center max-w-2xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* 404 Number with Animation */}
                    <motion.div className="mb-8" variants={itemVariants}>
                        <motion.div
                            className="text-9xl md:text-[150px] font-heading font-bold text-[#fdb913] leading-none"
                            variants={rotateVariants}
                            animate="animate"
                        >
                            404
                        </motion.div>
                    </motion.div>

                    {/* Error Message */}
                    <motion.h1
                        className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-4"
                        variants={itemVariants}
                    >
                        Page Not Found
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-8"
                        variants={itemVariants}
                    >
                        Sorry, the page you're looking for seems to have taken a detour. Let's get you back on track.
                    </motion.p>

                    {/* Call to Action Buttons */}
                    <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" variants={itemVariants}>
                        <Button
                            className="bg-[#fdb913] rounded-none text-black hover:bg-[#fdb913]/90 font-paragraph px-8 py-6 text-lg"
                            asChild
                        >
                            <Link href="/">Return to Home</Link>
                        </Button>
                        <Button
                            className="bg-foreground dark:bg-white rounded-none text-background dark:text-black hover:bg-foreground/90 dark:hover:bg-white/90 font-paragraph px-8 py-6 text-lg border border-foreground dark:border-white"
                            asChild
                        >
                            <Link href="/contact">Contact Support</Link>
                        </Button>
                    </motion.div>

                    {/* Quick Navigation */}
                    <motion.div variants={itemVariants}>
                        <p className="text-muted-foreground dark:text-gray-400 mb-6 font-semibold">Quick Navigation</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {navigationLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block p-3 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 text-foreground dark:text-white hover:border-[#fdb913] hover:text-[#fdb913] transition-colors font-paragraph text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Helpful Message */}
                    <motion.div
                        className="mt-12 p-6 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10"
                        variants={itemVariants}
                    >
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                            If you believe this is an error, please{" "}
                            <Link href="/contact" className="text-[#fdb913] hover:underline font-semibold">
                                contact our support team
                            </Link>
                            . We're here to help!
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}