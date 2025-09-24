import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import { Button } from "@/components/ui/button";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import MyOrders from "./pages/MyOrders";
import LeftSidebar from "./components/LeftSidebar";
import Footer from "./components/Footer";
import { Home as HomeIcon, ShoppingBag, Info, Mail, User, Package, Menu, X } from "lucide-react";

function NavBar() {
  const location = useLocation();
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Main navigation items
  const mainNavItems = [
    { to: "/", label: "Home", icon: <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { to: "/shop", label: "Shop", icon: <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { to: "/about", label: "About", icon: <Info className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { to: "/contact", label: "Contact", icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  // Right corner items (Register and My Orders)
  const rightNavItems = [
    { to: "/register", label: "Register", icon: <User className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { to: "/my-orders", label: "My Orders", icon: <Package className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm">
        Call Us: +91 8925811161 | Lakshayaa Collections
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-luxury-gold/80 via-primary/20 to-white/80 border-b border-border sticky top-0 z-40 shadow-soft">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-12 sm:h-14">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-luxury-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-lg">L</span>
                </div>
                <div className="text-sm sm:text-lg lg:text-xl font-luxury font-semibold text-primary">
                  Lakshayaa Collections
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg font-semibold transition-all duration-200 touch-manipulation min-h-[40px] ${
                    location.pathname === item.to
                      ? "bg-primary text-white shadow-md"
                      : "hover:bg-primary/10 text-primary hover:text-primary"
                  }`}
                >
                  {item.icon}
                  <span className="text-xs sm:text-sm lg:text-base">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Desktop Right Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {rightNavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg font-semibold transition-all duration-200 touch-manipulation min-h-[40px] ${
                    location.pathname === item.to
                      ? "bg-primary text-white shadow-md"
                      : "hover:bg-primary/10 text-primary hover:text-primary"
                  }`}
                >
                  {item.icon}
                  <span className="text-xs sm:text-sm lg:text-base">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="touch-manipulation min-h-[40px] min-w-[40px]"
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
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {mainNavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 touch-manipulation min-h-[44px] ${
                    location.pathname === item.to
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-primary/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {rightNavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 touch-manipulation min-h-[44px] ${
                    location.pathname === item.to
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-primary/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col w-full max-w-full overflow-x-hidden">
          <LeftSidebar />
          <div className="xl:ml-16 flex-1 flex flex-col w-full max-w-full">
            <NavBar />
            <main className="flex-1 bg-gray-50 w-full max-w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/my-orders" element={<MyOrders />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer className="mt-auto" />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;