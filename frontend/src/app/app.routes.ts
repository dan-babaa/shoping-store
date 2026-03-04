import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CollectionComponent } from './pages/collection/collection';
import { ProductListComponent } from './shared/product-list/product-list';
import { ProductViewComponent } from './pages/product-view/product-view';
import { CartComponent } from './pages/cart/cart';
import { SignupComponent } from './pages/sign-up/sign-up';
import { authGuard } from './Guard/Auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collection/:slug', component: CollectionComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductViewComponent },
  { path: 'cart', component: CartComponent },
  { path: 'signup', component: SignupComponent },
  {
  path: 'profile',
  loadComponent: () =>
    import('./pages/profile/profile').then(m => m.ProfileComponent),
  canActivate: [authGuard]
},
{
  path: 'admin',
  loadChildren: () =>
    import('./Admin/admin.routes').then(m => m.ADMIN_ROUTES)
},

{ path: '**', component: HomeComponent }
];
