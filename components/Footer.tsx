import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { Linkedin, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex justify-center mb-4">
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758461466/WhatsApp_Image_2025-08-29_at_13.11.42_ciqb2u-removebg-preview_dolid4.png"
                alt="Company Logo"
                width={250}
                height={250}
                className="object-contain h-32"
                priority={true}
                quality={100}
              />
            </div>
            <p className="text-sm opacity-90 font-paragraph mb-4 leading-relaxed text-center">
              Building Zambia&apos;s gateway to the west through world-class
              infrastructure and sustainable development practices.
            </p>
            <div className="flex justify-center space-x-4">
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
          <div className="font-paragraph">
            <h3 className="font-semibold font-paragraph mb-4">Quick Links</h3>
            <ul className="space-y-2 font-paragraph text-sm">
              <li>
                <Link
                  href="/find-us"
                  className="hover:text-white transition-colors"
                >
                  Find Us
                </Link>
              </li>
              <li>
                <Link
                  href="/call-us"
                  className="hover:text-white transition-colors"
                >
                  Call Us
                </Link>
              </li>
              <li>
                <Link
                  href="/email-us"
                  className="hover:text-white transition-colors"
                >
                  Email Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="font-paragraph">
            <h3 className="font-semibold text-white mb-6 text-lg">
              Project Overview
            </h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="hover:text-white transition-colors"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  href="/milestones"
                  className="hover:text-white transition-colors"
                >
                  Milestones
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="font-paragraph">
            <h3 className="font-semibold text-white mb-6 text-lg">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 gap-3 text-sm text-white/90">
              <div className="space-y-3">
                <Link
                  href="/rda"
                  className="block hover:text-white transition-colors"
                >
                  Road Development Agency
                </Link>
                <Link
                  href="/ministry-finance"
                  className="block hover:text-white transition-colors"
                >
                  Ministry of Finance
                </Link>
                <Link
                  href="/ministry-infrastructure"
                  className="block hover:text-white transition-colors"
                >
                  Ministry of Infrastructure
                </Link>
                <Link
                  href="/beefco"
                  className="block hover:text-white transition-colors"
                >
                  Beefco
                </Link>
              </div>
              <div className="space-y-3 mt-4 lg:mt-0">
                <Link
                  href="/first-quantum"
                  className="block hover:text-white transition-colors"
                >
                  First Quantum Minerals Limited
                </Link>
                <Link
                  href="/buks-haulage"
                  className="block hover:text-white transition-colors"
                >
                  Buks Haulage Limited
                </Link>
                <Link
                  href="/hotsheet"
                  className="block hover:text-white transition-colors"
                >
                  Hotsheet
                </Link>
                <Link
                  href="/pangaea"
                  className="block hover:text-white transition-colors"
                >
                  Pangaea Securities
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm opacity-90">
          <div className="flex font-paragraph flex-wrap gap-4">
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
          <p className="font-paragraph">
            © 2025 Barotse Highway Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
