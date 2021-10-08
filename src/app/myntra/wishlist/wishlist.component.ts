import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product.module';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  constructor(
    private productService: ProductServiceService,
    private router: Router
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.products = [];
    this.productService.products.map((data: Product) => {
      if (data.wishlist) this.products.push(data);
    });
  }

  remove(id: number) {
    this.productService.addToWishlist(id);
    this.ngOnInit();
  }

  gotoMainPage(){
    this.router.navigate(['/myntra']);
  }
}
