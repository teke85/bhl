"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Calendar, ExternalLink, ChevronRight } from "lucide-react";

export default function PressReleaseSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fdb913' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#fdb913]/20 border border-[#fdb913] px-4 py-2 rounded-full">
            <FileText className="w-4 h-4 text-[#fdb913]" />
            <span className="text-[#fdb913] font-semibold text-sm uppercase tracking-wider">
              Press Release
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-[#fdb913] text-sm font-semibold mb-4 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              31st October 2025
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              President Hakainde Launches Landmark Western Corridor
              Transformation Project
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Multi-faceted project set to unlock economic potential and create
              job opportunities in Zambia through Public-Private-Partnership
            </p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-lg dark:shadow-none">
              <div className="text-4xl font-bold text-[#fdb913] mb-2">
                371km
              </div>
              <div className="text-gray-900 dark:text-white font-semibold mb-2">
                Road Infrastructure
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Mutanda-Kasempa-Kaoma Road upgrade to bituminous standard
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-lg dark:shadow-none">
              <div className="text-4xl font-bold text-[#fdb913] mb-2">PPP</div>
              <div className="text-gray-900 dark:text-white font-semibold mb-2">
                Partnership Model
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Public-Private Partnership with BeefCo & FQM Limited
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-lg dark:shadow-none">
              <div className="text-4xl font-bold text-[#fdb913] mb-2">20%</div>
              <div className="text-gray-900 dark:text-white font-semibold mb-2">
                Local Participation
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Reserved for Zambian contractors and suppliers
              </div>
            </div>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-[#fdb913]/10 to-transparent border-l-4 border-[#fdb913] p-8 rounded-r-xl mb-12 shadow-md dark:shadow-none"
          >
            <blockquote className="text-gray-900 dark:text-white text-lg md:text-xl italic mb-4">
              "This road means business, business to move goods from Zambia to
              the world through the port of Walvis Bay, and from the world,
              through Walvis Bay, back to Zambia."
            </blockquote>
            <cite className="text-[#fdb913] font-semibold not-italic">
              — His Excellency, President Hakainde Hichilema
            </cite>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/news/president-hakainde-launches-landmark-western-corridor-transformation-project"
              className="group inline-flex items-center gap-2 bg-[#fdb913] hover:bg-[#fdb913]/90 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#fdb913]/50 hover:scale-105"
            >
              Read Full Press Release
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/news"
              className="group inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-gray-300 dark:border-white/20"
            >
              View All News
              <ExternalLink className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Contact Info */}
          {/* <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 text-center"
                    >
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">For Media Inquiries:</p>
                        <p className="text-gray-900 dark:text-white font-semibold">Kasole Sakavuyi - Media Liaison</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            <a href="mailto:socialmedia@manic.co.zm" className="hover:text-[#fdb913] transition-colors">
                                socialmedia@manic.co.zm
                            </a>
                            {" · "}
                            <a href="tel:+260974607451" className="hover:text-[#fdb913] transition-colors">
                                +260 974 607 451
                            </a>
                        </p>
                    </motion.div> */}
        </div>
      </div>
    </section>
  );
}
