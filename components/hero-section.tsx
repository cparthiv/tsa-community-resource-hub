import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative w-full bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-8 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Community <span className="text-primary">Resources</span> Made Simple
          </h1>
          <p className="text-xl text-foreground/60 mb-12 leading-relaxed max-w-2xl mx-auto">
            Your one-stop guide to Redmond's nonprofits, support services, and community programs. Find what you need, when you need it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#resources" className="flex items-center gap-2">
                <Search size={20} />
                Explore Resources
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
