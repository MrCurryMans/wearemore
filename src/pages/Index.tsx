
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from './home/HeroSection';
import FeaturedProducts from './home/FeaturedProducts';
import MissionSection from './home/MissionSection';
import VisionSection from './home/VisionSection';
import CtaSection from './home/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-more-cream">
      <Navbar />
      
      {/* Hero Section - Full Width */}
      <HeroSection />
      
      <FeaturedProducts />
      <MissionSection />
      <VisionSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
