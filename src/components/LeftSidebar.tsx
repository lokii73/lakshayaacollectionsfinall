import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, UserPlus } from "lucide-react";
import { useCart } from "../context/CartContext";

const LeftSidebar = () => {
  const location = useLocation();
  const { cart } = useCart();

  const sidebarItems = [
    { to: "/cart", icon: <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />, label: "Cart", badge: cart.length },
    { to: "/register", icon: <UserPlus className="h-4 w-4 sm:h-5 sm:w-5" />, label: "Register" },
  ];

  return (
    <>
      {/* Desktop Left Sidebar */}
      <div className="fixed left-1 sm:left-2 top-1/2 transform -translate-y-1/2 z-40 hidden xl:flex flex-col space-y-2 sm:space-y-3">
        {sidebarItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg border border-gray-200 transition-all duration-200 touch-manipulation ${
              location.pathname === item.to
                ? "bg-luxury-gold text-white shadow-xl"
                : "hover:bg-luxury-gold hover:text-white hover:shadow-xl"
            }`}
            title={item.label}
          >
            {item.icon}
            {item.badge > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1 min-w-[14px] sm:min-w-[16px] h-3 sm:h-4 flex items-center justify-center text-xs">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </div>

      {/* Mobile Bottom Navigation - Optimized for 360x640 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 xl:hidden bg-white border-t border-gray-200 shadow-lg">
        <div className="flex items-center justify-around py-1.5 sm:py-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative flex flex-col items-center justify-center py-1 px-1.5 sm:px-2 rounded-lg transition-all duration-200 touch-manipulation min-h-[44px] ${
                location.pathname === item.to
                  ? "text-luxury-gold"
                  : "text-gray-600 hover:text-luxury-gold"
              }`}
            >
              <div className={`relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 ${
                location.pathname === item.to ? "text-luxury-gold" : ""
              }`}>
                {item.icon}
                {item.badge > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-0.5 sm:px-1 min-w-[14px] h-3 sm:h-4 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs font-medium mt-0.5">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Add bottom padding on mobile to account for fixed bottom nav */}
      <div className="h-14 xl:hidden"></div>
    </>
  );
};

export default LeftSidebar;
