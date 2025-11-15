'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, ArrowRight, Globe } from 'lucide-react'

const featuredResources = [
  {
    id: 1,
    name: 'Hopelink',
    category: 'Food & Nutrition',
    description: 'Food bank services, energy assistance, and emergency support for families in Redmond. Open to all community members in need.',
    address: '15910 NE 85th St, Redmond, WA 98052',
    phone: '(555) 123-4567',
    website: 'hopelink.org',
    icon: '🍎',
  },
  {
    id: 2,
    name: 'Redmond Community Resource Center',
    category: 'Health & Wellness',
    description: 'Located at the Redmond Library, offering mental health assessments, substance use support, housing assistance, and employment services.',
    address: '15990 NE 85th St, Redmond, WA 98052',
    phone: '(555) 234-5678',
    website: 'redmond.gov',
    icon: '💚',
  },
  {
    id: 3,
    name: 'YWCA Family Village Redmond',
    category: 'Housing',
    description: 'Permanent supportive housing with programs including Working Wardrobe, employment training, and family support services.',
    address: '16650 NE 80th St, Redmond, WA 98052',
    phone: '(555) 345-6789',
    website: 'ywcaworks.org',
    icon: '🏠',
  },
]

export function FeaturedResources() {
  return (
    <section id="featured" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="section-header mb-4">Featured Resources</h2>
          <p className="section-subtitle">Trusted local organizations serving Redmond residents</p>
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
                    {resource.website && (
                      <div className="flex items-center gap-3 text-sm">
                        <Globe size={16} className="text-primary flex-shrink-0" />
                        <a href={`https://${resource.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{resource.website}</a>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                    onClick={() => resource.website && window.open(`https://${resource.website}`, '_blank')}
                  >
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
