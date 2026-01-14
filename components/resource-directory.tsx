'use client'

import { useState, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, MapPin, Phone, Globe, X } from 'lucide-react'
import { ImagePlaceholder } from '@/components/image-placeholder'

const allResources = [
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
    name: 'Redmond Library',
    category: 'Education',
    description: 'Free library services, computer access, educational programs, and community meeting spaces for all ages.',
    address: '15990 NE 85th St, Redmond, WA 98052',
    phone: '(555) 234-5678',
    website: 'kcls.org',
  },
  {
    id: 4,
    name: 'YWCA Family Village Redmond',
    category: 'Housing',
    description: 'Permanent supportive housing with programs including Working Wardrobe, employment training, and family support services.',
    address: '16650 NE 80th St, Redmond, WA 98052',
    phone: '(555) 345-6789',
    website: 'ywcaworks.org',
  },
  {
    id: 5,
    name: 'OneRedmond',
    category: 'Employment',
    description: 'Local chamber of commerce supporting businesses with resources, advocacy, networking events, and community development initiatives.',
    address: '16300 NE 80th St, Redmond, WA 98052',
    phone: '(555) 456-7890',
    website: 'oneredmond.org',
  },
  {
    id: 6,
    name: 'City of Redmond Senior Center',
    category: 'Senior Services',
    description: 'Health and wellness programs, social activities, fitness classes, and support services for Redmond seniors.',
    address: '8703 160th Ave NE, Redmond, WA 98052',
    phone: '(555) 234-5678',
    website: 'redmond.gov',
  },
  {
    id: 7,
    name: 'King County Bar Association Pro Bono Services',
    category: 'Legal',
    description: 'Free legal assistance and consultation for low-income residents, including family law, housing, and consumer protection.',
    address: '1200 5th Ave, Seattle, WA 98101',
    phone: '(555) 567-8901',
    website: 'kcba.org',
  },
  {
    id: 8,
    name: 'City of Redmond Human Services',
    category: 'Family Services',
    description: 'Funding and support for local nonprofits offering child care, counseling, employment assistance, and medical care for families.',
    address: '15670 NE 85th St, Redmond, WA 98052',
    phone: '(555) 234-5678',
    website: 'redmond.gov',
  },
  {
    id: 9,
    name: 'Indian American Community Services',
    category: 'Community Services',
    description: 'Inter-generational programming, community support, and resources for small businesses serving the Indian American community in Redmond.',
    address: '15220 NE 40th St, Redmond, WA 98052',
    phone: '(555) 678-9012',
    website: 'iacswa.org',
  },
]

const categories = ['All', ...new Set(allResources.map(r => r.category))]

export function ResourceDirectory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredResources = useMemo(() => {
    return allResources.filter(resource => {
      const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <section id="resources" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="section-header mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Resource Directory</h2>
          <p className="section-subtitle">Browse our directory of Redmond-area services and organizations</p>
        </div>

        <div className="mb-10 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
            <Input
              placeholder="Search resources by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 text-base border-2 border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors p-1 rounded-full hover:bg-muted"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-3 justify-center">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              className={
                selectedCategory === category 
                  ? 'btn-gradient shadow-glow text-white border-0' 
                  : 'border-2 border-border/50 hover:border-primary/50 hover:bg-primary/5'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Results counter */}
        <div className="text-sm text-foreground/60 mb-8 text-center font-medium">
          Found {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => (
            <Card 
              key={resource.id} 
              className="card-hover overflow-hidden border-2 border-border/50 flex flex-col bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="relative h-40 overflow-hidden">
                <ImagePlaceholder 
                  label={`Resource - ${resource.category}`}
                  className="w-full h-full rounded-none"
                  aspectRatio="wide"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block w-fit px-3 py-1 rounded-full badge-gradient text-xs font-bold mb-4">
                  {resource.category}
                </span>
                
                <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {resource.name}
                </h3>
                <p className="text-foreground/70 text-sm mb-6 leading-relaxed flex-1">{resource.description}</p>
                
                <div className="space-y-3 text-sm pt-4 border-t border-border/50">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">{resource.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-primary flex-shrink-0" />
                    <a href={`tel:${resource.phone}`} className="text-primary hover:underline font-medium">{resource.phone}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe size={16} className="text-primary flex-shrink-0" />
                    <a href={`https://${resource.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline truncate text-xs font-medium">
                      {resource.website}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-6 rounded-2xl bg-muted/50 border-2 border-border/50">
              <p className="text-lg text-foreground/70 mb-2 font-semibold">No resources found</p>
              <p className="text-sm text-foreground/50">Try adjusting your search or filter.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
