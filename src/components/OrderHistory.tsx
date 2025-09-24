import { useState } from "react";
import { fetchOrderHistory } from "../lib/api";
import { Order } from "../types/models";

export default function OrderHistory() {
  const [userId, setUserId] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);

  const handleFetch = async () => {
    const data = await fetchOrderHistory(userId);
    setOrders(data);
  };

  return (
    <div>
      <input
        value={userId}
        onChange={e => setUserId(e.target.value)}
        placeholder="Enter user_id"
      />
      <button onClick={handleFetch}>Fetch Orders</button>
      <ul>
        {orders.map(order => (
          <li key={order.order_id}>{order.product_id} - {order.status}</li>
        ))}
      </ul>
    </div>
  );
}