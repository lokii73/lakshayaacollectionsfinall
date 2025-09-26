import { Phone, Instagram, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+91 8925811161",
      action: "Call us",
      href: "tel:+918925811161"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Email", 
      info: "info@lakshayaa.com",
      action: "Send email",
      href: "mailto:info@lakshayaa.com"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      info: "@lakshayaa_collections",
      action: "Follow us",
      href: "https://www.instagram.com/lakshayaacollections?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "chennai,Tamilnadu",
      action: "",
      href: "#"
    }
  ];

  return (
    <div className="bg-background flex flex-col w-full max-w-full overflow-x-hidden">
      <div className="flex-1 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">Contact Information</h1>
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
              Get in touch with us using the details below.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="shadow-soft border-0 hover:shadow-luxury transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-luxury-gold rounded-full flex items-center justify-center text-white">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-luxury font-semibold text-primary mb-2 text-sm sm:text-base">
                        {contact.title}
                      </h3>
                      <p className="text-muted-foreground mb-3 text-xs sm:text-sm">
                        {contact.info}
                      </p>
                      {contact.action && (
                        <a
                          href={contact.href}
                          className="inline-block text-luxury-gold hover:underline font-medium text-xs sm:text-sm"
                        >
                          {contact.action}
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;