import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero */}
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-serif)' }}>About Redmond Community Resource Hub</h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              A simple directory of local resources, built by Redmond residents for Redmond residents. Everything you need to know about community services in one place.
            </p>
          </div>

          {/* How It Works */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-serif)' }}>How It Works</h2>
            <div className="space-y-6 text-foreground/70">
              <p className="leading-relaxed">
                We maintain a directory of verified Redmond community resources. Each listing includes contact information, services offered, and who can access them. Everything is searchable and organized by category.
              </p>
              <p className="leading-relaxed">
                We work directly with local nonprofits and service providers to keep information accurate. When things change, we update our listings. If you notice something outdated, let us know and we'll fix it.
              </p>
              <p className="leading-relaxed">
                Anyone can submit a new resource through our Submit page. We review each submission before adding it to make sure it's legitimate and helpful for the community.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ fontFamily: 'var(--font-serif)' }}>Frequently Asked Questions</h2>
            
            <div className="space-y-4">
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
                <Card key={idx} className="p-6 border border-border">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-foreground/70">{faq.a}</p>
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
