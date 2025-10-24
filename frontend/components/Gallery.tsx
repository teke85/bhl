"use client";

import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";

// ✅ Custom Arrow Icons
const CustomLeftArrow = () => (
  <svg
    width="68"
    height="50"
    viewBox="0 0 68 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="68" height="50" fill="#D6A800" />
    <path d="M44 10 L28 25 L44 40 L36 40 L20 25 L36 10 Z" fill="white" />
  </svg>
);

const CustomRightArrow = () => (
  <svg
    width="68"
    height="50"
    viewBox="0 0 68 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="68" height="50" fill="#D6A800" />
    <path d="M24 10 L40 25 L24 40 L32 40 L48 25 L32 10 Z" fill="white" />
  </svg>
);

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
      ease: easeOut,
    },
  }),
};

export default function GalleryPage() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const nextSlide = () => {
    if (startIndex + itemsPerPage < images.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="relative px-4 py-12 container-fluid max-w-full mx-auto overflow-hidden">
      {/* ✅ Subtle blackish blurred background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759688770/DJI_0521_q55ort.jpg"
          alt="Background"
          fill
          priority
          className="object-cover w-full h-full brightness-[0.25]"
        />
      </div>

      {/* ✅ Content Layer */}
      <div className="relative z-10">
        <PhotoProvider>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {visibleImages.map((src, i) => (
              <motion.div
                key={src}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="overflow-hidden w-60 sm:w-64 md:w-72 lg:w-80"
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

        {/* ✅ Navigation Arrows */}
        <div className="flex justify-between items-center gap-8 mt-4">
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            className={`transition-opacity ${
              startIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <CustomLeftArrow />
          </button>

          <button
            onClick={nextSlide}
            disabled={startIndex + itemsPerPage >= images.length}
            className={`transition-opacity ${
              startIndex + itemsPerPage >= images.length
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            }`}
          >
            <CustomRightArrow />
          </button>
        </div>
      </div>
    </main>
  );
}
