"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const StickyNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "Our Story", href: "/about/story" },
        { name: "Leadership Team", href: "/about/team" },
        { name: "Values & Culture", href: "/about/culture" },
      ],
    },
    {
      name: "Project",
      href: "/project",
      dropdown: [
        { name: "Project Details", href: "/project/details" },
        { name: "Technical Specs", href: "/project/specs" },
        { name: "Gallery", href: "/project/gallery" },
      ],
    },
    {
      name: "Timeline",
      href: "/timeline",
      dropdown: [
        { name: "Milestones", href: "/timeline/milestones" },
        { name: "History", href: "/timeline/history" },
      ],
    },
    {
      name: "Regional Impact",
      href: "/regional-impact",
    },
    {
      name: "Resettlement",
      href: "/resettlement",
      dropdown: [
        { name: "Policy Framework", href: "/resettlement/policy" },
        { name: "Community Support", href: "/resettlement/support" },
      ],
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-800/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder-logo.svg"
              alt="Barotse Highway"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-white hover:text-green-400 transition-colors duration-200 py-2 font-medium"
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-slate-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

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

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-800 border-t border-slate-700 py-4 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-white hover:bg-slate-700 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-8 mt-2 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-1 text-slate-300 hover:text-green-400"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 mt-4">
              <Button
                asChild
                className="w-full bg-green-500 hover:bg-green-600"
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
