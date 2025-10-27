// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState } from "react";
// import { useInView } from "react-intersection-observer";

// export default function GalleryGrid() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const galleryImages = [
//     {
//       id: 1,
//       src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880434/DJI_0447_formphotoeditor.com_rxsbpj.jpg",
//       category: "chilombo",
//       title: "Chilombo River Bridge",
//     },
//     {
//       id: 2,
//       src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       category: "landscape",
//       title: "Scenic Corridor Views",
//     },
//     {
//       id: 3,
//       src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       category: "equipment",
//       title: "Heavy Machinery at Work",
//     },
//     {
//       id: 4,
//       src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       category: "community",
//       title: "Community Engagement",
//     },
//     {
//       id: 5,
//       src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880437/DJI_0448_formphotoeditor.com_pzsebx.jpg",
//       category: "chilombo",
//       title: "Chilombo River Bridge Construction",
//     },
//     {
//       id: 6,
//       src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       category: "landscape",
//       title: "Aerial View",
//     },
//     {
//       id: 7,
//       src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       category: "equipment",
//       title: "Paving Operations",
//     },
//     {
//       id: 8,
//       src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       category: "community",
//       title: "Local Partnership",
//     },
//     {
//       id: 9,
//       src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       category: "landscape",
//       title: "Road Development",
//     },
//     {
//       id: 10,
//       src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       category: "equipment",
//       title: "Construction Progress",
//     },
//     {
//       id: 11,
//       src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880434/DJI_0447_formphotoeditor.com_rxsbpj.jpg",
//       category: "community",
//       title: "Team Collaboration",
//     },
//     {
//       id: 12,
//       src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880437/DJI_0448_formphotoeditor.com_pzsebx.jpg",
//       category: "landscape",
//       title: "Infrastructure Development",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (
//     <section
//       ref={ref}
//       className="py-20 md:py-32 bg-background dark:bg-[#0a0a0a]"
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12 md:mb-16">
//           <motion.h2
//             className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//           >
//             Project Gallery
//           </motion.h2>
//           <motion.p
//             className="text-lg md:text-xl text-[#868584] dark:text-white font-paragraph max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Explore our journey through visuals capturing the progress, milestones, and impact of the Barotse Corridor Connector project
//           </motion.p>
//         </div>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           {galleryImages.map((image) => (
//             <motion.div
//               key={image.id}
//               className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//               onClick={() => setSelectedImage(image.src)}
//             >
//               <Image
//                 src={image.src}
//                 alt={image.title}
//                 fill
//                 className="object-cover group-hover:scale-110 transition-transform duration-300"
//                 sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
//               />
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
//                 <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <p className="font-heading font-semibold">{image.title}</p>
//                   <p className="text-sm font-paragraph capitalize">{image.category}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <motion.div
//           className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           onClick={() => setSelectedImage(null)}
//         >
//           <motion.div
//             className="relative max-w-4xl max-h-[80vh]"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Image
//               src={selectedImage}
//               alt="Gallery"
//               width={1200}
//               height={800}
//               className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
//             />
//           </motion.div>
//           <button
//             onClick={() => setSelectedImage(null)}
//             className="absolute top-4 right-4 text-white text-4xl hover:text-[#fdb913] transition-colors w-12 h-12 flex items-center justify-center"
//           >
//             ×
//           </button>
//         </motion.div>
//       )}
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { galleryAPI, getStrapiMedia } from "@/lib/strapi";
import type { GalleryItem } from "@/types/strapi";
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

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = selectedCategory
          ? await galleryAPI.getByCategory(selectedCategory)
          : await galleryAPI.getAll();
        setGalleryImages(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [selectedCategory]);

  const categories = ["Chilombo", "Landscape", "Equipment", "Community"];

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

  if (loading) {
    return (
      <section className="py-20 md:py-32 bg-background dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#fdb913]"></div>
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
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-4">
            Project Gallery
          </h2>
          <p className="text-lg md:text-xl text-[#868584] dark:text-white font-paragraph max-w-2xl mx-auto">
            Explore our journey through visuals capturing the progress and milestones
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full font-paragraph transition-all duration-300 ${!selectedCategory
              ? "bg-[#fdb913] text-black scale-105"
              : "bg-card dark:bg-[#1a1a1a] text-foreground dark:text-white hover:bg-[#fdb913]/20 border border-border dark:border-white/10"
              }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-paragraph transition-all duration-300 ${selectedCategory === cat
                ? "bg-[#fdb913] text-black scale-105"
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
              // Check if item exists
              if (!item) {
                console.warn('Gallery item is null/undefined');
                return null;
              }

              // Handle both v4 (with attributes) and v5 (flat) structures
              const itemData = item.attributes || item;

              const imageUrl = getStrapiMedia(itemData.image);

              // Skip items without valid images
              if (!imageUrl || imageUrl === '/placeholder.svg') {
                console.warn('Gallery item missing image:', item.id);
                return null;
              }

              return (
                <motion.div
                  key={item.id}
                  className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(imageUrl)}
                >
                  <Image
                    src={imageUrl}
                    alt={itemData.title || 'Gallery image'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-heading font-semibold">
                        {itemData.title}
                      </p>
                      <p className="text-sm font-paragraph capitalize">
                        {itemData.category}
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
              No images found in this category.
            </p>
          </div>
        )}
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