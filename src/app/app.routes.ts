import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewProductsComponent } from './pages/new-products/new-products.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'newproducts',
        component: NewProductsComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
