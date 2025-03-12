
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Use test key for development
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

type StripeContextType = {
  createCheckoutSession: (productId: string, price: string) => Promise<void>;
  isLoading: boolean;
};

const StripeContext = createContext<StripeContextType | undefined>(undefined);

export const StripeProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const createCheckoutSession = async (productId: string, price: string) => {
    setIsLoading(true);
    try {
      // Convert price string like "£15.00" to cents integer
      const numericPrice = price.replace(/[^0-9.]/g, '');
      const amountInCents = Math.round(parseFloat(numericPrice) * 100);
      
      // In a real app, this would be an API call to your backend
      // For this demo, we'll simulate the checkout redirect
      console.log(`Creating checkout session for product: ${productId}, price: ${amountInCents} cents`);
      
      // Simulate a redirect to Stripe checkout
      window.open(`https://checkout.stripe.com/c/pay/cs_test_demo`, '_blank');
    } catch (error) {
      console.error('Error creating checkout session:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StripeContext.Provider value={{ createCheckoutSession, isLoading }}>
      <Elements stripe={stripePromise}>
        {children}
      </Elements>
    </StripeContext.Provider>
  );
};

export const useStripe = (): StripeContextType => {
  const context = useContext(StripeContext);
  if (context === undefined) {
    throw new Error('useStripe must be used within a StripeProvider');
  }
  return context;
};
