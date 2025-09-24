import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
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
import { Home as HomeIcon, ShoppingBag, Info, Mail, User, Package } from "lucide-react";

function NavBar() {
  const location = useLocation();
  const { cart } = useCart();

  // Main navigation items (left/center)
  const mainNavItems = [
    { to: "/", label: "Home", icon: <HomeIcon className="w-5 h-5" /> },
    { to: "/shop", label: "Shop", icon: <ShoppingBag className="w-5 h-5" /> },
    { to: "/cart", label: "Cart", icon: <ShoppingBag className="w-5 h-5" />, badge: cart.length },
    { to: "/about", label: "About", icon: <Info className="w-5 h-5" /> },
    { to: "/contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ];

  // Right corner items (Register and My Orders)
  const rightNavItems = [
    { to: "/register", label: "Register", icon: <User className="w-5 h-5" /> },
    { to: "/my-orders", label: "My Orders", icon: <Package className="w-5 h-5" /> },
  ];

  return (
    <nav className="flex justify-between items-center p-4 border-b bg-gradient-to-r from-luxury-gold/80 via-primary/20 to-white/80 shadow sticky top-0 z-50">
      {/* Left/Center - Main navigation */}
      <div className="flex gap-4">
        {mainNavItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`relative flex items-center gap-1 px-3 py-2 rounded-lg font-semibold transition
              ${location.pathname === item.to ? "bg-primary text-white shadow" : "hover:bg-primary/10 text-primary"}`}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.label}</span>
            {item.badge > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </div>

      {/* Right corner - Register and My Orders */}
      <div className="flex gap-4">
        {rightNavItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`relative flex items-center gap-1 px-3 py-2 rounded-lg font-semibold transition
              ${location.pathname === item.to ? "bg-primary text-white shadow" : "hover:bg-primary/10 text-primary"}`}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
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
      </Router>
    </CartProvider>
  );
}

export default App;