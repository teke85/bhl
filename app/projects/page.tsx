// "use client";

// import React, { useState, useRef } from "react";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import NavigationMenu from "@/components/NavigationMenu";
// import { Button } from "@/components/ui/button";
// import MobileMenu from "@/components/MobileMenu";
// import ProposedScope from "@/components/ProposedScopeOfWorks";
// import StrategicRoute from "@/components/StrategicRouteForTrade";
// import SustainableInterventions from "@/components/SustainableInterventions";
// import Careers from "@/components/Careers";
// import Media from "@/components/Media";
// import GalleryPage from "@/components/Gallery";
// import { Footer } from "@/components/Footer";

// // Scope of works data
// const scopeItems = [
//   { id: 1, text: "Project funding" },
//   { id: 2, text: "Feasibility Studies and Design" },
//   { id: 3, text: "371 km of Road Construction/Rehabilitation" },
//   { id: 4, text: "Construction of 3 No. Toll Plaza" },
//   { id: 5, text: "Construction of 2 weighbridges on the Road" },
//   { id: 6, text: "Provision of traffic and toll management systems" },
//   {
//     id: 7,
//     text: "Provision of Environmental Impact Assessment (EIA) studies",
//   },
//   { id: 8, text: "Resettlement Action Plan" },
//   { id: 9, text: "Operations and Maintenance" },
// ];

// const Project = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const titleRef = useRef<HTMLHeadingElement>(null);

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Searching for:", searchQuery);
//   };

//   return (
//     <div className="relative min-h-screen w-full">
//       {/* Navigation Header */}
//       <nav className="absolute top-0 left-0 right-0 z-40">
//         <div className="container mx-auto px-4 py-4">
//           {/* Search Bar Row - Above Navigation */}
//           <div className="flex justify-end mb-1">
//             <div className="relative z-30">
//               <form onSubmit={handleSearch} className="relative">
//                 <Input
//                   type="text"
//                   placeholder="Search"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-48 sm:w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-[#ad8b19] transition-all duration-300 backdrop-blur-sm"
//                 />
//                 <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
//               </form>
//             </div>
//           </div>

//           {/* Main Navigation Row - Three Column Layout */}
//           <div className="grid grid-cols-3 items-center gap-2 sm:gap-4 h-16">
//             {/* Column 1: Logo - Left */}
//             <div className="relative z-50 justify-self-start">
//               <div className="w-14 h-16 sm:w-20 sm:h-22 relative overflow-hidden">
//                 <Link href="/">
//                   <Image
//                     src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759852662/Logo_b0ski3.png"
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

//             {/* Column 2: Navigation Menu - Center */}
//             <div className="relative z-30 justify-self-center hidden md:block">
//               <NavigationMenu />
//             </div>

//             {/* Column 3: Empty for Future Elements - Right */}
//             <div className="relative z-30 justify-self-end">
//               {/* Reserved space for future elements */}
//             </div>

//             {/* Mobile Menu */}
//             <div className="col-span-3 md:hidden">
//               <MobileMenu />
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Header Section */}
//       <div className="relative h-[100vh] min-h-[500px] md:min-h-[600px] w-full overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759927683/DJI_0577_ihxa1q.jpg"
//             alt="About us"
//             fill
//             className="object-cover"
//             priority
//             sizes="100vw"
//           />
//           <div className="absolute inset-0 bg-black/50" />
//         </div>

//         <div className="relative z-10 flex items-center justify-center h-full pt-24 md:pt-0">
//           <div className="container mx-auto px-4 text-white relative">
//             {/* Large Background Text - Positioned above the title */}
//             <div className="absolute inset-x-0 top-[50%] -translate-y-[60%] pointer-events-none w-full">
//               <h2 className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] xl:text-[16rem] font-black text-white/10 md:text-white/20 font-[family-name:var(--font-outfit)] select-none leading-none whitespace-nowrap pl-4 sm:pl-12 md:pl-24">
//                 PROJECT
//               </h2>
//             </div>

//             {/* Content Container with Vertical Divider */}
//             <div className="relative flex items-start pt-12 sm:pt-16 md:pt-36">
//               {/* Vertical Divider */}
//               <div className="absolute left-0 top-16 sm:top-24 md:top-30 bottom-0 w-1 sm:w-2 h-[50%] sm:h-[60%] bg-white"></div>

//               <div className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 mt-6 sm:mt-10">
//                 <h1
//                   ref={titleRef}
//                   className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-3 sm:mb-4 text-white tracking-tight relative z-10"
//                 >
//                   PROJECT
//                 </h1>

//                 <div className="relative">
//                   <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-white max-w-full font-sans mb-6 sm:mb-8 relative z-10">
//                     The Project encompasses the rehabilitation and upgrade of
//                     the road from Mutanda, in Northwestern Province, Zambia, to
//                     Kaoma, in Western Province, covering 371 kilometres.
//                   </p>

//                   {/* CTA Buttons */}
//                   <div className="flex flex-cols sm:flex-row gap-3 sm:gap-4 justify-start sm:justify-start items-stretch sm:items-start max-w-full sm:max-w-[24rem] relative z-10">
//                     <Link href="/projects" className="w-full sm:w-auto">
//                       <Button
//                         size="lg"
//                         className="w-full sm:w-auto bg-[#EAB81E]/20 rounded-none text-white hover:bg-[#EAB81E] font-sans font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg min-w-[160px] sm:min-w-[180px]"
//                       >
//                         Discover More
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Proposed Scope of Works Section */}
//       <ProposedScope />
//       <StrategicRoute />
//       <SustainableInterventions />
//       <Careers />
//       <Media />
//       <GalleryPage />
//       <Footer />
//     </div>
//   );
// };

// export default Project;

"use client";

import ProjectHero from "@/components/projects/ProjectHero";
import ProjectKeyStats from "@/components/projects/ProjectKeyStats";
import RoadSections from "@/components/projects/RoadSections";
import RoadDesign from "@/components/projects/RoadDesign";
import KeyProjectComponents from "@/components/projects/KeyProjectComponents";
import TechnicalSpecifications from "@/components/projects/TechnicalSpecifications";
import ProjectGallery from "@/components/projects/ProjectGallery";
import EnvironmentalImpact from "@/components/projects/EnvironmentalImpact";
import SafetyStandards from "@/components/projects/SafetyStandards";
import ProjectTimeline from "@/components/projects/ProjectTimeline";
import { Footer } from "@/components/Footer";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import MobileMenu from "@/components/MobileMenu";

const ProjectPage = () => {
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
      <ProjectHero />
      <ProjectKeyStats />
      <ProjectGallery />
      <RoadSections />
      <RoadDesign />
      <KeyProjectComponents />
      <ProjectTimeline />
      <TechnicalSpecifications />
      <SafetyStandards />
      <EnvironmentalImpact />
      <Footer />
    </main>
  );
};

export default ProjectPage;
