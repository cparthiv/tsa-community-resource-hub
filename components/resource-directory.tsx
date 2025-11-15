'use client'

import { useState, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, MapPin, Phone, Globe, X } from 'lucide-react'

const allResources = [
  {
    id: 1,
    name: 'Community Food Bank',
    category: 'Food & Nutrition',
    description: 'Weekly food distribution services for families in need',
    address: '123 Main St',
    phone: '(555) 123-4567',
    website: 'www.communityfoodbank.org',
  },
  {
    id: 2,
    name: 'Mental Health Support Services',
    category: 'Health & Wellness',
    description: 'Free counseling and mental health resources',
    address: '456 Oak Ave',
    phone: '(555) 234-5678',
    website: 'www.mentalhealthsupport.org',
  },
  {
    id: 3,
    name: 'Youth Education Programs',
    category: 'Education',
    description: 'After-school tutoring and scholarships',
    address: '789 Elm St',
    phone: '(555) 345-6789',
    website: 'www.youthprograms.org',
  },
  {
    id: 4,
    name: 'Housing Assistance Program',
    category: 'Housing',
    description: 'Affordable housing resources and counseling',
    address: '321 Park Ln',
    phone: '(555) 456-7890',
    website: 'www.housinghelp.org',
  },
  {
    id: 5,
    name: 'Job Training Center',
    category: 'Employment',
    description: 'Career training and job placement services',
    address: '654 Maple Dr',
    phone: '(555) 567-8901',
    website: 'www.jobtrainingcenter.org',
  },
  {
    id: 6,
    name: 'Senior Wellness Program',
    category: 'Senior Services',
    description: 'Health and wellness programs for seniors',
    address: '987 Cedar St',
    phone: '(555) 678-9012',
    website: 'www.seniorwellness.org',
  },
  {
    id: 7,
    name: 'Legal Aid Services',
    category: 'Legal',
    description: 'Free legal assistance and consultation',
    address: '147 Birch Ave',
    phone: '(555) 789-0123',
    website: 'www.legalaid.org',
  },
  {
    id: 8,
    name: 'Community Health Clinic',
    category: 'Health & Wellness',
    description: 'Primary healthcare services for all',
    address: '258 Pine Rd',
    phone: '(555) 890-1234',
    website: 'www.communityhealthclinic.org',
  },
  {
    id: 9,
    name: 'Childcare Support Services',
    category: 'Family Services',
    description: 'Affordable childcare and parenting resources',
    address: '369 Spruce Ln',
    phone: '(555) 901-2345',
    website: 'www.childcarehelp.org',
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
    <section id="resources" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="section-header mb-4">Resource Directory</h2>
          <p className="section-subtitle">Search and filter to find resources that serve your community needs</p>
        </div>

        <div className="mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-4 text-foreground/40" size={20} />
            <Input
              placeholder="Search resources by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 text-base border-border focus:border-primary/50 focus:ring-primary/20"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-4 text-foreground/40 hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              className={selectedCategory === category ? 'bg-primary hover:bg-primary/90' : 'border-border hover:border-primary/50'}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Results counter */}
        <div className="text-sm text-foreground/60 mb-8">
          Found {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => (
            <Card key={resource.id} className="card-hover p-7 border border-border flex flex-col">
              <span className="inline-block w-fit px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">
                {resource.category}
              </span>
              
              <h3 className="text-lg font-bold text-foreground mb-2">{resource.name}</h3>
              <p className="text-foreground/60 text-sm mb-6 leading-relaxed flex-1">{resource.description}</p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/70">{resource.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <a href={`tel:${resource.phone}`} className="text-primary hover:underline">{resource.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-primary flex-shrink-0" />
                  <a href={`https://${resource.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline truncate text-xs">
                    {resource.website}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-foreground/60 mb-2">No resources found</p>
            <p className="text-sm text-foreground/50">Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}
