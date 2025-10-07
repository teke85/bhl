// "use client";

// import React, { useState, useRef } from "react";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import NavigationMenu from "@/components/NavigationMenu";

// const Milestones = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const titleRef = useRef<HTMLHeadingElement>(null);

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Searching for:", searchQuery);
//   };

//   return (
//     <div className="relative min-h-screen w-full">
//       {/* Navigation Header - Reduced height */}
//       <nav className="absolute top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-sm">
//         <div className="container mx-auto px-4 py-2">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo with higher z-index and reduced size */}
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

//             {/* Navigation Links - Lower z-index */}
//             <div className="relative z-30">
//               <NavigationMenu />
//             </div>

//             {/* Search - Same z-index as nav */}
//             <div className="relative z-30">
//               <form onSubmit={handleSearch} className="relative">
//                 <Input
//                   type="text"
//                   placeholder="Search"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-[#ad8b19] transition-all duration-300"
//                 />
//                 <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section with Background */}
//       <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <Image
//             src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//             alt="Construction and infrastructure background"
//             fill
//             className="object-cover"
//             priority
//             sizes="100vw"
//           />
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/50" />
//         </div>

//         {/* Content Overlay */}
//         <div className="relative z-10 flex items-center justify-center h-full">
//           <div className="container mx-auto px-4 text-center text-white relative">
//             {/* Large Background Text */}
//             <div className="absolute inset-0 flex items-left pointer-events-none overflow-hidden">
//               <h2 className="text-[12rem] sm:text-[16rem] md:text-[20rem] lg:text-[15rem] xl:text-[10rem] font-black text-white/25 font-[family-name:var(--font-outfit)] select-none leading-none whitespace-nowrap">
//                 MILESTONES
//               </h2>
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 pt-16">
//               {/* Page Title */}
//               <h1
//                 ref={titleRef}
//                 className="text-5xl text-left border-l-4 pl-4 sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white font-[family-name:var(--font-outfit)] leading-tight tracking-tight"
//               >
//                 MILESTONES
//               </h1>
//             </div>
//           </div>
//         </div>

//         {/* Bottom accent line */}
//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EAB81E] to-transparent opacity-60" />
//       </div>

//       {/* Content Section - This is where your main milestone content would go */}
//       <div className="relative bg-white">
//         <div className="container mx-auto px-4 py-16">
//           <div className="text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-outfit)]">
//               Our Journey of Excellence
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto font-[family-name:var(--font-jost)]">
//               From our humble beginnings to becoming a leading infrastructure
//               development company, each milestone represents our commitment to
//               excellence, innovation, and sustainable growth across the African
//               continent.
//             </p>
//           </div>

//           {/* Placeholder for milestone content */}
//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Sample milestone cards - replace with your actual content */}
//             {[
//               {
//                 year: "2025",
//                 title: "Expansion into New Markets",
//                 count: "15+",
//               },
//               { year: "2024", title: "Major Projects Completed", count: "50+" },
//               { year: "2023", title: "Awards and Recognition", count: "8" },
//             ].map((milestone, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div className="text-3xl font-bold text-[#EAB81E] mb-2 font-[family-name:var(--font-outfit)]">
//                   {milestone.count}
//                 </div>
//                 <div className="text-xl font-semibold text-gray-900 mb-2 font-[family-name:var(--font-outfit)]">
//                   {milestone.year}
//                 </div>
//                 <div className="text-gray-600 font-[family-name:var(--font-jost)]">
//                   {milestone.title}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Milestones;

"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import NavigationMenu from "@/components/NavigationMenu"
import { Input } from "@/components/ui/input"
import { Footer } from "@/components/Footer"

const milestoneSlides = [
  {
    id: 1,
    title: "CURRENT STATE OF ROAD",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Ongoing construction and development",
  },
  {
    id: 2,
    title: "ROAD INFRASTRUCTURE",
    image:
      "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Modern highway systems",
  },
  {
    id: 3,
    title: "BRIDGE CONSTRUCTION",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Strategic infrastructure projects",
  },
]

const Milestones = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: "What is Barotse Highway Limited?", a: "Barotse Highway Limited is the project SPV." },
    { q: "What does Special Purpose Vehicle (SPV) mean?", a: "A dedicated company formed to deliver a specific project." },
    { q: "Which companies are behind the Special Purpose Vehicle (SPV) Barotse Highway Limited?", a: "Government and private partners." },
    { q: "What does PPP stand for?", a: "Public–Private Partnership." },
    { q: "What is the problem that the PPP is solving?", a: "Mutanda to Kaoma road project seeks to resolve the inadequate and substandard condition of the existing road network." },
    { q: "What is the solution that the PPP is providing?", a: "Rehabilitation, construction and maintenance of the road corridor." },
    { q: "What are some of the key benefits of the Mutanda–Kaoma Road Project?", a: "Improved safety, reduced travel time and enhanced trade." },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <div className="relative min-h-screen w-full bg-black">
        {/* Navigation Header */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between h-16">
              <div className="relative z-50">
                <div className="w-20 h-22 relative overflow-hidden">
                  <Link href="/">
                    <Image
                      src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758461466/WhatsApp_Image_2025-08-29_at_13.11.42_ciqb2u-removebg-preview_dolid4.png"
                      alt="Company Logo"
                      width={500}
                      height={500}
                      className="object-contain w-full h-full"
                      priority={true}
                      quality={100}
                    />
                  </Link>
                </div>
              </div>

              <div className="relative z-30 hidden md:block">
                <NavigationMenu />
              </div>

              <div className="relative z-30 hidden sm:block">
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 md:w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-[#ad8b19] transition-all duration-300"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                </form>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Container */}
        <div className="relative z-10">
          {/* Top Section - MILESTONES */}
          <div className="relative min-h-[85vh] flex items-center">
            {/* Background Image with NEW Gradient Overlay - greenish top to black bottom */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://res.cloudinary.com/dzqxnnayn/image/upload/v1759825974/DJI_0443_tfbdxa.jpg"
                alt="Milestones background"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              {/* Updated gradient: greenish/olive at top → darker middle → black at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, rgba(90, 90, 45, 0.50) 0%, rgba(60, 60, 35, 0.65) 25%, rgba(40, 40, 25, 0.80) 50%, rgba(20, 20, 15, 0.90) 75%, rgba(0, 0, 0, 0.95) 100%)"
                }}
              />
            </div>

            <div className="container mx-auto px-8 lg:px-16 relative z-10">
              {/* Watermark text "MILESTONES" - positioned to the right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden z-0">
                <h2
                  className="text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[8rem] xl:text-[11rem] font-black leading-none tracking-tight uppercase"
                  style={{
                    color: 'rgba(255, 255, 255, 0.08)',
                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.04)'
                  }}
                >
                  MILESTONES
                </h2>
              </div>

              {/* Main heading "MILESTONES" - on the left with border */}
              <div className="relative z-30 flex items-center min-h-[50vh]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-wide leading-none border-l-[6px] border-white pl-6 md:pl-8">
                  MILESTONES
                </h1>
              </div>
            </div>
          </div>

          {/* Bottom Section - CURRENT STATE OF ROAD (card overlays image; taller image + bottom space) */}
          <div className="relative min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] bg-black py-12 pb-64 overflow-hidden">
            {/* Image anchored right; taller than card */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[78vh] md:h-[82vh] lg:h-[86vh] w-[56vw] max-w-[980px] min-w-[560px] z-0 pr-[5%]">
              <div className="relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dzqxnnayn/image/upload/v1759825974/DJI_0443_tfbdxa.jpg"
                  alt="Milestone image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              </div>
            </div>

            {/* Left card */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <div className="bg-[#2a2a2a] px-8 py-10 md:px-10 md:py-12 w-[78vw] max-w-[560px] sm:max-w-[620px]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 uppercase leading-tight">
                  CURRENT
                  <br />STATE OF
                  <br />ROAD
                </h2>

                {/* Dots inside card */}
                <div className="mt-8 flex items-center gap-3">
                  {milestoneSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`transition-all duration-300 rounded-full ${i === currentSlide ? "bg-white w-10 h-3" : "bg-white/50 w-3 h-3 hover:bg-white/75"
                        }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Arrow pinned to card's right edge */}
              <div className="absolute top-1/2 -translate-y-1/2 right-[-28px] hidden sm:block z-20">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 20L25 30L15 40Z" fill="white" />
                  <path d="M30 20L40 30L30 40Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent to-black" />

        <div className="container mx-auto px-8 lg:px-16 relative">
          <div className="mb-10 md:mb-12">
            <p className="text-3xl md:text-4xl font-extrabold tracking-wide text-white uppercase">
              Frequently Asked
            </p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#EAB81E] uppercase leading-none">
              Questions
            </p>
          </div>

          {faqs.map((item, i) => {
            const open = openIdx === i;
            return (
              <div key={i} className="mb-6">
                <p
                  role="button"
                  tabIndex={0}
                  aria-expanded={open}
                  onClick={() => setOpenIdx(open ? null : i)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpenIdx(open ? null : i)}
                  className={`cursor-pointer select-none text-base md:text-lg transition-colors ${open ? "text-[#EAB81E]" : "text-white/90"
                    }`}
                >
                  {item.q}
                </p>

                {open ? (
                  <div className="mt-3 w-full bg-[#4B4B4B]/90 text-white text-sm md:text-base px-6 py-4">
                    {item.a}
                  </div>
                ) : (
                  <div className="mt-3 h-[2px] w-56 bg-white/70" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Community Engagement + Latest News */}
      <section className="relative w-full overflow-hidden">
        {/* Background image with top dark gradient */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758715424/4_bhefzk.png"
            alt="Road background"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/90" />
        </div>

        {/* Community Engagement header */}
        <div className="container mx-auto px-8 lg:px-16 pt-16 md:pt-24 pb-10">
          <p className="text-[#EAB81E] text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            Community
          </p>
          <h2 className="text-[#EAB81E] text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-tight">
            Engagement
          </h2>
          <p className="mt-6 text-white/85 max-w-3xl text-sm md:text-base">
            Have a concern? Learn how to raise it through our Grievance Handling Procedure
          </p>
          <button className="mt-6 inline-block bg-[#EAB81E]/35 hover:bg-[#EAB81E]/50 text-black/80 font-semibold px-6 py-2 transition-colors">
            Proceed
          </button>
        </div>

        {/* Latest News block */}
        <div className="container mx-auto px-0 lg:px-16 pb-16">
          <div className="grid grid-cols-12 gap-0">
            {/* Left: yellow panel */}
            <div className="col-span-12 md:col-span-6">
              <div className="bg-[#EAB81E] px-8 py-3">
                <span className="uppercase text-4xl md:text-5xl font-extrabold text-white drop-shadow">
                  Latest
                </span>
              </div>
              <div className="bg-[#EAB81E] px-8 py-4">
                <span className="uppercase text-6xl md:text-7xl font-extrabold text-white drop-shadow">
                  News
                </span>
              </div>
              <div className="bg-[#F2D571] px-8 py-8">
                <p className="text-black/85 max-w-xl text-sm md:text-base leading-relaxed">
                  The signing ceremony marked a significant milestone, bringing together key partners
                  to formalize commitments and strengthen collaboration toward shared goals
                </p>
              </div>
            </div>

            {/* Right: image */}
            <div className="col-span-12 md:col-span-6">
              <div className="relative h-full">
                <Image
                  src="https://res.cloudinary.com/dzqxnnayn/image/upload/v1759832408/7_dqcjha.png"
                  alt="Press briefing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/15" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom golden fade */}
        <div className="pointer-events-none h-24 w-full bg-gradient-to-b from-transparent via-[rgba(49,44,27,0.60)] to-[rgba(32,30,22,0.95)]" />
      </section>

      {/* Footer with seamless blend into community */}
      <div className="relative w-full overflow-hidden -mt-12 md:-mt-16">
        {/* Seam blender: hides any horizontal line at the join */}
        <div className="absolute -top-8 left-0 right-0 h-8 pointer-events-none bg-gradient-to-b from-transparent to-[rgba(32,30,22,0.95)] z-10" />

        {/* Vignette lifted above the seam (no dark rim on the edge) */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(140% 80% at 50% -25%, rgba(0,0,0,.35) 0%, rgba(0,0,0,0) 65%)",
          }}
        />

        {/* Olive → gold base gradient (same top color as community end) */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(32,30,22,0.95) 0%, rgba(78,66,26,0.85) 28%, rgba(137,109,23,0.80) 55%, rgba(190,148,26,0.88) 75%, rgba(234,184,30,0.98) 100%)",
          }}
        />

        <Footer />
      </div>
    </>
  )
}

export default Milestones


