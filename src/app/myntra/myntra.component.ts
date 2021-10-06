import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './product-service.service';
import { Product } from './product.module';

@Component({
  selector: 'app-myntra',
  templateUrl: './myntra.component.html',
  styleUrls: ['./myntra.component.scss'],
})
export class MyntraComponent implements OnInit {
  constructor(private productService: ProductServiceService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
