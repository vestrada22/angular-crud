import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'products', 
        loadComponent: () => import('./features/product/components/product-list/product-list.component'),
        children: [
            {
                path: 'details/:id',
                title: 'Product Detail',
                loadComponent: () => import('./features/product/components/product-detail/product-detail.component')
            },
            {
                path: 'new',
                title: 'create product',
                loadComponent: () => import('./features/product/components/product-form/product-form.component')
            },
            {
                path: 'edit/:id',
                title: 'update product',
                loadComponent: () => import('./features/product/components/product-form/product-form.component')
            },
        ]
    },
    { path: '', redirectTo: '/products', pathMatch: 'full' }
];
