"use client";

import Image from "next/image";
import { useState } from "react";

const ProjectGallery = () => {
  const [activeImage, setActiveImage] = useState(0);

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
      src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760699527/WhatsApp_Image_2025-10-10_at_13.00.15_hygpnc.jpg",
      title: "",
      description: "Map showing connectivity from mutanda to walvisbay",
    },
    {
      src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760053175/DJI_0524_10000_jhze1c.jpg",
      title: "Road Quality",
      description:
        "International standard bituminous surface with precision markings",
    },
    {
      src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760054559/DJI_0515_10000_awfwbp.jpg",
      title: "Infrastructure Development",
      description:
        "Modern bridges and drainage systems for long-term durability",
    },
    {
      src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759928192/DJI_0551_10000_ptspuh.jpg",
      title: "Toll Plaza Facilities",
      description: "Modern toll collection infrastructure with digital systems",
    },
  ];

  return (
    <section className="bg-muted/30 dark:bg-[#0a0a0a] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-4">
            Project Map
          </h2>
          <p className="text-lg text-black dark:text-white font-body max-w-2xl mx-auto">
            Witness the transformation of Zambia&apos;s infrastructure through
            our construction journey
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
            <h3 className="text-3xl font-heading font-bold mb-2">
              {images[activeImage].title}
            </h3>
            <p className="text-lg font-paragraph text-white/90">
              {images[activeImage].description}
            </p>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`relative h-32 rounded-lg overflow-hidden transition-all duration-300 ${
                activeImage === index
                  ? "ring-4 ring-[#fdb913] scale-105"
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
