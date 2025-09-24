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
    <div className="min-h-screen bg-white">
    {/* Enhanced Header Section */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroJewelry}
        alt="Luxury Jewellery Collection"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      {/* Overlay */}
  {/* Removed heavy overlay for a cleaner look */}
      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-10 h-10 text-luxury-gold animate-bounce" />
        </div>
        <h1 className="text-5xl md:text-6xl font-luxury font-bold text-white mb-4 drop-shadow-lg">
          Where Elegance <span className="text-luxury-gold">Meets Everyday</span>
        </h1>
        <p className="text-xl text-white/90 mb-6">
          Discover our exquisite collection of handcrafted jewellery and accessories.<br />
          <span className="text-luxury-gold font-semibold">Affordable luxury</span> that defines your unique style.
        </p>
        <Button
          size="lg"
          className="bg-luxury-gold text-white font-bold shadow-lg hover:bg-primary transition"
          onClick={() => navigate("/shop")}
        >
          Shop Now <ArrowRight className="ml-2" />
        </Button>
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex items-center gap-2 text-white/90">
            <Shield className="w-5 h-5 text-luxury-gold" />
            <span>Secure Payments</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Truck className="w-5 h-5 text-luxury-gold" />
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <RefreshCw className="w-5 h-5 text-luxury-gold" />
            <span>Easy Returns</span>
          </div>
        </div>
      </div>
    </section>

    {/* Products Section */}
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-luxury font-bold text-primary mb-2">
            Our Jewellery Collection
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover exquisite handcrafted jewellery designed for the modern woman
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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