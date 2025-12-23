import type { EntityId } from '../../../shared/types/id';

export type Product = {
  id: EntityId;
  title: string;
  price: number;
  isAvailable: boolean;
};
