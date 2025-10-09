"use client";

import { motion, easeOut } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759927436/7_d8imqh.png",
  "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759927395/6_neav5t.png",
  "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759885151/5_yc443f.png",
  "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759918204/DJI_0565_10000_gb099t.jpg",
  "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759715557/DJI_0447_dd75q0.jpg",
  "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759688778/DJI_0483_fbiba6.jpg",
];

const stagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: easeOut, // ✅ Fixed here
    },
  }),
};

export default function GalleryPage() {
  return (
    <main className="px-4 py-12 container-fluid bg-black max-w-full mx-auto">
      <PhotoProvider>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="overflow-hidden break-inside-avoid"
            >
              <PhotoView src={src}>
                <Image
                  src={src}
                  alt={`BHL image ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </PhotoView>
            </motion.div>
          ))}
        </div>
      </PhotoProvider>
    </main>
  );
}
