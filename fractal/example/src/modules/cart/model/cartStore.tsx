import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import type { CartItem, CartItemPayload, CartStore } from './types';

const CartContext = createContext<CartStore | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (payload: CartItemPayload) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === payload.id);

      if (existing) {
        return prev.map((item) =>
          item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...prev, { ...payload, quantity: 1 }];
    });
  };

  const removeItem = (id: CartItemPayload['id']) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clear = () => setItems([]);

  const value = useMemo<CartStore>(() => {
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return {
      items,
      addItem,
      removeItem,
      clear,
      totalItems,
      totalPrice,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartStore() {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error('CartProvider is missing in component tree');
  }

  return ctx;
}
