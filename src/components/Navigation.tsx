import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Heart, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cart } = useCart();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-2 sm:px-4 text-xs sm:text-sm">
        <span className="block sm:inline">Call Us: +91 8925811161 | </span>
        <span className="block sm:inline">Lakshayaa Collections</span>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-luxury-gold/80 via-primary/20 to-white/80 border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-luxury-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-lg">L</span>
                </div>
                <div className="text-sm sm:text-lg lg:text-xl font-luxury font-semibold text-primary">
                  <span className="hidden sm:inline">Lakshayaa Collections</span>
                  <span className="sm:hidden">Lakshayaa</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 px-2 py-1 rounded ${
                    isActivePath(item.path)
                      ? "text-luxury-gold border-b-2 border-luxury-gold pb-1"
                      : "text-foreground hover:text-luxury-gold"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                  <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1 sm:px-1.5 min-w-[18px] h-[18px] sm:min-w-[20px] sm:h-[20px] flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="h-8 w-8 sm:h-10 sm:w-10"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-2 sm:px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 sm:py-4 rounded-md text-base font-medium transition-colors duration-200 touch-manipulation ${
                    isActivePath(item.path)
                      ? "bg-luxury-gold text-white"
                      : "text-foreground hover:bg-luxury-cream active:bg-luxury-gold/20"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="px-2 sm:px-4 py-3 border-t border-border">
              <div className="flex items-center justify-around">
                <Link to="/cart" className="relative flex flex-col items-center space-y-1" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <ShoppingBag className="h-5 w-5" />
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 min-w-[18px] h-[18px] flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </Button>
                  <span className="text-xs text-muted-foreground">Cart</span>
                </Link>
                <Link to="/register" className="flex flex-col items-center space-y-1" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <User className="h-5 w-5" />
                  </Button>
                  <span className="text-xs text-muted-foreground">Register</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;