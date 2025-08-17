import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Flame, Sparkles } from "lucide-react";
import redChiliImage from "@/assets/red-chili-powder.jpg";
import turmericImage from "@/assets/turmeric-powder.jpg";
import mixedSpicesImage from "@/assets/mixed-spices.jpg";

const products = [
  {
    id: 1,
    name: "Premium Red Chilli Powder",
    image: redChiliImage,
    description: "Vibrant red chilli powder with perfect heat balance and rich flavor, ideal for all culinary applications.",
    features: ["High capsaicin content", "Rich color retention", "Export quality packaging"],
    icon: Flame,
    color: "text-spice-red"
  },
  {
    id: 2,
    name: "Pure Turmeric Powder",
    image: turmericImage,
    description: "Golden turmeric powder with high curcumin content, perfect for health-conscious consumers worldwide.",
    features: ["High curcumin levels", "Natural golden color", "Finely ground texture"],
    icon: Star,
    color: "text-spice-turmeric"
  },
  {
    id: 3,
    name: "Specialty Spice Blends",
    image: mixedSpicesImage,
    description: "Custom spice blends including meat masala and other traditional Indian spice mixtures.",
    features: ["Traditional recipes", "Balanced flavor profiles", "Custom blending available"],
    icon: Sparkles,
    color: "text-spice-paprika"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated selection of authentic Indian spices, processed to perfection for global markets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-warm transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className={`inline-flex items-center justify-center w-10 h-10 bg-white/90 rounded-full ${product.color}`}>
                    <product.icon className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-spice-turmeric mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="spice" 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-earth-warm p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Looking for Other Products?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer a wide range of spices and food products including brown sugar, 
              specialty masalas, and custom spice blends. Contact us for your specific requirements.
            </p>
            <Button 
              variant="hero"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Inquire About Custom Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;