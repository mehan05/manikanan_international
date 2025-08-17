import { Badge, Shield, Truck, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Hand-selected spices processed with the highest standards to preserve authentic flavors and nutritional value."
  },
  {
    icon: Badge,
    title: "Authentic Indian",
    description: "Sourced directly from the finest spice regions of India, maintaining traditional processing methods."
  },
  {
    icon: Truck,
    title: "Global Delivery",
    description: "Reliable worldwide shipping with proper packaging to ensure freshness reaches your doorstep."
  },
  {
    icon: Award,
    title: "Unbeatable Value",
    description: "Competitive pricing without compromising on quality, building long-term partnerships globally."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-earth-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are committed to delivering the finest Indian spices with uncompromising quality and authentic flavors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spice-red to-spice-paprika text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;