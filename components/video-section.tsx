import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"

export function VideoSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Watch How We Transformed <span className="text-primary">Sarah's Gas Station</span> Into a $75K/Month
            Goldmine
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            See the complete transformation process in this 2-minute case study. From struggling with declining gas
            sales to becoming the most profitable location in her area.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden group cursor-pointer">
            {/* Video Placeholder */}
            <video
              className="w-full h-full object-cover"
              controls
              preload="auto"
              poster="/placeholder.svg?height=600&width=800"
              playsInline
              muted
              autoPlay
              loop
            >
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback-vnCJ6SNCkI2gJv8DCSqq8kSEKg9Ecd.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>

          <div className="mt-12 mb-8 p-6 bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 rounded-2xl backdrop-blur-sm text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Gift className="w-6 h-6 text-accent" />
              <span className="text-lg font-bold text-accent uppercase tracking-wide">{"ACT NOW"}</span>
              <Gift className="w-6 h-6 text-accent" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Don't Miss Out on 30-70% Cost Coverage
            </p>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              These government incentives won't last forever.
              <span className="text-accent font-semibold"> Book your call today to secure your coverage!</span>
            </p>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Your Custom Strategy Call
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              {"See how we can replicate Sarah's success for your business"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
