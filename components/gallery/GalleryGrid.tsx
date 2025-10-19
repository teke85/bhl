"use client";

import { motion } from "framer-motion";
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
      src: "https://images.unsplash.com/photo-1581092162562-40038f56c239?w=600&h=400&fit=crop",
      category: "landscape",
      title: "Scenic Corridor Views",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      category: "equipment",
      title: "Heavy Machinery at Work",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1581092162562-40038f56c239?w=600&h=400&fit=crop",
      category: "community",
      title: "Community Engagement",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880437/DJI_0448_formphotoeditor.com_pzsebx.jpg",
      category: "chilombo",
      title: "Chilombo River Bridge",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1581092162562-40038f56c239?w=600&h=400&fit=crop",
      category: "landscape",
      title: "Aerial View",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      category: "equipment",
      title: "Paving Operations",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1581092162562-40038f56c239?w=600&h=400&fit=crop",
      category: "community",
      title: "Local Partnership",
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
        <motion.div
          className="grid md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{image.title}</p>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Gallery"
            className="max-w-4xl max-h-[80vh] object-contain rounded-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-3xl hover:text-[#fdb913] transition-colors"
          >
            ×
          </button>
        </motion.div>
      )}
    </section>
  );
}
