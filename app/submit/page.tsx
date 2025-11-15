'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Check, AlertCircle } from 'lucide-react'

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    address: '',
    phone: '',
    website: '',
    contact: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Resource name is required'
    if (!formData.category) newErrors.category = 'Category is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.contact.trim()) newErrors.contact = 'Contact name is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setSubmitted(true)
      setFormData({
        name: '',
        category: '',
        description: '',
        address: '',
        phone: '',
        website: '',
        contact: '',
      })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="mb-12">
            <h1 className="section-header mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Submit a Resource</h1>
            <p className="section-subtitle">Know a great Redmond resource we're missing? Share it with us and help your neighbors.</p>
          </div>

          {submitted && (
            <Card className="mb-8 p-6 bg-green-50 border border-green-200 flex items-start gap-4">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Thanks for sharing!</h3>
                <p className="text-green-800 text-sm">We'll take a look and add it to the directory soon.</p>
              </div>
            </Card>
          )}

          <form onSubmit={handleSubmit}>
            <Card className="p-8 md:p-10 space-y-8">
              {/* Resource Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                  Resource Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Hopelink"
                  className={`border-border focus:border-primary/50 focus:ring-primary/20 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-2 flex items-center gap-2">
                    <AlertCircle size={16} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-foreground mb-3">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 ${
                    errors.category ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Select a category</option>
                  <option value="Food & Nutrition">Food & Nutrition</option>
                  <option value="Health & Wellness">Health & Wellness</option>
                  <option value="Education">Education</option>
                  <option value="Housing">Housing</option>
                  <option value="Employment">Employment</option>
                  <option value="Senior Services">Senior Services</option>
                  <option value="Legal">Legal</option>
                  <option value="Family Services">Family Services</option>
                  <option value="Other">Other</option>
                </select>
                {errors.category && (
                  <p className="text-red-600 text-sm mt-2 flex items-center gap-2">
                    <AlertCircle size={16} /> {errors.category}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-foreground mb-3">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="What services do they offer? Who can use them?"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 resize-none ${
                    errors.description ? 'border-red-500' : ''
                  }`}
                />
                {errors.description && (
                  <p className="text-red-600 text-sm mt-2 flex items-center gap-2">
                    <AlertCircle size={16} /> {errors.description}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-foreground mb-3">
                  Address
                </label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street address"
                  className="border-border focus:border-primary/50 focus:ring-primary/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-3">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className={`border-border focus:border-primary/50 focus:ring-primary/20 ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-2 flex items-center gap-2">
                    <AlertCircle size={16} /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Website */}
              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-foreground mb-3">
                  Website
                </label>
                <Input
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="www.example.org"
                  className="border-border focus:border-primary/50 focus:ring-primary/20"
                />
              </div>

              {/* Contact Name */}
              <div>
                <label htmlFor="contact" className="block text-sm font-semibold text-foreground mb-3">
                  Your Name/Organization *
                </label>
                <Input
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Your name or organization"
                  className={`border-border focus:border-primary/50 focus:ring-primary/20 ${errors.contact ? 'border-red-500' : ''}`}
                />
                {errors.contact && (
                  <p className="text-red-600 text-sm mt-2 flex items-center gap-2">
                    <AlertCircle size={16} /> {errors.contact}
                  </p>
                )}
              </div>

              <div className="flex gap-4 pt-6 border-t border-border">
                <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1">
                  Submit Resource
                </Button>
              </div>

              <p className="text-xs text-foreground/50">* Required fields</p>
            </Card>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
