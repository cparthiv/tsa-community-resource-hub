'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Heart, Users, Lightbulb, Target } from 'lucide-react'

const missionValues = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We believe in the inherent worth of every community member and approach our work with empathy and understanding.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We strengthen neighborhoods by connecting residents with the resources and support they need to thrive.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously seek new ways to address community challenges and improve access to vital services.',
  },
  {
    icon: Target,
    title: 'Accessibility',
    description: 'We ensure that all resources are easy to find, understand, and access for every member of our community.',
  },
]

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="section-header mb-6">Our Mission</h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              To empower our community by creating an inclusive, accessible hub that connects residents with the resources, 
              services, and support they need to build stronger lives and neighborhoods.
            </p>
            <div className="h-1 w-20 bg-primary mx-auto animate-scale-in"></div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="section-header mb-4">Our Core Values</h2>
            <p className="section-subtitle">Guiding principles that shape everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionValues.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="p-8 h-full border border-border card-hover bg-secondary/50 hover:bg-secondary/70">
                    <Icon className="w-12 h-12 text-primary mb-4 animate-pulse-soft" />
                    <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">{value.description}</p>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement Deep Dive */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="section-header mb-6">Why We Exist</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Every member of our community deserves access to quality resources and support. Yet many residents don't know where 
                to find help, don't have time to search multiple sources, or face barriers in accessing services they need.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                We created the Community Resource Hub to break down these barriers. By centralizing information about local nonprofits, 
                support services, community events, and programs, we make it easier for residents to find what they need.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Our goal is simple: to be the trusted, comprehensive resource that helps every community member thrive.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-primary/10 rounded-lg p-8 md:p-12 border border-primary/20">
                <div className="space-y-6">
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</p>
                    <p className="text-foreground/70">Community Resources Listed</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</p>
                    <p className="text-foreground/70">Community Members Served</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</p>
                    <p className="text-foreground/70">Access to Resources Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
