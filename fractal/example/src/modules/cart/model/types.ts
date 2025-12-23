import type { EntityId } from '../../../types';

type CartItemPayload = {
  id: EntityId;
  title: string;
  price: number;
};

export type CartItem = CartItemPayload & {
  quantity: number;
};

export type CartStore = {
  items: CartItem[];
  addItem: (payload: CartItemPayload) => void;
  removeItem: (id: EntityId) => void;
  clear: () => void;
  totalItems: number;
  totalPrice: number;
};

export type { CartItemPayload };
