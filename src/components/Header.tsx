import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full px-6 lg:px-8 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-bogle-green">Bogle</div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-bogle-green transition-colors">
            Payment Options
          </a>
          <a href="#" className="text-foreground hover:text-bogle-green transition-colors">
            Services
          </a>
          <a href="#" className="text-foreground hover:text-bogle-green transition-colors">
            Pricing
          </a>
          <a href="#" className="text-foreground hover:text-bogle-green transition-colors">
            Nonprofits
          </a>
        </div>

        <Button className="bg-bogle-green hover:bg-bogle-green/90 text-white font-semibold px-6 py-2 rounded-lg">
          Join Waitlist
        </Button>
      </nav>
    </header>
  );
};

export default Header;