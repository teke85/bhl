"use client";

export default function OurCommitment() {
  return (
    <section className="w-full py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 justify-between items-center">
          <div>
            <h2 className="text-4xl text-center md:text-5xl font-heading font-bold text-foreground dark:text-white mb-6 text-balance">
              Our Commitment
            </h2>
            <p className="text-lg text-black dark:text-white font-normal font-body mb-8">
              We are committed to delivering the Western Corridor Project as a
              transformative infrastructure initiative that strengthens
              Zambia&apos;s regional connectivity, economic resilience, and
              social equity. Through Barotse our dedicated Special Purpose
              Vehicle,
            </p>

            <div className="space-y-5 font-body mb-8">
              {[
                "Build with integrity, ensuring the Mutanda–Kaoma Road meets international quality and safety standards.",
                "Operate transparently, guided by robust governance, financial accountability, and public-private collaboration.",
                "Empower communities, by promoting local employment, fair resettlement, and inclusive development.",
                "Protect the environment, through responsible construction practices, biodiversity conservation, and climate-resilient design.",
                "Support Zambia's growth, by facilitating trade, unlocking mining and agricultural value chains, and aligning with national development strategies.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#fdb913] mt-2 shrink-0"></div>
                  <span className="text-base text-foreground dark:text-white leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-lg text-black dark:text-white font-body leading-relaxed">
              Our commitment is to not only construct a road, but to create a
              corridor of opportunity, sustainability, and shared prosperity for
              Zambia and the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
