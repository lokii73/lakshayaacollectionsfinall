import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Truck, RefreshCw, Heart, ShoppingBag, Sparkles } from "lucide-react";
import heroJewelry from "@/assets/hero-jewelry.jpg";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex flex-col w-full max-w-full overflow-x-hidden">
      {/* Enhanced Header Section - Optimized for 360x640 */}
      <section className="relative h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden flex-shrink-0">
        {/* Background Image */}
        <img
          src={heroJewelry}
          alt="Luxury Jewellery Collection"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        {/* Content */}
        <div className="relative z-10 text-center max-w-[90%] sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-2 sm:mb-4">
            <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-luxury-gold animate-bounce" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-luxury font-bold text-white mb-2 sm:mb-4 drop-shadow-lg leading-tight">
            Where Elegance <span className="text-luxury-gold">Meets Everyday</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-3 sm:mb-6 px-2 leading-relaxed">
            <span className="block sm:hidden">Discover our exquisite collection of handcrafted jewellery and accessories.</span>
            <span className="hidden sm:block">Discover our exquisite collection of handcrafted jewellery and accessories.</span>
            <br className="hidden sm:block" />
            <span className="text-luxury-gold font-semibold">Affordable luxury</span> that defines your unique style.
          </p>
          <Button
            size="sm"
            className="bg-luxury-gold text-white font-bold shadow-lg hover:bg-primary transition text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3 mb-3 sm:mb-6"
            onClick={() => navigate("/shop")}
          >
            <span className="hidden sm:inline">Shop Now</span>
            <span className="sm:hidden">Shop</span>
            <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 lg:gap-6 mt-2 sm:mt-4 lg:mt-6">
            <div className="flex items-center justify-center gap-1 sm:gap-2 text-white/90">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-luxury-gold" />
              <span className="text-xs sm:text-sm">Secure Payments</span>
            </div>
            <div className="flex items-center justify-center gap-1 sm:gap-2 text-white/90">
              <Truck className="w-3 h-3 sm:w-4 sm:h-4 text-luxury-gold" />
              <span className="text-xs sm:text-sm">Fast Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-1 sm:gap-2 text-white/90">
              <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 text-luxury-gold" />
              <span className="text-xs sm:text-sm">Easy Returns</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Optimized for mobile */}
      <section className="flex-1 py-4 sm:py-6 lg:py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-luxury font-bold text-primary mb-1 sm:mb-2">
              Our Jewellery Collection
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground px-2">
              Discover exquisite handcrafted jewellery designed for the modern woman
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;