
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from '../data/products';

const Index = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [ecoVisible, setEcoVisible] = useState(false);

  useEffect(() => {
    const storyObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStoryVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const ecoObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setEcoVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const storySection = document.querySelector('#story-section');
    const ecoSection = document.querySelector('#eco-section');

    if (storySection) storyObserver.observe(storySection);
    if (ecoSection) ecoObserver.observe(ecoSection);

    return () => {
      if (storySection) storyObserver.unobserve(storySection);
      if (ecoSection) ecoObserver.unobserve(ecoSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-more-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">Welcome to M.O.R.E</h1>
            <p className="text-xl md:text-2xl mb-8">
              A pioneering initiative focused on making original recycled equipment.
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
      
      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-more-lightGreen bg-opacity-30 text-more-green rounded-full text-sm font-medium mb-4">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-more-darkGray mb-4 font-display">
              Upcycled with Purpose
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our unique collection of repurposed electronic components transformed into beautiful, functional designs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-flex items-center text-more-green font-medium hover:underline"
            >
              View All Products
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section 
        id="story-section"
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-more-gray story-section ${storyVisible ? 'animated' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-more-lightGreen bg-opacity-30 text-more-green rounded-full text-sm font-medium mb-4">
                Our Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-more-darkGray mb-6 font-display">
                Technology & Community Building
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-more-lightGreen bg-opacity-30 text-more-green">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-more-darkGray mb-2">Technology</h3>
                    <p>We collect and refurbish electronic waste, transforming them into products which can be used beyond the "end" of their lifecycle. An environmental friendly process which creates learning tools for electrical components.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-more-lightGreen bg-opacity-30 text-more-green">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-more-darkGray mb-2">Community Building</h3>
                    <p>We are a team led by women and aim to develop supportive, inclusive and unique environments for underrepresented groups to connect, collaborate and grow. Fostering opportunities for women to grow their confidence in a male-dominated industry.</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/our-story" 
                className="inline-flex items-center text-more-green font-medium mt-8 hover:underline"
              >
                Learn more about our story
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="order-first lg:order-last">
              <div className="relative h-96 overflow-hidden rounded-xl">
                <img 
                  src="/lovable-uploads/efc272e9-dbce-4cf9-a8bf-6b0681ca3c72.png" 
                  alt="Zero Waste Initiative" 
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Eco-Friendly Section */}
      <section 
        id="eco-section"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-more-lightGreen bg-opacity-30 text-more-green rounded-full text-sm font-medium mb-4">
              Sustainability
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-more-darkGray mb-4 font-display">
              Our Long-Term Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to creating a sustainable future through innovation and community empowerment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className={`bg-white p-8 rounded-xl shadow-md eco-blob ${ecoVisible ? 'animated' : ''}`}
              style={{ '--i': 0 } as React.CSSProperties}
            >
              <div className="w-14 h-14 bg-more-lightGreen bg-opacity-30 rounded-full flex items-center justify-center text-more-green mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-more-darkGray mb-3">Helping Women and Under-privileged groups</h3>
              <p className="text-gray-600">
                Helping others has always been the forefront of what we strive to do here at M.O.R.E and this will never change. As we go in we know people will genuinely be helped by what we do.
              </p>
            </div>
            
            <div 
              className={`bg-white p-8 rounded-xl shadow-md eco-blob ${ecoVisible ? 'animated' : ''}`}
              style={{ '--i': 1 } as React.CSSProperties}
            >
              <div className="w-14 h-14 bg-more-lightGreen bg-opacity-30 rounded-full flex items-center justify-center text-more-green mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-more-darkGray mb-3">Reducing waste</h3>
              <p className="text-gray-600">
                Waste is an enormous problem, in our homes, in our community and around the world. We hope to scale our project and reduce waste for everyone.
              </p>
            </div>
            
            <div 
              className={`bg-white p-8 rounded-xl shadow-md eco-blob ${ecoVisible ? 'animated' : ''}`}
              style={{ '--i': 2 } as React.CSSProperties}
            >
              <div className="w-14 h-14 bg-more-lightGreen bg-opacity-30 rounded-full flex items-center justify-center text-more-green mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-more-darkGray mb-3">Sourcing materials</h3>
              <p className="text-gray-600">
                We believe in the power of transformation. We look to source high-quality, reclaimed materials to turn waste into beautiful, functional designs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-more-gradient text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Join Our Mission</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Together, we can transform waste into beautiful products while uplifting women and fostering a brighter, more equitable future for all.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-white text-more-green px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
          >
            Explore Our Products
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
