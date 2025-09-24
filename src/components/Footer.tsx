import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  

  const policies = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Shipping Policy", path: "/shipping" },
    { name: "Return Policy", path: "/returns" },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div className="text-2xl font-luxury font-semibold">
                Lakshayaa Collections
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Where elegance meets everyday. Discover our exquisite collection of 
              handcrafted jewelry designed for the modern woman.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/lakshayaa_collections" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="tel:+918925811161" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@lakshayaa.com" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-luxury font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-luxury-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          

          {/* Contact Info */}
          <div >
            <h3 className="text-lg font-luxury font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 8925811161</p>
                  <p className="text-sm text-gray-400">Mon-Sun 10AM-7PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@lakshayaa.com</p>
                  <p className="text-sm text-gray-400">Email us anytime</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Chennai,Tamilnadu</p>
                  <p className="text-sm text-gray-400">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2025 Lakshayaa Collections. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-luxury-gold fill-current" />
              <span>for jewellery lovers</span>
            </div>
            <div className="flex space-x-6 text-sm">
              {policies.map((policy) => (
                <Link 
                  key={policy.name}
                  to={policy.path} 
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  {policy.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;