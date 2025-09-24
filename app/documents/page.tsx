import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Download, FileText, Search, Calendar, Lock, Eye } from "lucide-react";

const DocumentsReportsPage = () => {
  const documentCategories = [
    { name: "All Documents", count: 18, active: true },
    { name: "Environmental", count: 4, active: false },
    { name: "Technical", count: 5, active: false },
    { name: "Financial", count: 3, active: false },
    { name: "Legal", count: 4, active: false },
    { name: "Community", count: 2, active: false },
  ];

  const featuredDocuments = [
    {
      id: 1,
      title: "Environmental Impact Assessment (EIA)",
      description:
        "Comprehensive environmental assessment for the 371km Mutanda-Kaoma road project",
      category: "Environmental",
      type: "PDF",
      size: "12.5 MB",
      date: "December 2024",
      status: "public",
      pages: 156,
      featured: true,
    },
    {
      id: 2,
      title: "Concession Agreement",
      description:
        "Official PPP agreement signed with Ministry of Finance and National Planning",
      category: "Legal",
      type: "PDF",
      size: "8.2 MB",
      date: "December 1, 2024",
      status: "public",
      pages: 89,
      featured: true,
    },
    {
      id: 3,
      title: "Technical Specifications & Design",
      description:
        "Detailed engineering specifications for road construction and infrastructure",
      category: "Technical",
      type: "PDF",
      size: "15.8 MB",
      date: "November 2024",
      status: "public",
      pages: 203,
      featured: true,
    },
  ];

  const documentLibrary = [
    {
      id: 4,
      title: "Resettlement Action Plan (RAP)",
      description:
        "Community resettlement framework and compensation guidelines",
      category: "Community",
      type: "PDF",
      size: "6.4 MB",
      date: "November 2024",
      status: "public",
      pages: 78,
    },
    {
      id: 5,
      title: "Financial Feasibility Study",
      description:
        "Economic analysis and financial projections for the PPP project",
      category: "Financial",
      type: "PDF",
      size: "4.2 MB",
      date: "October 2024",
      status: "restricted",
      pages: 45,
    },
    {
      id: 6,
      title: "Traffic Impact Assessment",
      description:
        "Analysis of traffic patterns and projected usage statistics",
      category: "Technical",
      type: "PDF",
      size: "3.8 MB",
      date: "October 2024",
      status: "public",
      pages: 34,
    },
    {
      id: 7,
      title: "Social Impact Assessment",
      description:
        "Community engagement outcomes and social development framework",
      category: "Community",
      type: "PDF",
      size: "5.1 MB",
      date: "September 2024",
      status: "public",
      pages: 67,
    },
    {
      id: 8,
      title: "Geotechnical Survey Report",
      description:
        "Soil analysis and foundation requirements for road construction",
      category: "Technical",
      type: "PDF",
      size: "9.3 MB",
      date: "September 2024",
      status: "public",
      pages: 112,
    },
    {
      id: 9,
      title: "Legal Due Diligence Report",
      description:
        "Comprehensive legal framework and regulatory compliance analysis",
      category: "Legal",
      type: "PDF",
      size: "7.6 MB",
      date: "August 2024",
      status: "restricted",
      pages: 89,
    },
    {
      id: 10,
      title: "Environmental Monitoring Plan",
      description: "Ongoing environmental compliance and monitoring procedures",
      category: "Environmental",
      type: "PDF",
      size: "4.9 MB",
      date: "August 2024",
      status: "public",
      pages: 56,
    },
    {
      id: 11,
      title: "Project Financial Model",
      description: "Detailed financial projections and revenue forecasting",
      category: "Financial",
      type: "Excel",
      size: "2.1 MB",
      date: "July 2024",
      status: "restricted",
      pages: null,
    },
    {
      id: 12,
      title: "Toll Plaza Design Specifications",
      description:
        "Architectural and engineering plans for three toll collection points",
      category: "Technical",
      type: "PDF",
      size: "11.2 MB",
      date: "July 2024",
      status: "public",
      pages: 134,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Documents & Reports
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Access comprehensive project documentation, compliance reports,
              and technical specifications for the Mutanda-Kaoma Road PPP
              project.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search documents..."
                  className="pl-10 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                {documentCategories.map((category) => (
                  <Button
                    key={category.name}
                    variant={category.active ? "default" : "outline"}
                    size="sm"
                    className={
                      category.active
                        ? "bg-teal-700 hover:bg-teal-800 text-white"
                        : "border-gray-300 text-gray-700 hover:border-teal-700 hover:text-teal-700"
                    }
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Key Project Documents
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredDocuments.map((doc) => (
                <Card
                  key={doc.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                        <FileText className="w-6 h-6 text-teal-700" />
                      </div>
                      <Badge className="bg-teal-700 text-white">
                        {doc.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-gray-900 line-clamp-2">
                      {doc.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {doc.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Type: {doc.type}</span>
                        <span>Size: {doc.size}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Pages: {doc.pages}</span>
                        <span>{doc.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-teal-700 hover:bg-teal-800 text-white"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-teal-700 text-teal-700 hover:bg-teal-50 bg-transparent"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Library */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Document Library
            </h2>
            <div className="space-y-4">
              {documentLibrary.map((doc) => (
                <Card
                  key={doc.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-teal-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 truncate">
                              {doc.title}
                            </h3>
                            <Badge
                              variant="outline"
                              className="text-xs text-teal-700 border-teal-200 flex-shrink-0"
                            >
                              {doc.category}
                            </Badge>
                            {doc.status === "restricted" && (
                              <Badge
                                variant="outline"
                                className="text-xs text-amber-700 border-amber-200 flex-shrink-0"
                              >
                                <Lock className="w-3 h-3 mr-1" />
                                Restricted
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-2 line-clamp-1">
                            {doc.description}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {doc.date}
                            </span>
                            <span>{doc.type}</span>
                            <span>{doc.size}</span>
                            {doc.pages && <span>{doc.pages} pages</span>}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-teal-700 text-teal-700 hover:bg-teal-50 bg-transparent"
                          disabled={doc.status === "restricted"}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          className="bg-teal-700 hover:bg-teal-800 text-white"
                          disabled={doc.status === "restricted"}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Request */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center border-teal-200">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Request Additional Documents
                </h2>
                <p className="text-gray-600 mb-6">
                  Need access to restricted documents or require additional
                  project information? Submit a formal request and our team will
                  respond within 48 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-teal-700 hover:bg-teal-800 text-white">
                    <FileText className="w-4 h-4 mr-2" />
                    Request Documents
                  </Button>
                  <Button
                    variant="outline"
                    className="border-teal-700 text-teal-700 hover:bg-teal-50 bg-transparent"
                  >
                    Contact Document Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentsReportsPage;
