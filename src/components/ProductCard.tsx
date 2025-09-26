import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "../context/CartContext";
import { useCart } from "../context/CartContext";
import { useToast } from "@/hooks/use-toast";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    toast({
      title: "Added to Cart",
      description: product.name,
    });
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <Card className="flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 group border-0 overflow-hidden relative h-full">
      <div className="relative h-32 sm:h-40 lg:h-48">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="flex-1 p-2 sm:p-3 lg:p-4">
        <h2 className="text-xs sm:text-sm lg:text-base font-semibold text-primary group-hover:text-luxury-gold transition-colors line-clamp-2 mb-1 sm:mb-2">
          {product.name}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-primary font-bold">₹{product.price}</p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-1 sm:gap-2 p-2 sm:p-3 lg:p-4 pt-0">
        <Link to={`/products/${product.id}`} className="w-full sm:w-auto">
          <Button variant="outline" className="w-full text-xs sm:text-sm py-1.5 sm:py-2">
            View Details
          </Button>
        </Link>
        <Button
          onClick={handleAddToCart}
          variant={added ? "secondary" : "luxury"}
          className={`w-full text-xs sm:text-sm py-1.5 sm:py-2 ${added ? "bg-green-500 text-white" : ""}`}
          disabled={added}
        >
          {added ? "Added!" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;