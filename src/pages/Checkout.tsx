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
    return <div className="container mx-auto py-8">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {success ? (
        <div className="text-green-600 text-xl font-semibold">Order placed successfully! Thank you.</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cart Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <Card key={item.id} className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded m-2"
                  />
                  <CardContent className="flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div>Qty: {item.quantity}</div>
                    <div>Price: ₹{item.price * item.quantity}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-right text-lg font-bold mt-4 flex items-center justify-end gap-2">
              <IndianRupee className="w-5 h-5" />
              Total: ₹{getTotalPrice()}
            </div>
          </div>
          {/* Payment Form */}
          <form onSubmit={handleOrder} className="space-y-4 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <input
              className="w-full border p-2 rounded"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full border p-2 rounded"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="w-full border p-2 rounded"
              name="address"
              placeholder="Shipping Address"
              value={form.address}
              onChange={handleChange}
              required
            />
            <div>
              <div className="mb-2 font-medium">Select Payment Method</div>
              <div className="flex gap-4">
                {paymentMethods.map((method) => (
                  <label
                    key={method.value}
                    className={`flex items-center cursor-pointer border rounded px-3 py-2 ${
                      form.payment === method.value
                        ? "border-primary bg-primary/10"
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
                className="w-full border p-2 rounded mt-2"
                name="upi"
                placeholder="Enter your UPI ID"
                value={form.upi}
                onChange={handleChange}
                required
              />
            )}
            <Button type="submit" className="w-full">
              Place Order
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;