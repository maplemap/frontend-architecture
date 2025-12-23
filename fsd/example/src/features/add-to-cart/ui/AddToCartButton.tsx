import { Button } from '../../../shared/ui/Button';
import type { Product } from '../../../entities/product';
import { useAddToCart } from '../model/useAddToCart';

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
