import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="container mx-auto py-8 flex justify-center">
      <Card className="max-w-lg w-full">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover rounded-t"
        />
        <CardContent>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="mb-4">{product.description}</p>
          <span className="text-xl font-semibold text-primary">
            ₹{product.price}
          </span>
        </CardContent>
        <CardFooter>
          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetails;