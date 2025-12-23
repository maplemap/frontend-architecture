import { AddToCartButton } from '../../../features/add-to-cart';
import { ProductCard, useProducts } from '../../../entities/product';
import { Button } from '../../../shared/ui/Button';
import './catalog-page.css';

export function CatalogPage() {
  const { products, isLoading, hasError, refetch } = useProducts();

  if (isLoading) {
    return <p>Loading catalog…</p>;
  }

  if (hasError) {
    return (
      <div className="catalog-page__state">
        <p>Cannot load catalog.</p>
        <Button onClick={refetch}>Try again</Button>
      </div>
    );
  }

  return (
    <section className="catalog-page">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          actions={<AddToCartButton product={product} />}
        />
      ))}
    </section>
  );
}
