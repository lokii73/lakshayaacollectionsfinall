import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Sparkles, Target, Eye, Info } from "lucide-react";
import { Link } from "react-router-dom";
import modelJewelry from "@/assets/model-jewelry.jpg";
import jewelryCollection from "@/assets/jewelry-collection.jpg";

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Craftsmanship",
      description: "Every piece is meticulously handcrafted by skilled artisans with attention to the finest details."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Affordable Luxury",
      description: "We believe luxury should be accessible. Our pieces offer premium quality at prices that won't break the bank."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer-Centric",
      description: "Your satisfaction is our priority. We're committed to providing exceptional service and beautiful jewelry."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Unique Designs",
      description: "Our designs blend traditional elegance with modern trends, creating pieces that are truly timeless."
    }
  ];


  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={modelJewelry} 
            alt="About Lakshayaa Collections" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-luxury font-bold text-white mb-6">
            About Lakshayaa Collections
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Where passion meets craftsmanship to create jewellery that tells your unique story
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-luxury font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Lakshayaa Collections was born from a simple belief: every woman deserves to feel beautiful, 
                  confident, and elegantly adorned, regardless of the occasion. Founded with a passion for 
                  exquisite craftsmanship and accessible luxury, we set out to create jewelry that speaks to 
                  the modern woman's heart.
                </p>
                <p>
                  Our journey began with a vision to bridge the gap between traditional artistry and 
                  contemporary design. Each piece in our collection is carefully curated and handcrafted 
                  by skilled artisans who pour their expertise and love into every detail.
                </p>
                <p>
                  From delicate everyday pieces to statement jewelry for special occasions, we offer a 
                  diverse range that caters to different styles, preferences, and budgets. Our commitment 
                  to quality, affordability, and customer satisfaction has made us a trusted name in the 
                  jewelry industry.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={jewelryCollection} 
                alt="Our Story"
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-elegant border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-luxury font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To make luxury jewelry accessible to every woman by offering beautifully crafted, 
                  high-quality pieces at affordable prices, while maintaining the highest standards 
                  of craftsmanship and customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-luxury font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To become the most trusted and beloved jewelry brand, known for empowering women 
                  to express their unique style and personality through our exquisite, 
                  handcrafted jewellery collections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-luxury font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every piece we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-luxury">
                  {value.icon}
                </div>
                <h3 className="text-xl font-luxury font-semibold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;