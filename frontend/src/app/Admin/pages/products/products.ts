import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clothing } from '../../../shared/models/Clothe';
import { CLOTHING_DATA } from '../../../../data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})


export class ProductsComponent {

  allProducts: Clothing[] = CLOTHING_DATA;

  filteredProducts: Clothing[] = [];
  visibleProducts: Clothing[] = [];

  itemsPerLoad = 20;
  currentIndex = 0;

  searchTerm = '';
  selectedFilter = '';

  constructor() {
    this.filteredProducts = this.allProducts;
    this.resetPagination();
  }

  toggleStock(product: Clothing) {

    if (product.quantity <= 0) {
      product.quantity = 10; // default restock amount
    } else {
      product.quantity = 0;
    }

    this.applyFilters();
  }

  deleteProduct(productId: number) {

    const confirmDelete = confirm('Are you sure you want to delete this product?');

    if (!confirmDelete) return;

    this.allProducts = this.allProducts.filter(
      product => product.id !== productId
    );

    this.applyFilters();
  }


  // SEARCH
  onSearch(term: string) {
    this.searchTerm = term.toLowerCase();
    this.applyFilters();
  }

  // FILTER
  onFilterChange(filter: string) {
    this.selectedFilter = filter;
    this.applyFilters();
  }

  applyFilters() {

    this.filteredProducts = this.allProducts.filter(product => {

      const matchesSearch =
        product.name.toLowerCase().includes(this.searchTerm) ||
        product.brand.toLowerCase().includes(this.searchTerm);

      let matchesFilter = true;

      if (this.selectedFilter === 'inStock') {
        matchesFilter = product.quantity > 5;
      }

      if (this.selectedFilter === 'outStock') {
        matchesFilter = product.quantity <= 0;
      }

      if (this.selectedFilter === 'lowStock') {
        matchesFilter = (product.quantity < 5 && product.quantity != 0);
      }

      return matchesSearch && matchesFilter;
    });

    this.resetPagination();
  }

  resetPagination() {
    this.visibleProducts = [];
    this.currentIndex = 0;
    this.loadMore();
  }

  loadMore() {
    const nextItems = this.filteredProducts.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerLoad
    );

    this.visibleProducts = [...this.visibleProducts, ...nextItems];
    this.currentIndex += this.itemsPerLoad;
  }

  hasMore(): boolean {
    return this.currentIndex < this.filteredProducts.length;
  }

}

