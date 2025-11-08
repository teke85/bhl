import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NoOpenings() {
  return (
    <section className="w-full bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            No Current Openings
          </h2>
          <p className="text-lg text-muted-foreground">
            We are always on the lookout for talented professionals
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Main Message Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-muted-foreground mt-1 shrink-0" />
                <div>
                  <CardTitle className="text-xl">Checking Back Soon</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                While we dont have any open positions at the moment, we{" "}
                <area shape="" coords="" href="" alt="" />
                constantly growing and evaluating talent for future
                opportunities. Our team is expanding, and we would love to hear
                from talented professionals who are interested in joining
                Western Corridor Limited.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We encourage you to stay connected with us and check back
                regularly for new job postings. The best candidates often come
                from individuals who demonstrate genuine interest in our company
                and mission.
              </p>
            </CardContent>
          </Card>

          {/* Stay Updated Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Stay Updated</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Be the first to know when we have new opportunities available.
              </p>
              <Button className="w-full" variant="default" asChild>
                <a href="mailto:careers@westerncorridorlimited.com?subject=Career%20Inquiry">
                  <Mail className="w-4 h-4 mr-2" />
                  Express Your Interest
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Drop us a note with your CV and we will keep it on file for
                future opportunities.
              </p>
            </CardContent>
          </Card>

          {/* Why Join Us Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why Join Us</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <span className="text-sm text-muted-foreground">
                    Cutting-edge infrastructure projects
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <span className="text-sm text-muted-foreground">
                    Professional development & growth
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <span className="text-sm text-muted-foreground">
                    Collaborative team environment
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <span className="text-sm text-muted-foreground">
                    Competitive compensation
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Have a question about working at Western Corridor Limited?
          </p>
          <a
            href="mailto:careers@westerncorridorlimited.com"
            className="text-primary hover:underline font-medium"
          >
            Get in touch with our HR team
          </a>
        </div>
      </div>
    </section>
  );
}
