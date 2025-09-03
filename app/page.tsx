import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ProjectsSection } from "@/components/projects-section"
import { BuildWorldSection } from "@/components/build-world-section"
import { ClienteleSection } from "@/components/clientele-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AchievementsSection />
      <ProjectsSection />
      <BuildWorldSection />
      <ClienteleSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
