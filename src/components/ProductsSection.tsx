import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Flame, Sparkles } from "lucide-react";
import redChiliImage from "@/assets/red-chili-powder.jpg";
import turmericImage from "@/assets/turmeric-powder.jpg";
import mixedSpicesImage from "@/assets/mixed-spices.jpg";

const products = [
  {
    id: 1,
    name: "Red Chilli Powder",
    hsn_code: "0910",
    image: "/chilli.png",
    description:
      "Ignite your dish with our Red Chilli Powder, made from the finest crispy red chillies.",
    features: [
      "Made from crispy red chilli",
      "Adds vibrant heat and color to any dish",
      "Authentic Indian flavor",
    ],
  },
  {
    id: 2,
    name: "Turmeric Powder",
    hsn_code: "0910",
    image: "/turmeric2.jpg",
    description:
      "Known as 'The Golden Spice of Life', our Turmeric Powder adds vibrancy to your cooking and lifestyle.",
    features: [
      "Adds a brilliant golden color",
      "Sourced for purity and potency",
      "A staple for healthy and flavorful food",
    ],
  },
  {
    id: 3,
    name: "Pure Brown Sugar",
    hsn_code: "17011320",
    image: "/jaggery2.png",
    description:
      "A natural and wholesome sweetener, our Pure Brown Sugar is completely free from pesticides.",
    features: [
      "100% pesticide-free",
      "Rich, natural molasses flavor",
      "Ideal for baking and beverages",
    ],
  },
  {
    id: 4,
    name: "Handicrafts",
    image: "/toys.png",
    hsn_code: "1903",
    description:
      "Authentic, handcrafted Sand Pots and traditional Thanjavur Toys from India.",
    features: [
      "Traditional Thanjavur Toys",
      "Handmade clay Sand Pots (Manu Panai)",
      "Perfect for cultural decor and gifting",
    ],
  },
  {
    id: 5,
    name: "Sago Rice & Flour",
    image: "/sagorice.jpeg",
    hsn_code: "1903",
    description:
      "Our Sago Rice and Sago Flour are processed from clean, high-quality Cassava root.",
    features: [
      "Made from clean Cassava root",
      "Versatile for cooking and baking",
      "A popular gluten-free option",
    ],
  },
  {
    id: 6,
    name: "Stainless Steel Plates",
    image: "/steelplates2.jpeg",
    hsn_code: "33074100",
    description:
      "High-quality stainless steel plates designed to ensure your food stays healthy and safe.",
    features: [
      "Durable, high-grade stainless steel",
      "Hygienic and easy to clean",
      "Reusable and eco-friendly",
    ],
  },
  {
    id: 7,
    name: "Steel Rods",
    image: "/steelrods.jpeg",
    hsn_code: "33074100",
    description:
      "Durable and reliable steel rods for construction and industrial applications.",
    features: [
      "High-tensile strength for construction",
      "Available in various grades and sizes",
      "Built for structural integrity",
    ],
  },
  {
    id: 8,
    name: "Bolts & Nuts",
    image: "/bolt&nuts.jpeg",
    hsn_code: "33074100",
    description:
      "A comprehensive range of industrial-grade bolts and nuts for all your fastening needs.",
    features: [
      "Industrial-grade fasteners",
      "Made from high-quality materials for durability",
      "Available in a wide array of sizes",
    ],
  },
  {
    id: 9,
    name: "Meat Masala",
    image: "/meat_masala.jpeg",
    hsn_code: "0910",
    description:
      "A flavorful spice blend crafted to enhance the taste of meat dishes with rich aroma and authentic taste.",
    features: [
      "Perfectly balanced mix of spices",
      "Adds rich flavor and aroma to meat recipes",
      "Ideal for curries, grills, and marinades",
    ],
  },
  {
    id: 8,
    name: "Mud Lamps",
    hsn_code: "33074100",
    image: "/mud_lamps.jpeg",
    description:
      "Traditional handcrafted mud lamps designed to bring a warm and rustic charm to your home or festive celebrations.",
    features: [
      "Handcrafted from natural clay",
      "Eco-friendly and reusable",
      "Perfect for festivals, décor, and spiritual rituals",
    ],
  },
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
            Discover our carefully curated selection of authentic Indian spices,
            processed to perfection for global markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-warm transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* <div className="absolute top-4 left-4">
                  <div className={`inline-flex items-center justify-center w-10 h-10 bg-white/90 rounded-full ${product.color}`}>
                    <product.icon className="h-5 w-5" />
                  </div>
                </div> */}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.name}
                  <span className="text-muted-foreground pl-2 text-sm">HSN Code: {product.hsn_code}</span>
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Star className="h-4 w-4 text-spice-turmeric mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="spice"
                  className="w-full"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
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
              We offer a wide range of spices and food products including brown
              sugar, specialty masalas, and custom spice blends. Contact us for
              your specific requirements.
            </p>
            <Button
              variant="hero"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
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
