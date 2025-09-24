import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-2 mb-6">
        <ShoppingCart className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold">Your Cart</h1>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <Card key={item.id} className="flex flex-col md:flex-row items-center shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded m-2"
                />
                <CardContent className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
            <div className="text-right text-xl font-bold mt-4">
              Total Price: ₹{getTotalPrice()}
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Link to="/checkout">
              <Button size="lg" className="bg-luxury-gold text-white hover:bg-primary">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;