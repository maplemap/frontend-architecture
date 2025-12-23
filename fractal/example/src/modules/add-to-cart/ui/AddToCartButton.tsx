import { Button } from 'shared/button';
import type { Product } from 'modules/product';
import { useAddToCart } from 'modules/add-to-cart';

type AddToCartButtonProps = {
  product: Product;
};

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const handleAdd = useAddToCart(product);

  return (
    <Button disabled={!product.isAvailable} onClick={handleAdd}>
      {product.isAvailable ? 'Add to cart' : 'Notify me'}
    </Button>
  );
}
