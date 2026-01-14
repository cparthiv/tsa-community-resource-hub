import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { GradientText } from '@/components/gradient-text'

export function SubmissionCTA() {
  return (
    <section id="submit" className="py-20 md:py-40 relative overflow-hidden">
      {/* Background pattern and gradients */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 gradient-primary opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 gradient-accent opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Card className="p-12 md:p-20 border-2 border-border/50 text-center max-w-3xl mx-auto bg-card/80 backdrop-blur-md shadow-glow relative overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 gradient-primary opacity-5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 gradient-accent opacity-5 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Know a <GradientText variant="primary">Resource</GradientText>?
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed max-w-xl mx-auto" style={{ fontFamily: 'var(--font-display)' }}>
              Know a great resource we're missing? Share it with us and help your neighbors find the support they need.
            </p>
            
            <Button asChild size="lg" className="btn-gradient text-lg px-8 py-6 shadow-glow group">
              <Link href="/submit" className="flex items-center gap-2">
                Submit a Resource
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
