'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-bold text-primary">Community Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#resources" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Resources
          </Link>
          <Link href="/mission" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Mission
          </Link>
          <Link href="/story" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Story
          </Link>
          <Link href="/#featured" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Featured
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            About
          </Link>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/submit">Submit</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 border-b border-border bg-background md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="/#resources" className="text-sm font-medium hover:text-primary">
                Resources
              </Link>
              <Link href="/mission" className="text-sm font-medium hover:text-primary">
                Mission
              </Link>
              <Link href="/story" className="text-sm font-medium hover:text-primary">
                Story
              </Link>
              <Link href="/#featured" className="text-sm font-medium hover:text-primary">
                Featured
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary">
                About
              </Link>
              <Button asChild variant="default" className="w-full bg-primary hover:bg-primary/90">
                <Link href="/submit">Submit Resource</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
