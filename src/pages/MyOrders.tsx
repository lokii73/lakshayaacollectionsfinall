import { useState, useEffect } from "react";
import { fetchOrderHistory } from "../lib/api";
import { Order } from "../types/models";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Package, Search, RefreshCw } from "lucide-react";

export default function MyOrders() {
  const [userId, setUserId] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchOrders = async () => {
    if (!userId) {
      setError("Please enter a User ID to fetch orders.");
      return;
    }
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

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex flex-col w-full max-w-full overflow-x-hidden">
      <div className="flex-1 py-4 sm:py-6 lg:py-8 bg-gradient-to-br from-luxury-gold/10 via-white to-luxury-rose-gold/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-luxury mb-2 sm:mb-3">My Orders</h1>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600">View and track all your placed orders</p>
          </div>

          <Card className="w-full max-w-sm sm:max-w-md mx-auto mb-4 sm:mb-6 shadow-luxury">
            <CardHeader>
              <CardTitle className="text-luxury flex items-center gap-2 text-sm sm:text-base">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                Search Orders
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">Enter your User ID to view your order history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <Label htmlFor="user_id" className="text-luxury font-semibold text-xs sm:text-sm">User ID</Label>
                  <Input
                    id="user_id"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter your User ID"
                    className="border-luxury focus:border-luxury-gold focus:ring-luxury-gold text-xs sm:text-sm"
                  />
                </div>
                <Button
                  onClick={handleFetchOrders}
                  disabled={loading}
                  className="w-full bg-luxury-gold hover:bg-luxury-rose-gold text-white font-semibold text-xs sm:text-sm py-2 sm:py-2.5"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-spin" />
                      Fetching...
                    </>
                  ) : (
                    <>
                      <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      View My Orders
                    </>
                  )}
                </Button>
                {error && <p className="text-red-500 text-xs sm:text-sm">{error}</p>}
              </div>
            </CardContent>
          </Card>

          {orders.length > 0 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-luxury mb-1 sm:mb-2">Your Orders</h2>
                <p className="text-xs sm:text-sm text-gray-600">Found {orders.length} order(s)</p>
              </div>

              <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
                {orders.map((order) => (
                  <Card key={order.order_id} className="shadow-elegant hover:shadow-luxury transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-sm sm:text-base text-luxury">Order #{order.order_id}</CardTitle>
                        <Badge className={`${getStatusColor(order.status)} text-xs sm:text-sm`}>
                          {order.status}
                        </Badge>
                      </div>
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
                        <Separator />
                        <div className="text-center">
                          <p className="text-xs sm:text-sm text-gray-500">Order Status</p>
                          <p className="font-bold text-luxury text-xs sm:text-sm">{order.status.toUpperCase()}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {orders.length === 0 && !loading && userId && (
            <div className="text-center py-8 sm:py-12">
              <Package className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-500 mb-1 sm:mb-2">No Orders Found</h3>
              <p className="text-xs sm:text-sm text-gray-400">No orders found for User ID: {userId}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
