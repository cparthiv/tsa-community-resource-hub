'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname?.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border-b border-border/50 shadow-sm">
      <nav className="container mx-auto flex h-18 items-center justify-between px-4 md:px-6">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/#resources" 
            className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all relative ${
              isActive('/') 
                ? 'text-primary' 
                : 'text-foreground/70 hover:text-foreground'
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {isActive('/') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary rounded-full"></span>
            )}
            Resources
          </Link>

          {/* Map */}
          <Link
            href="/map"
            className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all relative ${
              isActive('/map')
                ? 'text-primary'
                : 'text-foreground/70 hover:text-foreground'
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {isActive('/map') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary rounded-full" />
            )}
            Locations
          </Link>

          <Link
            href="/mission"
            className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all relative ${
              isActive('/mission')
                ? 'text-primary'
                : 'text-foreground/70 hover:text-foreground'
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {isActive('/mission') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary rounded-full"></span>
            )}
            Mission
          </Link>
          <Link 
            href="/about" 
            className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all relative ${
              isActive('/about') 
                ? 'text-primary' 
                : 'text-foreground/70 hover:text-foreground'
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {isActive('/about') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary rounded-full"></span>
            )}
            About
          </Link>
          <Button asChild size="sm" className="btn-gradient shadow-glow">
            <Link href="/submit">Submit</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-18 left-0 right-0 border-b border-border bg-background/98 backdrop-blur-md md:hidden shadow-lg">
            <div className="flex flex-col gap-2 p-4">
              <Link
                href="/#resources"
                className="text-sm font-semibold px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>

              {/* ✅ Map Link (Mobile) */}
              <Link
                href="/map"
                className="text-sm font-semibold px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Map
              </Link>

              <Link
                href="/mission"
                className="text-sm font-semibold px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Mission
              </Link>

              <Link
                href="/about"
                className="text-sm font-semibold px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Button
                asChild
                variant="default"
                className="w-full btn-gradient shadow-glow mt-2"
              >
                <Link href="/submit" onClick={() => setIsOpen(false)}>
                  Submit Resource
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
