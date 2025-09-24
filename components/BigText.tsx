"use client";

import { useEffect, useRef, useState } from "react";

function BigText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Calculate transform values based on scroll position
  const efficientTransform = isVisible ? Math.min(scrollY * 0.5, 200) : 0;
  const logisticsTransform = isVisible ? Math.min(scrollY * 0.5, 200) : 0;

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full py-20 overflow-hidden relative"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dpeg7wc34/image/upload/v1758715424/4_bhefzk.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10">
        <div
          className="text-center uppercase text-[#8C887F] font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-relaxed transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${efficientTransform}px)`,
            opacity: isVisible ? 1 : 0.3,
          }}
        >
          Efficient
        </div>
        <div
          className="text-center uppercase text-[#8C887F] font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-relaxed transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(${logisticsTransform}px)`,
            opacity: isVisible ? 1 : 0.3,
          }}
        >
          Logistics
        </div>
      </div>
    </div>
  );
}

export default BigText;
