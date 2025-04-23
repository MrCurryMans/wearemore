
import { Button } from '@/components/ui/button';
import { useBasket } from '@/contexts/BasketContext';
import { ShoppingCart, Trash } from 'lucide-react';
import { useStripe } from '@/contexts/StripeContext';
import { toast } from '@/hooks/use-toast';

const Basket = () => {
  const { items, removeItem, updateQuantity, totalItems } = useBasket();
  const { createCheckoutSession, isLoading } = useStripe();

  const handleCheckout = async () => {
    try {
      // For now, we'll just use the first item's price for demo
      if (items.length > 0) {
        await createCheckoutSession(items[0].id, items[0].price);
        toast({
          title: "Redirecting to checkout",
          description: "You're being redirected to our secure payment processor.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  if (totalItems === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        Your basket is empty
      </div>
    );
  }

  return (
    <div className="p-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-4 py-2 border-b">
          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
          <div className="flex-1">
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.price}</p>
            <div className="flex items-center gap-2 mt-1">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 text-sm bg-gray-100 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 text-sm bg-gray-100 rounded"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="ml-2 text-red-500"
              >
                <Trash size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
      <Button
        onClick={handleCheckout}
        disabled={isLoading}
        className="w-full mt-4 bg-more-green text-white"
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        {isLoading ? "Processing..." : "Checkout"}
      </Button>
    </div>
  );
};

export default Basket;
