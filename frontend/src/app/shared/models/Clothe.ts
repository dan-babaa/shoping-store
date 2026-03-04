export interface Clothing {
  id: number;
  name: string;
  brand: string;
  price: number;
  sizes: string[];
  colors: string[];
  category: string;
  imageUrl: string[];
  rating: number;     // 1 - 5
  discount?: number;  // optional
  description: string;
  inStock: boolean;
  createdAt: Date;
  reviews: Review[];
  collectionType?: string;
  quantity: number;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: Date;
  id: number;
  userId: number;
  approved: boolean;
}


export interface Hero {
  id: number;
  tag: string;
  slug: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
  gradient: string;
  createdAt: Date;
}

export interface CartItem {
  product: Clothing;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  wishList: number[];  
  cartsList: number[]; 
}