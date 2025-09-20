import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Wrench, FileText } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: MapPin,
      title: "Consultation & Planning",
      description:
        "We meet with you, gather comprehensive property information, and conduct a thorough needs assessment to design your optimal charging solution.",
      duration: "3-4 Days",
    },
    {
      icon: FileText,
      title: "Incentives & Design",
      description:
        "Our team identifies all available rebates, tax credits, and incentives while preparing detailed site design and submitting necessary permits.",
      duration: "11-14 Days",
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description:
        "Certified technicians install your chargers, complete all wiring, and handle electrical upgrades. We test everything and connect to our management network.",
      duration: "21-24 Days",
    },
    {
      icon: CheckCircle,
      title: "Handover & Support",
      description:
        "Complete training on usage and management tools, plus ongoing maintenance, remote monitoring, and dedicated support to ensure peak performance.",
      duration: "25-30 + Ongoing",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            How We <span className="text-primary">Transform Your Property</span> Into a Revenue Stream
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Our proven 4-step system has generated over $10M in additional revenue for our clients. Here's exactly how
            we'll do it for you:
          </p>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
            <p className="text-lg font-medium text-accent">
              Multiple Financing Options Available - Start earning revenue before your first payment
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary bg-background/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded">
                  {step.duration}
                </div>

                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/15 rounded-full mb-6 group-hover:bg-primary/25 transition-colors shadow-lg">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="text-2xl font-bold mb-4 text-primary">{index + 1}.</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
