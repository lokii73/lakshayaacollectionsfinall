import { useState } from "react";
import { placeOrder } from "../lib/api";
import { Order } from "../types/models";

export default function PlaceOrder() {
  const [form, setForm] = useState<Order>({
    order_id: "",
    user_id: "",
    product_id: "",
    quantity: 1,
    order_date: new Date().toISOString(),
    status: "pending",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await placeOrder(form);
    alert("Order placed!");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs for order_id, user_id, product_id, quantity, status */}
      {/* ...existing code for inputs... */}
      <button type="submit">Place Order</button>
    </form>
  );
}