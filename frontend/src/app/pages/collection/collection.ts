import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Services } from '../../services/services';
import { Clothing } from '../../shared/models/Clothe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { NavBarComponent } from '../../nav-bar/nav-bar';


@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavBarComponent],
  templateUrl: './collection.html',
  styleUrl: './collection.css'
})
export class CollectionComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private service = inject(Services);
  private cartService = inject(CartService)

  slug!: string;

  collectionProducts: Clothing[] = [];
  filteredProducts: Clothing[] = [];

  // SAME LOGIC AS PRODUCT PAGE
  visibleProducts: Clothing[] = [];
  visibleCount = 8;

  // filters
  selectedSize = '';
  selectedColor = '';
  selectedCategory = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
      this.loadCollection();
    });
  }

  loadCollection() {
    this.collectionProducts =
      this.service.getCollectionBySlug(this.slug);

    this.filteredProducts = [...this.collectionProducts];

    this.visibleCount = 8;
    this.updateVisibleProducts();
  }

  applyFilters() {
    let products = [...this.collectionProducts];

    if (this.selectedSize) {
      products = products.filter(p =>
        p.sizes.includes(this.selectedSize)
      );
    }

    if (this.selectedColor) {
      products = products.filter(p =>
        p.colors.includes(this.selectedColor)
      );
    }

    if (this.selectedCategory) {
      products = products.filter(p =>
        p.category === this.selectedCategory
      );
    }

    this.filteredProducts = products;
    this.visibleCount = 8;
    this.updateVisibleProducts();
    console.log(this.collectionProducts)
  }

  loadMore() {
    this.visibleCount += 8;
    this.updateVisibleProducts();
  }

  updateVisibleProducts() {
    this.visibleProducts =
      this.filteredProducts.slice(0, this.visibleCount);
  }


  clearFilters() {
    this.selectedSize = '';
    this.selectedColor = '';
    this.selectedCategory = '';

    this.filteredProducts = [...this.collectionProducts];
    this.visibleCount = 12;

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
