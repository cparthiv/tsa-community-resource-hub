interface ImagePlaceholderProps {
  label: string
  width?: number
  height?: number
  className?: string
  aspectRatio?: 'square' | 'wide' | 'tall' | 'auto'
}

export function ImagePlaceholder({ 
  label, 
  width = 400, 
  height = 300, 
  className = '',
  aspectRatio = 'auto'
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: 'aspect-square',
    wide: 'aspect-video',
    tall: 'aspect-[3/4]',
    auto: ''
  }

  return (
    <div 
      className={`
        relative overflow-hidden rounded-lg
        bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10
        flex items-center justify-center
        ${aspectClasses[aspectRatio]}
        ${className}
      `}
      style={{ 
        minHeight: aspectRatio === 'auto' ? `${height}px` : undefined,
        width: aspectRatio === 'auto' ? `${width}px` : '100%'
      }}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      {/* Label */}
      <div className="relative z-10 text-center px-4">
        <div className="inline-block px-4 py-2 rounded-lg bg-background/90 backdrop-blur-sm border border-primary/20">
          <p className="text-sm font-medium text-foreground/70">
            [PLACEHOLDER]
          </p>
          <p className="text-xs text-foreground/50 mt-1">
            {label}
          </p>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 gradient-accent opacity-10 blur-3xl"></div>
    </div>
  )
}
