"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  role: string;
  category: string;
  description: string;
  expertise: string[];
  responsibilities: string[];
}

interface PartnersGridProps {
  partners?: Partner[];
}

const PartnersGrid: React.FC<PartnersGridProps> = ({ partners: customPartners }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const defaultPartners: Partner[] = [
    {
      id: "hotsheet",
      name: "Hotsheet Project Managers",
      role: "Lead Project Manager",
      category: "Project Management",
      description:
        "Hotsheet is a South African-based civil engineering, project and construction management, and infrastructure quantity surveying firm. With a strong focus on large-scale civil engineering infrastructure and PPP projects. Hotsheet provides comprehensive project management services, including EPC contracting. Hotsheet holds the role of lead project and construction manager for the SPV and will play a pivotal role in overseeing the successful implementation of the Project.",
      expertise: [
        "Civil Engineering",
        "Project Management",
        "Construction Management",
        "Infrastructure Quantity Surveying",
        "EPC Contracting",
      ],
      responsibilities: [
        "Lead project and construction manager for the SPV",
        "Oversee successful implementation of the Project",
        "Manage large-scale infrastructure delivery",
      ],
    },
    {
      id: "bchod",
      name: "Brian Colquhoun, Hugh O'Donnel & Partners (BCHOD)",
      role: "Local Civil and Structural Engineering Consultant",
      category: "Engineering & Design",
      description:
        "BCHOD is a Zambian-based civil engineering firm with over 75 years of experience operating in the African region. The company offers a wide range of consultancy services, including civil, environmental, structural, electrical, and mechanical engineering, as well as building infrastructure and information technology. BCHOD plays a crucial role in planning, designing, and supervising construction projects, ensuring their successful delivery and meeting the highest standards of quality.",
      expertise: [
        "Civil Engineering",
        "Environmental Engineering",
        "Structural Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Building Infrastructure",
        "Information Technology",
      ],
      responsibilities: [
        "Planning and designing construction projects",
        "Supervising construction projects",
        "Ensuring successful delivery and quality standards",
      ],
    },
    {
      id: "dh",
      name: "DH Engineering Consultants",
      role: "Local ESG Advisor",
      category: "Environmental & Social",
      description:
        "DH is a Zambian-based engineering services consultancy firm specialising in electrical, mechanical, and water-related projects. With over two decades of combined experience, their team of engineers offers expertise in design, project management, and final commissioning. As part of their role in the PPP transaction, DH will provide essential services such as Social and Environmental Impact Assessments (EIA), ZEMA compliance, land acquisition, and geotechnical engineering investigations.",
      expertise: [
        "Electrical Engineering",
        "Mechanical Engineering",
        "Water Projects",
        "Design & Project Management",
        "Final Commissioning",
        "Environmental Impact Assessment",
        "Geotechnical Engineering",
      ],
      responsibilities: [
        "Social and Environmental Impact Assessments (EIA)",
        "ZEMA compliance",
        "Land acquisition",
        "Geotechnical engineering investigations",
      ],
    },
    {
      id: "korridor",
      name: "Korridor Holdings",
      role: "Toll Operator",
      category: "Operations & Technology",
      description: `Korridor is a multinational technology company headquartered in Mauritius, specialising in providing innovative solutions to the logistics and transport industries. With a focus on simplifying en route and cross-border processes. Korridor will implement Turnkey Systems ("TKS") during the construction phase and manage revenue collection at toll plazas, weighbridges, and potentially the Sesheke One-Stop Border Post ("OSBP") during the operational and maintenance stage.`,
      expertise: [
        "Toll Management Systems",
        "Revenue Collection",
        "Logistics Solutions",
        "Cross-border Processes",
        "Technology Implementation",
      ],
      responsibilities: [
        "Implement Turnkey Systems (TKS) during construction",
        "Manage revenue collection at toll plazas",
        "Manage weighbridges operations",
        "Manage Sesheke One-Stop Border Post (OSBP) operations",
      ],
    },
    {
      id: "hsf",
      name: "Herbert Smith Freehills Kramer",
      role: "Lead Legal Advisor",
      category: "Legal Team",
      description:
        "HSFK is a leading international law firm with a strong presence in Africa. As the International SPV legal counsel, they play a crucial role in facilitating the drafting and conclusion of all PPP and Project Agreements. With over 40 years of experience in Africa, Herbert Smith Freehills boasts a team of highly skilled lawyers who possess a deep understanding of the continent's legal systems, business practices, and cultural nuances.",
      expertise: [
        "International Law",
        "PPP Agreements",
        "Project Agreements",
        "African Legal Systems",
        "Business Law",
      ],
      responsibilities: [
        "International SPV legal counsel",
        "Drafting and conclusion of all PPP and Project Agreements",
        "Legal facilitation and advisory",
      ],
    },
    {
      id: "pangaea",
      name: "Pangaea Securities Limited",
      role: "Financial Advisor",
      category: "Financial Advisory",
      description:
        "An experienced team of local and international professionals offering dedicated financial advisory services with a track record of raising over USD 3.0 billion across Sub-Saharan Africa.",
      expertise: [
        "Financial Advisory",
        "Mergers & Acquisitions",
        "Equities",
        "Debt Financing",
        "Project Finance",
      ],
      responsibilities: [
        "Financial advisory services",
        "Debt and equity structuring",
        "Fundraising and capital mobilization",
      ],
    },
    {
      id: "nyeleti",
      name: "Nyeleti Consulting",
      role: "Lead Civil and Structural Design Consultant",
      category: "Engineering & Design",
      description:
        "A South African-based civil engineering consultancy specializing in structural engineering, municipal infrastructure, roads and transportation.",
      expertise: [
        "Structural Engineering",
        "Municipal Infrastructure",
        "Roads & Transportation",
        "Design & Supervision",
        "Technical Expertise",
        "Water",
        "Traffic Engineering",
      ],
      responsibilities: [
        "Civil and Structural Design Engineers",
        "Design Development through to construction oversight",
        "Construction Monitoring",
        "Project Specifications",
        "Quality Assurance",
      ],
    },
    {
      id: "atvantage",
      name: "Atvantage (Pty) Ltd",
      role: "Quantity Surveyors",
      category: "Quantity Surveying",
      description:
        "A South African-incorporated firm specializing in building quantity surveying, fit-out, and commercial procurement.",
      expertise: [
        "Building Quantity Surveying",
        "Fit-out Services",
        "Commercial Procurement",
        "Project Agreements",
        "Cost Management",
      ],
      responsibilities: [
        "Building quantity surveying",
        "Fit-out and commercial procurement",
        "Project agreements management",
      ],
    },
    {
      id: "mayco",
      name: "MAY and Company",
      role: "Local Legal Advisor",
      category: "Legal Team",
      description:
        "A corporate law firm based in Zambia, offering a wide range of legal services to businesses with expertise in PPP transactions.",
      expertise: ["Corporate Law", "PPP Transactions", "Zambian Legal Systems"],
      responsibilities: [
        "Zambian SPV legal counsel",
        "PPP transaction facilitation",
      ],
    },
    {
      id: "cca",
      name: "Chazya Chileshe and Associates Ltd (CCA)",
      role: "Architect",
      category: "Architecture & Design",
      description:
        "A Zambian architectural design firm specializing in creating innovative and sustainable building solutions.",
      expertise: ["Sustainable Solutions", "Urban Planning", "Building Design"],
      responsibilities: [
        "Urban planning aspects",
        "Ensuring well-integrated and functional facility design",
      ],
    },
  ];

  const partners = customPartners || defaultPartners;

  const categories = Array.from(new Set(partners.map((p) => p.category)));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Category sections */}
        {categories.map((category) => (
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24 w-full"
          >
            {/* Category header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
                {category}
              </h2>
              <div className="w-16 h-1 bg-yellow-400" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid w-full gap-6 auto-rows-max"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              }}
            >
              {partners
                .filter((p) => p.category === category)
                .map((partner) => (
                  <motion.div
                    key={partner.id}
                    variants={itemVariants}
                    className="w-full"
                  >
                    <Card
                      className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      onClick={() =>
                        setExpandedId(
                          expandedId === partner.id ? null : partner.id
                        )
                      }
                    >
                      <div className="p-6 md:p-8">
                        {/* Partner header */}
                        <div className="mb-4">
                          <div className="inline-block px-3 py-1 bg-yellow-400/10 dark:bg-yellow-400/20 rounded-full mb-3">
                            <span className="text-xs md:text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                              {partner.role}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">
                            {partner.name}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                          {partner.description}
                        </p>

                        {/* Expertise tags */}
                        <div className="mb-6">
                          <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                            Expertise
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {partner.expertise.slice(0, 3).map((exp, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                              >
                                {exp}
                              </span>
                            ))}
                            {partner.expertise.length > 3 && (
                              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">
                                +{partner.expertise.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Expand button */}
                        <button
                          className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-semibold text-sm hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedId(
                              expandedId === partner.id ? null : partner.id
                            );
                          }}
                        >
                          View Details
                          <ChevronDown
                            className="w-4 h-4"
                            style={{ transform: "none" }}
                          />
                        </button>

                        {/* Expanded content */}
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: expandedId === partner.id ? 1 : 0,
                            height: expandedId === partner.id ? "auto" : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                            <div className="mb-4">
                              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                                Key Responsibilities
                              </p>
                              <ul className="space-y-2">
                                {partner.responsibilities.map((resp, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                                  >
                                    <span className="text-yellow-400 mt-1">
                                      •
                                    </span>
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                                All Expertise Areas
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {partner.expertise.map((exp, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs px-2 py-1 bg-yellow-400/10 dark:bg-yellow-400/20 text-yellow-700 dark:text-yellow-300 rounded"
                                  >
                                    {exp}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 text-center w-full"
        >
          <Card className="border border-yellow-400/30 dark:border-yellow-400/40 p-8 md:p-12">
            <h3 className="text-2xl dark:bg-transparent md:text-3xl font-bold text-black dark:text-white mb-4">
              Partnership Excellence
            </h3>
            <p className="text-black dark:text-white max-w-2xl mx-auto mb-6">
              Our diverse team of world-class partners brings together decades
              of experience in infrastructure development, engineering, finance,
              and project management to deliver the Western Corridor project.
            </p>
            <div className="w-16 h-1 bg-yellow-400 mx-auto" />
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersGrid;
