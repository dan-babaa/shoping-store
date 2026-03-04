import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Services } from '../../services/services';
import { Clothing } from '../models/Clothe';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search';
import { CartService } from '../../services/cart.service';
import { NavBarComponent } from '../../nav-bar/nav-bar';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchComponent, RouterLink, NavBarComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {

  private service = inject(Services);
  private route = inject(ActivatedRoute);
  private cartService = inject(CartService)

  @Input() initialSearch: string = '';

  allProducts: Clothing[] = [];
  filteredProducts: Clothing[] = [];

  // SEARCH
  searchTerm: string = '';

  // FILTERS
  selectedSize: string = '';
  selectedColor: string = '';
  selectedCategory: string = '';
  selectedBrand: string = '';
  inStockOnly: boolean = false;
  minPrice: number | null = null;
  maxPrice: number | null = null;
  sortOption: string = '';

  /* LOAD MORE */
  visibleCount = 15;
  increment = 7;

  get visibleProducts() {
    return this.filteredProducts.slice(0, this.visibleCount);
  }

  loadMore() {
    this.visibleCount += this.increment;
  }

  ngOnInit(): void {

    this.allProducts = this.service.getAllProducts();
    this.filteredProducts = [...this.allProducts];

    // Listen for ?search=
    this.route.queryParamMap.subscribe(params => {
      const search = params.get('search');

      if (search) {
        this.searchTerm = search;
      } else {
        this.searchTerm = '';

      }

      this.applyFilters(); // apply everything together
    });
  }

  applyFilters() {

    let products = [...this.allProducts];

    // 🔍 SEARCH
    if (this.searchTerm) {
      const lower = this.searchTerm.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower) ||
        p.brand.toLowerCase().includes(lower)
      );
    }


    // SIZE
    if (this.selectedSize) {
      products = products.filter(p =>
        p.sizes.includes(this.selectedSize)
      );
    }

    // COLOR
    if (this.selectedColor) {
      products = products.filter(p =>
        p.colors.includes(this.selectedColor)
      );
    }

    // CATEGORY
    if (this.selectedCategory) {
      products = products.filter(p =>
        p.category === this.selectedCategory
      );
    }

    // BRAND
    if (this.selectedBrand) {
      products = products.filter(p =>
        p.brand === this.selectedBrand
      );
    }

    // IN STOCK
    if (this.inStockOnly) {
      products = products.filter(p => p.inStock);
    }

    // PRICE RANGE
    if (this.minPrice !== null) {
      products = products.filter(p => p.price >= this.minPrice!);
    }

    if (this.maxPrice !== null) {
      products = products.filter(p => p.price <= this.maxPrice!);
    }

    // SORT
    if (this.sortOption === 'low-high') {
      products.sort((a, b) => a.price - b.price);
    }

    if (this.sortOption === 'high-low') {
      products.sort((a, b) => b.price - a.price);
    }

    if (this.sortOption === 'newest') {
      products.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      );
    }

    this.filteredProducts = products;
    this.visibleCount = 15; // reset load more
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedSize = '';
    this.selectedColor = '';
    this.selectedCategory = '';
    this.selectedBrand = '';
    this.inStockOnly = false;
    this.minPrice = null;
    this.maxPrice = null;
    this.sortOption = '';

    this.filteredProducts = [...this.allProducts];
    this.visibleCount = 15;
  }

  addCardToCart(product: Clothing) {
    this.cartService.addToCart(
      product,
      product.sizes[0],   // default first size
      product.colors[0],  // default first color
      1
    );
  }
}
