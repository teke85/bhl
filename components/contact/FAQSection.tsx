"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

export default function FAQSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

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
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    }

    const faqs = [
        {
            question: "What is the Barotse Corridor Connector?",
            answer:
                "The Barotse Corridor Connector is a 371-kilometer highway project connecting Mutanda to Kaoma, designed to improve regional trade and connectivity across Southern Africa.",
        },
        {
            question: "When will the project be completed?",
            answer:
                "The project is targeted for completion in 2025. We are committed to delivering this critical infrastructure on schedule.",
        },
        {
            question: "How can I get involved in the project?",
            answer:
                "There are several ways to get involved, including business partnerships, employment opportunities, and community engagement programs. Please contact us for more information.",
        },
        {
            question: "What are the environmental considerations?",
            answer:
                "Environmental sustainability is a core value. We follow strict environmental protocols and work closely with communities to minimize impact.",
        },
        {
            question: "How does the project benefit local communities?",
            answer:
                "The project creates employment opportunities, improves infrastructure, enables trade, and includes comprehensive community support and resettlement programs.",
        },
        {
            question: "How can I stay updated on project progress?",
            answer:
                "You can follow our website, subscribe to our newsletter, or contact us directly. We regularly share updates on our social media channels and website.",
        },
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
                        Frequently Asked Questions
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="max-w-3xl mx-auto space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg border border-border dark:border-white/10 overflow-hidden"
                            variants={itemVariants}
                        >
                            <button
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                className="w-full px-6 py-4 bg-card dark:bg-[#1a1a1a] hover:bg-card/80 dark:hover:bg-[#1a1a1a]/80 text-left flex items-center justify-between transition-colors"
                            >
                                <h3 className="font-heading font-bold text-foreground dark:text-white">{faq.question}</h3>
                                <motion.span
                                    className="text-[#fdb913] text-2xl"
                                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    ▼
                                </motion.span>
                            </button>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: expandedIndex === index ? "auto" : 0,
                                    opacity: expandedIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 py-4 bg-background dark:bg-[#0a0a0a] border-t border-border dark:border-white/10">
                                    <p className="text-muted-foreground dark:text-gray-300">{faq.answer}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}