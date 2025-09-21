import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Target, Users, CheckCircle } from "lucide-react"

export function ExclusivitySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-lg text-sm font-semibold mb-6 border border-primary/20">
              INCENTIVE POOL DEPLETING FAST
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
              Limited Incentive Pool: <span className="text-primary">Only 18% Remaining</span>
            </h2>

            <p className="text-xl text-muted-foreground text-balance mb-8">
              Government and utility incentive funds are running out fast. Once they're gone, the opportunity for
              massive cost coverage disappears until new programs are approved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Premium Installation Standards</h3>
                <p className="text-muted-foreground text-sm">
                  Enterprise-grade equipment and certified technicians ensuring long-term reliability and performance
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Maximum Incentive Capture</h3>
                <p className="text-muted-foreground text-sm">
                  Strategic positioning to secure every available federal, state, and utility rebate for maximum cost
                  coverage
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Rapid Implementation</h3>
                <p className="text-muted-foreground text-sm">
                  Streamlined 30-day deployment process with priority scheduling and expedited permitting
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/50 p-8 rounded-lg mb-8 border border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-2xl font-bold text-primary">Incentive Fund Status</span>
            </div>

            <h3 className="text-3xl font-bold mb-4 text-foreground">$420K in Incentives Still Available</h3>

            <div className="bg-card p-4 rounded-lg mb-6 border">
              <div className="flex items-center justify-center gap-4 mb-3">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-lg font-semibold">82% Allocated | 18% Available | Next Funding: Unknown</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-primary h-3 rounded-full" style={{ width: "82%" }}></div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              Federal and state incentive programs have allocated funding pools that get depleted as projects are
              approved. Once these funds run out, there's no guarantee when new programs will be launched. We're seeing
              unprecedented demand draining these pools faster than ever - act now before they're completely exhausted.
            </p>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6">
              <p className="text-sm font-medium text-accent">
                💰 Exclusive Financing Terms: Qualified partners receive preferential rates and extended payment terms
              </p>
            </div>

            <div className="text-lg font-semibold text-primary bg-primary/10 p-4 rounded-lg">
              <CheckCircle className="w-5 h-5 inline mr-2" />
              Critical: Incentive funds depleting at $240K+ weekly - secure yours before they're gone
            </div>
          </div>

          <Button
            size="lg"
            className="text-lg md:text-xl px-6 md:px-12 py-4 md:py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto"
          >
            Schedule Strategic Consultation
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Complimentary assessment with no obligation. Professional referrals provided if partnership criteria are not
            met.
          </p>
        </div>
      </div>
    </section>
  )
}
