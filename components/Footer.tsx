import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image
              src="/images/barotse-logo.png"
              alt="Barotse Highway Limited"
              width={150}
              height={75}
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm opacity-90 mb-4 leading-relaxed">
              Building Zambia&apos;s gateway to the west through world-class
              infrastructure and sustainable development practices.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  About the Project
                </Link>
              </li>
              <li>
                <Link
                  href="/timeline"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Timeline & Milestones
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Latest News
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/procurement"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Procurement Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/documents"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Document Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mutanda Road, P.O. Box 110086</p>
                  <p>Solwezi, Northwestern Province</p>
                  <p>Zambia</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:buksvr@bhl.co.zm"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  buksvr@bhl.co.zm
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="opacity-90">+260 XXX XXX XXX</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm opacity-90 mb-4">
              Subscribe to receive the latest project updates and news.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm opacity-90">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/privacy"
              className="hover:opacity-100 transition-opacity"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:opacity-100 transition-opacity"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:opacity-100 transition-opacity"
            >
              Cookie Policy
            </Link>
          </div>
          <p>© 2024 Barotse Highway Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
