"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger + Search Button */}
      <div className="flex items-center space-x-3 md:hidden z-50">
        {/* Search Icon */}
        <button
          onClick={() => setShowSearch(!showSearch)}
          aria-label="Toggle search"
          className="p-2 rounded-md hover:bg-white/10 transition"
        >
          <Search className="w-5 h-5 text-white" />
        </button>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="flex flex-col space-y-1.5 p-2 rounded-md hover:bg-white/10 transition"
        >
          <span
            className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "w-5 rotate-45 translate-y-1.5" : "w-6"
              }`}
          ></span>
          <span
            className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0 w-4" : "w-4"
              }`}
          ></span>
          <span
            className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "w-5 -rotate-45 -translate-y-1" : "w-3"
              }`}
          ></span>
        </button>
      </div>

      {/* Mobile Search Bar */}
      {showSearch && (
        <div className="absolute top-16 left-0 right-0 px-4 md:hidden z-40">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder:text-white/60 focus:bg-[#ad8b19] border border-white/20 outline-none transition"
          />
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
        ></div>
      )}

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1a1a1a] z-50 transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <span className="text-white font-bold text-lg">Menu</span>
          <button onClick={toggleMenu} aria-label="Close menu">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 mt-6 px-4">
          <Link href="/about" className="text-white hover:text-[#EAB81E]">
            About
          </Link>
          <Link href="/projects" className="text-white hover:text-[#EAB81E]">
            Projects
          </Link>
          <Link href="/milestones" className="text-white hover:text-[#EAB81E]">
            Milestones
          </Link>
          <Link href="/gallery" className="text-white hover:text-[#EAB81E]">
            Gallery
          </Link>
          <Link href="/news" className="text-white hover:text-[#EAB81E]">
            News
          </Link>
        </nav>
      </div>
    </>
  );
}
