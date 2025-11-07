import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import Link from "next/link";

export const metadata = {
    title: "Cookie Policy | Western Corridor",
    description: "Learn about how Western Corridor Limited uses cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
            {/* Hero Section with dark background */}
            <section className="relative pt-40 pb-20 px-4 bg-black dark:bg-[#0a0a0a]">
                <StickyNavigationMenu />
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Cookie Policy
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
                                This Cookie Policy explains how Western Corridor Limited ("we," "our," or "us") uses cookies and similar technologies when you visit our website. This policy helps you understand what these technologies are, why we use them, and your choices regarding their use.
                            </p>
                            <p className="text-[#868584] dark:text-white leading-relaxed">
                                By using our website, you consent to the use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, you should adjust your browser settings or refrain from using our website.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                1. What Are Cookies?
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                            </p>
                            <p className="text-[#868584] dark:text-white leading-relaxed">
                                Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you close your browser, while session cookies are deleted when you close your browser.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                2. Types of Cookies We Use
                            </h2>

                            <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3 mt-6">
                                Essential Cookies
                            </h3>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, security features, and access to secure areas of the website. The website cannot function properly without these cookies.
                            </p>
                            <div className="bg-card dark:bg-[#1a1a1a] p-4 rounded-lg border border-border dark:border-white/10 mb-6">
                                <p className="text-[#868584] dark:text-white text-sm">
                                    <strong>Purpose:</strong> Authentication, security, preferences
                                </p>
                                <p className="text-[#868584] dark:text-white text-sm">
                                    <strong>Duration:</strong> Session or up to 1 year
                                </p>
                            </div>

                            <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3 mt-6">
                                Analytics and Performance Cookies
                            </h3>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance and user experience.
                            </p>
                            <div className="bg-card dark:bg-[#1a1a1a] p-4 rounded-lg border border-border dark:border-white/10 mb-6">
                                <p className="text-[#868584] dark:text-white text-sm">
                                    <strong>Purpose:</strong> Website analytics, visitor statistics, performance monitoring
                                </p>
                                <p className="text-[#868584] dark:text-white text-sm">
                                    <strong>Third-party services:</strong> Google Analytics
                                </p>
                                <p className="text-[#868584] dark:text-white text-sm">
                                    <strong>Duration:</strong> Up to 2 years
                                </p>
                            </div>

                            <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3 mt-6">
                                Functionality Cookies
                            </h3>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                These cookies allow the website to remember choices you make (such as your language preference or theme settings) and provide enhanced, personalized features.
                            </p>
                            <div className="bg-card dark:bg-[#1a1a1a] p-4 rounded-lg border border-border dark:border-white/10 mb-6">
                                <p className="text-[#868584] dark:text-white text-sm">
                                    <strong>Purpose:</strong> Language preferences, theme settings, personalization
                                </p>
                                <p className="text-[#868584] dark:text-white text-sm">
                                    <strong>Duration:</strong> Up to 1 year
                                </p>
                            </div>

                            <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3 mt-6">
                                Targeting and Advertising Cookies
                            </h3>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant ads on other sites.
                            </p>
                            <div className="bg-card dark:bg-[#1a1a1a] p-4 rounded-lg border border-border dark:border-white/10 mb-6">
                                <p className="text-[#868584] dark:text-white text-sm">
                                    <strong>Purpose:</strong> Targeted advertising, remarketing
                                </p>
                                <p className="text-[#868584] dark:text-white text-sm">
                                    <strong>Third-party services:</strong> May include social media platforms
                                </p>
                                <p className="text-[#868584] dark:text-white text-sm">
                                    <strong>Duration:</strong> Up to 2 years
                                </p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                3. Third-Party Cookies
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and provide enhanced functionality. These third-party services have their own privacy policies:
                            </p>
                            <ul className="list-disc pl-6 text-[#868584] dark:text-white space-y-2">
                                <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                                <li><strong>Social Media Platforms:</strong> For social media integration and sharing features</li>
                                <li><strong>Content Delivery Networks:</strong> For faster content delivery</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                4. How to Manage Cookies
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through:
                            </p>

                            <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3 mt-6">
                                Browser Settings
                            </h3>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                Most web browsers allow you to control cookies through their settings. You can typically find these settings in the "Options" or "Preferences" menu of your browser. Here are links to cookie management for popular browsers:
                            </p>
                            <ul className="list-disc pl-6 text-[#868584] dark:text-white space-y-2 mb-4">
                                <li><a href="https://support.google.com/chrome/answer/95647" className="text-[#fdb913] hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-[#fdb913] hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" className="text-[#fdb913] hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                                <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" className="text-[#fdb913] hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                            </ul>

                            <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3 mt-6">
                                Cookie Consent Tool
                            </h3>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                When you first visit our website, you'll see a cookie consent banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time through our cookie settings.
                            </p>

                            <h3 className="text-xl font-heading font-semibold text-black dark:text-white mb-3 mt-6">
                                Opt-Out of Third-Party Cookies
                            </h3>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                You can opt out of third-party cookies through these resources:
                            </p>
                            <ul className="list-disc pl-6 text-[#868584] dark:text-white space-y-2">
                                <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-[#fdb913] hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                                <li><a href="http://optout.networkadvertising.org/" className="text-[#fdb913] hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative Opt-out</a></li>
                                <li><a href="http://optout.aboutads.info/" className="text-[#fdb913] hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Opt-out</a></li>
                            </ul>
                        </div>

                        {/* Section 5 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                5. Impact of Disabling Cookies
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                If you choose to disable cookies, some features of our website may not function properly. Specifically:
                            </p>
                            <ul className="list-disc pl-6 text-[#868584] dark:text-white space-y-2">
                                <li>You may not be able to access certain areas of the website</li>
                                <li>Your preferences and settings may not be saved</li>
                                <li>Some interactive features may not work as intended</li>
                                <li>You may see less relevant content and advertisements</li>
                            </ul>
                        </div>

                        {/* Section 6 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                6. Other Tracking Technologies
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                In addition to cookies, we may use other technologies to track your use of our website:
                            </p>
                            <ul className="list-disc pl-6 text-[#868584] dark:text-white space-y-2">
                                <li><strong>Web Beacons:</strong> Small graphic images (also known as "pixel tags" or "clear GIFs") that help us analyze website usage</li>
                                <li><strong>Local Storage:</strong> Technology that allows us to store data locally on your device</li>
                                <li><strong>Session Storage:</strong> Similar to local storage but expires when you close your browser</li>
                            </ul>
                        </div>

                        {/* Section 7 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                7. Updates to This Cookie Policy
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed">
                                We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                8. More Information
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                For more information about how we collect, use, and protect your personal information, please read our{" "}
                                <Link href="/privacy" className="text-[#fdb913] hover:underline">
                                    Privacy Policy
                                </Link>.
                            </p>
                            <p className="text-[#868584] dark:text-white leading-relaxed">
                                To learn more about cookies in general, you can visit{" "}
                                <a href="https://www.allaboutcookies.org/" className="text-[#fdb913] hover:underline" target="_blank" rel="noopener noreferrer">
                                    www.allaboutcookies.org
                                </a>.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div className="mt-12 p-6 bg-card dark:bg-[#1a1a1a] rounded-lg border border-border dark:border-white/10">
                            <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                                Contact Us
                            </h2>
                            <p className="text-[#868584] dark:text-white leading-relaxed mb-4">
                                If you have questions about our use of cookies or this Cookie Policy, please contact us:
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