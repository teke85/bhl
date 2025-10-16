import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CommunityFirstSection = () => {
  const policyPoints = [
    "Informed of rights and options",
    "Consulted on alternatives",
    "Full replacement cost compensation",
    "Supported to improve living standards",
  ];

  return (
    <section className="bg-black dark:bg-white py-16 md:py-14 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Community First */}
          <div className="space-y-6">
            <h2 className="text-4xl font-heading md:text-6xl font-bold text-white dark:text-black">
              Community First
            </h2>
            <p className="text-[#9ca3af] font-sans text-lg leading-relaxed">
              Our comprehensive Resettlement Policy Framework ensures fair
              treatment and support for all affected communities.
            </p>
            <Button
              className="bg-[#fdb913] rounded-none text-black hover:bg-[#fdb913]/90 transition-all duration-300 gap-2 font-semibold"
              asChild
            >
              <Link href="/resettlement">
                Learn About Our Policy{" "}
                <ArrowRight className="h-4 w-4 rounded-none" />
              </Link>
            </Button>
          </div>

          {/* Right Side - Policy Points */}
          <div className="dark:bg-[#F5F5F5] rounded-lg p-8 md:p-12 space-y-6">
            {policyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#fdb913] flex items-center justify-center text-black font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-white dark:text-black text-base md:text-lg pt-2">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityFirstSection;
