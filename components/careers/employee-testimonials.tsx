import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const EmployeeTestimonials = () => {
  const testimonials = [
    {
      quote:
        "At BHL, daily opportunities for growth abound. Supportive managers instill trust, empowering my transition from field engineering to project management.",
      name: "Mwape Banda",
      role: "Project Manager",
    },
    {
      quote:
        "My time at BHL is a challenging journey full of learning. After two years working in Lusaka, I've moved to Mongu, promoting teamwork across regions. This opportunity motivates my professional growth.",
      name: "Chanda Mulenga",
      role: "Civil Engineer",
    },
    {
      quote:
        "Working at BHL offers wide opportunities; I started in the finance department and now support multiple projects, learning from all the diverse teams.",
      name: "Thandiwe Phiri",
      role: "Financial Analyst",
    },
    {
      quote:
        "At BHL I've been able to learn and grow. Last year I joined their regional mobility program and for the last six months I have been part of the team in Western Province, an important professional and personal challenge.",
      name: "Joseph Tembo",
      role: "Construction Supervisor",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-black text-[cfcdcb] dark:text-white lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center bg-white dark:bg-black text-black dark:txt-white mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white font-heading mb-4">
            They Talk About Us
          </h2>
          <p className="text-[#868584] dark:text-white font-paragraph max-w-2xl mx-auto">
            Hear from our team members about their experiences working at
            Barotse Highway Limited.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-background border-border relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              <p className="text-[#868584] dark:text-white font-paragraph leading-relaxed mb-6 italic">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-black dark:text-white">
                  {testimonial.role} at BHL
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
