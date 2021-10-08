import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product.module';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductServiceService) {}

  hover: boolean = false;

  @Input() product!: Product;
  @Input() index!: number;

  ngOnInit(){
    
  }

  mouseHover() {
    this.hover = true;
  }

  mouseOut() {
    this.hover = false;
  }

  productPreview() {
    this.router.navigate(['product', this.index], { relativeTo: this.route });
  }

  addToWishlist(){
    this.productService.addToWishlist(this.product.id);
  }
}
