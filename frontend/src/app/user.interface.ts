export interface WishItem {
  productId: number;
  addedAt: Date;
}

export interface CartItem {
  productId: number;
  quantity: number;
  addedAt: Date;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  wishList: WishItem[];
  cartsList: CartItem[];
}