import { Shield } from "lucide-react";

const TechnicalSpecifications = () => {
  const standards = [
    {
      icon: Shield,
      title: "Technical Specifications",
      description:
        "The Project Highway will be upgraded to international bituminous standards. The road rehabilitation and construction will be executed in two primary sections: Mutanda to Kasempa (150 km) and Kasempa to Kaoma (221 km). The Project’s key components include the construction of three toll plazas, two weighbridges, and the upgrading of key bridges such as the Lalafuta and Chilombo Bridges. The road design will feature a bidirectional single carriageway with 3.5-meter-wide travel lanes, 2-meter surfaced shoulders and 0.3-meter gravel shoulders.",
    },
  ];

  return (
    <section className="bg-white dark:bg-black py-16 px-4">
      <div className="container mx-auto w-full max-w-7xl space-y-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-4">
            Technical Specifications
          </h2>
          <p className="text-lg md:text-xl text-black dark:text-white font-paragraph max-w-3xl mx-auto">
            Our commitment to excellence ensures world-class infrastructure that
            meets the highest international standards.
          </p>
        </div>
        <div className="grid md:grid-cols-1 gap-8">
          {standards.map((standard, index) => {
            const Icon = standard.icon;
            return (
              <div
                key={index}
                className="border border-border mx-auto w-full dark:border-white/10 rounded-lg p-8 space-y-4 hover:border-[#fdb913]/50 duration-300"
              >
                <div className="w-14 h-14 rounded-none flex items-center justify-center group-hover:bg-[#fdb913]/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#fdb913]" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground dark:text-white">
                  {standard.title}
                </h3>
                <p className="text-base md:text-lg text-black dark:text-white font-paragraph leading-relaxed">
                  {standard.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecifications;
