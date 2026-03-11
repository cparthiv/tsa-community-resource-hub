'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Check, AlertCircle } from 'lucide-react'
import { GradientText } from '@/components/gradient-text'

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
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Header section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 pattern-grid opacity-10" aria-hidden="true"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Submit a <GradientText variant="primary">Resource</GradientText>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-display)' }}>
            Know a great Redmond resource we're missing? Share it with us and help your neighbors.
          </p>
        </div>
      </section>
      
      <main id="main-content" className="flex-1 py-12 md:py-16 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 pattern-dots opacity-10" aria-hidden="true"></div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-2xl relative z-10">

          {submitted && (
            <Card 
              className="mb-8 p-6 bg-primary/10 border-2 border-primary/30 flex items-start gap-4 animate-fade-in-up"
              role="alert"
              aria-live="polite"
            >
              <div className="p-2 rounded-full bg-primary/20">
                <Check className="text-primary flex-shrink-0" size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Thanks for sharing!</h3>
                <p className="text-foreground/70 text-sm">We'll take a look and add it to the directory soon.</p>
              </div>
            </Card>
          )}

          <form onSubmit={handleSubmit} noValidate aria-label="Submit resource form">
            <Card className="p-8 md:p-10 space-y-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm shadow-lg relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 gradient-primary opacity-5 blur-3xl" aria-hidden="true"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 gradient-accent opacity-5 blur-3xl" aria-hidden="true"></div>
              <div className="relative z-10 space-y-8">
                {/* Resource Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    Resource Name <span aria-label="required">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Hopelink"
                    className={`border-2 border-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 py-3 ${errors.name ? 'border-destructive' : ''}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-600 text-sm mt-2 flex items-center gap-2">
                      <AlertCircle size={16} aria-hidden="true" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    Category <span aria-label="required">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 ${
                      errors.category ? 'border-destructive' : ''
                    }`}
                    aria-invalid={!!errors.category}
                    aria-describedby={errors.category ? 'category-error' : undefined}
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
                    <p id="category-error" className="text-red-600 text-sm mt-2 flex items-center gap-2">
                      <AlertCircle size={16} aria-hidden="true" /> {errors.category}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    Description <span aria-label="required">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="What services do they offer? Who can use them?"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 resize-none ${
                      errors.description ? 'border-destructive' : ''
                    }`}
                    aria-invalid={!!errors.description}
                    aria-describedby={errors.description ? 'description-error' : undefined}
                  />
                  {errors.description && (
                    <p id="description-error" className="text-red-600 text-sm mt-2 flex items-center gap-2">
                      <AlertCircle size={16} aria-hidden="true" /> {errors.description}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    Address
                  </label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street address"
                    className="border-2 border-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 py-3"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    Phone Number <span aria-label="required">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className={`border-2 border-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 py-3 ${errors.phone ? 'border-destructive' : ''}`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-600 text-sm mt-2 flex items-center gap-2">
                      <AlertCircle size={16} aria-hidden="true" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Website */}
                <div>
                  <label htmlFor="website" className="block text-sm font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    Website
                  </label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="www.example.org"
                    className="border-2 border-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 py-3"
                  />
                </div>

                {/* Contact Name */}
                <div>
                  <label htmlFor="contact" className="block text-sm font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    Your Name/Organization <span aria-label="required">*</span>
                  </label>
                  <Input
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Your name or organization"
                    className={`border-2 border-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 py-3 ${errors.contact ? 'border-destructive' : ''}`}
                    aria-invalid={!!errors.contact}
                    aria-describedby={errors.contact ? 'contact-error' : undefined}
                  />
                  {errors.contact && (
                    <p id="contact-error" className="text-red-600 text-sm mt-2 flex items-center gap-2">
                      <AlertCircle size={16} aria-hidden="true" /> {errors.contact}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t-2 border-border/50">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="btn-gradient flex-1 shadow-glow text-lg py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Submit Resource
                </Button>
              </div>

              <p className="text-xs text-foreground/50 text-center">* Required fields</p>
            </Card>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
