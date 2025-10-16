"use client"

import Image from "next/image"
import { useState } from "react"

const ProjectGallery = () => {
    const [activeImage, setActiveImage] = useState(0)

    // const images = [
    //     {
    //         src: "/modern-highway-construction-site-with-heavy-machin.jpg",
    //         title: "Construction Progress",
    //         description: "State-of-the-art equipment and modern construction techniques",
    //     },
    //     {
    //         src: "/newly-paved-highway-road-with-lane-markings-in-afr.jpg",
    //         title: "Road Quality",
    //         description: "International standard bituminous surface with precision markings",
    //     },
    //     {
    //         src: "/highway-bridge-construction-over-river-in-zambia.jpg",
    //         title: "Infrastructure Development",
    //         description: "Modern bridges and drainage systems for long-term durability",
    //     },
    //     {
    //         src: "/toll-plaza-building-modern-architecture-zambia.jpg",
    //         title: "Toll Plaza Facilities",
    //         description: "Modern toll collection infrastructure with digital systems",
    //     },
    // ]
    const images = [
        {
            src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: "Construction Progress",
            description: "State-of-the-art equipment and modern construction techniques",
        },
        {
            src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: "Road Quality",
            description: "International standard bituminous surface with precision markings",
        },
        {
            src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: "Infrastructure Development",
            description: "Modern bridges and drainage systems for long-term durability",
        },
        {
            src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: "Toll Plaza Facilities",
            description: "Modern toll collection infrastructure with digital systems",
        },
    ]

    return (
        <section className="bg-muted/30 dark:bg-[#0a0a0a] py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-4">
                        Project Gallery
                    </h2>
                    <p className="text-lg text-muted-foreground dark:text-[#9ca3af] font-paragraph max-w-2xl mx-auto">
                        Witness the transformation of Zambia&apos;s infrastructure through our construction journey
                    </p>
                </div>

                {/* Main Image */}
                <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-8 group">
                    <Image
                        src={images[activeImage].src || "/placeholder.svg"}
                        alt={images[activeImage].title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-3xl font-heading font-bold mb-2">{images[activeImage].title}</h3>
                        <p className="text-lg font-paragraph text-white/90">{images[activeImage].description}</p>
                    </div>
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={`relative h-32 rounded-lg overflow-hidden transition-all duration-300 ${activeImage === index
                                ? "ring-4 ring-[#fdb913] scale-105"
                                : "opacity-60 hover:opacity-100 hover:scale-105"
                                }`}
                        >
                            <Image src={image.src || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectGallery