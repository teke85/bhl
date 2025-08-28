import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award, Globe } from "lucide-react";

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Nicolaas Marthinus Jansen van Rensburg (Buks)",
      position: "Chief Executive Officer",
      company: "Barotse Highway Limited",
      image: "/professional-ceo-portrait-corporate-headshot.png",
      bio: "Buks is an experienced entrepreneur with over 30 years of leadership in the logistics, transport, and agribusiness sectors. As the founder and CEO of BHL Zambia, he has grown the company from a small five-truck operation into a major transport enterprise with a fleet of 1000 trucks. Buks also co-founded Beefco Holdings Ltd, a 3000-hectare cattle ranch in Zambia, and Reinsberg Holdings AG, an offshore company in Liechtenstein.",
      achievements: [
        "Founded and grew BHL Zambia from 5 to 1000+ trucks",
        "Co-founded Beefco Holdings Ltd (3000-hectare cattle ranch)",
        "Established Reinsberg Holdings AG in Liechtenstein",
        "Negotiated contracts with UN World Food Programme, Eskom, First Quantum Minerals",
      ],
      expertise: [
        "Logistics & Transport",
        "Agribusiness",
        "International Operations",
        "Strategic Partnerships",
      ],
    },
    {
      name: "Chris Dijkstra",
      position: "Director",
      company: "Barotse Highway Limited / Hotsheet",
      image: "/professional-civil-engineer-portrait-corporate-hea.png",
      bio: "Chris Dijkstra is a seasoned civil engineer and project management professional with extensive experience in large-scale infrastructure, mining, and public-private partnership (PPP) projects. Holding a B.Eng. in Civil Engineering from the University of Pretoria and a Construction Management Programme certificate from Stellenbosch University, Chris has been at the forefront of engineering and project leadership for over 15 years.",
      achievements: [
        "Registered Professional Construction Manager (SACPCMP)",
        "Co-founded Hotsheet project management systems",
        "Managed Musina Ring Road and Beitbridge Border Post projects",
        "Led Lamu to Isiolo PPP project in Kenya",
      ],
      expertise: [
        "Civil Engineering",
        "Project Management",
        "PPP Projects",
        "Construction Management",
      ],
    },
  ];

  const consultants = [
    {
      name: "Hotsheet Project Managers",
      role: "Lead Project Manager",
      logo: "/hotsheet-company-logo.png",
    },
    {
      name: "BCHOD",
      role: "Local EPC Contractor",
      logo: "/bchod-engineering-company-logo.png",
    },
    {
      name: "DH Engineering Consultants",
      role: "Local ESG Advisor",
      logo: "/dh-engineering-company-logo.png",
    },
    {
      name: "Korridor Holdings",
      role: "Toll Operator",
      logo: "/korridor-holdings-technology-company-logo.png",
    },
    {
      name: "Herbert Smith Freehills",
      role: "Lead Legal Advisor",
      logo: "/herbert-smith-freehills-law-firm-logo.png",
    },
    {
      name: "Pangaea Securities Limited",
      role: "Financial Advisor",
      logo: "/pangaea-securities-financial-company-logo.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
              Leadership Excellence
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Experienced leadership driving Zambia&apos;s largest
              infrastructure transformation with proven expertise in logistics,
              engineering, and project management.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Executive Leadership
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our leadership team combines decades of experience in
              infrastructure development, logistics, and project management
              across Africa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center mb-8">
                    <div className="relative mb-6">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        width={200}
                        height={200}
                        className="w-48 h-48 object-cover border-4 border-slate-100"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-lg font-semibold text-foreground mb-1">
                      {leader.position}
                    </p>
                    <p className="text-slate-600">{leader.company}</p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-slate-700 leading-relaxed">
                      {leader.bio}
                    </p>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-foreground" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {leader.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-slate-700 flex items-start"
                          >
                            <span className="w-2 h-2 bg-foreground mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-foreground" />
                        Areas of Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="border-foreground text-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Partners */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              World-Class Partnership Ecosystem
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our success is built on strategic partnerships with leading
              international firms across legal, financial, engineering, and
              technology sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {consultants.map((consultant, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Image
                      src={consultant.logo || "/placeholder.svg"}
                      alt={`${consultant.name} logo`}
                      width={200}
                      height={80}
                      className="mx-auto h-16 w-auto object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {consultant.name}
                  </h3>
                  <p className="text-foreground font-medium">
                    {consultant.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="space-y-2">
              <div className="flex justify-center mb-3">
                <Building2 className="w-8 h-8 text-foreground" />
              </div>
              <div className="text-3xl font-bold text-slate-900">30+</div>
              <div className="text-slate-600">Years Combined Experience</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-foreground" />
              </div>
              <div className="text-3xl font-bold text-slate-900">1000+</div>
              <div className="text-slate-600">Vehicle Fleet</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-3">
                <Globe className="w-8 h-8 text-foreground" />
              </div>
              <div className="text-3xl font-bold text-slate-900">371km</div>
              <div className="text-slate-600">Road Project</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-3">
                <Award className="w-8 h-8 text-foreground" />
              </div>
              <div className="text-3xl font-bold text-slate-900">25</div>
              <div className="text-slate-600">Year Concession</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
