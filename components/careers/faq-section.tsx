import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How can I send my resume to Barotse Highway Limited?",
      answer:
        "You can send your resume directly through our employment platform on LinkedIn, selecting the offer that best fits your profile. If you do not find an offer that matches your professional experience or interests, you can share your CV with us by sending an email to careers@barotsehighway.com",
    },
    {
      question: "What kind of profiles is BHL looking for?",
      answer:
        "At BHL we are looking for professionals passionate about infrastructure development, with experience in areas such as civil engineering, project management, finance, construction, or environmental management. We also value multidisciplinary profiles interested in sustainable development and community impact.",
    },
    {
      question:
        "Do you offer internship programs for students or recent graduates?",
      answer:
        "Yes, we have specific programs for students and recent graduates who wish to gain experience in the infrastructure and transportation sector. You can check our internship vacancies in the employment section or contact our HR department for more information.",
    },
    {
      question: "What benefits does BHL offer?",
      answer:
        "We offer competitive compensation packages including health insurance, retirement benefits, professional development opportunities, performance bonuses, and flexible working arrangements. Our HR team is available to explain every detail and answer any questions you may have once we start the selection process.",
    },
    {
      question: "What is the recruitment process like?",
      answer:
        "Our recruitment process typically includes: initial application review, phone screening, technical assessment (if applicable), in-person or virtual interviews with the hiring team, and final offer. The entire process usually takes 3-4 weeks, though this may vary depending on the position.",
    },
    {
      question: "Does BHL support professional development?",
      answer:
        "We are committed to the continuous growth of our team members. We offer training programs, mentorship opportunities, conference attendance, professional certifications support, and clear career progression paths within the organization.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white text-black dark:bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white font-heading mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#868584] dark:text-white font-paragraph">
              Find answers to common questions about careers at Barotse Highway
              Limited.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
