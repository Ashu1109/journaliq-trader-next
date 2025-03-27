"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CheckIcon, HelpCircleIcon } from "lucide-react";
import Link from "next/link";
import React, { PropsWithChildren, useState } from "react";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-16">{children}</main>
      <footer className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-candle-500 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <span className="text-xl font-medium">Candle AI</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Elevate your trading performance with AI-driven insights,
                pattern recognition, and personalized analysis for the Indian
                stock market.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-candle-600"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-sm text-muted-foreground hover:text-candle-600"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-muted-foreground hover:text-candle-600"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-candle-600"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-candle-600"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-candle-600"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-candle-600"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-candle-600"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-candle-600"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-candle-600"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-candle-600"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Candle AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-muted-foreground hover:text-candle-600"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-candle-600"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-candle-600"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const pricingPlans = [
    {
      name: "Basic",
      description:
        "Perfect for beginner traders looking to improve their trading journey",
      price: billingCycle === "monthly" ? 49 : 39,
      features: [
        "AI-powered daily market summary",
        "Pattern recognition for 50 stocks",
        "Basic technical indicators",
        "Trading journal with 5 templates",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      description:
        "Ideal for active traders who need powerful tools and insights",
      price: billingCycle === "monthly" ? 99 : 79,
      features: [
        "Everything in Basic",
        "Pattern recognition for 500+ stocks",
        "Advanced technical analysis",
        "Trading journal with 20 templates",
        "Performance analytics dashboard",
        "Personalized trading insights",
        "Priority support",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description:
        "For professional traders and institutions requiring custom solutions",
      price: billingCycle === "monthly" ? 249 : 199,
      features: [
        "Everything in Pro",
        "Unlimited pattern recognition",
        "Custom indicators and alerts",
        "Trading journal with unlimited templates",
        "Advanced risk management tools",
        "API access",
        "Dedicated account manager",
        "Custom reporting and analytics",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqItems = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 7-day free trial for all plans. No credit card required until you decide to continue with a paid subscription.",
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer:
        "Absolutely! You can change your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive credit towards future billing.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and for annual plans, we also support bank transfers and UPI payments for Indian customers.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, all your trading data is encrypted and stored securely. We never share your personal information or trading data with third parties.",
    },
  ];

  return (
    <MainLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <Badge
              variant="outline"
              className="bg-accent text-accent-foreground px-3 py-1 mb-4"
            >
              Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-muted-foreground mb-8 mx-auto max-w-2xl text-balance">
              Choose the perfect plan for your trading needs. All plans include
              a 7-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span
                className={cn(
                  "text-sm font-medium transition-colors",
                  billingCycle === "monthly"
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                Monthly
              </span>
              <Switch
                checked={billingCycle === "yearly"}
                onCheckedChange={(checked) =>
                  setBillingCycle(checked ? "yearly" : "monthly")
                }
                className="data-[state=checked]:bg-candle-500"
              />
              <div className="flex items-center gap-1.5">
                <span
                  className={cn(
                    "text-sm font-medium transition-colors",
                    billingCycle === "yearly"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  Yearly
                </span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 font-normal text-xs">
                  Save 20%
                </Badge>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <Card
                key={plan.name}
                className={cn(
                  "relative border-border overflow-hidden transition-all duration-300 animate-scale-in",
                  "hover:shadow-lg hover:border-candle-200 card-highlight",
                  plan.popular && "border-candle-200 shadow-lg"
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-candle-500 text-white text-xs font-medium px-3 py-1 rounded-bl-md">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="min-h-12">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">₹{plan.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">
                        /mo
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {billingCycle === "yearly"
                        ? "Billed ₹" + plan.price * 12 + " annually"
                        : "Billed monthly"}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-candle-500 shrink-0 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={cn(
                      "w-full",
                      plan.popular
                        ? "bg-candle-500 hover:bg-candle-600"
                        : "bg-white border-2 border-candle-500 text-candle-500 hover:bg-candle-50"
                    )}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <h3 className="text-lg font-medium mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 p-10 bg-accent rounded-2xl text-center max-w-4xl mx-auto animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect plan for your
              trading needs. Contact us for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-candle-500 hover:bg-candle-600">
                Contact Sales
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-candle-500 text-candle-500 hover:bg-candle-50"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-center mb-12 animate-fade-up">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Candle AI has completely transformed my trading strategy. I've seen a 27% increase in my portfolio since using their platform.",
                author: "Rajiv Sharma",
                title: "Day Trader, Mumbai",
              },
              {
                quote:
                  "The pattern recognition feature is incredible. It helps me spot opportunities I would have missed otherwise. Worth every rupee.",
                author: "Priya Patel",
                title: "Swing Trader, Bangalore",
              },
              {
                quote:
                  "As an institutional investor, the custom analytics and API access give us the edge we need in today's competitive market.",
                author: "Vikram Desai",
                title: "Portfolio Manager, Delhi",
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="bg-white border-none shadow-sm animate-fade-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="mb-4 text-candle-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="inline-block w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-muted-foreground mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <TooltipProvider>
        <section className="py-20 bg-gradient-to-br from-blue-50 to-candle-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <Badge
                  variant="outline"
                  className="bg-accent text-accent-foreground px-3 py-1 mb-4"
                >
                  Enterprise
                </Badge>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">
                  Need a custom solution for your institution?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We offer tailored solutions for brokerages, investment firms,
                  and financial institutions with specific requirements.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Custom integration with your existing systems",
                    "Dedicated support and implementation team",
                    "Advanced security and compliance features",
                    "Custom AI models trained on your historical data",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-candle-500 shrink-0 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="bg-candle-500 hover:bg-candle-600">
                  Schedule a Consultation
                </Button>
              </div>
              <div className="relative animate-fade-up rounded-2xl overflow-hidden">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <h3 className="text-xl font-medium mb-4">
                    Enterprise Features
                  </h3>
                  <ul className="space-y-4">
                    {[
                      {
                        feature: "White-label solution",
                        tooltip:
                          "Customize the platform with your branding and design",
                      },
                      {
                        feature: "Custom risk models",
                        tooltip:
                          "Develop proprietary risk assessment models based on your requirements",
                      },
                      {
                        feature: "Multi-user access controls",
                        tooltip:
                          "Granular permissions for different user roles in your organization",
                      },
                      {
                        feature: "Regulatory compliance tools",
                        tooltip:
                          "Built-in features to help maintain compliance with SEBI regulations",
                      },
                      {
                        feature: "Data retention policies",
                        tooltip:
                          "Customize how long data is stored based on your compliance needs",
                      },
                      {
                        feature: "Dedicated infrastructure",
                        tooltip:
                          "Isolated servers and databases for enhanced security and performance",
                      },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start justify-between">
                        <div className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-candle-500 shrink-0 mr-2" />
                          <span>{item.feature}</span>
                        </div>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircleIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60">{item.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TooltipProvider>
    </MainLayout>
  );
};

export default PricingPage;
