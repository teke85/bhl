"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759688787/DJI_0515_j4zeml.jpg",
    title: "FASTEST ROUTE TO WALVIS BAY",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759688770/DJI_0521_q55ort.jpg",
    title: "CONNECTING COMMUNITIES",

    buttonText: "EXPLORE ENGINEERING",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759688770/DJI_0521_q55ort.jpg",
    title: "ENHANCING TRADE ROUTES",

    buttonText: "DISCOVER MORE",
  },
];

// Custom Arrow Icons
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

const Route = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide(index);
    setIsAutoPlaying(false);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);

    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);

    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);

    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getPreviousSlide = () =>
    (currentSlide - 1 + slides.length) % slides.length;
  const getNextSlide = () => (currentSlide + 1) % slides.length;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main Carousel Container */}
        <div className="relative w-full max-w-6xl h-4/5 flex items-center justify-center">
          {/* Left Thumbnail - positioned half in/half out */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1/5 h-1/3 z-40 overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={goToPrevious}
          >
            <Image
              src={slides[getPreviousSlide()].image}
              alt={slides[getPreviousSlide()].title}
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, 20vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 border-2 border-white/30" />
          </div>

          {/* Carousel Slides */}
          <div className="relative w-full h-full overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-600 ease-out overflow-hidden shadow-2xl ${
                  index === currentSlide ? "opacity-100 z-30" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 100vw"
                  priority={index === 0}
                />

                {/* Card overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100`}
                />

                {/* Card border for depth */}
                <div className="absolute inset-0 border-2 border-white/10" />
              </div>
            ))}
          </div>

          {/* Right Thumbnail - positioned half in/half out */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1/5 h-1/3 z-40 overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={goToNext}
          >
            <Image
              src={slides[getNextSlide()].image}
              alt={slides[getNextSlide()].title}
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, 20vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 border-2 border-white/30" />
          </div>
        </div>
      </div>

      {/* Navigation Arrows with Custom SVG */}
      <button
        onClick={goToPrevious}
        disabled={isTransitioning}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
          isTransitioning
            ? "opacity-50 cursor-not-allowed"
            : "hover:shadow-2xl cursor-pointer"
        }`}
        aria-label="Previous slide"
      >
        <CustomLeftArrow />
      </button>

      <button
        onClick={goToNext}
        disabled={isTransitioning}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
          isTransitioning
            ? "opacity-50 cursor-not-allowed"
            : "hover:shadow-2xl cursor-pointer"
        }`}
        aria-label="Next slide"
      >
        <CustomRightArrow />
      </button>

      {/* Content Overlay - positioned over the current card */}
      <div className="absolute top-50 inset-0 flex items-center justify-center z-35 pointer-events-none">
        <div className="text-center bg-gray-800/70 p-3 text-white max-w-4xl px-6">
          <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-4 text-balance drop-shadow-2xl">
            {slides[currentSlide].title}
          </h1>

          <Button
            size="lg"
            className="bg-[#EAB81E] hover:bg-[#be9416] text-black font-semibold px-8 py-3 text-base md:text-sm transition-all duration-300 hover:scale-105 shadow-2xl pointer-events-auto"
          >
            {slides[currentSlide].buttonText}
          </Button>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`transition-all rounded-full duration-300 ${
              index === currentSlide
                ? "bg-[#E6B102] w-8 h-3 shadow-lg shadow-amber-500/50"
                : "bg-white/50 hover:bg-white/75 w-3 h-3 hover:scale-125"
            } ${isTransitioning ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Route;
