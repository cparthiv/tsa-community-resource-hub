import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function SubmissionCTA() {
  return (
    <section id="submit" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="p-12 md:p-16 border border-border text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Know a Resource?</h2>
          <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
            Know a great resource we're missing? Share it with us and help your neighbors find the support they need.
          </p>
          
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
            <Link href="/submit" className="flex items-center gap-2">
              Submit a Resource
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </Card>
      </div>
    </section>
  )
}
