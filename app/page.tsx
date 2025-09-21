import { HeroSection } from "@/components/hero-section"
import { ResultsSection } from "@/components/results-section"
import { ProductSection } from "@/components/product-section"
import { RevenueCalculator } from "@/components/revenue-calculator"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { VideoSection } from "@/components/video-section"
import { ReviewsSection } from "@/components/reviews-section"
import { TeamSection } from "@/components/team-section"
import { ExclusivitySection } from "@/components/exclusivity-section"
import { BookingSection } from "@/components/booking-section"
import { AISalesChatbox } from "@/components/ai-sales-chatbox"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ResultsSection />
      <HowItWorksSection />
      <ProductSection />
      <RevenueCalculator />
      <VideoSection />
      <ReviewsSection />
      <TeamSection />
      <ExclusivitySection />
      <BookingSection />
      <AISalesChatbox />
    </main>
  )
}
