import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  DollarSign,
  Truck,
  Building,
  Globe,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function ProjectPage() {
  const projectStats = [
    {
      icon: MapPin,
      label: "Total Road Length",
      value: "371 KM",
      description: "Mutanda to Kaoma",
    },
    {
      icon: Calendar,
      label: "Concession Period",
      value: "25 Years",
      description: "2025-2050",
    },
    {
      icon: Building,
      label: "Toll Plazas",
      value: "3",
      description: "Revenue collection points",
    },
    {
      icon: Truck,
      label: "Weighbridges",
      value: "2",
      description: "Traffic management",
    },
  ];

  const keyBenefits = [
    {
      title: "Strategic Route for Trade",
      description:
        "Fastest route linking Zambia's mineral-rich Copperbelt and Northwestern Provinces to West Coast Regions of Africa",
      icon: Globe,
    },
    {
      title: "Enhanced Regional Connectivity",
      description:
        "Gateway for trade with Angola, Botswana, Namibia, and the Western half of the world",
      icon: MapPin,
    },
    {
      title: "Economic Growth Catalyst",
      description:
        "Expected to significantly contribute to economic growth in both Western and Northwestern provinces",
      icon: TrendingUp,
    },
    {
      title: "Reduced Transport Costs",
      description:
        "Direct access to Walvis Bay port, reducing transport costs by 30%",
      icon: DollarSign,
    },
  ];

  const timeline = [
    {
      date: "16 Feb 2024",
      event: "Unsolicited proposal submitted",
      status: "completed",
    },
    {
      date: "19 Jun 2024",
      event: "Awarded preferred bidder status by RDA",
      status: "completed",
    },
    {
      date: "10 Jul 2024",
      event: "Barotse Highway Limited SPV incorporated",
      status: "completed",
    },
    {
      date: "01 Dec 2024",
      event: "Concession agreement signed with Ministry of Finance",
      status: "completed",
    },
    {
      date: "Q1 2025",
      event: "Final design approval and construction permits",
      status: "current",
    },
    {
      date: "Q2 2025",
      event: "Construction commencement ceremony",
      status: "upcoming",
    },
    {
      date: "Q4 2026",
      event: "First section (Mutanda-Kasempa) completion",
      status: "upcoming",
    },
    {
      date: "Q2 2027",
      event: "Full road completion and toll operations begin",
      status: "upcoming",
    },
  ];

  const scopeOfWork = [
    "Project funding and financial structuring",
    "Feasibility Studies and comprehensive design",
    "371 km of Road Construction/Rehabilitation",
    "Construction of 3 toll plazas with modern systems",
    "Construction of 2 weighbridges for traffic management",
    "Traffic and toll management systems implementation",
    "Environmental Impact Assessment (EIA) studies",
    "Comprehensive Resettlement Action Plan",
    "25-year operations and maintenance program",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
              The Mutanda-Kaoma Road Project
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Zambia&apos;s largest infrastructure investment transforming 371
              kilometres of challenging terrain into a modern highway,
              connecting mineral-rich regions to international markets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-teal-700 hover:bg-teal-800">
                Download Project Brief
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-700 text-teal-700 hover:bg-teal-50 bg-transparent"
              >
                View Timeline
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {projectStats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-teal-700" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-slate-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-600">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Transforming Zambia&apos;s Western Corridor
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  The Mutanda-Kaoma Road represents the largest infrastructure
                  investment in Zambia&apos;s Western Province. This
                  Public-Private Partnership will transform 371 kilometres of
                  challenging terrain into a modern highway, connecting the
                  mineral-rich Northwestern Province to international markets
                  via Namibia&apos;s Walvis Bay port.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Our comprehensive approach includes not just road
                  construction, but the development of supporting infrastructure
                  including toll collection systems, weighbridges, and
                  comprehensive maintenance programs that will ensure this vital
                  artery serves Zambia for generations to come.
                </p>
                <Button className="bg-teal-700 hover:bg-teal-800">
                  Learn More About Our Approach
                </Button>
              </div>
              <div>
                <Image
                  src="/aerial-view-of-mutanda-kaoma-road-construction-sit.png"
                  alt="Project site aerial view"
                  width={600}
                  height={400}
                  className="w-full h-auto shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Strategic Importance
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The Mutanda-Kaoma Road is more than infrastructure – it&apos;s
              economic transformation, opening new possibilities for trade,
              tourism, and community development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {keyBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <benefit.icon className="w-8 h-8 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Comprehensive Project Scope
              </h2>
              <p className="text-lg text-slate-600">
                Our end-to-end approach covers every aspect of this
                transformational infrastructure project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {scopeOfWork.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Project Journey
            </h2>
            <p className="text-lg text-slate-600">
              Key milestones from conception to completion of Zambia&apos;s
              transformational infrastructure project.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${
                        item.status === "completed"
                          ? /* Updated completed status colors to teal */ "bg-teal-700 border-teal-700"
                          : item.status === "current"
                            ? /* Updated current status colors to teal */ "bg-teal-100 border-teal-700"
                            : "bg-slate-100 border-slate-300"
                      }`}
                    >
                      {item.status === "completed" && (
                        <CheckCircle className="w-6 h-6 text-white" />
                      )}
                      {item.status === "current" && (
                        /* Updated current icon color to teal */ <Clock className="w-6 h-6 text-teal-700" />
                      )}
                      {item.status === "upcoming" && (
                        <AlertCircle className="w-6 h-6 text-slate-500" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge
                        variant={
                          item.status === "completed"
                            ? "default"
                            : item.status === "current"
                              ? "secondary"
                              : "outline"
                        }
                        className={
                          item.status === "completed"
                            ? /* Updated completed badge color to teal */ "bg-teal-700"
                            : item.status === "current"
                              ? /* Updated current badge colors to teal */ "bg-teal-100 text-teal-700 border-teal-700"
                              : "border-slate-300 text-slate-600"
                        }
                      >
                        {item.date}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          item.status === "completed"
                            ? /* Updated completed status badge colors to teal */ "border-teal-700 text-teal-700"
                            : item.status === "current"
                              ? /* Updated current status badge colors to teal */ "border-teal-700 text-teal-700"
                              : "border-slate-300 text-slate-600"
                        }
                      >
                        {item.status === "completed"
                          ? "Completed"
                          : item.status === "current"
                            ? "In Progress"
                            : "Upcoming"}
                      </Badge>
                    </div>
                    <p className="text-slate-900 font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
