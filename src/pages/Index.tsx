import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechnologySection from "@/components/TechnologySection";
import InteractiveSection from "@/components/InteractiveSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TechnologySection />
      <InteractiveSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
