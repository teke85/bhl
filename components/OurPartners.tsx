"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

function PartnersCarousel() {
  const partners = [
    {
      id: 1,
      name: "BEEFCO",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759433648/BEEFCO_p8vqfh.png",
    },
    {
      id: 2,
      name: "ADVANTAGE",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430632/d77858_2003e0367fed4cd5aa6c6670acb506f7_mv2_imaqxb.avif",
    },
    {
      id: 3,
      name: "PANGAEA SECURITIES",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430587/Pangaea-Securities__qbmjbo.png",
    },
    {
      id: 4,
      name: "KONGIWE",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430583/Kongiwe-Logo-for-Header_ciq6du.png",
    },
    {
      id: 5,
      name: "HERBERT SMITH FREEHILLS",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430583/Herbert_Smith_Freehills_logo.svg_wit9u9.png",
    },
    {
      id: 6,
      name: "FIRST QUANTUM MINERALS",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430581/First_Quantum_Minerals_New_Logo.svg_ivz3bj.png",
    },
    {
      id: 7,
      name: "MAY AND COMPANY",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430582/MAY-and-Co-teal-logo-1_lcmvcw.jpg",
    },
    {
      id: 8,
      name: "dhki",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430581/dhki-e1677569611745_d61ec9.jpg",
    },
    {
      id: 9,
      name: "NYELETI",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430580/nyeleti-logo-dark-bg-star_gmqcy2.png",
    },
  ]

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-white dark:bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-black dark:text-white tracking-wider text-gray-500 uppercase mb-3">Trusted By</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">Our Partners</h3>
          <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional infrastructure solutions
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="group relative"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <div className="relative h-32 flex items-center justify-center p-6 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1">
                <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
              </div>

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-xs font-medium text-gray-600 whitespace-nowrap bg-white px-3 py-1 rounded-full shadow-sm">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersCarousel
