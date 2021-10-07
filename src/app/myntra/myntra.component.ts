import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from './product-service.service';
import { Product } from './product.module';

@Component({
  selector: 'app-myntra',
  templateUrl: './myntra.component.html',
  styleUrls: ['./myntra.component.scss'],
})
export class MyntraComponent implements OnInit {
  constructor(
    private productService: ProductServiceService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productService.updateProducts.subscribe((data) => {
      console.log(data[0]);
    });
  }

  goToWishlist() {
    this.router.navigate(['wishlist'],{relativeTo: this.route})
  }
  goToBag(){
    this.router.navigate(['bag'], { relativeTo: this.route });
  }
}
