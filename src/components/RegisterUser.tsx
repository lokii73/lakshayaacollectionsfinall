import { useState } from "react";
import { registerUser } from "../lib/api";
import { User } from "../types/models";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function RegisterUser() {
  const [form, setForm] = useState<User>({
    user_id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await registerUser(form);
      alert("User registered successfully!");
      setForm({ user_id: "", name: "", email: "", phone: "", address: "" });
    } catch (err) {
      setError("Failed to register user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-luxury">
      <CardHeader>
        <CardTitle className="text-luxury text-2xl font-bold">Register User</CardTitle>
        <CardDescription className="text-gray-600">
          Enter your details to create an account and start your luxury jewelry journey.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="user_id" className="text-luxury font-semibold">User ID</Label>
            <Input
              id="user_id"
              name="user_id"
              value={form.user_id}
              onChange={handleChange}
              required
              className="border-luxury focus:border-luxury-gold focus:ring-luxury-gold"
              placeholder="Enter your unique user ID"
            />
          </div>
          <div>
            <Label htmlFor="name" className="text-luxury font-semibold">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="border-luxury focus:border-luxury-gold focus:ring-luxury-gold"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-luxury font-semibold">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="border-luxury focus:border-luxury-gold focus:ring-luxury-gold"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-luxury font-semibold">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="border-luxury focus:border-luxury-gold focus:ring-luxury-gold"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <Label htmlFor="address" className="text-luxury font-semibold">Address</Label>
            <Input
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="border-luxury focus:border-luxury-gold focus:ring-luxury-gold"
              placeholder="Enter your full address"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-luxury-gold hover:bg-luxury-rose-gold text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
