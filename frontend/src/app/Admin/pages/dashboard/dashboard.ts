import { Component } from '@angular/core';
import { Clothing } from '../../../shared/models/Clothe';
import { CLOTHING_DATA } from '../../../../data';
import { usersData } from '../../../user.data';
import { User } from '../../../user.interface';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})


export class DashboardComponent {

  products: Clothing[] = CLOTHING_DATA;
  users: User[] = usersData;

  totalProducts = 0;
  inStock = 0;
  lowStock = 0;
  outOfStock = 0;
  totalInventoryValue = 0;
  totalOrders = 78;


  constructor() {
    this.calculateStats();
  }

  calculateStats() {

    this.totalProducts = this.products.length;

    this.inStock = this.products.filter(p => p.quantity > 5).length;

    this.lowStock = this.products.filter(
      p => p.quantity < 5 && p.quantity !== 0
    ).length;

    this.outOfStock = this.products.filter(
      p => p.quantity <= 0
    ).length;

    this.totalInventoryValue = this.products.reduce(
      (total, product) => total + (product.price * product.quantity),
      0
    );
  }

  get totalUsers(): number {
  return this.users.length;
}

get totalCartQuantity(): number {
  return this.users.reduce((total, user) =>
    total + user.cartsList.reduce((sum, item) => sum + item.quantity, 0)
  , 0);
}

get totalWishlistItems(): number {
  return this.users.reduce((total, user) =>
    total + user.wishList.length
  , 0);
}


  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  }
}
