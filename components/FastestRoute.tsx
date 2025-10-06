// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// const slides = [
//   {
//     id: 1,
//     image:
//       "https://res.cloudinary.com/dpeg7wc34/image/upload/v1756193625/modern-highway-construction-in-africa-with-mining-_wwaibc.png",
//     title: "FASTEST ROUTE TO WALVIS BAY",
//     subtitle: "Revolutionary Infrastructure Development",
//     buttonText: "VIEW PROJECT HIGHLIGHTS",
//   },
//   {
//     id: 2,
//     image:
//       "https://res.cloudinary.com/dpeg7wc34/image/upload/v1756193625/aerial-view-of-african-highway-construction-site-w_ulux6u.png",
//     title: "CONNECTING COMMUNITIES",
//     subtitle: "Advanced Bridge Engineering",
//     buttonText: "EXPLORE ENGINEERING",
//   },
//   {
//     id: 3,
//     image:
//       "https://res.cloudinary.com/dpeg7wc34/image/upload/v1756193625/aerial-view-of-african-highway-construction-site-w_ulux6u.png",
//     title: "MOUNTAIN PASS PROJECT",
//     subtitle: "Sustainable Transportation Solutions",
//     buttonText: "DISCOVER MORE",
//   },
//   {
//     id: 4,
//     image:
//       "https://res.cloudinary.com/dpeg7wc34/image/upload/v1756193625/aerial-view-of-african-highway-construction-site-w_ulux6u.png",
//     title: "TEST PROJECT",
//     subtitle: "Sustainable Transportation Solutions",
//     buttonText: "DISCOVER MORE",
//   },
// ];

// // Custom Arrow Icons
// const CustomLeftArrow = () => (
//   <svg
//     width="68"
//     height="50"
//     viewBox="0 0 68 50"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <rect width="68" height="50" fill="#D6A800" />
//     <path d="M44 10 L28 25 L44 40 L36 40 L20 25 L36 10 Z" fill="white" />
//   </svg>
// );

// // Custom Arrow Icons
// const CustomRightArrow = () => (
//   <svg
//     width="68"
//     height="50"
//     viewBox="0 0 68 50"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     {/* Golden background */}
//     <rect width="68" height="50" fill="#D6A800" />

//     {/* White chevron arrow - pointing right */}
//     <path d="M24 10 L40 25 L24 40 L32 40 L48 25 L32 10 Z" fill="white" />
//   </svg>
// );

// const Route = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying]);

//   const goToSlide = (index: number) => {
//     if (index === currentSlide || isTransitioning) return;

//     setIsTransitioning(true);
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);

//     setTimeout(() => {
//       setIsTransitioning(false);
//     }, 600);

//     // Resume auto-play after 10 seconds
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const goToPrevious = () => {
//     if (isTransitioning) return;

//     setIsTransitioning(true);
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setIsAutoPlaying(false);

//     setTimeout(() => {
//       setIsTransitioning(false);
//     }, 600);

//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const goToNext = () => {
//     if (isTransitioning) return;

//     setIsTransitioning(true);
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setIsAutoPlaying(false);

//     setTimeout(() => {
//       setIsTransitioning(false);
//     }, 600);

//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const getPreviousSlide = () =>
//     (currentSlide - 1 + slides.length) % slides.length;
//   const getNextSlide = () => (currentSlide + 1) % slides.length;

//   // Get card stacking positions and animations
//   const getCardStyles = (index: number) => {
//     const position = (index - currentSlide + slides.length) % slides.length;

//     switch (position) {
//       case 0: // Current card (top of deck)
//         return {
//           transform: "translateX(0) translateY(0) scale(1) rotateY(0deg)",
//           zIndex: 30,
//           opacity: 1,
//         };
//       case 1: // Next card (slightly behind and to the right)
//         return {
//           transform:
//             "translateX(20px) translateY(10px) scale(0.95) rotateY(-5deg)",
//           zIndex: 20,
//           opacity: 0.8,
//         };
//       case 2: // Second next card (further behind)
//         return {
//           transform:
//             "translateX(40px) translateY(20px) scale(0.9) rotateY(-10deg)",
//           zIndex: 10,
//           opacity: 0.6,
//         };
//       case slides.length - 1: // Previous card (slightly behind and to the left)
//         return {
//           transform:
//             "translateX(-20px) translateY(10px) scale(0.95) rotateY(5deg)",
//           zIndex: 20,
//           opacity: 0.8,
//         };
//       case slides.length - 2: // Second previous card
//         return {
//           transform:
//             "translateX(-40px) translateY(20px) scale(0.9) rotateY(10deg)",
//           zIndex: 10,
//           opacity: 0.6,
//         };
//       default: // Hidden cards
//         return {
//           transform: "translateX(0) translateY(60px) scale(0.8) rotateY(0deg)",
//           zIndex: 0,
//           opacity: 0,
//         };
//     }
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden bg-white">
//       <div className="absolute inset-0 flex items-center justify-center">
//         {/* Main Card Deck Container with thumbnails positioned relative to it */}
//         <div className="relative w-full max-w-6xl h-4/5 flex items-center justify-center">
//           {/* Left Thumbnail - positioned half in/half out of main container */}
//           <div
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1/5 h-1/3 z-40 rounded-lg overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105"
//             onClick={goToPrevious}
//           >
//             <Image
//               src={slides[getPreviousSlide()].image}
//               alt={slides[getPreviousSlide()].title}
//               fill
//               className="object-cover opacity-80"
//               sizes="(max-width: 768px) 100vw, 20vw"
//               priority={false}
//             />
//             <div className="absolute inset-0 bg-black/30 rounded-lg" />
//             <div className="absolute inset-0 border-2 border-white/30 rounded-lg" />
//           </div>

//           {/* Card Deck */}
//           <div className="w-full h-full relative perspective-1000">
//             <div className="relative w-full h-full">
//               {slides.map((slide, index) => {
//                 const cardStyles = getCardStyles(index);

//                 return (
//                   <div
//                     key={slide.id}
//                     className="absolute inset-0 transition-all duration-600 ease-out cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
//                     style={{
//                       transform: cardStyles.transform,
//                       zIndex: cardStyles.zIndex,
//                       opacity: cardStyles.opacity,
//                       transformStyle: "preserve-3d",
//                     }}
//                     onClick={() => index !== currentSlide && goToSlide(index)}
//                   >
//                     <Image
//                       src={slide.image}
//                       alt={slide.title}
//                       fill
//                       className="object-cover"
//                       sizes="(max-width: 768px) 100vw, 100vw"
//                       priority={index === 0}
//                     />

//                     {/* Card overlay */}
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${index === currentSlide ? "opacity-100" : "opacity-40"
//                         }`}
//                     />

//                     {/* Card border for depth */}
//                     <div
//                       className={`absolute inset-0 border-2 transition-all duration-300 ${index === currentSlide
//                         ? "rounded-none"
//                         : "border-white/10"
//                         }`}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Right Thumbnail - positioned half in/half out of main container */}
//           <div
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1/5 h-1/3 z-40 rounded-lg overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105"
//             onClick={goToNext}
//           >
//             <Image
//               src={slides[getNextSlide()].image}
//               alt={slides[getNextSlide()].title}
//               fill
//               className="object-cover opacity-80"
//               sizes="(max-width: 768px) 100vw, 20vw"
//               priority={false}
//             />
//             <div className="absolute inset-0 bg-black/30 rounded-lg" />
//             <div className="absolute inset-0 border-2 border-white/30 rounded-lg" />
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows with Custom SVG */}
//       <button
//         onClick={goToPrevious}
//         disabled={isTransitioning}
//         className={`absolute left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${isTransitioning
//           ? "opacity-50 cursor-not-allowed"
//           : "hover:shadow-2xl cursor-pointer"
//           }`}
//         aria-label="Previous slide"
//       >
//         <CustomLeftArrow />
//       </button>

//       <button
//         onClick={goToNext}
//         disabled={isTransitioning}
//         className={`absolute right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${isTransitioning
//           ? "opacity-50 cursor-not-allowed"
//           : "hover:shadow-2xl cursor-pointer"
//           }`}
//         aria-label="Next slide"
//       >
//         <CustomRightArrow />
//       </button>

//       {/* Content Overlay - positioned over the current card */}
//       <div className="absolute top-50 inset-0 flex items-center justify-center z-35 pointer-events-none">
//         <div className="text-center bg-gray-800/70 p-3 text-white max-w-4xl px-6">
//           <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-4 text-balance drop-shadow-2xl">
//             {slides[currentSlide].title}
//           </h1>
//           <p className="text-lg md:text-xl lg:text-xl mb-8 text-balance opacity-90 drop-shadow-lg">
//             {slides[currentSlide].subtitle}
//           </p>
//           <Button
//             size="lg"
//             className="bg-[#EAB81E] hover:bg-[#be9416] text-black font-semibold px-8 py-3 text-base md:text-sm transition-all duration-300 hover:scale-105 shadow-2xl pointer-events-auto"
//           >
//             {slides[currentSlide].buttonText}
//           </Button>
//         </div>
//       </div>

//       {/* Dot Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             disabled={isTransitioning}
//             className={`transition-all duration-300 rounded-full ${index === currentSlide
//               ? "bg-[#E6B102] w-8 h-3 shadow-lg shadow-amber-500/50"
//               : "bg-white/50 hover:bg-white/75 w-3 h-3 hover:scale-125"
//               } ${isTransitioning ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Add CSS for 3D perspective */}
//       <style jsx>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Route;

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// const slides = [
//   {
//     id: 1,
//     image:
//       "https://res.cloudinary.com/dpeg7wc34/image/upload/v1756193625/modern-highway-construction-in-africa-with-mining-_wwaibc.png",
//     title: "FASTEST ROUTE TO WALVIS BAY",
//     subtitle: "Revolutionary Infrastructure Development",
//     buttonText: "VIEW PROJECT HIGHLIGHTS",
//   },
//   {
//     id: 2,
//     image:
//       "https://res.cloudinary.com/dpeg7wc34/image/upload/v1756193625/aerial-view-of-african-highway-construction-site-w_ulux6u.png",
//     title: "CONNECTING COMMUNITIES",
//     subtitle: "Advanced Bridge Engineering",
//     buttonText: "EXPLORE ENGINEERING",
//   },
//   {
//     id: 3,
//     image:
//       "https://res.cloudinary.com/dpeg7wc34/image/upload/v1756193625/aerial-view-of-african-highway-construction-site-w_ulux6u.png",
//     title: "MOUNTAIN PASS PROJECT",
//     subtitle: "Sustainable Transportation Solutions",
//     buttonText: "DISCOVER MORE",
//   },
//   {
//     id: 4,
//     image:
//       "https://res.cloudinary.com/dpeg7wc34/image/upload/v1756193625/aerial-view-of-african-highway-construction-site-w_ulux6u.png",
//     title: "TEST PROJECT",
//     subtitle: "Sustainable Transportation Solutions",
//     buttonText: "DISCOVER MORE",
//   },
// ];

// // Custom Arrow Icons
// const CustomLeftArrow = () => (
//   <svg
//     width="68"
//     height="50"
//     viewBox="0 0 68 50"
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-12 h-9 md:w-[68px] md:h-[50px]"
//   >
//     <rect width="68" height="50" fill="#D6A800" />
//     <path d="M44 10 L28 25 L44 40 L36 40 L20 25 L36 10 Z" fill="white" />
//   </svg>
// );

// // Custom Arrow Icons
// const CustomRightArrow = () => (
//   <svg
//     width="68"
//     height="50"
//     viewBox="0 0 68 50"
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-12 h-9 md:w-[68px] md:h-[50px]"
//   >
//     {/* Golden background */}
//     <rect width="68" height="50" fill="#D6A800" />

//     {/* White chevron arrow - pointing right */}
//     <path d="M24 10 L40 25 L24 40 L32 40 L48 25 L32 10 Z" fill="white" />
//   </svg>
// );

// const Route = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect mobile on mount and resize
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying]);

//   const goToSlide = (index: number) => {
//     if (index === currentSlide || isTransitioning) return;

//     setIsTransitioning(true);
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);

//     setTimeout(() => {
//       setIsTransitioning(false);
//     }, 600);

//     // Resume auto-play after 10 seconds
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const goToPrevious = () => {
//     if (isTransitioning) return;

//     setIsTransitioning(true);
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setIsAutoPlaying(false);

//     setTimeout(() => {
//       setIsTransitioning(false);
//     }, 600);

//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const goToNext = () => {
//     if (isTransitioning) return;

//     setIsTransitioning(true);
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setIsAutoPlaying(false);

//     setTimeout(() => {
//       setIsTransitioning(false);
//     }, 600);

//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const getPreviousSlide = () =>
//     (currentSlide - 1 + slides.length) % slides.length;
//   const getNextSlide = () => (currentSlide + 1) % slides.length;

//   // Get card stacking positions and animations
//   const getCardStyles = (index: number) => {
//     const position = (index - currentSlide + slides.length) % slides.length;

//     // On mobile, only show current card
//     if (isMobile) {
//       if (index === currentSlide) {
//         return {
//           transform: "translateX(0) translateY(0) scale(1) rotateY(0deg)",
//           zIndex: 30,
//           opacity: 1,
//         };
//       }
//       return {
//         transform: "translateX(0) translateY(0) scale(1) rotateY(0deg)",
//         zIndex: 0,
//         opacity: 0,
//       };
//     }

//     // Desktop card stacking (unchanged)
//     switch (position) {
//       case 0: // Current card (top of deck)
//         return {
//           transform: "translateX(0) translateY(0) scale(1) rotateY(0deg)",
//           zIndex: 30,
//           opacity: 1,
//         };
//       case 1: // Next card (slightly behind and to the right)
//         return {
//           transform:
//             "translateX(20px) translateY(10px) scale(0.95) rotateY(-5deg)",
//           zIndex: 20,
//           opacity: 0.8,
//         };
//       case 2: // Second next card (further behind)
//         return {
//           transform:
//             "translateX(40px) translateY(20px) scale(0.9) rotateY(-10deg)",
//           zIndex: 10,
//           opacity: 0.6,
//         };
//       case slides.length - 1: // Previous card (slightly behind and to the left)
//         return {
//           transform:
//             "translateX(-20px) translateY(10px) scale(0.95) rotateY(5deg)",
//           zIndex: 20,
//           opacity: 0.8,
//         };
//       case slides.length - 2: // Second previous card
//         return {
//           transform:
//             "translateX(-40px) translateY(20px) scale(0.9) rotateY(10deg)",
//           zIndex: 10,
//           opacity: 0.6,
//         };
//       default: // Hidden cards
//         return {
//           transform: "translateX(0) translateY(60px) scale(0.8) rotateY(0deg)",
//           zIndex: 0,
//           opacity: 0,
//         };
//     }
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden bg-white">
//       <div className="absolute inset-0 flex items-center justify-center">
//         {/* Main Card Deck Container with thumbnails positioned relative to it */}
//         <div className="relative w-full max-w-6xl md:h-4/5 h-full flex items-center justify-center px-4 md:px-0">
//           {/* Left Thumbnail - HIDDEN ON MOBILE */}
//           <div
//             className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1/5 h-1/3 z-40 rounded-lg overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105"
//             onClick={goToPrevious}
//           >
//             <Image
//               src={slides[getPreviousSlide()].image}
//               alt={slides[getPreviousSlide()].title}
//               fill
//               className="object-cover opacity-80"
//               sizes="(max-width: 768px) 100vw, 20vw"
//               priority={false}
//             />
//             <div className="absolute inset-0 bg-black/30 rounded-lg" />
//             <div className="absolute inset-0 border-2 border-white/30 rounded-lg" />
//           </div>

//           {/* Card Deck */}
//           <div className="w-full h-full relative perspective-1000">
//             <div className="relative w-full h-full">
//               {slides.map((slide, index) => {
//                 const cardStyles = getCardStyles(index);

//                 return (
//                   <div
//                     key={slide.id}
//                     className="absolute inset-0 transition-all duration-600 ease-out cursor-pointer md:rounded-2xl rounded-lg overflow-hidden shadow-2xl"
//                     style={{
//                       transform: cardStyles.transform,
//                       zIndex: cardStyles.zIndex,
//                       opacity: cardStyles.opacity,
//                       transformStyle: "preserve-3d",
//                     }}
//                     onClick={() => index !== currentSlide && goToSlide(index)}
//                   >
//                     <Image
//                       src={slide.image}
//                       alt={slide.title}
//                       fill
//                       className="object-cover"
//                       sizes="(max-width: 768px) 100vw, 100vw"
//                       priority={index === 0}
//                     />

//                     {/* Card overlay */}
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${index === currentSlide ? "opacity-100" : "opacity-40"
//                         }`}
//                     />

//                     {/* Card border for depth */}
//                     <div
//                       className={`absolute inset-0 border-2 transition-all duration-300 ${index === currentSlide
//                         ? "rounded-none"
//                         : "border-white/10"
//                         }`}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Right Thumbnail - HIDDEN ON MOBILE */}
//           <div
//             className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1/5 h-1/3 z-40 rounded-lg overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105"
//             onClick={goToNext}
//           >
//             <Image
//               src={slides[getNextSlide()].image}
//               alt={slides[getNextSlide()].title}
//               fill
//               className="object-cover opacity-80"
//               sizes="(max-width: 768px) 100vw, 20vw"
//               priority={false}
//             />
//             <div className="absolute inset-0 bg-black/30 rounded-lg" />
//             <div className="absolute inset-0 border-2 border-white/30 rounded-lg" />
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows - smaller on mobile */}
//       <button
//         onClick={goToPrevious}
//         disabled={isTransitioning}
//         className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${isTransitioning
//           ? "opacity-50 cursor-not-allowed"
//           : "hover:shadow-2xl cursor-pointer"
//           }`}
//         aria-label="Previous slide"
//       >
//         <CustomLeftArrow />
//       </button>

//       <button
//         onClick={goToNext}
//         disabled={isTransitioning}
//         className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${isTransitioning
//           ? "opacity-50 cursor-not-allowed"
//           : "hover:shadow-2xl cursor-pointer"
//           }`}
//         aria-label="Next slide"
//       >
//         <CustomRightArrow />
//       </button>

//       {/* Content Overlay - DESKTOP UNCHANGED, mobile improved */}
//       <div className="absolute top-50 inset-0 flex items-center justify-center z-35 pointer-events-none">
//         <div className="text-center bg-gray-800/70 md:p-3 p-4 text-white max-w-4xl md:px-6 px-4 md:backdrop-blur-none backdrop-blur-sm md:rounded-none rounded-lg mx-4 md:mx-0">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold md:mb-4 mb-3 text-balance drop-shadow-2xl leading-tight">
//             {slides[currentSlide].title}
//           </h1>
//           <p className="text-sm sm:text-base md:text-lg lg:text-xl md:mb-8 mb-4 text-balance opacity-90 drop-shadow-lg">
//             {slides[currentSlide].subtitle}
//           </p>
//           <Button
//             size="lg"
//             className="bg-[#EAB81E] hover:bg-[#be9416] text-black font-semibold md:px-8 px-6 md:py-3 py-2 md:text-base text-sm transition-all duration-300 hover:scale-105 shadow-2xl pointer-events-auto w-full sm:w-auto"
//           >
//             {slides[currentSlide].buttonText}
//           </Button>
//         </div>
//       </div>

//       {/* Dot Indicators - smaller on mobile */}
//       <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-40 flex space-x-2 md:space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             disabled={isTransitioning}
//             className={`transition-all duration-300 rounded-full ${index === currentSlide
//               ? "bg-[#E6B102] md:w-8 w-6 md:h-3 h-2.5 shadow-lg shadow-amber-500/50"
//               : "bg-white/50 hover:bg-white/75 md:w-3 w-2.5 md:h-3 h-2.5 hover:scale-125"
//               } ${isTransitioning ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Add CSS for 3D perspective */}
//       <style jsx>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Route;

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
    className="w-12 h-9 md:w-[68px] md:h-[50px]"
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
    className="w-12 h-9 md:w-[68px] md:h-[50px]"
  >
    <rect width="68" height="50" fill="#D6A800" />
    <path d="M24 10 L40 25 L24 40 L32 40 L48 25 L32 10 Z" fill="white" />
  </svg>
);

const Route = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
                className={`absolute inset-0 transition-all duration-600 ease-out overflow-hidden shadow-2xl ${index === currentSlide ? "opacity-100 z-30" : "opacity-0 z-0"
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

      {/* Navigation Arrows - smaller on mobile */}
      <button
        onClick={goToPrevious}
        disabled={isTransitioning}
        className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${isTransitioning
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
        className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${isTransitioning
          ? "opacity-50 cursor-not-allowed"
          : "hover:shadow-2xl cursor-pointer"
          }`}
        aria-label="Next slide"
      >
        <CustomRightArrow />
      </button>

      {/* Content Overlay - DESKTOP UNCHANGED, mobile improved */}
      <div className="absolute top-50 inset-0 flex items-center justify-center z-35 pointer-events-none">
        <div className="text-center bg-gray-800/80 md:p-3 p-4 text-white max-w-4xl md:px-6 px-4 md:backdrop-blur-none backdrop-blur-sm md:rounded-none rounded-lg mx-4 md:mx-0 border-t-4 border-[#D6A800]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold md:mb-4 mb-3 text-balance drop-shadow-2xl leading-tight">
            {slides[currentSlide].title}
          </h1>
          <Button
            size="lg"
            className="bg-[#EAB81E] hover:bg-[#be9416] text-black font-semibold md:px-8 px-6 md:py-3 py-2 md:text-base text-sm transition-all duration-300 hover:scale-105 shadow-2xl pointer-events-auto w-full sm:w-auto"
          >
            {slides[currentSlide].buttonText}
          </Button>
        </div>
      </div>

      {/* Dot Indicators - smaller on mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-40 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`transition-all rounded-full duration-300 ${index === currentSlide
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