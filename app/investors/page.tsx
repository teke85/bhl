import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  DollarSign,
  Calendar,
  Users,
  Download,
  Mail,
  Phone,
  FileText,
} from "lucide-react";

const InvestorRelationsPage = () => {
  const keyMetrics = [
    {
      title: "Project Value",
      value: "USD 500M+",
      description: "Total investment commitment",
      icon: DollarSign,
      trend: "+12%",
    },
    {
      title: "Concession Period",
      value: "25 Years",
      description: "Revenue generation period",
      icon: Calendar,
      trend: "Stable",
    },
    {
      title: "Road Length",
      value: "371 KM",
      description: "Infrastructure coverage",
      icon: TrendingUp,
      trend: "Complete",
    },
    {
      title: "Employment",
      value: "2,500+",
      description: "Jobs created during construction",
      icon: Users,
      trend: "+8%",
    },
  ];

  const financialReports = [
    {
      title: "Q4 2024 Financial Update",
      description:
        "Latest financial performance and project milestones achieved",
      date: "December 31, 2024",
      type: "Quarterly Report",
      size: "2.8 MB",
      featured: true,
    },
    {
      title: "Annual Financial Projections 2025",
      description:
        "Comprehensive revenue forecasts and operational projections",
      date: "December 15, 2024",
      type: "Annual Forecast",
      size: "4.2 MB",
      featured: true,
    },
    {
      title: "PPP Agreement Financial Terms",
      description:
        "Detailed breakdown of concession agreement financial structure",
      date: "December 1, 2024",
      type: "Legal Document",
      size: "6.1 MB",
      featured: false,
    },
    {
      title: "Risk Assessment & Mitigation",
      description:
        "Comprehensive analysis of project risks and management strategies",
      date: "November 20, 2024",
      type: "Risk Report",
      size: "3.5 MB",
      featured: false,
    },
  ];

  const investmentHighlights = [
    {
      title: "Strategic Location",
      description:
        "Connects mineral-rich Copperbelt to Walvis Bay port, reducing transport costs by 30%",
    },
    {
      title: "Government Partnership",
      description:
        "25-year concession agreement with Republic of Zambia providing revenue certainty",
    },
    {
      title: "Proven Management",
      description:
        "Experienced leadership with 30+ years in logistics and infrastructure development",
    },
    {
      title: "Regional Impact",
      description:
        "Gateway for trade with Angola, Botswana, Namibia, and international markets",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Investor Relations
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover investment opportunities in Zambia&apos;s transformative
              infrastructure project connecting the Copperbelt to international
              markets.
            </p>
          </div>
        </div>
      </section>

      {/* Key Financial Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Key Financial Metrics
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="w-6 h-6 text-teal-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {metric.value}
                    </h3>
                    <p className="text-gray-600 mb-2">{metric.title}</p>
                    <p className="text-sm text-gray-500 mb-3">
                      {metric.description}
                    </p>
                    <Badge className="bg-teal-100 text-teal-700 border-teal-200">
                      {metric.trend}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Investment Highlights
              </h2>
              <p className="text-xl text-gray-600">
                Why the Mutanda-Kaoma Road represents a compelling investment
                opportunity
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {investmentHighlights.map((highlight, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Financial Reports & Documents
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {financialReports.map((report, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-shadow ${report.featured ? "border-teal-200" : ""}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-teal-700" />
                      </div>
                      {report.featured && (
                        <Badge className="bg-teal-700 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg text-gray-900">
                      {report.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {report.description}
                    </p>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>{report.type}</span>
                      <span>{report.size}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {report.date}
                      </span>
                      <Button
                        size="sm"
                        className="bg-teal-700 hover:bg-teal-800 text-white"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Performance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Revenue Model
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  The Mutanda-Kaoma Road operates on a proven toll-based revenue
                  model with multiple income streams including toll collection,
                  weighbridge services, and ancillary commercial activities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white border border-teal-100">
                    <span className="font-medium text-gray-900">
                      Toll Revenue
                    </span>
                    <span className="text-teal-700 font-semibold">65%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white border border-teal-100">
                    <span className="font-medium text-gray-900">
                      Weighbridge Services
                    </span>
                    <span className="text-teal-700 font-semibold">25%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white border border-teal-100">
                    <span className="font-medium text-gray-900">
                      Commercial Activities
                    </span>
                    <span className="text-teal-700 font-semibold">10%</span>
                  </div>
                </div>
              </div>
              <div>
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Projected Annual Revenue
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Year 1-5</span>
                          <span className="font-semibold text-gray-900">
                            USD 45M - 65M
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 h-2">
                          <div className="bg-teal-700 h-2 w-3/5"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Year 6-15</span>
                          <span className="font-semibold text-gray-900">
                            USD 65M - 85M
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 h-2">
                          <div className="bg-teal-700 h-2 w-4/5"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Year 16-25</span>
                          <span className="font-semibold text-gray-900">
                            USD 85M - 100M
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 h-2">
                          <div className="bg-teal-700 h-2 w-full"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Investor Relations Contact
              </h2>
              <p className="text-xl text-gray-600">
                Connect with our investor relations team for detailed financial
                information and investment opportunities
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Investor Inquiries
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-teal-700" />
                      <span className="text-gray-600">investors@bhl.co.zm</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-teal-700" />
                      <span className="text-gray-600">+260 XXX XXX XXX</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-teal-700 hover:bg-teal-800 text-white">
                    Schedule Investor Call
                  </Button>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Financial Information
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Access comprehensive financial reports, investor
                    presentations, and project updates.
                  </p>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-teal-700 text-teal-700 hover:bg-teal-50 bg-transparent"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Investor Pack
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-teal-700 text-teal-700 hover:bg-teal-50 bg-transparent"
                    >
                      Subscribe to Updates
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorRelationsPage;
