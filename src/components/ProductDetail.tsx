
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useStripe } from '../contexts/StripeContext';
import { toast } from '@/components/ui/use-toast';
import { useBasket } from '@/contexts/BasketContext';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { createCheckoutSession, isLoading } = useStripe();
  const { addItem } = useBasket();
  
  const product = products.find(p => p.id === id);
  
  useEffect(() => {
    if (!product) {
      navigate('/products');
      return;
    }
    if (product.contactOnly) {
      navigate('/contact');
      return;
    }
    window.scrollTo(0, 0);
  }, [product, navigate]);
  
  if (!product) return null;

  const handlePurchase = async () => {
    try {
      await createCheckoutSession(product.id, product.price);
      toast({
        title: "Redirecting to checkout",
        description: "You're being redirected to our secure payment processor.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleAddToBasket = () => {
    addItem(product);
    toast({
      title: "Added to basket",
      description: `${product.name} has been added to your basket.`,
    });
  };
  
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
          <AspectRatio ratio={4/3}>
            {!isImageLoaded && (
              <Skeleton className="absolute inset-0 bg-gray-200" />
            )}
            <img 
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover rounded-xl transition-opacity duration-500 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsImageLoaded(true)}
              decoding="async"
              loading="eager"
            />
          </AspectRatio>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-more-darkGray font-display">{product.name}</h1>
          <div className="flex items-center space-x-2">
            <div className="text-lg font-semibold text-more-green">{product.price}</div>
          </div>
          
          <div className="prose max-w-none text-gray-600">
            <p>{product.description}</p>
            
            {product.contactOnly ? (
              <div className="mt-6">
                <p className="font-medium text-more-darkGray">
                  This is a custom item. Please contact us for more information and to discuss your specific requirements.
                </p>
                <button
                  onClick={() => window.location.href = "mailto:contact@example.com?subject=Inquiry about " + product.name}
                  className="mt-4 w-full bg-more-teal text-white font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center"
                >
                  Contact Us About This Item
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold mt-6 mb-3">Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Made from 100% recycled electronic components</li>
                  <li>Individually Manufactured with care</li>
                  <li>Eco-friendly and sustainable</li>
                  <li>Unique in design - no two pieces are exactly alike</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Environmental Impact</h3>
                <p>
                  By purchasing this product, you're contributing to the reduction of electronic 
                  waste and supporting our mission to create sustainable, environmentally 
                  friendly alternatives to traditional disposal methods.
                </p>
              </>
            )}
          </div>
          
          {!product.contactOnly && (
            <div className="pt-6 mt-6 border-t border-gray-200 flex gap-4">
              <button 
                onClick={handleAddToBasket}
                className="flex-1 bg-white border-2 border-more-green text-more-green font-medium py-3 px-6 rounded-lg hover:bg-more-green hover:text-white transition-colors flex items-center justify-center"
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Basket
              </button>
              <button 
                onClick={handlePurchase}
                disabled={isLoading}
                className="flex-1 bg-more-green text-white font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : (
                  <ShoppingCart size={18} className="mr-2" />
                )}
                {isLoading ? "Processing..." : "Buy Now"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
