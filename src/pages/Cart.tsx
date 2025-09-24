import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="bg-gray-50 flex flex-col w-full max-w-full overflow-x-hidden">
      <div className="flex-1 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Your Cart</h1>
          </div>
          {cart.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <p className="text-base sm:text-lg text-muted-foreground">Your cart is empty.</p>
            </div>
          ) : (
            <>
              <div className="space-y-3 sm:space-y-4">
                {cart.map((item) => (
                  <Card key={item.id} className="flex flex-col sm:flex-row items-center shadow-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 sm:h-24 sm:w-24 object-cover rounded m-3 sm:m-4"
                    />
                    <CardContent className="flex-1 p-3 sm:p-4">
                      <h2 className="font-semibold text-sm sm:text-base">{item.name}</h2>
                      <p className="text-xs sm:text-sm text-muted-foreground">Price: ₹{item.price}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </CardContent>
                    <CardFooter className="p-3 sm:p-4">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs sm:text-sm"
                      >
                        Remove
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                <div className="text-right text-lg sm:text-xl font-bold mt-4 sm:mt-6 p-3 sm:p-4 bg-white rounded-lg shadow">
                  Total Price: ₹{getTotalPrice()}
                </div>
              </div>
              <div className="flex justify-center sm:justify-end mt-4 sm:mt-6">
                <Link to="/checkout">
                  <Button size="lg" className="bg-luxury-gold text-white hover:bg-primary w-full sm:w-auto text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;