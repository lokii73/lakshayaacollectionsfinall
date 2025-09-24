import { Link } from "react-router-dom";
import RegisterUser from "../components/RegisterUser";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-elegant flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4 border-luxury text-luxury hover:bg-luxury-gold">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        <RegisterUser />
      </div>
    </div>
  );
}
