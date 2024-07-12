import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = 'http://localhost:8081/api/products';

    constructor(private apiService: ApiService) { }

    getAllProducts(): Observable<Product[]> {
        return this.apiService.get<Product[]>(this.apiUrl);
    }

    getProductById(id: number): Observable<Product> {
        return this.apiService.get<Product>(`${this.apiUrl}/${id}`);
    }

    addProduct(product: Product): Observable<Product> {
        return this.apiService.post<Product>(this.apiUrl, product);
    }

    updateProduct(id: number, product: Product): Observable<Product> {
        return this.apiService.put<Product>(`${this.apiUrl}/${id}`, product);
    }

    deleteProduct(id: number) {
        this.apiService.delete(`${this.apiUrl}/${id}`);
    }
}
