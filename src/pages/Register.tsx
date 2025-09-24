import { Link } from "react-router-dom";
import RegisterUser from "../components/RegisterUser";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Register() {
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
          <RegisterUser />
        </div>
      </div>
    </div>
  );
}
