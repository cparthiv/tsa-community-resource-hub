import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { ImagePlaceholder } from '@/components/image-placeholder'
import { GradientText } from '@/components/gradient-text'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 pattern-grid opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              About <GradientText variant="primary">Redmond Community</GradientText> Resource Hub
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed" style={{ fontFamily: 'var(--font-display)' }}>
              A simple directory of local resources, built by Redmond residents for Redmond residents. Everything you need to know about community services in one place.
            </p>
          </div>
        </div>
      </section>
      
      <main className="py-16 md:py-24 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* How It Works */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  How It <GradientText variant="accent">Works</GradientText>
                </h2>
                <div className="space-y-6 text-foreground/70">
                  <p className="leading-relaxed text-lg">
                    We maintain a directory of verified Redmond community resources. Each listing includes contact information, services offered, and who can access them. Everything is searchable and organized by category.
                  </p>
                  <p className="leading-relaxed text-lg">
                    We work directly with local nonprofits and service providers to keep information accurate. When things change, we update our listings. If you notice something outdated, let us know and we'll fix it.
                  </p>
                  <p className="leading-relaxed text-lg">
                    Anyone can submit a new resource through our Submit page. We review each submission before adding it to make sure it's legitimate and helpful for the community.
                  </p>
                </div>
              </div>
              <div className="relative">
                <ImagePlaceholder 
                  label="About - How it works illustration" 
                  className="w-full rounded-2xl"
                  aspectRatio="square"
                />
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
              Frequently Asked <GradientText variant="primary">Questions</GradientText>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: 'How do I find resources?',
                  a: 'Search by name or browse categories. Most people find what they need in under a minute.',
                },
                {
                  q: 'Can I add a resource?',
                  a: 'Absolutely! If you know a service that should be listed, use our Submit page. We review everything before adding it.',
                },
                {
                  q: 'How often is this updated?',
                  a: 'We update listings regularly, but things change fast. If you spot outdated info, drop us a line and we\'ll fix it right away.',
                },
                {
                  q: 'Is this free?',
                  a: 'Yes, completely free. Always will be.',
                },
              ].map((faq, idx) => (
                <Card key={idx} className="p-6 md:p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm card-hover">
                  <h3 className="font-bold text-foreground mb-3 text-lg" style={{ fontFamily: 'var(--font-heading)' }}>{faq.q}</h3>
                  <p className="text-foreground/70 leading-relaxed">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
