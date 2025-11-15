'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'

const storyMilestones = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'We recognized a critical need: residents struggled to find local resources and support services scattered across multiple platforms.',
  },
  {
    year: '2021',
    title: 'Building the Vision',
    description: 'We partnered with local nonprofits and community organizations to understand their needs and create a comprehensive directory.',
  },
  {
    year: '2022',
    title: 'Launch',
    description: 'The Community Resource Hub launched with over 300 verified resources across 15 categories.',
  },
  {
    year: '2023',
    title: 'Growing Impact',
    description: 'We expanded to 500+ resources, added advanced search features, and supported 10,000+ community members in finding help.',
  },
  {
    year: '2024',
    title: 'Community Submission',
    description: 'We empowered community members to submit and share new resources, creating a truly collaborative hub.',
  },
  {
    year: 'Today',
    title: 'Ongoing Mission',
    description: 'We continue to grow, improve, and serve as a trusted resource for our entire community.',
  },
]

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="section-header mb-6">Our Story</h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              From a simple idea to a thriving community resource—discover how we're making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="section-header mb-4">Our Journey</h2>
            <p className="section-subtitle">Key milestones that shaped the Community Resource Hub</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 to-primary/0 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {storyMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`md:flex animate-fade-in-up ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="p-6 md:p-8 border border-border card-hover bg-secondary/50 relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-4 md:left-1/2 top-8 w-8 h-8 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 flex items-center justify-center">
                        <div className="w-2 h-2 bg-background rounded-full"></div>
                      </div>

                      <p className="text-sm font-bold text-primary mb-2">{milestone.year}</p>
                      <h3 className="text-xl font-bold text-foreground mb-3">{milestone.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{milestone.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 animate-fade-in-up text-center">
            <h2 className="section-header mb-4">Our Impact</h2>
            <p className="section-subtitle">Making real difference in our community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: '500+', label: 'Resources Verified' },
              { number: '10K+', label: 'Members Helped' },
              { number: '15', label: 'Service Categories' },
            ].map((stat, index) => (
              <div
                key={index}
                className="animate-scale-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="p-8 border border-border bg-background">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-foreground/70">{stat.label}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for Future */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="animate-fade-in-up">
            <h2 className="section-header mb-6">Looking Forward</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              We're just getting started. Our vision is to create the most comprehensive, user-friendly community resource hub that 
              serves as a lifeline for residents in need.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              We're working toward:
            </p>
            <ul className="space-y-4 text-foreground/70">
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Expanding to more neighborhoods and communities</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Adding multilingual support to serve diverse communities</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Building mobile apps for easier access on-the-go</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Creating partnerships with more organizations and service providers</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Measuring and sharing impact data with the community</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
