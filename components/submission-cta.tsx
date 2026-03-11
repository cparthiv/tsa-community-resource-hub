import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Share2, Users, Lightbulb, Heart } from 'lucide-react'
import Link from 'next/link'
import { GradientText } from '@/components/gradient-text'

export function SubmissionCTA() {
  return (
    <section id="submit" className="py-20 md:py-40 relative overflow-hidden">
      {/* Background pattern and gradients */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 gradient-primary opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 gradient-accent opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Visual representation of community contribution */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center p-8 relative overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 pattern-dots opacity-30"></div>
                
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 gradient-accent opacity-10 blur-3xl"></div>
                
                {/* Icon grid */}
                <div className="relative z-10 grid grid-cols-2 gap-6 md:gap-8">
                  <div className="flex flex-col items-center justify-center">
                    <div className="p-4 md:p-6 bg-primary/10 rounded-lg mb-3 border border-primary/20">
                      <Share2 size={32} className="text-primary" />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-foreground text-center">Share</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="p-4 md:p-6 bg-accent/10 rounded-lg mb-3 border border-accent/20">
                      <Users size={32} className="text-accent" />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-foreground text-center">Connect</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="p-4 md:p-6 bg-primary/10 rounded-lg mb-3 border border-primary/20">
                      <Lightbulb size={32} className="text-primary" />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-foreground text-center">Discover</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="p-4 md:p-6 bg-accent/10 rounded-lg mb-3 border border-accent/20">
                      <Heart size={32} className="text-accent" />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-foreground text-center">Support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 md:p-12 border-2 border-border/50 bg-card/80 backdrop-blur-md shadow-glow relative overflow-hidden">
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-48 h-48 gradient-primary opacity-5 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 gradient-accent opacity-5 blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  Know a <GradientText variant="primary">Resource</GradientText>?
                </h2>
                <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-display)' }}>
                  Know a great resource we're missing? Share it with us and help your neighbors find the support they need.
                </p>
                
                <Button asChild size="lg" className="btn-gradient text-lg px-8 py-6 shadow-glow group w-full md:w-auto">
                  <Link href="/submit" className="flex items-center gap-2 justify-center">
                    Submit a Resource
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
