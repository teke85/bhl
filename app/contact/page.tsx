<<<<<<< HEAD
import React from "react";

function Contact() {
  return <div>Contact</div>;
}

export default Contact;
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Mail,
  Clock,
  Building2,
  Users,
  FileText,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      details: "buksvr@bhl.co.zm",
      description: "Primary business inquiries",
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: "Mutanda Road, P.O. Box 110086",
      description: "Solwezi, Northwestern Province, Zambia",
    },
    {
      icon: Building2,
      title: "Project Location",
      details: "Mutanda to Kaoma",
      description: "371km Western Corridor",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 5:00 PM",
      description: "Central Africa Time (CAT)",
    },
  ];

  const inquiryTypes = [
    {
      icon: Users,
      title: "Partnership Opportunities",
      description: "Strategic partnerships and joint ventures",
    },
    {
      icon: FileText,
      title: "Procurement Inquiries",
      description: "Supplier registration and tender opportunities",
    },
    {
      icon: Building2,
      title: "Project Information",
      description: "Technical specifications and project updates",
    },
    {
      icon: Mail,
      title: "Media & Press",
      description: "Media inquiries and press releases",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Connect with our team for partnership opportunities, project
              inquiries, or to learn more about Zambia&apos;s transformational
              infrastructure development.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <info.icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="font-medium text-slate-900 mb-1">
                    {info.details}
                  </p>
                  <p className="text-sm text-slate-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">
                    Send us a Message
                  </CardTitle>
                  <p className="text-slate-600">
                    We&apos;ll get back to you within 24 hours during business
                    days.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <select
                      id="inquiryType"
                      className="w-full px-3 py-2 border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="partnership">
                        Partnership Opportunities
                      </option>
                      <option value="procurement">Procurement Inquiries</option>
                      <option value="project">Project Information</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-32"
                    />
                  </div>

                  <Button
                    className="w-full bg-blue-900 hover:bg-blue-800"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Map and Location */}
              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-900">
                      Our Location
                    </CardTitle>
                    <p className="text-slate-600">
                      Located in the heart of Northwestern Province,
                      strategically positioned for the Mutanda-Kaoma corridor.
                    </p>
                  </CardHeader>
                  <CardContent>
                    {/* Google Maps Placeholder */}
                    <div className="w-full h-64 bg-slate-200 flex items-center justify-center text-slate-600 mb-4">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 mx-auto mb-2 text-blue-900" />
                        <p className="font-medium">Interactive Map</p>
                        <p className="text-sm">Google Maps integration ready</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium text-slate-900">
                        Barotse Highway Limited
                      </p>
                      <p className="text-slate-700">Mutanda Road</p>
                      <p className="text-slate-700">P.O. Box 110086</p>
                      <p className="text-slate-700">
                        Solwezi, Northwestern Province
                      </p>
                      <p className="text-slate-700">Zambia</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">
                      Quick Links
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-blue-900 text-blue-900 hover:bg-blue-50 bg-transparent"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Download Project Brief
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-blue-900 text-blue-900 hover:bg-blue-50 bg-transparent"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Partnership Opportunities
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-blue-900 text-blue-900 hover:bg-blue-50 bg-transparent"
                    >
                      <Building2 className="w-4 h-4 mr-2" />
                      Procurement Portal
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you&apos;re interested in partnerships, procurement
              opportunities, or project information, we&apos;re here to assist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {inquiryTypes.map((type, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <type.icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> e662db40e2c772e8f8b4e5a7be1cec13ace7689f
