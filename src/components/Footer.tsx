import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-spice-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-spice-turmeric text-spice-brown rounded-lg">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-lg">Sri Manikandan</div>
                <div className="text-sm text-white/80">International</div>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Delivering premium Indian spices and authentic flavors to markets worldwide. 
              Quality from India, trusted globally.
            </p>
            <p className="text-spice-turmeric font-medium">
              Quality • Authenticity • Global Reach
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <span className="text-white/80">Export Services</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-spice-turmeric flex-shrink-0" />
                <span className="text-white/80">contact@srimanikandaninternational.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-spice-turmeric flex-shrink-0" />
                <span className="text-white/80">+91 [Your Phone Number]</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-spice-turmeric flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  [Your Business Address]<br />
                  [City, State - PIN]<br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Sri Manikandan International. All rights reserved. | 
            <span className="text-spice-turmeric"> Premium Indian Spices Worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;