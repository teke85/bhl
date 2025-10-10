"use client";
import { useState, useEffect, useRef } from "react";
import DownArrow from "@/components/DownArrow";
import Link from "next/link";

type MenuKey = "About" | "Projects" | "Milestones";

function MegaMenuNavigation() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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
    About: {
      title: "ABOUT US",
      description:
        "Barotse Highway Limited is a Special Purpose Vehicle (SPV) that was incorporated as a separate legal entity by BeefCo Holdings Limited (BeefCo) and First Quantum Minerals Operations Limited (FQMOL) for the purpose of executing this project. The Road Project stretches 371-kilometres from Mutanda to Kaoma and will be implemented over a 25-year concession period, with two years for construction, and 23 years for operations and maintenance.",
      links: [
        { name: "Our Story", href: "/about/story" },
        { name: "Leadership Team", href: "/about/team" },
        { name: "Values & Culture", href: "/about/culture" },
        { name: "Sustainability", href: "/about/sustainability" },
      ],
    },
    Projects: {
      title: "PROJECT",
      description:
        "The Project encompasses the rehabilitation and upgrade of the road from Mutanda, in Northwestern Province, Zambia, to Kaoma, in Western Province, covering 371 kilometres.",
      links: [
        { name: "PROJECT DETAILS", href: "/projects" },
        { name: "CAREERS", href: "/projects/capabilities" },
        { name: "MULTIMEDIA GALLERY", href: "/projects/operations" },
      ],
    },
    Milestones: {
      title: "MILESTONES",
      description:
        "From small community improvements to major infrastructure projects, we've consistently delivered excellence. Celebrating 371 completed projects and counting.",
      links: [
        { name: "2025 Expansion", href: "/milestones" },
        { name: "Award Recognition", href: "/milestones/awards" },
        { name: "Completed Projects", href: "/milestones/completed" },
        { name: "Community Impact", href: "/milestones/impact" },
      ],
    },
  };

  // Toggle menu on click
  const handleMenuClick = (menuName: MenuKey) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    if (activeMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMenu]);

  return (
    <div
      className="hidden md:flex items-center space-x-30 relative z-50 px-4"
      ref={menuRef}
    >
      {/* About with direct link */}
      <div className="relative font-heading">
        <div className="flex items-center space-x-1">
          <Link
            href="/about"
            className="py-2 font-medium cursor-pointer text-white hover:text-[#E1AF1C] transition-all duration-300"
          >
            About
          </Link>
          <div
            className="flex items-center cursor-pointer hover:text-[#E1AF1C] transition-all duration-300"
            onClick={() => handleMenuClick("About")}
          >
            <DownArrow
              className={`w-6 h-6 transition-transform duration-300 ${
                activeMenu === "About" ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Projects with direct link */}
      <div className="relative font-heading">
        <div className="flex items-center space-x-1">
          <Link
            href="/projects"
            className="py-2 font-medium text-white cursor-pointer hover:text-[#E1AF1C] transition-all duration-300"
          >
            Projects
          </Link>
          <div
            className="flex items-center cursor-pointer hover:text-[#E1AF1C] transition-all duration-300"
            onClick={() => handleMenuClick("Projects")}
          >
            <DownArrow
              className={`w-6 h-6 transition-transform duration-300 ${
                activeMenu === "Projects" ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Milestones (no direct link) */}
      <div className="relative font-heading">
        <div
          className="relative flex items-center space-x-1 py-2 font-medium text-white cursor-pointer hover:text-[#E1AF1C] transition-all duration-300"
          onClick={() => handleMenuClick("Milestones")}
        >
          <span>Milestones</span>
          <DownArrow
            className={`w-6 h-6 transition-transform duration-300 ${
              activeMenu === "Milestones" ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Dropdown */}
      {activeMenu && (
        <div className="fixed top-[80px] left-1/2 transform -translate-x-1/2 w-full max-w-5xl shadow-2xl bg-red transition-all duration-300 z-50 opacity-100 translate-y-0">
          <div className="container-fluid mx-auto bg-transparent min-h-[400px]">
            <div className="grid py-10 grid-cols-2 gap-0 max-w-6xl mx-auto rounded-lg overflow-hidden">
              {/* Column 1 - Content with vertical divider on the LEFT */}
              <div className="font-heading px-20 space-y-6 flex flex-col bg-[#EDCA51] justify-center relative">
                {/* Vertical divider on the LEFT side with proper spacing */}
                <div className="absolute mr-5 left-8 top-1/2 transform -translate-y-1/2 w-1 h-3/4 bg-gray-900/30"></div>

                <h2 className="text-4xl font-heading font-bold text-gray-900 tracking-tight">
                  {menuData[activeMenu].title}
                </h2>

                <p className="text-gray-600 font-sans leading-relaxed text-base">
                  {menuData[activeMenu].description}
                </p>
              </div>

              {/* Column 2 - Links */}
              <div className="space-y-5 bg-[#E6B40A] p-8 flex flex-col justify-center">
                {menuData[activeMenu].links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block font-heading text-black hover:text-white duration-200 text-base font-medium py-2 hover:translate-x-2 transform transition-transform"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MegaMenuNavigation;
