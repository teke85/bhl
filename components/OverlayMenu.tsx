"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, ChevronDown } from "lucide-react";
import { gsap } from "gsap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement[]>([]);

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
      {/* Header with Menu Button and Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Menu Button */}
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

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/barotse-logo.png"
                alt="Barotse Highway Limited"
                width={140}
                height={70}
                className="h-14 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        onClick={toggleMenu}
      />

      {/* Sliding Menu */}
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
                      Company Background
                    </Link>
                    <Link
                      href="/leadership"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Leadership Team
                    </Link>
                    <Link
                      href="/story"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Our Story
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
                  Project
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${activeDropdown === "project" ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${activeDropdown === "project" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="pl-4 py-2 space-y-1">
                    <Link
                      href="/project"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Project Overview
                    </Link>
                    <Link
                      href="/timeline"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Timeline & Milestones
                    </Link>
                    <Link
                      href="/environmental"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Environmental Impact
                    </Link>
                    <Link
                      href="/partners"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Partners & Consultants
                    </Link>
                  </div>
                </div>
              </div>

              {/* Updates with Dropdown */}
              <div ref={addToRefs}>
                <button
                  onClick={() => toggleDropdown("updates")}
                  className="flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300"
                >
                  Updates
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
                      News & Announcements
                    </Link>
                    <Link
                      href="/community"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      CSR & Community
                    </Link>
                    <Link
                      href="/procurement"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Procurement Opportunities
                    </Link>
                    <Link
                      href="/media"
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Media Gallery
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
};

export default Navigation;
