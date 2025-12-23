import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import type { User, UserStore } from './types';

const UserContext = createContext<UserStore | null>(null);

const ANONYMOUS_USER: User | null = null;

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(ANONYMOUS_USER);

  const login = useCallback((name?: string) => {
    setUser({
      id: 'u-1',
      name: name ?? 'Demo Customer',
      role: 'customer',
    });
  }, []);

  const logout = useCallback(() => {
    setUser(ANONYMOUS_USER);
  }, []);

  const value = useMemo<UserStore>(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserStore() {
  const ctx = useContext(UserContext);

  if (!ctx) {
    throw new Error('UserProvider is missing in component tree');
  }

  return ctx;
}
