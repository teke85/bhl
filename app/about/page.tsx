<<<<<<< HEAD
import StrategicPartnerships from "@/components/StrategicPartnerships";
import React from "react";

function AboutPage() {
  return (
    <div>
      <StrategicPartnerships />
    </div>
  );
}
=======
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Award, Target } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Barotse Highway Limited
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transforming Zambia&apos;s infrastructure through innovative
              public-private partnerships and world-class engineering
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  The Mutanda-Kaoma Road Public Private Partnership (PPP)
                  Project represents a critical infrastructure initiative aimed
                  at enhancing Zambia&apos;s western corridor. As the designated
                  Concessionaire, Barotse Highway Limited is responsible for the
                  design, financing, construction, and operation of the 371
                  kilometre Mutanda to Kaoma road over a 25-year concession
                  period.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our comprehensive approach encompasses not just road
                  construction, but the development of supporting infrastructure
                  including toll collection systems, weighbridges, and
                  comprehensive maintenance programs that will ensure this vital
                  artery serves Zambia for generations to come.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-[#DBDDDF] rounded-lg flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      371 KM
                    </h3>
                    <p className="text-gray-600">Road Length</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-[#DBDDDF] rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      25 Years
                    </h3>
                    <p className="text-gray-600">Concession Period</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-[#DBDDDF] rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">3</h3>
                    <p className="text-gray-600">Toll Plazas</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-[#DBDDDF] rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2</h3>
                    <p className="text-gray-600">Weighbridges</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Importance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Strategic Importance
              </h2>
              <p className="text-xl text-gray-600">
                Connecting Zambia&apos;s mineral-rich regions to international
                markets
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Enhanced Regional Connectivity
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Road serves as a vital trade corridor, connecting
                    Solwezi to Walvis Bay in Namibia. Upgrading the Road will
                    enhance regional connectivity, fostering economic
                    cooperation and development across Southern Africa.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Strategic Route for Trade
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Road will offer the fastest route linking Zambia&apos;s
                    mineral-rich Copperbelt and Northwestern Provinces to West
                    Coast Regions of Africa, acting as a gateway for trade with
                    Angola, Botswana, and Namibia.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Economic Growth Catalyst
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Project is expected to significantly contribute to
                    economic growth in both Western and Northwestern provinces,
                    benefiting mining industry, businesses, regional trade, and
                    local communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Foundation
              </h2>
              <p className="text-xl text-gray-600">
                Built on decades of logistics expertise and infrastructure
                development
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  BHL Zambia Limited
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  BHL Zambia Limited is a professional logistics service
                  provider based in Solwezi, Northwestern Province, specializing
                  in the transport of various commodities with value-added
                  services and facilities. The company boasts an experienced,
                  well-trained, and professional management team.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  BHL has experienced significant growth over the past eight
                  years, tripling its fleet from just over 100 vehicles in 2012
                  to over 1000 vehicles in 2025. The Group has diversified into
                  a thriving farming operation and expanded its operational
                  capabilities across multiple sectors.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#DADCDE] border border-[#DADCDE]">
                    <div className="text-2xl font-bold text-foreground">
                      1000+
                    </div>
                    <div className="text-sm text-gray-600">Vehicle Fleet</div>
                  </div>
                  <div className="text-center p-4 bg-[#DADCDE] border border-[#DADCDE]">
                    <div className="text-2xl font-bold text-foreground">
                      60,000
                    </div>
                    <div className="text-sm text-gray-600">
                      Tons/Month Transport
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Project Timeline
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-foreground mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        February 16, 2024
                      </div>
                      <div className="text-gray-600">
                        Submitted unsolicited proposal for the Project
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-foreground mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        June 19, 2024
                      </div>
                      <div className="text-gray-600">
                        Awarded preferred bidder status by Zambia Road
                        Development Agency
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-foreground mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        July 10, 2024
                      </div>
                      <div className="text-gray-600">
                        Incorporated Barotse Highway Limited SPV (BHL-TC)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-foreground mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        December 1, 2024
                      </div>
                      <div className="text-gray-600">
                        Signed concession agreement with Ministry of Finance and
                        National Planning
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#DBDDDF] text-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join Us in Building Zambia&apos;s Future
            </h2>
            <p className="text-xl mb-8 text-foreground leading-relaxed">
              Discover how the Mutanda-Kaoma Road project will transform
              regional connectivity and drive economic growth across Southern
              Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-foreground hover:bg-gray-100"
              >
                View Project Details
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
>>>>>>> e662db40e2c772e8f8b4e5a7be1cec13ace7689f

export default AboutPage;
