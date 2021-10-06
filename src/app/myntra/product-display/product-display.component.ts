import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product.module';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss'],
})
export class ProductDisplayComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) {}

  product!: Product;
  displayImage: boolean = false;
  displayImageSrc: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.product = this.productService.getProduct(data.id);
    });
    if (!this.product) {
      this.router.navigate(['/myntra']);
    }
  }

  gotoMainPage() {
    this.router.navigate(['/myntra']);
  }

  openImage(image: string) {
    this.displayImageSrc = image;
    this.displayImage = true;
  }

  closeImage(){
    this.displayImage = false;
    this.displayImageSrc = '';
  }
}
