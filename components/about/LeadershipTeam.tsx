"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function LeadershipTeam() {
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    const leaders = [
        {
            name: "Dr. James Mwale",
            title: "Project Director",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            bio: "20+ years of infrastructure development experience",
        },
        {
            name: "Sarah Banda",
            title: "Chief Engineer",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            bio: "Expert in highway design and construction",
        },
        {
            name: "Michael Chanda",
            title: "Community Relations Manager",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
            bio: "Dedicated to stakeholder engagement",
        },
        {
            name: "Dr. Patricia Nkomo",
            title: "Environmental Officer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
            bio: "Leading sustainable development initiatives",
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
                        Leadership Team
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Experienced professionals driving the Barotse Corridor vision
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {leaders.map((leader, index) => (
                        <motion.div key={index} className="text-center" variants={itemVariants} whileHover={{ y: -10 }}>
                            <div className="mb-6 overflow-hidden rounded-lg">
                                <img
                                    src={leader.image || "/placeholder.svg"}
                                    alt={leader.name}
                                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-foreground dark:text-white mb-2">{leader.name}</h3>
                            <p className="text-[#fdb913] font-semibold mb-3">{leader.title}</p>
                            <p className="text-sm text-muted-foreground dark:text-gray-400">{leader.bio}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}