import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1001, title: 'Red T-shirt', price: 9.99, quantity: 10 },
    { id: 1002, title: 'White T-shirt', price: 5.49, quantity: 7 },
    { id: 1003, title: 'Blue T-shirt', price: 11.49, quantity: 12 }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    var lastProduct = this.products.reduce(function(prev, current) {
      return prev && prev.id > current.id ? prev : current;
    });

    var productId = 0;

    if(lastProduct === null) {
      productId = 1;
    } else {
      productId = lastProduct.id + 1;
    }

    product.id = productId;

    this.products.push(product);
  }

  getProductById(productId: Number): Product | undefined {
    return this.products.find(p => p.id == productId);
  }

  updateProduct(product: Product): void {
    console.log(product);

    var foundIndex = this.products.findIndex(x => x.id == product.id);
    console.log(foundIndex);

    this.products[foundIndex] = product;
  }
}
