
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
