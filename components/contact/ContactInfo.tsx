"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ContactInfo() {
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
            transition: { duration: 0.6 },
        },
    }

    const contactMethods = [
        {
            icon: "📞",
            title: "Phone",
            details: ["+260 211 123 456", "+260 211 123 457"],
        },
        {
            icon: "📧",
            title: "Email",
            details: ["info@barotsecorridor.com", "support@barotsecorridor.com"],
        },
        {
            icon: "📍",
            title: "Address",
            details: ["123 Infrastructure Way", "Lusaka, Zambia"],
        },
        {
            icon: "🕐",
            title: "Business Hours",
            details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
        },
    ]

    return (
        <motion.div
            ref={ref}
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            {contactMethods.map((method, index) => (
                <motion.div
                    key={index}
                    className="p-6 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 hover:border-[#fdb913] transition-colors"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                >
                    <div className="text-4xl mb-3">{method.icon}</div>
                    <h3 className="text-xl font-heading font-bold text-foreground dark:text-white mb-3">{method.title}</h3>
                    <div className="space-y-2">
                        {method.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground dark:text-gray-400">
                                {detail}
                            </p>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}