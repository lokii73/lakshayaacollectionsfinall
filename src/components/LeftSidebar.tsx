import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, UserPlus } from "lucide-react";
import { useCart } from "../context/CartContext";

const LeftSidebar = () => {
  const location = useLocation();
  const { cart } = useCart();

  const sidebarItems = [
    { to: "/cart", icon: <ShoppingCart className="h-6 w-6" />, label: "Cart", badge: cart.length },
    { to: "/register", icon: <UserPlus className="h-6 w-6" />, label: "Register" },
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
      {sidebarItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 transition-all duration-200 ${
            location.pathname === item.to
              ? "bg-luxury-gold text-white"
              : "hover:bg-luxury-gold hover:text-white"
          }`}
          title={item.label}
        >
          {item.icon}
          {item.badge > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
              {item.badge}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default LeftSidebar;
