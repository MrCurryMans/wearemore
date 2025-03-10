
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const product = products.find(p => p.id === id);
  
  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
    
    window.scrollTo(0, 0);
  }, [product, navigate]);
  
  if (!product) return null;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <button 
        onClick={() => navigate('/products')}
        className="flex items-center text-more-darkGray hover:text-more-green transition-colors mb-8"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Products
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative bg-gray-100 rounded-xl overflow-hidden">
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-more-green border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img 
            src={product.image} 
            alt={product.name} 
            className={`w-full h-auto rounded-xl transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-more-darkGray font-display">{product.name}</h1>
          <div className="flex items-center space-x-2">
            <div className="text-lg font-semibold text-more-green">{product.price}</div>
          </div>
          
          <div className="prose max-w-none text-gray-600">
            <p>
              This unique product is crafted from repurposed electronic components, 
              giving new life to materials that would otherwise contribute to e-waste. 
              Each piece is handmade by our team of artisans, making every item one-of-a-kind.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Features</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Made from 100% recycled electronic components</li>
              <li>Handcrafted by women artisans</li>
              <li>Eco-friendly and sustainable</li>
              <li>Unique design - no two pieces are exactly alike</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Environmental Impact</h3>
            <p>
              By purchasing this product, you're contributing to the reduction of electronic 
              waste and supporting our mission to create sustainable, environmentally 
              friendly alternatives to traditional disposal methods.
            </p>
          </div>
          
          <div className="pt-6 mt-6 border-t border-gray-200">
            <button className="w-full bg-more-green text-white font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
