'use client'

import { useState, useMemo, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, MapPin, Phone, Globe, X, Heart } from 'lucide-react'
import { allResources } from '@/lib/resources'

const categories = ['All', ...new Set(allResources.map(r => r.category))]

export function ResourceDirectory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({})
  const [userLikes, setUserLikes] = useState<Set<number>>(new Set())
  const [userId, setUserId] = useState<string>('')

  useEffect(() => {
    // Generate or get user ID
    let id = localStorage.getItem('userId')
    if (!id) {
      id = Math.random().toString(36).substring(2) + Date.now().toString(36)
      localStorage.setItem('userId', id)
    }
    setUserId(id)

    // Fetch likes from API
    fetchLikes()
  }, [])

  const fetchLikes = async () => {
    try {
      const userId = localStorage.getItem('userId')
      const response = await fetch(`/api/likes?userId=${userId}`)
      const data = await response.json()
      setLikeCounts(data.counts)

      // Set user likes from API
      setUserLikes(new Set(data.userLikes.map((id: string) => parseInt(id))))
    } catch (error) {
      console.error('Failed to fetch likes:', error)
    }
  }

  const handleLike = async (id: number) => {
    if (!userId) return

    try {
      const response = await fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resourceId: id, userId }),
      })

      const result = await response.json()

      // Update local state
      setLikeCounts(prev => ({ ...prev, [id]: result.count }))

      if (result.liked) {
        setUserLikes(prev => new Set([...prev, id]))
      } else {
        setUserLikes(prev => {
          const newSet = new Set(prev)
          newSet.delete(id)
          return newSet
        })
      }
    } catch (error) {
      console.error('Failed to toggle like:', error)
    }
  }

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
          <p className="section-subtitle">Browse our directory of Redmond-area services and organizations</p>
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
              
              <div className="space-y-3 text-sm mb-4">
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

              <div className="flex items-center justify-between">
                <Button
                  onClick={() => handleLike(resource.id)}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Heart size={16} className={userLikes.has(resource.id) ? "text-red-500 fill-red-500" : "text-red-500"} />
                  {userLikes.has(resource.id) ? 'Unlike' : 'Like'} ({likeCounts[resource.id] || 0})
                </Button>
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
