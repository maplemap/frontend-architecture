import { useCallback } from 'react';
import { useCartStore } from '../../../entities/cart';
import type { Product } from '../../../entities/product';

export function useAddToCart(product: Product) {
  const { addItem } = useCartStore();

  return useCallback(() => {
    addItem({ id: product.id, title: product.title, price: product.price });
  }, [addItem, product.id, product.price, product.title]);
}
