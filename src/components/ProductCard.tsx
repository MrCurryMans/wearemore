
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export interface ProductProps {
  id: string;
  name: string;
  image: string;
  price: string;
}

const ProductCard = ({ id, name, image, price }: ProductProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  
  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoaded(true);
  }, [image]);

  return (
    <div 
      className="product-card group cursor-pointer" 
      onClick={() => navigate(`/products/${id}`)}
    >
      <div className="overflow-hidden rounded-lg relative bg-gray-100">
        {/* Blur placeholder */}
        <div 
          className={`absolute inset-0 bg-gray-200 transition-opacity duration-300 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="flex items-center justify-center h-full">
            <div className="w-8 h-8 border-3 border-more-green border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        
        {/* Main image */}
        <img 
          src={image}
          alt={name}
          className={`w-full h-48 object-cover transition-all duration-500 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      </div>
      
      <h3 className="mt-4 text-lg font-semibold text-more-darkGray truncate">{name}</h3>
      <p className="mt-1 text-sm text-gray-500">{price}</p>
      
      <button className="mt-3 bg-more-green text-white py-2 px-4 rounded-md text-sm hover:bg-opacity-90 transition-all w-full flex items-center justify-center">
        <ShoppingCart size={16} className="mr-1" />
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
