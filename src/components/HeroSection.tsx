import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-bogle-green-light text-bogle-green px-3 py-1 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-bogle-green rounded-full"></span>
            <span>Launching Soon</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-bogle-dark leading-tight">
              Smart Payments for{' '}
              <span className="text-bogle-green">Modern Businesses</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reduce fees, eliminate chargebacks, and offer flexible payment options 
              that save you money while delighting your customers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-bogle-green hover:bg-bogle-green/90 text-white font-semibold px-8 py-4 text-lg rounded-xl"
            >
              Get Early Access
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-bogle-green text-bogle-green hover:bg-bogle-green hover:text-white font-semibold px-8 py-4 text-lg rounded-xl"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Right Content - Cost Comparison */}
        <div className="lg:pl-8">
          <Card className="p-8 bg-white shadow-xl border-0 rounded-2xl">
            <div className="text-center space-y-6">
              <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wide">
                Monthly Payment Processing
              </h3>
              
              <div className="grid grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground mb-2">BEFORE BOGLE</p>
                  <div className="text-4xl font-bold text-bogle-dark">$2,900</div>
                  <p className="text-sm text-muted-foreground mt-1">Credit card fees</p>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-8 h-0.5 bg-bogle-green"></div>
                  <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-bogle-green transform rotate-90 -ml-1"></div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground mb-2">WITH BOGLE</p>
                  <div className="text-4xl font-bold text-bogle-green">$580</div>
                  <p className="text-sm text-muted-foreground mt-1">ACH + crypto mix</p>
                </div>
                
                <div></div>
              </div>
              
              <div className="bg-bogle-green-light p-4 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  YOU SAVE <span className="text-2xl font-bold text-bogle-green">$2,320</span> per month
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;