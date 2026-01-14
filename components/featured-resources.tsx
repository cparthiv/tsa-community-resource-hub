'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, ArrowRight, Globe } from 'lucide-react'
import { ImagePlaceholder } from '@/components/image-placeholder'

const featuredResources = [
  {
    id: 1,
    name: 'Hopelink',
    category: 'Food & Nutrition',
    description: 'Food bank services, energy assistance, and emergency support for families in Redmond. Open to all community members in need.',
    address: '15910 NE 85th St, Redmond, WA 98052',
    phone: '(555) 123-4567',
    website: 'hopelink.org',
  },
  {
    id: 2,
    name: 'Redmond Community Resource Center',
    category: 'Health & Wellness',
    description: 'Located at the Redmond Library, offering mental health assessments, substance use support, housing assistance, and employment services.',
    address: '15990 NE 85th St, Redmond, WA 98052',
    phone: '(555) 234-5678',
    website: 'redmond.gov',
  },
  {
    id: 3,
    name: 'YWCA Family Village Redmond',
    category: 'Housing',
    description: 'Permanent supportive housing with programs including Working Wardrobe, employment training, and family support services.',
    address: '16650 NE 80th St, Redmond, WA 98052',
    phone: '(555) 345-6789',
    website: 'ywcaworks.org',
  },
]

export function FeaturedResources() {
  return (
    <section id="featured" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 gradient-primary opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 gradient-accent opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 animate-fade-in-up text-center">
          <h2 className="section-header mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Featured Resources</h2>
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
                className="overflow-hidden card-hover border-2 border-border/50 flex flex-col h-full bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-glow transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="relative h-48 overflow-hidden">
                  <ImagePlaceholder 
                    label={`Resource - ${resource.category}`}
                    className="w-full h-full rounded-none"
                    aspectRatio="wide"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="badge-gradient px-3 py-1 rounded-full text-xs font-bold text-foreground">
                      {resource.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {resource.name}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-6 leading-relaxed flex-1">{resource.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/70">{resource.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone size={16} className="text-primary flex-shrink-0" />
                      <a href={`tel:${resource.phone}`} className="text-primary hover:underline font-medium">{resource.phone}</a>
                    </div>
                    {resource.website && (
                      <div className="flex items-center gap-3 text-sm">
                        <Globe size={16} className="text-primary flex-shrink-0" />
                        <a href={`https://${resource.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">{resource.website}</a>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full btn-gradient group shadow-glow"
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
