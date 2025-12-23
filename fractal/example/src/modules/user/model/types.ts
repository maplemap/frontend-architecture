import type { EntityId } from 'shared/types';

export type UserRole = 'guest' | 'customer' | 'admin';

export type User = {
  id: EntityId;
  name: string;
  role: UserRole;
};

export type UserStore = {
  user: User | null;
  login: (name?: string) => void;
  logout: () => void;
};
