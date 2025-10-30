import { Card } from "@/components/ui/card";

export const LifeAtBHL = () => {
  return (
    <section className="py-16 bg-white dark:bg-black text-black dark:text-white lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-start">
          <div className="bg-white text-black dark:bg-black dark:text-white">
            <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white font-heading mb-6 text-balance">
              Life at Barotse Highway Limited
            </h2>
            <p className="text-lg text-[#868584] dark:text-white font-paragraph leading-relaxed mb-6">
              Life at BHL is fulfilling and dynamic. The environment here is
              vibrant and our culture is empowering. We&apos;re building more
              than roads—we&apos;re building careers, communities, and a
              sustainable future for Zambia.
            </p>
            <div className="space-y-4">
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold text-black dark:text-white font-heading mb-2">
                  Innovation First
                </h3>
                <p className="text-sm text-[#868584] dark:text-white font-paragraph leading-relaxed">
                  We embrace cutting-edge technology and innovative solutions to
                  deliver world-class infrastructure projects.
                </p>
              </Card>
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold text-black dark:text-white font-heading mb-2">
                  Growth Opportunities
                </h3>
                <p className="text-sm text-[#868584] dark:text-white font-paragraph leading-relaxed">
                  Continuous learning and professional development are at the
                  heart of our culture. Your growth is our priority.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
