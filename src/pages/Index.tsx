import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, CreditCard, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-primary">PayHub</div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/features" className="text-foreground hover:text-primary transition-colors">Features</Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            <Link to="/policies/#terms" className="text-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/policies/#privacy" className="text-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/policies/#refund" className="text-foreground hover:text-primary transition-colors">Refund Policy</Link>
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
            Simplify Your
            <span className="text-primary"> Payment Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Streamline your payment processing with our secure, fast, and reliable payment solutions. 
            Accept payments from anywhere, at any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Start for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose PayHub?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform offers everything you need to manage payments efficiently and securely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Secure & Compliant</CardTitle>
                <CardDescription>
                  Bank-level security with PCI DSS compliance and advanced fraud protection.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Process payments in milliseconds with our optimized infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CreditCard className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Multiple Payment Methods</CardTitle>
                <CardDescription>
                  Accept credit cards, digital wallets, bank transfers, and more.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Who's Using Us Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Who's Using PayHub
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading companies worldwide for their payment processing needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-muted-foreground">TechCorp</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-muted-foreground">StartupXYZ</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-muted-foreground">GlobalTrade</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-muted-foreground">InnovateLab</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Everything you need to succeed
              </h2>
              <div className="space-y-4">
                {[
                  "Real-time payment processing",
                  "Comprehensive analytics dashboard",
                  "24/7 customer support",
                  "Easy integration with existing systems",
                  "Transparent pricing with no hidden fees"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ready to get started?</CardTitle>
                  <CardDescription>
                    Join thousands of businesses already using PayHub
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/contact">Start for Free Now!</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl text-primary mb-4">PayHub</div>
              <p className="text-muted-foreground mb-4">
                Simplifying payments for businesses worldwide.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">A</span>
                <img src="/lovable-uploads/fd5fe4b4-84ce-47af-a6cf-1019c8361dc1.png" alt="HackmanHub" className="h-6" />
                <span className="text-sm text-muted-foreground">company</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Product</h3>
              <div className="space-y-2">
                <Link to="/features" className="block text-muted-foreground hover:text-primary transition-colors">Features</Link>
                <Link to="/pricing" className="block text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Company</h3>
              <div className="space-y-2">
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">About</Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Support</h3>
              <div className="space-y-2">
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Help Center</Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Documentation</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 PayHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
