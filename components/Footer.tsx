// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// import { Separator } from "@/components/ui/separator";
// import { Linkedin, Facebook, Twitter, Youtube } from "lucide-react";

// export function Footer() {
//   return (
//     <footer className="bg-primary text-primary-foreground">
//       <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="lg:col-span-1">
//             <div className="flex justify-center mb-4">
//               <Image
//                 src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758461466/WhatsApp_Image_2025-08-29_at_13.11.42_ciqb2u-removebg-preview_dolid4.png"
//                 alt="Company Logo"
//                 width={250}
//                 height={250}
//                 className="object-contain h-32"
//                 priority={true}
//                 quality={100}
//               />
//             </div>
//             <p className="text-sm opacity-90 font-paragraph mb-4 leading-relaxed text-center">
//               Building Zambia&apos;s gateway to the west through world-class
//               infrastructure and sustainable development practices.
//             </p>
//             <div className="flex justify-center space-x-4">
//               <Button
//                 size="icon"
//                 variant="ghost"
//                 className="text-primary-foreground hover:bg-primary-foreground/10"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </Button>
//               <Button
//                 size="icon"
//                 variant="ghost"
//                 className="text-primary-foreground hover:bg-primary-foreground/10"
//               >
//                 <Facebook className="h-5 w-5" />
//               </Button>
//               <Button
//                 size="icon"
//                 variant="ghost"
//                 className="text-primary-foreground hover:bg-primary-foreground/10"
//               >
//                 <Twitter className="h-5 w-5" />
//               </Button>
//               <Button
//                 size="icon"
//                 variant="ghost"
//                 className="text-primary-foreground hover:bg-primary-foreground/10"
//               >
//                 <Youtube className="h-5 w-5" />
//               </Button>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="font-paragraph">
//             <h3 className="font-semibold font-paragraph mb-4">Quick Links</h3>
//             <ul className="space-y-2 font-paragraph text-sm">
//               <li>
//                 <Link
//                   href="/find-us"
//                   className="hover:text-white transition-colors"
//                 >
//                   Find Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/call-us"
//                   className="hover:text-white transition-colors"
//                 >
//                   Call Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/email-us"
//                   className="hover:text-white transition-colors"
//                 >
//                   Email Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="font-paragraph">
//             <h3 className="font-semibold text-white mb-6 text-lg">
//               Project Overview
//             </h3>
//             <ul className="space-y-3 text-sm text-white/90">
//               <li>
//                 <Link
//                   href="/about"
//                   className="hover:text-white transition-colors"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/project"
//                   className="hover:text-white transition-colors"
//                 >
//                   Project
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/milestones"
//                   className="hover:text-white transition-colors"
//                 >
//                   Milestones
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/gallery"
//                   className="hover:text-white transition-colors"
//                 >
//                   Gallery
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div className="font-paragraph">
//             <h3 className="font-semibold text-white mb-6 text-lg">
//               Quick Links
//             </h3>
//             <div className="grid grid-cols-1 gap-3 text-sm text-white/90">
//               <div className="space-y-3">
//                 <Link
//                   href="/rda"
//                   className="block hover:text-white transition-colors"
//                 >
//                   Road Development Agency
//                 </Link>
//                 <Link
//                   href="/ministry-finance"
//                   className="block hover:text-white transition-colors"
//                 >
//                   Ministry of Finance
//                 </Link>
//                 <Link
//                   href="/ministry-infrastructure"
//                   className="block hover:text-white transition-colors"
//                 >
//                   Ministry of Infrastructure
//                 </Link>
//                 <Link
//                   href="/beefco"
//                   className="block hover:text-white transition-colors"
//                 >
//                   Beefco
//                 </Link>
//               </div>
//               <div className="space-y-3 mt-4 lg:mt-0">
//                 <Link
//                   href="/first-quantum"
//                   className="block hover:text-white transition-colors"
//                 >
//                   First Quantum Minerals Limited
//                 </Link>
//                 <Link
//                   href="/buks-haulage"
//                   className="block hover:text-white transition-colors"
//                 >
//                   Buks Haulage Limited
//                 </Link>
//                 <Link
//                   href="/hotsheet"
//                   className="block hover:text-white transition-colors"
//                 >
//                   Hotsheet
//                 </Link>
//                 <Link
//                   href="/pangaea"
//                   className="block hover:text-white transition-colors"
//                 >
//                   Pangaea Securities
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Separator className="my-8 bg-primary-foreground/20" />

//         <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm opacity-90">
//           <div className="flex font-paragraph flex-wrap gap-4">
//             <Link
//               href="/privacy"
//               className="hover:opacity-100 transition-opacity"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               href="/terms"
//               className="hover:opacity-100 transition-opacity"
//             >
//               Terms of Service
//             </Link>
//             <Link
//               href="/cookies"
//               className="hover:opacity-100 transition-opacity"
//             >
//               Cookie Policy
//             </Link>
//           </div>
//           <p className="font-paragraph">
//             © 2025 Barotse Highway Limited. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const efficientRef = useRef<HTMLDivElement>(null);
  const logisticsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const efficientElement = efficientRef.current;
    const logisticsElement = logisticsRef.current;

    if (efficientElement && logisticsElement && container) {
      // Set initial positions
      gsap.set(efficientElement, { x: -200, opacity: 0.3 });
      gsap.set(logisticsElement, { x: 200, opacity: 0.3 });

      // Create timeline for the animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          onEnter: () => {
            gsap.to([efficientElement, logisticsElement], {
              opacity: 1,
              duration: 0.5,
            });
          },
          onLeave: () => {
            gsap.to([efficientElement, logisticsElement], {
              opacity: 0.3,
              duration: 0.5,
            });
          },
          onEnterBack: () => {
            gsap.to([efficientElement, logisticsElement], {
              opacity: 1,
              duration: 0.5,
            });
          },
          onLeaveBack: () => {
            gsap.to([efficientElement, logisticsElement], {
              opacity: 0.3,
              duration: 0.5,
            });
          },
        },
      });

      // Animate "Efficient" to the left
      tl.to(
        efficientElement,
        {
          x: -100,
          duration: 1,
          ease: "power2.out",
        },
        0
      );

      // Animate "Logistics" to the right
      tl.to(
        logisticsElement,
        {
          x: 100,
          duration: 1,
          ease: "power2.out",
        },
        0
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer className="relative w-full min-h-screen flex flex-col">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          // style={{
          //     backgroundImage:
          //         "url(https://res.cloudinary.com/dpeg7wc34/image/upload/v1758715424/4_bhefzk.png)",
          // }}
        />
        {/* Gradient overlay - darker at top, yellowish at bottom */}
        <div
          className="absolute inset-0"
          //   style={{
          //     background:
          //       "linear-gradient(to bottom, rgba(45, 40, 20, 0.65) 0%, rgba(60, 52, 25, 0.72) 30%, rgba(85, 70, 30, 0.78) 60%, rgba(110, 90, 35, 0.85) 100%)",
          //   }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-8 py-16 lg:px-16">
        {/* Main Heading - Using exact styling and animations from BigText.tsx */}
        <div
          ref={containerRef}
          className="mx-auto w-full py-10 overflow-hidden relative"
        ></div>

        {/* Three Column Layout */}
        <div className="max-w-7xl mx-auto w-full mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
            {/* Contact Column */}
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Contact
              </h3>
              <ul className="space-y-3 font-sans">
                <li>
                  <Link
                    href="/contact#find-us"
                    className="text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    Find Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact#call-us"
                    className="text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    Call Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact#email-us"
                    className="text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    Email Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Project Overview Column */}
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Project Overview
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="/milestones"
                    className="text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    Milestones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links Column - spans 2 columns */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold font-heading text-white mb-6">
                Quick Links
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {/* First Column */}
                <div className="space-y-3 font-sans">
                  <Link
                    href="https://www.rda.org.zm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    Road Development Agency
                  </Link>
                  <Link
                    href="https://www.mof.gov.zm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    Ministry of Finance
                  </Link>
                  <Link
                    href="https://www.mitc.gov.zm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    Ministry of Infrastructure
                  </Link>
                  <Link
                    href="#"
                    className="block text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    Beefco
                  </Link>
                </div>

                {/* Second Column */}
                <div className="space-y-3">
                  <Link
                    href="https://www.first-quantum.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    First Quantum Minerals Limited
                  </Link>
                  <Link
                    href="#"
                    className="block text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    Buks Haulage Limited
                  </Link>
                  <Link
                    href="#"
                    className="block text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    Hotsheet
                  </Link>
                  <Link
                    href="#"
                    className="block text-[#D0C8B0] hover:text-white transition-colors text-base"
                  >
                    Pangaea Securities
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto w-full mt-auto pt-8 border-t border-[#8B8B70]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-[#D0C8B0] text-sm">
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-[#8B8B70]">|</span>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-[#8B8B70]">|</span>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
              <span className="text-[#8B8B70]">|</span>
              <Link
                href="/legal"
                className="hover:text-white transition-colors"
              >
                Legal
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#B5B5A0] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-10 h-10 fill-white" strokeWidth={1.5} />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center bg-white transition-colors hover:bg-[#b8b5a8]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-black" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
