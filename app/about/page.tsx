import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Users, Target, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero */}
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Our Community Hub</h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              The Community Resource Hub is dedicated to connecting residents with the essential services, programs, and support they need to thrive. We believe that every person deserves easy access to community resources.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center card-hover">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Target className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-foreground/70">To eliminate barriers to community resources by providing comprehensive, searchable information about local services and support.</p>
            </Card>

            <Card className="p-8 text-center card-hover">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-secondary/20">
                  <Heart className="text-accent" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Values</h3>
              <p className="text-foreground/70">Accessibility, inclusivity, and community empowerment guide everything we do to serve those in need.</p>
            </Card>

            <Card className="p-8 text-center card-hover">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-secondary/20">
                  <Users className="text-accent" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Community</h3>
              <p className="text-foreground/70">We partner with local organizations to ensure our hub stays current and represents the full range of available resources.</p>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: 'How do I find resources on this hub?',
                  a: 'Use the search bar or browse by category. You can also filter resources to find exactly what you\'re looking for.',
                },
                {
                  q: 'Can I submit a resource?',
                  a: 'We welcome submissions from community members. Visit our Submit page to add a new resource.',
                },
                {
                  q: 'Is the information on this hub always current?',
                  a: 'We work hard to keep our information up-to-date. If you notice outdated information, please contact us.',
                },
                {
                  q: 'Is there a cost to use this hub?',
                  a: 'No, the Community Resource Hub is completely free to access and use.',
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
