import type { EntityId } from '../../../types';

export type Product = {
  id: EntityId;
  title: string;
  price: number;
  isAvailable: boolean;
};
