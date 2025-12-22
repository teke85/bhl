import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoOpeningsProps {
  title?: string;
  description?: string;
  checkingBackTitle?: string;
  checkingBackText?: string;
  stayUpdatedTitle?: string;
  stayUpdatedText?: string;
  stayUpdatedButtonText?: string;
  stayUpdatedSmallText?: string;
  whyJoinUsTitle?: string;
  whyJoinUsList?: string[];
  contactText?: string;
  contactLinkText?: string;
  contactLink?: string;
}

export function NoOpenings({
  title = "No Current Openings",
  description = "We are always on the lookout for talented professionals",
  checkingBackTitle = "Checking Back Soon",
  checkingBackText = "While we dont have any open positions at the moment, we constantly growing and evaluating talent for future opportunities. Our team is expanding, and we would love to hear from talented professionals who are interested in joining Western Corridor Limited.<br/><br/>We encourage you to stay connected with us and check back regularly for new job postings. The best candidates often come from individuals who demonstrate genuine interest in our company and mission.",
  stayUpdatedTitle = "Stay Updated",
  stayUpdatedText = "Be the first to know when we have new opportunities available.",
  stayUpdatedButtonText = "Express Your Interest",
  stayUpdatedSmallText = "Drop us a note with your CV and we will keep it on file for future opportunities.",
  whyJoinUsTitle = "Why Join Us",
  whyJoinUsList = [
    "Cutting-edge infrastructure projects",
    "Professional development & growth",
    "Collaborative team environment",
    "Competitive compensation",
  ],
  contactText = "Have a question about working at Western Corridor Limited?",
  contactLinkText = "Get in touch with our HR team",
  contactLink = "mailto:careers@westerncorridorlimited.com",
}: NoOpeningsProps) {
  return (
    <section className="w-full bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Main Message Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-muted-foreground mt-1 shrink-0" />
                <div>
                  <CardTitle className="text-xl">{checkingBackTitle}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: checkingBackText }}
              />
            </CardContent>
          </Card>

          {/* Stay Updated Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{stayUpdatedTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {stayUpdatedText}
              </p>
              <Button className="w-full" variant="default" asChild>
                <a href="mailto:careers@westerncorridorlimited.com?subject=Career%20Inquiry">
                  <Mail className="w-4 h-4 mr-2" />
                  {stayUpdatedButtonText}
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                {stayUpdatedSmallText}
              </p>
            </CardContent>
          </Card>

          {/* Why Join Us Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{whyJoinUsTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {whyJoinUsList.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">✓</span>
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            {contactText}
          </p>
          <a
            href={contactLink}
            className="text-primary hover:underline font-medium"
          >
            {contactLinkText}
          </a>
        </div>
      </div>
    </section>
  );
}
