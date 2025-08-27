"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Simple fade-in animations
    const elements = [
      titleRef.current,
      subtitleRef.current,
      buttonsRef.current,
    ];

    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";

        setTimeout(() => {
          el.style.transition = "all 0.8s ease-out";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, index * 200);
      }
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Open animation
      gsap.set(menuRef.current, { x: "100%" });
      gsap.set(overlayRef.current, { opacity: 0 });

      const tl = gsap.timeline();
      tl.to(overlayRef.current, { opacity: 1, duration: 0.3 })
        .to(
          menuRef.current,
          { x: "0%", duration: 0.5, ease: "power3.out" },
          "-=0.1"
        )
        .from(
          menuItemsRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3"
        );
    } else if (menuRef.current) {
      // Close animation
      const tl = gsap.timeline();
      tl.to(menuItemsRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
      })
        .to(
          menuRef.current,
          { x: "100%", duration: 0.4, ease: "power3.in" },
          "-=0.1"
        )
        .to(overlayRef.current, { opacity: 0, duration: 0.3 }, "-=0.2");
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dpeg7wc34/image/upload/v1756193625/aerial-view-of-african-highway-construction-site-w_ulux6u.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <header className="relative z-20 flex items-center justify-between p-6 lg:p-8">
          <button
            onClick={toggleMenu}
            className="flex items-center space-x-3 text-white hover:text-accent transition-colors duration-300 group"
          >
            <div className="flex flex-col space-y-1">
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </div>
            <span className="text-sm font-medium tracking-wider uppercase">
              {isOpen ? "Close" : "Menu"}
            </span>
          </button>

          <div className="flex items-center">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1756192912/Barotse_Logo-removebg-preview_nufoih.png"
              alt="Barotse Highway Limited"
              width={120}
              height={120}
              className="h-12 w-auto"
            />
          </div>
        </header>

        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight tracking-tight font-serif"
            >
              Building Zambia&apos;s Gateway to the West
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90"
            >
              371km of modern infrastructure connecting the Copperbelt to
              international markets
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              >
                Explore the Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                View Latest Updates
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        onClick={toggleMenu}
      />

      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-full max-w-lg bg-white z-50 shadow-2xl"
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Navigation</h2>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="space-y-2">
              {/* Home */}
              <div ref={addToRefs}>
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="flex items-center py-4 px-4 text-lg font-medium text-gray-900 hover:bg-accent hover:text-white rounded-lg transition-all duration-300"
                >
                  Home
                </Link>
              </div>

              {/* About with Dropdown */}
              <div ref={addToRefs}>
                <button
                  onClick={() => toggleDropdown("about")}
                  className="flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300"
                >
                  About
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${activeDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${activeDropdown === "about" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="pl-4 py-2 space-y-1">
                    <Link
                      href="/about"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      About BHL
                    </Link>
                    <Link
                      href="/leadership"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Leadership Team
                    </Link>
                    <Link
                      href="/vision-mission"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Vision & Mission
                    </Link>
                    <Link
                      href="/corporate-governance"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Corporate Governance
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project with Dropdown */}
              <div ref={addToRefs}>
                <button
                  onClick={() => toggleDropdown("project")}
                  className="flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300"
                >
                  The Project
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${activeDropdown === "project" ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${activeDropdown === "project" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="pl-4 py-2 space-y-1">
                    <Link
                      href="/project-overview"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Project Overview
                    </Link>
                    <Link
                      href="/key-benefits"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Key Benefits & Impact
                    </Link>
                    <Link
                      href="/timeline"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Project Journey
                    </Link>
                    <Link
                      href="/technical-specifications"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Technical Specifications
                    </Link>
                    <Link
                      href="/environmental-assessment"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Environmental Assessment
                    </Link>
                  </div>
                </div>
              </div>

              {/* News & Updates with Dropdown */}
              <div ref={addToRefs}>
                <button
                  onClick={() => toggleDropdown("updates")}
                  className="flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300"
                >
                  News & Updates
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${activeDropdown === "updates" ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${activeDropdown === "updates" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="pl-4 py-2 space-y-1">
                    <Link
                      href="/news"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Latest News
                    </Link>
                    <Link
                      href="/project-updates"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Project Updates
                    </Link>
                    <Link
                      href="/community-engagement"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Community Engagement
                    </Link>
                    <Link
                      href="/media-gallery"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Media Gallery
                    </Link>
                  </div>
                </div>
              </div>

              {/* Procurement (New Section) */}
              <div ref={addToRefs}>
                <button
                  onClick={() => toggleDropdown("procurement")}
                  className="flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300"
                >
                  Procurement
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${activeDropdown === "procurement" ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${activeDropdown === "procurement" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="pl-4 py-2 space-y-1">
                    <Link
                      href="/tenders"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Current Tenders
                    </Link>
                    <Link
                      href="/procurement-opportunities"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Business Opportunities
                    </Link>
                    <Link
                      href="/supplier-registration"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Supplier Registration
                    </Link>
                    <Link
                      href="/procurement-policy"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Procurement Policy
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div ref={addToRefs}>
                <Link
                  href="/contact"
                  onClick={toggleMenu}
                  className="flex items-center py-4 px-4 text-lg font-medium text-gray-900 hover:bg-accent hover:text-white rounded-lg transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </nav>

            {/* CTA Button */}
            <div ref={addToRefs} className="mt-8 pt-6 border-t border-gray-100">
              <Button
                onClick={toggleMenu}
                className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-4 text-lg"
              >
                Download Project Brief
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
