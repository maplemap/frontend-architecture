import type { EntityId } from 'shared/types';

export type Product = {
  id: EntityId;
  title: string;
  price: number;
  isAvailable: boolean;
};
