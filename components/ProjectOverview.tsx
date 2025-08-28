"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Truck, Users, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Direct Port Access",
    description:
      "Direct access to Walvis Bay port, reducing transport costs by 30%",
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Mining Connectivity",
    description:
      "Enhanced connectivity for mining operations in Northwestern Province",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Community Development",
    description:
      "Improved access to healthcare and education for rural communities",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Economic Growth",
    description: "Boost to regional trade with Angola, Botswana, and Namibia",
  },
];

const ProjectOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const benefitsTitleRef = useRef<HTMLHeadingElement>(null);
  const benefitsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content section animation - slide in from left
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image section animation - slide in from right with scale
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 80, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax effect for the background image
      const bgImage = imageRef.current?.querySelector(".bg-image");
      if (bgImage) {
        gsap.to(bgImage, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Benefits title animation
      gsap.fromTo(
        benefitsTitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: benefitsTitleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Benefits cards staggered animation
      gsap.fromTo(
        benefitsGridRef.current?.children || [],
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: benefitsGridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover animations for benefit cards
      const cards = benefitsGridRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement;

          cardElement.addEventListener("mouseenter", () => {
            gsap.to(cardElement, {
              y: -10,
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          cardElement.addEventListener("mouseleave", () => {
            gsap.to(cardElement, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className="font-[family-name:var(--font-jost)]">
            <h2 className="text-3xl lg:text-4xl font-[family-name:var(--font-playfair)] font-bold text-[#151E2F] mb-6">
              Transforming Zambia&apos;s
              <span className="text-primary"> Western Corridor</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The Mutanda-Kaoma Road represents the largest infrastructure
              investment in Zambia&apos;s Western Province. This Public-Private
              Partnership will transform 371 kilometres of challenging terrain
              into a modern highway, connecting the mineral-rich Northwestern
              Province to international markets via Namibia&apos;s Walvis Bay
              port.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive approach includes not just road construction,
              but the development of supporting infrastructure including toll
              collection systems, weighbridges, and comprehensive maintenance
              programs that will ensure this vital artery serves Zambia for
              generations to come.
            </p>

            <Button
              size="lg"
              className="bg-[#151E2F] text-primary-foreground hover:bg-[#2c3a53]"
            >
              Learn More About the Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-image"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dpeg7wc34/image/upload/v1756193625/modern-highway-construction-in-africa-with-mining-_wwaibc.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 font-[family-name:var(--font-playfair)]">
          <h3
            ref={benefitsTitleRef}
            className="text-2xl lg:text-3xl font-bold text-center text-[#151E2F] mb-12"
          >
            Key Benefits & Impact
          </h3>

          <div
            ref={benefitsGridRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center bg-[#E7E9EB] hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground font-[family-name:var(--font-jost)] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
