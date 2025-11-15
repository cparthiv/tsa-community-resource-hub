import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-foreground mb-3">Community Hub</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">Connecting residents with local resources that strengthen our community.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-foreground/60 hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="#resources" className="text-foreground/60 hover:text-foreground transition-colors">Resources</Link></li>
              <li><Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/submit" className="text-foreground/60 hover:text-foreground transition-colors">Submit</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:info@hub.local" className="text-foreground/60 hover:text-foreground transition-colors">Contact Us</a></li>
              <li><Link href="/faq" className="text-foreground/60 hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="text-foreground/60 hover:text-foreground transition-colors">Privacy</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/terms" className="text-foreground/60 hover:text-foreground transition-colors">Terms</Link></li>
              <li><Link href="/accessibility" className="text-foreground/60 hover:text-foreground transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/50">
          <p>&copy; 2025 Community Resource Hub. All rights reserved.</p>
          <p>Serving our community, one resource at a time</p>
        </div>
      </div>
    </footer>
  )
}
