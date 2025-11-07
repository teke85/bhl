"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BigText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const efficientRef = useRef<HTMLDivElement>(null);
  const logisticsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const efficientElement = efficientRef.current;
    const logisticsElement = logisticsRef.current;

    if (efficientElement && logisticsElement && container) {
      // Set initial positions
      gsap.set(efficientElement, { x: -400, opacity: 0.3 });
      gsap.set(logisticsElement, { x: 400, opacity: 0.3 });

      // Timeline for scroll-triggered animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 0.5,
          onEnter: () => {
            gsap.to([efficientElement, logisticsElement], {
              opacity: 1,
              duration: 0.5,
            });
          },
          onLeave: () => {
            gsap.to([efficientElement, logisticsElement], {
              opacity: 0.3,
              duration: 0.5,
            });
          },
          onEnterBack: () => {
            gsap.to([efficientElement, logisticsElement], {
              opacity: 1,
              duration: 0.5,
            });
          },
          onLeaveBack: () => {
            gsap.to([efficientElement, logisticsElement], {
              opacity: 0.3,
              duration: 0.5,
            });
          },
        },
      });

      // Animate text sliding
      tl.to(efficientElement, { x: 400, duration: 1, ease: "power2.out" }, 0);
      tl.to(logisticsElement, { x: -400, duration: 1, ease: "power2.out" }, 0);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full py-20 md:py-32 overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center justify-center shadow-2xl bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dpeg7wc34/image/upload/v1759688770/DJI_0521_q55ort.jpg')",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/90" />

      <div className="relative z-10 w-full">
        <div
          ref={efficientRef}
          className="text-center font-heading uppercase text-gray-500 font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
        >
          Efficient
        </div>
        <div
          ref={logisticsRef}
          className="text-center font-heading uppercase text-gray-500 font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
        >
          Logistics
        </div>
      </div>
    </div>
  );
}

export default BigText;
