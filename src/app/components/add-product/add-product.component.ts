import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) {}

  addProduct() {
    console.log(this.product);

    this.productService.addProduct(this.product).subscribe({
      next: (product) => {
        
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.router.navigate(['/product-list']);
      },
    });

    this.product = new Product();
  }
}
