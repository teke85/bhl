"use client";

export default function KeyPrinciples() {
  const principles = [
    {
      number: "1",
      title: "Informed Rights",
      description:
        "Informed of their rights and options regarding resettlement",
    },
    {
      number: "2",
      title: "Consultation & Alternatives",
      description:
        "Consulted and provided with feasible resettlement and compensation alternatives",
    },
    {
      number: "3",
      title: "Full Compensation",
      description:
        "Promptly compensated at full replacement cost for their losses",
    },
    {
      number: "4",
      title: "Livelihood Restoration",
      description:
        "Supported to restore or improve their livelihoods and living standards",
    },
    {
      number: "5",
      title: "Vulnerable Protection",
      description:
        "Special attention given to vulnerable groups and their specific needs",
    },
    {
      number: "6",
      title: "Grievance Mechanism",
      description:
        "Access to fair and transparent grievance redressal mechanisms",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card dark:bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-12 text-balance">
          Key Principles of Resettlement Planning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-background dark:bg-[#0a0a0a] border border-border dark:border-white/10 hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#fdb913] flex items-center justify-center shrink-0">
                  <span className="text-black font-heading font-bold text-lg">
                    {principle.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground dark:text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
