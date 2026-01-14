'use client'

import { useState, useEffect, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, ArrowRight, Globe } from 'lucide-react'
import { allResources } from '@/lib/resources'

export function FeaturedResources() {
  const [likes, setLikes] = useState<Record<number, number>>({})

  useEffect(() => {
    const storedLikes = localStorage.getItem('resourceLikes')
    if (storedLikes) {
      setLikes(JSON.parse(storedLikes))
    }
  }, [])

  const featuredResources = useMemo(() => {
    return allResources
      .map(resource => ({ ...resource, likes: likes[resource.id] || 0 }))
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 3)
  }, [likes])
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
