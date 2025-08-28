"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "./ui/input";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Example: router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-fluid bg-white mx-auto p-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1756192912/Barotse_Logo-removebg-preview_nufoih.png"
              alt="Barotse Highway Limited"
              width={220}
              height={220}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className=" font-extrabold font-inter uppercase">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group bg-transparent text-accent inline-flex h-10 w-max items-center justify-center px-4 py-2 text-md font-medium transition-colors hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md bg-transparent text-accent hover:text-white uppercase">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 font-[family-name:var(--font-jost)] p-6 w-[400px]">
                    <Link
                      href="/about"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-md font-medium leading-none">
                        Company Background
                      </div>
                      <p className="line-clamp-2 text-md leading-relaxed text-foreground hover:text-white">
                        Learn about our history and mission
                      </p>
                    </Link>
                    <Link
                      href="/leadership"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-md font-medium leading-none">
                        Leadership Team
                      </div>
                      <p className="line-clamp-2 text-md leading-relaxed text-foreground hover:text-white">
                        Meet our experienced leadership
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md bg-transparent text-accent hover:bg-[#161E32] uppercase">
                  Project
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px]">
                    <Link
                      href="/project"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-md font-medium leading-none">
                        Project Overview
                      </div>
                      <p className="line-clamp-2 text-md leading-relaxed text-foreground hover:text-white">
                        Comprehensive details about the highway project
                      </p>
                    </Link>
                    <Link
                      href="/timeline"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-md font-medium leading-none">
                        Timeline & Milestones
                      </div>
                      <p className="line-clamp-2 text-md leading-relaxed text-foreground hover:text-white">
                        Track our progress and upcoming milestones
                      </p>
                    </Link>
                    <Link
                      href="/environmental"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-md font-medium leading-none">
                        Environmental Impact
                      </div>
                      <p className="line-clamp-2 text-md leading-relaxed text-foreground hover:text-white">
                        Our commitment to environmental responsibility
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md text-accent bg-transparent uppercase">
                  Updates
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <Link
                      href="/news"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-md font-medium leading-none">
                        News & Announcements
                      </div>
                      <p className="line-clamp-2 text-md leading-relaxed text-foreground hover:text-white">
                        Latest project updates and news
                      </p>
                    </Link>
                    <Link
                      href="/community"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-md font-medium leading-none">
                        CSR & Community
                      </div>
                      <p className="line-clamp-2 text-md leading-relaxed text-foreground hover:text-white">
                        Community engagement and social responsibility
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group bg-transparent text-accent inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-accent-foreground focus:bg-[#161E32] focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar and CTA - Updated colors to match website teal theme */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors"
                />
              </div>
            </form>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button className="bg-[#151E2F] uppercase text-primary-foreground hover:bg-primary/90">
              Download Project Brief
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/project"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Project
                </Link>
                <Link
                  href="/timeline"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Timeline
                </Link>
                <Link
                  href="/news"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Updates
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  Download Project Brief
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
