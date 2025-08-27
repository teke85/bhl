"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  ArrowRight,
  Play,
  ChevronDown,
  Building2,
  Users,
  FileText,
  Newspaper,
  Download,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simple fade-in animations
    const elements = [
      titleRef.current,
      subtitleRef.current,
      buttonsRef.current,
    ];

    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";

        setTimeout(() => {
          el.style.transition = "all 0.8s ease-out";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, index * 200);
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dpeg7wc34/image/upload/v1756193625/aerial-view-of-african-highway-construction-site-w_ulux6u.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <header className="relative z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1756192912/Barotse_Logo-removebg-preview_nufoih.png"
                alt="Barotse Highway Limited"
                width={240}
                height={240}
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="font-jost">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-12 w-max items-center justify-center px-6 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-white focus:outline-none uppercase tracking-wide">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-12 px-6 text-sm bg-transparent font-semibold text-gray-700 hover:text-white uppercase tracking-wide">
                    About <ChevronDown className="ml-1 h-4 w-4" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-6 p-8 w-[600px] lg:w-[700px] lg:grid-cols-2">
                      <div className="space-y-4">
                        <h3 className="font-playfair text-lg font-bold text-gray-900 mb-4">
                          Company
                        </h3>
                        <Link
                          href="/about"
                          className="group block select-none space-y-2 p-4 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent"
                        >
                          <div className="flex items-center space-x-3">
                            <Building2 className="h-5 w-5 text-[#1e3a8a]" />
                            <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#1e3a8a]">
                              Company Background
                            </div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Learn about our history, mission, and commitment to
                            infrastructure development
                          </p>
                        </Link>
                        <Link
                          href="/leadership"
                          className="group block select-none space-y-2 p-4 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent"
                        >
                          <div className="flex items-center space-x-3">
                            <Users className="h-5 w-5 text-[#1e3a8a]" />
                            <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#1e3a8a]">
                              Leadership Team
                            </div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Meet our experienced leadership driving
                            Zambia&apos;s infrastructure future
                          </p>
                        </Link>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-playfair text-lg font-bold text-gray-900 mb-4">
                          Our Story
                        </h3>
                        <Link
                          href="/our-story"
                          className="group block select-none space-y-2 p-4 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent"
                        >
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-[#1e3a8a]" />
                            <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#1e3a8a]">
                              Our Journey
                            </div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            From vision to reality - the story behind
                            Zambia&apos;s gateway project
                          </p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-12 bg-transparent px-6 text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Project <ChevronDown className="ml-1 h-4 w-4" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-6 p-8 w-[800px] lg:w-[900px] lg:grid-cols-3">
                      <div className="space-y-4">
                        <h3 className="font-playfair text-lg font-bold text-gray-900 mb-4">
                          Overview
                        </h3>
                        <Link
                          href="/project"
                          className="group block select-none space-y-2 p-4 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent"
                        >
                          <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#1e3a8a]">
                            Project Overview
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            371km highway connecting Copperbelt to international
                            markets
                          </p>
                        </Link>
                        <Link
                          href="/technical-specifications"
                          className="group block select-none space-y-2 p-4 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent"
                        >
                          <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#1e3a8a]">
                            Technical Specifications
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Engineering details, road design, and infrastructure
                            specs
                          </p>
                        </Link>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-playfair text-lg font-bold text-gray-900 mb-4">
                          Progress
                        </h3>
                        <Link
                          href="/timeline"
                          className="group block select-none space-y-2 p-4 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent"
                        >
                          <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#1e3a8a]">
                            Timeline & Milestones
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Track construction progress and key project
                            milestones
                          </p>
                        </Link>
                        <Link
                          href="/environmental"
                          className="group block select-none space-y-2 p-4 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent"
                        >
                          <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#1e3a8a]">
                            Environmental Impact
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Sustainability measures and environmental
                            responsibility
                          </p>
                        </Link>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-playfair text-lg font-bold text-gray-900 mb-4">
                          Partners
                        </h3>
                        <Link
                          href="/partners"
                          className="group block select-none space-y-2 p-4 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent"
                        >
                          <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#1e3a8a]">
                            Partners & Consultants
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            World-class partnership ecosystem driving project
                            success
                          </p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-12 bg-transparent px-6 text-sm font-semibold text-gray-700 hover:text-white uppercase tracking-wide">
                    Updates <ChevronDown className="ml-1 h-4 w-4" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-6 p-8 w-[600px] lg:w-[700px] lg:grid-cols-2">
                      <div className="space-y-4">
                        <h3 className="font-playfair text-lg font-bold text-gray-900 mb-4">
                          Latest News
                        </h3>
                        <Link
                          href="/news"
                          className="group block select-none space-y-2 p-4 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent"
                        >
                          <div className="flex items-center space-x-3">
                            <Newspaper className="h-5 w-5 text-[#1e3a8a]" />
                            <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#1e3a8a]">
                              News & Announcements
                            </div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Latest project updates, milestones, and official
                            announcements
                          </p>
                        </Link>
                        <Link
                          href="/media-gallery"
                          className="group block select-none space-y-2 p-4 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent"
                        >
                          <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#1e3a8a]">
                            Media Gallery
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Photos, videos, and visual documentation of project
                            progress
                          </p>
                        </Link>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-playfair text-lg font-bold text-gray-900 mb-4">
                          Community
                        </h3>
                        <Link
                          href="/community"
                          className="group block select-none space-y-2 p-4 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent"
                        >
                          <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#1e3a8a]">
                            CSR & Community
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Community engagement and corporate social
                            responsibility initiatives
                          </p>
                        </Link>
                        <Link
                          href="/procurement"
                          className="group block select-none space-y-2 p-4 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent"
                        >
                          <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-[#1e3a8a]">
                            Procurement Opportunities
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Business opportunities and supplier engagement
                            programs
                          </p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex bg-transparent h-12 w-max items-center justify-center px-6 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-white focus:outline-none uppercase tracking-wide">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Button className="bg-[#E7E9EB] text-[#162540] hover:bg-[#b8babd] px-6 py-3 font-semibold uppercase tracking-wide">
                <Download className="mr-2 h-4 w-4" />
                Project Brief
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-8">
                  <Link
                    href="/"
                    className="text-lg font-semibold text-gray-900 hover:text-[#1e3a8a]"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      About
                    </h3>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/about"
                        className="block text-gray-600 hover:text-[#1e3a8a]"
                        onClick={() => setIsOpen(false)}
                      >
                        Company Background
                      </Link>
                      <Link
                        href="/leadership"
                        className="block text-gray-600 hover:text-[#1e3a8a]"
                        onClick={() => setIsOpen(false)}
                      >
                        Leadership Team
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Project
                    </h3>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/project"
                        className="block text-gray-600 hover:text-[#1e3a8a]"
                        onClick={() => setIsOpen(false)}
                      >
                        Project Overview
                      </Link>
                      <Link
                        href="/timeline"
                        className="block text-gray-600 hover:text-[#1e3a8a]"
                        onClick={() => setIsOpen(false)}
                      >
                        Timeline & Milestones
                      </Link>
                      <Link
                        href="/environmental"
                        className="block text-gray-600 hover:text-[#1e3a8a]"
                        onClick={() => setIsOpen(false)}
                      >
                        Environmental Impact
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Updates
                    </h3>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/news"
                        className="block text-gray-600 hover:text-[#1e3a8a]"
                        onClick={() => setIsOpen(false)}
                      >
                        News & Announcements
                      </Link>
                      <Link
                        href="/community"
                        className="block text-gray-600 hover:text-[#1e3a8a]"
                        onClick={() => setIsOpen(false)}
                      >
                        CSR & Community
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="text-lg font-semibold text-gray-900 hover:text-[#1e3a8a]"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <Button className="mt-6 bg-[#1e3a8a] text-white hover:bg-[#1e40af]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Project Brief
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1
            ref={titleRef}
            className="text-4xl font-[family-name:var(--font-playfair)] sm:text-5xl lg:text-4xl xl:text-6xl font-bold mb-6 leading-tight tracking-tight"
          >
            Building Zambia&apos;s Gateway to the West
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl font-[family-name:var(--font-jost)] lg:text-xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90"
          >
            371km of modern infrastructure connecting the Copperbelt to
            international markets
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#B8BABD] text-white hover:bg-[#898c8f] px-8 py-4 text-lg font-semibold"
            >
              Explore the Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              View Latest Updates
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
