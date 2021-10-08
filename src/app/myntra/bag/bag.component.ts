import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product.module';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss'],
})
export class BagComponent implements OnInit {
  constructor(
    private router: Router,
    private productService: ProductServiceService
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productService.cart;
  }

  gotoMainPage() {
    this.router.navigate(['/myntra']);
  }

  remove(id: number){
    this.productService.products[id].cart = false;
    this.productService.cart = this.productService.cart.filter(
      data => {
        return data.id != id;
      }
    )
    this.ngOnInit();
  }
}
