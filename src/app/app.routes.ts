import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'products', 
        loadComponent: () => import('./features/product/components/product-list/product-list.component'),
        children: [
            {
                path: ':id',
                title: 'Product Detail',
                loadComponent: () => import('./features/product/components/product-detail/product-detail.component')
            },
            {
                path: 'new',
                title: 'create product',
                loadComponent: () => import('./features/product/components/product-form/product-form.component')
            }
        ]
    },
    { path: '', redirectTo: '/products', pathMatch: 'full' }
];
