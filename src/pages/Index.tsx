import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CareerFields from "@/components/CareerFields";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="landing-theme min-h-screen">
        <HeroSection />
        <AboutSection />
        <CareerFields />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
