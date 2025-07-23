import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CareerFields from "@/components/CareerFields";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CareerFields />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
