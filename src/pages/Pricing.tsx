import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 100 transactions/month",
        "Basic payment methods",
        "Email support",
        "Standard security",
        "Basic analytics"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      description: "Ideal for growing businesses",
      features: [
        "Up to 1,000 transactions/month",
        "All payment methods",
        "Priority support",
        "Advanced security",
        "Detailed analytics",
        "Custom branding",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Unlimited transactions",
        "All payment methods",
        "24/7 dedicated support",
        "Enterprise security",
        "Advanced analytics",
        "Custom integrations",
        "SLA guarantee",
        "White-label solution"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl text-primary">PaymentPath</Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/features" className="text-foreground hover:text-primary transition-colors">Features</Link>
            <Link to="/pricing" className="text-primary font-medium">Pricing</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
          <Button asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Simple, Transparent
            <span className="text-primary"> Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees, no surprises.
            Start free and scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">
                    {plan.price}
                    {plan.price !== "Free" && plan.price !== "Custom" && (
                      <span className="text-sm text-muted-foreground font-normal">/month</span>
                    )}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/contact">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-foreground">What payment methods do you support?</h3>
              <p className="text-muted-foreground mb-4">
                We support all major credit cards, digital wallets (PayPal, Apple Pay, Google Pay), 
                bank transfers, and cryptocurrency payments.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-foreground">Can I change plans anytime?</h3>
              <p className="text-muted-foreground mb-4">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect 
                immediately with prorated billing.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-foreground">Is there a setup fee?</h3>
              <p className="text-muted-foreground mb-4">
                No, there are no setup fees for any of our plans. You only pay the monthly 
                subscription fee and transaction fees.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-foreground">What kind of support do you offer?</h3>
              <p className="text-muted-foreground mb-4">
                We offer email support for Starter, priority support for Professional, 
                and 24/7 dedicated support for Enterprise customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;