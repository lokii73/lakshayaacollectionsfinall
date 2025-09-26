import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../lib/api";
import { User } from "../types/models";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function LoginUser() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const user = await loginUser(form.email, form.password);
      localStorage.setItem("user", JSON.stringify(user));
      alert("Logged in successfully!");
      navigate("/");
    } catch (err) {
      setError("Failed to login. Please check your email and password and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-luxury">
      <CardHeader>
        <CardTitle className="text-luxury text-2xl font-bold">Login</CardTitle>
        <CardDescription className="text-gray-600">
          Enter your email and password to access your account. New user? Register below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-luxury font-semibold">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="border-luxury focus:border-luxury-gold focus:ring-luxury-gold"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-luxury font-semibold">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              className="border-luxury focus:border-luxury-gold focus:ring-luxury-gold"
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-luxury-gold hover:bg-luxury-rose-gold text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            New user? <Link to="/register" className="text-luxury-gold hover:underline font-semibold">Register here</Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
