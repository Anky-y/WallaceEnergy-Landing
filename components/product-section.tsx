import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProductSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Choose Your <span className="text-primary">EV Charging Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            From cost-effective Level 2 chargers to high-speed DC fast charging, we provide the right solution for your
            location and revenue goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Level 2 Chargers */}
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-4">
              <div className="w-full h-80 rounded-lg mb-6 overflow-hidden bg-muted">
                <img
                  src="https://plus.unsplash.com/premium_photo-1715115406713-fd67ecea8dcc?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Level 2 EV Charging Station"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardTitle className="text-2xl text-primary">Level 2 Chargers (240V)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-0">
              <p className="text-muted-foreground">
                Cost-effective, reliable options perfect for offices, apartments, and retail locations. Offering 2–8
                hour charging that generates steady ROI through tenant fees or pay-per-use.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Attracts EV drivers who stay longer on-site</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Scales easily as demand grows</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Lower upfront investment with consistent returns</p>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="font-semibold text-primary mb-3">Ideal For:</h4>
                <p className="text-sm text-muted-foreground">
                  Office buildings, apartment complexes, retail centers, hotels, and workplaces
                </p>
              </div>
            </CardContent>
          </Card>

          {/* DC Fast Chargers */}
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-4">
              <div className="w-full h-80 rounded-lg mb-6 overflow-hidden bg-muted">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVDANCEEVPortableCharger32A%281%29%281%29%281%29%281%29-Sgpnau789KKvVsGwHwMhVubiEexral.jpg"
                  alt="DC Fast Charging Station"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <CardTitle className="text-2xl text-accent">DC Fast Chargers (50–350kW)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-0">
              <p className="text-muted-foreground">
                Provide 20–30 minute quick charging, perfect for highways and high-traffic spots. Delivering strong
                revenue from high turnover despite higher upfront costs.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Boosts visibility and attracts fleets and travelers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Future-proof for next-generation EVs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">High revenue potential from rapid turnover</p>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="font-semibold text-accent mb-3">Ideal For:</h4>
                <p className="text-sm text-muted-foreground">
                  Highway corridors, gas stations, shopping centers, and high-traffic commercial areas
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader className="pb-4">
              <CardTitle className="text-center text-2xl">Both Solutions Include Full Customization</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-8 px-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">Custom branding and signage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">Flexible pricing models</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">Remote monitoring and management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">Tenant app integration</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm font-medium">Smart load management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm font-medium">Special EV utility rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm font-medium">Sustainability reporting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm font-medium">Green impact tracking</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
