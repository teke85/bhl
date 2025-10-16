import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/project", label: "Project Overview" },
    { href: "/timeline", label: "Timeline" },
    { href: "/regional-impact", label: "Regional Impact" },
    { href: "/resettlement", label: "Resettlement" },
    { href: "/environmental", label: "Environmental" },
    { href: "/safety", label: "Safety Standards" },
    { href: "/careers", label: "Careers" },
  ];

  const resources = [
    { href: "https://www.rda.org.zm", label: "Road Development Agency" },
    { href: "https://www.mofnp.gov.zm", label: "Ministry of Finance" },
    { href: "https://www.mihud.gov.zm/", label: "Ministry of Infrastructure" },
    { href: "https://beefco.com", label: "Beefco" },
  ];

  const legal = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
  ];

  return (
    <footer className="border-t border-border bg-white dark:bg-black">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-22 h-22 rounded-full overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759852662/Logo_b0ski3.png"
                  alt="Barotse Highway Limited"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-bold text-black dark:text-white font-heading text-xl">
                Barotse Express Highway
              </span>
            </Link>
            <p className="text-black dark:text-white font-body text-lg leading-relaxed mb-6">
              Transforming Zambia&apos;s Western Corridor through world-class
              infrastructure development. Building connections, creating
              opportunities, and driving sustainable regional growth.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-black dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-black dark:text-white hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-black dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-black dark:text-white hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-black dark:text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-black dark:text-white hover:text-black/20 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-black dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-black dark:text-white">
                  Lusaka, Zambia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@barotsehighway.com"
                  className="text-sm text-black dark:text-white hover:text-foreground transition-colors"
                >
                  buksvr@bhl.co.zm
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+260123456789"
                  className="text-sm text-black dark:text-white hover:text-foreground transition-colors"
                >
                  +260 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-black dark:text-white text-center md:text-left">
              © {new Date().getFullYear()} Barotse Highway Limited. All rights
              reserved.
            </p>
            <p className="text-sm text-black dark:text-white text-center md:text-right">
              Powered by{" "}
              <Link href="https://www.maniccreatives.com/">
                Manic Creatives
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
