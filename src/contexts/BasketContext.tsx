
import { createContext, useContext, ReactNode, useState } from 'react';
import { ProductProps } from '@/components/ProductCard';
import { toast } from '@/hooks/use-toast';

interface BasketItem extends ProductProps {
  quantity: number;
}

interface BasketContextType {
  items: BasketItem[];
  addItem: (product: ProductProps) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearBasket: () => void;
  totalItems: number;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<BasketItem[]>([]);

  const addItem = (product: ProductProps) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      toast({
        title: "Added to basket",
        description: `${product.name} has been added to your basket.`,
      });
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (productId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      )
    );
  };

  const clearBasket = () => {
    setItems([]);
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <BasketContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearBasket,
        totalItems,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};
