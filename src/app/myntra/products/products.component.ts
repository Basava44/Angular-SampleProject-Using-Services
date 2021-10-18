import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private productService: ProductServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productService.updateProducts.subscribe((data) => {
      console.log(data[0]);
    });
  }
}
