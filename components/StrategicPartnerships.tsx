import { Users, MapPin, Award, Shield, Scale, DollarSign } from "lucide-react";
import ExpandableCard from "@/components/ExpandableCard";

export default function StrategicPartnerships() {
  const partnershipCards = [
    {
      title: "Lead Project Manager",
      description:
        "Strategic oversight and coordination of complex infrastructure projects with international stakeholders.",
      details: [
        "Project Planning",
        "Stakeholder Management",
        "Risk Assessment",
      ],
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Local EOC Contractor",
      description:
        "Emergency operations center management and crisis response coordination for critical infrastructure.",
      details: [
        "Emergency Response",
        "Crisis Management",
        "Operations Control",
      ],
      icon: <Shield className="w-5 h-5" />,
    },
    {
      title: "Local ESG Advisor",
      description:
        "Environmental, social, and governance compliance ensuring sustainable development practices.",
      details: [
        "Sustainability Planning",
        "Compliance Monitoring",
        "ESG Reporting",
      ],
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Toll Operator",
      description:
        "Revenue collection and traffic management systems for transportation infrastructure projects.",
      details: ["Revenue Management", "Traffic Control", "System Operations"],
      icon: <MapPin className="w-5 h-5" />,
      specialContent: (
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-wrap gap-1">
            <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
              Revenue Management
            </span>
            <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
              Traffic Control
            </span>
          </div>
          <div className="bg-green-50 rounded-lg px-2 py-1 border border-green-200">
            <div className="text-green-600 font-bold text-xs text-center">
              <div>DH</div>
              <div className="text-[9px] leading-tight">
                ENGINEERING
                <br />
                CONSULTANTS
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Lead Legal Advisor",
      description:
        "Legal framework development and regulatory compliance for international partnership agreements.",
      details: [
        "Contract Negotiation",
        "Regulatory Compliance",
        "Legal Risk Management",
      ],
      icon: <Scale className="w-5 h-5" />,
    },
    {
      title: "Financial Advisor",
      description:
        "Financial structuring and investment analysis for large-scale infrastructure development projects.",
      details: ["Financial Modeling", "Investment Analysis", "Risk Assessment"],
      icon: <DollarSign className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/aerial-view-of-highway-infrastructure-construction.jpg')",
          filter: "brightness(0.4) contrast(1.1)",
        }}
      />

      <div className="relative z-10 mx-auto py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  WORLD-CLASS
                  <br />
                  <span className="text-white">PARTNERSHIP</span>
                  <br />
                  ECOSYSTEM{" "}
                  <span className="inline-block">
                    <div className="w-0 h-0 rotate-90 border-l-[20px] border-l-amber-400 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent"></div>
                  </span>
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                  Our success is built on strategic partnerships with leading
                  international companies across legal, financial, engineering,
                  and technology sectors.
                </p>
              </div>
            </div>

            {/* Right Content - Partnership Cards */}
            <div className="relative">
              <div className="space-y-0">
                {partnershipCards.map((card, index) => (
                  <ExpandableCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    details={card.details}
                    icon={card.icon}
                    index={index}
                    specialContent={card.specialContent}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
