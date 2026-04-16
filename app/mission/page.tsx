'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Heart, Users, Lightbulb, Target } from 'lucide-react'
import { ImagePlaceholder } from '@/components/image-placeholder'
import { GradientText } from '@/components/gradient-text'
import Image from 'next/image'

const missionValues = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Everyone in Redmond matters. We treat every person with respect and make sure help is available when they need it.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Strong neighborhoods start with connected neighbors. We bridge the gap between people and the support available in Redmond.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We keep improving how we share information. If there\'s a better way to help people find resources, we\'ll try it.',
  },
  {
    icon: Target,
    title: 'Accessibility',
    description: 'Simple, clear, and easy to use. No matter who you are or what you need, you should be able to find it here quickly.',
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
            <h1 className="section-header mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Our <GradientText variant="primary">Mission</GradientText>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              We're here to make finding help in Redmond simple. No runaround, no confusion. Just straightforward connections between people and the services they need.
            </p>
            <div className="h-1 w-20 gradient-primary mx-auto animate-scale-in mb-12"></div>
            <div className="relative w-full max-w-2xl mx-auto aspect-video overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/mission-hero.png"
                alt="A person receiving help at a community service desk"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="animate-fade-in-up">
                <h2 className="section-header mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  How We <GradientText variant="primary">Started</GradientText>
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    It started with a friend who needed help finding food assistance. They spent hours searching online, calling different numbers, and getting bounced around between organizations. By the time they found what they needed, they were exhausted and frustrated.
                  </p>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    That got us thinking. Redmond has amazing resources. Food banks, housing help, job training, health services. But finding them? That's the hard part. Information is scattered across websites, flyers, and word-of-mouth. There had to be a better way.
                  </p>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    So we started building a list. We reached out to local nonprofits, visited community centers, and talked to people who actually use these services. We wanted to know what works, what doesn't, and what's missing. In 2024, we launched this hub with 50 verified Redmond resources. Now we're growing every day, thanks to neighbors who share new resources with us.
                  </p>
                </div>
              </div>
              <div className="relative animate-fade-in-up aspect-square overflow-hidden rounded-2xl" style={{ animationDelay: '100ms' }}>
                <Image
                  src="/images/mission-started.png"
                  alt="Volunteers working together to build a porch for a community member's home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative animate-slide-in-left order-2 md:order-1 aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/mission-matters.png"
                alt="Front entrance of a community center building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="animate-slide-in-right order-1 md:order-2">
              <h2 className="section-header mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Why This <GradientText variant="accent">Matters</GradientText>
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-foreground/70 leading-relaxed text-lg">
                  Finding help shouldn't be hard. But too often, people in Redmond don't know where to look. Information is scattered across websites, flyers, and word-of-mouth. By the time someone finds what they need, they've already wasted hours searching.
                </p>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  We built this hub to fix that. Everything in one place: food banks, housing help, job training, health services. No more hunting through multiple sites or calling around town.
                </p>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  Our goal? Be the first place Redmond residents check when they need help. Simple as that.
                </p>
              </div>
              <div className="bg-primary/10 rounded-lg p-8 border-2 border-primary/20">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</p>
                    <p className="text-foreground/70 text-sm">Resources Listed</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">Grows</p>
                    <p className="text-foreground/70 text-sm">Every Day</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</p>
                    <p className="text-foreground/70 text-sm">Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 animate-fade-in-up text-center">
            <h2 className="section-header mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              What <GradientText variant="primary">Drives</GradientText> Us
            </h2>
            <p className="section-subtitle">The values that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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

      {/* What's Next */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="animate-fade-in-up">
            <h2 className="section-header mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              What's <GradientText variant="accent">Next</GradientText>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              We're keeping it simple. Our focus is making sure every Redmond resident can find help when they need it. Here's what we're working on:
            </p>
            <ul className="space-y-4 text-foreground/70">
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Adding more resources as we discover them</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Making the site easier to use on phones</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Partnering with more local organizations</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Keeping everything up-to-date and accurate</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
