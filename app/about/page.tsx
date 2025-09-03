import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { AchievementsSection } from "@/components/achievements-section"
import { TeamSection } from "@/components/team-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutSection />
      <AchievementsSection />
      <TeamSection />
      <Footer />
    </div>
  )
}
