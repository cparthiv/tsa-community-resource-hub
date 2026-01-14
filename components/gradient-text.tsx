interface GradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'accent'
}

export function GradientText({ children, className = '', variant = 'primary' }: GradientTextProps) {
  const gradientClass = variant === 'primary' ? 'gradient-text' : 'gradient-text-accent'
  
  return (
    <span className={`${gradientClass} ${className}`}>
      {children}
    </span>
  )
}
