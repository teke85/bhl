"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
// import DownArrow from "@/components/down-arrow";
import { cn } from "@/lib/utils";

type MenuKey =
  | "COMPANY"
  | "OUR COMMITMENT"
  | "KEY PROJECTS"
  | "INVESTORS"
  | "CAREERS";

const StickyNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setShowMoreMenu(false);
      }
    };

    if (activeMenu || showMoreMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMenu, showMoreMenu]);

  const menuData: Record<
    MenuKey,
    {
      title: string;
      description: string;
      links: {
        name: string;
        href: string;
      }[];
    }
  > = {
    COMPANY: {
      title: "ABOUT US",
      description:
        "Barotse Highway Limited is a Special Purpose Vehicle (SPV) incorporated by BeefCo Holdings Limited and First Quantum Minerals Operations Limited for executing this transformative infrastructure project.",
      links: [
        { name: "Our Story", href: "/about/story" },
        { name: "Leadership Team", href: "/about/team" },
        { name: "Values & Culture", href: "/about/culture" },
        { name: "Sustainability", href: "/about/sustainability" },
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
    "KEY PROJECTS": {
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
    INVESTORS: {
      title: "INVESTOR RELATIONS",
      description:
        "Discover investment opportunities in one of Zambia's most significant infrastructure projects, backed by leading industry partners and government support.",
      links: [
        { name: "Investment Overview", href: "/investors" },
        { name: "Financial Reports", href: "/investors/reports" },
        { name: "Partnership Opportunities", href: "/investors/partnerships" },
        { name: "Contact Investor Relations", href: "/investors/contact" },
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

  const handleMenuClick = (menuName: MenuKey) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
    setShowMoreMenu(false);
  };

  return (
    <nav
      ref={menuRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg"
          : "bg-[#ffff0]/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759852662/Logo_b0ski3.png"
              alt="Company Logo"
              width={500}
              height={500}
              className="object-contain w-20 h-22"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {(Object.keys(menuData) as MenuKey[]).map((item) => (
              <div key={item} className="relative">
                <button
                  onClick={() => handleMenuClick(item)}
                  className="flex items-center gap-1 text-white hover:text-[#FDB913] transition-colors duration-200 py-2 font-medium text-sm tracking-wide uppercase"
                >
                  {item}
                  {/* <DownArrow
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      activeMenu === item ? "rotate-180" : ""
                    )}
                  /> */}
                </button>
              </div>
            ))}

            {/* More Menu */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowMoreMenu(!showMoreMenu);
                  setActiveMenu(null);
                }}
                className="flex items-center gap-2 text-white hover:text-[#FDB913] transition-colors duration-200 py-2 font-medium text-sm tracking-wide uppercase"
              >
                MORE
                <Menu className="w-5 h-5" />
              </button>

              {showMoreMenu && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-md shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {moreMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-[#FDB913]/10 hover:text-[#FDB913] transition-colors font-medium"
                      onClick={() => setShowMoreMenu(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-white hover:text-[#FDB913] transition-colors p-2">
              <Search className="h-5 w-5" />
            </button>
            <Button
              asChild
              className="bg-[#FDB913] rounded-none p-6 hover:bg-[#E1AF1C] text-black font-semibold uppercase tracking-wide"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mega Menu Dropdown */}
        {activeMenu && (
          <div className="fixed top-20 left-0 right-0 shadow-2xl transition-all duration-300 z-50">
            <div className="container mx-auto">
              <div className="grid grid-cols-2 gap-0 max-w-6xl mx-auto rounded-lg overflow-hidden">
                {/* Left Column - Content */}
                <div className="px-12 py-10 space-y-6 flex flex-col bg-[#FDB913] justify-center relative">
                  <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-1 h-3/4 bg-black/20"></div>
                  <h2 className="text-4xl font-heading font-bold text-black tracking-tight">
                    {menuData[activeMenu].title}
                  </h2>
                  <p className="text-gray-800 font-sans leading-relaxed text-base">
                    {menuData[activeMenu].description}
                  </p>
                </div>

                {/* Right Column - Links */}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0A] border-t border-gray-800 py-4 animate-in slide-in-from-top duration-200">
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
                className="w-full p-20 rounded-none bg-[#FDB913] hover:bg-[#E1AF1C] text-white font-semibold uppercase"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default StickyNavigation;
