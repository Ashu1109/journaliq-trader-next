import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart4,
  CalendarClock,
  Clock,
  Flame,
  Lightbulb,
  Shield,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-24 sm:py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Beta Release
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                AI-Powered Trading Journal
                <span className="block text-primary">
                  for the Indian Market
                </span>
              </h1>

              <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
                Elevate your trading performance with AI-driven insights,
                pattern recognition, and personalized analysis for the Indian
                stock market.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
                <Button size="lg" asChild>
                  <Link href="/dashboard">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <Link href="/journal">Try Demo</Link>
                </Button>
              </div>
            </div>

            {/* Animated Trading Cards */}
            <div className="relative h-[400px] w-full hidden md:block">
              {/* Card 1 - Nifty */}
              <Card className="absolute left-0 top-0 w-[280px] animate-[fade-in_0.6s,float_6s_ease-in-out_infinite] hover:shadow-lg transition-all border-primary/10">
                <CardContent className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-bold">NIFTY 50</h3>
                      <p className="text-muted-foreground text-sm">NSE Index</p>
                    </div>
                    <TrendingUp className="h-5 w-5 text-[hsl(var(--profit))]" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">22,753.80</div>
                    <div className="text-[hsl(var(--profit))] font-medium">
                      +1.2%
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 - Reliance */}
              <Card className="absolute left-[60px] top-[120px] w-[280px] animate-[fade-in_0.8s,float_7s_ease-in-out_infinite] hover:shadow-lg transition-all border-primary/10 animation-delay-200">
                <CardContent className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-bold">RELIANCE</h3>
                      <p className="text-muted-foreground text-sm">
                        NSE: RELIANCE
                      </p>
                    </div>
                    <TrendingUp className="h-5 w-5 text-[hsl(var(--profit))]" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">2,943.45</div>
                    <div className="text-[hsl(var(--profit))] font-medium">
                      +0.8%
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3 - Bank Nifty */}
              <Card className="absolute left-[30px] top-[240px] w-[280px] animate-[fade-in_1s,float_5s_ease-in-out_infinite] hover:shadow-lg transition-all border-primary/10 animation-delay-400">
                <CardContent className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-bold">BANK NIFTY</h3>
                      <p className="text-muted-foreground text-sm">NSE Index</p>
                    </div>
                    <TrendingUp className="h-5 w-5 text-[hsl(var(--profit))]" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">49,234.55</div>
                    <div className="text-[hsl(var(--profit))] font-medium">
                      +0.9%
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Powerful Features for Indian Traders
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Designed specifically for the unique dynamics of the Indian market
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <Card className="hover-scale border-primary/10 bg-card">
              <CardContent className="flex flex-col items-start gap-3 p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">NSE & BSE Tracking</h3>
                <p className="text-muted-foreground">
                  Comprehensive support for all securities traded on the
                  National Stock Exchange and Bombay Stock Exchange.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="hover-scale border-primary/10 bg-card">
              <CardContent className="flex flex-col items-start gap-3 p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart4 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">F&O Analysis</h3>
                <p className="text-muted-foreground">
                  Specialized tools for Futures & Options traders with
                  derivatives analysis and position sizing.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="hover-scale border-primary/10 bg-card">
              <CardContent className="flex flex-col items-start gap-3 p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Insights</h3>
                <p className="text-muted-foreground">
                  Get personalized recommendations and pattern detection to
                  improve your trading strategies.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="hover-scale border-primary/10 bg-card">
              <CardContent className="flex flex-col items-start gap-3 p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Market Timing Analysis</h3>
                <p className="text-muted-foreground">
                  Discover your optimal trading hours based on historical
                  performance data.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="hover-scale border-primary/10 bg-card">
              <CardContent className="flex flex-col items-start gap-3 p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <CalendarClock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Trading Calendar</h3>
                <p className="text-muted-foreground">
                  Track market holidays, result seasons, and important economic
                  events affecting Indian markets.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="hover-scale border-primary/10 bg-card">
              <CardContent className="flex flex-col items-start gap-3 p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Risk Management</h3>
                <p className="text-muted-foreground">
                  Advanced risk metrics tailored to Indian market volatility
                  patterns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Simple process, powerful results
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold">Log Your Trades</h3>
              <p className="text-muted-foreground">
                Record your entry and exit points, position sizes, and trading
                notes.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold">Get AI Analysis</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your trading patterns, strengths, and areas for
                improvement.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold">Improve Performance</h3>
              <p className="text-muted-foreground">
                Apply insights to refine your strategy and enhance your trading
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Indian Traders
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what traders across India are saying
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover-scale">
              <CardContent className="p-6">
                <p className="mb-4 text-muted-foreground">
                  &quot;This journal helped me improve my win rate by 23% in
                  just 3 months trading Bank Nifty options.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-center leading-10">
                    RK
                  </div>
                  <div>
                    <p className="font-medium">Rahul Kumar</p>
                    <p className="text-sm text-muted-foreground">
                      F&O Trader, Mumbai
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6">
                <p className="mb-4 text-muted-foreground">
                  &quot;The sector rotation insights helped me stay ahead of
                  market trends during the recent volatility.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-center leading-10">
                    AP
                  </div>
                  <div>
                    <p className="font-medium">Anjali Patel</p>
                    <p className="text-sm text-muted-foreground">
                      Equity Investor, Bangalore
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6">
                <p className="mb-4 text-muted-foreground">
                  &quot;The psychological pattern detection revealed my tendency
                  to exit profitable Nifty trades too early.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-center leading-10">
                    VS
                  </div>
                  <div>
                    <p className="font-medium">Vikram Singh</p>
                    <p className="text-sm text-muted-foreground">
                      Day Trader, Delhi
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Transform Your Trading?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Join thousands of Indian traders who are using AI to gain an edge in
            the markets.
          </p>
          <Button size="lg" variant="secondary" className="mt-8" asChild>
            <Link href="/dashboard">Get Started For Free</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Flame className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Candle AI</span>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2023 Candle AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
