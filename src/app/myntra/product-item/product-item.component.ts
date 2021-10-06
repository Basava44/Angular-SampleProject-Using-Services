import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.module';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  hover: boolean = false;

  @Input() product!: Product;
  @Input() index!: number;

  mouseHover() {
    this.hover = true;
  }

  mouseOut() {
    this.hover = false;
  }

  productPreview() {
    this.router.navigate(['product',this.index], { relativeTo: this.route });
  }
}
