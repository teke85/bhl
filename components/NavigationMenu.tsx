import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ArrowRight,
  Users,
  Target,
  Award,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

type MenuKey = "About" | "Projects" | "Milestones";

function MegaMenuNavigation() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuData: Record<
    MenuKey,
    {
      sections: {
        title: string;
        links: {
          name: string;
          href: string;
          icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
          description: string;
        }[];
      }[];
      featured: {
        title: string;
        description: string;
        image: string;
        cta: string;
        href: string;
      };
    }
  > = {
    About: {
      sections: [
        {
          title: "Company",
          links: [
            {
              name: "Our Story",
              href: "/about/story",
              icon: Users,
              description: "Learn about our journey and mission",
            },
            {
              name: "Leadership Team",
              href: "/about/team",
              icon: Target,
              description: "Meet our experienced leaders",
            },
            {
              name: "Values & Culture",
              href: "/about/culture",
              icon: Award,
              description: "Our core principles and beliefs",
            },
            {
              name: "Sustainability",
              href: "/about/sustainability",
              icon: ExternalLink,
              description: "Environmental commitment",
            },
          ],
        },
        {
          title: "Capabilities",
          links: [
            {
              name: "Engineering Excellence",
              href: "/capabilities/engineering",
              icon: Target,
              description: "Advanced technical solutions",
            },
            {
              name: "Project Management",
              href: "/capabilities/management",
              icon: Users,
              description: "Comprehensive project oversight",
            },
            {
              name: "Quality Assurance",
              href: "/capabilities/quality",
              icon: Award,
              description: "Rigorous quality standards",
            },
            {
              name: "Innovation Lab",
              href: "/capabilities/innovation",
              icon: ExternalLink,
              description: "Future-focused R&D",
            },
          ],
        },
      ],
      featured: {
        title: "25 Years of Excellence",
        description:
          "Transforming infrastructure across Africa with innovative solutions and sustainable development practices.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        cta: "Explore Our Journey",
        href: "/about/journey",
      },
    },
    Projects: {
      sections: [
        {
          title: "Current Projects",
          links: [
            {
              name: "Walvis Bay Corridor",
              href: "/projects/walvis-bay",
              icon: MapPin,
              description: "Major highway infrastructure",
            },
            {
              name: "Urban Development",
              href: "/projects/urban",
              icon: Target,
              description: "Modern city planning solutions",
            },
            {
              name: "Bridge Construction",
              href: "/projects/bridges",
              icon: ExternalLink,
              description: "Connecting communities",
            },
            {
              name: "Renewable Energy",
              href: "/projects/energy",
              icon: Award,
              description: "Sustainable power solutions",
            },
          ],
        },
        {
          title: "Project Types",
          links: [
            {
              name: "Transportation",
              href: "/projects/transportation",
              icon: MapPin,
              description: "Roads, bridges, railways",
            },
            {
              name: "Water Systems",
              href: "/projects/water",
              icon: Target,
              description: "Treatment and distribution",
            },
            {
              name: "Energy Infrastructure",
              href: "/projects/energy-infra",
              icon: Award,
              description: "Power generation facilities",
            },
            {
              name: "Commercial Buildings",
              href: "/projects/commercial",
              icon: Users,
              description: "Office and retail spaces",
            },
          ],
        },
      ],
      featured: {
        title: "Fastest Route to Walvis Bay",
        description:
          "Revolutionary infrastructure connecting Zambia's resources to global markets through innovative engineering.",
        image:
          "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        cta: "View Project Details",
        href: "/projects/walvis-bay",
      },
    },
    Milestones: {
      sections: [
        {
          title: "Major Achievements",
          links: [
            {
              name: "2025 Expansion",
              href: "/milestones/2025",
              icon: Calendar,
              description: "Strategic growth initiatives",
            },
            {
              name: "Award Recognition",
              href: "/milestones/awards",
              icon: Award,
              description: "Industry accolades received",
            },
            {
              name: "Completed Projects",
              href: "/milestones/completed",
              icon: Target,
              description: "Successfully delivered works",
            },
            {
              name: "Community Impact",
              href: "/milestones/impact",
              icon: Users,
              description: "Positive social outcomes",
            },
          ],
        },
        {
          title: "Timeline",
          links: [
            {
              name: "2020-2025",
              href: "/milestones/recent",
              icon: Calendar,
              description: "Recent accomplishments",
            },
            {
              name: "2015-2020",
              href: "/milestones/growth",
              icon: Target,
              description: "Expansion period highlights",
            },
            {
              name: "2000-2015",
              href: "/milestones/foundation",
              icon: Award,
              description: "Building our reputation",
            },
            {
              name: "Future Goals",
              href: "/milestones/future",
              icon: ExternalLink,
              description: "Vision for tomorrow",
            },
          ],
        },
      ],
      featured: {
        title: "371 Projects Completed",
        description:
          "From small community improvements to major infrastructure projects, we've consistently delivered excellence.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        cta: "See All Milestones",
        href: "/milestones/all",
      },
    },
  };

  const handleMenuEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuName as MenuKey);
    setIsVisible(true);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setIsVisible(false);
    }, 150);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setIsVisible(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="hidden md:flex items-center space-x-8 relative">
      {Object.keys(menuData).map((menuName) => (
        <div
          key={menuName}
          className="relative"
          onMouseEnter={() => handleMenuEnter(menuName)}
          onMouseLeave={handleMenuLeave}
        >
          <button className="text-white cursor-pointer hover:text-[#E1AF1C] transition-all duration-300 flex items-center space-x-1 py-2">
            <span className="font-medium">{menuName}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                activeMenu === menuName ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      ))}

      {/* Mega Menu Dropdown - Fixed positioning */}
      {activeMenu && (
        <div
          ref={menuRef}
          className={`fixed top-[80px] left-1/2 transform -translate-x-1/2 w-full max-w-6xl bg-white shadow-2xl rounded-b-2xl border-t-4 border-[#E1AF1C] transition-all duration-300 z-50 mx-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Menu Sections */}
              {menuData[activeMenu].sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  <h3 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-900 border-b-2 border-[#E1AF1C] pb-2">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="group flex font-[family-name:var(--font-jost)] items-start space-x-3 p-3 rounded-xl hover:bg-[#E1AF1C]/10 transition-all duration-300 hover:translate-x-1"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-[#E1AF1C]/20 rounded-lg flex items-center justify-center group-hover:bg-[#E1AF1C] transition-colors duration-300">
                          <link.icon className="w-4 h-4 text-[#E1AF1C] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-1">
                            <p className="font-semibold text-gray-900 group-hover:text-[#E1AF1C] transition-colors duration-300 text-sm">
                              {link.name}
                            </p>
                            <ArrowRight className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                          </div>
                          <p className="text-xs text-gray-600 mt-1">
                            {link.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Featured Section */}
              <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-[#E1AF1C]/10 to-[#E1AF1C]/5 rounded-2xl p-4 lg:p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-bold text-xl lg:text-2xl text-gray-900 mb-2">
                    {menuData[activeMenu].featured.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">
                    {menuData[activeMenu].featured.description}
                  </p>

                  <div className="relative h-32 lg:h-40 rounded-xl overflow-hidden mb-4 shadow-lg">
                    <Image
                      src={menuData[activeMenu].featured.image}
                      alt={menuData[activeMenu].featured.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <a
                    href={menuData[activeMenu].featured.href}
                    className="inline-flex items-center space-x-2 bg-[#E1AF1C] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold hover:bg-[#E1AF1C]/90 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg group text-sm lg:text-base"
                  >
                    <span>{menuData[activeMenu].featured.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-[#E1AF1C]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 lg:w-24 lg:h-24 bg-[#E1AF1C]/10 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Bottom Contact Strip */}
            <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-[#E1AF1C]" />
                    <span>+260 XXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-[#E1AF1C]" />
                    <span>info@company.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#E1AF1C]" />
                    <span>Lusaka, Zambia</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Need help?{" "}
                  <a
                    href="/contact"
                    className="text-[#E1AF1C] hover:underline font-medium"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MegaMenuNavigation;
