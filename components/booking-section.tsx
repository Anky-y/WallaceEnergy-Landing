import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Phone, Mail, MapPin } from "lucide-react"

export function BookingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 p-8 bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 rounded-2xl backdrop-blur-sm text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-xl font-bold text-accent uppercase tracking-wide">{"LIMITED TIME INCENTIVE"}</span>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-foreground mb-3">Get 30-70% Upfront Cost Coverage</p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Qualified businesses can receive substantial upfront cost coverage.
              <span className="text-accent font-semibold"> Book your strategy call now to see if you qualify!</span>
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
              <span className="text-primary">Limited Incentives</span> Available for Just a Few More Weeks
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Our exclusive incentive programs are only available for a few more weeks and limited to select businesses
              per area. Book your strategy call now before these opportunities disappear forever.
            </p>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
              <p className="text-lg font-medium text-accent">
                Flexible Payment Plans Available - Ask about our $0 down financing options
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6">Book Your Strategy Call</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Business Name" />
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                  <Input placeholder="Business Address" />
                  <Textarea placeholder="Tell us about your business and current challenges..." rows={4} />
                  <Button size="lg" className="w-full text-lg py-6">
                    Book My Free Strategy Call
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  {"We respect your privacy. Your information will never be shared."}
                </p>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <div className="space-y-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">30-Minute Strategy Session</h4>
                      <p className="text-muted-foreground">
                        {"We'll analyze your location, traffic patterns, and calculate your exact revenue potential."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Custom Site Assessment</h4>
                      <p className="text-muted-foreground">
                        {"Get a detailed plan showing exactly where to install stations for maximum profitability."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">ROI Guarantee Discussion</h4>
                      <p className="text-muted-foreground">
                        {"Learn about our performance guarantees and how we ensure your success."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">{"🎯 What You'll Walk Away With:"}</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>{"• Exact revenue projections for your location"}</li>
                  <li>{"• Custom installation timeline and costs"}</li>
                  <li>{"• Competitive analysis of your market"}</li>
                  <li>{"• Clear next steps to get started"}</li>
                  <li className="text-accent font-medium">{"• Personalized financing options and payment plans"}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-medium mb-4">{"⚡ Still have questions? Call us directly:"}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                (555) 123-4567
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                hello@evchargingpros.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
