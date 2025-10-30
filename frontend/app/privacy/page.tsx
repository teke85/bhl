import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | Western Corridor",
    description: "Learn how Western Corridor Limited collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
            {/* Hero Section with dark background */}
            <section className="relative pt-40 pb-20 px-4 bg-black dark:bg-[#0a0a0a]">
                <StickyNavigationMenu />
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-300">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {/* Introduction */}
                        <div className="mb-12">
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                Western Corridor Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                            </p>
                            <p className="text-[#868584] dark:text-white leading-relaxed">
                                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                1. Information We Collect
                            </h2>

                            <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3 mt-6">
                                Personal Data
                            </h3>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                We may collect personally identifiable information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc pl-6 text-[#868584] dark:text-white space-y-2 mb-4">
                                <li>Contact us through our website forms</li>
                                <li>Apply for career opportunities</li>
                                <li>Subscribe to our newsletter or updates</li>
                                <li>Register for events or webinars</li>
                                <li>Engage with our customer support</li>
                            </ul>
                            <p className="text-[#868584] dark:text-white leading-relaxed">
                                This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
                            </p>

                            <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3 mt-6">
                                Automatically Collected Information
                            </h3>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                When you visit our website, we may automatically collect certain information about your device, including:
                            </p>
                            <ul className="list-disc pl-6 text-[#868584] dark:text-white space-y-2">
                                <li>IP address and browser type</li>
                                <li>Operating system and device information</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                                <li>Date and time of visits</li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                2. How We Use Your Information
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 text-[#868584] dark:text-white space-y-2">
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Process job applications and manage recruitment</li>
                                <li>Send you project updates, news, and relevant information</li>
                                <li>Improve our website and user experience</li>
                                <li>Analyze website usage and trends</li>
                                <li>Comply with legal obligations and protect our rights</li>
                                <li>Prevent fraudulent activity and enhance security</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                3. Disclosure of Your Information
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 text-[#868584] dark:text-white space-y-2">
                                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., website hosting, email services, analytics)</li>
                                <li><strong>Business Partners:</strong> With our joint venture partners and affiliates for legitimate business purposes</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, safety, or property</li>
                                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of our business</li>
                            </ul>
                            <p className="text-[#868584] dark:text-white leading-relaxed mt-4">
                                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                4. Cookies and Tracking Technologies
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences. For more information, please see our{" "}
                                <Link href="/cookies" className="text-[#fdb913] hover:underline">
                                    Cookie Policy
                                </Link>.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                5. Data Security
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed">
                                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                6. Data Retention
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed">
                                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                7. Your Rights
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                Depending on your location, you may have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc pl-6 text-[#868584] dark:text-white space-y-2">
                                <li>Access and obtain a copy of your personal data</li>
                                <li>Correct inaccurate or incomplete information</li>
                                <li>Request deletion of your personal information</li>
                                <li>Object to or restrict processing of your data</li>
                                <li>Withdraw consent where processing is based on consent</li>
                                <li>Data portability</li>
                            </ul>
                            <p className="text-[#868584] dark:text-white leading-relaxed mt-4">
                                To exercise these rights, please contact us at{" "}
                                <a href="mailto:buksvr@bhl.co.zm" className="text-[#fdb913] hover:underline">
                                    buksvr@bhl.co.zm
                                </a>.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                8. Third-Party Links
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                9. Children's Privacy
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed">
                                Our website is not intended for children under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                            </p>
                        </div>

                        {/* Section 10 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                10. Changes to This Privacy Policy
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div className="mt-12 p-6 bg-card dark:bg-[#1a1a1a] rounded-lg border border-border dark:border-white/10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                Contact Us
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                If you have questions or concerns about this Privacy Policy, please contact us:
                            </p>
                            <div className="space-y-2 text-[#868584] dark:text-white">
                                <p><strong>Western Corridor Limited</strong></p>
                                <p>Mutanda Road</p>
                                <p>P.O. Box 110086, Solwezi, Zambia</p>
                                <p>Email: <a href="mailto:buksvr@bhl.co.zm" className="text-[#fdb913] hover:underline">buksvr@bhl.co.zm</a></p>
                                <p>Phone: +260 123 456 789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}