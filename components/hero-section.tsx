import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Professional Hook */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-lg text-sm font-semibold mb-8 border border-primary/20">
              <Zap className="w-4 h-4" />
              Commercial EV Charging Solutions
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6">
              While Your Competitors Install <span className="text-secondary">EV Charging Stations</span> You're
              Watching <span className="text-secondary">Customers Drive Away</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
              {"Cut your electric bills, boost property value, and earn long-term passive income. Act now and government incentives can cover most installation costs for a limited time!"}
            </p>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-lg font-medium text-accent">
                Flexible Financing Available - $0 Down Options &amp; Low Monthly Payments
              </p>
            </div>
          </div>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View Case Studies
              <TrendingUp className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Professional Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground mb-16 text-xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              200+ Successful Installations
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              $10M+ Revenue Generated
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Limited Time Incentives
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
