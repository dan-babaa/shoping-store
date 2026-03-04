import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Services } from '../../services/services';
import { Hero } from '../../shared/models/Clothe';
import { ProductListComponent } from "../../shared/product-list/product-list";
import { RouterLink } from "@angular/router";
import { NavBarComponent } from '../../nav-bar/nav-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductListComponent, RouterLink, NavBarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {

  private Service = inject(Services);
  private cdr = inject(ChangeDetectorRef); // 👈 important


  heroes: Hero[] = [];
  currentIndex = 0;
  currentHero!: Hero;

  ngOnInit(): void {
    this.heroes = this.Service.getAllHeroes();

    if (this.heroes.length > 0) {
      this.currentHero = this.heroes[0];

      setInterval(() => {
        this.autoSlide();
      }, 3000);
    }
  }

  autoSlide() {
    if (!this.heroes.length) return;

    this.currentIndex++;

    if (this.currentIndex >= this.heroes.length) {
      this.currentIndex = 0;
    }

    this.currentHero = this.heroes[this.currentIndex];

    this.cdr.detectChanges(); // 👈 force UI update
  }

  nextSlide() {
    if (!this.heroes.length) return;

    this.currentIndex++;

    if (this.currentIndex >= this.heroes.length) {
      this.currentIndex = 0;
    }

    this.currentHero = this.heroes[this.currentIndex];

    //this.cdr.detectChanges();
  }

  prevSlide() {
    if (!this.heroes.length) return;

    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = this.heroes.length - 1;
    }

    this.currentHero = this.heroes[this.currentIndex];

    //this.cdr.detectChanges();
  }

}
