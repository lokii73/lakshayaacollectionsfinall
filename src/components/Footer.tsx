import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin, Heart } from "lucide-react";

type FooterProps = {
  className?: string;
};

const Footer = ({ className = "" }: FooterProps) => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className={`bg-primary text-white ${className}`}>
      {/* Main Footer - Optimized for mobile */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-luxury-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">L</span>
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-luxury font-semibold">
                Lakshayaa Collections
              </div>
            </Link>
            <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
              Where elegance meets everyday. Discover our exquisite collection of
              handcrafted jewelry designed for the modern woman.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <a
                href="https://instagram.com/lakshayaa_collections"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors touch-manipulation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href="tel:+918925811161"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors touch-manipulation"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href="mailto:info@lakshayaa.com"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors touch-manipulation"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm sm:text-base font-luxury font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-luxury-gold transition-colors text-xs sm:text-sm touch-manipulation py-0.5 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm sm:text-base font-luxury font-semibold mb-3 sm:mb-4">Contact Info</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">+91 8925811161</p>
                  <p className="text-xs text-gray-400">Mon-Sun 10AM-7PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">info@lakshayaa.com</p>
                  <p className="text-xs text-gray-400">Email us anytime</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">Chennai, Tamilnadu</p>
                  <p className="text-xs text-gray-400">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 sm:space-y-3 lg:space-y-0">
            <div className="text-xs text-gray-300 text-center lg:text-left">
              © 2025 Lakshayaa Collections. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-300">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-luxury-gold fill-current" />
              <span>for jewellery lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
