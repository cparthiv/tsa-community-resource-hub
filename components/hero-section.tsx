import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { GradientText } from '@/components/gradient-text'

export function HeroSection() {
  return (
    <section className="relative w-full py-24 md:py-40 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 gradient-primary opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 gradient-accent opacity-10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight" 
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Community{' '}
            <GradientText variant="primary" className="inline-block">
              Resources
            </GradientText>{' '}
            Made Simple
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-display)' }}>
            Your one-stop guide to Redmond's nonprofits, support services, and community programs. Find what you need, when you need it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-gradient text-lg px-8 py-6 shadow-glow">
              <Link href="#resources" className="flex items-center gap-2">
                <Search size={20} />
                Explore Resources
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
