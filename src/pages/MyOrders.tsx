import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchOrderHistory } from "../lib/api";
import { Order, User } from "../types/models";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Package, RefreshCw } from "lucide-react";

export default function MyOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser: User = JSON.parse(user);
      handleFetchOrders(parsedUser.user_id);
    } else {
      setError("Please login to view your orders.");
    }
  }, []);

  const handleFetchOrders = async (userId: string) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchOrderHistory(userId);
      setOrders(data);
    } catch (err) {
      setError("Failed to fetch orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-full overflow-x-hidden">
      <div className="flex-1 py-4 sm:py-6 lg:py-8 bg-gradient-to-br from-luxury-gold/10 via-white to-luxury-rose-gold/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-luxury mb-2 sm:mb-3">My Orders</h1>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600">View all your placed orders</p>
          </div>

          {loading && (
            <div className="text-center py-8 sm:py-12">
              <Package className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4 animate-spin" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-500">Loading your orders...</h3>
            </div>
          )}

          {error && (
            <div className="text-center py-8 sm:py-12">
              <Package className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-2 sm:mb-3">{error}</h3>
              <Button asChild className="bg-luxury-gold hover:bg-luxury-rose-gold text-white">
                <Link to="/login">Login to View Orders</Link>
              </Button>
            </div>
          )}

          {orders.length > 0 && !loading && !error && (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-luxury mb-1 sm:mb-2">Your Orders</h2>
                <p className="text-xs sm:text-sm text-gray-600">Found {orders.length} order(s)</p>
              </div>

              <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
                {orders.map((order) => (
                  <Card key={order.order_id} className="shadow-elegant hover:shadow-luxury transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-sm sm:text-base text-luxury">Order #{order.order_id}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">
                        Product ID: {order.product_id}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600 text-xs sm:text-sm">Quantity:</span>
                          <span className="font-semibold text-xs sm:text-sm">{order.quantity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 text-xs sm:text-sm">Order Date:</span>
                          <span className="font-semibold text-xs sm:text-sm">
                            {new Date(order.order_date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {orders.length === 0 && !loading && !error && (
            <div className="text-center py-8 sm:py-12">
              <Package className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-500 mb-1 sm:mb-2">No Orders Found</h3>
              <p className="text-xs sm:text-sm text-gray-400">You haven't placed any orders yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
