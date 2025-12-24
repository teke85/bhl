import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

export const FAQSection = ({
  faqs,
}: FAQSectionProps) => {
  return (
    <section className="py-16 lg:py-24 bg-white text-black dark:bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white font-heading mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#868584] dark:text-white font-paragraph">
              Find answers to common questions about careers at Western Corridor
              Limited.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs?.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-black dark:text-white">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#868584] dark:text-white font-paragraph leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
