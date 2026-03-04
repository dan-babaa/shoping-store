import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Services } from '../../services/services';
import { Clothing } from '../../shared/models/Clothe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { NavBarComponent } from '../../nav-bar/nav-bar';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, NavBarComponent],
  templateUrl: './product-view.html',
  styleUrl: './product-view.css'
})
export class ProductViewComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private service = inject(Services);
  private cartService = inject(CartService);

  product!: Clothing;
  selectedImageIndex = 0;

  selectedSize: string = '';
  selectedColor: string = '';
  quantity: number = 1;

  relatedProducts: Clothing[] = [];

  selectedRating: number = 0;
  newComment: string = '';

  get averageRating(): number {
  if (!this.product?.reviews?.length) return 0;

  const total = this.product.reviews
    .reduce((sum, r) => sum + r.rating, 0);

  return total / this.product.reviews.length;
}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    if (!id) return;

    this.loadProduct(id);
  });

  }

  increaseQty() {
    if (!this.product?.inStock || this.quantity == this.product.quantity) return;
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  get canAddToCart(): boolean {
    return !!this.selectedSize && !!this.selectedColor && this.product?.inStock;
  }

  loadProduct(id: number) {
    const product = this.service
    .getAllProducts()
    .find(p => p.id === id);

  if (!product) return;

  this.product = product;

  // Reset state
  this.selectedImageIndex = 0;
  this.selectedSize = product.sizes[0] || '';
  this.selectedColor = product.colors[0] || '';
  this.quantity = 1;

  // Load related
  this.loadRelatedProducts();

  window.scrollTo({top: 0, behavior: 'smooth'})
      
  }


  loadRelatedProducts() {
    const allProducts = this.service.getAllProducts();

    this.relatedProducts = allProducts
        .filter(p =>
          p.category === this.product.category &&
          p.id !== this.product.id
        )
        .slice(0, 10);
  }

  addToCart() {
    if (!this.selectedSize || !this.selectedColor) return;

    this.cartService.addToCart(
      this.product,
      this.selectedSize,
      this.selectedColor,
      this.quantity
    );
  }


}
