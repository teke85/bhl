"use client";

import { useEffect, useState } from "react";

export default function PortOfWalvisBay() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="h-96" />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 md:py-24 bg-card dark:bg-[#1a1a1a] border-y border-border dark:border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-6 text-balance">
            Port of Walvis Bay
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-400 mb-4 leading-relaxed">
            Recognized as one of the most efficient, secure, and high-performing
            ports within the SADC region.
          </p>
          <p className="text-lg text-muted-foreground dark:text-gray-400 leading-relaxed">
            The Western Corridor Limited provides direct access to this
            world-class facility, significantly reducing transport times and
            costs for regional exports. This strategic connection positions the
            corridor as a critical gateway for SADC trade.
          </p>
        </div>
      </div>
    </section>
  );
}
