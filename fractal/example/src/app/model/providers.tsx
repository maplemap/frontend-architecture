import type { ComponentType, ReactNode } from 'react';
import { CartProvider } from 'modules/cart';
import { UserProvider } from 'modules/user';

type ProviderComponent = ComponentType<{ children: ReactNode }>;

const providers: ProviderComponent[] = [CartProvider, UserProvider];

export function withProviders<TProps extends Record<string, unknown>>(
  Component: ComponentType<TProps>,
): ComponentType<TProps> {
  return function WithProviders(props: TProps) {
    return providers.reduceRight<ReactNode>((acc, Provider) => {
      return <Provider>{acc}</Provider>;
    }, <Component {...props} />);
  };
}
