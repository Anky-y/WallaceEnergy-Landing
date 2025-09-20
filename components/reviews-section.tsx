import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function ReviewsSection() {
  const reviews = [
    {
      name: "Michael Rodriguez",
      title: "Owner, Rodriguez Auto Center",
      content:
        "In 4 months, our EV charging stations generated $67,000 in additional revenue. The ROI was incredible - we paid off the entire investment and are now pure profit.",
      rating: 5,
      revenue: "$67K in 4 months",
    },
    {
      name: "Jennifer Chen",
      title: "GM, Downtown Shopping Plaza",
      content:
        "Customer dwell time increased 400%. People charge their cars and shop for 45+ minutes instead of quick 10-minute visits. Game changer for our retail tenants.",
      rating: 5,
      revenue: "400% dwell time increase",
    },
    {
      name: "David Thompson",
      title: "Fleet Manager, Thompson Logistics",
      content:
        "We went from spending $15K monthly on fuel to generating $8K monthly profit from our charging network. The team handled everything - installation was seamless.",
      rating: 5,
      revenue: "$23K monthly swing",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            What Our Clients Say About Their <span className="text-primary">Revenue Explosion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {
              "Don't just take our word for it. Here's what happens when business owners stop waiting and start profiting from the EV revolution:"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="relative p-8 hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-lg mb-6 text-balance">{review.content}</p>

                <div className="border-t pt-4">
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-muted-foreground mb-2">{review.title}</div>
                  <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full inline-block">
                    {review.revenue}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
