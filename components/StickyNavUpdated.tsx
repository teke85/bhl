"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import ModeToggle from "./ModeToggle";

type MenuKey = "COMPANY" | "OUR COMMITMENT" | "PROJECT" | "CAREERS" | "GALLERY";

function StickyNavigationMenu() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / Math.max(scrollHeight, 1)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setShowMoreMenu(false);
      }
    };

    if (activeMenu || showMoreMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMenu, showMoreMenu]);

  // Auto focus search input
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // ESC to close search
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) setIsSearchOpen(false);
      if (e.key === "Escape" && activeMenu) setActiveMenu(null);
      if (e.key === "Escape" && showMoreMenu) setShowMoreMenu(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isSearchOpen, activeMenu, showMoreMenu]);

  const menuData: Record<
    MenuKey,
    {
      title: string;
      description: string;
      links: { name: string; href: string }[];
    }
  > = {
    COMPANY: {
      title: "ABOUT US",
      description:
        "Barotse Highway Limited is a Special Purpose Vehicle (SPV) incorporated by BeefCo Holdings Limited and First Quantum Minerals Operations Limited for executing this transformative infrastructure project.",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Multimedia Gallery", href: "/gallery" },
        { name: "Timeline", href: "/timeline" },
        { name: "Home", href: "/" },
      ],
    },
    "OUR COMMITMENT": {
      title: "OUR COMMITMENT",
      description:
        "We are committed to delivering world-class infrastructure while prioritizing community welfare, environmental sustainability, and economic development across the Western Corridor.",
      links: [
        { name: "Regional Impact", href: "/regional-impact" },
        { name: "Resettlement", href: "/resettlement" },
        { name: "About Us", href: "/about" },
        { name: "Projects", href: "/projects" },
      ],
    },
    PROJECT: {
      title: "PROJECT DETAILS",
      description:
        "The Project encompasses the rehabilitation and upgrade of 371 kilometres of road from Mutanda in Northwestern Province to Kaoma in Western Province, Zambia.",
      links: [
        { name: "Project Overview", href: "/projects" },
        { name: "Timeline", href: "/timeline" },
        { name: "Regional Impact", href: "/regional-impact" },
        { name: "Multimedia Gallery", href: "/gallery" },
      ],
    },
    CAREERS: {
      title: "JOIN OUR TEAM",
      description:
        "Be part of a transformative infrastructure project that's connecting communities and driving economic growth across Zambia's Western Corridor.",
      links: [
        { name: "Current Openings", href: "/careers" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Gallery", href: "/gallery" },
      ],
    },
    GALLERY: {
      title: "GALLERY",
      description:
        "Explore our multimedia gallery showcasing the Barotse Highway project.",
      links: [
        { name: "View Gallery", href: "/gallery" },
        { name: "Projects", href: "/projects" },
        { name: "Timeline", href: "/timeline" },
        { name: "About", href: "/about" },
      ],
    },
  };

  // "More" dropdown items
  const moreMenuItems = [
    { name: "News & Media", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const handleMenuClick = (menu: MenuKey) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
    setShowMoreMenu(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-zinc-900">
        <div
          className="h-full bg-[#FDB913] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav
        ref={menuRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white dark:bg-black/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6">
          {/* Top bar (Search + Toggle) */}
          <div className="flex justify-end items-center gap-6 py-2 border-b border-white/10">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-black dark:text-white hover:text-[#FDB913] transition-colors"
              aria-label="Open search"
            >
              <Search className="h-5 w-5 text-black dark:text-white" />
            </button>

            <ModeToggle />
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759852662/Logo_b0ski3.png"
                  alt="Barotse Highway Limited"
                  width={80}
                  height={80}
                  className="h-15 w-15 object-contain"
                />
              </Link>

              <div className="h-8 w-px bg-white/20"></div>

              {/* Desktop menu items */}
              <div className="hidden lg:flex items-center space-x-6">
                {(Object.keys(menuData) as MenuKey[]).map((item) => (
                  <div key={item} className="relative group">
                    <button
                      onClick={() => handleMenuClick(item)}
                      className="relative flex items-center cursor-pointer font-heading gap-1 text-black dark:text-white hover:text-[#FDB913] transition-colors duration-200 py-2 font-medium text-sm tracking-wide uppercase"
                    >
                      {item}
                      {/* Underline element using group hover */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FDB913] group-hover:w-full transition-all duration-300"></span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side (MORE + Contact + mobile button) */}
            <div className="hidden lg:flex items-center gap-6">
              {/* MORE dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowMoreMenu((s) => !s);
                    setActiveMenu(null);
                  }}
                  className="flex items-center font-body gap-3 text-black dark:text-white hover:text-[#FDB913] transition-colors duration-200 font-medium text-sm tracking-wide uppercase group"
                >
                  MORE
                  <div className="flex flex-col gap-1.5 w-5">
                    <span className="h-0.5 bg-current transition-all duration-300 group-hover:w-1/2"></span>
                    <span className="h-0.5 bg-current transition-all duration-300"></span>
                  </div>
                </button>

                {showMoreMenu && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-[#0A0A0A] border border-white/10 rounded-lg shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {moreMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 font-body py-3 text-white hover:bg-[#FDB913]/10 hover:text-[#FDB913] transition-colors font-medium"
                        onClick={() => setShowMoreMenu(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact button */}
              <Button
                asChild
                className="bg-[#FDB913] rounded-none hover:bg-[#E1AF1C] text-black font-semibold uppercase tracking-wide px-8 py-6"
              >
                <Link className="font-body" href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-white font-body bg-[#0A0A0A]/70 border border-white/5 p-3 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Search className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mega menu panel */}
      {activeMenu && (
        <div className="fixed top-28 left-6 right-6 shadow-2xl transition-all duration-300 z-50 rounded-xl overflow-hidden">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-0 max-w-6xl mx-auto rounded-lg overflow-hidden">
              {/* Left (white) */}
              <div className="px-12 py-10 space-y-6 flex flex-col bg-white justify-center relative">
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-1 h-3/4 bg-black/20"></div>
                <h2 className="text-4xl font-heading font-bold text-black tracking-tight">
                  {menuData[activeMenu].title}
                </h2>
                <p className="text-gray-800 font-body text-base leading-relaxed">
                  {menuData[activeMenu].description}
                </p>
              </div>

              {/* Right (yellow links) */}
              <div className="space-y-5 bg-[#E6B40A] p-10 flex flex-col justify-center">
                {menuData[activeMenu].links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block font-heading text-black hover:text-white duration-200 text-base font-medium py-2 hover:translate-x-2 transform transition-transform uppercase tracking-wide"
                    onClick={() => setActiveMenu(null)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile dropdown content */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/95 border border-white/10 rounded-2xl mt-4 py-4 animate-in slide-in-from-top duration-200">
          {(Object.keys(menuData) as MenuKey[]).map((item) => (
            <div key={item} className="py-2">
              <button
                onClick={() => handleMenuClick(item)}
                className="w-full text-left px-4 py-2 text-white hover:text-[#FDB913] uppercase tracking-wide font-medium"
              >
                {item}
              </button>
              {activeMenu === item && (
                <div className="pl-8 mt-2 space-y-2 bg-gray-900/50 py-2">
                  {menuData[item].links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-gray-300 hover:text-[#FDB913]"
                      onClick={() => {
                        setActiveMenu(null);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {moreMenuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-white hover:text-[#FDB913]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="px-4 mt-4">
            <Button
              asChild
              className="w-full p-6 font-body bg-[#FDB913] hover:bg-[#E1AF1C] text-black font-semibold uppercase"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}

      {/* Search Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full md:w-[600px] bg-[#0A0A0A]/95 z-[100] transition-transform duration-500 ease-out border-l border-white/10",
          isSearchOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-24 px-8 border-b border-white/10">
          <div className="flex items-center gap-4 flex-1">
            <Search className="h-6 w-6 text-[#FDB913]" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="WHAT ARE YOU LOOKING FOR?"
              className="flex-1 bg-transparent font-body text-white placeholder:text-gray-500 text-lg uppercase tracking-wide focus:outline-none"
            />
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-white hover:text-[#FDB913] transition-colors"
            aria-label="Close search"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-8">
          <p className="text-gray-400 md:text-xl font-body text-sm">
            Start typing to search...
          </p>
        </div>
      </div>

      {/* Overlay */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[99] transition-opacity duration-300"
          onClick={() => setIsSearchOpen(false)}
        />
      )}
    </>
  );
}

export default StickyNavigationMenu;
