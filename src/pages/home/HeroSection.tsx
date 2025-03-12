
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {!heroLoaded && (
        <div className="absolute inset-0 bg-more-cream flex items-center justify-center z-10">
          <div className="w-16 h-16 border-4 border-more-green border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-more-teal to-more-green opacity-90 transition-opacity duration-700 ${heroLoaded ? 'opacity-90' : 'opacity-0'}`}
      ></div>
      <img 
        src="/lovable-uploads/95c4e7b6-797c-4eb4-9e12-010be4208dbe.png" 
        alt="MORE Logo"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${heroLoaded ? 'opacity-40' : 'opacity-0'}`}
        onLoad={() => setHeroLoaded(true)}
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">Welcome to MORE</h1>
          <p className="text-xl md:text-2xl mb-8">
            A pioneering initiative focused on doing MORE with our tech, emboldening doing MORE with our tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/products" 
              className="inline-flex items-center bg-white text-more-green px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              Explore Products
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/our-story" 
              className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
