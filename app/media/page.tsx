import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Calendar, Eye } from "lucide-react";
import Image from "next/image";

const MediaGalleryPage = () => {
  const mediaCategories = [
    { name: "All", count: 24, active: true },
    { name: "Project Photos", count: 12, active: false },
    { name: "Signing Ceremony", count: 8, active: false },
    { name: "Videos", count: 4, active: false },
  ];

  const featuredMedia = [
    {
      id: 1,
      title: "Concession Agreement Signing Ceremony",
      description:
        "Historic signing ceremony with Hon. Minister Situmbeko Musokotwane in Kaoma District",
      type: "photo",
      date: "December 1, 2024",
      category: "Signing Ceremony",
      image: "/signing-ceremony-minister-musokotwane-kaoma-district.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Current Mutanda-Kaoma Road Conditions",
      description:
        "Aerial view of existing road infrastructure requiring urgent upgrades",
      type: "photo",
      date: "November 2024",
      category: "Project Photos",
      image: "/current-mutanda-kaoma-road-aerial-view.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "Project Overview Documentary",
      description:
        "Comprehensive overview of the 371km road project and its regional impact",
      type: "video",
      date: "December 2024",
      category: "Videos",
      image: "/project-overview-documentary-thumbnail.jpg",
      duration: "5:32",
      featured: true,
    },
  ];

  const mediaGallery = [
    {
      id: 4,
      title: "BHL Fleet Operations",
      description: "1000+ vehicle fleet serving the Copperbelt mining region",
      type: "photo",
      date: "October 2024",
      category: "Project Photos",
      image: "/bhl-fleet-operations-copperbelt-mining.jpg",
    },
    {
      id: 5,
      title: "Northwestern Province Mining Operations",
      description: "Heavy duty vehicle transit through mineral-rich regions",
      type: "photo",
      date: "September 2024",
      category: "Project Photos",
      image: "/northwestern-province-mining-operations.jpg",
    },
    {
      id: 6,
      title: "Government Officials at Signing",
      description:
        "Key stakeholders and government officials at the historic ceremony",
      type: "photo",
      date: "December 1, 2024",
      category: "Signing Ceremony",
      image: "/government-officials-signing-ceremony.jpg",
    },
    {
      id: 7,
      title: "Regional Trade Corridor Impact",
      description: "Animation showing enhanced connectivity to Walvis Bay port",
      type: "video",
      date: "November 2024",
      category: "Videos",
      image: "/regional-trade-corridor-animation-thumbnail.jpg",
      duration: "3:45",
    },
    {
      id: 8,
      title: "Community Impact Testimonials",
      description:
        "Local voices supporting the infrastructure development project",
      type: "video",
      date: "October 2024",
      category: "Videos",
      image: "/community-impact-testimonials-thumbnail.jpg",
      duration: "4:18",
    },
    {
      id: 9,
      title: "CEO Buks Jansen van Rensburg",
      description:
        "Leadership interview on project vision and regional development",
      type: "photo",
      date: "November 2024",
      category: "Project Photos",
      image: "/ceo-buks-jansen-leadership-interview.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Media Gallery
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore the visual story of Zambia&apos;s transformative
              infrastructure project through photos, videos, and documentation
              of our journey.
            </p>
          </div>
        </div>
      </section>

      {/* Media Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {mediaCategories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.active ? "default" : "outline"}
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
      </section>

      {/* Featured Media */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Featured Media
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredMedia.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <Image
                      src={`/abstract-geometric-shapes.png?height=240&width=400&query=${encodeURIComponent(item.image.replace("/", ""))}`}
                      alt={item.title}
                      width={400}
                      height={240}
                      className="w-full h-60 object-cover"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-teal-700 ml-1" />
                        </div>
                      </div>
                    )}
                    {item.duration && (
                      <Badge className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white">
                        {item.duration}
                      </Badge>
                    )}
                    <Badge className="absolute top-3 left-3 bg-teal-700 text-white">
                      {item.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-teal-700 hover:text-teal-800 hover:bg-teal-50"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Media Archive
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaGallery.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden group hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <Image
                      src={`/abstract-geometric-shapes.png?height=200&width=350&query=${encodeURIComponent(item.image.replace("/", ""))}`}
                      alt={item.title}
                      width={350}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <Play className="w-5 h-5 text-teal-700 ml-0.5" />
                        </div>
                      </div>
                    )}
                    {item.duration && (
                      <Badge className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs">
                        {item.duration}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <Badge
                      variant="outline"
                      className="text-xs text-teal-700 border-teal-200 mb-2"
                    >
                      {item.category}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{item.date}</span>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 px-2 text-teal-700 hover:bg-teal-50"
                        >
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 px-2 text-teal-700 hover:bg-teal-50"
                        >
                          <Download className="w-3 h-3" />
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

      {/* Press Kit Download */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center border-teal-200">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Media Press Kit
                </h2>
                <p className="text-gray-600 mb-6">
                  Download our comprehensive media kit containing
                  high-resolution images, project fact sheets, executive bios,
                  and company logos for media use.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-teal-700 hover:bg-teal-800 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download Press Kit
                  </Button>
                  <Button
                    variant="outline"
                    className="border-teal-700 text-teal-700 hover:bg-teal-50 bg-transparent"
                  >
                    Media Contact Information
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

export default MediaGalleryPage;
