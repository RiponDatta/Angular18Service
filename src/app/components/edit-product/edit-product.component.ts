import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  productId: any;
  product: any = new Product();

  constructor(private productService: ProductService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
    });

    if(this.productId) {
      this.product = this.productService.getProductById(this.productId);
    }
  }

  updateProduct() {
    this.productService.updateProduct(this.product);
  }
}
