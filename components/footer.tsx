import Link from 'next/link'
import { Logo } from '@/components/logo'

export function Footer() {
  return (
    <footer className="relative border-t-2 border-border/50 bg-background py-16 md:py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 gradient-primary opacity-5 blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 gradient-accent opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-foreground/70 leading-relaxed">
              Connecting Redmond residents with local resources and support services.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#resources" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/reference" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                  Reference
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                  Submit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@redmondcommunityhub.org" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/terms" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-foreground/60">
            &copy; 2025 Redmond Community Resource Hub. All rights reserved.
          </p>
          <p className="text-foreground/60 font-medium">
            Serving Redmond, one resource at a time
          </p>
        </div>
      </div>
    </footer>
  )
}
