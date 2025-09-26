import { User, Order } from "../types/models";

// Register a user
export async function registerUser(user: User) {
  const res = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
}

// Login a user
export async function loginUser(email: string, password: string): Promise<User> {
  // Simulate login by fetching user or mock
  const res = await fetch(`/api/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    throw new Error("Invalid credentials");
  }
  return res.json();
}

// Place an order
export async function placeOrder(order: Order) {
  const res = await fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  return res.json();
}

// Fetch order history
export async function fetchOrderHistory(user_id: string): Promise<Order[]> {
  const res = await fetch(`/api/orders/${user_id}`);
  return res.json();
}