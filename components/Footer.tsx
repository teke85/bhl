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
      gsap.set(efficientElement, { x: -200, opacity: 0.3 });
      gsap.set(logisticsElement, { x: 200, opacity: 0.3 });

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

      tl.to(
        efficientElement,
        {
          x: -100,
          duration: 1,
          ease: "power2.out",
        },
        0
      );

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
    <footer className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Gradient Background - Orangish Gold (matching your screenshot) */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-gradient-to-b from-[#2D2814] via-[#614E1C] via-55% via-[#9D7A25] to-[#C99B37]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(45, 40, 20, 0.95) 0%, rgba(97, 78, 28, 0.9) 35%, rgba(157, 122, 37, 0.85) 70%, rgba(201, 155, 55, 0.9) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-8 py-16 lg:px-16">
        <div
          ref={containerRef}
          className="mx-auto w-full py-10 overflow-hidden relative"
        />

        {/* Main Footer Columns */}
        <div className="max-w-7xl mx-auto w-full mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
            {/* Contact */}
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

            {/* Project Overview */}
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

            {/* Quick Links (2 columns) */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Quick Links
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
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
