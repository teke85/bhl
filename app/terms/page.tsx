import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import Link from "next/link";
import { getTermsPageData } from "@/lib/wordpress-graphql";

export const metadata = {
    title: "Terms of Service",
    description: "Read the terms and conditions for using the Western Corridor Limited website and services.",
};

export default async function TermsPage() {
    const data = await getTermsPageData();

    const lastUpdated = data?.lastUpdated || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const content = data?.visualContent;
    const heroTitle = data?.heroTitle || "Terms of Service";

    return (
        <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
            {/* Hero Section with dark background */}
            <section className="relative pt-40 pb-20 px-4 bg-black dark:bg-[#0a0a0a]">
                <StickyNavigationMenu />
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        {heroTitle}
                    </h1>
                    <p className="text-lg text-gray-300">
                        Last updated: {lastUpdated}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    {content ? (
                        <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
                    ) : (
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            {/* Introduction */}
                            <div className="mb-12">
                                <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                    Welcome to Western Corridor Limited. These Terms of Service ("Terms") govern your access to and use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
                                </p>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    Please read these Terms carefully before using our services. If you do not agree with these Terms, you must not access or use our website.
                                </p>
                            </div>

                            {/* Section 1 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    1. Acceptance of Terms
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    By accessing this website, you accept and agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    2. Use of Website
                                </h2>

                                <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3 mt-6">
                                    License
                                </h3>
                                <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                    We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal and informational purposes. This license does not include:
                                </p>
                                <ul className="list-disc pl-6 text-[#868584] dark:text-white space-y-2 mb-4">
                                    <li>Modification or copying of the materials</li>
                                    <li>Use of the materials for commercial purposes</li>
                                    <li>Attempting to reverse engineer any software on our website</li>
                                    <li>Removing any copyright or proprietary notations</li>
                                    <li>Transferring the materials to another person or server</li>
                                </ul>

                                <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3 mt-6">
                                    Prohibited Activities
                                </h3>
                                <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                    You agree not to:
                                </p>
                                <ul className="list-disc pl-6 text-[#868584] dark:text-white space-y-2">
                                    <li>Use the website in any way that violates applicable laws or regulations</li>
                                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                                    <li>Transmit any viruses, malware, or harmful code</li>
                                    <li>Attempt to gain unauthorized access to our systems</li>
                                    <li>Interfere with or disrupt the website or servers</li>
                                    <li>Collect or harvest information about other users</li>
                                    <li>Use automated systems to access the website without permission</li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    3. Intellectual Property Rights
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                    All content on this website, including but not limited to text, graphics, logos, images, videos, audio clips, and software, is the property of Western Corridor Limited or its content suppliers and is protected by Zambian and international copyright laws.
                                </p>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    The "Western Corridor" name and logo are trademarks of Western Corridor Limited. You may not use these marks without our prior written permission.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    4. User-Generated Content
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                    If you submit, post, or transmit any content to our website (e.g., through contact forms, comments, or applications), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display that content in connection with our business operations.
                                </p>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    You represent and warrant that you own or have the necessary rights to the content you submit and that such content does not violate any third-party rights or applicable laws.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    5. Third-Party Links
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    Our website may contain links to third-party websites or services that are not owned or controlled by Western Corridor Limited. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    6. Disclaimer of Warranties
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                    The materials on Western Corridor Limited's website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                                </p>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    7. Limitation of Liability
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                    To the fullest extent permitted by applicable law, Western Corridor Limited shall not be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our website or services.
                                </p>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    In no event shall our total liability to you for all damages exceed the amount of one hundred Zambian Kwacha (ZMW 100) or the equivalent in other currencies.
                                </p>
                            </div>

                            {/* Section 8 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    8. Indemnification
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    You agree to indemnify, defend, and hold harmless Western Corridor Limited, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of the website or your violation of these Terms.
                                </p>
                            </div>

                            {/* Section 9 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    9. Privacy Policy
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    Your use of our website is also governed by our{" "}
                                    <Link href="/privacy" className="text-[#fdb913] hover:underline">
                                        Privacy Policy
                                    </Link>. Please review our Privacy Policy to understand our practices regarding the collection and use of your information.
                                </p>
                            </div>

                            {/* Section 10 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    10. Termination
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    We may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the website will immediately cease.
                                </p>
                            </div>

                            {/* Section 11 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    11. Governing Law
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    These Terms shall be governed by and construed in accordance with the laws of the Republic of Zambia, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts of Zambia.
                                </p>
                            </div>

                            {/* Section 12 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    12. Changes to Terms
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice of material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the website after such modifications constitutes your acceptance of the updated Terms.
                                </p>
                            </div>

                            {/* Section 13 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    13. Severability
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
                                </p>
                            </div>

                            {/* Section 14 */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    14. Entire Agreement
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed">
                                    These Terms constitute the entire agreement between you and Western Corridor Limited regarding your use of the website and supersede all prior agreements and understandings.
                                </p>
                            </div>

                            {/* Contact Section */}
                            <div className="mt-12 p-6 bg-card dark:bg-[#1a1a1a] rounded-lg border border-border dark:border-white/10">
                                <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                    Contact Us
                                </h2>
                                <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                    If you have questions about these Terms of Service, please contact us:
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
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
