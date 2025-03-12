
import { useState } from 'react';
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

  return (
    <div 
      className="product-card group cursor-pointer" 
      onClick={() => navigate(`/products/${id}`)}
    >
      <div className="overflow-hidden rounded-lg relative bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-48 object-cover transition-all duration-500 group-hover:scale-105 ${isLoaded ? 'lazy-image' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-10 h-10 border-4 border-more-green border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-more-darkGray">{name}</h3>
      <p className="mt-1 text-sm text-gray-500">{price}</p>
      <button className="mt-3 bg-more-green text-white py-2 px-4 rounded-md text-sm hover:bg-opacity-90 transition-all w-full flex items-center justify-center">
        <ShoppingCart size={16} className="mr-1" />
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
