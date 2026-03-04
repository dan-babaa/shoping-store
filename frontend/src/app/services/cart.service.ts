import { Injectable, signal, effect } from '@angular/core';
import { CartItem } from '../shared/models/Clothe';
import { Clothing } from '../shared/models/Clothe';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = 'my_cart';

  private cart = signal<CartItem[]>(this.loadFromStorage());

  cartItems = this.cart.asReadonly();

  constructor() {
    // Auto save whenever cart changes
    effect(() => {
      localStorage.setItem(
        this.storageKey,
        JSON.stringify(this.cart())
      );
    });
  }

  private loadFromStorage(): CartItem[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addToCart(
  product: Clothing,
  selectedSize: string,
  selectedColor: string,
  quantity: number = 1
) {
  const items = this.cart();

  const existingIndex = items.findIndex(
    item =>
      item.product.id === product.id &&
      item.selectedSize === selectedSize &&
      item.selectedColor === selectedColor
  );

  // If already in cart
  if (existingIndex !== -1) {
    const existingItem = items[existingIndex];

    // Check stock limit
    if (existingItem.quantity + quantity > product.quantity) {
      return; // stop if exceeding stock
    }

    existingItem.quantity += quantity;
  } else {

    // prevent adding more than stock
    if (quantity > product.quantity) {
      quantity = product.quantity;
    }

    items.push({
      product,
      selectedSize,
      selectedColor,
      quantity
    });
  }

  this.cart.set([...items]);
}


  removeItem(index: number) {
    const items = this.cart();
    items.splice(index, 1);
    this.cart.set([...items]);
  }

  increaseQuantity(index: number) {
    const items = this.cart();

  const item = items[index];

  // prevent exceeding stock
  if (item.quantity <= item.product.quantity) {
    item.quantity++;
  }

  this.cart.set([...items]);
  }

  decreaseQuantity(index: number) {
    const items = this.cart();
    if (items[index].quantity > 1) {
      items[index].quantity--;
    }
    this.cart.set([...items]);
  }

  clearCart() {
    this.cart.set([]);
  }

  getTotalPrice(): number {
    return this.cart().reduce((total, item) => {
      const price = item.product.discount
        ? item.product.price -
          (item.product.price * item.product.discount / 100)
        : item.product.price;

      return total + price * item.quantity;
    }, 0);
  }

  getTotalQuantity(): number {
    return this.cart().reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
}
