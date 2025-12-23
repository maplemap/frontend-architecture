import type { ComponentType, ReactNode } from 'react';
import { CartProvider } from '../../entities/cart';
import { UserProvider } from '../../entities/user';

type ProviderComponent = ComponentType<{ children: ReactNode }>;

const providers: ProviderComponent[] = [CartProvider, UserProvider];

export function withProviders<TProps>(Component: ComponentType<TProps>) {
  return function WithProviders(props: TProps) {
    return providers.reduceRight((acc, Provider) => {
      return <Provider>{acc}</Provider>;
    }, <Component {...props} /> as ReactNode);
  };
}
