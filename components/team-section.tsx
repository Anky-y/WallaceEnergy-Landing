import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Wrench } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Morrison",
      title: "CEO & Founder",
      description:
        "Former Tesla engineer with 15+ years in EV infrastructure. Led installations for Fortune 500 companies.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Kim",
      title: "Head of Revenue Strategy",
      description:
        "Ex-McKinsey consultant specializing in retail revenue optimization. Designed our profit maximization system.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Marcus Johnson",
      title: "Chief Installation Officer",
      description:
        "Master electrician with 500+ charging station installations. Ensures every project is completed on time.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const stats = [
    { icon: Award, number: "500+", label: "Installations Completed" },
    { icon: Users, number: "200+", label: "Happy Clients" },
    { icon: Wrench, number: "15+", label: "Years Experience" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Meet the Team Behind <span className="text-secondary">$10M+ in Client Revenue</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {
              "We're not just another contractor. We're revenue optimization experts who happen to install charging stations."
            }
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-4">{member.title}</div>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
