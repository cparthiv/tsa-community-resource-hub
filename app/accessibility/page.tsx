import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Accessibility Statement
            </h1>
            <p className="text-foreground/70 mb-12 text-lg">
              We are committed to ensuring our website is accessible to everyone, including people with disabilities.
            </p>

            <div className="space-y-8">
              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Commitment
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  The Redmond Community Resource Hub is committed to maintaining a website that is accessible to all users, 
                  including those with disabilities. We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                </p>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Accessibility Features
                </h2>
                <div className="space-y-4">
                  {[
                    'Keyboard navigation support for all interactive elements',
                    'Alternative text descriptions for all images',
                    'Proper heading hierarchy for better content structure',
                    'High contrast color combinations for better readability',
                    'Readable fonts and adjustable text sizes',
                    'Focus indicators for keyboard users',
                    'ARIA labels and attributes for assistive technologies',
                    'Semantic HTML for screen readers'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                      <p className="text-foreground/70">{feature}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Browser and Assistive Technology Support
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Our website has been tested with:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                  <li>Screen readers: NVDA, JAWS, VoiceOver</li>
                  <li>Browsers: Chrome, Firefox, Safari, Edge</li>
                  <li>Keyboard-only navigation</li>
                  <li>High contrast modes</li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Known Limitations
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  While we strive for complete accessibility, we acknowledge some areas that may need improvement:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                  <li>Some external resources may have their own accessibility limitations</li>
                  <li>PDF documents linked from our site may not fully comply with accessibility standards</li>
                  <li>User-submitted content may not meet accessibility guidelines</li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Keyboard Shortcuts
                </h2>
                <div className="space-y-3">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Tab</p>
                      <p className="text-foreground/70 text-sm">Navigate through interactive elements</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Shift + Tab</p>
                      <p className="text-foreground/70 text-sm">Navigate backwards through elements</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Enter/Space</p>
                      <p className="text-foreground/70 text-sm">Activate buttons and links</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Escape</p>
                      <p className="text-foreground/70 text-sm">Close dialogs and modals</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Accessibility Resources
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  For more information about web accessibility:
                </p>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://www.w3.org/WAI/WCAG21/quickref/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      WCAG 2.1 Quick Reference
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.w3.org/WAI/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      Web Accessibility Initiative (WAI)
                    </a>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Report an Accessibility Issue
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  If you experience any accessibility barriers or have suggestions for improvement, 
                  please don't hesitate to contact us. We take your feedback seriously and will work to address any issues.
                </p>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:accessibility@redmondcommunityhub.org" className="text-primary hover:underline">
                    accessibility@redmondcommunityhub.org
                  </a>
                </p>
              </Card>

              <Card className="p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <h2 
                  className="text-2xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Last Updated
                </h2>
                <p className="text-foreground/70">
                  This accessibility statement was last updated in March 2025. We continuously work to improve 
                  the accessibility of our website and will update this statement as improvements are made.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
