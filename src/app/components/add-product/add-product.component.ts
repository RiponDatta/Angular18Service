import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product: Product = new Product();

  constructor(private productService: ProductService) {}

  addProduct() {
    console.log(this.product);

    this.productService.addProduct(this.product);

    this.product = new Product();
  }

}
