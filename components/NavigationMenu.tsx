"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import DownArrow from "@/components/DownArrow";

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
      featured: {
        title: string;
        image: string;
        href: string;
      };
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
      featured: {
        title: "ANNUAL REPORT 2024",
        image:
          "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        href: "/about/annual-report",
      },
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
      featured: {
        title: "ESG REPORT 2024",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        href: "/projects/esg-report",
      },
    },
    Milestones: {
      title: "MILESTONES",
      description:
        "From small community improvements to major infrastructure projects, we've consistently delivered excellence. Celebrating 371 completed projects and counting.",
      links: [
        { name: "2025 Expansion", href: "/milestones/2025" },
        { name: "Award Recognition", href: "/milestones/awards" },
        { name: "Completed Projects", href: "/milestones/completed" },
        { name: "Community Impact", href: "/milestones/impact" },
      ],
      featured: {
        title: "ACHIEVEMENTS 2024",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        href: "/milestones/achievements",
      },
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
      className="hidden md:flex items-center space-x-8 relative z-50 px-4"
      ref={menuRef}
    >
      {Object.keys(menuData).map((menuName) => (
        <div key={menuName} className="relative font-heading">
          <div
            className="relative flex items-center space-x-1 py-2 font-medium text-white cursor-pointer hover:text-[#E1AF1C] transition-all duration-300"
            onClick={() => handleMenuClick(menuName as MenuKey)}
          >
            <span>{menuName}</span>
            <DownArrow
              className={`w-4 h-4 transition-transform duration-300 ${
                activeMenu === menuName ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      ))}

      <div className="relative">
        <a
          href="/gallery"
          className="text-white cursor-pointer hover:text-[#E1AF1C] transition-all duration-300 flex items-center space-x-1 py-2 font-medium"
        >
          Gallery
        </a>
      </div>

      <div className="relative">
        <a
          href="/news"
          className="text-white cursor-pointer hover:text-[#E1AF1C] transition-all duration-300 flex items-center space-x-1 py-2 font-medium"
        >
          News
        </a>
      </div>

      {/* Dropdown */}
      {activeMenu && (
        <div className="fixed top-[64px] left-0 right-0 w-fit shadow-2xl bg-red transition-all duration-300 z-50 opacity-100 translate-y-0">
          <div className="container-fluid mx-auto bg-transparent min-h-[500px]">
            <div className="grid grid-cols-3 gap-0 max-w-7xl mx-auto ">
              {/* Column 1 */}
              <div className="font-heading space-y-6 flex flex-col p-4 bg-[#EDCA51] justify-center">
                <h2 className="text-4xl font-heading font-bold text-gray-900 tracking-tight">
                  {menuData[activeMenu].title}
                </h2>
                <p className="text-gray-600 font-sans leading-relaxed text-base">
                  {menuData[activeMenu].description}
                </p>
              </div>

              {/* Column 2 */}
              <div className="space-y-5 bg-[#E6B40A] p-8 flex flex-col justify-center">
                {menuData[activeMenu].links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block font-heading text-black hover:text-white duration-200 text-base font-medium py-2 hover:translate-x-2 transform transition-transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Column 3 */}
              <div className="relative flex items-center">
                <a
                  href={menuData[activeMenu].featured.href}
                  className="block group w-full"
                >
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={
                        menuData[activeMenu].featured.image ||
                        "/placeholder.svg"
                      }
                      alt={menuData[activeMenu].featured.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white font-bold text-xl">
                        {menuData[activeMenu].featured.title}
                      </h3>
                      <p className="text-white/80 text-sm mt-2">Learn more →</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MegaMenuNavigation;
