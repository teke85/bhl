"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";
import { Shield, Users, Leaf, TrendingUp, Heart, Target } from "lucide-react";

export default function CommitmentPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const commitments = [
    {
      icon: Shield,
      title: "Build with Integrity",
      description:
        "Ensuring the Mutanda–Kaoma Road meets international quality and safety standards through rigorous oversight and best practices.",
      color: "text-blue-500",
    },
    {
      icon: Target,
      title: "Operate Transparently",
      description:
        "Guided by robust governance, financial accountability, and public-private collaboration to maintain trust and excellence.",
      color: "text-green-500",
    },
    {
      icon: Users,
      title: "Empower Communities",
      description:
        "Promoting local employment, fair resettlement practices, and inclusive development that benefits all stakeholders.",
      color: "text-purple-500",
    },
    {
      icon: Leaf,
      title: "Protect the Environment",
      description:
        "Through responsible construction practices, biodiversity conservation, and climate-resilient design for sustainable development.",
      color: "text-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Support Economic Growth",
      description:
        "Facilitating trade, unlocking mining and agricultural value chains, and aligning with national development strategies.",
      color: "text-orange-500",
    },
    {
      icon: Heart,
      title: "Prioritize Social Responsibility",
      description:
        "Creating lasting positive impact on communities through healthcare, education, and infrastructure development initiatives.",
      color: "text-red-500",
    },
  ];

  const keyPrinciples = [
    {
      title: "Quality Excellence",
      description:
        "Delivering infrastructure that meets and exceeds international standards",
    },
    {
      title: "Stakeholder Engagement",
      description:
        "Maintaining open dialogue with communities, partners, and government",
    },
    {
      title: "Sustainable Practices",
      description:
        "Implementing environmentally responsible construction methods",
    },
    {
      title: "Long-term Vision",
      description:
        "Building for generations to come with durable, resilient infrastructure",
    },
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
      <StickyNavigationMenu />

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden bg-background dark:bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1761799061/KasempaToll_WB_Area-DJI_0577_cs1c5k.jpg"
            alt="Our Commitment"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/70 dark:bg-black/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Our Commitment
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Building a corridor of opportunity, sustainability, and shared
              prosperity for Zambia and the region
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Commitment Statement */}
      <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground dark:text-white leading-relaxed mb-8">
              We are committed to delivering the Western Corridor Project as a
              transformative infrastructure initiative that strengthens
              Zambia&apos;s regional connectivity, economic resilience, and
              social equity. Through Western Corridor Limited, our dedicated
              Special Purpose Vehicle, we pledge to:
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Commitments Grid */}
      <section className="py-16 bg-card dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-background dark:bg-[#0a0a0a] p-6 rounded-lg border border-border dark:border-white/10 hover:border-[#fdb913] transition-all duration-300 hover:shadow-lg"
                  variants={itemVariants}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${commitment.color} shrink-0`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground dark:text-white mb-2">
                        {commitment.title}
                      </h3>
                      <p className="text-[#868584] dark:text-gray-300 leading-relaxed">
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Key Principles Section */}
      <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground dark:text-white mb-12">
              Guiding Principles
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {keyPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card dark:bg-[#1a1a1a] rounded-lg border border-border dark:border-white/10"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#fdb913] mt-2 shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground dark:text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-[#868584] dark:text-gray-300">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 bg-[#fdb913]/10 dark:bg-[#fdb913]/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-2xl md:text-3xl font-heading font-bold text-foreground dark:text-white mb-6 italic">
              &quot;Our commitment is to not only construct a road, but to
              create a corridor of opportunity, sustainability, and shared
              prosperity for Zambia and the region.&quot;
            </blockquote>
            <p className="text-lg text-[#868584] dark:text-gray-300">
              — Western Corridor Limited
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accountability & Transparency */}
      <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground dark:text-white mb-4">
                Accountability & Transparency
              </h2>
              <p className="text-lg text-[#868584] dark:text-gray-300">
                We maintain the highest standards of governance and reporting
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-6 bg-card dark:bg-[#1a1a1a] rounded-lg border border-border dark:border-white/10">
                <h3 className="text-xl font-heading font-semibold text-foreground dark:text-white mb-3">
                  Regular Reporting
                </h3>
                <p className="text-[#868584] dark:text-gray-300">
                  We provide regular updates to stakeholders on project
                  progress, financial performance, and social and environmental
                  impacts.
                </p>
              </div>

              <div className="p-6 bg-card dark:bg-[#1a1a1a] rounded-lg border border-border dark:border-white/10">
                <h3 className="text-xl font-heading font-semibold text-foreground dark:text-white mb-3">
                  Stakeholder Engagement
                </h3>
                <p className="text-[#868584] dark:text-gray-300">
                  We actively engage with local communities, government
                  entities, and partners to ensure alignment and address
                  concerns promptly.
                </p>
              </div>

              <div className="p-6 bg-card dark:bg-[#1a1a1a] rounded-lg border border-border dark:border-white/10">
                <h3 className="text-xl font-heading font-semibold text-foreground dark:text-white mb-3">
                  Compliance & Standards
                </h3>
                <p className="text-[#868584] dark:text-gray-300">
                  We adhere to all relevant local and international regulations,
                  environmental standards, and best practices in infrastructure
                  development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-card dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground dark:text-white mb-4">
              Learn More About Our Impact
            </h2>
            <p className="text-lg text-[#868584] dark:text-gray-300 mb-8">
              Discover how we are making a difference across the Western
              Corridor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/regional-impact"
                className="px-8 py-3 bg-[#fdb913] text-black font-semibold rounded-lg hover:bg-[#fdb913]/90 transition-colors"
              >
                Regional Impact
              </a>
              <a
                href="/resettlement"
                className="px-8 py-3 bg-transparent border-2 border-[#fdb913] text-[#fdb913] font-semibold rounded-lg hover:bg-[#fdb913]/10 transition-colors"
              >
                Resettlement Framework
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
