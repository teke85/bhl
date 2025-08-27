"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, Play } from "lucide-react";
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

      <header className="relative z-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1756192912/Barotse_Logo-removebg-preview_nufoih.png"
                alt="Barotse Highway Limited"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="uppercase">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="uppercase">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <Link
                        href="/about"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-white"
                      >
                        <div className="text-sm font-medium leading-none">
                          Company Background
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn about our history and mission
                        </p>
                      </Link>
                      <Link
                        href="/leadership"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-white"
                      >
                        <div className="text-sm font-medium leading-none">
                          Leadership Team
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Meet our experienced leadership
                        </p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="uppercase">
                    Project
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px]">
                      <Link
                        href="/project"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-white"
                      >
                        <div className="text-sm font-medium leading-none">
                          Project Overview
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Comprehensive details about the highway project
                        </p>
                      </Link>
                      <Link
                        href="/timeline"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-white"
                      >
                        <div className="text-sm font-medium leading-none">
                          Timeline & Milestones
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Track our progress and upcoming milestones
                        </p>
                      </Link>
                      <Link
                        href="/environmental"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-white"
                      >
                        <div className="text-sm font-medium leading-none">
                          Environmental Impact
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Our commitment to environmental responsibility
                        </p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="uppercase">
                    Updates
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <Link
                        href="/news"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-white"
                      >
                        <div className="text-sm font-medium leading-none">
                          News & Announcements
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Latest project updates and news
                        </p>
                      </Link>
                      <Link
                        href="/community"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-white"
                      >
                        <div className="text-sm font-medium leading-none">
                          CSR & Community
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Community engagement and social responsibility
                        </p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Button className="bg-white text-primary hover:bg-white/90 font-medium">
                Download Project Brief
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-white" />
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
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
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
