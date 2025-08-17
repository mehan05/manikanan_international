import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div id="why-choose">
          <WhyChooseUs />
        </div>
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
