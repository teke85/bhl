"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function BuildingExcellence() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const stats = statsRef.current;
    const cta = ctaRef.current;

    if (!section || !heading || !subheading || !stats || !cta) return;

    // Create timeline for scroll-triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate heading with split effect
    tl.fromTo(
      heading,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Animate subheading
    tl.fromTo(
      subheading,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.6"
    );

    // Animate stats with stagger
    const statItems = stats.querySelectorAll(".stat-item");
    tl.fromTo(
      statItems,
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
      },
      "-=0.4"
    );

    // Animate CTA
    tl.fromTo(
      cta,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Fade in animation
    gsap.fromTo(
      section,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax scrolling effect
    gsap.to(section, {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[600px] w-full overflow-hidden bg-cover bg-center bg-no-repeat py-24 md:py-32"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dpeg7wc34/image/upload/v1760843604/A_wide_panoramic_hero_image_showcasing_a_newly_constructed_highway_winding_through_a_scenic_Zambian__1_ijdvq9.png)",
        backgroundPosition: "50% 50%",
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32" />
    </section>
  );
}
