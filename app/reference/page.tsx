import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { GradientText } from "@/components/gradient-text";
import Link from "next/link";

export default function ReferencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 pattern-grid opacity-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <GradientText variant="primary">Reference</GradientText> Page
            </h1>
            <p
              className="text-lg md:text-xl text-foreground/70 leading-relaxed"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Works cited and copyright information for images used on this
              website.
            </p>
          </div>
        </div>
      </section>

      <main className="py-16 md:py-24 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 pattern-dots opacity-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Works Cited Section */}
            <Card className="p-6 md:p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Works Cited
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                All images used on this website are properly cited. View the
                complete works cited document for detailed attribution
                information.
              </p>
              <Link
                href="https://lwsd-my.sharepoint.com/:w:/g/personal/1108431_lwsd_org/IQCSWDCCgnEjT4Up1gAaQsWQAeMs0C8NdkVkWBk_rp-s8fA?e=fO9NCx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors underline underline-offset-4"
              >
                View Works Cited Document
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </Card>

            {/* Copyright Checklist Section */}
            <Card className="p-6 md:p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Copyright Checklist
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Signed by chapter advisor.
              </p>
              <Link
                href="/copyright_checklist.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors underline underline-offset-4"
              >
                View Copyright Checklist
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </Card>

            {/* Work Log Section */}
            <Card className="p-6 md:p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Work Log
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Track of all work completed on this project, including tasks,
                time involved, and team members responsible.
              </p>
              <img
                src="/worklog.png"
                alt="Work Log"
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
              />
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
