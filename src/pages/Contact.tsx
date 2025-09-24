import { Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Instagram, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+91 8925811161",
      action: "Call us",
      href: "tel:+918925811161"
    },
    {
      icon: <Mail className="w-6 h-6" />,
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
      href: "https://instagram.com/lakshayaa_collections"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "chennai,Tamilnadu",
      action: "",
      href: "#"
    }
  ];

  const businessHours = [
    { day: "Monday - sunday", hours: "24/7" },
    
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto py-16 flex flex-col items-center">
        <Mail className="w-12 h-12 text-primary mb-4" />
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl text-center mb-6">
          Have questions? Reach out to us at <a href="mailto:info@lakshayaacollections.com" className="text-primary underline">info@lakshayaacollections.com</a>
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <input className="w-full border p-2 rounded" placeholder="Your Name" required />
          <input className="w-full border p-2 rounded" type="email" placeholder="Your Email" required />
          <textarea className="w-full border p-2 rounded" placeholder="Your Message" required />
          <button className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-luxury-gold transition">Send Message</button>
        </form>
      </div>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-luxury font-bold text-primary mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="What is this about?"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2 min-h-32"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button type="submit" variant="luxury" size="lg" className="w-full">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-luxury font-bold text-primary mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <Card key={index} className="shadow-soft border-0">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center text-white flex-shrink-0">
                            {contact.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-luxury font-semibold text-primary mb-1">
                              {contact.title}
                            </h3>
                            <p className="text-muted-foreground mb-2">
                              {contact.info}
                            </p>
                            <a 
                              href={contact.href}
                              className="text-luxury-gold hover:underline font-medium"
                            >
                              {contact.action}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="shadow-soft border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center text-white">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-luxury font-semibold text-primary">
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium text-primary">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-luxury font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Here are some common questions we receive. If you have any other questions, feel free to contact us!
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is your return policy?",
                a: "We offer a 30-day return policy on all items. Items must be unused and in their original packaging."
              },
              {
                q: "Do you ship internationally?",
                a: "Yes, we ship to over 100 countries worldwide. Shipping fees and delivery times vary depending on the destination."
              },
              {
                q: "How can I track my order?",
                a: "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on the carrier's website."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers. Your payment information is secure and confidential."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-soft border-0">
                <CardContent className="p-6">
                  <h3 className="font-luxury font-semibold text-primary mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;