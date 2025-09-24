import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { IndianRupee, Smartphone, QrCode } from "lucide-react";

const paymentMethods = [
  {
    label: "UPI ID",
    value: "upi",
    icon: <QrCode className="inline w-5 h-5 mr-1" />,
  },
  {
    label: "GPay",
    value: "gpay",
    icon: <Smartphone className="inline w-5 h-5 mr-1" />,
  },
  {
    label: "PhonePe",
    value: "phonepe",
    icon: <Smartphone className="inline w-5 h-5 mr-1" />,
  },
];

const Checkout = () => {
  const { cart, getTotalPrice } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "",
    upi: "",
  });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (value: string) => {
    setForm({ ...form, payment: value });
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate("/");
      window.location.reload(); // To clear cart (since context is in-memory)
    }, 2000);
  };

  if (cart.length === 0 && !success) {
    return (
      <div className="bg-gray-50 flex flex-col w-full max-w-full overflow-x-hidden">
        <div className="flex-1 flex items-center justify-center py-8 sm:py-12">
          <div className="text-center">
            <p className="text-base sm:text-lg text-muted-foreground">Your cart is empty.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 flex flex-col w-full max-w-full overflow-x-hidden">
      <div className="flex-1 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Checkout</h1>
          {success ? (
            <div className="text-center py-8 sm:py-12">
              <div className="text-green-600 text-lg sm:text-xl font-semibold">Order placed successfully! Thank you.</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Cart Summary */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Order Summary</h2>
                <div className="space-y-3 sm:space-y-4">
                  {cart.map((item) => (
                    <Card key={item.id} className="flex flex-col sm:flex-row items-center shadow-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 sm:h-16 sm:w-16 object-cover rounded m-3 sm:m-2"
                      />
                      <CardContent className="flex-1 p-3 sm:p-4">
                        <div className="font-semibold text-sm sm:text-base">{item.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Qty: {item.quantity}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Price: ₹{item.price * item.quantity}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-right text-lg sm:text-xl font-bold mt-4 sm:mt-6 p-3 sm:p-4 bg-white rounded-lg shadow flex items-center justify-end gap-2">
                  <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5" />
                  Total: ₹{getTotalPrice()}
                </div>
              </div>
              {/* Payment Form */}
              <form onSubmit={handleOrder} className="space-y-4 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Payment Details</h2>
                <input
                  className="w-full border border-gray-300 p-2 sm:p-3 rounded text-sm sm:text-base focus:border-luxury-gold focus:ring-luxury-gold"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full border border-gray-300 p-2 sm:p-3 rounded text-sm sm:text-base focus:border-luxury-gold focus:ring-luxury-gold"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  className="w-full border border-gray-300 p-2 sm:p-3 rounded text-sm sm:text-base focus:border-luxury-gold focus:ring-luxury-gold"
                  name="address"
                  placeholder="Shipping Address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  rows={3}
                />
                <div>
                  <div className="mb-2 font-medium text-sm sm:text-base">Select Payment Method</div>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    {paymentMethods.map((method) => (
                      <label
                        key={method.value}
                        className={`flex items-center cursor-pointer border rounded px-3 py-2 text-sm sm:text-base ${
                          form.payment === method.value
                            ? "border-luxury-gold bg-luxury-gold/10"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method.value}
                          checked={form.payment === method.value}
                          onChange={() => handlePaymentChange(method.value)}
                          className="mr-2"
                          required
                        />
                        {method.icon}
                        {method.label}
                      </label>
                    ))}
                  </div>
                </div>
                {form.payment === "upi" && (
                  <input
                    className="w-full border border-gray-300 p-2 sm:p-3 rounded mt-2 text-sm sm:text-base focus:border-luxury-gold focus:ring-luxury-gold"
                    name="upi"
                    placeholder="Enter your UPI ID"
                    value={form.upi}
                    onChange={handleChange}
                    required
                  />
                )}
                <Button type="submit" className="w-full bg-luxury-gold hover:bg-primary text-white py-2 sm:py-3 text-sm sm:text-base">
                  Place Order
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;