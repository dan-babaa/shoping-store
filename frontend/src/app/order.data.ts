import { Order } from './order.interface';

export const ordersData: Order[] = [
  {
    id: 1,
    userId: 1,
    items: [
      { productId: 2, quantity: 2, priceAtPurchase: 15000 },
      { productId: 4, quantity: 1, priceAtPurchase: 22000 }
    ],
    totalAmount: 52000,
    status: 'paid',
    createdAt: new Date('2024-07-01')
  },
  {
    id: 2,
    userId: 3,
    items: [
      { productId: 1, quantity: 1, priceAtPurchase: 18000 }
    ],
    totalAmount: 18000,
    status: 'pending',
    createdAt: new Date('2024-07-05')
  },
  {
    id: 3,
    userId: 5,
    items: [
      { productId: 6, quantity: 3, priceAtPurchase: 12000 }
    ],
    totalAmount: 36000,
    status: 'shipped',
    createdAt: new Date('2024-07-08')
  }
];
