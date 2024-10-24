import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("https://localhost:8000/api/v2/Product?PageNumber=1&PageSize=5&api-version=2");
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>("https://localhost:8000/api/v2/Product?api-version=2", product);
  }

  getProductById(productGuid: number): Observable<Product> {
    return this.httpClient.get<Product>("https://localhost:8000/api/v2/Product/"+ productGuid +"?api-version=2");
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>("https://localhost:8000/api/v2/Product?api-version=2", product);
  }
}
