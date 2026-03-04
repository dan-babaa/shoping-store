import { Injectable } from '@angular/core';
import { Clothing, Hero, User } from '../shared/models/Clothe';
import { CLOTHING_DATA, COLLECTION_DATA, HERO_DATA, USERS } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class Services {

  AllProduct = [
    ...CLOTHING_DATA,
    ...COLLECTION_DATA
  ];

  getAllProducts(): Clothing[] {
    return this.AllProduct;
  }

  getAllHeroes(): Hero[] {
    return HERO_DATA;
  }

  getCollectionBySlug(slug: string) {
    return COLLECTION_DATA.filter(product =>
      product.collectionType
        ?.toLowerCase()
        === slug.toLowerCase()
    );
  }

}
