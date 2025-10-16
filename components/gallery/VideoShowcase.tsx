"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function VideoShowcase() {
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

    const videos = [
        {
            id: 1,
            title: "Project Overview",
            description: "Comprehensive overview of the Barotse Corridor Connector",
            thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
        },
        {
            id: 2,
            title: "Construction Progress",
            description: "Latest updates from the construction site",
            thumbnail: "https://images.unsplash.com/photo-1581092162562-40038f56c239?w=600&h=400&fit=crop",
        },
        {
            id: 3,
            title: "Community Impact",
            description: "Stories from the communities we serve",
            thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
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
                        Video Showcase
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Watch our latest project updates and community stories
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {videos.map((video) => (
                        <motion.div
                            key={video.id}
                            className="relative overflow-hidden rounded-lg group cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                        >
                            <img
                                src={video.thumbnail || "/placeholder.svg"}
                                alt={video.title}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                                <div className="w-16 h-16 bg-[#fdb913] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-black fill-current" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                <h3 className="text-xl font-heading font-bold mb-2">{video.title}</h3>
                                <p className="text-sm text-gray-300">{video.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}