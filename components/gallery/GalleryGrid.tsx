"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  getAllGallery,
  getGalleryByCategory,
  getImageUrl,
  type GalleryItem,
} from "@/lib/wordpress-graphql";
import { useInView } from "react-intersection-observer";

export default function GalleryGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [imageLoadStates, setImageLoadStates] = useState<{
    [key: string]: boolean;
  }>({});

  // Gallery categories
  const categories = [
    "Chilombo",
    "Landscape",
    "Equipment",
    "Community",
    "Groundbreaking",
  ];

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        console.log("🔍 Fetching gallery via GraphQL...");
        console.log("🎯 Selected category:", selectedCategory);

        const data = selectedCategory
          ? await getGalleryByCategory(selectedCategory)
          : await getAllGallery();

        console.log("✅ GraphQL Gallery Response:", data);
        console.log("📊 Number of items:", data?.length);

        setGalleryImages(data || []);

        // Initialize load states for all images
        const initialLoadStates: { [key: string]: boolean } = {};
        data?.forEach((item) => {
          initialLoadStates[item.id] = false;
        });
        setImageLoadStates(initialLoadStates);
      } catch (error) {
        console.error("❌ Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [selectedCategory]);

  const handleImageLoad = (imageId: string) => {
    setImageLoadStates((prev) => ({
      ...prev,
      [imageId]: true,
    }));
  };

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

  // Skeleton loader component
  const ImageSkeleton = () => (
    <div className="relative overflow-hidden rounded-lg aspect-square bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse">
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
    </div>
  );

  if (loading) {
    return (
      <section className="py-20 md:py-32 bg-background dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="h-12 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-lg max-w-md mx-auto mb-4 animate-pulse" />
            <div className="h-6 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded max-w-2xl mx-auto animate-pulse" />
          </div>

          {/* Skeleton filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-12 w-20 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-full animate-pulse"
              />
            ))}
          </div>

          {/* Skeleton grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <ImageSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-background dark:bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-4">
            Project Gallery
          </h2>
          <p className="text-lg md:text-xl text-[#868584] dark:text-white font-paragraph max-w-2xl mx-auto">
            Explore our journey through visuals capturing the progress and
            milestones
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full font-paragraph transition-all duration-300 ${
              !selectedCategory
                ? "bg-[#fdb913] text-black scale-105 shadow-lg"
                : "bg-card dark:bg-[#1a1a1a] text-foreground dark:text-white hover:bg-[#fdb913]/20 border border-border dark:border-white/10"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-paragraph transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#fdb913] text-black scale-105 shadow-lg"
                  : "bg-card dark:bg-[#1a1a1a] text-foreground dark:text-white hover:bg-[#fdb913]/20 border border-border dark:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {galleryImages.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {galleryImages.map((item) => {
              const imageUrl = getImageUrl(item);
              const isLoaded = imageLoadStates[item.id];

              return (
                <motion.div
                  key={item.id}
                  className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(imageUrl)}
                >
                  {/* Skeleton */}
                  {!isLoaded && <ImageSkeleton />}

                  {/* Actual Image */}
                  <Image
                    src={imageUrl}
                    alt={item.title}
                    fill
                    className={`object-cover group-hover:scale-110 transition-all duration-300 ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    onLoad={() => handleImageLoad(item.id)}
                    priority={galleryImages.indexOf(item) < 4} // Priority for first 4 images
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4 ${
                      !isLoaded ? "opacity-0" : ""
                    }`}
                  >
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-heading font-semibold">{item.title}</p>
                      <p className="text-sm font-paragraph capitalize">
                        {Array.isArray(item.galleryFields?.category)
                          ? item.galleryFields.category.join(", ")
                          : item.galleryFields?.category || "Gallery"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-[#868584] dark:text-white font-paragraph">
              {selectedCategory
                ? `No images found in "${selectedCategory}" category.`
                : "No gallery images found."}
            </p>
          </div>
        )}
      </div>

      {/* Image Modal */}
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
