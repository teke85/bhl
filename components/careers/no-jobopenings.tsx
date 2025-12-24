import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Mail, Info, CheckCircle, Clock, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoOpeningsProps {
  title?: string;
  description?: string;
  checkingBackIcon?: string;
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
  title,
  description,
  checkingBackIcon,
  checkingBackTitle,
  checkingBackText,
  stayUpdatedTitle,
  stayUpdatedText,
  stayUpdatedButtonText,
  stayUpdatedSmallText,
  whyJoinUsTitle,
  whyJoinUsList,
  contactText,
  contactLinkText,
  contactLink,
}: NoOpeningsProps) {
  // Map icon names to Lucide icons
  const iconMap: { [key: string]: any } = {
    Info,
    AlertCircle,
    CheckCircle,
    Clock,
    Bell,
  };

  const IconComponent = checkingBackIcon && iconMap[checkingBackIcon] ? iconMap[checkingBackIcon] : Info;
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
                <IconComponent className="w-6 h-6 text-muted-foreground mt-1 shrink-0" />
                <div>
                  <CardTitle className="text-xl">{checkingBackTitle}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {checkingBackText && (
                <div
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: checkingBackText }}
                />
              )}
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
                {whyJoinUsList?.map((item, index) => (
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
