import { useCartStore } from '../../../entities/cart';
import { Button } from '../../../shared/ui/Button';
import './cart-page.css';

export function CartPage() {
  const { items, totalItems, totalPrice, clear } = useCartStore();

  if (items.length === 0) {
    return <p>The cart is empty.</p>;
  }

  return (
    <section className="cart-page">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>
              {item.title} × {item.quantity}
            </span>
            <strong>${item.price * item.quantity}</strong>
          </li>
        ))}
      </ul>

      <footer>
        <p>
          {totalItems} items — <strong>${totalPrice}</strong>
        </p>
        <Button onClick={clear}>Checkout</Button>
      </footer>
    </section>
  );
}
