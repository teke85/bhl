"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, Search, Menu, ChevronDown, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ModeToggle from "./ModeToggle";

type MenuKey = "company" | "our commitment" | "project" | "careers" | "gallery";

function StickyNavigationMenu() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] =
    useState<MenuKey | null>(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle scroll progress
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(target)
      ) {
        setActiveMenu(null);
        setShowMoreMenu(false);
      }
    };

    if (activeMenu || showMoreMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMenu, showMoreMenu]);

  // Focus search input when open
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // ESC key closes all overlays
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setActiveMenu(null);
        setShowMoreMenu(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const menuData: Record<
    MenuKey,
    {
      title: string;
      description: string;
      links: { name: string; href: string }[];
    }
  > = {
    company: {
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
    "our commitment": {
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
    project: {
      title: "PROJECT DETAILS",
      description:
        "The Project encompasses the rehabilitation and upgrade of 371 kilometres of road from Mutanda in Northwestern Province to Kaoma in Western Province, Zambia.",
      links: [
        { name: "Project Overview", href: "/projects" },
        { name: "Timeline", href: "/timeline" },
        { name: "Regional Impact", href: "/regional-impact" },
        { name: "Project Promoters", href: "/projects" },
      ],
    },
    careers: {
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
    gallery: {
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

  const moreMenuItems = [
    { name: "News & Media", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const handleMenuClick = (menu: MenuKey) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
    setShowMoreMenu(false);
  };

  const toggleMobileSubmenu = (menu: MenuKey) => {
    setActiveMobileSubmenu((prev) => (prev === menu ? null : menu));
  };

  // Capitalize first letter of menu items
  const formatMenuLabel = (key: MenuKey) =>
    key.charAt(0).toUpperCase() + key.slice(1);

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
          "fixed top-0 left-0 right-0 z-[50] transition-all duration-300",
          isScrolled
            ? "bg-black dark:bg-black/95 dark:text-white backdrop-blur-md shadow-md"
            : "bg-transparent text-white"
        )}
      >
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="hidden md:flex justify-end items-center gap-6 py-2 border-b border-white/10">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="transition-colors hover:text-[#FDB913] text-white"
              aria-label="Open search"
            >
              <Search className="h-5 w-5" />
            </button>
            <ModeToggle />
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between gap-4 py-3 md:py-2">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50">
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1761681183/westerncorridor_logo_vw731c.jpg"
                alt="Barotse Highway Limited"
                width={100}
                height={100}
                className="h-20 w-20 md:h-20 md:w-20 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="h-8 w-px bg-white/20"></div>

              <div className="flex items-center space-x-6">
                {(Object.keys(menuData) as MenuKey[]).map((item) => (
                  <div key={item} className="relative group">
                    <button
                      onClick={() => handleMenuClick(item)}
                      className="relative flex items-center cursor-pointer font-body gap-2 transition-colors duration-200 py-2 font-medium text-md tracking-wide group text-white hover:text-[#FDB913]"
                    >
                      {formatMenuLabel(item)}
                      {/* Animated Arrow */}
                      <ArrowDown
                        className={cn(
                          "h-4 w-4 transition-all duration-300",
                          activeMenu === item
                            ? "rotate-180 text-[#FDB913]"
                            : "rotate-0",
                          "group-hover:-translate-y-1 group-hover:text-[#FDB913]"
                        )}
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FDB913] group-hover:w-full transition-all duration-300"></span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-6">
              {/* MORE dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowMoreMenu((s) => !s);
                    setActiveMenu(null);
                  }}
                  className="flex items-center font-body gap-2 transition-colors duration-200 font-medium text-md tracking-wide group text-white hover:text-[#FDB913]"
                >
                  More
                  {/* Animated Arrow for More menu */}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-all duration-300",
                      showMoreMenu ? "rotate-180 text-[#FDB913]" : "rotate-0",
                      "group-hover:-translate-y-0.5 group-hover:text-[#FDB913]"
                    )}
                  />
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

              <Button
                asChild
                className="bg-[#FDB913] rounded-none hover:bg-[#E1AF1C] text-black font-semibold tracking-wide px-8 py-6"
              >
                <Link className="font-body" href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white flex items-center justify-between space-x-4 p-2"
                aria-label="Open search"
              >
                <Search className="h-5 w-5" />
              </button>
              <ModeToggle />
              <button
                className="text-white bg-[#0A0A0A]/70 border border-white/5 p-2 rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Mega menu */}
      {activeMenu && (
        <div
          ref={megaMenuRef}
          className="hidden lg:block fixed top-28 left-6 right-6 shadow-2xl transition-all duration-300 z-[51] rounded-xl overflow-hidden"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-0 max-w-6xl mx-auto rounded-lg overflow-hidden">
              <div className="px-12 py-10 space-y-6 flex flex-col bg-white justify-center relative">
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-1 h-3/4 bg-black/20"></div>
                <h2 className="text-4xl font-heading font-bold text-black tracking-tight">
                  {menuData[activeMenu].title}
                </h2>
                <p className="text-gray-800 font-body text-base leading-relaxed">
                  {menuData[activeMenu].description}
                </p>
              </div>

              <div className="space-y-5 bg-[#E6B40A] p-10 flex flex-col justify-center">
                {menuData[activeMenu].links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block font-heading text-black hover:text-white duration-200 text-base font-medium py-2 hover:translate-x-2 transform transition-transform tracking-wide"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-[#0A0A0A]/98 z-[49] overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            {(Object.keys(menuData) as MenuKey[]).map((item) => (
              <div key={item} className="border-b border-white/10">
                <button
                  onClick={() => toggleMobileSubmenu(item)}
                  className="w-full flex items-center justify-between px-4 py-4 text-white hover:text-[#FDB913] tracking-wide font-medium text-sm"
                >
                  {formatMenuLabel(item)}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      activeMobileSubmenu === item && "rotate-180"
                    )}
                  />
                </button>
                {activeMobileSubmenu === item && (
                  <div className="pl-6 pb-4 space-y-2 bg-black/30">
                    {menuData[item].links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-gray-300 hover:text-[#FDB913] text-sm"
                        onClick={() => {
                          setActiveMobileSubmenu(null);
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
                className="block px-4 py-4 text-white hover:text-[#FDB913] border-b border-white/10 tracking-wide font-medium text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <div className="px-4 mt-6">
              <Button
                asChild
                className="w-full py-6 font-body bg-[#FDB913] hover:bg-[#E1AF1C] text-black font-semibold rounded-none"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </Button>
            </div>
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
        <div className="flex items-center justify-between h-20 md:h-24 px-4 md:px-8 border-b border-white/10">
          <div className="flex items-center gap-4 flex-1">
            <Search className="h-5 w-5 md:h-6 md:w-6 text-[#FDB913]" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent font-body text-white placeholder:text-gray-500 text-base md:text-lg tracking-wide focus:outline-none"
            />
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-white hover:text-[#FDB913] transition-colors ml-4"
            aria-label="Close search"
          >
            <X className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
        <div className="p-4 md:p-8">
          <p className="text-gray-400 text-sm md:text-xl font-body">
            Start typing to search...
          </p>
        </div>
      </div>

      {/* Search Overlay */}
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
