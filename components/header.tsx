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
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-2 focus:bg-primary focus:text-white focus:z-50">
        Skip to main content
      </a>
      <nav className="container mx-auto flex h-18 items-center justify-between px-4 md:px-6" aria-label="Main navigation">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6" role="navigation" aria-label="Desktop navigation links">
          <Link 
            href="/#resources" 
            className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              isActive('/') 
                ? 'text-primary' 
                : 'text-foreground/70 hover:text-foreground'
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            {isActive('/') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary rounded-full"></span>
            )}
            Resources
          </Link>

          {/* Map */}
          <Link
            href="/map"
            className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              isActive('/map')
                ? 'text-primary'
                : 'text-foreground/70 hover:text-foreground'
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
            aria-current={isActive('/map') ? 'page' : undefined}
          >
            {isActive('/map') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary rounded-full" />
            )}
            Locations
          </Link>

          <Link
            href="/mission"
            className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              isActive('/mission')
                ? 'text-primary'
                : 'text-foreground/70 hover:text-foreground'
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
            aria-current={isActive('/mission') ? 'page' : undefined}
          >
            {isActive('/mission') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary rounded-full"></span>
            )}
            Mission
          </Link>
          <Link 
            href="/about" 
            className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              isActive('/about') 
                ? 'text-primary' 
                : 'text-foreground/70 hover:text-foreground'
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
            aria-current={isActive('/about') ? 'page' : undefined}
          >
            {isActive('/about') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary rounded-full"></span>
            )}
            About
          </Link>
          <Link 
            href="/reference" 
            className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              isActive('/reference') 
                ? 'text-primary' 
                : 'text-foreground/70 hover:text-foreground'
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
            aria-current={isActive('/reference') ? 'page' : undefined}
          >
            {isActive('/reference') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary rounded-full"></span>
            )}
            Reference
          </Link>
          <Button asChild size="sm" className="btn-gradient shadow-glow">
            <Link href="/submit">Submit</Link>
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav 
            id="mobile-nav"
            className="absolute top-18 left-0 right-0 border-b border-border bg-background/98 backdrop-blur-md md:hidden shadow-lg"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-2 p-4">
              <Link
                href="/#resources"
                className="text-sm font-semibold px-4 py-3 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                onClick={() => setIsOpen(false)}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Resources
              </Link>

              {/* ✅ Map Link (Mobile) */}
              <Link
                href="/map"
                className="text-sm font-semibold px-4 py-3 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                onClick={() => setIsOpen(false)}
                aria-current={isActive('/map') ? 'page' : undefined}
              >
                Map
              </Link>

              <Link
                href="/mission"
                className="text-sm font-semibold px-4 py-3 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                onClick={() => setIsOpen(false)}
                aria-current={isActive('/mission') ? 'page' : undefined}
              >
                Mission
              </Link>

              <Link
                href="/about"
                className="text-sm font-semibold px-4 py-3 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                onClick={() => setIsOpen(false)}
                aria-current={isActive('/about') ? 'page' : undefined}
              >
                About
              </Link>

              <Link
                href="/reference"
                className="text-sm font-semibold px-4 py-3 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                onClick={() => setIsOpen(false)}
                aria-current={isActive('/reference') ? 'page' : undefined}
              >
                Reference
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
