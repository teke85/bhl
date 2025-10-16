// "use client";

// import React, { useState, useRef } from "react";
// import { Input } from "@/components/ui/input";
// import { Search, Grid, List, ZoomIn, Calendar, MapPin } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import NavigationMenu from "@/components/NavigationMenu";

// interface GalleryImage {
//   src: string;
//   alt: string;
//   title: string;
//   location: string;
//   date: string;
//   category: string;
// }

// const Gallery = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");
//   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Searching for:", searchQuery);
//   };

//   const galleryImages: GalleryImage[] = [
//     {
//       src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       alt: "Highway construction progress",
//       title: "Walvis Bay Corridor Highway",
//       location: "Zambia - Namibia Border",
//       date: "March 2025",
//       category: "Transportation",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       alt: "Construction site aerial view",
//       title: "Urban Development Project",
//       location: "Lusaka, Zambia",
//       date: "February 2025",
//       category: "Urban Development",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       alt: "Bridge construction",
//       title: "Kafue River Bridge",
//       location: "Kafue, Zambia",
//       date: "January 2025",
//       category: "Infrastructure",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       alt: "Modern office buildings",
//       title: "Commercial Complex",
//       location: "Ndola, Zambia",
//       date: "December 2024",
//       category: "Commercial",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       alt: "Sustainable construction methods",
//       title: "Green Building Initiative",
//       location: "Kitwe, Zambia",
//       date: "November 2024",
//       category: "Sustainability",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       alt: "Team collaboration",
//       title: "Project Team Meeting",
//       location: "Head Office, Lusaka",
//       date: "October 2024",
//       category: "Team",
//     },
//   ];

//   const categories = [
//     "All",
//     "Transportation",
//     "Urban Development",
//     "Infrastructure",
//     "Commercial",
//     "Sustainability",
//     "Team",
//   ];
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredImages =
//     activeCategory === "All"
//       ? galleryImages
//       : galleryImages.filter((image) => image.category === activeCategory);

//   const openLightbox = (image: any) => {
//     setSelectedImage(image);
//     document.body.style.overflow = "hidden";
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = "unset";
//   };

//   return (
//     <div className="relative min-h-screen w-full">
//       {/* Navigation Header */}
//       <nav className="absolute top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-sm">
//         <div className="container mx-auto px-4 py-2">
//           <div className="flex items-center justify-between h-16">
//             <div className="relative z-50">
//               <div className="w-20 h-22 relative overflow-hidden">
//                 <Link href="/">
//                   <Image
//                     src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758461466/WhatsApp_Image_2025-08-29_at_13.11.42_ciqb2u-removebg-preview_dolid4.png"
//                     alt="Company Logo"
//                     width={500}
//                     height={500}
//                     className="object-contain w-full h-full"
//                     priority={true}
//                     quality={100}
//                   />
//                 </Link>
//               </div>
//             </div>

//             <div className="relative z-30 hidden md:block">
//               <NavigationMenu />
//             </div>

//             <div className="relative z-30 hidden sm:block">
//               <form onSubmit={handleSearch} className="relative">
//                 <Input
//                   type="text"
//                   placeholder="Search"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-48 md:w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-[#ad8b19] transition-all duration-300"
//                 />
//                 <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative h-[60vh] min-h-[400px] md:min-h-[500px] w-full overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//             alt="Gallery showcase background"
//             fill
//             className="object-cover"
//             priority
//             sizes="100vw"
//           />
//           <div className="absolute inset-0 bg-black/50" />
//         </div>

//         <div className="relative z-10 flex items-center justify-center h-full">
//           <div className="container mx-auto px-4 text-white relative">
//             {/* Large Background Text - Responsive */}
//             <div className="absolute inset-0 flex items-center justify-start pointer-events-none overflow-hidden">
//               <h2 className="text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[15rem] xl:text-[14rem] font-black text-white/10 md:text-white/25 font-[family-name:var(--font-outfit)] select-none leading-none whitespace-nowrap transform -translate-x-8 md:translate-x-0">
//                 GALLERY
//               </h2>
//             </div>

//             <div className="relative z-10 pt-8 md:pt-16">
//               <h1
//                 ref={titleRef}
//                 className="text-4xl text-left border-l-4 border-[#EAB81E] pl-4 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 text-white font-[family-name:var(--font-outfit)] leading-tight tracking-tight"
//               >
//                 GALLERY
//               </h1>

//               <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl font-[family-name:var(--font-jost)] leading-relaxed ml-4">
//                 Discover our journey through images showcasing our projects,
//                 team, and achievements.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EAB81E] to-transparent opacity-60" />
//       </div>

//       {/* Content Section */}
//       <div className="relative bg-white">
//         <div className="container mx-auto px-4 py-12 md:py-16">
//           {/* Controls Section */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 mb-8">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-outfit)]">
//                 Project Gallery
//               </h2>
//               <p className="text-gray-600 font-[family-name:var(--font-jost)]">
//                 {filteredImages.length} images in this collection
//               </p>
//             </div>

//             {/* View Mode Toggle */}
//             <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded-md transition-colors duration-300 ${
//                   viewMode === "grid"
//                     ? "bg-[#EAB81E] text-white"
//                     : "text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 <Grid className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => setViewMode("masonry")}
//                 className={`p-2 rounded-md transition-colors duration-300 ${
//                   viewMode === "masonry"
//                     ? "bg-[#EAB81E] text-white"
//                     : "text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 <List className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           {/* Category Filters */}
//           <div className="flex flex-wrap gap-2 md:gap-4 mb-8">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
//                   activeCategory === category
//                     ? "bg-[#EAB81E] text-white"
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Gallery Grid */}
//           <div
//             className={`grid gap-4 md:gap-6 ${
//               viewMode === "grid"
//                 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//                 : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
//             }`}
//           >
//             {filteredImages.map((image, index) => (
//               <div
//                 key={index}
//                 className={`group relative overflow-hidden rounded-lg bg-gray-200 cursor-pointer ${
//                   viewMode === "masonry" && index % 3 === 1
//                     ? "sm:row-span-2"
//                     : ""
//                 }`}
//                 onClick={() => openLightbox(image)}
//               >
//                 <div className="relative aspect-square overflow-hidden">
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                     <ZoomIn className="w-8 h-8 text-white" />
//                   </div>

//                   {/* Info Overlay */}
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                     <h3 className="text-white font-semibold mb-1 font-[family-name:var(--font-outfit)]">
//                       {image.title}
//                     </h3>
//                     <div className="flex items-center text-white/80 text-sm">
//                       <MapPin className="w-3 h-3 mr-1" />
//                       <span className="font-[family-name:var(--font-jost)]">
//                         {image.location}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Category Badge */}
//                   <div className="absolute top-4 left-4">
//                     <span className="px-2 py-1 bg-[#EAB81E]/90 text-white text-xs font-medium rounded-full">
//                       {image.category}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Statistics Section */}
//           <div className="mt-16 bg-gray-50 rounded-2xl p-6 md:p-8">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {[
//                 { label: "Total Images", value: "500+" },
//                 { label: "Projects Documented", value: "45+" },
//                 { label: "Countries Covered", value: "8" },
//                 { label: "Years of History", value: "25+" },
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-2xl md:text-3xl font-bold text-[#EAB81E] mb-2 font-[family-name:var(--font-outfit)]">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm md:text-base text-gray-600 font-[family-name:var(--font-jost)]">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
//           <div className="relative max-w-4xl max-h-[90vh] w-full">
//             <button
//               onClick={closeLightbox}
//               className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl"
//             >
//               ×
//             </button>

//             <div className="relative aspect-video w-full overflow-hidden rounded-lg">
//               <Image
//                 src={selectedImage.src}
//                 alt={selectedImage.alt}
//                 fill
//                 className="object-contain"
//                 sizes="90vw"
//               />
//             </div>

//             <div className="mt-4 text-white">
//               <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-outfit)]">
//                 {selectedImage.title}
//               </h3>
//               <div className="flex items-center gap-4 text-sm text-white/80">
//                 <div className="flex items-center">
//                   <MapPin className="w-4 h-4 mr-1" />
//                   {selectedImage.location}
//                 </div>
//                 <div className="flex items-center">
//                   <Calendar className="w-4 h-4 mr-1" />
//                   {selectedImage.date}
//                 </div>
//                 <span className="px-2 py-1 bg-[#EAB81E] rounded-full text-xs">
//                   {selectedImage.category}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;

"use client"

import { Footer } from "@/components/Footer"
import StickyNavigationMenu from "@/components/StickyNav"
import GalleryHero from "@/components/gallery/GalleryHero"
import GalleryGrid from "@/components/gallery/GalleryGrid"
import VideoShowcase from "@/components/gallery/VideoShowcase"
import PhotoCategories from "@/components/gallery/PhotoCategories"
import MobileMenu from "@/components/MobileMenu"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
      {/* Header Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-3 items-center gap-4 h-16">
            <div className="relative z-30 justify-self-center">
              <StickyNavigationMenu />
            </div>
            <div className="relative z-30 justify-self-end" />
            <div className="col-span-3 md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <GalleryHero />
      <PhotoCategories />
      <GalleryGrid />
      <VideoShowcase />
      <Footer />
    </main>
  )
}
