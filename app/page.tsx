import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturedResources } from '@/components/featured-resources'
import { ResourceDirectory } from '@/components/resource-directory'
import { SubmissionCTA } from '@/components/submission-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedResources />
      <ResourceDirectory />
      <SubmissionCTA />
      <Footer />
    </div>
  )
}
