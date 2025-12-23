import type { ReactNode } from 'react';
import type { Product } from '../model/types';
import './product-card.css';

type ProductCardProps = {
  product: Product;
  actions?: ReactNode;
};

export function ProductCard({ product, actions }: ProductCardProps) {
  return (
    <article className="product-card">
      <header>
        <h3>{product.title}</h3>
        {!product.isAvailable && <span className="product-card__badge">Sold out</span>}
      </header>
      <p>Price: ${product.price}</p>
      {actions && <footer>{actions}</footer>}
    </article>
  );
}
