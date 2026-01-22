import Image from 'next/image'
import { ImagePlaceholder } from '@/components/image-placeholder'

interface ResourceImageProps {
  image?: string
  alt: string
  category: string
  className?: string
  aspectRatio?: 'square' | 'wide' | 'tall' | 'auto'
}

export function ResourceImage({ 
  image, 
  alt, 
  category, 
  className = '', 
  aspectRatio = 'wide' 
}: ResourceImageProps) {
  // If image path is provided, use Next.js Image component
  if (image) {
    const aspectClasses = {
      square: 'aspect-square',
      wide: 'aspect-video',
      tall: 'aspect-[3/4]',
      auto: ''
    }

    return (
      <div className={`relative w-full overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    )
  }

  // Fallback to ImagePlaceholder if no image provided
  return (
    <ImagePlaceholder 
      label={`Resource - ${category}`}
      className={className}
      aspectRatio={aspectRatio}
    />
  )
}
