"use client";

export default function ProjectScope() {
  return (
    <section className="w-full py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 justify-between items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-6 text-balance">
              Project Scope & History
            </h2>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground dark:text-white mb-4">
                Scope of Work
              </h3>
              <p className="text-lg text-black dark:text-white font-body mb-8 leading-relaxed">
                The scope of work includes the establishment of a comprehensive
                tolling system with supporting infrastructure, comprising three
                toll plazas and two weighbridges along the corridor. It also
                involves the replacement of the Lalafuta and Luena bridges in
                Kaoma District, the construction of social infrastructure along
                the route, and the development of 20 kilometres of urban roads
                in two districts. The Project will connect to the Mongu–Sesheke
                route, completing Zambia&apos;s Western Corridor.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground dark:text-white mb-4">
                Brief History of the Project
              </h3>
              {[
                "On 21 March 2018, The Sponsors entered a 10-year maintenance contract with the Road Development Agency (RDA) for the Kaoma–Kasempa road",
                "BHL has invested over $8 million in maintaining the stretch to keep it in a usable condition",
                "In 2023, after assessing the corridor's traffic potential, the Promoters resolved to upgrade the entire stretch to bituminous standard",
                "Promoters submitted an unsolicited PPP proposal to the RDA on 16 February 2024",
                "RDA granted the Promoters preferred bidder status on 19 June 2024",
                "2–3-month period of intensive contract negotiations with Government officials",
                "Promoters incorporated the Special Purpose Vehicle, Barotse on 10 July 2024",
                "Signing of the Concession Agreement with the Ministry of Finance and National Planning on 1 December 2024 in Kasempa",
                "Project now advancing through road design and other preparatory works",
                "Financial Close targeted for the end of 2025",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#fdb913] mt-2 shrink-0"></div>
                  <span className="text-base text-foreground dark:text-white leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
