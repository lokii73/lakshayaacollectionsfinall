import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "../context/CartContext";
import { useCart } from "../context/CartContext";
import { Heart } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <Card className="flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 group border-0 overflow-hidden relative">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 bg-white/80 hover:bg-luxury-gold/80 text-luxury-gold"
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>
      <CardContent className="flex-1">
        <h2 className="text-lg font-semibold text-primary group-hover:text-luxury-gold transition-colors">
          {product.name}
        </h2>
        <p className="text-primary font-bold">₹{product.price}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link to={`/products/${product.id}`}>
          <Button variant="outline">View Details</Button>
        </Link>
        <Button
          onClick={handleAddToCart}
          variant={added ? "secondary" : "luxury"}
          className={added ? "bg-green-500 text-white" : ""}
          disabled={added}
        >
          {added ? "Added!" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;