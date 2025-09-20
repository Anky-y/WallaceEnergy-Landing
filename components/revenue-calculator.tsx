"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts"
import { Calculator, TrendingUp, Target } from "lucide-react"

export function RevenueCalculator() {
  const [spaces, setSpaces] = useState<number>(10)
  const [sessionsPerDay, setSessionsPerDay] = useState<number>(2)
  const [pricePerSession, setPricePerSession] = useState<number>(8)
  const [showResults, setShowResults] = useState(false)

  const calculateProjections = (numSpaces: number, sessions: number, price: number) => {
    const avgKwhPerSession = 18
    const energyCost = 0.12 // $0.12/kWh
    const utilizationGrowthRate = 0.175 // 17.5% per year average
    const maintenanceFeesPerSession = 1.2 // Baked into assumptions

    const netProfitPerSession = price - avgKwhPerSession * energyCost - maintenanceFeesPerSession
    const baseAnnualSessions = numSpaces * sessions * 365

    return Array.from({ length: 5 }, (_, year) => {
      const yearNumber = year + 1
      const utilizationMultiplier = Math.pow(1 + utilizationGrowthRate, year)
      const annualSessions = baseAnnualSessions * utilizationMultiplier
      const revenue = Math.round(annualSessions * netProfitPerSession)

      return {
        year: yearNumber,
        revenue: Math.max(0, revenue),
        sessions: Math.round(annualSessions),
      }
    })
  }

  const projections = calculateProjections(spaces, sessionsPerDay, pricePerSession)
  const totalRevenue = projections.reduce((sum, year) => sum + year.revenue, 0)
  const growthPercentage =
    projections.length > 0
      ? Math.round(((projections[4].revenue - projections[0].revenue) / projections[0].revenue) * 100)
      : 0

  const handleCalculate = () => {
    setShowResults(true)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your <span className="text-secondary">Revenue Potential</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how much revenue your property could generate with EV charging stations over the next 5 years.
          </p>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border rounded-lg p-8 mx-0">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              EV Charging Infrastructure: <span className="text-secondary">304% Growth</span> Projected Over 5 Years
            </h3>
            <p className="text-muted-foreground text-lg mb-4">
              Market analysis indicates unprecedented expansion in commercial EV charging demand.
              <span className="text-primary font-semibold"> Early adoption provides competitive advantage.</span>
            </p>
            <p className="text-sm text-muted-foreground">Source: Bloomberg New Energy Finance</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 mt-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Revenue Projection Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <Label htmlFor="spaces" className="text-base font-medium">
                    Number of Charging Spaces
                  </Label>
                  <Input
                    id="spaces"
                    type="number"
                    value={spaces}
                    onChange={(e) => setSpaces(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    className="mt-2 text-lg"
                    min="1"
                    max="500"
                  />
                </div>
                <div>
                  <Label htmlFor="sessions" className="text-base font-medium">
                    Sessions per Charger/Day
                  </Label>
                  <Input
                    id="sessions"
                    type="number"
                    value={sessionsPerDay}
                    onChange={(e) => setSessionsPerDay(Math.max(0.5, Number.parseFloat(e.target.value) || 1))}
                    className="mt-2 text-lg"
                    min="0.5"
                    max="20"
                    step="0.5"
                  />
                </div>
                <div>
                  <Label htmlFor="price" className="text-base font-medium">
                    Price per Session (USD)
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    value={pricePerSession}
                    onChange={(e) => setPricePerSession(Math.max(1, Number.parseFloat(e.target.value) || 5))}
                    className="mt-2 text-lg"
                    min="1"
                    max="50"
                    step="0.50"
                  />
                </div>
              </div>
              <div className="text-center">
                <Button onClick={handleCalculate} size="lg" className="px-8 py-6 text-lg">
                  Calculate Revenue
                  <TrendingUp className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {showResults && (
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>5-Year Revenue Projection for {spaces} Charging Spaces</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={projections.map((p) => ({ ...p, year: `Year ${p.year}` }))}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                        <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, "Annual Revenue"]} />
                        <Line
                          type="monotone"
                          dataKey="revenue"
                          stroke="hsl(var(--primary))"
                          strokeWidth={3}
                          dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
                        >
                          <LabelList
                            dataKey="revenue"
                            position="top"
                            formatter={(value: number) => `$${(value / 1000).toFixed(0)}K`}
                            style={{ fill: "hsl(var(--primary))", fontSize: "12px", fontWeight: "bold" }}
                          />
                        </Line>
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">${totalRevenue.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Total 5-Year Revenue</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/5 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">
                        ${projections[4].revenue.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Year 5 Annual Revenue</div>
                    </div>
                    <div className="text-center p-4 bg-accent/5 rounded-lg">
                      <div className="text-2xl font-bold text-accent">{growthPercentage}%</div>
                      <div className="text-sm text-muted-foreground">Revenue Growth</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Turn This Projection Into Reality?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    These are conservative estimates — with our optimized strategies, clients often exceed them. Ready
                    to see what your site could really make?
                  </p>

                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6">
                    <p className="text-sm font-medium text-accent">
                      Financing Available: Start generating revenue immediately with $0 down payment plans
                    </p>
                  </div>

                  <Button size="lg" className="text-lg px-8 py-6">
                    Book a Call
                    <TrendingUp className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
