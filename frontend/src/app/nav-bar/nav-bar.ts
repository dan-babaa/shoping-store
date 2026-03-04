import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/Auth.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBarComponent {


  private cartService = inject(CartService);
  private authService = inject(AuthService);
  private router = inject(Router);

  username = "username";



  get cartCount() {
    return this.cartService.getTotalQuantity();
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
