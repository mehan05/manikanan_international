import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the form data to your backend
    toast({
      title: "Inquiry Sent!",
      description:
        "Thank you for your interest. We'll contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      product: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-earth-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience the finest Indian spices? Contact us for quotes,
            custom orders, or any inquiries
          </p>
        </div>

        <div className="flex  justify-center items-center">
          {/* Contact Form */}
          {/* <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Us Your Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="product">Product Interest</Label>
                  <Input
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="e.g., Red Chilli Powder, Turmeric, Custom Blend"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Please provide details about your requirements, quantity needed, and target market..."
                    className="mt-1"
                  />
                </div>
                
                <Button type="submit" variant="hero" className="w-full">
                  Send Inquiry
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card> */}

          {/* Contact Information */}
          <div className="w-1/2 ">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-spice-red to-spice-paprika text-white rounded-full flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Email Address
                      </h4>
                      <a href="mailto:karthickbejobs@gmail.com" className="text-muted-foreground">
                        karthickbejobs@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-spice-red to-spice-paprika text-white rounded-full flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Phone Numbers
                      </h4>
                      <p className="text-muted-foreground">+91 9543765260</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-spice-red to-spice-paprika text-white rounded-full flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Location
                      </h4>
                      <p className="text-muted-foreground">
                        7/648 4ROAD,SAKTHI NAGAR, <br />  MINAKKAL MANAIYAR THOTTAM MV
                        COLONY PO <br /> THALAVASALSALEM-636112
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-spice-red to-spice-paprika text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Ready to Start Trading?
                </h3>
                <p className="mb-6 text-white/90">
                  Join our growing network of satisfied customers worldwide. Get
                  competitive quotes and premium quality spices delivered to
                  your market.
                </p>
                <div className="flex items-center gap-2 text-spice-turmeric">
                  <span className="font-semibold">Response Time:</span>
                  <span>Within 24 hours</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
