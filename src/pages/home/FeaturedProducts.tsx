
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../../components/ProductCard';
import { featuredProducts } from '../../data/products';

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-more-lightGreen bg-opacity-30 text-more-green rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-more-darkGray mb-4 font-display">
            Reclaimed E-Waste
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
  );
};

export default FeaturedProducts;
