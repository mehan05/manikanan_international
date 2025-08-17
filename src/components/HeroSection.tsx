import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import heroImage from "@/assets/hero-spices.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-spice-brown/80 via-spice-brown/60 bg-gradient-to-l to-spice-brown/80 mix-blend-multiply filter dark:to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="h-6 w-6 text-spice-turmeric" />
            <span className="text-spice-turmeric font-medium">Premium Indian Exports</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            SRI MANIKANDAN
            <span className="block text-spice-turmeric">INTERNATIONAL</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Quality from India Delivered Globally
          </p>
          
          <p className="text-lg text-white/80 mb-10 max-w-2xl">
            Authentic Products, uncompromising quality, and unbeatable value. 
            We bring the finest Indian Products to markets worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Products
              <ArrowRight className="h-5 w-5" />
            </Button>
            
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;