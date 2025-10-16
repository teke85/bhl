"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ModeToggle";

type MenuKey = "COMPANY" | "OUR COMMITMENT" | "PROJECT" | "CAREERS";

const StickyNavigationMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close menu
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

  // Focus search input
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Escape closes search
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) setIsSearchOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isSearchOpen]);

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
        { name: "About Us", href: "/aboutus" },
        { name: "Our Story", href: "/about/story" },
        { name: "Leadership Team", href: "/about/team" },
        { name: "Values & Culture", href: "/about/culture" },
      ],
    },
    "OUR COMMITMENT": {
      title: "OUR COMMITMENT",
      description:
        "We are committed to delivering world-class infrastructure while prioritizing community welfare, environmental sustainability, and economic development across the Western Corridor.",
      links: [
        { name: "Community First", href: "/commitment/community" },
        { name: "Environmental Impact", href: "/commitment/environment" },
        { name: "Safety Standards", href: "/commitment/safety" },
        { name: "Local Employment", href: "/commitment/employment" },
      ],
    },
    PROJECT: {
      title: "PROJECT DETAILS",
      description:
        "The Project encompasses the rehabilitation and upgrade of 371 kilometres of road from Mutanda in Northwestern Province to Kaoma in Western Province, Zambia.",
      links: [
        { name: "Project Overview", href: "/projects" },
        { name: "Technical Specifications", href: "/projects/specs" },
        { name: "Multimedia Gallery", href: "/projects/gallery" },
        { name: "Progress Updates", href: "/projects/updates" },
      ],
    },
    CAREERS: {
      title: "JOIN OUR TEAM",
      description:
        "Be part of a transformative infrastructure project that's connecting communities and driving economic growth across Zambia's Western Corridor.",
      links: [
        { name: "Current Openings", href: "/careers" },
        { name: "Life at Barotse Highway", href: "/careers/culture" },
        { name: "Benefits & Development", href: "/careers/benefits" },
        { name: "Application Process", href: "/careers/apply" },
      ],
    },
  };

  const moreMenuItems = [
    { name: "Timeline", href: "/timeline" },
    { name: "Regional Impact", href: "/regional-impact" },
    { name: "Resettlement", href: "/resettlement" },
    { name: "News & Media", href: "/news" },
  ];

  const handleMenuClick = (menu: MenuKey) => {
    setActiveMenu(activeMenu === menu ? null : menu);
    setShowMoreMenu(false);
  };

  return (
    <>
      <nav
        ref={menuRef}
        className="fixed top-6 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Logo + Nav */}
            <div
              className={cn(
                "flex items-center gap-8 px-6 py-4 transition-all duration-300",
                isScrolled
                  ? "bg-[#0A0A0A]/90 backdrop-blur-xl shadow-2xl border border-white/10"
                  : "bg-[#fff0]/70 backdrop-blur-lg border border-white/5"
              )}
            >
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

              {/* Navigation Items */}
              <div className="hidden lg:flex items-center space-x-8">
                {(Object.keys(menuData) as MenuKey[]).map((item) => (
                  <div key={item} className="relative group">
                    <button
                      onClick={() => handleMenuClick(item)}
                      className="flex items-center cursor-pointer font-heading gap-1 text-white py-2 text-sm font-medium tracking-wide uppercase hover:text-[#FDB913] transition-all"
                    >
                      {item}
                    </button>
                    {/* Underline animation */}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FDB913] transition-all duration-300 group-hover:w-full"></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              {/* More */}
              <div
                className={cn(
                  "px-6 py-4 transition-all duration-300",
                  isScrolled
                    ? "bg-[#0A0A0A]/90 backdrop-blur-xl shadow-2xl border border-white/10"
                    : "bg-[#fff0]/70 backdrop-blur-lg border border-white/5"
                )}
              >
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowMoreMenu(!showMoreMenu);
                      setActiveMenu(null);
                    }}
                    className="flex items-center font-body gap-3 text-white hover:text-[#FDB913] font-medium text-sm tracking-wide uppercase group"
                  >
                    MORE
                    <div className="flex flex-col gap-1.5 w-5">
                      <span className="h-0.5 bg-current transition-all group-hover:w-1/2"></span>
                      <span className="h-0.5 bg-current transition-all"></span>
                    </div>
                  </button>

                  {showMoreMenu && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl py-2">
                      {moreMenuItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-white hover:bg-[#FDB913]/10 hover:text-[#FDB913] transition-colors font-medium"
                          onClick={() => setShowMoreMenu(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Theme + Search + Contact */}
              <div
                className={cn(
                  "px-4 py-4 transition-all duration-300",
                  isScrolled ? "shadow-2xl border border-white/10" : ""
                )}
              >
                <ThemeToggle />
              </div>

              <div
                className={cn(
                  "px-4 py-4 transition-all duration-300",
                  isScrolled
                    ? "bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10"
                    : "bg-[#0A0A0A]/70 backdrop-blur-lg border border-white/5"
                )}
              >
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-white hover:text-[#FDB913]"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>

              <Button
                asChild
                className="bg-[#FDB913] hover:bg-[#E1AF1C] text-black font-semibold uppercase tracking-wide px-8 py-6 rounded-none"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega Menu */}
      {activeMenu && (
        <div className="fixed top-28 left-6 right-6 shadow-2xl z-50 rounded-xl overflow-hidden">
          <div className="grid grid-cols-2 max-w-6xl mx-auto rounded-lg overflow-hidden">
            <div className="px-12 py-10 space-y-6 flex flex-col bg-white justify-center relative">
              <div className="absolute left-8 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-black/20"></div>
              <h2 className="text-4xl font-heading font-bold text-black tracking-tight">
                {menuData[activeMenu].title}
              </h2>
              <p className="text-gray-800 font-body text-base leading-relaxed">
                {menuData[activeMenu].description}
              </p>
            </div>
            <div className="space-y-5 bg-[#E6B40A] p-10 flex flex-col justify-center">
              {menuData[activeMenu].links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="block font-heading text-black hover:text-white text-base font-medium py-2 hover:translate-x-2 transition-transform uppercase tracking-wide"
                  onClick={() => setActiveMenu(null)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyNavigationMenu;
