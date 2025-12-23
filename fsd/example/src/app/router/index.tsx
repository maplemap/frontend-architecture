import { useState } from 'react';
import { CatalogPage } from '../../pages/catalog';
import { CartPage } from '../../pages/cart';
import { Button } from '../../shared/ui/Button';
import { AuthPanel } from '../../features/auth';
import { useCartStore } from '../../entities/cart';
import './app-shell.css';

type Route = 'catalog' | 'cart';

const ROUTES: Record<Route, () => JSX.Element> = {
  catalog: CatalogPage,
  cart: CartPage,
};

export function AppRouter() {
  const [route, setRoute] = useState<Route>('catalog');
  const { totalItems } = useCartStore();
  const PageComponent = ROUTES[route];

  return (
    <div className="app-shell">
      <header>
        <div className="app-shell__tabs">
          <h1>FSD Shop</h1>
          <nav>
            <Button onClick={() => setRoute('catalog')} disabled={route === 'catalog'}>
              Catalog
            </Button>
            <div className="app-shell__cart-button">
              <Button onClick={() => setRoute('cart')} disabled={route === 'cart'}>
                Cart
              </Button>
              {totalItems > 0 && (
                <span className="app-shell__cart-badge" aria-live="polite">
                  {totalItems}
                </span>
              )}
            </div>
          </nav>
        </div>
        <AuthPanel />
      </header>
      <main>
        <PageComponent />
      </main>
    </div>
  );
}
