import { Footer } from "@/components/FooterUpdated";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Image from "next/image";
import StickyNavigationMenu from "@/components/StickyNavUpdated";

export default function ContactPage() {
  return (
    <section className="min-h-screen ">
      <main className=" ">
        <StickyNavigationMenu />
        {/* Hero Section */}
        <div className="relative min-h-[40vh] flex items-center justify-center bg-white dark:bg-black text-black dark:text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760774766/BHL_trucks_in_Solwezi__Zambia__4K_professional_photography__dusty_road__mining_environment__bright_d_oqi1cq.png"
              alt="Contact Us"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="container py-40 mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-white dark:text-white leading-relaxed">
                Have questions about the Barotse Highway project? We&apos;re
                here to help. Reach out to our team for inquiries, partnerships,
                or general information.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form & Info */}
        <section className="py-16 bg-white dark:bg-black text-black dark:text-white lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 text-black bg-white dark:text-white dark:bg-black  space-y-6">
                <Card className="p-6 bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Office Location</h3>
                      <p className="text-sm leading-relaxed">
                        Barotse Highway Limited
                        <br />
                        Cairo Road, Lusaka
                        <br />
                        Zambia
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email Us</h3>
                      <a
                        href="mailto:info@barotsehighway.com"
                        className="text-sm transition-colors"
                      >
                        info@barotsehighway.com
                      </a>
                      <br />
                      <a
                        href="mailto:projects@barotsehighway.com"
                        className="text-sm transition-colors"
                      >
                        projects@barotsehighway.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6S border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Call Us</h3>
                      <a
                        href="tel:+260123456789"
                        className="text-sm transition-colors"
                      >
                        +260 123 456 789
                      </a>
                      <br />
                      <a
                        href="tel:+260987654321"
                        className="text-sm transition-colors"
                      >
                        +260 987 654 321
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-sm leading-relaxed">
                        Monday - Friday: 8:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 bg-white text-black dark:bg-black dark:text-white">
                <Card className="p-8 lg:p-12 bg-card border-border">
                  <h2 className="text-2xl text-black dark:text-white lg:text-3xl font-bold mb-6">
                    Send Us a Message
                  </h2>
                  <form className="space-y-6 text-black dark:text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 text-black dark:text-white">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium"
                        >
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="bg-background border-border"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium"
                        >
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="border-border"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="border-border"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+260 123 456 789"
                        className="border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-foreground"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        placeholder="Project Inquiry"
                        className="bg-background border-border"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        className="border-border min-h-[150px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto hover:bg-primary/90"
                    >
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Find Us on the Map
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visit our office in Lusaka, Zambia. We&apos;re conveniently
                located in the heart of the city.
              </p>
            </div>
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-border">
              <Image
                src="/map-of-lusaka-zambia.jpg"
                alt="Office Location Map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
