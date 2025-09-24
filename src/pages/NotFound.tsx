import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center bg-gradient-elegant w-full max-w-full overflow-x-hidden">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-luxury font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-luxury font-semibold text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! The page you're looking for seems to have wandered off. 
            Let's get you back to our beautiful jewelry collection.
          </p>
        </div>
        <div className="space-y-4">
          <Button 
            variant="luxury" 
            size="lg" 
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto"
          >
            Return to Home
          </Button>
          <div className="text-center">
            <Button 
              variant="ghost" 
              onClick={() => window.location.href = '/shop'}
              className="text-luxury-gold hover:text-luxury-gold/80"
            >
              Browse Our Collection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
