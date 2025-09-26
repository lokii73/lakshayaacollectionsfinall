import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [added, setAdded] = useState(false);
  const product = products.find((p) => p.id === id);

  const handleAddToCart = () => {
    addToCart(product!);
    setAdded(true);
    toast({
      title: "Added to Cart",
      description: product?.name,
    });
    setTimeout(() => setAdded(false), 1000);
  };

  if (!product) {
    return (
      <div className="bg-gray-50 flex flex-col w-full max-w-full overflow-x-hidden">
        <div className="flex-1 flex items-center justify-center p-3 sm:p-4">
          <div className="text-center max-w-sm mx-auto">
            <h1 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">Product Not Found</h1>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">The product you're looking for doesn't exist.</p>
            <Button onClick={() => window.history.back()} className="w-full sm:w-auto text-xs sm:text-sm py-2 sm:py-2.5">Go Back</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 flex flex-col w-full max-w-full overflow-x-hidden">
      <div className="flex-1 p-3 sm:p-4 lg:p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Product Image - Optimized for mobile */}
              <div className="relative aspect-square lg:aspect-auto lg:h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details - Optimized for mobile */}
              <div className="p-3 sm:p-4 lg:p-6">
                <CardContent className="p-0 mb-4 sm:mb-6">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-luxury font-bold text-primary mb-2 sm:mb-3">
                    {product.name}
                  </h1>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
                      ₹{product.price}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-3 p-0">
                  <Button
                    onClick={handleAddToCart}
                    variant={added ? "secondary" : "default"}
                    className={`w-full sm:flex-1 text-xs sm:text-sm py-2.5 sm:py-3 text-base sm:text-lg font-semibold ${added ? "bg-green-500 text-white" : ""}`}
                    disabled={added}
                    size="lg"
                  >
                    {added ? "Added!" : "Add to Cart"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.history.back()}
                    className="w-full sm:w-auto text-xs sm:text-sm py-2.5 sm:py-3 px-4 sm:px-6"
                  >
                    Continue Shopping
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;