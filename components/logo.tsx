import Link from 'next/link'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
          <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
            R
          </span>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full gradient-accent opacity-80"></div>
      </div>
      <span 
        className="text-xl font-bold gradient-text" 
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Redmond Community Hub
      </span>
    </Link>
  )
}
