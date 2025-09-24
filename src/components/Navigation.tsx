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
      <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm">
        Call Us: +91 8925811161 |Lakshayaa Collections {" "}
    </div>

      {/* Main Navigation */}
  <nav className="bg-gradient-to-r from-luxury-gold/80 via-primary/20 to-white/80 border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Left Icons */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <div className="text-xl font-luxury font-semibold text-primary">
                  Lakshayaa Collections
                </div>
              </Link>

              {/* Cart and Register Icons on Left Side */}
              <div className="md:flex items-center space-x-2">
                <Link to="/cart" className="relative">
                  <Button variant="ghost" size="icon">
                    <ShoppingBag className="h-5 w-5" />
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                        {cart.length}
                      </span>
                    )}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className=" md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
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
            <div className="hidden md:flex items-center space-x-4">
              {/* Cart and Register icons moved to left sidebar */}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActivePath(item.path)
                      ? "bg-luxury-gold text-white"
                      : "text-foreground hover:bg-luxury-cream"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-border">
              {/* Cart and Register icons moved to left sidebar */}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;