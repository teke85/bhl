"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, Search, Menu, ChevronDown, ArrowDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import ModeToggle from "./ModeToggle";

type MenuKey =
  | "company"
  | "our Commitment"
  | "project"
  | "careers"
  | "gallery"
  | "news";

// Type for search results
interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  type: "post" | "page";
  date?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

// Type for API response
interface ApiSearchResponse {
  posts: {
    nodes: Array<{
      id: string;
      title: string;
      excerpt: string;
      slug: string;
      date?: string;
      featuredImage?: {
        node: {
          sourceUrl: string;
          altText: string;
        };
      };
    }>;
  };
  pages: {
    nodes: Array<{
      id: string;
      title: string;
      excerpt: string;
      slug: string;
      featuredImage?: {
        node: {
          sourceUrl: string;
          altText: string;
        };
      };
    }>;
  };
  error?: string;
  message?: string;
}

// Custom debounce hook with proper typing
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

function StickyNavigationMenu() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] =
    useState<MenuKey | null>(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

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

      // Close search if clicking outside
      if (
        isSearchOpen &&
        searchContainerRef.current &&
        !searchContainerRef.current.contains(target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(target)
      ) {
        setIsSearchOpen(false);
      }
    };

    if (activeMenu || showMoreMenu || isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMenu, showMoreMenu, isSearchOpen]);

  // Focus search input when open
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Perform search when query changes
  useEffect(() => {
    const performSearch = async () => {
      if (!debouncedSearchQuery.trim()) {
        setSearchResults([]);
        setSearchError(null);
        return;
      }

      setIsSearching(true);
      setSearchError(null);

      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(debouncedSearchQuery)}`
        );

        if (!response.ok) {
          throw new Error(`Search request failed: ${response.status}`);
        }

        const data: ApiSearchResponse = await response.json();

        // Check for API error
        if (data.error) {
          throw new Error(data.message || data.error);
        }

        // Combine posts and pages with proper typing
        const combinedResults: SearchResult[] = [
          ...(data.posts?.nodes?.map((post) => ({
            ...post,
            type: "post" as const,
          })) || []),
          ...(data.pages?.nodes?.map((page) => ({
            ...page,
            type: "page" as const,
          })) || []),
        ];

        setSearchResults(combinedResults);
      } catch (error) {
        console.error("Search error:", error);
        setSearchError(
          error instanceof Error
            ? error.message
            : "Failed to search. Please try again."
        );
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    performSearch();
  }, [debouncedSearchQuery]);

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

  // Handle Enter key to navigate to first result
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchResults.length > 0) {
      const firstResult = searchResults[0];
      window.location.href = `/${firstResult.type === "post" ? "news" : ""}/${firstResult.slug}`;
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      const firstResult = searchResults[0];
      window.location.href = `/${firstResult.type === "post" ? "news" : ""}/${firstResult.slug}`;
    }
  };

  const stripHtml = (html: string): string => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "");
  };

  const formatDate = (dateString?: string): string => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      return dateString;
    }
  };

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
        "Western Corridor Limited is a Special Purpose Vehicle (SPV) incorporated by BeefCo Holdings Limited and First Quantum Minerals Operations Limited for executing this transformative infrastructure project.",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Partners", href: "/partners" },
        { name: "Home", href: "/" },
      ],
    },
    "our Commitment": {
      title: "OUR COMMITMENT",
      description:
        "We are committed to delivering world-class infrastructure while prioritizing community welfare, environmental sustainability, and economic development across the Western Corridor.",
      links: [
        { name: "Regional Impact", href: "/regional-impact" },
        { name: "Resettlement", href: "/resettlement" },
        { name: "Our Commitment", href: "/commitment" },
      ],
    },
    project: {
      title: "PROJECT DETAILS",
      description:
        "The Project encompasses the rehabilitation and upgrade of 371 kilometres of road from Mutanda in Northwestern Province to Kaoma in Western Province, Zambia.",
      links: [
        { name: "Project Overview", href: "/projects" },
        { name: "Timeline", href: "/timeline" },
      ],
    },
    careers: {
      title: "JOIN OUR TEAM",
      description:
        "Be part of a transformative infrastructure project that's connecting communities and driving economic growth across Zambia's Western Corridor.",
      links: [
        { name: "Current Openings", href: "/careers" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    gallery: {
      title: "GALLERY",
      description:
        "Explore our multimedia gallery showcasing the Western Corridor project.",
      links: [{ name: "View Gallery", href: "/gallery" }],
    },
    news: {
      title: "NEWS & MEDIA",
      description:
        "Stay updated with the latest news and media coverage about the Barotse Highway project.",
      links: [{ name: "Latest News", href: "/news" }],
    },
  };

  const handleMenuClick = (menu: MenuKey) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
    setShowMoreMenu(false);
  };

  const toggleMobileSubmenu = (menu: MenuKey) => {
    setActiveMobileSubmenu((prev) => (prev === menu ? null : menu));
  };

  // Capitalize first letter of menu items
  const formatMenuLabel = (key: MenuKey): string => {
    if (key === "news") return "News & Media";
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  const resetSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    setSearchError(null);
  };

  const handleSuggestionClick = (tag: string) => {
    setSearchQuery(tag);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-60 h-1 bg-zinc-900">
        <div
          className="h-full bg-[#FDDB59] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav
        ref={menuRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
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
          <div className="relative flex items-center justify-between gap-4 py-6 md:py-8 md:pb-15">
            {/* Logo */}
            <Link
              href="/"
              className="absolute left-6 top-1/2 -translate-y-1/2 pt-8 md:pt-0 z-60 flex items-center"
            >
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_70,w_300,c_limit/v1761708103/westerncorridor_logo_bih0jh.png"
                alt="Western Corridor logo"
                width={200}
                height={200}
                className="h-30 w-30 md:h-35 md:w-35 object-contain drop-shadow-lg"
                priority
                quality={70}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 ml-20 gap-10">
              <div className="flex items-center space-x-6">
                {(Object.keys(menuData) as MenuKey[]).map((item) => (
                  <div key={item} className="relative group">
                    <button
                      onClick={() => handleMenuClick(item)}
                      className="relative flex items-center cursor-pointer font-body gap-2 transition-colors duration-200 py-2 font-medium text-lg tracking-wide text-white hover:text-[#FDB913]"
                    >
                      {formatMenuLabel(item)}
                      <ArrowDown
                        className={cn(
                          "h-4 w-4 transition-all duration-300",
                          activeMenu === item
                            ? "rotate-180 text-[#FDDB59]"
                            : "rotate-0",
                          "group-hover:-translate-y-1 group-hover:text-[#FDDB59]"
                        )}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-6 mr-6">
              <Button
                asChild
                className="bg-[#FDDB59] rounded-none hover:bg-[#E1AF1C] text-black font-semibold tracking-wide px-10 py-6"
              >
                <Link className="font-body" href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <div className="lg:hidden flex items-center gap-3 ml-auto">
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
          className="hidden lg:block fixed top-36 left-6 right-6 shadow-2xl transition-all duration-300 z-51 rounded-xl overflow-hidden"
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
        <div className="lg:hidden fixed inset-0 top-16 bg-[#0A0A0A]/98 z-49 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            {(Object.keys(menuData) as MenuKey[]).map((item) => (
              <div key={item} className="border-b border-white/10">
                <button
                  onClick={() => toggleMobileSubmenu(item)}
                  className="w-full flex items-center justify-between px-4 py-4 text-white hover:text-[#FDDB59] tracking-wide font-medium text-sm"
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
                        className="block px-4 py-2 text-gray-300 hover:text-[#FDDB59] text-sm"
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
        ref={searchContainerRef}
        className={cn(
          "fixed top-0 right-0 h-full w-full md:w-[600px] bg-[#0A0A0A]/95 z-100 transition-transform duration-500 ease-out border-l border-white/10 overflow-hidden flex flex-col",
          isSearchOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <form onSubmit={handleSearchSubmit} className="shrink-0">
          <div className="flex items-center justify-between h-20 md:h-24 px-4 md:px-8 border-b border-white/10">
            <div className="flex items-center gap-4 flex-1">
              <Search className="h-5 w-5 md:h-6 md:w-6 text-[#FDDB59]" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search news, pages, and content..."
                className="flex-1 bg-transparent font-body text-white placeholder:text-gray-500 text-base md:text-lg tracking-wide focus:outline-none"
                aria-label="Search"
              />
              {isSearching && (
                <Loader2 className="h-5 w-5 animate-spin text-[#FDDB59]" />
              )}
            </div>
            <button
              type="button"
              onClick={resetSearch}
              className="text-white hover:text-[#FDB913] transition-colors ml-4"
              aria-label="Close search"
            >
              <X className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </form>

        <div className="flex-1 overflow-y-auto">
          {searchError ? (
            <div className="p-8 text-center">
              <p className="text-red-400 font-body">{searchError}</p>
            </div>
          ) : searchQuery.trim() ? (
            <div className="p-4 md:p-8">
              {isSearching ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-[#FDDB59]" />
                  <span className="ml-3 text-gray-400 font-body">
                    Searching...
                  </span>
                </div>
              ) : searchResults.length > 0 ? (
                <>
                  <p className="text-gray-400 text-sm md:text-base font-body mb-6">
                    Found {searchResults.length} result
                    {searchResults.length !== 1 ? "s" : ""}
                  </p>
                  <div className="space-y-6">
                    {searchResults.map((result) => (
                      <Link
                        key={result.id}
                        href={`/${result.type === "post" ? "news" : ""}/${result.slug}`}
                        className="block group"
                        onClick={resetSearch}
                      >
                        <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg transition-colors">
                          <div className="flex items-start gap-4">
                            {result.featuredImage?.node?.sourceUrl && (
                              <div className="relative w-16 h-16 flex-shrink-0">
                                <Image
                                  src={result.featuredImage.node.sourceUrl}
                                  alt={
                                    result.featuredImage.node.altText ||
                                    stripHtml(result.title)
                                  }
                                  fill
                                  className="object-cover rounded"
                                  sizes="64px"
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span
                                  className={cn(
                                    "text-xs px-2 py-0.5 rounded-full font-medium",
                                    result.type === "post"
                                      ? "bg-blue-500/20 text-blue-400"
                                      : "bg-green-500/20 text-green-400"
                                  )}
                                >
                                  {result.type === "post" ? "News" : "Page"}
                                </span>
                                {result.date && (
                                  <span className="text-xs text-gray-400">
                                    {formatDate(result.date)}
                                  </span>
                                )}
                              </div>
                              <h3 className="text-white font-body font-semibold group-hover:text-[#FDDB59] transition-colors truncate">
                                {stripHtml(result.title)}
                              </h3>
                              {result.excerpt && (
                                <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                                  {stripHtml(result.excerpt)}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 font-body">
                    No results found for &quot;{searchQuery}&quot;
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Try different keywords or check your spelling
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8">
              <p className="text-gray-400 text-sm md:text-xl font-body mb-4">
                Start typing to search...
              </p>
              <div className="space-y-4">
                <p className="text-gray-500 text-sm">Search for:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Project Updates",
                    "News Articles",
                    "Careers",
                    "Gallery",
                    "About Us",
                  ].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleSuggestionClick(tag)}
                      className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 text-sm rounded-full transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-99 transition-opacity duration-300"
          onClick={() => setIsSearchOpen(false)}
        />
      )}
    </>
  );
}

export default StickyNavigationMenu;
