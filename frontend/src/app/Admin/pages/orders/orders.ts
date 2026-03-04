import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../../../order.interface';
import { ordersData } from '../../../order.data';
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class OrdersComponent {

  orders: Order[] = ordersData;

  visibleCount = 5;

  loadMore() {
    this.visibleCount += 5;
  }

  get visibleOrders() {
    return this.orders.slice(0, this.visibleCount);
  }

  formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(amount);
  }

}
