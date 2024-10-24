import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  productGuid: any;
  product: any = new Product();

  constructor(private productService: ProductService, 
    private route: ActivatedRoute,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productGuid = params.get('id');
    });

    if(this.productGuid) {
      this.productService.getProductById(this.productGuid).subscribe(product => {
        this.product = product;
      });
    }
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(res => {
      this.router.navigate(['/product-list']);
    });
  }
}
