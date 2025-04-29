
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
import { useBasket } from '@/contexts/BasketContext';

export interface ProductProps {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  contactOnly?: boolean;
}

const ProductCard = ({ id, name, image, price, description, contactOnly }: ProductProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const { addItem } = useBasket();

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoaded(true);
  }, [image]);

  const handleAddToBasket = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id, name, image, price, description });
  };
  
  const handleContactClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/contact');
  };

  return (
    <div 
      className="product-card group cursor-pointer flex flex-col h-full" 
      onClick={() => navigate(`/products/${id}`)}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100">
        <AspectRatio ratio={4/3}>
          {!isLoaded && (
            <Skeleton className="absolute inset-0 bg-gray-200" />
          )}
          <img 
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            decoding="async"
          />
        </AspectRatio>
      </div>
      
      <div className="flex-grow">
        <h3 className="mt-4 text-lg font-semibold text-more-darkGray truncate">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">{price}</p>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
      
      <div className="mt-auto pt-4">
        {contactOnly ? (
          <Button
            onClick={handleContactClick}
            className="mt-3 bg-more-teal text-white w-full"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        ) : (
          <div className="flex gap-2 mt-3">
            <Button
              onClick={handleAddToBasket}
              variant="outline"
              className="flex-1"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Basket
            </Button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/products/${id}`);
              }}
              className="flex-1 bg-more-green text-white"
            >
              View Details
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
