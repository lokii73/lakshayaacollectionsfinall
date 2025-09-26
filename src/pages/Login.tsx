import { Link } from "react-router-dom";
import LoginUser from "../components/LoginUser";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  return (
    <div className="bg-gradient-elegant flex flex-col w-full max-w-full overflow-x-hidden">
      <div className="flex-1 flex items-center justify-center p-3 sm:p-4">
        <div className="w-full max-w-sm sm:max-w-md">
          <div className="mb-4 sm:mb-6">
            <Link to="/">
              <Button variant="outline" className="mb-3 sm:mb-4 border-luxury text-luxury hover:bg-luxury-gold text-xs sm:text-sm py-2 sm:py-2.5">
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <LoginUser />
        </div>
      </div>
    </div>
  );
}
