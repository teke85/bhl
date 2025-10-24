"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function GalleryGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880434/DJI_0447_formphotoeditor.com_rxsbpj.jpg",
      category: "chilombo",
      title: "Chilombo River Bridge",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "landscape",
      title: "Scenic Corridor Views",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "equipment",
      title: "Heavy Machinery at Work",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "community",
      title: "Community Engagement",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880437/DJI_0448_formphotoeditor.com_pzsebx.jpg",
      category: "chilombo",
      title: "Chilombo River Bridge Construction",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "landscape",
      title: "Aerial View",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "equipment",
      title: "Paving Operations",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "community",
      title: "Local Partnership",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "landscape",
      title: "Road Development",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "equipment",
      title: "Construction Progress",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880434/DJI_0447_formphotoeditor.com_rxsbpj.jpg",
      category: "community",
      title: "Team Collaboration",
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880437/DJI_0448_formphotoeditor.com_pzsebx.jpg",
      category: "landscape",
      title: "Infrastructure Development",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-background dark:bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Project Gallery
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[#868584] dark:text-white font-paragraph max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our journey through visuals capturing the progress, milestones, and impact of the Barotse Corridor Connector project
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-heading font-semibold">{image.title}</p>
                  <p className="text-sm font-paragraph capitalize">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[80vh]"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </motion.div>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-[#fdb913] transition-colors w-12 h-12 flex items-center justify-center"
          >
            ×
          </button>
        </motion.div>
      )}
    </section>
  );
}