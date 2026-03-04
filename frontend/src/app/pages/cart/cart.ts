import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../shared/models/Clothe';
import { RouterLink } from "@angular/router";
import { NavBarComponent } from '../../nav-bar/nav-bar';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, NavBarComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {

  private cartService = inject(CartService);

  get items() {
    return this.cartService.cartItems();
  }

  get total() {
    return this.cartService.getTotalPrice();
  }

  remove(index: number) {
    this.cartService.removeItem(index);
  }

  increase(index: number) {
    this.cartService.increaseQuantity(index);
  }

  decrease(index: number) {
    this.cartService.decreaseQuantity(index);
  }

  getItemPrice(item: CartItem): number {
    const price = item.product.discount
      ? item.product.price -
        (item.product.price * item.product.discount / 100)
      : item.product.price;

    return price * item.quantity;
  }


}
