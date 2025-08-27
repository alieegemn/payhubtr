import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Zap, 
  CreditCard, 
  Globe, 
  BarChart3, 
  Lock, 
  Smartphone, 
  Users,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Bank-level encryption and PCI DSS compliance ensure your payments are always secure.",
      badge: "Enterprise"
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Process payments in under 2 seconds with our optimized global infrastructure.",
      badge: "Performance"
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Methods",
      description: "Accept credit cards, digital wallets, bank transfers, and cryptocurrency.",
      badge: "Versatile"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Accept payments from 180+ countries with automatic currency conversion.",
      badge: "International"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive dashboard with real-time transaction monitoring and insights.",
      badge: "Analytics"
    },
    {
      icon: Lock,
      title: "Fraud Protection",
      description: "AI-powered fraud detection prevents suspicious transactions automatically.",
      badge: "AI-Powered"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Seamless payment experience across all devices and platforms.",
      badge: "Mobile"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Role-based access control and team collaboration features.",
      badge: "Collaboration"
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
            <Link to="/features" className="text-primary font-medium">Features</Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">Pricing</Link>
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
            Powerful Features for
            <span className="text-primary"> Modern Payments</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Everything you need to accept, process, and manage payments with confidence. 
            Built for businesses that demand reliability and performance.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to transform your payments?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using PaymentPath to streamline their payment processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;