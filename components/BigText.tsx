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
      gsap.set(efficientElement, { x: -200, opacity: 0.3 });
      gsap.set(logisticsElement, { x: 200, opacity: 0.3 });

      // Create timeline for the animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
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

      // Animate "Efficient" to the left
      tl.to(
        efficientElement,
        {
          x: -100,
          duration: 1,
          ease: "power2.out",
        },
        0
      );

      // Animate "Logistics" to the right
      tl.to(
        logisticsElement,
        {
          x: 100,
          duration: 1,
          ease: "power2.out",
        },
        0
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full py-8 overflow-hidden relative"
      // style={{
      //   backgroundImage:
      //     "url(https://res.cloudinary.com/dpeg7wc34/image/upload/v1758715424/4_bhefzk.png)",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="absolute"></div>

      <div className="relative z-10">
        <div
          ref={efficientRef}
          className="text-center uppercase text-[#8C887F] font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight"
        >
          Efficient
        </div>
        <div
          ref={logisticsRef}
          className="text-center uppercase text-[#8C887F] font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight"
        >
          Logistics
        </div>
      </div>
    </div>
  );
}

export default BigText;
