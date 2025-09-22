import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, DollarSign, Users, Zap, Home, Clock, BarChart3, Gift } from "lucide-react"

export function ResultsSection() {
  const results = [
    {
      icon: DollarSign,
      number: "$6K-$24K",
      label: "Annual Passive Income",
      description: "Long-term revenue generation",
    },
    {
      icon: Home,
      number: "15%",
      label: "Property Value Increase",
      description: "Average boost over 10 years",
    },
    {
      icon: Zap,
      number: "20-40%",
      label: "Energy Cost Reduction",
      description: "Lower operational expenses",
    },
    {
      icon: Users,
      number: "60-75%",
      label: "High-Income Tenants and Customers",
      description: "EV drivers earning $100k+",
    },
    {
      icon: Clock,
      number: "175%",
      label: "Increased Customer Dwell Time",
      description: "Extended customer visits",
    },
    {
      icon: TrendingUp,
      number: "3 Months",
      label: "Average ROI Timeline",
      description: "From installation to profitability",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold mb-6">
            <BarChart3 className="w-4 h-4" />
            PERFORMANCE METRICS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Proven Results from <span className="text-primary">Commercial EV Installations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Our comprehensive data analysis demonstrates consistent performance across all client installations.
            <span className="text-primary font-semibold"> Evidence-based outcomes you can expect:</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <Card
              key={index}
              className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary/20"
            >
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                  <result.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight">{result.label}</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-3xl font-bold text-secondary">{result.number}</span>
                  <span className="text-sm text-muted-foreground font-medium">average</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold text-accent uppercase tracking-wide">Limited TIME INCENTIVE</span>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-foreground mb-3">Get 30-70% Upfront Cost Coverage</p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Qualified businesses can receive substantial upfront cost coverage.
              <span className="text-accent font-semibold"> Book your strategy call now to see if you qualify!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
