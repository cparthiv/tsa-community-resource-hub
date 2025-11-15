'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, ArrowRight } from 'lucide-react'

const featuredResources = [
  {
    id: 1,
    name: 'Community Food Bank',
    category: 'Food & Nutrition',
    description: 'Weekly food distribution services for families in need, ensuring no one goes hungry.',
    address: '123 Main St',
    phone: '(555) 123-4567',
    icon: '🍎',
  },
  {
    id: 2,
    name: 'Mental Health Support Services',
    category: 'Health & Wellness',
    description: 'Professional counseling and mental health resources available to all community residents.',
    address: '456 Oak Ave',
    phone: '(555) 234-5678',
    icon: '💚',
  },
  {
    id: 3,
    name: 'Youth Education Programs',
    category: 'Education',
    description: 'Comprehensive after-school tutoring and scholarship opportunities for young adults.',
    address: '789 Elm St',
    phone: '(555) 345-6789',
    icon: '📚',
  },
]

export function FeaturedResources() {
  return (
    <section id="featured" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="section-header mb-4">Featured Resources</h2>
          <p className="section-subtitle">Community services that make a real difference</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredResources.map((resource, index) => (
            <div
              key={resource.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card 
                className="overflow-hidden card-hover border border-border flex flex-col h-full"
              >
                <div className="h-24 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-5xl animate-pulse-soft">
                  {resource.icon}
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">
                    {resource.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{resource.name}</h3>
                  <p className="text-foreground/60 text-sm mb-6 leading-relaxed flex-1">{resource.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/70">{resource.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone size={16} className="text-primary flex-shrink-0" />
                      <a href={`tel:${resource.phone}`} className="text-primary hover:underline">{resource.phone}</a>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
