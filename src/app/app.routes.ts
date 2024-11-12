import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewProductsComponent } from './pages/new-products/new-products.component';
import { LoginComponent } from './auth/login/login.component';

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
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
